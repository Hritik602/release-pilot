'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import FeatureCard from '@/components/features/FeatureCard';

const features = [
  {
    icon: '📝',
    title: 'AI Release Notes',
    description: 'Automatically generate developer, customer, and marketing release notes from commits, PRs, and Jira tickets.',
    status: 'Available Now',
    badge: 'Most Popular',
    link: '/features/release-notes',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: '🎯',
    title: 'Predictive Risk Analysis',
    description: 'Machine learning models analyze code changes, commit history, and team patterns to predict deployment risks.',
    status: 'Available Now',
    badge: 'AI-Powered',
    link: '/features/risk-analysis',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '🔥',
    title: 'Incident Intelligence',
    description: 'Real-time anomaly detection identifies production issues instantly with AI-powered root cause analysis.',
    status: 'Available Now',
    link: '/features/incident-intelligence',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: '📋',
    title: 'Smart Changelog',
    description: 'Automatically maintain a beautiful, categorized changelog that keeps stakeholders informed without manual effort.',
    status: 'Coming Soon',
    badge: 'Beta',
    link: '/features/changelog',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: '📊',
    title: 'Deployment Timeline',
    description: 'Visualize every commit, pull request, code review, deployment, and rollback in one interactive timeline.',
    status: 'Available Now',
    link: '/features/timeline',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: '❤️',
    title: 'Production Health',
    description: 'Real-time monitoring of crash rates, error budgets, performance metrics, and overall system health.',
    status: 'Available Now',
    link: '/features/health',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: '👥',
    title: 'Team Collaboration',
    description: 'See who\'s doing what — commit activity, PR reviews, deployments, and incident responses in a single feed.',
    status: 'Available Now',
    link: '/features/collaboration',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: '📈',
    title: 'AI Weekly Summary',
    description: 'Executive-ready reports summarizing engineering velocity, release quality, incident trends, and team performance.',
    status: 'Available Now',
    badge: 'New',
    link: '/features/summary',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: '🐙',
    title: 'GitHub Integration',
    description: 'Full GitHub integration — commits, PRs, reviews, issues, and actions all connected to your release pipeline.',
    status: 'Available Now',
    link: '/features/github',
    gradient: 'from-gray-600 to-gray-400',
  },
  {
    icon: '🔗',
    title: 'Project Management Sync',
    description: 'Bi-directional sync with Jira, Linear, and other PM tools — tickets become release context automatically.',
    status: 'Available Now',
    link: '/features/pm-sync',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: '💬',
    title: 'Smart Notifications',
    description: 'Intelligent alerts in Slack, Teams, or Discord — only the notifications that matter, when they matter.',
    status: 'Available Now',
    link: '/features/notifications',
    gradient: 'from-green-500 to-blue-500',
  },
  {
    icon: '⚙️',
    title: 'CI/CD Pipeline Connect',
    description: 'Seamless integration with CircleCI, GitHub Actions, GitLab CI, Jenkins, and cloud build systems.',
    status: 'Available Now',
    link: '/features/cicd',
    gradient: 'from-blue-500 to-indigo-500',
  },
];

export default function FeaturesPage() {
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
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Everything You Need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5252ff] to-purple-400">
              Release with Confidence
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            From AI-generated release notes to predictive risk analysis — 
            Release Intelligence gives your engineering team superpowers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/signup" className="bg-[#5252ff] hover:bg-[#4242e5] text-white px-8 py-3.5 rounded-md font-medium transition-all">
              Start Free Trial
            </Link>
            <Link href="/integrations" className="bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-md font-medium transition-all">
              View All Integrations →
            </Link>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Feature Demo */}
        <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
          <div className="bg-gradient-to-r from-[#171a29] to-[#25203b] rounded-3xl p-16 text-center border border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">See Release Intelligence in Action</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Watch how engineering teams use Release Intelligence to ship faster with more confidence.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="w-16 h-16 rounded-full bg-[#5252ff]/20 flex items-center justify-center">
                    <span className="text-3xl">▶</span>
                  </div>
                  <span>Watch Demo Video (Coming Soon)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
          <h2 className="text-3xl font-bold mb-12 text-center">Built for Every Team Size</h2>
          <div className="bg-[#111318] border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="py-5 px-6 font-semibold text-gray-300">Capability</th>
                    <th className="py-5 px-6 font-semibold text-gray-300">Free</th>
                    <th className="py-5 px-6 font-semibold text-gray-300">Pro</th>
                    <th className="py-5 px-6 font-semibold text-gray-300 text-[#5252ff]">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-gray-300">Automated Release Notes</td>
                    <td className="py-4 px-6 text-gray-400">Basic templates</td>
                    <td className="py-4 px-6 text-gray-400">10 AI PRs/mo</td>
                    <td className="py-4 px-6 text-gray-400">Custom AI formatting</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-gray-300">Predictive Risk Scoring</td>
                    <td className="py-4 px-6 text-gray-400">—</td>
                    <td className="py-4 px-6 text-gray-400">Standard</td>
                    <td className="py-4 px-6 text-gray-400">Advanced ML models, custom thresholds</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-gray-300">Deployment Observability</td>
                    <td className="py-4 px-6 text-gray-400">7 Days data</td>
                    <td className="py-4 px-6 text-gray-400">Unlimited</td>
                    <td className="py-4 px-6 text-gray-400">Unlimited & Multi-cloud</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-gray-300">Fast logs & debug data</td>
                    <td className="py-4 px-6 text-gray-400">Basic</td>
                    <td className="py-4 px-6 text-gray-400">Full data</td>
                    <td className="py-4 px-6 text-gray-400">Custom integrations, SOC2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
          <div className="bg-[#111318] border border-white/10 rounded-3xl p-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Release Process?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join 1,000+ engineering teams already using Release Intelligence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/signup" className="bg-[#5252ff] hover:bg-[#4242e5] text-white px-8 py-3.5 rounded-md font-medium transition-all">
                Start Free Trial
              </Link>
              <Link href="/contact" className="bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-md font-medium transition-all">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}