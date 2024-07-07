import React from "react";
import SocialLink from "../SocialLinks/SocialLink";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import search from "./search.svg";
export default function Header() {
  return (
    <div sticky="top">
      <Navbar className="bg-dark title-search-social" style={{height:"5%",display:"flex"}}>
        {/* contains title of site */}
        <Container >
          <Navbar.Brand><h1 style={{color:"white",fontFamily:"Kalnia",fontSize:"2rem"}}>The Maximus Report</h1></Navbar.Brand>
        </Container>
        {/*end of title  */}
        {/* search bar and social icon */}
        <Container style={{float:"right" ,display:"flex",flexDirection:"column" ,alignItems:"end"}}>
        <SocialLink></SocialLink>
          <div style={{display:"flex"}}>
            <div style={{color:"white"}}>
            <i class="fa-solid fa-user"></i>
            </div>
            <a href="https://www.google.com" title="clicking it will open search box"><img src={search} style={{filter: "invert(100%)  "}} alt="search"></img></a>
          </div>
        </Container >
        {/* end of search bar and social icon */}
      </Navbar>
      <Navbar expand="lg" style={{float:"right"}} className="bg-white" sticky="top">
      <Container fluid >
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" style={{fontFamily:"Kalnia",fontWeight:"1000",fontSize:".9rem"}} >
            <Link to={"/"}>
            <Nav.Link href="#StartUps" style={{float:"right" ,borderBottom:"1px ridge grey"}}>StartUp Hub </Nav.Link>
            </Link>
            &nbsp;
            <Link to={"/Legal_Reports"}>
            <Nav.Link href="#Legal" style={{float:"right",borderBottom:"1px ridge grey"}}>Legal Reports</Nav.Link>
            </Link>
            &nbsp;
            <Link to={"/Tech_Updates"}>
            <Nav.Link href="#tech" style={{float:"right",borderBottom:"1px ridge grey"}}>Curiousity</Nav.Link>
            </Link>
            &nbsp;
            <Link to={"/Your_Story"}>
            <Nav.Link href="#your_story" style={{float:"right",borderBottom:"1px ridge grey"}}>Your Story</Nav.Link>
            </Link>
            &nbsp;
            <Link to={"/Students_Corner"}>
            <Nav.Link href="#students" style={{float:"right",borderBottom:"1px ridge grey"}}>Students Corner</Nav.Link>
            </Link>
            &nbsp;
            <Link to={"/Jobs"}>
            <Nav.Link href="#jobs" style={{float:"right",borderBottom:"1px ridge grey"}}>Jobs/Internship</Nav.Link>
            </Link>
            &nbsp;
            <Link to="/Get_Featured">
            <Nav.Link href="#get_featured" style={{float:"right",borderBottom:"1px ridge grey"}}>Get Featured</Nav.Link>
            </Link>
            &nbsp;
            <Link to={"/About_Us"}>
            <Nav.Link href="#about_us" style={{float:"right",borderBottom:"1px ridge grey"}}>About Us</Nav.Link>
            </Link>
            &nbsp;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar><br></br>
    <br></br>    
    </div>
  );
}
