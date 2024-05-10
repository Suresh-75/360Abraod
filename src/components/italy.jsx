import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "../styles/italy.css";
import { useRef } from "react";
// import FranceImg from "../assets/click-and-learn-photography-mZtdV4eDsT0-unsplash.jpg";
import ItalyImg from "../assets/brendan-greenway-SouFaFk9-KQ-unsplash.jpg";
import almaItaly from "../assets/almaItaly-removebg-preview.png";
import milan from "../assets/university-of-milan-logo-removebg-preview.png";
import scuolaItaly from "../assets/scuolaItaly-removebg-preview.png";
import Capture_d_écran_2020 from "../assets/Capture_d_écran_2020-08-25_à_14.31.56-removebg-preview.png";
// import harvard from "../assets/harvard.png";
import whatsAppImg from "../assets/whatsapp.png";
import { Banner } from "./Banner";
const images = [almaItaly, milan, scuolaItaly, Capture_d_écran_2020].map(
  (image) => ({
    id: crypto.randomUUID(),
    image,
  })
);

export default function Italy() {
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
            src={ItalyImg}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="countryNameContainer"
          >
            <p>ITALY</p>
          </motion.div>
        </div>
        <Banner classN="Italy" images={images} speed={35000} />
        <div className="countryPageContext">
          <div style={{ width: "75%", marginRight: "1.5rem" }}>
            <h2 style={{ fontSize: "2rem" }}>Italy</h2>
            <ul className="studyItalyUL">
              <li>
                <span>Rich History and Culture:</span>Immerse yourself in the
                birthplace of the Renaissance, with historic sites, museums, and
                artistic treasures around every corner. Imagine walking the same
                streets as Michelangelo and da Vinci!
              </li>
              <li>
                <span>Top-Tier Education: </span>Italy boasts a well-respected
                education system with universities like Bologna, the oldest in
                the Western world. You'll gain a high-quality education with a
                unique perspective.
              </li>
              <li>
                <span>Diverse Programs: </span> There's something for everyone!
                Explore programs in fashion, design, art, communication, or
                delve into more traditional fields like medicine, engineering,
                or humanities.
              </li>
              <li>
                <span>Diverse Programs: </span> Compared to other European
                countries, tuition fees and living expenses in Italy can be
                quite reasonable.
              </li>
              <li>
                <span>Delicious Food and La Dolce Vita</span> Indulge in some of
                the world's best cuisine, from fresh pasta and pizza to regional
                specialties. Italians embrace a love for life, and you'll
                experience a slower pace and a focus on enjoying everyday
                moments.
              </li>
            </ul>
            <h2 className="sideHeader" style={{ marginTop: "0" }}>
              Why Study in Italy?
            </h2>
            <p>
              The Italian system follows the Bologna Process, a European
              standardization framework. Here's a breakdown:
            </p>
            <ul className="studyItalyUL">
              <li>
                <span>First Cycle (3 years): </span>This leads to a Bachelor's
                degree (Laurea Triennale).
              </li>
              <li>
                <span>First Cycle (3 years): </span>Earn a Master's degree
                (Laurea Magistrale) after your Bachelor's.
              </li>
              <li>
                <span>First Cycle (3 years): </span> Pursue a Doctoral degree
                (Dottorato di Ricerca) for in-depth research.
              </li>
            </ul>
            <h2 className="sideHeader">
              The Italian Higher Education System Explained
            </h2>
            <ul className="studyItalyUL">
              <li>
                <span>Learn the Language:</span>
                Studying in Italy is a fantastic way to immerse yourself in the
                Italian language and become fluent.
              </li>
              <li>
                <span>Travel and Explore: </span>
                Italy's location is perfect for weekend getaways to other
                European countries or exploring the beautiful Italian regions,
                from the rolling hills of Tuscany to the stunning Amalfi Coast.
              </li>
              <li>
                <span>Gain International Experience:</span>
                Studying abroad broadens your horizons, looks impressive on your
                resume, and helps you develop valuable life skills like
                independence and adaptability.
              </li>
            </ul>
            <h2 className="sideHeader">Reasons to Study Here</h2>
            <ul className="studyItalyUL">
              <li>
                <span>Top-Ranked Universities:</span>The US boasts
                world-renowned institutions like MIT, Harvard, and Berkeley,
                known for exceptional education, cutting-edge research, and
                groundbreaking inventions.
              </li>
              <li>
                <span>Vast Course Selection:</span>US colleges offer a wide
                variety of programs, allowing you to find the perfect fit for
                your interests and career goals.
              </li>
              <li>
                <span>Globally Recognized Degrees:</span> A US degree is
                respected worldwide, giving you a significant edge in the job
                market and acting like a "global citizenship" for recognition.
              </li>
              <li>
                <span>Practical Experience:</span>Many programs integrate
                real-world industry experience through collaborations with
                research institutes and businesses, providing valuable hands-on
                learning.
              </li>
              <li>
                <span>Diverse and Welcoming Environment:</span>You'll encounter
                friendly and sociable Americans, fostering cultural exchange and
                enriching your overall experience.
              </li>
              <li>
                <span>Technological Expertise:</span>US institutions emphasize
                learning the latest technologies, preparing you with in-demand
                skills for your future career.
              </li>
              <li>
                <span>Flexible Learning System:</span>The semester system with
                credits allows you to tailor your workload and choose courses
                that suit your needs.
              </li>
              <li>
                <span>Vibrant Campus Life:</span> Studying in the US presents
                the opportunity to make friends from all over the world and
                broaden your cultural horizons.
              </li>
              <li>
                <span>Global Perspective:</span>The curriculum focuses on
                international issues, preparing you to work effectively in a
                globalized world.
              </li>
            </ul>
          </div>
          <div style={{ width: "25%" }}>
            <div className="stickyNavBar">
              <li onClick={welcomeScroll}>{">"} Why Study in Italy?</li>
              <li onClick={studyScroll}>
                {">"} The Italian Higher Education System Explained
              </li>
              <li onClick={uniScroll}> {">"} Reasons to Study Here</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
