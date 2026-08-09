import React from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  status: string;
  badge?: string;
  link: string;
  gradient: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  status,
  badge,
  link,
  gradient
}: FeatureCardProps) {
  return (
    <Link href={link} className="block h-full group">
      <div className={`bg-[#111318] border border-white/10 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:border-transparent relative overflow-hidden group-hover:-translate-y-1`}>
        {/* Hover Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
        
        {/* Glow border on hover */}
        <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-white/10 transition-colors duration-300 z-10 pointer-events-none"></div>

        <div className="flex justify-between items-start mb-6 relative z-20">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl border border-white/10">
            {icon}
          </div>
          {badge && (
            <span className="text-xs font-bold px-2 py-1 rounded bg-[#5252ff]/20 text-[#5252ff] border border-[#5252ff]/30">
              {badge}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 relative z-20">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed relative z-20">
          {description}
        </p>
        
        <div className="mt-auto flex items-center justify-between text-xs font-medium border-t border-white/10 pt-4 relative z-20">
          <span className={status === 'Coming Soon' ? 'text-amber-400' : 'text-emerald-400'}>
            {status}
          </span>
          <span className="text-white/40 group-hover:text-white transition-colors flex items-center gap-1">
            Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
