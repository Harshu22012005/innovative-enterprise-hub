
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, Phone, Mail, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TeamSection = () => {
  const { toast } = useToast();
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(type);
      setTimeout(() => {
        setCopySuccess(null);
      }, 2000);
      toast({
        title: "Copied to clipboard!",
        description: `${text} has been copied to your clipboard.`,
      });
    });
  };

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ecell-blue">Meet Our Team</h2>
          <div className="h-1 w-24 bg-ecell-orange mx-auto"></div>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Get in touch with our dedicated team members who are passionate about
            fostering entrepreneurship at MESWCOE.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-ecell-blue rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">HP</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Harshad Pakhale</h3>
                <p className="text-gray-600 mb-4">Lead Coordinator</p>
                
                <div className="flex items-center justify-center gap-4 w-full mb-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center" 
                    onClick={() => window.open(`https://wa.me/919067572205`, '_blank')}
                  >
                    <MessageCircle className="mr-1" size={16} />
                    WhatsApp
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center"
                    onClick={() => copyToClipboard("9067572205", "phone1")}
                  >
                    {copySuccess === "phone1" ? (
                      <Check className="mr-1" size={16} />
                    ) : (
                      <Phone className="mr-1" size={16} />
                    )}
                    9067572205
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-ecell-orange rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Manas</h3>
                <p className="text-gray-600 mb-4">Co-Coordinator</p>
                
                <div className="flex items-center justify-center gap-4 w-full mb-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center" 
                    onClick={() => window.open(`https://wa.me/918805525762`, '_blank')}
                  >
                    <MessageCircle className="mr-1" size={16} />
                    WhatsApp
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center"
                    onClick={() => copyToClipboard("8805525762", "phone2")}
                  >
                    {copySuccess === "phone2" ? (
                      <Check className="mr-1" size={16} />
                    ) : (
                      <Phone className="mr-1" size={16} />
                    )}
                    8805525762
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transform transition duration-500 hover:scale-105 hover:shadow-xl md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-r from-ecell-blue to-ecell-orange rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                <p className="text-gray-600 mb-4">For inquiries and collaborations</p>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex items-center justify-center gap-2 w-full max-w-xs"
                  onClick={() => copyToClipboard("ecell@meswadia.edu", "email")}
                >
                  {copySuccess === "email" ? (
                    <Check size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                  ecell@meswadia.edu
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
