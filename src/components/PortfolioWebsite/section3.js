import React from "react";
import cn from "classnames";

import section3Styles from "./section3.module.scss";

function renderSection3(props) {
  return (
    <section className={section3Styles.section3}>
      <div className={section3Styles.flex_col} id="about">
        <button className={section3Styles.btn}>About me</button>

        <div className={section3Styles.flex_row}>
          <img
            className={section3Styles.image7}
            src={"/assets/a71715c7ff19a4843ec60462c47792ad.png"}
            alt="alt text"
          />

          <div className={section3Styles.flex_col1}>
            <div className={section3Styles.flex_col2}>
              <h1 className={section3Styles.title1}>
                Curious about me? Here you have it:
              </h1>
              <h5 className={section3Styles.highlight2_box}>
                <span className={section3Styles.highlight2}>
                  <span
                    className={section3Styles.highlight2_span0}
                  >{`I'm a passionate, `}</span>
                  <span className={section3Styles.highlight2_span1}>
                    self-proclaimed software developer
                  </span>
                  <span
                    className={section3Styles.highlight2_span2}
                  >{` who specializes in full stack development (React.js & Java). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.`}</span>
                </span>
              </h5>
              <h5
                className={section3Styles.highlight21}
              >{`I began my journey as a Software Engineer in 2020, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early twenties, 4 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as React.js, Springboot, Docker, Tailwindcss, Java 8 and much more.`}</h5>
              <h5 className={section3Styles.highlight21}>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </h5>
              <h5 className={section3Styles.highlight2_box1}>
                <span className={section3Styles.highlight2}>
                  <span
                    className={section3Styles.highlight2_span0}
                  >{`When I'm not in full-on developer mode, you can find me hovering around on X or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on `}</span>
                  <a
                    href="https://twitter.com/shailesh__das"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={section3Styles.highlight2_span1}>X</span>
                  </a>
                  <span className={section3Styles.highlight2_span2}>
                    {" "}
                    where I share tech-related bites and build in public, or you
                    can follow me on{" "}
                  </span>
                  <a
                    href="https://github.com/Angry-BOT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={section3Styles.highlight2_span3}>
                      GitHub
                    </span>
                  </a>
                  <span className={section3Styles.highlight2_span4}>.</span>
                </span>
              </h5>
              <h5 className={section3Styles.highlight21}>
                Finally, some quick bits about me.
              </h5>
            </div>

            <div className={section3Styles.flex_row1}>
              <div className={section3Styles.flex_col3}>
                <h5 className={section3Styles.highlight22}>
                  B.Tech. in Computer Engineering
                </h5>
                <h5 className={section3Styles.highlight22}>
                  Part Time freelancer
                </h5>
              </div>

              <div className={section3Styles.flex_col4}>
                <h5 className={section3Styles.highlight22}>Avid learner</h5>
                <h5 className={section3Styles.highlight22}>
                  Aspiring indie hacker
                </h5>
              </div>
            </div>

            <h5
              className={section3Styles.highlight22}
            >{`One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉`}</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection3;
