import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/Services.css";
import { motion } from "framer-motion";
import img1 from "/src/assets/Road trip-bro.svg";
import img2 from "/src/assets/Living room-amico.svg";
import img3 from "/src/assets/High School-amico.svg";
import img4 from "/src/assets/Learning-bro.svg";
import img5 from "/src/assets/Software code testing-bro.svg";
import img6 from "/src/assets/Study abroad-pana.svg";
import img7 from "/src/assets/Departing-bro.svg";
import img8 from "/src/assets/counseling-bro.svg";
import img9 from "/src/assets/Helping a partner-bro.svg";
import img10 from "/src/assets/Plain credit card-cuate.svg";
import whatsAppImg from "./assets/whatsapp.png";
export default function Services() {
  const cards = [
    {
      img: img8,
      Heading: "Career pathway and higher education planning",
      Content:
        "Keeping in view your individual profile and the professional market scenario, we would help you to make the best career choice.",
    },
    {
      img: img4,
      Heading: "Course and country selection",
      Content:
        "We provide in-depth personal guidance to help you in choosing the right course in the university according to your profile.",
    },
    {
      img: img3,
      Heading: "Unbaised advice in university selection",
      Content:
        "We have a well equipped library containing prospectuses, CDs, Video Tapes, Brochures etc of all the Universities/ Colleges.",
    },
    {
      img: img5,
      Heading: "Assistance in preparing error free application",
      Content:
        "We provide complete information about various scholarships offered by different universities.",
    },
    {
      img: img10,
      Heading: "Assistance in education loan",
      Content:
        "We have a tie up with some financial institutions that help students in providing education loan for higher studies at competitive interest rates.",
    },
    {
      img: img9,
      Heading: "Scholarship guidance",
      Content:
        "We provide complete information about various scholarships offered by different Universities.",
    },
    {
      img: img2,
      Heading: "Accommodation arrangement",
      Content:
        "Our counselors would guide you with different types of accommodation which fit into your needs and budget.",
    },
    {
      img: img7,
      Heading: "Visa counseling",
      Content:
        "We assist our students in the entire process right from filling up application, providing guidance and conducting mock interviews.",
    },
    {
      img: img6,
      Heading: "Pre-departure briefing",
      Content:
        "We organize pre-departure get together for its students giving them an opportunity to meet others heading towards University or Country.",
    },
    {
      img: img1,
      Heading: "Travel arrangement assistance",
      Content:
        "We take care of booking flights for our students well in advance to allow ideal departure dates, routes and discounts.",
    },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const listItem = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
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
      <div className="servicesContainer">
        <motion.div
          variants={container}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          className="servicesCardsContainer"
        >
          {cards.map((card) => {
            return (
              <>
                <motion.div variants={listItem} className="serviceCard">
                  <div>
                    <img src={card.img} alt="" />
                  </div>
                  <div>
                    <p>{card.Heading}</p>
                    <span>{card.Content}</span>
                  </div>
                </motion.div>
              </>
            );
          })}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
