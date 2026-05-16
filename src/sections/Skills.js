import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    label: 'AI / LLM',
    icon: '🧠',
    color: 'var(--accent)',
    skills: ['Large Language Models', 'LangChain', 'LangGraph', 'RAG Pipelines', 'Prompt Engineering', 'Agent-based Systems', 'Langfuse', 'FAISS (Vector DB)'],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: 'var(--accent2)',
    skills: ['Java', 'Python', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST API Design', 'Apex / SOQL'],
  },
  {
    label: 'Frontend',
    icon: '🎨',
    color: 'var(--accent3)',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'LWC (Salesforce)', 'Android SDK'],
  },
  {
    label: 'Data & ML',
    icon: '📊',
    color: 'var(--gold)',
    skills: ['SQL', 'MongoDB', 'MySQL', 'NoSQL Modeling', 'Scikit-learn', 'NumPy', 'Pandas', 'RapidMiner', 'Jupyter Notebook'],
  },
  {
    label: 'Observability',
    icon: '📡',
    color: 'var(--accent)',
    skills: ['Prometheus', 'Grafana', 'Kibana', 'Datadog', 'Adobe Analytics', 'Langfuse'],
  },
  {
    label: 'Tools & DevOps',
    icon: '🛠️',
    color: 'var(--accent2)',
    skills: ['Git', 'Selenium', 'Postman', 'Linux', 'VS Code', 'Android Studio', 'Rally (Agile)', 'Eclipse'],
  },
];

const certifications = [
  'Google Analytics Individual Qualification',
  'Oracle Cloud Infrastructure AI Foundations Associate',
  'Oracle Cloud OCI Generative AI Professional',
  'Introduction to Generative AI',
  'AI/ML Data Strategy and Ethical Consideration',
  'Artificial Intelligence and Machine Learning',
  'AI Minor Certification',
  'Programming for Everybody (Python Specialization)',
  'Diploma in C and C++',
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="section-label">04. Skills</p>
        <h2 className="section-title">Technologies & Tools</h2>

        <div className="skills__grid">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.label} style={{ '--sg-color': g.color }}>
              <div className="skill-group__header">
                <span className="skill-group__icon">{g.icon}</span>
                <span className="skill-group__label">{g.label}</span>
              </div>
              <div className="skill-group__pills">
                {g.skills.map(s => (
                  <span className="skill-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__certs">
          <p className="section-label" style={{ marginTop: '3rem' }}>Certifications</p>
          <div className="certs__grid">
            {certifications.map(c => (
              <div className="cert-item" key={c}>
                <span className="cert-item__check">✓</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
