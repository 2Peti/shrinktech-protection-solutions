
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FlexCapsSection from '@/components/FlexCapsSection';
import CoatingsSection from '@/components/CoatingsSection';
import ComplianceSection from '@/components/ComplianceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FlexCapsSection />
      <CoatingsSection />
      <ComplianceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
