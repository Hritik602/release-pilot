import React from 'react';

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-xl pb-24 px-gutter overflow-hidden gradient-mesh">
        <div className="max-w-container_max_width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-lg z-10">
            <div className="inline-flex items-center gap-sm px-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed border border-outline-variant w-fit">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">v2.4 is live</span>
            </div>
            <h1 className="font-display text-[48px] md:text-[64px] leading-[1.1] text-primary tracking-tight">
              Ship mobile releases with <span className="text-primary-container">100% confidence.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              The release readiness platform that connects your CI/CD, GitHub, Slack, and QA signals into a single source of truth for Engineering Managers.
            </p>
            <div className="flex flex-wrap gap-md mt-sm">
              <button className="px-xl py-lg bg-primary text-on-primary font-medium rounded-lg text-body-md hover:shadow-lg active:scale-[0.98] transition-all">
                Start Free Trial
              </button>
              <button className="px-xl py-lg bg-white border border-outline-variant text-primary font-medium rounded-lg text-body-md hover:bg-surface-container-low transition-all">
                Book a Demo
              </button>
            </div>
          </div>
          {/* Abstract UI Hero Asset */}
          <div className="relative group hidden md:block">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
              <div className="bg-surface-container h-8 border-b border-outline-variant flex items-center px-md gap-base">
                <div className="w-2 h-2 rounded-full bg-error"></div>
                <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></div>
                <div className="w-2 h-2 rounded-full bg-secondary-fixed"></div>
                <div className="ml-auto flex gap-sm">
                  <div className="w-12 h-1 rounded bg-outline-variant"></div>
                  <div className="w-12 h-1 rounded bg-outline-variant"></div>
                </div>
              </div>
              <div className="p-lg">
                <div className="flex justify-between items-center mb-xl">
                  <div className="flex flex-col gap-xs">
                    <span className="font-label-sm text-on-surface-variant">CURRENT RELEASE</span>
                    <span className="font-headline-md text-primary">v4.12.0 - Stable</span>
                  </div>
                  <div className="flex gap-sm">
                    <div className="px-sm py-1 bg-green-100 text-green-700 text-label-sm rounded border border-green-200">PASSING</div>
                    <div className="px-sm py-1 bg-surface-container text-on-surface-variant text-label-sm rounded border border-outline-variant">82% QA COVERAGE</div>
                  </div>
                </div>
                {/* Mock Data Visualization */}
                <div className="flex flex-col gap-md">
                  <div className="h-12 w-full bg-surface-container-low rounded-lg border border-outline-variant flex items-center px-md justify-between">
                    <div className="flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary">hub</span>
                      <span className="text-body-sm font-medium">Integration: GitHub Actions</span>
                    </div>
                    <div className="w-32 h-1.5 bg-outline-variant rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="h-12 w-full bg-surface-container-low rounded-lg border border-outline-variant flex items-center px-md justify-between">
                    <div className="flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary">psychology</span>
                      <span className="text-body-sm font-medium">AI Readiness Score</span>
                    </div>
                    <span className="text-headline-md font-bold text-primary">94/100</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Secondary Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-primary-container text-white p-lg rounded-xl shadow-xl z-20 border border-on-primary-fixed-variant hidden sm:block">
              <div className="flex items-center gap-md mb-md">
                <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <div>
                  <p className="text-label-sm opacity-70">AUTO-APPROVAL</p>
                  <p className="text-body-md font-bold">Enabled for v4.12.1</p>
                </div>
              </div>
              <div className="h-1 w-full bg-on-primary-fixed-variant rounded">
                <div className="h-full w-2/3 bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-xl border-y border-outline-variant bg-white">
        <div className="max-w-container_max_width mx-auto px-gutter text-center">
          <p className="font-label-sm text-on-surface-variant uppercase tracking-[0.2em] mb-lg">Trusted by high-performance engineering teams</p>
          <div className="flex flex-wrap justify-center items-center gap-xl md:gap-[80px] opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-headline-md tracking-tighter italic">VECTA</span>
            <span className="font-headline-md font-light">SKYLINE</span>
            <span className="font-headline-md font-extrabold">BOLT</span>
            <span className="font-headline-md">ORBITAL</span>
            <span className="font-headline-md font-mono">CODEBASE</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-gutter max-w-container_max_width mx-auto">
        <div className="text-center mb-24 max-w-2xl mx-auto flex flex-col gap-md">
          <h2 className="font-display text-[32px] md:text-[40px] text-primary">Everything you need to ship, <br className="hidden md:block"/>minus the release day stress.</h2>
          <p className="text-on-surface-variant text-body-lg">Stop juggling Slack threads and spreadsheets. ReleasePilot centralizes all your deployment context.</p>
        </div>
        
        <div className="bento-grid">
          {/* Main Feature Card */}
          <div className="col-span-12 md:col-span-8 bg-white border border-outline-variant rounded-xl p-xl flex flex-col md:flex-row gap-xl hover:shadow-sm transition-shadow">
            <div className="flex-1 flex flex-col justify-center gap-md">
              <span className="material-symbols-outlined text-primary text-[32px]">hub</span>
              <h3 className="font-headline-lg text-primary">Unified Signals</h3>
              <p className="text-on-surface-variant">Aggregates PR status, CI build health, smoke test results, and QA sign-offs into a single, real-time dashboard.</p>
              <a className="text-primary font-medium flex items-center gap-xs group" href="#">
                Explore integrations <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="flex-1 bg-surface-container-low rounded-lg p-md border border-outline-variant">
              <div className="space-y-sm">
                <div className="flex items-center justify-between p-sm bg-white rounded border border-outline-variant">
                  <span className="text-body-sm font-medium">Main branch stability</span>
                  <span className="text-green-600 font-bold">99.8%</span>
                </div>
                <div className="flex items-center justify-between p-sm bg-white rounded border border-outline-variant">
                  <span className="text-body-sm font-medium">Unresolved Sentry issues</span>
                  <span className="text-error font-bold">0</span>
                </div>
                <div className="flex items-center justify-between p-sm bg-white rounded border border-outline-variant">
                  <span className="text-body-sm font-medium">Pending Approvals</span>
                  <span className="px-2 py-0.5 bg-primary-fixed text-primary text-[10px] rounded-full">2 CRITICAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Score Card */}
          <div className="col-span-12 md:col-span-4 bg-primary text-on-primary rounded-xl p-xl flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <span className="material-symbols-outlined text-surface-bright text-[32px]">psychology</span>
            <div>
              <h3 className="font-headline-lg mb-sm">AI Readiness Scoring</h3>
              <p className="text-on-primary-container text-body-md">Predict release stability using machine learning models trained on millions of historical deployment cycles.</p>
            </div>
          </div>

          {/* QA Checklist Card */}
          <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant rounded-xl p-xl flex flex-col gap-md">
            <span className="material-symbols-outlined text-primary text-[32px]">fact_check</span>
            <h3 className="font-headline-md text-primary">Automated QA Checklists</h3>
            <p className="text-on-surface-variant text-body-sm">Custom workflows that automatically trigger manual QA tasks based on which features are included in the build.</p>
          </div>

          {/* Large Visual Feature */}
          <div className="col-span-12 md:col-span-8 bg-surface-container border border-outline-variant rounded-xl overflow-hidden group">
            <div className="p-xl pb-0">
              <h3 className="font-headline-lg text-primary mb-sm">Engineering Ops Central</h3>
              <p className="text-on-surface-variant max-w-md">The cockpit for Engineering Managers to monitor health across multiple platforms and release branches simultaneously.</p>
            </div>
            <div className="mt-lg ml-xl border-t border-l border-outline-variant bg-white rounded-tl-xl p-lg h-64 shadow-2xl relative overflow-hidden">
              <div className="flex gap-md">
                <div className="w-1/3 space-y-md">
                  <div className="h-4 bg-surface-container rounded w-3/4"></div>
                  <div className="h-24 bg-surface-container-low rounded border border-outline-variant"></div>
                </div>
                <div className="w-2/3 space-y-md">
                  <div className="h-4 bg-surface-container rounded w-1/4"></div>
                  <div className="grid grid-cols-2 gap-md">
                    <div className="h-32 bg-surface-container-low rounded border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-outline-variant text-[48px]">bar_chart</span>
                    </div>
                    <div className="h-32 bg-surface-container-low rounded border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-outline-variant text-[48px]">donut_large</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-gutter">
        <div className="max-w-container_max_width mx-auto bg-primary-container rounded-2xl p-xl md:p-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed-dim/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 text-center flex flex-col items-center gap-lg">
            <h2 className="font-display text-[40px] md:text-[56px] text-white">Scale your mobile output.</h2>
            <p className="text-on-primary-container text-body-lg max-w-xl">Join 500+ engineering teams who have eliminated manual release tracking and reclaimed 20% of their sprint cycle.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-md mt-lg">
              <button className="px-xl py-lg bg-white text-primary font-bold rounded-lg text-body-md hover:bg-surface-container-low transition-all">Start Free Trial</button>
              <button className="px-xl py-lg border border-on-primary-fixed-variant text-white font-bold rounded-lg text-body-md hover:bg-white/10 transition-all">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
