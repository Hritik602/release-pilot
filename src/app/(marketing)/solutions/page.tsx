'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const solutions = [
  {
    icon: '🚀',
    title: 'Startups',
    description: 'Deploy fast. Stay nimble. Release a high quality product and grow your engineering team.',
    bullets: ['Fast deployment times', 'Affordable & scalable'],
  },
  {
    icon: '👥',
    title: 'Development Teams',
    description: 'Core Platform Teams. Your core code ships safely and predictably without breaking the business.',
    bullets: ['Team synchronization', 'Review Workflows'],
  },
  {
    icon: '🏢',
    title: 'Enterprise',
    description: 'Compliance, features, scale and performance managed through a unified platform to elevate global workflows.',
    bullets: ['Global deployments', 'SOC2 and security'],
  },
  {
    icon: '👤',
    title: 'Individuals',
    description: 'We support Open Source! 100% free offering across AI tools and core platform for individual creators.',
    bullets: ['100% Free forever', 'No credit card needed'],
  },
];

const stories = [
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    title: "Core Platform Releases in 'Version 1'",
    description: '"Release Intelligence automatically handles risk analysis and release notes, giving our team confidence."',
    company: 'TechCorp',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    title: "Scaling 100x Microservices",
    description: '"Tracking releases across hundreds of microservices is impossible. Release Intelligence made it effortless."',
    company: 'FinServe',
  },
  {
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
    title: "AI Code Generation & CI/CD",
    description: '"Our AI tools generated code rapidly, but deploying was risky. Now we have automatic CI/CD security checks."',
    company: 'AI Innovators',
  },
];

export default function SolutionsPage() {
  const [teamSize, setTeamSize] = useState(10);
  const [cloudScale, setCloudScale] = useState(30);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 text-center mb-24 reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-[#5252ff] uppercase mb-6">Solutions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Release Intelligence for <br className="hidden md:block"/> Every Engineering Team
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Whether you are an individual developer, a startup, or an enterprise team — we've built a platform tailored for your scale.
          </p>
        </section>

        {/* Solutions Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, i) => (
              <div key={i} className="bg-[#111318] border border-white/10 p-6 rounded-2xl hover:border-[#5252ff]/50 transition-colors flex flex-col h-full">
                <div className="text-3xl mb-4 bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-grow">{solution.description}</p>
                <ul className="space-y-2 mt-auto pt-4 border-t border-white/10">
                  {solution.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="text-[#5252ff] text-xs">✓</span> {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Finder Tool */}
        <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
          <div className="bg-gradient-to-br from-[#111318] to-[#1a1c29] border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8">Not sure which one fits?</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gray-400 mb-8">Adjust the sliders to find the best plan for your team size and infrastructure needs.</p>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Team Size</label>
                      <span className="text-sm text-[#5252ff] font-bold">{teamSize} Engineers</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" max="1000" 
                      value={teamSize}
                      onChange={(e) => setTeamSize(parseInt(e.target.value))}
                      className="w-full accent-[#5252ff]"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Cloud Scaling Score</label>
                      <span className="text-sm text-[#5252ff] font-bold">{cloudScale} / 100</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" max="100" 
                      value={cloudScale}
                      onChange={(e) => setCloudScale(parseInt(e.target.value))}
                      className="w-full accent-[#5252ff]"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0b0c10] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5252ff]/20 blur-[50px] rounded-full"></div>
                
                <h3 className="text-xl font-bold mb-2">
                  {teamSize < 10 ? 'Individuals / Startups' : teamSize < 100 ? 'Development Teams' : 'Enterprise'}
                </h3>
                <p className="text-sm text-gray-400 mb-8">
                  Perfect for {teamSize < 10 ? 'small teams launching early stage products' : teamSize < 100 ? 'growing teams requiring synchronized deployments' : 'large organizations needing compliance and scale'}.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-sm text-gray-400">Estimated Time Saved</span>
                    <span className="font-bold">{teamSize < 10 ? '15' : teamSize < 100 ? '45' : '120+'} hours / wk</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-sm text-gray-400">Visibility Improvement</span>
                    <span className="font-bold text-[#5252ff]">+{teamSize < 10 ? '45%' : teamSize < 100 ? '60%' : '85%'}</span>
                  </div>
                </div>
                
                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-lg font-medium transition-colors">
                  Compare features
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-400">See how engineering teams run on Release Intelligence.</p>
            </div>
            <Link href="#" className="hidden md:flex text-sm text-[#5252ff] hover:text-[#4242e5] items-center gap-2 font-medium">
              See All Customer Stories →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, i) => (
              <div key={i} className="bg-[#111318] border border-white/10 rounded-2xl overflow-hidden group cursor-pointer hover:border-[#5252ff]/50 transition-colors flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0b0c10]/40 group-hover:bg-transparent transition-colors z-10"></div>
                  {/* We use standard img for simplicity here to avoid Next.js Image config issues with external URLs, but in production we'd use unoptimized next/image or configure domains */}
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded border border-white/10 uppercase tracking-wider">
                    {story.company}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">{story.description}</p>
                  <div className="text-sm font-medium text-[#5252ff] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Read Story <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Bottom CTA */}
        <section className="max-w-3xl mx-auto px-6 pb-24 text-center reveal">
          <h2 className="text-3xl font-bold mb-4">Find your solution today.</h2>
          <p className="text-gray-400 mb-8">
            Join 1,000+ engineering teams already using Release Intelligence.
            Start your free 14-day trial now.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/signup" className="bg-[#5252ff] hover:bg-[#4242e5] text-white px-8 py-3.5 rounded-md font-medium transition-all">
              Start Free Trial
            </Link>
            <Link href="/contact" className="bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-md font-medium transition-all">
              Talk to Sales
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
