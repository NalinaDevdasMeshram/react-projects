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

  // use for testing
  const simulateUpload = (progressCallback) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress = 10;
      if (progress === 100) {
        clearInterval(interval);
      }
      progressCallback(progress);
    }, 500);
  };

  useEffect(() => {
    if (uploadstatus === "done") {
      simulateUpload(setProgress);
      setTimeout(() => setSelectFile("done"), 5000);
    }
  }, [uploadstatus]);

  const handleUpload = () => {
    if (uploadstatus === "done") {
      setSelectFile(null);
      setProgress(0);
      setUploadstatus("select");
    }
    setUploadstatus("uploading");
  };

  return (
    <div className="main-container">
      <input
        type="file"
        onChange={(e) => setSelectFile(e.target.files[0])}
        style={{ display: "none" }}
      />
      {selectFile && (
        <div>
          <button
            className="file-btn"
            onClick={document.querySelector("input[type=File").click()}
          >
            <span className="uploadIcone">
              <MdOutlineDriveFolderUpload />
              Upload File
            </span>
          </button>
        </div>
      )}
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
                    style={{ width: `${{ progress }}%` }}
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
                    {uploadstatus === "uploading" ? (
                      `{progress}%`
                    ) : uploadstatus === "done" ? (
                      <span className="done-icon" style={{ fontSize: "20px" }}>
                        <TiTick />
                      </span>
                    ) : (
                      "null"
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
