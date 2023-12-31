"use client";
import '../../project/index.css';
import { Button } from '@mui/material';

export default function Page() {
  return <div>
    <h1 className='header1Projects'>Communa</h1>
    <h2 className='header2Projects'>A web application catered for students to rent temporary event spaces on an hourly basis.</h2>
    <div className="descContainer">
      <img src="/images/communa/icon.png"></img>
    <div className="description">As a developer in Scout (an on-campus design and development organization), 
      I got assigned to work on Communa for a client my spring semester of sophomore year. 
      I worked on an Agile team consisting of designers and developers to help bring our client's startup idea to life. 
      I worked on implementing the front-end, developing pages for authentication, listings, bookings and reservations. 
      I thoroughly enjoyed working on this team, learning from my tech-lead during our work session, being a part of the design process, 
      and witnessing the entire project come together at the end of the semester.
      </div>
      </div>
      <div className='techContainer'>
        <span className='description2'>Tech stack:</span>
        <Button  style={{backgroundColor: '#1B9AAA69'}} className="button">Typescript</Button>
        <Button  style={{backgroundColor: '#FFC43D69'}} className="button">Styled-components</Button>
        <Button  style={{backgroundColor: '#06D6A069'}} className="button">React</Button>
        <Button  style={{backgroundColor: '#F8FFE5'}} className="button">NextJS</Button>
        <Button  style={{backgroundColor: '#FFC43D69'}} className="button">Supabase</Button>
      </div>
      <h2 className='header2Projects'><b>Pages</b></h2>
      <img style={{width: '450px', height: '670px'}} src="/images/communa/signUp.png"></img>
      <img style={{width: '1100px', height: '620px'}} src="/images/communa/listingPage.png"></img>
      <img style={{width: '1100px', height: '620px'}} src="/images/communa/reservations.png"></img>
      <img src="/images/communa/carousel.gif"></img>
    </div>;
}
