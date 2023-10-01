import React from "react";
import "./portfolio.css";

function Portfolio() {
  console.log("hello");
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <span>
              <ul className="nav-links" id="dumdum">
                <li onClick={() => scrollToSection("divOne")}>
                  <button className="nav-button">About</button>
                </li>
                <li onClick={() => scrollToSection("project")}>
                  <button className="nav-button">Projects</button>
                </li>
                <li onClick={() => scrollToSection("about")}>
                  <button className="nav-button">Contact</button>
                </li>
              </ul>
            </span>
            <span className="container">
              <a href="/" className="logo">
                AS
              </a>
            </span>
          </ul>
        </nav>
      </header>
      <div id="divOne">
        <span id="me">
          <p id="firstLine">Hi, my name is</p>
          <p id="name">Aryan Sherigar.</p>
          <span id="extra">
            <p>
              I am a student of IIT(ISM), Dhanbad. I am Currently pursuing
              B.Tech in Petroleum Engineering.
            </p>
            <p> I have interest in the the domain of Web3 and Blockchain.</p>
          </span>
        </span>
      </div>
      <div id="project">
        <div id="projectOne">
          <a
            id="projectA"
            href="https://github.com/AryanSherigar/Woc-Trex-Game"
          >
            T-rex Dino Game
          </a>
          <br></br>
          <br></br>
          <br></br>
          <p>
            This was the project that I made during the Winter of Code
            Competition.
          </p>
          <p>It was a try to recreate the famous chrome video game</p>
        </div>
        <div id="projectTwo">
          <a id="projectA" href="https://github.com/shretimag/ATLAS">
            ATLAS
          </a>
          <br></br>
          <br></br>
          <br></br>
          <p>This was made during the Hackfest</p>
          <p>It was to make an all in one website for the college student.</p>
        </div>
      </div>

      <div id="about">
        <p>Feel free to contact me</p>
        <button id="contactme"> Contact Me</button>
      </div>

      <div id="contact">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Portfolio;
