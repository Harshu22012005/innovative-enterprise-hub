
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

// In a real application, we would use a library like html2canvas or jsPDF 
// to generate actual downloadable certificates
export const simulateDownload = (
  elementId: string, 
  filename: string, 
  callback: (success: boolean) => void
) => {
  // Simulate processing delay
  setTimeout(() => {
    callback(true);
  }, 1500);
};
