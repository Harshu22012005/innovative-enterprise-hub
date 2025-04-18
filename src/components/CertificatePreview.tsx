
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import CertificateHeader from './certificate/CertificateHeader';
import CertificateContent from './certificate/CertificateContent';
import CertificateFooter from './certificate/CertificateFooter';

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
          <CertificateHeader />
          <CertificateContent userName={userName} selectedImage={selectedImage} />
          <CertificateFooter />
          
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
