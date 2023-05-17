"use client";
import * as React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100vh;

  border: 2px solid green;
`;
export default function About() {
  return (
    <Box>
      <h1>About me!</h1>
    </Box>
  );
}
