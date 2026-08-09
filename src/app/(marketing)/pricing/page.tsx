'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [teamSize, setTeamSize] = useState(10);
  const [deployments, setDeployments] = useState(5);

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

  const calculateROI = () => {
    // Arbitrary ROI formula for the mockup
    const hoursSaved = (teamSize * deployments * 0.5);
    const moneySaved = hoursSaved * 100; // $100/hr avg dev cost
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(moneySaved);
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 reveal">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Simple Pricing That Scales With Your Team
        </h1>
        <p className="text-gray-400 text-lg mx-auto mb-10">
          All plans include unlimited users, deployments, and core platform features.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button 
            className="w-12 h-6 rounded-full bg-[#5252ff]/20 border border-[#5252ff]/50 relative flex items-center px-1 cursor-pointer transition-all"
            onClick={() => setAnnual(!annual)}
          >
            <div className={`w-4 h-4 rounded-full bg-[#5252ff] absolute transition-all ${annual ? 'right-1' : 'left-1'}`}></div>
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-gray-500'}`}>
            Annually <span className="text-[#5252ff] ml-1">(Save 20%)</span>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="bg-[#111318] border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:border-white/20 transition-all">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">${annual ? '29' : '39'}</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-8">
              For growing teams needing visibility.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> Up to 5 users</li>
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> 1 App project</li>
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> 1 GB Logs / Retention</li>
            </ul>
            <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-lg font-medium transition-colors">
              Start free trial
            </button>
          </div>

          {/* Professional */}
          <div className="bg-[#171a29] border border-[#5252ff] rounded-3xl p-8 flex flex-col h-full transform md:-translate-y-4 shadow-[0_0_40px_rgba(82,82,255,0.15)] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5252ff] text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">${annual ? '99' : '119'}</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-8">
              Unlock the power of routing and intelligence.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> Unlimited App projects</li>
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> AI Release Intelligence</li>
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> Custom Deployment Workflows</li>
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> Priority Support 24/7</li>
            </ul>
            <button className="w-full bg-[#5252ff] hover:bg-[#4242e5] py-3 rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(82,82,255,0.4)]">
              Upgrade Now
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-[#111318] border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:border-white/20 transition-all">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-8">
              Tailored for enterprises at global scale.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> Dedicated Infrastructure</li>
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> SOC2 & SAML Authentication</li>
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> Custom SLAs & Policies</li>
              <li className="flex items-center gap-3 text-sm"><span className="text-[#5252ff]">✓</span> Dedicated Success Engineer</li>
            </ul>
            <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-lg font-medium transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-4xl mx-auto px-6 pb-24 reveal">
        <div className="bg-gradient-to-r from-[#171a29] to-[#25203b] border border-[#5252ff]/30 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-12 shadow-[0_0_30px_rgba(82,82,255,0.1)]">
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-bold mb-2">Estimate Your ROI</h2>
            <p className="text-sm text-gray-400 mb-8">Calculate how much time and money Release Intelligence saves your team.</p>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Avg Engineering Team Size</label>
                  <span className="text-sm font-bold text-[#5252ff]">{teamSize}</span>
                </div>
                <input type="range" min="1" max="100" value={teamSize} onChange={(e) => setTeamSize(parseInt(e.target.value))} className="w-full accent-[#5252ff]" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Avg Deployments / Week</label>
                  <span className="text-sm font-bold text-[#5252ff]">{deployments}</span>
                </div>
                <input type="range" min="1" max="50" value={deployments} onChange={(e) => setDeployments(parseInt(e.target.value))} className="w-full accent-[#5252ff]" />
              </div>
            </div>
          </div>
          
          <div className="bg-[#0b0c10] border border-white/10 rounded-2xl p-8 text-center min-w-[250px]">
            <p className="text-sm text-gray-400 mb-2">Your team saves up to</p>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5252ff] to-purple-400 mb-2">
              {calculateROI()}
            </div>
            <p className="text-xs text-gray-500">per month in dev cycle costs</p>
          </div>
        </div>
      </section>

      {/* Compare Features */}
      <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
        <h2 className="text-3xl font-bold mb-12 text-center">Compare All Features</h2>
        <div className="bg-[#111318] border border-white/10 rounded-2xl overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-6 font-semibold text-gray-300 w-1/4">Core Capabilities</th>
                <th className="py-6 px-6 font-semibold text-center text-gray-300 w-1/4">Starter</th>
                <th className="py-6 px-6 font-semibold text-center text-[#5252ff] w-1/4">Professional</th>
                <th className="py-6 px-6 font-semibold text-center text-gray-300 w-1/4">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 text-gray-300">Release Dashboards</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 text-gray-300">Pull Request Sync</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 text-gray-300">Automated Release Notes</td>
                <td className="py-4 px-6 text-center text-gray-500">—</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 text-gray-300">ML Risk Intelligence</td>
                <td className="py-4 px-6 text-center text-gray-500">—</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 text-gray-300">Custom Workflows</td>
                <td className="py-4 px-6 text-center text-gray-500">Limited</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 text-gray-300">SAML / SSO</td>
                <td className="py-4 px-6 text-center text-gray-500">—</td>
                <td className="py-4 px-6 text-center text-gray-500">—</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 text-gray-300">Dedicated Support</td>
                <td className="py-4 px-6 text-center text-gray-500">—</td>
                <td className="py-4 px-6 text-center text-gray-500">—</td>
                <td className="py-4 px-6 text-center text-[#5252ff]">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ & Guarantee */}
      <section className="max-w-5xl mx-auto px-6 pb-24 reveal grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-white/10 bg-[#111318] rounded-xl p-5">
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="font-semibold text-sm">How does the free trial work?</h4>
                <span className="text-[#5252ff] transform rotate-180">▼</span>
              </div>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                You get full access to the Professional plan for 14 days. No credit card required. At the end of the trial, you can choose to upgrade or seamlessly switch to our free Starter plan.
              </p>
            </div>
            <div className="border border-white/10 bg-[#111318] rounded-xl p-5">
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="font-semibold text-sm">Can I change my plan later?</h4>
                <span className="text-gray-500">▼</span>
              </div>
            </div>
            <div className="border border-white/10 bg-[#111318] rounded-xl p-5">
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="font-semibold text-sm">Do you offer open source discounts?</h4>
                <span className="text-gray-500">▼</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gradient-to-br from-[#171a29] to-[#111318] border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 rounded-full bg-[#5252ff]/20 flex items-center justify-center text-2xl mb-4 border border-[#5252ff]/30 shadow-[0_0_20px_rgba(82,82,255,0.2)]">
              🛡️
            </div>
            <h3 className="font-bold text-lg mb-2">Money-Back Guarantee</h3>
            <p className="text-sm text-gray-400 mb-6">
              Not satisfied? We offer a 30-day no-questions-asked refund policy on all new subscriptions.
            </p>
            <button className="text-sm font-semibold text-[#5252ff] hover:text-[#4242e5]">
              Read our full policy →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
