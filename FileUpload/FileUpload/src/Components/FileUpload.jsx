import React, { useEffect, useState } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import "./FileUpload.css";
const FileUpload = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadstatus, setUploadstatus] = useState("select");
  const InputRef = React.useRef();

  // use for testing
  const simulateUpload = (progressCallback, onComplete) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      progressCallback(progress);
      if (progress >= 100) {
        clearInterval(interval);
        onComplete();
      }
    }, 500);
  };

  useEffect(() => {
    if (uploadstatus === "uploading") {
      simulateUpload(setProgress, () => setUploadstatus("done"), 5000);
    }
  }, [uploadstatus]);

  const handleUpload = () => {
    if (uploadstatus === "done") {
      setSelectFile(null);
      setProgress(0);
      setUploadstatus("select");
    } else {
      setUploadstatus("uploading");
    }
  };

  return (
    <div className="main-container">
      <input
        type="file"
        ref={InputRef}
        onChange={(e) => setSelectFile(e.target.files[0])}
        // style={{ display: "none" }}
      />
      {/* {selectFile && ( */}
      <div>
        <button className="file-btn" onClick={() => InputRef.current.click()}>
          <span className="uploadIcone">
            <MdOutlineDriveFolderUpload size={50} />
            Upload File
          </span>
        </button>
      </div>
      {/* )} */}
      {selectFile && (
        <>
          <div className="file-card">
            <span className="file-icon">
              <FaFileMedical />
            </span>
            <div className="file-info">
              <div style={{ flex: 1 }}>
                <h2>{selectFile.name}</h2>
                <div className="progress-bg">
                  <div
                    className="progess"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                {uploadstatus === "select" ? (
                  <button onClick={() => setSelectFile(null)}>
                    <span className="close-icon">
                      <IoMdCloseCircle />
                    </span>
                  </button>
                ) : (
                  <div className="check-circle">
                    {uploadstatus === "uploading"
                      ? `${progress}%`
                      : uploadstatus === "done" && (
                          <span
                            className="done-icon"
                            style={{ fontSize: "20px" }}
                          >
                            <TiTick />
                          </span>
                        )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="btn" onClick={handleUpload}>
            {uploadstatus === "select" || uploadstatus === "uploading"
              ? "upload"
              : "Done"}
          </button>
        </>
      )}
    </div>
  );
};

export default FileUpload;
