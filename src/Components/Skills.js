import React from "react";

const Skills = ({ data }) => {
  return (
    <>
      <section class="main-section" id="skills">
        <div class="container">
          <h2>Skills</h2>
          <h6>My Programming Language Proficiency</h6>
          {data &&
            data.map((skill) => (
              <div class="skillbar clearfix" data-percent={skill.percent}>
                <div class="skillbar-title" style={{ background: skill.color }}>
                  <span>{skill.name}</span>
                </div>
                <div
                  class="skillbar-bar"
                  style={{ background: skill.barColor }}
                ></div>
                <div class="skill-bar-percent">{skill.percent}</div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
