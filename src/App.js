import React ,{ useRef } from "react";
import "./App.css"; // Add your CSS styling here
import profileImage from "./profile.jpg"; 
function App() {
  const bioRef = useRef(null);
  const educationRef = useRef(null);
  const hobbiesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <header className="header">
      
      <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="circle-border"></div>
        </div>
        <h1>Sushma</h1>
        <p>Web Developer</p>
      </header>

      <section className="bio">
        <h2>Bios</h2>
        <p>Date of Birth: October 4,2003</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>School</h3>
          <p>Shikhara English medium school</p>
        </div>

        <div className="intermediate">
          <h3>Intermediate</h3>
          <p>Narayana</p>
        </div>

        <div className="btech">
          <h3>B.Tech</h3>
          <p>Vit-ap</p>
        </div>
      </section>
      <section className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Cooking</li>
          <li>Reading</li>
          <li>Watching Movies</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Deep Learning</li>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Problem Solving</li>
        </ul>
      </section>
      <section className="Languages">
        <h2>Languages</h2>
        <ul>
          <li>English</li>
          <li>Hindi</li>
          <li>Telugu</li>
          <li>Spanish</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
       <div className="social-icons">
        <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
        linkedin
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>    twitter
        </a>
      </div>
      </section>
      
    </div>
  );
}

export default App;

