import React from "react";
import { useSelector } from "react-redux";
import { Istore } from "../../types";
import "./About.css";
import photo from "./photo.jpg";
import photo_dark from "./photo_dark.jpg";

const About = () => {
  const theme: string = useSelector((store: Istore) => {
    return store.theme.theme;
  });
  const skills: string[] = [
    "JS",
    "css",
    "html",
    "react",
    "redux",
    "typescript",
    "jest",
    "git",
  ];
  const experience: string[] = [
    "2+ year",
    "over 10 commercial projects",
    "Develop new user-facing features",
    "Build reusable code and libraries for future use",
    "Optimize application for maximum speed and scalability",
  ];
  const education: string[] = [
    "Kazan Federal University",
    "Institute of economic and financial management",
    "Specialist of economical security",
    "Years: 2016-2021",
    "Сertificate Udemy React",
    "Сertificate Udemy Node JS",
  ];
  return (
    <div className="about">
      <div className="about_welcome">
        Hi my name is Danil and I'm frontend developer
      </div>
      <div className="about_personal ">
        <div>
          <img
            className="about_photo"
            src={theme === "light" ? photo : photo_dark}
            alt="my face"
          />
        </div>
        <div className="about_text">
          23 years old energetic, hard-working programmer. I love to travel, do
          sports, watch movies. Took part in the program work and travel.
        </div>
      </div>
      <div className="about_container">
        <div className="about_box">
          <div className="about_box_header" style={{ color: "#7e8ddf" }}>
            Skills:
          </div>
          {skills.map((skill: string, i: number) => (
            <div className="about_box_item" key={i}>
              <div className="about_tag" />
              <div> {skill}</div>
            </div>
          ))}
        </div>
        <div className="about_box">
          <div className="about_box_header" style={{ color: "#3fad3f" }}>
            Work experience:
          </div>
          {experience.map((exp: string, i: number) => (
            <div className="about_box_item" key={i}>
              <div className="about_tag" />
              <div>{exp}</div>
            </div>
          ))}
        </div>
        <div className="about_box">
          <div className="about_box_header" style={{ color: "#701818da" }}>
            Education:
          </div>
          {education.map((edc: string, i: number) => (
            <div className="about_box_item" key={i}>
              <div className="about_tag" />
              <div>{edc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
