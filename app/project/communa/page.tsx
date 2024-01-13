"use client";
import "../../../app/index.css";
import "../index.css";
import Header from "../../../components/Header";

export default function Page() {
  return<div>
  <Header icon_url="../../images/header-bullet.svg" mobile_icon_url="../../images/menu-mobile.svg"/>
  <div className="project-container">
    <h1>Communa</h1>
    <div className="project-desc">
    <p>This project was accomplished in <a href="https://scout.camd.northeastern.edu/">Scout</a>, an on-campus student-led design
    and development organization that partners with startups and companies on a semesterly basis. Myself and a team of 6 other members
    were tasked with designing and implementing the front-end pages for this startup idea.
    </p>
    <p>As one of the developers on the team, I worked on implementing the front-end, developing pages for authentication, listings, bookings and reservations. 
      I thoroughly enjoyed working on this team, learning from my tech-lead during our work session, being a part of the design process, 
      and witnessing the entire project getting built from the ground up.
    </p>
    </div>
    <div>
    <h2>Tech stack</h2>
    <p>
      React, Typescript, NextJS, styled-components, MUI components, Supabase
    </p>
    </div>
    <div>
    <h2>Some hifis wireframes by design team</h2>
    <p>I took the lead in developing these pages, specifically. While some user interaction, including the image carousel for a listing and the client-side validation for a booking. </p>
    <div className="img-container">
      <img src="../../images/communa/listing-hifi.png"/>
      <img src="../../images/communa/bookings-hifi.png"/>
    </div>
    </div>
    </div>
  </div>;
}