import React from "react";

const Home: React.FC = () => (
  <div className="home-hero" id="home">
    <div>
     <h1>Arulkumar Muthusami</h1>
      <h2>Full-Stack .NET & ERP Developer</h2>
      <p>
        Delivering robust solutions with a passion for elegant and efficient code.
      </p>
    </div>
    <div className="profile-image">
      {/* Add your profile image here */}
      <img src="/src/assets/images/Myimage.jpg" alt="Profile" style={{ width: "100%", height: "100%" }} />
    </div>
  </div>
);

export default Home;
