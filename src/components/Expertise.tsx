import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
  "React",
  "Next",
  "TypeScript",
  "JavaScript",
  "JQuery",
  "HTML5",
  "CSS3",
  "SASS",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "Zustand",
  "Jest",
  "GSAP",
  "Framer Motion",
];

const labelsSecond = [
  "Node",
  "Express",
  "Python",
  "FastAPI",
  "C#",
  ".NET (Entity)",
  "Supabase",
];

const labelsThird = [
  "JIRA Agile",
  "Git",
  "Bitbucket",
  "Webpack",
  "Babel",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              I build modern frontend applications using React, Next.js,
              TypeScript, and JavaScript. I create responsive, high-performance
              UIs with HTML5, CSS3, SASS, Tailwind, and Bootstrap. I work with
              Redux and Zustand for state management, use GSAP and Framer Motion
              for animations, and rely on Jest for reliable testing. I also
              handle jQuery in legacy workflows.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>Backend Development</h3>
            <p>
              I build backend systems using Node.js, Express, Python, FastAPI,
              and C# with .NET (Entity Framework), Supabase. I develop efficient
              APIs, manage authentication and data models, and work with
              scalable server-side architectures. I focus on clean, maintainable
              code, performance optimization, and secure communication between
              frontend and backend.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Database & Technologies</h3>
            <p>
              I work with MySQL, MongoDB, and PostgreSQL, designing efficient
              schemas and writing optimized queries. I use Git and Bitbucket for
              version control and rely on Webpack and Babel for building
              production-ready applications. I also follow Agile workflows using
              JIRA to manage tasks and deliver features efficiently.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
