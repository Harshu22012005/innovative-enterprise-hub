
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface CertificatePreviewProps {
  userName: string;
  selectedImage: string;
  onReset: () => void;
  onDownload: () => void;
}

const CertificatePreview = ({
  userName,
  selectedImage,
  onReset,
  onDownload
}: CertificatePreviewProps) => {
  return (
    <div className="text-center">
      <div 
        id="social-certificate" 
        className="certificate-bg p-8 mb-6 bg-gradient-to-br from-white to-gray-50"
      >
        <div className="border-8 border-double border-ecell-blue/30 p-8 rounded-lg relative">
          {/* Logo and Header */}
          <div className="mb-8 text-center">
            <img 
              src="/lovable-uploads/5bdfb9a1-a53f-4f8b-b356-33c9e79c30b8.png"
              alt="E-Cell MESWCOE" 
              className="w-24 h-24 mx-auto mb-2"
            />
            <h4 className="text-3xl font-bold text-ecell-blue tracking-wide">E-CELL MESWCOE</h4>
            <p className="text-sm text-gray-600 italic mt-1">INNOVATE TODAY, ELEVATE TOMORROW</p>
            <div className="h-1 w-32 bg-ecell-orange mx-auto mt-4"></div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-ecell-blue mb-6">
              CERTIFICATE OF SOCIAL MEDIA EXCELLENCE
            </h2>
            
            {/* Certificate Content */}
            <div className="mb-8">
              <img 
                src={selectedImage}
                alt="Team" 
                className="w-64 h-48 object-cover rounded-lg mx-auto shadow-lg border-4 border-white"
              />
            </div>
            
            <p className="text-lg mb-2 text-gray-600">This is to certify that</p>
            <p className="text-3xl font-bold mb-4 text-ecell-blue">{userName}</p>
            <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
              has demonstrated exceptional social media engagement and is officially recognized as an
              <span className="font-semibold text-ecell-blue"> E-Cell Social Media Star</span>
            </p>
          </div>
          
          {/* Footer */}
          <div className="flex justify-between items-end mt-8 text-sm text-gray-600">
            <div>
              <p>Date of Issue:</p>
              <p className="font-medium">{new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-0.5 bg-ecell-blue mb-1"></div>
              <p>E-Cell Coordinator</p>
            </div>
            <div className="text-right">
              <p>Certificate ID:</p>
              <p className="font-medium">ECELL-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_1px_1px,#1E40AF_1px,transparent_0)]" style={{ backgroundSize: '40px 40px' }}></div>
        </div>
      </div>
      
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={onReset}
        >
          Create Another
        </Button>
        <Button 
          className="flex-1 bg-ecell-blue hover:bg-ecell-blue-dark text-white"
          onClick={onDownload}
        >
          <Download className="mr-2" size={18} />
          Download
        </Button>
      </div>
    </div>
  );
};

export default CertificatePreview;
