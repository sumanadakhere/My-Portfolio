
import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main className="page">
      <p className="label">A CREATIVE PORTFOLIO</p>
      <h1>SUMAN ADAK</h1>
      <h2>Graphic Designer <span>•</span> Video Editing</h2>
      <p className="description">
        Creating visuals, exploring ideas, and bringing creativity to life.
      </p>

      <section>
        <h3>ABOUT ME</h3>
        <p>
          I am passionate about graphic design, video editing,
          thumbnails, banners, and social media content.
        </p>
      </section>

      <section>
        <h3>MY SKILLS</h3>
        <div className="skills">
          <span>Graphic Design</span>
          <span>Video Editing</span>
          <span>MS Office</span>
          <span>Basic AI Tools</span>
          <span>Thumbnail Design</span>
        </div>
      </section>

      <section>
        <h3>EDUCATION</h3>
        <p>Bachelor of Arts (B.A.) — 2023</p>
        <p>Diploma in Information Technology Application</p>
        <p>DITA Score: 92.80%</p>
      </section>

      <footer>MORE CREATIVE PROJECTS COMING SOON</footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictM
    ode>
);
