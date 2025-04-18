
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';

interface PhotoUploadFormProps {
  userName: string;
  selectedImage: string | null;
  onNameChange: (name: string) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearImage: () => void;
  onGenerate: () => void;
}

const PhotoUploadForm = ({
  userName,
  selectedImage,
  onNameChange,
  onImageChange,
  onClearImage,
  onGenerate
}: PhotoUploadFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <p className="mb-4">Upload your team photo and get a mock "Social Media Star" certificate!</p>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-2 border rounded-md"
        />
      </div>
      
      {selectedImage ? (
        <div className="relative mb-4">
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <button 
            onClick={onClearImage}
            className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg mb-4 p-8 text-center">
          <Upload className="mx-auto text-gray-400 mb-2" size={32} />
          <p className="text-sm text-gray-500 mb-2">Upload your team photo</p>
          <input
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className="hidden"
            ref={fileInputRef}
          />
          <Button 
            variant="outline" 
            className="cursor-pointer"
            onClick={handleButtonClick}
          >
            Choose File
          </Button>
        </div>
      )}
      
      <Button 
        className="w-full btn-primary"
        onClick={onGenerate}
        disabled={!selectedImage || !userName.trim()}
      >
        Generate Certificate
      </Button>
    </div>
  );
};

export default PhotoUploadForm;
