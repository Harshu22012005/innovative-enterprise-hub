
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateCertificateData, simulateDownload } from '@/utils/certificateUtils';
import { addActivityLog } from '@/utils/adminUtils';

const CertificateGenerator = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateData, setCertificateData] = useState<{
    name: string;
    date: string;
    serialNumber: string;
  } | null>(null);
  
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const handleGenerateCertificate = () => {
    if (!name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name to generate the certificate",
        variant: "destructive",
      });
      return;
    }
    
    const data = generateCertificateData(name);
    setCertificateData(data);
    setShowCertificate(true);
    
    // Log the certificate generation for admin dashboard
    addActivityLog({
      type: 'certificate_generation',
      user: name,
      timestamp: new Date().toISOString(),
      details: { 
        certificateType: 'InnovateXpo Attendance',
        serialNumber: data.serialNumber
      }
    });
    
    toast({
      title: "Certificate Generated!",
      description: "Your InnovateXpo attendance certificate is ready",
    });
  };
  
  const handleDownload = () => {
    if (!certificateRef.current) return;
    
    toast({
      title: "Preparing Download",
      description: "Your certificate is being prepared...",
    });
    
    simulateDownload(
      'attendance-certificate', 
      `InnovateXpo_Certificate_${name.replace(/\s+/g, '_')}`, 
      (success) => {
        if (success) {
          toast({
            title: "Download Complete",
            description: "Your certificate has been saved to your device",
          });
          
          // Log the download activity
          addActivityLog({
            type: 'certificate_download',
            user: name,
            timestamp: new Date().toISOString(),
            details: { 
              certificateType: 'InnovateXpo Attendance',
              serialNumber: certificateData?.serialNumber || ''
            }
          });
        } else {
          toast({
            title: "Download Failed",
            description: "There was an error downloading your certificate",
            variant: "destructive",
          });
        }
      }
    );
  };
  
  const resetForm = () => {
    setName('');
    setShowCertificate(false);
    setCertificateData(null);
  };

  return (
    <section id="events" className="section-padding bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ecell-blue">InnovateXpo 2024</h2>
          <div className="h-1 w-24 bg-ecell-orange mx-auto"></div>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Generate your attendance certificate for InnovateXpo 2024,
            the flagship event by E-Cell MESWCOE.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              {!showCertificate ? (
                <div>
                  <div className="text-center mb-6">
                    <Award className="mx-auto text-ecell-orange mb-2" size={48} />
                    <h3 className="text-2xl font-semibold">Certificate Generator</h3>
                    <p className="text-gray-600">
                      Enter your name to generate your attendance certificate
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      Your Full Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    className="w-full btn-primary"
                    onClick={handleGenerateCertificate}
                    disabled={!name.trim()}
                  >
                    Generate Certificate
                  </Button>
                </div>
              ) : (
                <div>
                  <div 
                    id="attendance-certificate" 
                    ref={certificateRef}
                    className="certificate-bg p-8 mb-6"
                  >
                    <div className="border-4 border-double border-ecell-blue p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-16 h-16 bg-ecell-blue rounded-full flex items-center justify-center">
                          <span className="text-white text-xl font-bold">E</span>
                        </div>
                        <h4 className="text-2xl font-bold text-center text-ecell-blue">
                          CERTIFICATE OF ATTENDANCE
                        </h4>
                        <div className="w-16 h-16 bg-ecell-orange rounded-full flex items-center justify-center">
                          <span className="text-white text-xl font-bold">C</span>
                        </div>
                      </div>
                      
                      <div className="text-center mb-8">
                        <p className="text-lg mb-4">This certifies that</p>
                        <p className="text-3xl font-bold mb-4 text-ecell-blue">{certificateData?.name}</p>
                        <p className="text-lg">
                          has successfully attended <span className="font-semibold">InnovateXpo 2024</span>,<br />
                          organized by E-Cell MESWCOE.
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-sm">Date:</p>
                          <p className="font-medium">{certificateData?.date}</p>
                        </div>
                        <div className="text-center">
                          <div className="w-24 h-0.5 bg-ecell-blue mb-1"></div>
                          <p className="font-medium">E-Cell Coordinator</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">Certificate #:</p>
                          <p className="font-medium">IXPO-{certificateData?.serialNumber}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={resetForm}
                    >
                      Create Another
                    </Button>
                    <Button 
                      className="flex-1 btn-secondary"
                      onClick={handleDownload}
                    >
                      <Download className="mr-2" size={18} />
                      Download Certificate
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificateGenerator;
