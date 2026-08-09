'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const getLinkClass = (path: string) => {
        const baseClass = "hover:text-white transition-colors py-5 border-b-2";
        const activeClass = "text-white border-[#5252ff]";
        const inactiveClass = "border-transparent";
        return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8 h-full">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
                        <span className="text-[#5252ff]">●</span> Release Intelligence
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-sm text-gray-300 h-full">
                        <Link href="/features" className={getLinkClass('/features')}>Features</Link>
                        <Link href="/solutions" className={getLinkClass('/solutions')}>Solutions</Link>
                        <Link href="/integrations" className={getLinkClass('/integrations')}>Integrations</Link>
                        <Link href="/pricing" className={getLinkClass('/pricing')}>Pricing</Link>
                        <Link href="#" className={getLinkClass('#customers')}>Customers</Link>
                        <Link href="#" className={getLinkClass('#resources')}>Resources</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Sign In</Link>
                    <Link href="#" className="bg-[#5252ff] hover:bg-[#4242e5] text-white px-4 py-2 rounded-md font-medium transition-all">Start Free Trial</Link>
                </div>
            </div>
        </nav>
    );
}
