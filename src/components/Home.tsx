import React from "react";

const Home: React.FC = () => (
  <div className="home-hero" id="home">
    <div>
     <h1>Arulkumar Muthusami</h1>
      <h2>Full-Stack .NET & ERP Developer</h2>
      <p>
        Delivering robust solutions with a passion for elegant and efficient code.
      </p>
<div className="flex gap-4" >
{/* <a
  href="Resume/ARULKUMAR.pdf"  
  target="_blank"
  
  className="bg-green-500 text-white px-4 py-2 rounded"
>
  View CV
</a> */}
 <br/>
  <a id="resume-link" 
    href="Resume/ARULKUMAR.pdf" 
    download="ARULKUMAR_CV.pdf" 
    className="bg-green-300 text-white px-4 py-2 rounded"
  >
    Download CV
  </a>
</div>
    </div>
   
  </div>
);

export default Home;
