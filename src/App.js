import React, { useState, useEffect, useRef } from 'react';
import bakkah_logo from './assets/images/logo-1.png';
import rakaya_logo from './assets/images/logo-2.png';
import blog_logo from './assets/images/logo-3.png';
import private_logo from './assets/images/logo-4.png';
import './App.css';

function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(false);
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when clicking a link
  const handleNavLinkClick = (elementRef) => {
    scrollToSection(elementRef);
    setMobileMenuOpen(false);
  };
  
  // Apply theme to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  // Smooth scroll function
  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Bakkah Hotel',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented user authentication, product catalog, shopping cart, and payment processing.',
      technologies: ['PHP/Laravel', 'MySQL', 'HTML/CSS', 'JS', 'Tailwind CSS', 'Filament'],
      image: bakkah_logo,
      website: 'https://hotel.azizraad.com',
    },
    {
      id: 2,
      title: 'Rakaya Library',
      description: 'Designed and implemented a CI/CD pipeline using Jenkins, Docker, and Kubernetes for automated testing and deployment of microservices.',
      technologies: ['PHP/Laravel', 'MySQL', 'HTML/CSS'],
      image: rakaya_logo,
      website: 'https://library.azizraad.com',
    },
    {
      id: 3,
      title: 'Tech Blog',
      description: 'Built a real-time chat application with WebSockets, featuring private messaging, group chats, and file sharing capabilities.',
      technologies: ['PHP/Laravel', 'MySQL', 'HTML/CSS'],
      image: blog_logo,
      website: 'https://blog.azizraad.com',
    },
    {
      id: 4,
      title: 'Employee Evaluation System',
      description: 'Developed infrastructure as code solutions for automating cloud resource provisioning and configuration management.',
      technologies: ['PHP/Laravel', 'MySQL', 'HTML/CSS', 'JS', 'Filament'],
      image: private_logo,
      website: 'https://azizraad.com',
    },
    {
      id: 5,
      title: 'CRM',
      description: 'Developed infrastructure as code solutions for automating cloud resource provisioning and configuration management.',
      technologies: ['PHP/Laravel', 'MySQL', 'RESTAPI', 'Linux', 'Nginx', 'JS', 'HTML/CSS', 'Flutter'],
      image: private_logo,
      website: 'https://azizraad.com',
    },
  ];

  // Social media links
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/azizraad', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/azizraad', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://x.com/azizscript', icon: 'twitter' },
    { name: 'Email', url: 'mailto:me@azizraad.com', icon: 'envelope' },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">Portfolio</div>
          
          {/* Burger Menu Button */}
          <button 
            className={`burger-menu ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Navigation Links */}
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavLinkClick(aboutRef); }}>About</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavLinkClick(projectsRef); }}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavLinkClick(skillsRef); }}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavLinkClick(contactRef); }}>Contact</a></li>
            <li>
              <button 
                className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} 
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Hello, I'm <span className="highlight">Abdulaziz Raad</span></h1>
            <h2>Full Stack Developer & DevOps Engineer</h2>
            <p>I build and deploy modern web applications with a focus on scalability, performance, and user experience.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleNavLinkClick(projectsRef); }}>View My Work</a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); handleNavLinkClick(contactRef); }}>Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <div className="profile-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate Full Stack Developer and DevOps Engineer with extensive experience in building and deploying web applications. 
                With a strong foundation in back-end technologies, I create seamless user experiences while ensuring robust, 
                scalable infrastructure.
              </p>
              <p>
                My expertise spans across the entire development lifecycle, from conceptualization and design to implementation, testing, 
                deployment, and maintenance. I'm particularly interested in cloud-native architectures.
              </p>
              <p>
                When I'm not coding, I enjoy continuously learning about emerging technologies and best practices in the industry.
              </p>
            </div>
            <div className="skills-container">
              <h3 id="skills" ref={skillsRef}>Technical Skills</h3>
              <div className="skills-grid">

              <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>PHP/Laravel</li>
                    <li>Python</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>DevOps</h4>
                  <ul>
                    <li>CI/CD Pipelines</li>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Linux</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Database</h4>
                  <ul>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>Database Design</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>HTML5 & CSS3</li>
                    <li>Flutter</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="section projects-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="visit-btn">Visit</a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Feel free to reach out to me for collaboration, job opportunities, or just to say hello!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>me@azizraad.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+966 50 579 0211</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Jeddah, Saudi Arabia</span>
                </div>
              </div>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">{link.icon === 'github' ? '🔗' : 
                                                   link.icon === 'linkedin' ? '💼' : 
                                                   link.icon === 'twitter' ? '🐦' : '✉️'}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AzizRaad. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
