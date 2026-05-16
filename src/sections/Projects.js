import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'LLM-Powered Case Assist',
    org: 'Hewlett Packard Enterprise',
    desc: 'Agent-based AI system using LangChain and LangGraph that fetches case metadata, historical cases, logs, and documentation, passing structured context to an LLM via RAG pipelines to improve case resolution workflows.',
    tags: ['LangChain', 'LangGraph', 'FastAPI', 'RAG', 'Langfuse', 'Python'],
    category: 'AI / LLM',
    highlight: true,
    links: [],
    icon: '🤖',
  },
  {
    title: 'Perceptual Learning Study',
    org: 'Georgia Institute of Technology',
    desc: 'Cognitive science study comparing exemplar-based vs schema-based visual representations for agricultural pest detection. Built a React experimental interface + Flask backend with Signal Detection Theory analysis.',
    tags: ['React', 'Flask', 'Python', 'NumPy', 'Pandas', 'SDT'],
    category: 'Research',
    highlight: false,
    links: [],
    icon: '🧠',
  },
  {
    title: 'TasteBuds',
    org: 'Georgia Institute of Technology',
    desc: 'Intelligent multi-layer food platform augmenting restaurant discovery and surplus food delivery using geospatial queries, vector-based taste similarity, crowd-sourced feedback, and real-time NGO capacity checks.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'FAISS', 'Geospatial'],
    category: 'Full Stack',
    highlight: false,
    links: [],
    icon: '🍔',
  },
  {
    title: 'Rainfall Prediction India',
    org: 'Manipal Institute of Technology',
    desc: 'Applied regression models to forecast rainfall patterns across India using Python and Scikit-learn, focusing on feature selection, EDA, and model evaluation for improved prediction accuracy.',
    tags: ['Python', 'Scikit-learn', 'EDA', 'ML', 'Pandas'],
    category: 'ML',
    highlight: false,
    links: [],
    icon: '🌧️',
  },
  {
    title: 'Soothify',
    org: 'Manipal Institute of Technology',
    desc: 'Android mental health support application built with Java and XML, featuring a user-friendly mobile interface, backend integration, data handling, and user interaction workflows.',
    tags: ['Java', 'Android SDK', 'XML', 'Android Studio'],
    category: 'Mobile',
    highlight: false,
    links: [],
    icon: '💚',
  },
  {
    title: 'Trade Organic Platform',
    org: 'Manipal Institute of Technology',
    desc: 'Django-based web platform supporting direct farmer-to-market interactions with backend workflows, database integration, and dynamic data handling for improved accessibility and communication.',
    tags: ['Django', 'HTML', 'CSS', 'JavaScript', 'Python'],
    category: 'Full Stack',
    highlight: false,
    links: [],
    icon: '🌱',
  },
  {
    title: 'Vehicle & Obstacle Detection',
    org: 'Manipal Institute of Technology',
    desc: 'Computer vision system detecting vehicles and obstacles from continuous video input, working with frame processing, object detection under varying lighting and motion conditions using OpenCV.',
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    category: 'Computer Vision',
    highlight: false,
    links: [],
    icon: '👁️',
  },
  {
    title: 'Diabetes Prediction',
    org: 'Manipal Institute of Technology',
    desc: 'Classification models built in RapidMiner with data preprocessing, feature engineering, and model tuning to enhance predictive accuracy for diabetes detection.',
    tags: ['RapidMiner', 'ML', 'Data Preprocessing', 'Classification'],
    category: 'ML',
    highlight: false,
    links: [],
    icon: '🏥',
  },
  {
    title: 'Design of Learning Environments',
    org: 'Georgia Institute of Technology - College of Lifetime Learning',
    desc: 'Participant in an IRB-approved research study exploring AI-assisted course design grounded in learning sciences. Covers UDL, cognitive load theory, adaptive learning systems, and affective engagement using AI platforms Socratic Mind and CoDialogue Space.',
    tags: ['AI in Education', 'UDL', 'Cognitive Load Theory', 'Adaptive Learning', 'LLMs', 'Research Study'],
    category: 'Research',
    highlight: false,
    links: [],
    icon: '📚',
  },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <p className="section-label">03. Projects</p>
        <h2 className="section-title">Things I have Built</h2>

        <div className="projects__filters">
          {categories.map(c => (
            <button
              key={c}
              className={`projects__filter ${filter === c ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((p) => (
            <div
              className={`project-card ${p.highlight ? 'project-card--highlight' : ''}`}
              key={p.title}
            >
              <div className="project-card__top">
                <span className="project-card__icon">{p.icon}</span>
                <span className="project-card__category tag">{p.category}</span>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <div className="project-card__org">{p.org}</div>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map(t => (
                  <span className="project-card__tag" key={t}>{t}</span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="project-card__links">
                  {p.links.map(l => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="project-card__link">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
