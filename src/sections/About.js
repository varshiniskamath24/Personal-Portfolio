import React from 'react';
import './About.css';

const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'Master of Science in Computer Science',
    spec: 'Specialization: Artificial Intelligence',
    period: 'Aug 2025 - Present',
    gpa: '4.00 / 4.00',
    courses: ['Advanced Internet Computing systems and applications', 'Introduction to Cognitive Science','Software Development Process', 'Human and Machine Learning','Knowledge-Based AI','Machine Learning','Conversational AI'],
    icon: '🎓',
    accent: 'var(--accent)',
  },
  {
    school: 'Manipal Institute of Technology',
    degree: 'B.Tech in Information Technology',
    spec: 'Minor: Data Analytics',
    period: 'Jul 2019 - Jun 2023',
    gpa: '9.00 / 10.00',
    courses: ['Machine Learning', 'Big Data', 'Data Mining and warehousing', 'Computer Networks', 'Data Structures','Object Oriented Programming','Semantic Web','Database Systems','Information Retrieval','Pattern Recognition'],
    icon: '🏛️',
    accent: 'var(--accent2)',
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">

          <div className="about__left">
            <p className="section-label">01. About Me</p>
            <h2 className="section-title">
              Engineer who<br />
              <span className="about__title-em">ships intelligent systems</span>
            </h2>
            <p className="about__text">
            I am a <strong>Software Developer at Hewlett Packard Enterprise</strong> who lives at the intersection of AI and engineering - building LLM-powered systems and scalable full-stack products that real users depend on. From architecting <em>agentic workflows with LangChain and LangGraph</em> to designing RAG pipelines and full observability stacks, I care deeply about making AI not just functional, but production-ready and trustworthy.
          </p>
          <p className="about__text">
            Concurrently, I am pursuing my <strong>MS in Computer Science at Georgia Institute of Technology</strong> (GPA 4.0), specializing in Artificial Intelligence - where my academic work explores <em>human cognition, memory, and perceptual learning</em>, and how those principles can inspire better AI systems. I find it endlessly fascinating that the best AI research often starts by asking how humans think.
          </p>
          <p className="about__text">
            I don't just build what I'm asked to - I bring ideas. I've been <strong>recognized by HPE senior leadership</strong> for AI-driven innovations pitched at internal hackathons, and I actively contribute to peer learning communities at Georgia Tech. I'm driven by a simple belief: <em>the best engineers make complex systems feel effortless</em>.
          </p>

            <div className="about__links">
              <div className="about__link-group">
                <span className="about__link-group-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </span>
                <div className="about__link-items">
                  <a href="https://github.com/varshiniskamath24" target="_blank" rel="noopener noreferrer" className="about__link">varshiniskamath24</a>
                  <a href="https://github.gatech.edu/vkamath32" target="_blank" rel="noopener noreferrer" className="about__link">vkamath32</a>
                </div>
              </div>

              <div className="about__link-group">
                <span className="about__link-group-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  Email
                </span>
                <div className="about__link-items">
                  <a href="mailto:vkamath32@gatech.edu" className="about__link">vkamath32@gatech.edu</a>
                  <a href="mailto:varshiniskamath2001@gmail.com" className="about__link">varshiniskamath2001@gmail.com</a>
                </div>
              </div>
            </div>

          </div>{/* end about__left */}

          <div className="about__right">
            <p className="section-label">Education</p>
            <div className="about__edu">
              {education.map((e) => (
                <div className="edu-card" key={e.school} style={{ '--edu-accent': e.accent }}>
                  <div className="edu-card__icon">{e.icon}</div>
                  <div className="edu-card__content">
                    <div className="edu-card__period">{e.period}</div>
                    <h3 className="edu-card__school">{e.school}</h3>
                    <div className="edu-card__degree">{e.degree}</div>
                    <div className="edu-card__spec">{e.spec}</div>
                    <div className="edu-card__gpa">
                      <span className="edu-card__gpa-label">CGPA</span>
                      <span className="edu-card__gpa-val">{e.gpa}</span>
                    </div>
                    <div className="edu-card__courses">
                      {e.courses.map(c => <span key={c} className="tag">{c}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{/* end about__right */}

        </div>{/* end about__grid */}
      </div>{/* end container */}
    </section>
  );
}