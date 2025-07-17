import React, { useState } from "react";
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
  const simulateUpload = (progressCallback) => {};

  const handleUpload = () => {
    if (uploadstatus === "done") {
      setSelectFile(null);
      setProgress(0);
      setUploadstatus("select");
    }
  };

  return (
    <div className="container">
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
                <div className="progress-bar">
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
        </>
      )}
      <button className="btn">{handleUpload}</button>
    </div>
  );
};

export default FileUpload;
