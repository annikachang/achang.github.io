"use client";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  margin: auto;
  width: 300px;
  height: 300px;
`;

const StyledHeader = styled.h1`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 37px;
`;

const StyledInfo = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

const InfoContainer = styled.div`
  margin-bottom: 10px;
`;

const StyledInfo2 = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
`;

const StyledEmphasis = styled.div`
  color: #00c6fc;
  font-size: 18px;
  font-weight: 500;
  font-family: "Barlow Condensed", sans-serif;
  display: inline-block;
`;

export default function AboutInfo() {
  return (
    <Box>
      <Grid container spacing={2}>
        <StyledAvatar alt="Annika Chang" src="images/me.jpg"></StyledAvatar>
        <Grid item xs={6}>
          <StyledHeader>Hi, welcome to my page! &#127775;</StyledHeader>
          <InfoContainer>
            <StyledInfo>My name is Annika.</StyledInfo>
            <StyledInfo>
              I'm studying computer science and neuroscience at Northeastern
              University.
            </StyledInfo>
          </InfoContainer>
          <div>
            <StyledInfo2>
              Currently looking for software engineering internships/co-ops for{" "}
              <StyledEmphasis>summer 2024</StyledEmphasis>.
            </StyledInfo2>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
