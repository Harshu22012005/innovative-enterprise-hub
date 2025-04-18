
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, MessageCircle, Upload, Download, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { addActivityLog } from '@/utils/adminUtils';

const SocialMediaSection = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
        // Log the activity for admin dashboard
        addActivityLog({
          type: 'photo_upload',
          user: userName || 'Anonymous User',
          timestamp: new Date().toISOString(),
          details: { fileName: fileInputRef.current?.files?.[0]?.name || 'Unknown file' }
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setShowCertificate(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const generateCertificate = () => {
    if (!selectedImage || !userName.trim()) {
      toast({
        title: "Missing information",
        description: "Please upload an image and enter your name",
        variant: "destructive",
      });
      return;
    }
    
    setShowCertificate(true);
    
    // Log the activity for admin dashboard
    addActivityLog({
      type: 'social_certificate',
      user: userName,
      timestamp: new Date().toISOString(),
      details: { certificateType: 'Social Media Star' }
    });
    
    toast({
      title: "Congratulations! 🎉",
      description: "You're now in the running to be our next E-Cell influencer!",
    });
  };

  const downloadCertificate = () => {
    const certificateElement = document.getElementById('social-certificate');
    if (!certificateElement) return;
    
    // This is a simplified version - in a real app, you'd use a library like html2canvas
    toast({
      title: "Download started",
      description: "Your certificate is being prepared for download",
    });
    
    // Simulating download
    setTimeout(() => {
      toast({
        title: "Download complete",
        description: "Certificate saved to your device",
      });
      
      // Log the download activity
      addActivityLog({
        type: 'certificate_download',
        user: userName,
        timestamp: new Date().toISOString(),
        details: { certificateType: 'Social Media Star' }
      });
    }, 1500);
  };

  return (
    <section id="social" className="section-padding bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ecell-blue">Connect With Us</h2>
          <div className="h-1 w-24 bg-ecell-orange mx-auto"></div>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Join our vibrant community and stay updated with the latest events and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-ecell-blue">Follow Us</h3>
            
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
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-ecell-blue">Become Our Social Media Star!</h3>
            
            <Card>
              <CardContent className="p-6">
                {!showCertificate ? (
                  <div>
                    <p className="mb-4">Upload your team photo and get a mock "Social Media Star" certificate!</p>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    
                    {selectedImage ? (
                      <div className="relative mb-4">
                        <img 
                          src={selectedImage} 
                          alt="Preview" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button 
                          onClick={clearImage}
                          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg mb-4 p-8 text-center">
                        <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                        <p className="text-sm text-gray-500 mb-2">Upload your team photo</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          id="team-photo-upload"
                          ref={fileInputRef}
                        />
                        <label htmlFor="team-photo-upload">
                          <Button variant="outline" className="cursor-pointer">
                            Choose File
                          </Button>
                        </label>
                      </div>
                    )}
                    
                    <Button 
                      className="w-full btn-primary"
                      onClick={generateCertificate}
                      disabled={!selectedImage || !userName.trim()}
                    >
                      Generate Certificate
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div id="social-certificate" className="certificate-bg p-6 mb-6">
                      <div className="border-4 border-double border-ecell-blue p-4">
                        <h4 className="text-2xl font-bold text-ecell-blue mb-2">E-Cell MESWCOE</h4>
                        <p className="text-xl mb-4">Social Media Star Certificate</p>
                        
                        <div className="mb-4">
                          <img 
                            src={selectedImage || ''}
                            alt="Team" 
                            className="w-full h-40 object-cover rounded mx-auto"
                          />
                        </div>
                        
                        <p className="mb-2">This certifies that</p>
                        <p className="text-xl font-bold mb-2">{userName}</p>
                        <p className="mb-4">is officially in the running to be our next E-Cell influencer!</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-left">
                            <p className="text-sm">Date:</p>
                            <p className="text-sm">{new Date().toLocaleDateString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">Certificate #:</p>
                            <p className="text-sm">{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setShowCertificate(false)}
                      >
                        Create Another
                      </Button>
                      <Button 
                        className="flex-1 btn-secondary"
                        onClick={downloadCertificate}
                      >
                        <Download className="mr-2" size={18} />
                        Download
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
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
    </section>
  );
};

export default SocialMediaSection;
