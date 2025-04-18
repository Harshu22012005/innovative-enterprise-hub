
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import CertificateGenerator from '@/components/CertificateGenerator';
import Footer from '@/components/Footer';
import { trackPageVisit } from '@/utils/adminUtils';

const Index = () => {
  useEffect(() => {
    // Track page visit
    trackPageVisit('Homepage');
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <CertificateGenerator />
      <SocialMediaSection />
      <Footer />
    </div>
  );
};

export default Index;
