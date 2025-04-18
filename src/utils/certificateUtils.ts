
import html2canvas from 'html2canvas';

export const generateCertificateData = (name: string) => {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const serialNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
  return {
    name,
    date,
    serialNumber,
  };
};

export const downloadCertificate = async (
  elementId: string, 
  filename: string, 
  callback: (success: boolean) => void
) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error("Certificate element not found");
      callback(false);
      return;
    }
    
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
      logging: false,
    });
    
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = dataUrl;
    link.click();
    
    callback(true);
  } catch (error) {
    console.error("Error generating certificate:", error);
    callback(false);
  }
};
