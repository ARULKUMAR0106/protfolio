import React from "react";

const About: React.FC = () => (
  <section id="about">
    <h2 className="section-title">About</h2>
    <div style={{ display: "flex", alignItems: "center" }}>
    
      <p className="about-desc">
        I am a Full Stack Developer with over 3 years of experience, specializing in building and maintaining 
        efficient and scalable web applications. I have strong expertise in RESTful APIs with .NET Core, secure 
        authentication using JWT and OAuth, and hands-on experience with SQL Server. <br /><br />
        On the front end, I work with JavaScript, TypeScript, and React to create modern and responsive 
        user interfaces. I’m passionate about solving complex problems, optimizing performance, and delivering 
        solutions that combine practicality with elegance. <br /><br />
        Beyond development, I continuously explore new technologies and strive to enhance both user experience 
        and code quality.
      </p>
    </div>
  </section>
);


export default About;
