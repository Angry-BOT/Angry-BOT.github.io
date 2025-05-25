import React, { useState } from "react";
import contactStyles from "../../styles/components/ContactSection.module.scss";

const ContactSection = () => {
  function handleImageClick(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isNumberCopied, setIsNumberCopied] = useState(false);

  const copyImageClick = async (val) => {
    const phoneNumber = "+917001794582";
    const email = "shailo199925@gmail.com";
    try {
      if (val === "number") {
        await navigator.clipboard.writeText(phoneNumber);
        setIsNumberCopied(true);
        console.log("Phone number copied to clipboard!");
        // Automatically hide feedback after 2 seconds
        setTimeout(() => {
          setIsNumberCopied(false);
        }, 2000);
      } else {
        await navigator.clipboard.writeText(email);
        setIsEmailCopied(true);
        console.log("Email copied to clipboard!");
        // Automatically hide feedback after 2 seconds
        setTimeout(() => {
          setIsEmailCopied(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Error in copying text: ", err);
    }
  };

  return (
    <section className={contactStyles.section6}>
      <div className={contactStyles.flex_col} id="contact">
        <button className={contactStyles.btn}>Get in touch</button>
        <h3
          className={contactStyles.subtitle}
        >{`What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.`}</h3>

        <div className={contactStyles.flex_row}>
          <img
            className={contactStyles.image29}
            src={"/assets/9022593847d314fddbefb54248ceab3b.svg"}
            alt="Email icon"
          />
          <h1 className={contactStyles.big_title}>shailo199925@gmail.com</h1>
          <img
            className={contactStyles.image29}
            src={"/assets/5824f5e9f60ddb648700c1efeb3f79ac.svg"}
            alt="Copy icon"
            onClick={() => copyImageClick("email")}
          />
        </div>
        <span
          className={`${contactStyles.copyFeedback1} ${
            isEmailCopied ? contactStyles.show : ""
          }`}
        >
          {`Copied to clipboard!`}
        </span>
        <div className={contactStyles.flex_row1}>
          <img
            className={contactStyles.image291}
            src={"/assets/82ef13493eada343640895e0c9e88381.svg"}
            alt="Phone icon"
          />
          <h1 className={contactStyles.big_title1}>+91 7001794582</h1>
          <img
            className={contactStyles.image291}
            src={"/assets/5824f5e9f60ddb648700c1efeb3f79ac.svg"}
            alt="Copy icon"
            onClick={() => copyImageClick("number")}
          />
        </div>
        <span
          className={`${contactStyles.copyFeedback2} ${
            isNumberCopied ? contactStyles.show : ""
          }`}
        >
          {`Copied to clipboard!`}
        </span>
        <h5 className={contactStyles.highlight2}>
          You may also find me on these platforms!
        </h5>

        <div className={contactStyles.flex_row2}>
          <img
            className={contactStyles.image}
            src={"/assets/f28ac2030f6d94e9fe93f6d04a22f3a4.svg"}
            alt="GitHub icon"
            onClick={() => handleImageClick("https://github.com/Angry-BOT")}
          />
          <img
            className={contactStyles.image}
            src={"/assets/6aebc4e3be4f56402ce7171c0b239d36.svg"}
            alt="Twitter icon"
            onClick={() =>
              handleImageClick("https://twitter.com/shailesh__das")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 