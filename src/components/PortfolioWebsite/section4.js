import React from 'react';
import cn from 'classnames';

import section4Styles from './section4.module.scss';

function renderSection4(props) {
  return (
    <section className={section4Styles.section4}>
      <div className={section4Styles.flex_row}>
        <div className={section4Styles.flex_row1}>
          <div className={section4Styles.flex_col}>
            <img
              className={section4Styles.image9}
              src={'/assets/b19e878c1784478c006f14a857f1ce0b.svg'}
              alt="alt text"
            />
            <h4 className={section4Styles.highlight3}>Javascript</h4>
            <img
              className={section4Styles.image18}
              src={'/assets/33be7db500a0aa13ceda6d9cc997f925.svg'}
              alt="alt text"
            />
            <h4 className={section4Styles.highlight31}>Java</h4>
          </div>

          <div className={section4Styles.flex_col1}>
            <img
              className={section4Styles.image11}
              src={'/assets/c4ddb5c1841012e176373092695065ae.svg'}
              alt="alt text"
            />
            <h4 className={section4Styles.highlight3}>React</h4>
            <img className={section4Styles.image19} src={'/assets/spring_logo.png'} alt="alt text" />
            <img className={section4Styles.image20} src={'/assets/springboot_text.png'} alt="alt text" />
          </div>
        </div>

        <div className={section4Styles.flex_col2}>
          <div className={section4Styles.flex_col3}>
            <button className={section4Styles.btn}>Skills</button>
            <h3 className={section4Styles.subtitle}>The skills, tools and technologies I am really good at:</h3>
          </div>

          <div className={section4Styles.flex_row2}>
            <div className={section4Styles.flex_col4}>
              <img
                className={section4Styles.image14}
                src={'/assets/7446d1274ef810c6fd0249dfa87326e4.svg'}
                alt="alt text"
              />
              <h4 className={section4Styles.highlight3}>Tailwindcss</h4>
              <img className={section4Styles.image21} src={'/assets/mysql_logo.png'} alt="alt text" />
              <img className={section4Styles.image22} src={'/assets/sql_text.png'} alt="alt text" />
            </div>

            <div className={section4Styles.flex_col5}>
              <img
                className={section4Styles.image15}
                src={'/assets/6062d4f1cc411780d7ae13252979c6b1.svg'}
                alt="alt text"
              />
              <h4 className={section4Styles.highlight32}>Node.js</h4>
              <img className={section4Styles.image23} src={'/assets/postman_logo.png'} alt="alt text" />
              <img className={section4Styles.image24} src={'/assets/postman_text.png'} alt="alt text" />
            </div>
          </div>
        </div>

        <div className={section4Styles.flex_row3}>
          <div className={section4Styles.flex_col6}>
            <img
              className={section4Styles.image91}
              src={'/assets/9a8789ae95a4a94d9d6d829c46d112f0.svg'}
              alt="alt text"
            />
            <h4 className={section4Styles.highlight3}>Express.js</h4>
            <img
              className={section4Styles.image25}
              src={'/assets/10d36009610162a28eca956c33fcd46f.svg'}
              alt="alt text"
            />
            <h4 className={section4Styles.highlight33}>Docker</h4>
          </div>

          <div className={section4Styles.flex_col7}>
            <img
              className={section4Styles.image92}
              src={'/assets/f811ad394b23c69522b7d6ddf815f7b4.svg'}
              alt="alt text"
            />
            <h4 className={section4Styles.highlight34}>Git</h4>
            <img
              className={section4Styles.image26}
              src={'/assets/9966c66d8bdc9ea2bcdcd82884c346ab.svg'}
              alt="alt text"
            />
            <h4 className={section4Styles.highlight35}>Figma</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection4;
