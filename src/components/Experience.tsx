import React from "react";

const Experience: React.FC = () => (
  <section id="experience">
    <h2 className="section-title">Experience</h2>
    <div>
      <div style={{ marginBottom: "1.8rem" }}>
        <h3 style={{ color: "#48e5c2", fontWeight: 600 }}>Spac Software</h3>
        <p style={{ fontSize: "0.92rem", margin: "4px 0 8px 0", color: "#a6accd" }}>
          Software Developer · TamilNadu · May 2024 – Present
        </p>
        <ul style={{ paddingLeft: "1.3rem", listStyle: "disc" }}>
          <li>Built .NET Core 8 APIs for ERP solutions</li>
          <li>Implemented dynamic schemas & SaaS features</li>
          <li>Advanced reporting using Crystal Reports</li>
        </ul>
      </div>
      <div style={{ marginBottom: "1.8rem" }}>
        <h3 style={{ color: "#48e5c2", fontWeight: 600 }}>Laserbeam Software</h3>
        <p style={{ fontSize: "0.92rem", margin: "4px 0 8px 0", color: "#a6accd" }}>
          Associate Developer · Jun 2022 – Feb 2024
        </p>
        <ul style={{ paddingLeft: "1.3rem", listStyle: "disc" }}>
          <li>Developed scalable applications</li>
          <li>Improved reports, authentication, and cloud pipelines</li>
        </ul>
      </div>
      {/* Add more experiences as needed */}
    </div>
  </section>
);

export default Experience;
