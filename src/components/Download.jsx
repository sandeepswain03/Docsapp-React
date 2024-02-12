/* eslint-disable react/prop-types */
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Download({ filesize, isOpen, tagColor, tagTitle }) {
  const [isDowloading, setIsDowloading] = useState(false);
  const [color, setColor] = useState(tagColor);
  const [title, setTitle] = useState(tagTitle);

  const handleButtonCLick = () => {
    setIsDowloading((prevIsDownloading) => !prevIsDownloading);

    setColor((prevColor) => (prevColor === "blue" ? tagColor : "blue"));

    setTitle((prevTitle) =>
      prevTitle === "Downloading..." ? tagTitle : "Downloading..."
    );
  };
  return (
    <>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 py-3 px-8 ">
          <h5>{filesize}</h5>
          <button
            onClick={handleButtonCLick}
            className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer"
          >
            {isDowloading ? (
              <IoClose />
            ) : (
              <MdOutlineFileDownload size=".8em" color="#fff" />
            )}
          </button>
        </div>
        {isOpen && (
          <div
            className={`tag w-full py-4 bg-${color}-600 flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{title}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Download;
