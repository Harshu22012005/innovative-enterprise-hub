
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Instagram, Linkedin, MessageCircleMore, ChevronDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-600 to-orange-500 text-white">
      <ParticlesBackground />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-white rounded-lg animate-spin-slow animate-pulse-light"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-16 border-2 border-white animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse-light"></div>
      </div>
      
      <div className="container relative z-10 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
          E-Cell MESWCOE – Where Ideas Become Startups!
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Fostering innovation, entrepreneurship, and startup culture at MES Wadia College of Engineering, Pune.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            className="btn-primary text-lg group"
            asChild
          >
            <a href="#events">
              Join InnovateXpo 2024! 
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Button>
          
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button 
                className="btn-secondary text-lg"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Connect with Us <ChevronDown className="ml-2" size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem className="cursor-pointer" asChild>
                <a href="https://instagram.com/meswcoe_e_cell" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Instagram className="mr-2" size={18} /> Instagram
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" asChild>
                <a href="https://linkedin.com/company/meswcoe-e-cell" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Linkedin className="mr-2" size={18} /> LinkedIn
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" asChild>
                <a href="https://chat.whatsapp.com/ecellmeswcoe" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MessageCircleMore className="mr-2" size={18} /> WhatsApp
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
