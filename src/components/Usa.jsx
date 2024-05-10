import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "../styles/usa.css";
import { useRef } from "react";
// import FranceImg from "../assets/click-and-learn-photography-mZtdV4eDsT0-unsplash.jpg";
import usaImg from "../assets/toomas-tartes-41gqn1q-tqc-unsplash.jpg";
// import stanUni from "../assets/stanUni.png";
// import mit from "../assets/mit-removebg.png";
// import princeton from "../assets/princeton.png";
// import caltech from "../assets/caltech.svg";
// import harvard from "../assets/harvard.png";
import usa1 from "../assets/usa/usa1-removebg-preview.png";
import usa2 from "../assets/usa/usa2-removebg-preview.png";
import usa3 from "../assets/usa/usa3-removebg-preview.png";
import usa8 from "../assets/usa/usa5-removebg-preview.png";
import usa5 from "../assets/usa/usa6-removebg-preview.png";
import usa6 from "../assets/usa/usa8-removebg-preview.png";
import whatsAppImg from "../assets/whatsapp.png";
import { Banner } from "./Banner";
const images = [usa1, usa5, usa2, usa3, usa6, usa8].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

export default function USA() {
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
            src={usaImg}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="countryNameContainer"
          >
            <p>USA</p>
          </motion.div>
        </div>
        <Banner classN="usa" images={images} speed={35000} />
        <div className="countryPageContext">
          <div style={{ width: "75%", marginRight: "1.5rem" }}>
            <h2 style={{ fontSize: "2rem" }}>USA</h2>
            <ul className="studyusaUL">
              <li>
                <span>World-class standards in education:</span>American
                universities are known for their high academic qualitys
              </li>
              <li>
                <span>Excellent facilities: </span>Universities in the USA have
                top-notch facilities to support learning.
              </li>
              <li>
                <span>Cosmopolitan atmosphere:</span>The US offers a diverse and
                multicultural environment for students.
              </li>
            </ul>
            <h2 className="sideHeader" style={{ marginTop: "0" }}>
              Why study in USA?
            </h2>
            <ul className="studyusaUL">
              <li>
                <span>Globally Recognized Education:</span>US universities offer
                high-quality education valued worldwide.
              </li>
              <li>
                <span>Diverse Course Selection:</span>A wide variety of programs
                are available across US institutions.
              </li>
              <li>
                <span>Support for International Students: </span>Schools assist
                with finding tutors, scholarships, and even part-time jobs.
              </li>
              <li>
                <span>Stages to Study in the US:</span>Pursue undergraduate
                degrees after 12 years of schooling or graduate degrees after 16
                years.
              </li>
              <li>
                <span>Culturally Rich Environment:</span>Interact with students
                and scholars from all over the world.
              </li>
              <li>
                <span>Exposure to Latest Technologies:</span>Gain knowledge at
                the forefront of technological advancements.
              </li>
            </ul>
            <h2 className="sideHeader">Is USA the right choice?</h2>
            <ul className="usaUL">
              <li>
                At first, you will need to define your goal and set your career
                priorities. This will help you in choosing ‘right program and
                right school’. US degrees are recognized world over, but
                International students shall make it sure that the US
                qualification he / she is interested in, is recognized in the
                home country.
              </li>
              <li>
                Evaluate your funds if you could meet the study and stay cost in
                the US. The US offers both scholarships and study loans to
                International students, and students are allowed to work on part
                time basis to meet the study and stay cost.
              </li>
              <li>
                If you do not have sufficient funds make sure that you may get
                scholarships or study loans or grab for a job if required or how
                else you shall meet the study expenditures if you shall not get
                scholarship, / study loan, / job.
              </li>
              <li>
                The study and living cost vary in different United States, hence
                choosing a right program in a right college is of utmost
                importance.{" "}
              </li>
              <li>
                According to the Web site for NAFSA: Association of
                International Educators- ‘81 percent of international students
                studying at the undergraduate level in the United States receive
                no assistance to pay for their education. At the graduate level
                47 percent must fund their own education’.
              </li>
              <li>
                International students are offered accommodation in college
                housings but in some cases you may have to make your own housing
                arrangement. Before leaving your home country consider
                arrangement for housing.
              </li>
            </ul>
            <h2 className="sideHeader">Benefits of Studying in US?</h2>
            <ul className="studyusaUL">
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
              <li onClick={welcomeScroll}>{">"} Why study in USA?</li>
              <li onClick={studyScroll}>{">"} Is USA the right choice?</li>
              <li onClick={uniScroll}> {">"} Benefits of Studying in US?</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
