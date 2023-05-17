"use client";
import About from "../components/about";
import Involvement from "../components/involvement";
import Projects from "../components/projects";
import Footer from "../components/footer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useRef } from "react";

const StyledBody = styled.body`
  background-color: #f7e7ce;
  background-size: 100%;
`;

const NavBar = styled(AppBar)`
  background-color: transparent;
`;

const Link = styled(Button)`
  color: black;
`;

export default function Page() {
  const home = useRef(null);
  const projects = useRef(null);
  const experiences = useRef(null);
  const connect = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <StyledBody>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar elevation={0} position="sticky">
          <Toolbar sx={{ marginLeft: "auto" }}>
            <Link onClick={() => scrollToSection(home)}>Home</Link>
            <Link onClick={() => scrollToSection(projects)}>Projects</Link>
            <Link onClick={() => scrollToSection(experiences)}>
              Experiences
            </Link>
            <Link onClick={() => scrollToSection(connect)}>Connect</Link>
          </Toolbar>
        </NavBar>
        <div ref={home}>
          <About />
        </div>
        <div ref={projects}>
          <Projects />
        </div>
        <div ref={experiences}>
          <Involvement />
        </div>
        <div ref={connect}>
          <Footer />
        </div>
      </Box>
    </StyledBody>
  );
}
