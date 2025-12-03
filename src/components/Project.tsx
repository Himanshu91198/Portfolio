import mock07 from "../assets/images/mock7.png";
import mock08 from "../assets/images/mock8.png";
import mock09 from "../assets/images/mock9.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://the-elmora.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://the-elmora.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>The Elmora</h2>
          </a>
          <p>
            Built a cabin booking app for Elmora officials with guest
            check-in/out and guest management features using React, TypeScript,
            Redux, React Query, Supabase, Styled Components, and the Compound
            Component pattern.
          </p>
        </div>
        <div className="project">
          <a
            href="https://himanshu-food-menu-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://himanshu-food-menu-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Swiggy Responsive UI</h2>
          </a>
          <p>
            Built a responsive Swiggy-style food browsing UI that lets users
            explore cuisines by country, using modern frontend design and layout
            practices.
          </p>
        </div>
        <div className="project">
          <a
            href="https://recipequery.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://recipequery.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Forkify</h2>
          </a>
          <p>
            Built a Forkify-style recipe app to browse dishes like pizza and
            pasta, view ingredient quantities by servings, and bookmark
            favorites using React, Context API, TailwindCSS, and Axios.
          </p>
        </div>
        <div className="project">
          <a
            href="https://win-win-dice.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://win-win-dice.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Dice Game</h2>
          </a>
          <p>
            Built a two-player dice game where players roll, hold scores, and
            race to reach the final score—rolling a 0 resets the current score
            but keeps the held points. Developed using HTML, CSS, Vanilla
            JavaScript, and jQuery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
