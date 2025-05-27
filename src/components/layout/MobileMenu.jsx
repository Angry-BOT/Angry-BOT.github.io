import React from "react";
import { createPortal } from "react-dom";
import headerStyles from "../../styles/components/Header.module.scss";

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

const handleDownload = () => {
  const fileUrl =
    "https://drive.google.com/file/d/1mvgj97akaX7njDnKi-RsIO_-erzbAaFj/view?usp=sharing";
  const link = document.createElement("a");
  link.href = fileUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const MobileMenu = ({ isOpen, onClose }) => {
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    onClose();
  };

  const handleDownloadClick = () => {
    handleDownload();
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={headerStyles.mobileMenuOverlay} onClick={onClose}>
      <div 
        className={headerStyles.mobileMenuContent} 
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={headerStyles.highlight}
          onClick={() => handleNavClick("about")}
        >
          About
        </button>
        <button
          className={headerStyles.highlight}
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </button>
        <button
          className={headerStyles.downloadButton}
          onClick={handleDownloadClick}
        >
          Resume
        </button>
      </div>
    </div>,
    document.body
  );
};

export default MobileMenu; 