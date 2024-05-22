import React from "react";
import cn from "classnames";

import footerStyles from "./footer.module.scss";

function renderFooterSection(props) {
  return (
    <section className={footerStyles.section7}>
      <div className={footerStyles.flex_row}>
        <img
          className={footerStyles.image33}
          src={"/assets/d1be6a320484293fe93837ecf57580e4.svg"}
          alt="alt text"
        />
        <div className={footerStyles.text1_box}>
          <span className={footerStyles.text1}>
            <span className={footerStyles.text1_span0}>
              2024 | Designed and coded with{" "}
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
