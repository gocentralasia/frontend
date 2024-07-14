import './Hero.scss'

//components
import AdventureComponent from "../../../components/AdventureComponent/AdventureComponent.tsx";

//images
import Logo from "../../../assets/Images/Logo.png"

//icons
import {FaInstagram} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";
import {CiMail} from "react-icons/ci";
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {CiSearch} from "react-icons/ci";
import {IoMdArrowDropdown} from "react-icons/io";
import { PiFlowArrow } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { PiHardDrives } from "react-icons/pi";

function Hero() {
  return (
    <section className="Hero">
      <div className="container">
        <div className="upper-header">
          <div className="contact-container">
            <div className="flex">
              <FaPhone/>
              <a href="+996 700 01 55 99">+996 700 01 55 99</a>
            </div>
            <div className="flex2">
              <CiMail/>
              <a href="Gocentralasia@gmail.com">Gocentralasia@gmail.com</a>
            </div>
            <div className="flex3">
              <HiOutlineQuestionMarkCircle/>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className="social-container">
            <FaInstagram/>
            <FaWhatsapp/>
            <FaYoutube/>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="header-row">
              <div className="logo-container">
                <img src={Logo} alt="logo"/>
                <h2>Gocentralasia</h2>
              </div>
              <div className="navigation-container">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a>Desitination</a></li>
                  <li><a>Tour</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="search_language-container">
                <div className="search-container">
                  <CiSearch/>
                </div>
                <div className="language-container">
                  <h3>ENG</h3>
                  <IoMdArrowDropdown className="dropDown"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Landing_text">
          <h1>
            Group tours
          </h1>
          <p>Embark on Unforgettable Group Adventures</p>
          <button>View torse</button>
        </div>


        <div className="Adventure">
           <div className="adventure_title">
             <h3>Find your next adventure</h3>
           </div>
          <div className="adventure_sorting">
            <AdventureComponent icon={PiFlowArrow} title="Destination" />
            <AdventureComponent icon={FaCalendarAlt } title="Month" />
            <AdventureComponent icon={PiHardDrives } title="Types" />
            <button>Find</button>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Hero;