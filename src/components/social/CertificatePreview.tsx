
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { downloadCertificate } from '@/utils/certificateUtils';

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
      <div id="social-certificate" className="certificate-bg p-6 mb-6">
        <div className="border-4 border-double border-ecell-blue p-4">
          <h4 className="text-2xl font-bold text-ecell-blue mb-2">E-Cell MESWCOE</h4>
          <p className="text-xl mb-4">Social Media Star Certificate</p>
          
          <div className="mb-4">
            <img 
              src={selectedImage}
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
          onClick={onReset}
        >
          Create Another
        </Button>
        <Button 
          className="flex-1 btn-secondary"
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
