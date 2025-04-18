
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Instagram, Linkedin, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';
import Logo from './icons/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="mr-2" />
              <h3 className="text-xl font-bold">E-Cell MESWCOE</h3>
            </div>
            <p className="mb-4 text-gray-400">
              The Entrepreneurship Cell of MES Wadia College of Engineering, Pune, fostering innovation since 2024.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/meswcoe_e_cell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/meswcoe-e-cell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://chat.whatsapp.com/B9khcm1zUf6DcK8C2GKFur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">InnovateXpo</a>
              </li>
              <li>
                <a href="#social" className="text-gray-400 hover:text-white transition-colors">Social Media</a>
              </li>
              <li>
                <a href="/admin" className="text-gray-400 hover:text-white transition-colors">Admin</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-2 text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400">ecellmeswcoe@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400">
                  MES Wadia College of Engineering, Pune - 411001
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Community</h3>
            <p className="text-gray-400 mb-4">
              Be part of our 500+ innovators community and stay updated with the latest events.
            </p>
            <a 
              href="https://chat.whatsapp.com/B9khcm1zUf6DcK8C2GKFur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="mr-2" size={18} />
              Join WhatsApp Group
            </a>
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} E-Cell MESWCOE. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center">
            Website Developed by 
            <a 
              href="https://linkedin.com/in/harshad-pakhale" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-ecell-orange hover:text-ecell-orange-light inline-flex items-center"
            >
              Harshad Pakhale <ExternalLink className="ml-1" size={14} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
