import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter,AiFillYoutube,AiFillLinkedin,AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div style={{background:"#0e1216"}}>
      <div className="openauto-container py-5" >
        <div className="d-flex align-items-center justify-content-between footer-resp">
        <div className="text-white">
          <h1>Openauto</h1>
        </div>
        <div className="px-2 footer-icon-div">
         <span className="footer-icon-resp"> <span><IoMdCall /></span> <span className="ps-1">+769 586 4558</span></span>
      
          <span className="ms-2"><HiMail /></span> <span className="px-1">service@openauto.ca</span>
        </div>
        </div>
       <div className="d-flex align-items-center justify-content-between footer-terms">
       <div className="text-center mt-2 mt-lg-0">
            <p>Open Auto &copy; all rights reserved</p>
        </div>
        <div className="privacy d-none">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Cookie Policy</p>
        </div>
        <div className="fs-5 privacy">
            <span className="ps-lg-4"><FaFacebookF/></span>
            <span className="ps-lg-4"><AiOutlineTwitter/></span>
            <span className="ps-lg-4"><AiFillYoutube/></span>
            <span className="ps-lg-4"><AiFillLinkedin/></span>
            <span className="ps-lg-4"><AiOutlineInstagram/></span>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
