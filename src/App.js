import { useState } from "react";
import "./App.css";
import portfolioItems from "./data";

function App() {
  // State for the selected category filter
  const [selectedCategory, setSelectedCategory] = useState("Website");

  const phoneNumber = "6281996200002"; // use country code, no +
  const email = "marshelim.nevan@gmail.com";

  const whatsappMessage = encodeURIComponent(
    "Hi Nevan, I'm interested in working together."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  const emailUrl = `mailto:${email}?subject=Project%20Inquiry`;

  const sortedItems = [...portfolioItems].sort((a, b) => {
    const yearDiff = Number(b.year) - Number(a.year);
    if (yearDiff !== 0) return yearDiff;

    return b.id - a.id; // newer ID first
  });

  // Filtered portfolio items based on the selected category
  const filteredItems = [...sortedItems].filter((item) => {
    return item.category === selectedCategory; // Show filtered items
  });

  // Sub-menu options
  const categories = ["Website", "UI/UX"];
  const capabilities = [
    "Front End Development",
    "UI/UX Designer",
    "Web Design",
    "Figma",
    "Photoshop",
  ];
  return (
    <>
      <div className="layout">
        <div className="gradient-top"></div>
        <div className="main-title">
          <div className="name-title">Hello,</div>
          <div className="name-title">I'm Nevan Marshelim</div>
          <div className="title-desc">
            Computer Science Graduate from BINUS University
          </div>
          <div className="title-desc">
            Specializing in Interactive Multimedia
          </div>
        </div>
        <div className="works">
          <div className="title">Works</div>
          <div className="submenu">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`submenu-item ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </span>
            ))}
          </div>
          {/* Display filtered portfolio items */}
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <a
                className="link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div key={item.id} className="portfolio-item">
                  <img src={item.image} alt={item.title} />
                  <h1 className="item-title">{item.title}</h1>
                  <p className="item-year">{item.year}</p>
                  {item.desc && <h4 className="item-desc">{item.desc}</h4>}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="about-n-capabilities">
          <div className="about-container">
            <div className="title">About me</div>
            <h2 className="about-desc">
              I have around three years of hands-on experience in frontend
              development, starting with a ReactJS internship where I worked on
              real-world applications and user-focused interfaces. I further
              strengthened my skills by independently developing a full
              application as part of my final university project.
              <br />
              <br />
              Currently, I work as a Web Developer, building and maintaining web
              applications using ReactJS, Next.js, and the MERN stack. Through
              this journey, I’ve grown from a frontend-focused developer into a
              more well-rounded web developer, with a strong emphasis on clean
              UI, usability, and maintainable code.
            </h2>
          </div>
          <div className="capabilities-container">
            <div className="title">My Capabilities</div>
            <ul className="capabilities-list">
              {capabilities.map((capability, index) => (
                <li key={index} className="capability-item">
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-text">
              <h3>Get in Touch</h3>
              <p>
                Interested in working together or have something in mind?
                <br />
                Feel free to reach out anytime.
              </p>
            </div>

            <div className="footer-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-button"
              >
                WhatsApp
              </a>

              <a href={emailUrl} className="footer-button">
                Email
              </a>
            </div>

            <small className="footer-note">
              Let’s build something meaningful.
            </small>
          </div>
        </footer>
        <div className="gradient-bottom"></div>
      </div>
    </>
  );
}

export default App;
