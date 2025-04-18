
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import CertificateGenerator from '@/components/CertificateGenerator';
import Footer from '@/components/Footer';

const Index = () => {
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
