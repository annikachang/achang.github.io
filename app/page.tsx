"use client";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import "app/index.css";
import DescriptionCard from "../components/DescriptionCard";
import {mainDescriptionData, projectDescriptionData, contactData} from "./info";
import ProjectCard from "../components/ProjectCard";
import ContactCard from "../components/ContactCard";
import Header from "../components/Header";


export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <Header icon_url="../images/header-bullet.svg" mobile_icon_url="../images/menu-mobile.svg"/>
      <div id="main">
        <div className="flex container-1 rel">
        <img className="abs ellipse-1" src="../images/ellipse-1.svg"/>
        <img className="abs line-1" src="../images/line-1.svg"/>
        <div className="rel headshot_container">
            <img className="abs frame" src="../images/headshot_frame.svg"/>
            <img className="abs headshot-image" src="../images/headshot_image.png"/>
          </div>
          <div className="maindescription_container"> 
          {mainDescriptionData.map((value, index) => (
             <DescriptionCard key={index} mainDesc={value} index={index}></DescriptionCard>
          ))}
          </div>
        </div>
        <img className="abs ellipse-2" src="../images/ellipse-2.svg"/>
        <img className="abs line-2" src="../images/line-2.svg"/>
        <img className="abs ellipse-3" src="../images/ellipse-3.svg"/>
        <div className="container-2 rel" id="projects">
          <h1>Projects</h1>
          <div className="flex project-container">
          {projectDescriptionData.map((value, index) => (
             <ProjectCard key={index} projectDesc={value}></ProjectCard>
          ))}
           </div>
        </div>
        <div className="rel">
        <div className="container-3" id="contact">
          <h1>Contact Me</h1>
          <div className="contact-container">
          {contactData.map((value, index) => (
             <ContactCard key={index} contactDesc={value}></ContactCard>
          ))}
          </div>
          <img className="abs line-3" src="../images/line-3.svg"/>
          <p className="abs footer-text">Designed in Figma and developed using React, Typescript and NextJS by Annika Chang.</p>
          <p className="abs mobile-footer">Designed and developed by Annika Chang.</p>
          <img className="abs ellipse-4" src="../images/ellipse-4.svg"/>
        </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
