import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/AboutUs.css";
import { motion } from "framer-motion";

import abtImg from "./assets/Team-cuate.svg";
import whatsAppImg from "./assets/whatsapp.png";
import img1 from "./assets/PTE Professional Partner.jpg";
import img2 from "./assets/NZ Trained Agent.jpg";
import img3 from "./assets/IDP IELTS.jpg";
import img4 from "./assets/BC IELTS logo.jpg";
import img5 from "./assets/PTE Partner.jpg";
import img6 from "./assets/Education UK_Logo Unit.jpg";
export default function AboutUs() {
  return (
    <>
      <div className="AboutUsPage">
        {" "}
        <a
          className="whatsAppContactLink"
          href=" https://wa.me/919600021414"
          target="_blank"
        >
          <img src={whatsAppImg} alt="" />
        </a>
        <NavBar />
        <div className="AboutUsPageIntro">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
          >
            <p>About Us</p>
            {/* <span>
              We ease the process by coordinating with colleges, simplifying
              steps and avoiding the pitfalls.
            </span> */}
          </motion.div>
          <div className="aboutPageSubSection">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <p>Go Global with Confidence: 360° Abroad</p>
              <span>
                Overwhelmed by the endless possibilities of studying abroad?
                Don't stress! 360° Abroad is here to simplify your journey. Our
                experienced consultants are passionate about helping students
                like you achieve their academic goals overseas. We take a
                personalized approach, considering your academic background,
                interests, extracurricular activities, and financial situation.
                Through expert analysis, we'll match you with the perfect
                program, university, and even recommend the most suitable
                country for your aspirations.
              </span>
              <br />
              <br />
              <span>
                360° Abroad specializes in top study destinations like Canada,
                Australia, the UK, New Zealand, and France. With our in-depth
                knowledge of these countries educational systems and application
                processes, we can confidently guide you towards a successful
                study abroad experience. Let 360° Abroad be your partner in
                turning your dreams into reality!
              </span>
            </motion.div>
            <div className="aboutUsImageContainer">
              <motion.img
                loading="lazy"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                viewport={{ once: true }}
                src={abtImg}
              />
            </div>
          </div>
        </div>
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="recognitionPage"
        >
          <div>
            <p>OUR CERTIFICATIONS</p>
          </div>
          <div className="recognitionPageImages">
            <img loading="lazy" src={img1} alt="" />
            <img loading="lazy" src={img2} alt="" />
            <img loading="lazy" src={img3} alt="" />
            <img loading="lazy" src={img4} alt="" />
            <img loading="lazy" src={img5} alt="" />
            <img loading="lazy" src={img6} alt="" />
          </div>
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
