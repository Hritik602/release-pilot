'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Version Control', icon: '🐙', count: 12 },
  { name: 'Project Mgmt', icon: '📋', count: 8 },
  { name: 'Communication', icon: '💬', count: 15 },
  { name: 'Monitoring', icon: '📈', count: 24 },
  { name: 'CI/CD', icon: '⚙️', count: 18 },
  { name: 'Security', icon: '🔒', count: 9 },
];

const integrations = [
  {
    name: 'GitHub',
    type: 'Version Control',
    icon: '🐙',
    description: 'Connect your source code to deployments and bring release context directly into your pull requests and workflow.',
    features: ['Sync commits to deployments', 'Commit-level risk analysis'],
    popular: true,
  },
  {
    name: 'Jira',
    type: 'Project Management',
    icon: '📋',
    description: 'Connect tickets to deployments. See the status of every issue in a big routing deployment workflow.',
    features: ['Automated status sync', 'Advanced release notes'],
    popular: true,
  },
  {
    name: 'Slack',
    type: 'Communication',
    icon: '💬',
    description: 'Receive real-time alerts and release updates in your team\'s communication channels instantly.',
    features: ['Instant deployment alerts', 'Incident notifications'],
    popular: true,
  },
  // Add a few more to flesh out the catalog
  {
    name: 'GitLab',
    type: 'Version Control',
    icon: '🦊',
    description: 'Seamlessly integrate GitLab repositories and pipelines into your centralized release intelligence dashboard.',
    features: ['Pipeline visibility', 'Merge request tracking'],
    popular: false,
  },
  {
    name: 'Datadog',
    type: 'Monitoring',
    icon: '🐶',
    description: 'Correlate deployments with application performance metrics to automatically identify risky releases.',
    features: ['Error rate tracking', 'Performance impact scoring'],
    popular: false,
  },
  {
    name: 'PagerDuty',
    type: 'Communication',
    icon: '🚨',
    description: 'Trigger incidents based on deployment health and automatically attach release context to on-call alerts.',
    features: ['Automated incidents', 'Release context injection'],
    popular: false,
  }
];

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState('Most Popular');

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

  const filteredIntegrations = activeTab === 'Most Popular' 
    ? integrations.filter(i => i.popular) 
    : integrations;

  return (
    <main className="pt-32 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 reveal">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6">
          <span className="text-[#5252ff]">●</span> 80+ Supported Tools
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Connect Your Entire Tool Stack
        </h1>
        <p className="text-gray-400 text-lg mx-auto mb-10 max-w-2xl">
          Release Intelligence plays nice with the tools you already use. Connect your entire workflow—from code to deployment—in seconds.
        </p>
      </section>

      {/* Catalog Search & Filters */}
      <section className="max-w-7xl mx-auto px-6 mb-12 reveal">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-6">
          <div className="relative w-full md:w-96">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Search integrations..." 
              className="w-full bg-[#111318] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-[#5252ff] transition-colors"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {['Most Popular', 'Project Management', 'Communication', 'All'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab 
                    ? 'bg-[#5252ff] text-white' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration, i) => (
            <div key={i} className="bg-[#111318] border border-white/10 rounded-2xl p-8 hover:border-[#5252ff]/50 transition-all flex flex-col group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl border border-white/10 group-hover:bg-[#5252ff]/10 transition-colors">
                    {integration.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{integration.name}</h3>
                    <span className="text-xs text-[#5252ff] font-medium tracking-wider uppercase">{integration.type}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {integration.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {integration.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-gray-500 text-xs">☑</span> {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-white/5 hover:bg-[#5252ff] hover:border-[#5252ff] border border-white/10 py-2.5 rounded-lg font-medium text-sm transition-all duration-300">
                Connect Integration
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Browse Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold">Browse Categories</h2>
          <button className="text-sm text-[#5252ff] font-medium hover:text-[#4242e5]">View all categories →</button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, i) => (
            <div key={i} className="bg-[#111318] border border-white/10 rounded-xl p-6 text-center hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
              <h4 className="font-semibold text-sm mb-1">{category.name}</h4>
              <p className="text-xs text-gray-500">{category.count} apps</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
        <div className="bg-gradient-to-r from-[#171a29] to-[#25203b] border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't see your tool?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            We're constantly adding new integrations. Let us know what you need or use our open API and webhooks to build your own.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Request an Integration
            </button>
            <button className="bg-transparent border border-[#5252ff]/50 hover:border-[#5252ff] text-[#5252ff] hover:text-white hover:bg-[#5252ff]/10 px-6 py-3 rounded-md font-medium transition-colors">
              View API Documentation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
