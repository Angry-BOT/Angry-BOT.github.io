import React, { useState } from "react";
import cn from "classnames";

import section6Styles from "./section6.module.scss";

const RenderSection6 = (props) => {
  function handleImageClick(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const [isCopied, setIsCopied] = useState(false);

  const copyContactNumberImageClick = async (val) => {
    const phoneNumber = "+917001794582";
    const email = "shailo199925@gmail.com";
    try {
      if (val == "number") {
        await navigator.clipboard.writeText(phoneNumber);
        setIsCopied(true);
        console.log("Phone number copied to clipboard!");
        // Automatically hide feedback after 2 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } else {
        await navigator.clipboard.writeText(email);
        setIsCopied(true);
        console.log("Email copied to clipboard!");
        // Automatically hide feedback after 2 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Error in copying text: ", err);
    }
  };
  return (
    <section className={section6Styles.section6}>
      <div className={section6Styles.flex_col} id="contact">
        <button className={section6Styles.btn}>Get in touch</button>
        <h3
          className={section6Styles.subtitle}
        >{`What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.`}</h3>

        <div className={section6Styles.flex_row}>
          <img
            className={section6Styles.image29}
            src={"/assets/9022593847d314fddbefb54248ceab3b.svg"}
            alt="alt text"
          />
          <h1 className={section6Styles.big_title}>shailo199925@gmail.com</h1>
          <img
            className={section6Styles.image29}
            src={"/assets/5824f5e9f60ddb648700c1efeb3f79ac.svg"}
            alt="alt text"
            onClick={() => copyContactNumberImageClick("email")}
          />
        </div>
        <span
          className={`${section6Styles.copyFeedback1} ${
            isCopied ? section6Styles.show : ""
          }`}
        >
          Copied to clipboard!
        </span>
        <div className={section6Styles.flex_row1}>
          <img
            className={section6Styles.image291}
            src={"/assets/82ef13493eada343640895e0c9e88381.svg"}
            alt="alt text"
          />
          <h1 className={section6Styles.big_title1}>+91 7001794582</h1>
          <img
            className={section6Styles.image291}
            src={"/assets/5824f5e9f60ddb648700c1efeb3f79ac.svg"}
            alt="alt text"
            onClick={() => copyContactNumberImageClick("number")}
          />
        </div>
        <span
          className={`${section6Styles.copyFeedback2} ${
            isCopied ? section6Styles.show : ""
          }`}
        >
          Copied to clipboard!
        </span>
        <h5 className={section6Styles.highlight2}>
          You may also find me on these platforms!
        </h5>

        <div className={section6Styles.flex_row2}>
          <img
            className={section6Styles.image}
            src={"/assets/f28ac2030f6d94e9fe93f6d04a22f3a4.svg"}
            alt="alt text"
            onClick={() => handleImageClick("https://github.com/Angry-BOT")}
          />
          <img
            className={section6Styles.image}
            src={"/assets/6aebc4e3be4f56402ce7171c0b239d36.svg"}
            alt="alt text"
            onClick={() =>
              handleImageClick("https://twitter.com/shailesh__das")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default RenderSection6;
