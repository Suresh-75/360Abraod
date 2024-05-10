import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/FaqPage.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import whatsAppImg from "./assets/whatsapp.png";
export default function FaqPage() {
  const [isOpen, setIsOpen] = useState(null);
  const Faqs = [
    {
      question: "Could you give me a background of Study Abroad Options?",
      ans: "Study Abroad Options is based at Chennai. Our consultants have been in this industry for a good number of years, and hence they possess the expertise, to give you the best guidance for your overseas studies. Our panel comprising of highly experienced and skilled professionals is sure to provide you with a host of services that will help you land up with the apt choice. Do get in touch with us.",
    },
    {
      question: "How do I register myself with you?",
      ans: "That's simple. All you have to do is to just drop-in to our office anytime, meet our counselors and avail free guidance. You can then register with us, because we really want to clear all your queries before registering you. Registration is FREE for all countries, and processing too is FREE except for USA & Canada.",
    },
    {
      question: "How long will my admissions take?",
      ans: "It is not possible to give a precise commitment since the admission time varies among the universities. Some Universities are quick in taking decision and some take more time. However as a registered student of Study Abroad Options, you will have your reply in typically half the time normally taken.",
    },
    {
      question: "Can I apply to universities in more than one country?",
      ans: "Of course yes. You can choose to apply to any number of countries you wish. But, our consultants will guide you in choosing the country and course that will best suit you and thus avoid confusion in your minds.",
    },
    {
      question: "What is the appropriate time for submitting the application?",
      ans: "admissions process is lengthy. Submit your application as soon as you can. Send in your documents as soon as you can. If you send your documents well before the deadlines, it will benefit you. Besides, you will have better chances of getting admission as well as getting priority for accommodation and even scholarships.",
    },
    {
      question: "Can I change my major after joining the university?",
      ans: "Yes, certainly. In fact, most undergraduate students change their major at least once during their four-year course of study. Most universities abroad allow you the flexibility to change your major as you wish.",
    },
    {
      question:
        "Will I get admission even if I have poor grades in my high school or college?",
      ans: "That's not a problem. Study Abroad Options can help you with your admissions even if you have had very poor grades. There are several good universities abroad and they understand that students sometimes lose focus and do not concentrate on their studies. They even understand the Indian academic system as they are in close co-ordination with us. These universities will be ready to give you a second chance. So, do not worry. Just contact us. We can help you.",
    },
  ];
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function handleClick(i) {
    if (i === isOpen) {
      return setIsOpen(null);
    }
    setIsOpen(i);
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, scale: 1.2 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  return (
    <>
      <a
        className="whatsAppContactLink"
        href=" https://wa.me/919600021414"
        target="_blank"
      >
        <img src={whatsAppImg} alt="" />
      </a>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="faqPageheader"
      >
        <p>Frequently Asked Questions</p>
        {/* <span style={{ width: "50%", textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum
          voluptates eveniet eligendi, aspernatur ducimus cum doloremque
          explicabo.
        </span> */}
      </motion.div>
      <motion.div
        variants={container}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="faqPageBody"
      >
        <div className="FaqContainer">
          {Faqs.map((ques, index) => {
            return (
              <>
                <motion.div variants={listItem} className="FaqBox">
                  <div className="FaqBoxQue">
                    <p>{ques.question}</p>
                    <button onClick={() => handleClick(index)}>
                      {isOpen !== index ? <AddIcon /> : <RemoveIcon />}
                    </button>
                  </div>
                  <div
                    style={{
                      maxHeight: isOpen === index ? "120px" : "0px",
                    }}
                    className="FaqBoxAns"
                  >
                    {ques.ans}
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={container}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="faqContactUsContainer"
      >
        <div>
          <span>Do you have any other questions?</span>{" "}
          <Link onClick={scrollToTop} to="/ContactUs">
            Talk to us
          </Link>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
