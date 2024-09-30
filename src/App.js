import { useState } from "react";
import "./App.css";
import portfolioItems from "./data";

function App() {
  // State for the selected category filter
  const [selectedCategory, setSelectedCategory] = useState("Website");

  // Filtered portfolio items based on the selected category
  const filteredItems = portfolioItems.filter((item) => {
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
            Formerly specializing in Interactive Multimedia
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
                  <div className="item-title">{item.title}</div>
                  <div className="item-desc">{item.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="about-n-capabilities">
          <div className="about-container">
            <div className="title">About me</div>
            <div className="about-desc">
              Hello, I'm Nevan Marshelim, a passionate Computer Science graduate
              specializing in Multimedia. With two years of experience in a
              student organization that honed my teamwork and communication
              skills, I also bring one year of practical experience in ReactJS
              as an intern. I thrive in collaborative environments and am eager
              to apply my skills in innovative projects.
            </div>
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
        <div className="gradient-bottom"></div>
      </div>
    </>
  );
}

export default App;
