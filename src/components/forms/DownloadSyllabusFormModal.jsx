// components/DownloadSyllabusForm.jsx

import React from "react";
import DownloadSyllabus from "./DownloadSyllabus"; // Your existing component

const DownloadSyllabusFormModal = ({ onClose }) => {
  return (
    <div className="modal">
        <DownloadSyllabus />
    </div>
  );
};

export default DownloadSyllabusFormModal;
