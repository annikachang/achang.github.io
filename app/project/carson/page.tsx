"use client";
import "../../../app/index.css";
import "../index.css";
import "./index.css";
import Header from "../../../components/Header";

export default function Page() {
  return<div>
  <Header icon_url="../../images/header-bullet.svg" mobile_icon_url="../../images/menu-mobile.svg"/>
  <div className="project-container">
    <h1>Carson</h1>
    <div className="project-desc">
    <p>This project was a hackathon project accomplished by myself and 2 other people. Carson is a mobile application 
      that streamlines the process of carpooling among Northeastern students to internships or co-ops not accesible 
      by public transport. The motivation behind this mobile application stemmed from our very own stressful internship and co-op 
      application process as one of the main problems was that we had to significantly limit our search due to the commute.
    </p>
    </div>
    <div>
    <h2>Tech stack</h2>
    <p>
      Swift
    </p>
    </div>
    <div>
    <h2>Application Storyboard</h2>
    <p>I worked on all the front-end components and user interactions  such as navigating between pages, inputting information and some client-side validation (ex. when a driver selects a user that's not in the database). 
    </p>
    <div className="img-container">
      <img src="../../images/carson/page-flow.png"/>
    </div>
    </div>
    <div className="caption-container">
    <p>Video of website linked <a href="https://vimeo.com/798118100">here</a>.</p>
    <p>GitHub repo <a href="https://github.com/ella-isgar/Carson">here</a>.</p>
    </div>
    </div>
  </div>;
}