import { Link } from "react-router-dom";
import facebook from "../../assets/icons/social icons/002-facebook.png";
import linkedin from "../../assets/icons/social icons/003-linkedin.png";
import instagram from "../../assets/icons/social icons/004-instagram.png";
import github from "../../assets/icons/social icons/001-github.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-white text-[#5c6e8d]">
        <div>
          <img
            className="h-[80px]"
            src="https://i.ibb.co/nD9Yfnf/logo-removebg-preview.png"
            alt=""
          />
          <p className="px-3">
            SPEAKIFYR
            <br />A Summer Camping Project
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/habibb2r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/habibb2r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
            <a
              href="https://www.instagram.com/habibb2r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://github.com/habibb2r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Habibb2r
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
