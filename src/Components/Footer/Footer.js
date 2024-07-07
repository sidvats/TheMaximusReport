import React from "react";
import Container from "react-bootstrap/Container";
import SocialLink from "../SocialLinks/SocialLink";
import { Link } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";
const Footer = () => {
  return (
    <div > 
      <div
        className="bg-dark"
        style={{
          color: "white",
          fontFamily: "kalnia",
          display: "flex",
          justifyContent: "space-around"
          
        }}
      >

        <div >
          <Container
            fluid
            className="expand-lg"
            style={{ margin: "10% 0% 10% 0%" }}
            
          >
            <span>
              <h4>The Maximus Report </h4> <sup>&copy; All Rights Reserved</sup>
            </span>
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {" "}
                <h6>Privacy Policy</h6>{" "}
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {" "}
                <h6>Terms of Use</h6>{" "}
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {" "}
                <h6>Contact Us</h6>{" "}
              </Link>
            </div>
          </Container>
        </div>
        <div style={{display:"flex",flexDirection:"column",padding:"2rem",alignItems:"end"}}>
            <div >
            <Newsletter />
            </div>
            
            <div style={{marginRight:"1rem"}}>
                <SocialLink></SocialLink>
            </div>
        </div>
      </div>
      <hr style={{ margin: "1% 10% 1% 10%" }}></hr>
      <div
        style={{
          fontFamily: "kalnia",
          fontSize: ".6rem",
          textAlign: "center",
          color: "black",
          fontWeight: "bolder",
          
        }}
      >
        * Disclaimer : lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem
        Ipsumlorem Ipsumfdzgzfdlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem
        Ipsumlorem Ipsum
      </div>
      <hr></hr>
    </div>
  );
};
export default Footer;
