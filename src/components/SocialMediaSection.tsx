
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { addActivityLog } from '@/utils/adminUtils';
import SocialLinks from './social/SocialLinks';
import FloatingSocialBar from './social/FloatingSocialBar';
import CertificatePreview from './social/CertificatePreview';
import PhotoUploadForm from './social/PhotoUploadForm';

const SocialMediaSection = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
        addActivityLog({
          type: 'photo_upload',
          user: userName || 'Anonymous User',
          timestamp: new Date().toISOString(),
          details: { fileName: e.target?.result ? 'Image uploaded' : 'Unknown file' }
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setShowCertificate(false);
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
    
    toast({
      title: "Download started",
      description: "Your certificate is being prepared for download",
    });
    
    setTimeout(() => {
      toast({
        title: "Download complete",
        description: "Certificate saved to your device",
      });
      
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
            <SocialLinks />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-ecell-blue">Become Our Social Media Star!</h3>
            
            <Card>
              <CardContent className="p-6">
                {!showCertificate ? (
                  <PhotoUploadForm
                    userName={userName}
                    selectedImage={selectedImage}
                    onNameChange={setUserName}
                    onImageChange={handleImageChange}
                    onClearImage={clearImage}
                    onGenerate={generateCertificate}
                  />
                ) : (
                  <CertificatePreview
                    userName={userName}
                    selectedImage={selectedImage!}
                    onReset={() => setShowCertificate(false)}
                    onDownload={downloadCertificate}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <FloatingSocialBar />
    </section>
  );
};

export default SocialMediaSection;
