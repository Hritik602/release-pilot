import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white font-sans selection:bg-[#5252ff] selection:text-white">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
