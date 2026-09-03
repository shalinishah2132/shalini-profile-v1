import { useState } from 'react';
import './App.css';

const projects = [
  {
    id: 1,
    title: "MiniGPT (175M GPT-2)",
    description: "Built a 175M parameter GPT-2 model from scratch, including custom tokenization and training loop.",
    tech: ["PyTorch", "Python", "Transformers"]
  },
  {
    id: 2,
    title: "AI Minor Capstone",
    description: "Developed an end-to-end machine learning pipeline for predictive analytics at IIT Ropar.",
    tech: ["Scikit-Learn", "Pandas", "React"]
  },
  {
    id: 3,
    title: "Personal Profile v1",
    description: "A responsive, interactive personal portfolio website built with React and deployed on Vercel.",
    tech: ["React", "Tailwind CSS", "Vercel"]
  }
];

const skillsList = [
  "Python", "JavaScript", "React", "PyTorch", 
  "Machine Learning", "Data Structures", "Git", "Tailwind CSS"
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [likes, setLikes] = useState({});

  const filteredSkills = skillsList.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="header">
        <div className="profile-photo">👩‍💻</div>
        <h1 className="name">Shalini</h1>
        <p className="bio">
          IIT Ropar AI Minor.<br />
          Built MiniGPT (175M GPT-2) from scratch.
        </p>
      </header>

      {/* PROJECTS */}
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-badges">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => toggleLike(project.id)}
                className={`like-button ${likes[project.id] ? 'liked' : 'not-liked'}`}
              >
                {likes[project.id] ? '❤️ Liked' : '🤍 Like'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        
        <input
          type="text"
          placeholder="Search skills (e.g., 'Python')..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {filteredSkills.length > 0 ? (
          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-icon">⚡</span>
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">
            No skills found matching "<strong>{searchTerm}</strong>".
          </p>
        )}
      </section>
    </div>
  );
}

export default App;