import { useEffect, useMemo, useRef, useState } from "react";
import "./styles/homePageStyle.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Counter from "./components/counter";
import Footer from "./components/Footer";
import Rating from "@mui/material/Rating";
import NavBar from "./components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
//images
import slideImage1 from "./assets/pang-yuhao-_kd5cxwZOK4-unsplash.jpg";
import slideImage2 from "./assets/lake-5488121_1920.jpg";
import slideImage3 from "./assets/13391.jpg";
import slideImage4 from "./assets/360_F_444686151_PqusvBeHbcTt2fNZlOTPYqZ1yckQpXP8.jpg";
// import slideImage4 from "./assets/carrie-allen-www-carrieallen-com-IXbUjYOjtf8-unsplash.jpg";
import servicesImg1 from "./assets/leadership-cuate.svg";
import servicesImg2 from "./assets/college campus-bro.svg";
import servicesImg3 from "./assets/Process-amico.svg";

import testImg from "./assets/Feedback-amico.svg";
import whatsAppImg from "./assets/whatsapp.png";

// import country1 from "./assets/australia.jpg";
// import country2 from "./assets/canada.jpg";
// import country3 from "./assets/France.jpg";
// import country4 from "./assets/uk.jpg";
// import country5 from "./assets/NewZealand.jpg";

import CountryImg1 from "./assets/ukCountry.jpg";
import CountryImg2 from "./assets/newZealandCountry.jpg";
import CountryImg3 from "./assets/FranceCountry.jpg";
import CountryImg4 from "./assets/canadaCountry.jpg";
import CountryImg5 from "./assets/australiaCountry.jpg";
import CountryImg6 from "./assets/andrew-hubbert-VnmFGdrx02U-unsplash.jpg";
import CountryImg7 from "./assets/mark-de-jong-NELRuCfHxxU-unsplash.jpg";
import CountryImg8 from "./assets/julia-solonina-oRjGmKZLNHk-unsplash.jpg";

import img1 from "./assets/PTE Professional Partner.jpg";
import img2 from "./assets/NZ Trained Agent.jpg";
import img3 from "./assets/IDP IELTS.jpg";
import img4 from "./assets/BC IELTS logo.jpg";
import img5 from "./assets/PTE Partner.jpg";
import img6 from "./assets/Education UK_Logo Unit.jpg";
export default function HomePage() {
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);
  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
    return isIntersecting;
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
  const container2 = {
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
  const ImageList = [slideImage1, slideImage2, slideImage3, slideImage4];
  // const flags = [
  //   { country: "Australia", image: country1 },
  //   { country: "Canada", image: country2 },
  //   { country: "France", image: country3 },
  //   { country: "UK", image: country4 },
  //   { country: "NewZealand", image: country5 },
  // ];
  const CountryImg = [
    {
      country: "UK",
      image: CountryImg1,
      content:
        "Immerse yourself in royal charm, historical landmarks, and lively pubs.",
    },
    {
      country: "NewZealand",
      image: CountryImg2,
      content:
        "Experience breathtaking scenery, adventure activities, and rich Maori culture.",
    },
    {
      country: "France",
      image: CountryImg3,
      content: "Indulge in exquisite cuisine, romance, and artistic heritage.",
    },
    {
      country: "Canada",
      image: CountryImg4,
      content:
        "Explore vast wilderness, meet friendly locals, and experience multicultural cities.",
    },
    {
      country: "Australia",
      image: CountryImg5,
      content:
        "Discover diverse landscapes, a laid-back vibe, and unique wildlife.",
    },
    {
      country: "Ireland",
      image: CountryImg7,
      content:
        "Find ancient castles, dramatic cliffs, and a pint that'll steal your heart.",
    },
    {
      country: "USA",
      image: CountryImg6,
      content: "Land of dreams, skyscrapers, and endless possibilities.",
    },
    {
      country: "Italy",
      image: CountryImg8,
      content: "Ancient history, artistic flair, and mouthwatering cuisine.",
    },
  ];
  const testimonials = [
    // {
    //   name: "SAKTHIVEL",
    //   id: "BTEC HND in COMPUTERS",
    //   star: "5",
    //   content:
    //     "My dreams have come true. 360° Abroad has helped mein achieving my dream. They have helped me a lot to secure my admission and Visa. I wish everyone a happy and successful journey to UK with 360° Abroad. If you have plan to do higher studies choose 360° Abroad only. Once again thanks to 360° abroad and all its team members who helped me getting this visa. I strongly recommend 360° Abroad Consultants, who are very helpful in getting admission & visa whatever course and wherever you want to study. If you encounter an problems it will be solved very easily and in simple manner by this office.",
    // },
    // {
    //   name: "G MANIMARAN ",
    //   id: "B.A (Hons) in Business Management",
    //   star: "4",
    //   content:
    //     "I got this great opportunity to study in UK through my consultant 360° Abroad. I would like to thank Mr.Prem & Mr. Senthil and all their colleagues. So if any friends or anyone who need clarification or anything about 360° Abroad Consultants team, definitely email me. I can surely help anyone anytime.",
    // },
    // {
    //   name: "JONES MARIAM BENJAMIN",
    //   id: "MBA",
    //   star: "3",
    //   content:
    //     "I applied for the UK student visa. Right from the beginning the people at 360° Abroad Consultants encouraged me in getting admission and doing the visa process quickly. The consultants also helped me with the loan process. Prem Ganesh sir spoke to my bank Manager for the loan sanction letter and the covering letter, so that the bank manager understood the importance of the same and issued the letter to me. I was very happy when I received the Visa. I heartily thank 360° Abroad Mr. Prem Ganesh sir and the team.",
    // },
    // {
    //   name: "JESUDOSS PAUL KIRUBAKARAN",
    //   id: "M.Sc Advanced Nursing",
    //   star: "4",
    //   content:
    //     "My happiness has no boundaries and words but it is the time I have to tell out what my heart exactly feels and thinks. I am very grateful to Mr. Prem, 360° Abroad, who has done this great thing in our life. He has been a guide, a guiding STAR, A DIRECTOR, directing me the right ways to get the visa. He is a MESSENGER from GOD, who brought this good news. As a family we thank hijm from the bottom of our hearts. I also thank his coworkers and other staff who helped me in filing all the forms. Finally, I thank them all for the wonderful thing they have done for me in m y life.",
    // },
    // {
    //   name: "ANGAD SINGH",
    //   id: "Diploma in Business Studies, Singapore",
    //   star: "5",
    //   content:
    //     "360° Abroad has really helped me a lot in processing my admission, visa and other documents. It’s a consultancy where things are taken care of completely till you reach your destination. I thank Mr. Prem and all the other staff for helping me a lot.",
    // },
    // {
    //   name: "SHANTHI SAMIAYYA GANESHEN",
    //   id: "MBA",
    //   star: "5",
    //   content:
    //     "First it is one of the best consultancy in my view , I would like to thank the whole team of 360° degree abroad consultant group and my special thanks to Mr.Senthil, he helped to get my visa .I am very much satisfied with the service which they provided and it was good And also special thanks to Mr.Prem sir and other staff, who helped me a lot and supported a lot, no words to say Thanks to 360°degree abroad Thanks a lot",
    // },
    // {
    //   name: "SATHISH KUMAR",
    //   id: "POST GRADUATE ADVANCED DIPLOMA IN MANAGEMENT SCIENCE ",
    //   star: "5",
    //   content:
    //     " I was really glad that I got UK visa , all credits goes to 360° degree abroad , without them I don’t think it would have been possible. Mr.Prem and Mr.Senthil helped me from the day one to till the date I got my visa, starting from counseling they helped me like child and directed me in every single process involved in it including selecting the course. Finally my heart full of thanks to Mr.Prem, Mr.Senthil and all staff m of 360° degree abroad and wish them all the success for them and all the students to come in ",
    // },
    // {
    //   name: "KAVIYARASAN SEERALAN",
    //   id: "Diploma in IT",
    //   star: "5",
    //   content:
    //     "I am kaviyarasan, now I got uk visa .In this time I feel like flying in the air and I am very happy now.360°degree abroad is a great consultancy. They helped me how to make step by step and I followed that way. Thanks to 360° degree abroad , today is a golden moment in my life",
    // },
    // {
    //   name: "YUVARAJ DHANAKOTTY",
    //   id: "MBA",
    //   star: "5",
    //   content:
    //     "Thank you for the responsible team work. From my beginning stage of every segment , staffs have been very keen and polite well etiquette and professional, they have been properly channelized my visa process which would go in a success manner. I feel this is the right place to plan abroad to go for studies as well as for work.Thanking you Once again with my sincere honor to each and every staff of the crew It was a delight opportunity to go ahead with 360° degree abroad Thank you Mr.prem and their staff mamber",
    // },
    // {
    //   name: "SHIVAPRIYA",
    //   id: "BA(HONS) BUSINESS MANAGEMENT",
    //   star: "5",
    //   content:
    //     "Dear 360° abroad team members,  I would like to say thanks to Mr.Prem and also Mr.Senthil for getting admission and UK visa in simple manner. I also thank them for giving me a good opportunity to get my dream true. My hearty thanks to the team 360° degree abroad.I wish them all success in their social and helping for the students who are trying to work and studies in Europe",
    // },
    // {
    //   name: "MANJULA",
    //   id: "ADVANCED DIPLOMA IN MANAGEMENT STUDIES",
    //   star: "5",
    //   content:
    //     "Actually no words to say about 360°degree abroad. Because my dream has come true via 360° abroad. They help and guide very sincerely. So we can achieve very quickly. I would like to thank Mr.prem and Mr.senthil. If you want to achieve come to 360° degree abroad",
    // },
    // {
    //   name: "D.RAMANAN",
    //   id: "TEC HIGHER NATIONAL DIPLOMA",
    //   star: "5",
    //   content:
    //     "I am really thanks to 360° degree abroad, because the 360° degree abroad consultancy whole staffs and prem sir are guiding with a smiling face all the time for me .Thank you so much for 360° Abroad again ,they have brightened my future",
    // },
    {
      name: "Yugeshkanna varatharaj",
      Star: "5",
      content:
        "I am very happy to say about 360 abroad consultancy and specially Prem sir and Senthil sirThank you so much for always directing me back to the right path. I don't know where I would be without you, other than lost! Your support and teaching have given me perspective and guidance I would not have otherwise had.”Thanks again for my UK visa",
    },
    {
      name: "Pasupathi ravi",
      Star: "4",
      content:
        "This is the right place to make a worderful carrier. 360 abroad  consultants is helped me a lot of things like a application process and visa process. They are helped me for interview also. Mr Prem sir&And Senthil sir  guided me well and good.this is the best consultancy service for studies in abroad. Thank you once again.thank you",
    },
    {
      name: "Nithish Kumar",
      Star: "5",
      content:
        "One of the best Education abroad consultants in India. Really they are mastered in making your visa successful.Studies in Uk It's my Dream 360 abroad makes it possible mainly Mr prem sir & Mr senthil sir guiding me to achieve my dream. Both of them guidance are proper and also easy to proceed . Finally I got Uk visa under his guidance.I am happy that I got my Visa to the United Kingdom and will be flying soon to achieve my dreams.",
    },
    {
      name: "Laura Princy",
      Star: "4",
      content:
        "My spouse and I whole-heartedly would like to thank you for all the support you have provided in the process of getting selected for the program MSc. (Artificial Intelligence) with a Year in Industry in the Royal Holloway University of London. It is a dream come true for me, as I have been longing to pursue a Masters' degree relating to I.T for the last few years. We would also like to sincerely express our gratitude for helping us in admission processing activities and also all activities of coordination with the University. All members in my family would also wish to express the same. Thank you sir.",
    },
    {
      name: "Ammu Murugesh",
      Star: "5",
      content:
        "I am really happy happy with 360 abroad service. I like to thank the team for guiding me throughout the admission and visa process. i had short listed few course and they guided me right from course  selection. Furthermore Mr. Pram sir and Mr. Senthil sir both are helped in every aspect they can because of their guidance. I received my CAS immediately and applied for my visa. I would recommended 360 abroad consultants for every one.",
    },
    {
      name: "Arun Balasubramaniyan",
      Star: "5",
      content:
        "I'm very happy to say about 360 abroad consultancy to get an admission in UK. i don't have much knowledge about the process, Mr. Prem sir is nice person to give all instructions throughout the visa process.And finally i got UK tier 4 student visa with the help of 360 abroad consultancy. Finally i thanks a lot to Mr.Prem sir and also guided me Mr.Senthil sir. They are two pillars of 360 abroad consultancy. Just go ahead.",
    },
    {
      name: "Andhaheer A",
      Star: "5",
      content:
        "I was lucky enough to find an excellent consultant like 360 degree abroad who is very well expertise in the study abroad process. Really it was a dream come true for me when I received my visa in just 23 days. My heartful thanks to Mr.Prem Ganesh sir who did my VISA application and guided me in document submission to avoid a delay in my Visa. His tricks worked very superbly. Furthermore, Mr. Senthil helped in every aspect he can, Because of his guidance, I applied for my CAS immediately as soon as I paid the fee. the best part is I received my CAS in just 5 days. Overall I feel happy and content with my process by 360 abroad consultants. I would recommend 360-degree abroad consultants for everyone who wants to make their study abroad dream a reality. #happystudents",
    },
    {
      name: "Veerapandi",
      Star: "5",
      content:
        "IT HAPPENED!! ✨my dream of studying masters at uk.. 360 abroad consultants helped me throughout the process in a greater manner special thanks Mr. Senthil sir - Trichy who helped me start to end and also  thanks to Mr. Prem sir for his guidance through out the process",
    },
    {
      name: "Radha Lakshmi",
      Star: "5",
      content:
        "Thank you 360 Abroad Consultants for your professional service towards UK higher education admission process. It was like my dream come true moment possible because of your professional and quality service. My heartfelt thanks to Mr. Prem who rendered constant support throughout my admission and visa process. And also i thank Mr. Senthil for his guidance.",
    },
  ];
  const [index, setIndex] = useState(0);
  const [reviewsIndex, setReviewIndex] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      handleFroward();
    }, 6500);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleReviewFroward();
    }, 10000);

    return () => clearInterval(interval);
  }, [reviewsIndex]);
  // function handleBack() {
  //   setIndex((index) => {
  //     if (index === 0) return ImageList.length - 1;
  //     return index - 1;
  //   });
  // }
  function handleReviewFroward() {
    setReviewIndex((index) => {
      if (index === testimonials.length - 1) return 0;
      return index + 1;
    });
  }
  function handleFroward() {
    setIndex((index) => {
      if (index === ImageList.length - 1) return 0;
      return index + 1;
    });
  }
  function handleBackTest() {
    setReviewIndex((reviewsIndex) => {
      if (reviewsIndex === 0) return testimonials.length - 1;
      return reviewsIndex - 1;
    });
  }
  function handleFrowardTest() {
    setReviewIndex((reviewsIndex) => {
      if (reviewsIndex === testimonials.length - 1) return 0;
      return reviewsIndex + 1;
    });
  }
  return (
    <div>
      <a
        className="whatsAppContactLink"
        href=" https://wa.me/919600021414"
        target="_blank"
      >
        <img src={whatsAppImg} alt="" />
      </a>
      <NavBar />
      <main className="homePageIntro">
        <div className="homePageIntroContainer">
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "-1",
              display: "flex",
              overflow: "hidden",
            }}
          >
            {" "}
            {ImageList.map((url) => {
              return (
                <img
                  loading="lazy"
                  src={url}
                  className="homePageIntroContainerimg"
                  key={url}
                  style={{ translate: `${-100 * index}%` }}
                />
              );
            })}
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="show"
            className="homePageIntroContainerInfo"
          >
            {index === 0 && (
              <>
                <motion.h1
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  Realizing Dreams. Transforming Lives
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Stop dreaming, start living! <span> 360°</span>{" "}
                  <span style={{ color: "black", fontWeight: "700" }}>
                    Abroad
                  </span>{" "}
                  transforms lives with expert support for your study abroad or
                  immigration journey. Together, let's make your global
                  aspirations a reality. 
                  Dream big, live abroad! 360° Abroad empowers your global
                  journey with study expertise. Let's turn your aspirations into
                  reality. */}
                </motion.p>
              </>
            )}
            {index === 1 && (
              <>
                <motion.h1
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  Sit Back and Relax
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Stress-free study abroad! 360° Abroad guides you - focus on
                  the adventure, we handle the rest. Let's navigate your global
                  journey!
                   Study abroad without the stress! <span> 360°</span>{" "}
                  <span style={{ color: "black", fontWeight: "700" }}>
                    Abroad
                  </span>{" "}
                  handles everything, so you can focus on the adventure. Let's
                  navigate your global goals together. */}
                </motion.p>
              </>
            )}
            {index === 2 && (
              <>
                <motion.h1
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  Our Care. Your Career
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Studying abroad shouldn't be a gamble. <span> 360°</span>{" "}
                  <span style={{ color: "black", fontWeight: "700" }}>
                    Abroad
                  </span>{" "}
                  provides expert guidance tailored for your dream career path.
                  We care about your success, not just your application. 
                  Ditch the application stress! 360° Abroad guides your study
                  abroad journey with career focus. We invest in your success,
                  not just paperwork.*/}
                </motion.p>
              </>
            )}
            {index === 3 && (
              <>
                <motion.h1
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  Get Counselled. Not convinced.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Unsure about studying abroad? Our free consultations at{" "}
                  <span> 360°</span>
                  <span style={{ color: "black", fontWeight: "700" }}>
                    Abroad
                  </span>{" "}
                  answer all your questions. Still on the fence? We're confident
                  you'll be closer to your global future after speaking with us.
                  Confused about studying abroad? Free consultations at 360°
                  Abroad! Get answers, gain confidence, and jumpstart your
                  global adventure. */}
                </motion.p>
              </>
            )}

            {/* <Link to="/ContactUs">
              <motion.a variants={listItem} className="btn-2">
                Make It Happen
              </motion.a>
            </Link> */}
            {/* <motion.main variants={listItem} className="imageScrollContainer">
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton>
                <ArrowForwardIcon onClick={handleFroward} />
              </IconButton>
            </motion.main> */}
          </motion.div>
        </div>
      </main>
      <main className="homePageWhoRWe">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span>Welcome to 360° abroad , a world of expertise and trust.</span>
          <p
            style={{
              textAlign: "center",
              margin: "0.5rem auto",
              fontSize: "1.25rem",
              width: "70%",
            }}
          >
            We will walk you through the procedures and save you time, money and
            effort.
          </p>
        </motion.div>
        <div className="homePageExpertise" ref={ref}>
          <div>
            <p className="countNumber">
              <Counter num={2000} duration={5} isInViewport={isInViewport} />+
            </p>
            Students Helped
          </div>
          <div>
            <p className="countNumber">
              <Counter num={24} duration={1} isInViewport={isInViewport} />+
            </p>
            Years of experience
          </div>
          <div>
            <p className="countNumber">
              <Counter num={50} duration={5} isInViewport={isInViewport} />+
            </p>
            Partnered Universities
          </div>
        </div>
        <div>
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
        </div>
      </main>
      <main className="homePageServices">
        <div className="homeServicesPageHeader">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            SERVICES
          </motion.p>
        </div>
        <div className="homePageServicesContainer">
          <div className="homePageServiceBox">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="homePageServiceInfo"
            >
              <p>Counseling and Guidance for Career & Course Selection</p>
              <span>
                At 360° Abroad, we offer expert counseling to help you navigate
                uncertainties and find tailored solutions for your career and
                personal goals. Our guidance ensures you choose the right path
                to fulfill your ambitions, with personalized support every step
                of the way.
              </span>
              <Link
                to="/ContactUs"
                onClick={scrollToTop}
                className="serviceLearnMoreBtn"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="servicesImageContainer"
            >
              <img loading="lazy" src={servicesImg1} />
            </motion.div>
          </div>
          <div className="homePageServiceBox">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="servicesImageContainer"
            >
              <img loading="lazy" src={servicesImg2} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="homePageServiceInfo mirror"
            >
              <p>Choosing University</p>
              <span>
                Our expert team assists in selecting the ideal university
                tailored to your academic profile and personality, prioritizing
                understanding your needs. We provide unbiased guidance,
                irrespective of any commercial affiliations, ensuring the best
                fit for you.
              </span>
              <Link
                to="/ContactUs"
                onClick={scrollToTop}
                className="serviceLearnMoreBtn"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          <div className="homePageServiceBox">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="homePageServiceInfo"
            >
              <p>Admission Formalities & Visa Procedures</p>
              <span>
                At 360° Abroad, we prioritize crucial aspects for a polished
                application, offering support for references and the statement
                of purpose. We evaluate English proficiency and may recommend
                waivers for IELTS/TOEFL, with our represented universities
                trusting our recommendations.
              </span>
              <Link
                to="/ContactUs"
                onClick={scrollToTop}
                className="serviceLearnMoreBtn"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="servicesImageContainer"
            >
              <img loading="lazy" src={servicesImg3} />
            </motion.div>
          </div>
        </div>
      </main>
      <main className="freeServicesSection">
        <div className="freeServicesSectionHeader">
          <p>Free Services</p>
        </div>
        <div>
          <div className="freeServicesSectionContent">
            <span className="freeServicesSectionContentStar1">
              <AutoAwesomeIcon
                fontSize="large"
                className="freeServicesStar1"
                sx={{
                  fill: "#F85797",

                  width: "2.5rem",
                  height: "2.5rem",
                  // filter: "drop-shadow(3px 5px 2px #E3E2DF) ",
                }}
              />
            </span>
            <span className="freeServicesSectionContentStar2">
              <AutoAwesomeIcon
                className="freeServicesStar2"
                sx={{
                  fill: "	#FF94B6",
                  width: "4rem",
                  height: "4rem",
                  // filter: "drop-shadow(3px 5px 2px #E3E2DF) ",
                }}
              />
            </span>
            <p>We offer free personal guidance in </p>
            <ul>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                University Selection
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Admission Process
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Documentation
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Interview Preparation
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Language training
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Loan Assistance
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Scholarship Assistance
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Visa Documentation
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Accommodation
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Foreign Exchange
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Pre- Departure Orientation
              </li>
              <li>
                <CheckBoxIcon
                  sx={{
                    fill: "#ee4c7c",
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.35rem",
                  }}
                />
                Post- Landing Services
              </li>
            </ul>
          </div>
          <div className="freeServicesLearnMoreDiv">
            <span className="freeLearnMoreBtn">
              <Link onClick={scrollToTop} to="/Services">
                Learn More..{" "}
              </Link>
            </span>
          </div>
        </div>
      </main>
      <main className="homePageTestimonails">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="homePageTestimonailsHeader"
        >
          <p>TESTIMONIALS</p>
        </motion.div>
        <div className="testimonialsMainContainer">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}
          >
            <img loading="lazy" src={testImg} />
          </motion.div>
          <div style={{ height: "max-content" }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="testimonialsContainer"
            >
              {testimonials.map((test) => {
                return (
                  <>
                    <div
                      className="testimonial"
                      key={test.name}
                      style={{ translate: `${-100 * reviewsIndex}%` }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          wordSpacing: "10px",
                          lineHeight: "20px",
                          paddingBottom: "0.75rem",
                          color: "white",
                        }}
                      >
                        {`"${test.content}"`}
                      </p>
                      <p style={{ fontWeight: "700", paddingTop: "0.5rem" }}>
                        {test.name}
                      </p>
                      {/* <span style={{ fontWeight: "500", fontSize: "0.85rem" }}>
                        {test.id}
                      </span> */}
                      <br />
                      <Rating
                        sx={{ color: "#EE4C7C" }}
                        name="read-only"
                        value={test.Star}
                        readOnly
                      />
                    </div>
                  </>
                );
              })}
            </motion.div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton onClick={handleBackTest}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton>
                <ArrowForwardIcon onClick={handleFrowardTest} />
              </IconButton>
            </div>
          </div>
        </div>
      </main>
      <main className="homePageCountries">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="CountriesHeader"
        >
          <p>COUNTRIES</p>
          <span>
            We at 360° Abroad can assess an individuals requirement and suggest
            the country and the course that would be most suitable for them.
          </span>
        </motion.div>
        <motion.div
          variants={container2}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="countryFlagsContainer"
        >
          {CountryImg.map((flag) => {
            return (
              <>
                <motion.div
                  variants={listItem}
                  onClick={() => {
                    navigate(`/${flag.country}`);
                    scrollToTop();
                  }}
                >
                  <img
                    loading="lazy"
                    className="countryFlagImage"
                    src={flag.image}
                  />
                  <main>
                    <p>{flag.country}</p>
                    <span>{flag.content}</span>
                    <p>Learn More</p>
                  </main>
                </motion.div>
              </>
            );
          })}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
