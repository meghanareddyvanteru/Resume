import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="resume-container">
        <header>
            <h1>MEGHANA REDDY VANTERU</h1>
            <p><strong>QUICK LEARNER, PROBLEM SOLVER</strong></p>
            <div class="contact-info">
                <div class="contact-line">
                    <span class="contact-item">Email: meghanareddyvanteru@gmail.com</span>
                    <span class="contact-item">Phone: +91-7013456145</span>
                    <span class="contact-item">LinkedIn: LINKEDIN</span>
                    <span class="contact-item">GitHub: GITHUB</span>
                </div>
            </div>
        </header>
        
        <section class="education">
            <h2>EDUCATION</h2>
            
            <div class="education-item">
                <div class="experience-header">
                    <div class="job-company">
                        <h3>B.E in Computer Science</h3>
                        <div>Vasavi College of Engineering</div>
                    </div>
                    <div class="date-range">CGPA: 8.9/10.0</div>
                </div>
            </div>
        </section>
        
        <section class="projects">
            <h2>PROJECTS</h2>
            
            <div class="project-item">
                <h3>Crop Recommendation System</h3>
                <ul>
                    <li>Developed a Python application that recommends crops based on soil properties (pH, nitrogen, etc.), temperature, humidity, and rainfall data.</li>
                    <li>Utilized the KNeighborsClassifier (KNN) algorithm from Scikit-learn to achieve 97% accuracy in predicting optimal crop choices for specific conditions.</li>
                    <li>This project demonstrates proficiency in Python, machine learning fundamentals, and data analysis techniques.</li>
                </ul>
                <div class="github-link">Github Link</div>
            </div>
            
            <div class="project-item">
                <h3>Galactic Battles</h3>
                <ul>
                    <li>Designed and built a 2D space shooter game using Python's Pygame library.</li>
                    <li>Implemented core gameplay mechanics like player movement, shooting asteroids.</li>
                    <li>This project highlights skills in game development, object-oriented programming with Python.</li>
                </ul>
                <div class="github-link">Github Link</div>
            </div>
        </section>
        
        <section class="skills">
            <h2>SKILLS</h2>
            
            <div class="skills-container">
                <h3>Programming Languages</h3>
                <ul class="skills-list">
                    <li>Python</li>
                    <li>C</li>
                </ul>
            </div>
            
            <div class="skills-container">
                <h3>Core Software</h3>
                <ul class="skills-list">
                    <li>Data Structures and Algorithms</li>
                    <li>OOP</li>
                </ul>
            </div>
            
            <div class="skills-container">
                <h3>Web Development</h3>
                <ul class="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            
            <div class="skills-container">
                <h3>Soft Skills</h3>
                <ul class="skills-list">
                    <li>Problem-solving</li>
                </ul>
            </div>
        </section>
        
        <section class="achievements">
            <h2>ACHIEVEMENTS</h2>
            
            <ul>
                <li>Participated in Bellman Crown Coding Contest 2023 (National level coding competition). Certificate</li>
                <li>Participated in Innovasia 2k23. Certificate</li>
                <li>NPTEL Elite in C programming language certified by IIT Madras. Certificate</li>
                <li>Completed Python foundation certification course in Infosys springboard. Certificate</li>
                <li>Completed basics of Python course in Infosys Springboard. Certificate</li>
                <li>Completed Programming Essentials in Python course in Cisco networking academy. Certificate</li>
                <li>5 Stars in Python and Problem Solving on HackerRank platform.</li>
                <li>Completed Python skill certification test in HackerRank. Certificate</li>
                <li>Completed Program Solving (Basic) skill certification test in HackerRank. Certificate</li>
            </ul>
        </section>
        
        <section class="coding-profiles">
            <h2>CODING PROFILES</h2>
            
            <div class="profiles-list">
                <div class="profile-item">
                    <strong>Leetcode</strong> (Total solved challenges: 246) Profile
                </div>
                <div class="profile-item">
                    <strong>Geekforgeeks</strong> (Total solved challenges: 236) Profile
                </div>
                <div class="profile-item">
                    <strong>Codechef</strong> (Total solved challenges: 418) Profile
                </div>
                <div class="profile-item">
                    <strong>Hackerrank</strong> (Total solved challenges: 100+) Profile
                </div>
            </div>
        </section>
    </div>

  );
}

export default App;
