import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Software Developer I (R&D)',
    period: 'Aug 2023 - Present',
    location: 'Bangalore, India',
    type: 'Full-time',
    tag: 'Current',
    color: 'var(--accent)',
    projects: [
      {
        label: 'Project 1: Digital Case Management',
        icon: '🗂️',
        color: 'var(--accent2)',
        bullets: [
          'Built and owned full-stack features end-to-end - scalable Java & Apex REST APIs, LWC-based dynamic UIs, and PoC implementations that directly improved performance metrics and user adoption rates.',
          'Overhauled case submission and processing flows, cutting submission times significantly; introduced Selenium-based automated UI testing that reduced manual QA effort and improved release confidence.',
          'Architected a full observability stack with Prometheus counters, Grafana dashboards, and Kibana log analysis; layered in Adobe Analytics to track user behaviour funnels and drive performance improvements.',
        ],
      },
      {
        label: 'Project 2: LLM-Powered Case Assist',
        icon: '🤖',
        color: 'var(--accent)',
        bullets: [
          'Designed and implemented an LLM-powered Case Assist system using agent-based workflows with LangChain and LangGraph - tools fetch case metadata, historical cases, logs, and docs and pass structured context via RAG pipelines.',
          'Built scalable FastAPI backend services to orchestrate agent interactions, designed prompt strategies, and integrated Langfuse for tracing, evaluation, and monitoring of LLM execution paths.',
        ],
      },
    ],
    hackathons: true,
  },
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Software Developer Intern (R&D)',
    period: 'Jan 2023 – Jul 2023',
    location: 'Bangalore, India',
    type: 'Internship',
    tag: null,
    color: 'var(--accent2)',
    projects: [
      {
        label: 'Project: Digital Case Management',
        icon: '🗂️',
        color: 'var(--accent2)',
        bullets: [
          'Built Java and Apex backend services and LWC-based UI enhancements within enterprise-scale workflows, shipping features through structured code review cycles.',
          'Implemented and validated Adobe Analytics event tracking for product onboarding workflows, capturing page load times, funnel drop-offs, and case submission metrics to surface actionable performance insights.',
          'Collaborated across backend and frontend layers in a production environment, working within agile ceremonies and Rally-based sprint tracking.',
        ],
      },
    ],
},
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <p className="section-label">02. Experience</p>
        <h2 className="section-title">Where I've Worked</h2>

        <div className="exp__layout">
          <div className="exp__tabs">
            {experiences.map((e, i) => (
              <button
                key={i}
                className={`exp__tab ${active === i ? 'exp__tab--active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--tab-color': e.color }}
              >
                <span className="exp__tab-company">{e.company}</span>
                <span className="exp__tab-role">{e.role}</span>
                {e.tag && <span className="exp__tab-tag">{e.tag}</span>}
              </button>
            ))}
          </div>

          <div className="exp__content" key={active}>
            <div className="exp__header">
              <div>
                <h3 className="exp__role">{exp.role}</h3>
                <div className="exp__company">@ {exp.company}</div>
              </div>
              <div className="exp__meta">
                <span className="exp__period">{exp.period}</span>
                <span className="exp__location">{exp.location}</span>
                <span className="tag">{exp.type}</span>
              </div>
            </div>

            {exp.projects ? (
              <div className="exp__projects">
                {exp.projects.map((p, i) => (
                  <div className="exp__project-block" key={i} style={{ '--proj-color': p.color }}>
                    <div className="exp__project-label">
                      <span>{p.icon}</span>
                      {p.label}
                    </div>
                    <ul className="exp__bullets">
                      {p.bullets.map((b, j) => (
                        <li key={j}>
                          <span className="exp__bullet-arrow">▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="exp__bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="exp__bullet-arrow">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {exp.hackathons && (
              <div className="exp__hackathons">
                <div className="exp__hack-title">🏆 Recognition</div>
                <div className="exp__hack-items">
                  <div className="exp__hack-item">
                    <strong>Best Idea Award</strong> - AI-driven improvement ideas for Customer Service Portal recognized by senior leadership
                  </div>
                  <div className="exp__hack-item">
                    <strong>Security Hackathon Lead</strong> - Identified vulnerabilities and proposed mitigation strategies for production portal
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}