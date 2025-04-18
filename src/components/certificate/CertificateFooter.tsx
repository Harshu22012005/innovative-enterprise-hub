
import React from 'react';

const CertificateFooter = () => {
  return (
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
  );
};

export default CertificateFooter;
