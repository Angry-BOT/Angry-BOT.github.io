import React from "react";
import section5Styles from "./section5.module.scss";

function renderSection5(props) {
  return (
    <section className={section5Styles.section5}>
      <div className={section5Styles.flex_col}>
        <div className={section5Styles.flex_col1}>
          <div className={section5Styles.flex_col2}>
            <button className={section5Styles.btn}>Experience</button>
            <h3 className={section5Styles.subtitle}>
              Here is a quick summary of my most recent experiences:
            </h3>
          </div>

          <div className={section5Styles.group}>
            <div
              className={section5Styles.content_box}
              style={{
                "--src": `url(${"/assets/a872dd9a940ea0dcefdb3f1392b29a5b.svg"})`,
              }}
            />

            <div className={section5Styles.flex_row}>
              <div className={section5Styles.group1}>
                <h3 className={section5Styles.subtitle1}>
                  Sr. Member Technical &rarr; ADP Pvt. Ltd.
                </h3>
                <h5 className={section5Styles.highlight2}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Developing Payroll Solutions for &gt;500M ARR
                        Clients
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Building Next-Gen HCM Platform for all types of
                        Businesses.
                      </td>
                    </tr>
                  </table>
                </h5>
                {/* <h5 className={section5Styles.highlight21}>
                  Building Next-Gen HCM Platform for all types of Businesses.
                </h5> */}
              </div>
              <h5 className={section5Styles.highlight4}>
                <b>Oct 2023 - Present</b>
              </h5>
            </div>
          </div>
        </div>

        <div className={section5Styles.flex_col4}>
          <div className={section5Styles.group1}>
            <div
              className={section5Styles.content_box1}
              style={{
                "--src": `url(${"/assets/b7b1a31a27f83bfc803a6c85066758c6.svg"})`,
              }}
            />

            <div className={section5Styles.flex_row1}>
              <div className={section5Styles.flex_col5}>
                <h3 className={section5Styles.subtitle1}>
                  Associate Software Engineer - 1 &rarr; Highradius Pvt. Ltd.
                </h3>
                <h5 className={section5Styles.highlight22}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Designed and developed a REST API Framework
                        using NodeJS that reduces web posting time by ~40%.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Developed & Deployed Backend Automation Agents
                        for 20+ Customers to Production within deadlines.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; KPI 93% for the year of 2023 & KPI 94% for the
                        year 2022.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Got Star Team Award & Highflyer of the Quarter
                        in Q2 2021.
                      </td>
                    </tr>
                  </table>
                </h5>
              </div>

              <h5 className={section5Styles.highlight41}>
                <b>Jun 2021 - Sep 2023</b>
              </h5>
            </div>
          </div>

          <div className={section5Styles.group1}>
            <div
              className={section5Styles.content_box2}
              style={{
                "--src": `url(${"/assets/95553405fd56f1dfc958b21d8a055f47.svg"})`,
              }}
            />

            <div className={section5Styles.flex_row1}>
              <div className={section5Styles.flex_col6}>
                <h3 className={section5Styles.subtitle1}>
                  Software Engineer Intern &rarr; Highradius Pvt. Ltd.
                </h3>
                <h5 className={section5Styles.highlight24}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Developing scalable applications using Java,
                        Struts, Spring, Hibernate as Backend tech stacks & SQL
                        for the database.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Solved many Framework Level Bugs and Enhanced
                        Internal frameworks for removing redundant code usage.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Ensured coding standards, proper design
                        patterns, writing test cases, and project management
                        processes are followed Ensuring bug-free production
                        deliverable code for the product.
                      </td>
                    </tr>
                  </table>
                </h5>
              </div>

              <h5 className={section5Styles.highlight42}>
                <b>Jun 2020 - Jun 2021</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection5;
