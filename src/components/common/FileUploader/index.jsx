import { useState } from "react";
import PropTypes from "prop-types";
import PlusCircle from "../Icons/PlusCircle";
import TrashCircle from "../Icons/TrashCircle";

const FileUploader = ({ onFileChange }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      if (onFileChange) {
        onFileChange(selectedFile);
      }
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    if (onFileChange) {
      onFileChange(null);
    }
  };

  return (
    <div className="flex flex-col gap-[5px]">
      <label className="font-firago font-bold text-[14px] leading-[16.8px] text-secondary">
        ატვირთეთ ფოტო
      </label>
      <div className="relative w-[788px] h-[120px] rounded-[8px] border border-dashed border-[#2D3648] bg-white">
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileInput"
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          {!file ? (
            <PlusCircle className="text-gray-500 text-3xl" />
          ) : (
            <img
              src={file}
              alt="Uploaded"
              className="absolute w-[92px] h-[82px] rounded-[4px] object-cover"
            />
          )}
        </label>
        {file && (
          <div
            className="absolute top-[83px] left-[429px] cursor-pointer"
            onClick={handleRemoveImage}
          >
            <TrashCircle />
          </div>
        )}
      </div>
    </div>
  );
};

FileUploader.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FileUploader;
