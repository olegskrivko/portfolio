import * as React from "react";
// import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";

import Section from "../components/Section/Section";
import VerticalTimelineComponent from "../components/VerticalTimelineComponent/VerticalTimelineComponent";

import Intro from "../components/Intro/Intro";
import SkillCategory from "../components/SkillCategory/SkillCategory";
import PortfolioCategory from "../components/PortfolioCategory/PortfolioCategory";
import Contact from "../components/Contact/Contact";

// frontend
import IconJs from "../images/skills/js.png";
import IconReact from "../images/skills/react.png";
import IconVue from "../images/skills/react.png";
// backend
import IconPython from "../images/skills/python.svg";
import IconDjango from "../images/skills/python.svg";
import IconExpress from "../images/skills/python.svg";
import IconNode from "../images/skills/python.svg";
// tools & source control
import IconJira from "../images/skills/jira.png";
import IconVsc from "../images/skills/vsc.png";
import IconGit from "../images/skills/git.png";
// testing
import IconPostman from "../images/skills/html.png";
import IconSelenium from "../images/skills/selenium.png";
// markup & styling
import IconHtml from "../images/skills/html.png";
import IconCss from "../images/skills/css.png";
import IconSass from "../images/skills/sass.png";
import IconBootstrap from "../images/skills/bootstrap.png";
import IconMui from "../images/skills/sass.png";
// design & prototyping
import IconFigma from "../images/skills/figma.png";
import IconIllustrator from "../images/skills/illustrator.png";
// databases
import IconMongo from "../images/skills/figma.png";
import IconPostgresql from "../images/skills/figma.png";
import IconMysql from "../images/skills/figma.png";
import IconSql from "../images/skills/figma.png";

function Home({ portfolioData, educationData, experienceData }) {
  const skillCategories = {
    Frontend: [
      { name: "JavaScript", image: IconJs },
      { name: "React", image: IconReact },
      { name: "Vue", image: IconVue },
    ],
    Backend: [
      { name: "Python", image: IconPython },
      { name: "Django", image: IconDjango },
      { name: "Express.JS", image: IconExpress },
      { name: "Node.JS", image: IconNode },
    ],
    "Tools & Source Control": [
      { name: "Jira", image: IconJira },
      { name: "VSC", image: IconVsc },
      { name: "Git", image: IconGit },
    ],
    Testing: [
      { name: "Postman", image: IconPostman },
      { name: "Selenium", image: IconSelenium },
    ],
    "Markup & Styling": [
      { name: "HTML", image: IconHtml },
      { name: "CSS", image: IconCss },
      { name: "SASS", image: IconSass },
      { name: "Bootstrap", image: IconBootstrap },
      { name: "MUI", image: IconMui },
    ],
    "Design & Prototyping": [
      { name: "Figma", image: IconFigma },
      { name: "Illustrator", image: IconIllustrator },
    ],
    Databases: [
      { name: "MongoDB", image: IconMongo },
      { name: "PostgreSQL", image: IconPostgresql },
      { name: "MySQL", image: IconMysql },
      { name: "SQL", image: IconSql },
    ],
  };

  return (
    <React.Fragment>
      <Section id="home">
        <Container fixed>
          <Intro />
        </Container>
      </Section>

      <Section id="skills">
        <h2 className="section-title">Skills</h2>
        <Container fixed>
          <p
            style={{
              color: "#fff",
              fontWeight: 300,
              fontSize: "smaller",
              textAlign: "justify",
              marginBottom: "2rem",
            }}
          >
            Eager to explore and embrace new technologies, I am committed to
            expanding my skill set and deepening my understanding of emerging
            trends in frontend development. Continuously honing my craft, I am
            driven to contribute innovative solutions and enhance user
            experiences through cutting-edge technologies
          </p>

          {Object.entries(skillCategories).map(([category, skills], index) => (
            <SkillCategory key={index} title={category} skills={skills} />
          ))}
        </Container>
      </Section>

      <Section id="portfolio">
        <h2 className="section-title">Portfolio</h2>
        <Container fixed>
          <p
            style={{
              color: "#fff",
              fontWeight: 300,
              fontSize: "smaller",
              textAlign: "justify",
              marginBottom: "2rem",
            }}
          >
            With an insatiable curiosity and an eye for detail, I am determined
            to create seamless and visually captivating web experiences. I
            aspire to leverage my skills in frontend development to build
            engaging applications that leave a lasting impact on users.
          </p>

          <PortfolioCategory portfolioData={portfolioData} />
        </Container>
      </Section>
      <Section id="experience">
        <h2 className="section-title">Experience</h2>
        <Container fixed>
          <VerticalTimelineComponent timeline={experienceData} />
        </Container>
      </Section>
      <Section id="education">
        <h2 className="section-title">Education</h2>
        <Container fixed>
          <VerticalTimelineComponent timeline={educationData} />
        </Container>
      </Section>
      <Section id="contact">
        <h2 className="section-title">Contact</h2>
        <Container fixed>
          <Contact />
        </Container>
      </Section>
    </React.Fragment>
  );
}

export default Home;
