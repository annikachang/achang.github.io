"use client";
import About from "../components/about";
import Involvement from "../components/involvement";
import Footer from "../components/footer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useRef } from "react";
import AboutInfo from "../components/aboutinfo";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Projects from "../components/Projects";

const StyledBody = styled.div`
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;500&display=swap");
`;

const NavBar = styled(AppBar)`
  background-color: transparent;
`;

const Link = styled(Button)`
  color: black;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 500;
`;

export default function Page() {
  const home = useRef(null);
  const projects = useRef(null);
  const connect = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledBody>
        <NavBar elevation={0}>
          <Toolbar sx={{ marginLeft: "auto" }}>
            <Link onClick={() => scrollToSection(home)}>About me</Link>
            <Link onClick={() => scrollToSection(projects)}>Projects</Link>
            <Link onClick={() => scrollToSection(connect)}>Connect</Link>
          </Toolbar>
        </NavBar>
        <div style={{ margin: "0px", padding: "0px" }}>
          <div ref={home}>
            <AboutInfo />
          </div>
          <div ref={projects}>{/* <Projects /> */}</div>
          <div ref={connect}>
            <Footer />
          </div>
        </div>
      </StyledBody>
    </ThemeProvider>
  );
}
