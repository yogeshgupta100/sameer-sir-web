// components/DownloadSyllabusForm.jsx

import React from "react";
import DownloadSyllabus from "./DownloadSyllabus"; // Your existing component

const DownloadSyllabusFormModal = ({ closeModal }) => {
  return (
    <div className="modal">
        <DownloadSyllabus closeModal={closeModal}/>
    </div>
  );
};

export default DownloadSyllabusFormModal;
