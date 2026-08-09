import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                <div className="lg:col-span-2">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight mb-6 text-white">
                        <span className="text-[#5252ff]">●</span> Release Intelligence
                    </Link>
                    <p className="text-gray-400 text-sm max-w-sm">
                        The unified release intelligence platform that gives engineering teams the confidence to ship faster and smarter.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">𝕏</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">in</a>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold mb-6 text-white">Product</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                        <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                        <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-6 text-white">Solutions</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/solutions" className="hover:text-white transition-colors">Enterprise</Link></li>
                        <li><Link href="/solutions" className="hover:text-white transition-colors">Mobile Teams</Link></li>
                        <li><Link href="/solutions" className="hover:text-white transition-colors">Microservices</Link></li>
                        <li><Link href="/solutions" className="hover:text-white transition-colors">Compliance</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-6 text-white">Resources</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 gap-4">
                <div>© 2024 Release Intelligence. All rights reserved.</div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300">Terms of Service</a>
                    <a href="#" className="hover:text-gray-300">Cookie Settings</a>
                </div>
            </div>
        </footer>
    );
}
