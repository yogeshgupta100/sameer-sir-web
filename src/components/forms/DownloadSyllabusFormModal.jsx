
import React from "react";
import DownloadSyllabus from "./DownloadSyllabus"; 
import HireModal from "./HireModal";

const DownloadSyllabusFormModal = ({ closeModal , form}) => {
  return (
    <div className="modal">
    {form === "downloadSyllabus" ? (
      <DownloadSyllabus closeModal={closeModal} />
    ) : form === "hire" ? (
      <HireModal closeModal={closeModal} />
    ) : form === "work" ? (
      <Work closeModal={closeModal} />
    ) : null}
  </div>
  );
};

export default DownloadSyllabusFormModal;
