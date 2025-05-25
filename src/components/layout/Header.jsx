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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${headerStyles.aboutSection} ${isScrolled ? headerStyles.scrolled : ''}`}>
      <div className={headerStyles.flex_row}>
        <h1 className={headerStyles.title}>{`shailesh`}</h1>
        <div className={headerStyles.flex_row1}>
          <button
            className={headerStyles.highlight}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className={headerStyles.highlight}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
          <button
            className={headerStyles.downloadButton}
            onClick={handleDownload}
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header; 