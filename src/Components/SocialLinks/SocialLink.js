import insta from "./instagram.svg";
import twitter from "./twitter.svg";
import fb from "./facebook.svg";
import linkedin from "./linkedin.svg";
const SocialLink =()=>{
    return (
        <div style={{display:"flex",flexDirection:"row"}}>
            <a href="https://www.instagram.com/" ><img src={insta} style={{height:"1rem" ,width:"1rem"}} alt="search"></img></a> &nbsp;&nbsp;
            <a href="https://twitter.com/" ><img src={twitter} style={{height:"1rem" ,width:"1rem"}} alt="search"></img></a>&nbsp;&nbsp;
            <a href="https://www.facebook.com/" ><img src={fb} style={{height:"1rem" ,width:"1rem"}} alt="search"></img></a>&nbsp;&nbsp;
            <a href="https://www.linkedin.com/" ><img src={linkedin} style={{height:"1rem" ,width:"1rem"}} alt="search"></img></a>&nbsp;&nbsp;
          </div> )
}
export default SocialLink;