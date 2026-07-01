export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-surface border-b border-outline-variant fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between items-center h-12 w-full px-gutter max-w-container_max_width mx-auto">
          <div className="flex items-center gap-xl">
            <span className="font-headline-md text-headline-md font-bold text-on-background">ReleasePilot</span>
            <div className="hidden md:flex items-center gap-lg">
              <a className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1" href="#">iOS</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Android</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Flutter</a>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <div className="flex items-center gap-sm">
              <button className="px-md py-1.5 bg-primary text-white text-label-md font-medium rounded-lg hover:opacity-90 active:scale-95 transition-all">New Release</button>
            </div>
          </div>
        </nav>
      </header>
      <main className="pt-12">
        {children}
      </main>
      <footer className="bg-white border-t border-outline-variant py-24 px-gutter">
        <div className="max-w-container_max_width mx-auto grid grid-cols-2 md:grid-cols-5 gap-xl">
          <div className="col-span-2 flex flex-col gap-lg">
            <span className="font-headline-lg font-bold text-primary">ReleasePilot</span>
            <p className="text-on-surface-variant text-body-sm max-w-xs">Precise engineering operations for mobile-first organizations. Built for scale and reliability.</p>
            <div className="flex gap-md">
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            </div>
          </div>
          <div className="flex flex-col gap-md">
            <p className="font-label-md text-primary font-bold uppercase tracking-wider">Product</p>
            <ul className="space-y-sm text-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Platform Overview</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-md">
            <p className="font-label-md text-primary font-bold uppercase tracking-wider">Company</p>
            <ul className="space-y-sm text-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-md">
            <p className="font-label-md text-primary font-bold uppercase tracking-wider">Legal</p>
            <ul className="space-y-sm text-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-container_max_width mx-auto mt-24 pt-md border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-label-sm text-on-surface-variant">© 2026 ReleasePilot Engineering Ops Inc. All rights reserved.</p>
          <div className="flex gap-lg items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-label-sm text-on-surface-variant">All Systems Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
