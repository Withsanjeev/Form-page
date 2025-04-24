import React from "react";

interface FileUploadProps {
  onFileSelect?: (files: FileList) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && onFileSelect) {
      onFileSelect(e.target.files);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        multiple
      />
      <div className="flex items-center border text-white cursor-pointer w-[187px] bg-slate-900 p-4 rounded-[10px] border-solid border-[#6E7E92]">
        <div className="text-lg font-medium mr-2.5">Attach files</div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I110:685;108:1064" layer-name="material-symbols:upload" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="upload-icon"> <path d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.0217 19.805 18.5507 20.0007 18 20H6Z" fill="white"></path> </svg>',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
