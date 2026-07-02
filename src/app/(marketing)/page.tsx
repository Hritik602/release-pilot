'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function LandingPage() {
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
        <div className="min-h-screen bg-[#0b0c10] text-white font-sans selection:bg-[#5252ff] selection:text-white">
            
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
                            <span className="text-[#5252ff]">●</span> Release Intelligence
                        </Link>
                        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
                            <Link href="#" className="hover:text-white transition-colors">Features</Link>
                            <Link href="#" className="hover:text-white transition-colors">Solutions</Link>
                            <Link href="#" className="hover:text-white transition-colors">Integrations</Link>
                            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
                            <Link href="#" className="hover:text-white transition-colors">Customers</Link>
                            <Link href="#" className="hover:text-white transition-colors">Resources</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Sign In</Link>
                        <Link href="#" className="bg-[#5252ff] hover:bg-[#4242e5] text-white px-4 py-2 rounded-md font-medium transition-all">Start Free Trial</Link>
                    </div>
                </div>
            </nav>

            <main className="pt-32">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 reveal">
                    <div>
                        <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 flex items-center gap-2">
                            <span className="text-[#5252ff]">&lt;</span> Introducing a unified release intelligence <span className="text-[#5252ff]">&gt;</span>
                        </p>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            Ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Faster.</span><br/>
                            Release <span className="text-[#5252ff]">Smarter.</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                            AI that understands every deployment before production does.
                            Eliminate release anxiety with automated risk analysis and
                            intelligent release notes.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#" className="bg-[#5252ff] hover:bg-[#4242e5] text-white px-6 py-3 rounded-md font-medium transition-all text-sm">Start Free Trial</Link>
                            <Link href="#" className="bg-transparent border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-md font-medium transition-all text-sm">Book Demo</Link>
                        </div>
                    </div>
                    
                    {/* Hero Graphic / Dashboard Mockup */}
                    <div className="relative group perspective-1000">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#5252ff]/20 to-purple-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                        <div className="relative bg-[#111318] border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden transform transition-all duration-500 hover:rotate-y-2 hover:rotate-x-2">
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-xs text-gray-400 font-mono">MOBILE DEVOPS DEFINED</div>
                                <div className="w-4 h-4 bg-white/10 rounded-sm"></div>
                            </div>
                            <div className="flex items-center justify-center py-8">
                                <div className="relative w-48 h-48 rounded-full border-[8px] border-white/5 flex items-center justify-center pulse-glow">
                                    <div className="absolute -inset-2 border-[8px] border-[#38bdf8] border-t-transparent border-r-transparent rounded-full spin-slow"></div>
                                    <div className="absolute -inset-2 border-[8px] border-purple-500 border-b-transparent border-l-transparent rounded-full spin-reverse"></div>
                                    <div className="text-center z-10">
                                        <div className="text-[10px] text-gray-400 font-medium tracking-widest mb-1">READINESS SCORE</div>
                                        <div className="text-5xl font-bold text-white mb-1">92%</div>
                                        <div className="text-xs text-[#38bdf8] font-medium">READY TO SHIP</div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <div className="text-xs text-gray-400 mb-2">Deploy coverage</div>
                                    <div className="flex items-end gap-1 h-8">
                                        <div className="w-1/4 bg-white/20 h-1/3 rounded-t-sm"></div>
                                        <div className="w-1/4 bg-white/40 h-2/3 rounded-t-sm"></div>
                                        <div className="w-1/4 bg-white/60 h-full rounded-t-sm"></div>
                                        <div className="w-1/4 bg-[#5252ff] h-full rounded-t-sm"></div>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg flex flex-col justify-between">
                                    <div className="text-xs text-gray-400">Security Scan</div>
                                    <div className="flex items-center gap-2 text-sm text-green-400 font-medium">
                                        <span className="w-2 h-2 rounded-full bg-green-400"></span> Clean Build
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Marquee (Integrations) */}
                <section className="py-8 border-y border-white/5 overflow-hidden flex items-center whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500 reveal">
                    <div className="flex gap-16 animate-[marquee_30s_linear_infinite] px-8 text-gray-400 font-medium tracking-wide">
                        <span>GitHub</span>
                        <span>Slack</span>
                        <span>Atlassian</span>
                        <span>Jira</span>
                        <span>Linear</span>
                        <span>Sentry</span>
                        <span>Firebase</span>
                        <span>AWS</span>
                        <span>Azure</span>
                        <span>Datadog</span>
                        <span>CircleCI</span>
                        <span>GitLab</span>
                        {/* Duplicate for seamless loop */}
                        <span>GitHub</span>
                        <span>Slack</span>
                        <span>Atlassian</span>
                        <span>Jira</span>
                    </div>
                </section>

                {/* Release Bottlenecks */}
                <section className="py-24 max-w-7xl mx-auto px-6 reveal">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Release Bottlenecks Stop Here.</h2>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">Engineering teams aren't struggling to write code. They're struggling to release it safely.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[{
                            title: "Manual Release Notes", desc: "Developers waste hours every week scouring commit logs and PRs to document changes for stakeholders."
                        }, {
                            title: "Unknown Deployment Risk", desc: "Deploying with 'fingers crossed' because of hidden dependencies or massive change-sets you can't process."
                        }, {
                            title: "Integration Drift", desc: "Deploy and Production drift apart, making testing environments unreliable for true release confidence."
                        }, {
                            title: "Context Switching",
                            desc: "PMs and CS constantly pestering engineers for 'What's in this release?' and 'When is it going live?'"
                        }, {
                            title: "Fragmented Data",
                            desc: "CI/CD logs, Jira tickets, and GitHub PRs live in separate silos, making a cohesive release story impossible."
                        }, {
                            title: "Incident Blame Game",
                            desc: "Post-mortems take days because identifying which specific change triggered an incident is a manual hunt."
                        }].map((item, i) => (
                            <div key={i} className="bg-[#111318] border border-white/5 rounded-xl p-8 hover:bg-[#151820] transition-colors cursor-pointer group">
                                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* One Intelligent Platform */}
                <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
                    <div className="relative group">
                         <div className="absolute -inset-4 bg-gradient-to-br from-[#5252ff]/10 to-transparent blur-2xl rounded-full"></div>
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB56mSdXdzaT7BmFb6pwVINav7wjRdvl-0jUFy4vk6beIGoIfREEhQWYHCly-rlEU21pxMucB-z0fNmeIEXqvxTpvI7K8MBnxZmwA_3ek2MrdRlUlp2QhmjbJ_ZCNFJB7p2s8A-v9iW0lBmDHHhCcLcUPH53PxbqwmRUnYgMq6wUEhXtOLa-Tn2XyufWlRHYKNvXkDne06NcUvi-onb7WkyWvTVjHt-r2B8uW_aVgPIB9KWVL9HNFMatpf0abhgJJz4n9svrMYLbrY" alt="Platform Dashboard" className="rounded-xl border border-white/10 shadow-2xl relative z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-10">One Intelligent Platform.</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="text-green-400 mt-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Automated Release Notes</h3>
                                    <p className="text-gray-400 text-sm">AI synthesizes PRs into stakeholder-ready summaries in seconds.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-green-400 mt-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Risk Impact Analysis</h3>
                                    <p className="text-gray-400 text-sm">Visualize exactly which components are affected by a deployment.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-green-400 mt-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Unified Timeline</h3>
                                    <p className="text-gray-400 text-sm">Every commit, PR, and CI run in one high-fidelity view.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-green-400 mt-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Integration Sync</h3>
                                    <p className="text-gray-400 text-sm">Bridges the gap between Jira, GitHub, and Slack automatically.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium border border-white/20 px-6 py-2.5 rounded-full hover:bg-white/5 transition-colors">
                                Explore All Features <span className="text-lg">→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-20 border-y border-white/5 reveal">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-5xl lg:text-6xl font-light text-[#a8b1ff] mb-4">95%</div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Less Manual Work</div>
                        </div>
                        <div>
                            <div className="text-5xl lg:text-6xl font-light text-[#a8b1ff] mb-4">80%</div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Faster Investigation</div>
                        </div>
                        <div>
                            <div className="text-5xl lg:text-6xl font-light text-[#a8b1ff] mb-4">70%</div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Fewer Compromises</div>
                        </div>
                        <div>
                            <div className="text-5xl lg:text-6xl font-light text-[#a8b1ff] mb-4">10x</div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Visibility</div>
                        </div>
                    </div>
                </section>

                {/* Built for the Modern DevOps Stack */}
                <section className="py-32 max-w-7xl mx-auto px-6 reveal">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Built for the Modern DevOps Stack.</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: "description", color: "text-blue-400", title: "Release Notes", desc: "Turn complex commit histories into beautiful, readable release summaries for any audience." },
                            { icon: "insights", color: "text-purple-400", title: "Risk Analysis", desc: "Identify high-impact changes and potential regressions points before they hit production." },
                            { icon: "timeline", color: "text-green-400", title: "Deployment Timeline", desc: "The source of truth for every deployment event across your entire cloud infrastructure." },
                            { icon: "analytics", color: "text-yellow-400", title: "Insight Intelligence", desc: "Automatically cross-reference events with observability signals to find the root cause." },
                            { icon: "hub", color: "text-indigo-400", title: "Smart Integrations", desc: "Native connections for the tools you already use, from GitHub and GitLab to Slack and Jira." },
                            { icon: "mark_email_read", color: "text-pink-400", title: "A-Ready Summary", desc: "A bird's-eye view of your engineering velocity and release health delivered to your inbox." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#111318] border border-white/5 rounded-xl p-8 hover:bg-[#151820] transition-colors cursor-pointer group hover:-translate-y-1">
                                <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dashboard Image Embed */}
                <section className="pb-32 px-6 max-w-6xl mx-auto reveal">
                    <div className="bg-[#151820] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative">
                        {/* Fake Browser header */}
                        <div className="bg-[#0b0c10] px-4 py-3 flex items-center border-b border-white/10 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="inline-block bg-white/5 text-gray-400 text-xs px-24 py-1.5 rounded-md font-mono">
                                    app.releaseintelligence.ai/dashboard
                                </div>
                            </div>
                        </div>
                        {/* Fake Dashboard Content */}
                        <div className="flex h-[400px]">
                            {/* Sidebar */}
                            <div className="w-48 bg-[#0b0c10]/50 border-r border-white/10 p-4 flex flex-col gap-2">
                                <div className="bg-white/10 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">dashboard</span> Dashboard</div>
                                <div className="text-gray-400 px-3 py-2 rounded-md text-sm hover:bg-white/5 flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">analytics</span> User Analysis</div>
                                <div className="text-gray-400 px-3 py-2 rounded-md text-sm hover:bg-white/5 flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">description</span> Release Notes</div>
                                <div className="text-gray-400 px-3 py-2 rounded-md text-sm hover:bg-white/5 flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">history</span> History</div>
                                <div className="text-gray-400 px-3 py-2 rounded-md text-sm hover:bg-white/5 flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">settings</span> Settings</div>
                            </div>
                            {/* Main area */}
                            <div className="flex-1 p-8">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="font-bold text-lg">Release Overview</h3>
                                    <button className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-2 transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">add</span> Create New Release
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 gap-6 mb-8">
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Active Releases</div>
                                        <div className="text-3xl font-bold">12</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Pending Fixes</div>
                                        <div className="text-3xl font-bold text-yellow-500">2</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Team Velocity</div>
                                        <div className="text-3xl font-bold text-green-400">+18%</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-8 flex items-center justify-center h-40 text-gray-500 font-mono text-sm border-dashed">
                                    visualizing release graph...
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-32 max-w-6xl mx-auto px-6 reveal">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Simple Pricing for Growing Teams.</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Starter */}
                        <div className="bg-[#111318] border border-white/10 rounded-xl p-8 hover:border-white/30 transition-all flex flex-col">
                            <div className="text-sm text-gray-400 font-medium mb-2">Starter</div>
                            <div className="mb-6"><span className="text-4xl font-bold">$0</span><span className="text-gray-400 text-sm"> /forever</span></div>
                            <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> 3 team members</li>
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> 1 repository</li>
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> Manual release notes</li>
                            </ul>
                            <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors">Choose Starter</button>
                        </div>
                        
                        {/* Professional */}
                        <div className="bg-[#111318] border border-[#5252ff] rounded-xl p-8 relative transform md:-translate-y-4 flex flex-col shadow-2xl shadow-[#5252ff]/10">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5252ff] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
                            <div className="text-sm text-[#a8b1ff] font-medium mb-2">Professional</div>
                            <div className="mb-6"><span className="text-4xl font-bold">$99</span><span className="text-gray-400 text-sm"> /mo</span></div>
                            <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> Unlimited members</li>
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> Unlimited repositories</li>
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> AI Release Notes</li>
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> Risk Analysis</li>
                            </ul>
                            <button className="w-full py-3 bg-[#5252ff] hover:bg-[#4242e5] rounded-lg text-sm font-medium transition-colors text-white shadow-lg">Choose Professional</button>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-[#111318] border border-white/10 rounded-xl p-8 hover:border-white/30 transition-all flex flex-col">
                            <div className="text-sm text-gray-400 font-medium mb-2">Enterprise</div>
                            <div className="mb-6"><span className="text-4xl font-bold">Custom</span></div>
                            <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> SSO & SAML</li>
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> 24/7 Priority Support</li>
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> Dedicated Success Manager</li>
                                <li className="flex gap-3 items-center"><span className="text-green-500 text-lg">✓</span> Custom Integrations</li>
                            </ul>
                            <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors">Contact Sales</button>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-24 max-w-6xl mx-auto px-6 reveal">
                    <div className="bg-gradient-to-r from-[#171a29] to-[#25203b] border border-white/10 rounded-3xl p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Every Release Tells a Story.<br/>Understand it before production.</h2>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto relative z-10 text-lg">Join 1,000+ engineering teams shipping with absolute confidence and zero anxiety.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Link href="#" className="bg-[#a8b1ff] hover:bg-[#c2c9ff] text-[#0b0c10] px-8 py-3.5 rounded-lg font-bold transition-all">Get Started For Free</Link>
                            <Link href="#" className="bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-lg font-bold transition-all">Talk to an Expert</Link>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#0b0c10] pt-20 pb-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight mb-4">
                            <span className="text-[#5252ff]">●</span> Release Intelligence
                        </Link>
                        <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                            Building the future of software delivery and engineering intelligence.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">𝕏</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">in</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6">Solutions</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Mobile Teams</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Microservices</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 gap-4">
                    <div>© 2024 Release Intelligence. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                        <a href="#" className="hover:text-gray-300">Cookie Settings</a>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-\\[marquee_30s_linear_infinite\\] {
                    animation: marquee 30s linear infinite;
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
                .spin-reverse {
                    animation: spin-reverse 4s linear infinite;
                }
                .pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite alternate;
                }
                @keyframes pulse-glow {
                    from { box-shadow: 0 0 10px rgba(56, 189, 248, 0.2), inset 0 0 10px rgba(56, 189, 248, 0.2); }
                    to { box-shadow: 0 0 30px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(168, 85, 247, 0.4); }
                }
            `}</style>
        </div>
    );
}
