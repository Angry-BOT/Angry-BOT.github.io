import React from "react";
import footerStyles from "./footer.module.scss";

function renderFooterSection(props) {
  return (
    <section className={footerStyles.section7}>
      <div className={footerStyles.flex_row}>
        <div className={footerStyles.text1_box}>
          <span className={footerStyles.text1}>
            <span className={footerStyles.text1_span0}>
              &copy; 2024 | Designed and coded with{" "}
            </span>
            <span className={footerStyles.text1_span1}>❤</span>
            <span className={footerStyles.text1_span2}>️️ by Shailesh Das</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default renderFooterSection;
