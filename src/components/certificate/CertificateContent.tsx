
import React from 'react';

interface CertificateContentProps {
  userName: string;
  selectedImage: string;
}

const CertificateContent = ({ userName, selectedImage }: CertificateContentProps) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-semibold text-ecell-blue mb-6">
        CERTIFICATE OF SOCIAL MEDIA EXCELLENCE
      </h2>
      
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
  );
};

export default CertificateContent;
