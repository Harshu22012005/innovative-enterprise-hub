
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-0">
          <a 
            href="https://instagram.com/meswcoe_e_cell" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-6 hover:bg-gray-50"
          >
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full mr-4">
              <Instagram className="text-white" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium">Instagram</h4>
              <p className="text-gray-600">@meswcoe_e_cell</p>
            </div>
            <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </a>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-0">
          <a 
            href="https://linkedin.com/company/meswcoe-e-cell" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-6 hover:bg-gray-50"
          >
            <div className="bg-blue-600 p-3 rounded-full mr-4">
              <Linkedin className="text-white" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium">LinkedIn</h4>
              <p className="text-gray-600">MESWCOE E-Cell</p>
            </div>
            <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </a>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-0">
          <a 
            href="https://chat.whatsapp.com/B9khcm1zUf6DcK8C2GKFur" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-6 hover:bg-gray-50"
          >
            <div className="bg-green-500 p-3 rounded-full mr-4">
              <MessageCircle className="text-white" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium">WhatsApp Community</h4>
              <p className="text-gray-600">Join 500+ Innovators</p>
            </div>
            <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialLinks;
