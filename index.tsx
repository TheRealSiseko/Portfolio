import React from 'react';
import ReactDOM from 'react-dom/client';

const portfolioData = {
  name: "Siseko Sigoxo",
  title: "IT Technician",
  company: "Capaciti",
  location: "Johannesburg",
  email: "sgsigoxo@gmail.com",
  linkedin: "in/siseko-sigoxo",
  github: "TheRealSiseko",
  profileImageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQF77gB6qbeDGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683467839467?e=1757548800&v=beta&t=zy5AEODvhGPKtEbj2_3uOnwIPAWJYGYEyNiGPM7-J6o",
  bio: `I'm an IT Technician with a passion for technology, cloud computing, and systems support. I enjoy solving real-world problems using technology and continuously learning new systems, tools, and platforms. I bring hands-on experience in hardware and software support, network troubleshooting, and cloud-based services (especially Microsoft Azure).`,
  certifications: [
    { name: "CompTIA A+", imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "CompTIA Network+", imageUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Microsoft Certified: Azure Fundamentals", imageUrl: "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Microsoft Certified: Azure Administrator Associate", imageUrl: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ],
  skills: {
    "IT Support": ["Hardware & software troubleshooting", "User support", "System maintenance"],
    "Networking": ["LAN/WAN configuration", "IP addressing", "DNS", "DHCP"],
    "Cloud Computing": ["Microsoft Azure", "Azure Active Directory", "VM management"],
    "Operating Systems": ["Windows", "Linux (basic)"],
    "Other Tools": ["Git", "PowerShell", "Office 365", "Microsoft Endpoint Manager"],
  },
  repositories: [
    { name: "Marketing-Content-Creator", tag: "TypeScript", imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Prototype", tag: "Public", imageUrl: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "AI-Resume-Builder", tag: "Public", imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Sentiment-Analysis-Dashboard", tag: "Public", imageUrl: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ],
};

const App = () => {
    return (
        <>
            <header className="header">
                <h1>{portfolioData.name}</h1>
                <p className="subtitle">{portfolioData.title}</p>
            </header>

            <main>
                <section id="contact">
                    <h2>Contact & Links</h2>
                    <ul className="contact-list">
                        <li><i className="fas fa-envelope"></i><a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a></li>
                        <li><i className="fab fa-linkedin"></i><a href={`https://linkedin.com/${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer">linkedin.com/{portfolioData.linkedin}</a></li>
                        <li><i className="fab fa-github"></i><a href={`https://github.com/${portfolioData.github}`} target="_blank" rel="noopener noreferrer">github.com/{portfolioData.github}</a></li>
                        <li><i className="fas fa-map-marker-alt"></i><span>{portfolioData.location}</span></li>
                        <li><i className="fas fa-building"></i><span>{portfolioData.company}</span></li>
                    </ul>
                </section>
                
                <section id="about" className="about">
                    <h2>About Me</h2>
                    <div className="about-container">
                        <img src={portfolioData.profileImageUrl} alt="A portrait of Siseko Sigoxo" className="profile-image" />
                        <p>{portfolioData.bio}</p>
                    </div>
                </section>
                
                <section id="certifications">
                    <h2>Certifications</h2>
                    <div className="cert-grid">
                        {portfolioData.certifications.map(cert => (
                             <div key={cert.name} className="cert-card">
                                <img src={cert.imageUrl} alt={`${cert.name} Badge`} className="cert-badge" />
                                <p className="cert-name">{cert.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="skills">
                    <h2>Skills &amp; Tools</h2>
                     {Object.entries(portfolioData.skills).map(([category, skillsList]) => (
                        <div key={category} className="skill-category">
                            <h3>{category}</h3>
                            <ul className="skills-tag-list">
                                {skillsList.map(skill => (
                                    <li key={skill} className="skill-tag">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section id="repositories">
                    <h2>Popular Repositories</h2>
                    <div className="card-grid">
                        {portfolioData.repositories.map(repo => (
                            <a 
                                href={`https://github.com/${portfolioData.github}/${repo.name}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="repo-card-link"
                                key={repo.name}
                            >
                                <div className="repo-card">
                                    <img src={repo.imageUrl} alt={`${repo.name} project thumbnail`} className="repo-card-img" />
                                    <div className="repo-card-content">
                                        <div className="repo-card-header">
                                            <h3><i className="fab fa-github"></i> {repo.name}</h3>
                                        </div>
                                        <span className="repo-tag">{repo.tag}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);