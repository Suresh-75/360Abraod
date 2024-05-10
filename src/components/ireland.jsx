import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "../styles/ireland.css";
import { useRef } from "react";
// import FranceImg from "../assets/click-and-learn-photography-mZtdV4eDsT0-unsplash.jpg";
import FranceImg from "../assets/sean-kuriyan-sKm0RZjOgIE-unsplash.jpg";
import universitycollegedublin from "../assets/university-college-dublin.png";
import uniOfCalway from "../assets/uniOfCalway.png";
import uniOfLimerick from "../assets/uniOfLimerick.png";
import Dublin from "../assets/Dublin-City-University.png";
import NCAD_SMALL_Logo from "../assets/NCAD_SMALL_Logo.png";
import whatsAppImg from "../assets/whatsapp.png";
import { Banner } from "./Banner";
const images = [
  universitycollegedublin,
  uniOfCalway,
  uniOfLimerick,
  Dublin,
  NCAD_SMALL_Logo,
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

export default function France() {
  const welcome = useRef(null);
  const study = useRef(null);
  const uni = useRef(null);
  const welcomeScroll = () =>
    welcome.current.scrollIntoView({
      behavior: "smooth",
    });
  const studyScroll = () =>
    study.current.scrollIntoView({
      behavior: "smooth",
    });
  const uniScroll = () =>
    uni.current.scrollIntoView({
      behavior: "smooth",
    });
  return (
    <>
      <NavBar />{" "}
      <a
        className="whatsAppContactLink"
        href=" https://wa.me/919600021414"
        target="_blank"
      >
        <img src={whatsAppImg} alt="" />
      </a>
      <div className="countryPageBody">
        <div className="countryPageImageContainer">
          <motion.img
            // initial={{ opacity: 0.7 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 0.75 }}
            // viewport={{ once: true }}
            src={FranceImg}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="countryNameContainer"
          >
            <p>IRELAND</p>
          </motion.div>
        </div>
        <Banner classN="ireland" images={images} speed={35000} />
        <div className="countryPageContext">
          <div style={{ width: "75%", marginRight: "1.5rem" }}>
            {/* <h2 style={{ fontSize: "2rem" }}>Ireland</h2> */}
            <h2 className="sideHeader">Why Ireland?</h2>
            <ul className="uniCourirelandUL">
              <li>
                Ireland has a long coastline (over 3,480 miles) and temperate
                conditions, making it ideal for water activities.
              </li>
              <li>
                Ireland offers a variety of water activities including surfing,
                windsurfing, scuba diving, water-skiing, wakeboarding, and
                canoeing.
              </li>
              <li>Ireland has a rich sailing heritage.</li>
            </ul>
            <h2 className="sideHeader">Why Study in Ireland?</h2>
            <ul className="uniCourirelandUL">
              <li>
                Ireland has a long tradition of educational excellence, dating
                back to the Middle Ages.
              </li>
              <li>
                Modern Irish governments prioritize education, resulting in a
                high participation rate and a strong economy.
              </li>
              <li>Ireland is a friendly and safe English-speaking country.</li>
              <li>
                The Irish education system is ranked among the best in the
                world, offering high quality and a focus on research.
              </li>
              <li>
                Ireland has a young and vibrant population, beautiful scenery,
                and a rich cultural heritage.
              </li>
            </ul>
            <h2 className="sideHeader">Irish Education System</h2>{" "}
            <ul className="uniCourirelandUL">
              <li>
                {" "}
                Ireland has a long tradition in education with a high
                participation rate (81% complete secondary school and 60% go on
                to higher education).
              </li>
              <li>
                Education is compulsory from 6 to 15 years old and free in most
                schools.
              </li>
              <li>
                The education system is traditionally divided into 3 levels:
                primary (8 years), secondary (5-6 years), and higher education.
              </li>
              <li>
                Recently, the focus has expanded to include pre-school and adult
                education.
              </li>
            </ul>
          </div>
          <div style={{ width: "25%" }}>
            <div className="stickyNavBar">
              <li onClick={welcomeScroll}>{">"} Why Ireland?</li>
              <li onClick={studyScroll}>{">"} Why Study in Ireland?</li>
              <li onClick={uniScroll}> {">"} Irish Education System</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
