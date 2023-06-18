"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useRef } from "react";
import AboutInfo from "../components/aboutinfo";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
// import Projects from "../components/Projects";
import "app/index.css";

export default function Page() {
  const home = useRef(null);
  const projects = useRef(null);
  const connect = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="main">
        <AppBar sx={{ backgroundColor: "transparent" }} elevation={0}>
          <Toolbar sx={{ marginLeft: "auto" }}>
            <Button className="link" onClick={() => scrollToSection(home)}>
              About me
            </Button>
            <Button className="link" onClick={() => scrollToSection(projects)}>
              Projects
            </Button>
            <Button className="link" onClick={() => scrollToSection(connect)}>
              Connect
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{ margin: "0px", padding: "0px" }}>
          <div ref={home}>
            <AboutInfo />
          </div>
          <div ref={projects}>{/* <Projects /> */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
