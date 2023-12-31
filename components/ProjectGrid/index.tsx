"use client";
import React, { useState, useEffect } from "react";
import "./index.css";
import Link from "next/link";
import { Stack } from "@mui/material";
import KeyboardDoubleArrowLeftSharpIcon from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";

const projects = [
  {
    id: 1,
    name: "Image Processing",
    description:
      "An interactive image uploading, filtering and downloading application.",
    image: "images/project_imageprocessing.webp",
  },
  {
    id: 2,
    name: "StudyFind",
    description:
      "An interactive image uploading, filtering and downloading application.",
    image: "images/project_imageprocessing.webp",
  },
];

export default function ProjectGrid() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    const data = window.localStorage.getItem("CLICKED_STATE");
    if (data !== null) setIsClicked(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("CLICKED_STATE", JSON.stringify(isClicked));
  }, [isClicked]);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div style={{ width: isClicked && "22%" }} className="box">
      <div className="headerBox" onClick={handleIsClicked}>
        {isClicked ? (
          <KeyboardDoubleArrowRightSharpIcon className="icon" />
        ) : (
          <KeyboardDoubleArrowLeftSharpIcon className="icon" />
        )}
        <h1 className="header1">PROJECTS</h1>
        {isClicked ? (
          <KeyboardDoubleArrowRightSharpIcon className="icon" />
        ) : (
          <KeyboardDoubleArrowLeftSharpIcon className="icon" />
        )}
      </div>
      {isClicked && (
        <Stack className="stack" spacing={2}>
          <h1 className="headerProject">Applications</h1>
          <Link className="link" href={"/project/communa"}>
            &#127968; Communa
          </Link>
          <Link className="link" href={"/project/tadpole"}>
            &#128218; Tadpole
          </Link>
          <Link className="link" href={"/project/carson"}>
            &#128663; Carson
          </Link>
          <Link className="link" href={"/project/image-processing"}>
            &#128247; Image Processing
          </Link>
          <Link className="link" href={"/project/study-find"}>
            &#x2615; StudyFind
          </Link>
          <Link className="link" href={"/project/marble-solitaire"}>
            &#127919; Marble Solitare
          </Link>
          <h1 className="headerProject">Research</h1>
          <Link className="link" href={"/research/1"}>
            &#129504; T2DM & Alzheimer's
          </Link>
          <Link className="link" href={"/research/2"}>
            &#127754; Planarian
          </Link>
        </Stack>
      )}
    </div>
  );
}
