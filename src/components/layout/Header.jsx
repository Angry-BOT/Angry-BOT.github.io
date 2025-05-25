import React, { useState, useEffect } from "react";
import headerStyles from "../../styles/components/Header.module.scss";

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

const handleDownload = () => {
  // URL of the file to be downloaded
  const fileUrl =
    "https://drive.google.com/file/d/1mvgj97akaX7njDnKi-RsIO_-erzbAaFj/view?usp=sharing";

  // Create an invisible link element
  const link = document.createElement("a");
  link.href = fileUrl;

  // Append the link to the document body and click it programmatically
  document.body.appendChild(link);
  link.click();

  // Clean up by removing the link element
  document.body.removeChild(link);
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <section className={`${headerStyles.aboutSection} ${isScrolled ? headerStyles.scrolled : ''}`}>
      <div className={headerStyles.flex_row}>
        <h1 className={headerStyles.title}>{`shailesh`}</h1>
        
        {/* Mobile Menu Button */}
        <button 
          className={headerStyles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${headerStyles.hamburgerLine} ${isMobileMenuOpen ? headerStyles.open : ''}`}></span>
          <span className={`${headerStyles.hamburgerLine} ${isMobileMenuOpen ? headerStyles.open : ''}`}></span>
          <span className={`${headerStyles.hamburgerLine} ${isMobileMenuOpen ? headerStyles.open : ''}`}></span>
        </button>

        {/* Navigation Menu */}
        <div className={`${headerStyles.flex_row1} ${isMobileMenuOpen ? headerStyles.mobileMenuOpen : ''}`}>
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
            onClick={() => {
              handleDownload();
              setIsMobileMenuOpen(false);
            }}
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header; 