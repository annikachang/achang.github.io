"use client";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import React from "react";
import "components/aboutinfo/index.css";

export default function AboutInfo() {
  return (
    <div className="box">
      <Grid container spacing={2}>
        <Avatar id="avatar" alt="Annika Chang" src="images/me.jpg"></Avatar>
        <Grid item xs={6}>
          <h1 className="header">Hi, welcome to my page! &#127775;</h1>
          <div style={{ marginBottom: "10px" }}>
            <h2 className="header2">My name is Annika.</h2>
            <h2 className="header2">
              I'm studying computer science and neuroscience at Northeastern
              University.
            </h2>
          </div>
          <div>
            <h2 className="header2">
              Currently looking for software engineering internships/co-ops for{" "}
              <div id="emphasis">summer 2024</div>.
            </h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
