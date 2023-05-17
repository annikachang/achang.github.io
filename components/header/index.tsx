"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import styled from "styled-components";

const NavBar = styled(AppBar)`
  background-color: transparent;
`;

const Link = styled(Button)`
  color: black;
`;

export default function Header({ children }: React.PropsWithChildren) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar elevation={0} position="sticky">
        <Toolbar sx={{ marginLeft: "auto" }}>
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>Experiences</Link>
          <Link>Connect</Link>
        </Toolbar>
      </NavBar>
      {children}
    </Box>
  );
}
