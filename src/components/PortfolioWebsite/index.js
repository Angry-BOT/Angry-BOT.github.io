import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import renderHeaderSection from "./header.js";
import heroSection from "./hero.js";
import renderSection3 from "./section3.js";
import renderSection4 from "./section4.js";
import renderSection5 from "./section5.js";
import renderSection6 from "./section6.js";
import renderFooterSection from "./footer.js";

import styles from "./index.module.scss";

function PortfolioWebsite(props) {
  return (
    <main className={cn(styles.main, props.className, "portfolio-website")}>
      {renderHeaderSection(props)}
      {heroSection(props)}
      {renderSection3(props)}
      {renderSection4(props)}
      {renderSection5(props)}
      {renderSection6(props)}
      {renderFooterSection(props)}
    </main>
  );
}

PortfolioWebsite.propTypes = {
  className: PropTypes.string,
};

export default PortfolioWebsite;
