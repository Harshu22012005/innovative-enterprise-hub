
import html2canvas from 'html2canvas';

export const generateCertificateData = (name: string) => {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const serialNumber = `ECELL-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
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
      scale: 3, // Increased scale for better quality
      backgroundColor: "#ffffff",
      logging: false,
      useCORS: true,
      allowTaint: true,
    });
    
    const dataUrl = canvas.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    callback(true);
  } catch (error) {
    console.error("Error generating certificate:", error);
    callback(false);
  }
};
