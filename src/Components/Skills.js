import React from "react";

const Skills = ({ data }) => {
  return (
    <>
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Competences</h2>
            {/* <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p> */}
          </div>

          {/* <h2>Competences</h2>
          <h6>My Programming Language Proficiency</h6> */}
          {data &&
            data.map((skill, i) => (
              <div
                className="skillbar clearfix"
                data-percent={skill.percent}
                key={i}
              >
                <div className="skillbar-title" style={{ background: skill.color }}>
                  <span>{skill.name}</span>
                </div>
                <div
                  className="skillbar-bar"
                  style={{ background: skill.barColor }}
                ></div>
                <div className="skill-bar-percent">{skill.percent}</div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
