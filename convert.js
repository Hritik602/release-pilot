const fs = require('fs');

let html = fs.readFileSync('downloaded_html.html', 'utf8');

// Extract body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
    console.error('Body not found');
    process.exit(1);
}

let bodyHtml = bodyMatch[1];

// HTML to JSX conversions
bodyHtml = bodyHtml.replace(/class=/g, 'className=');
bodyHtml = bodyHtml.replace(/for=/g, 'htmlFor=');
bodyHtml = bodyHtml.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

// Close self-closing tags
const selfClosingTags = ['img', 'input', 'br', 'hr'];
selfClosingTags.forEach(tag => {
    const regex = new RegExp('<(' + tag + ')([^>]*?)(?<!/)>', 'g');
    bodyHtml = bodyHtml.replace(regex, '<$1$2/>');
});

// Remove <script> tag for tailwind-config from bodyHtml if present
bodyHtml = bodyHtml.replace(/<script[^>]*>[\s\S]*?<\/script>/g, (match) => {
    if (match.includes('hero-canvas')) return match; // Keep the webgl script for the next step
    return '';
});

// Extract WebGL script
const scriptMatch = bodyHtml.match(/<script>([\s\S]*?)<\/script>/);
let webglScript = '';
if (scriptMatch) {
    webglScript = scriptMatch[1];
    bodyHtml = bodyHtml.replace(scriptMatch[0], '');
}

// Fix style in webgl script if any
// Also convert the hero canvas script
if (webglScript) {
    webglScript = webglScript.replace('document.getElementById(\'hero-canvas\')', 'canvasRef.current');
}

// Extract style
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const styleContent = styleMatch ? styleMatch[1] : '';

// Handle style tags in html to JSX format style={{...}}
// For style="color: red", we will leave it as is or remove it. We don't have inline styles in the downloaded html except maybe display:none. There aren't any inline styles based on the preview.

const pageContent = `'use client';
import React, { useEffect, useRef } from 'react';

export default function LandingPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        ${webglScript.replace(/const canvas = /g, 'const canvas = ')}
    }, []);

    return (
        <div className="font-body-md text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
            ${bodyHtml.replace('id="hero-canvas"', 'id="hero-canvas" ref={canvasRef}')}
        </div>
    );
}
`;

fs.writeFileSync('src/app/(marketing)/page.tsx', pageContent);

if (styleContent) {
    let globals = fs.readFileSync('src/app/globals.css', 'utf8');
    if (!globals.includes('.bento-grid')) {
        fs.appendFileSync('src/app/globals.css', '\n' + styleContent);
    }
}

console.log('Conversion successful');
