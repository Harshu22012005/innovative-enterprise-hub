
import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const FloatingSocialBar = () => {
  return (
    <div className="floating-social hidden md:flex">
      <a 
        href="https://instagram.com/meswcoe_e_cell" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <Instagram className="text-pink-500" size={24} />
      </a>
      <a 
        href="https://linkedin.com/company/meswcoe-e-cell" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <Linkedin className="text-blue-700" size={24} />
      </a>
      <a 
        href="https://chat.whatsapp.com/B9khcm1zUf6DcK8C2GKFur" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <MessageCircle className="text-green-500" size={24} />
      </a>
    </div>
  );
};

export default FloatingSocialBar;
