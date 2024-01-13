"use client";
import "../../../app/index.css";
import "../index.css";
import Header from "../../../components/Header";

export default function Page() {
  return<div>
  <Header icon_url="../../images/header-bullet.svg" mobile_icon_url="../../images/menu-mobile.svg"/>
  <div className="project-container">
    <h1>The Wildflower Company</h1>
    <div className="project-desc">
    <p>This project was accomplished in <a href="https://scout.camd.northeastern.edu/">Scout</a>, an on-campus student-led design
    and development organization that partners with startups and companies on a semesterly basis. Myself and a team of 5 other members
    were tasked with redesigning their website hosted on Shopify. 
    </p>
    <p>As the technical lead on the team, I was in charge of onboarding and leading the developers, 
    directing the Shopify redesign, organizing the Agile sprint, and updating the other leads and clients on our progress.
    </p>
    </div>
    <div>
    <h2>Tech stack</h2>
    <p>
      HTML/CSS, Javascript, Liquid (template language created by Shopify)
    </p>
    </div>
    <div>
    <h2>Some hifis wireframes by design team</h2>
    <div className="img-container">
      <img src="../../images/wildflower/homepage-hifi.png"/>
      <img src="../../images/wildflower/planner-details-hifi.png"/>
    </div>
    </div>
    <div>
      <h2>Tech Deliverables</h2>
      <div className="tech-desc-container">
      <img src="../../images/bullet.svg"/>
      <div className="tech-desc">
      <h3>Implementation of hifis on existing website.</h3>
      <div>
      <p>Video of website linked <a href="https://youtu.be/mdDP92d1KxA">here</a>.</p>
      <p>Led the complete redesign of the homepage, main planner page, individual planner pages, and a community page.</p>
      <p>Ensured all pages were responsive for mobile and tablet displays.</p>
      </div>
      </div>
      </div>
      <div className="tech-desc-container">
      <img src="../../images/bullet.svg"/>
      <div className="tech-desc">
      <h3>Created resuable sections or components for clients to customize and add to other pages.</h3>
      <div>
      <p>Added as much customization ability for clients as possible, emphasizing this practice to the developers.</p>
      <p>Wrote a comprehensive offboarding for clients outlining how to customize any sections in terms of updating content or designs.</p>
      </div>
      </div>
      </div>
      
    </div>
    </div>
  </div>;
}