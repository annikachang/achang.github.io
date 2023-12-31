"use client";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import "app/index.css";
import DescriptionCard from "../components/DescriptionCard";
import {mainDescriptionData} from "../app/info";


export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <div id="main">
      <img className="abs ellipse-1" src="images/ellipse-1.svg"/>
      <img className="abs line-1" src="images/line-1.svg"/>
        <div className="flex container-1 rel">
        <div className="rel headshot_container">
            <img className="abs frame" src="/images/headshot_frame.svg"/>
            <img className="abs headshot-image" src="/images/headshot_image.png"/>
          </div>
          <div className="maindescription_container"> 
          {mainDescriptionData.map((value, index) => (
             <DescriptionCard key={index} mainDesc={value} index={index}></DescriptionCard>
          ))}
          </div>
        </div>
        <img className="abs ellipse-2" src="/images/ellipse-2.svg"/>
        <img className="abs line-2" src="/images/line-2.svg"/>
      </div>
    </ThemeProvider>
  );
}
