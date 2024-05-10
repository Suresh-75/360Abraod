import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "../styles/france.css";
import { useRef } from "react";
import FranceImg from "../assets/pedro-lastra-5g8dJvtYRYA-unsplash.jpg";
import France1 from "../assets/France/France-Logo-NEOMA-2016-removebg-preview.png";
import France2 from "../assets/France/fRANCEbur-removebg-preview.png";
import France3 from "../assets/France/France1-removebg-preview.png";
// import France3 from "../assets/France/FranceESC-removebg-preview.png";
import France4 from "../assets/France/FranceKEDGE-removebg-preview.png";
import France5 from "../assets/France/FrancePSB-removebg-preview.png";
import France6 from "../assets/France/FranceRSB-removebg-preview.png";
import France7 from "../assets/France/FranceIESEG-removebg-preview.png";
import whatsAppImg from "../assets/whatsapp.png";
import { Banner } from "./Banner";
const images = [
  France1,
  France2,
  France3,
  France4,
  France5,
  France6,
  France7,
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
            <p>FRANCE</p>
          </motion.div>
        </div>
        <Banner classN="france" images={images} speed={35000} />
        <div className="countryPageContext">
          <div style={{ width: "75%", marginRight: "1.5rem" }}>
            <h2 style={{ fontSize: "2rem" }}>France</h2>
            <h3 ref={welcome} className="sideHeader">
              Welcome to France
            </h3>
            {/* <p>
              It is a very old French tradition to welcome foreign students.
              Since the Middle Ages, and the birth of La Sorbonne, the first
              French University, more than 800 years ago, students from all over
              come to France to study.
            </p>
            <p>
              Today, more than ever, there is no such thing as a high standard
              university without an international dimension. In 1998, the French
              government introduced a vigorous support policy to welcome foreign
              students into French educational institutions
            </p>
            <p>
              French higher education has a long tradition of openness and
              accessibility. No distinction is made between French and
              international students - under French law, the requirements for
              admission are the same, as are the degrees awarded. The country
              that coined the phrase human rights rejects all forms of
              discrimination.
            </p>
            <p>
              Today France is the world's fourth largest economy and second
              largest exporter of services. The successes of France's
              scientists, engineers, and designers are known around the world
              through Airbus, the TGV (high-speed train), the Ariane rocket, the
              discovery of the human immune-deficiency virus, high fashion,
              luxury goods, fine food and wine, and much more.
            </p>
            <p>
              Whether your speciality is engineering, management, political
              science, the arts, or the humanities, you, too, can excel in
              France. France's 200+ universities and many specialized
              postsecondary schools are located throughout the country. Large
              and venerable universities are found alongside the modern campuses
              of leading schools of business and engineering that may enroll no
              more than a few hundred students in close-knit communities of
              learning. Specialized schools of a similar size are devoted to
              art, tourism, health, and many other subjects. They all welcome
              international applicants.
            </p>
            <p>
              The quality of the country's educational system is a source of
              pride for the french people, acting together through their
              national and regional governments. France devotes fully 20 percent
              of its annual budget to education. The central government closely
              monitors the quality of instruction as well as the curricular
              content of the country's national diplomas. For French and
              international students alike, the government subsidizes a very
              large part of the cost of instruction in France's universities and
              other public institutions.
            </p>
            <p>
              One big benefit of studying in France is the opportunity to live
              in the place that invented savoir-vivre —the art of living well.
              Did you know that France is the most visited country in the world?
              The French people are proud of their cultural heritage, lovely
              countryside, quiet towns, and fine restaurants—all of which
              they're eager to share with visitors.
            </p>
            <p>
              France is a beautiful country. It's also a major cultural center.
              And that's really important. You can't choose to study here
              without taking into consideration the richness of the culture and
              history of the country.
            </p>
            <p>
              France is a relatively large country of amazing geographical
              variety. Her transportation and health systems are among the
              world's very best. France is a safe and tolerant country. In
              France you'll have access to a multitude of athletic, touristic,
              and cultural activities—all at special student prices. Most of
              France's institutions of higher education are located in city
              centers, close to cultural and social life. Museums, libraries,
              cinemas, theaters, and cafes are rarely very far away.
            </p>
            <p>
              Studying in France in France rarely means studying only in France.
              Many if not most schools have added European components to their
              programs, offering courses on Europe or internships elsewhere in
              the European Union. Students have the opportunity to enrich their
              French experience with new discoveries and experiences.
            </p>
            <p>
              Not surprisingly, most courses in France are taught in French, a
              language spoken by more than 200 million people in 50 countries.
              But you'll have ample opportunities to learn or practice other
              European languages - English, in particular. Advanced English is
              taught in many programs, especially in business and engineering.
            </p>
            <p>
              France is an ideal place for the student who wants to explore
              Europe. It's easy, really easy, to reach most of Europe's
              important cities - all await you for the weekend or for a longer
              stay.
            </p> */}
            <p>
              France welcomes international students. It has a long tradition of
              high-quality education with affordable tuition. The country is
              known for its scientific advancements, culture, and beautiful
              scenery. Studying in France allows students to experience all this
              and explore Europe easily.
            </p>
            <h3 ref={study} className="sideHeader">
              Studying in France
            </h3>
            {/* <h3>Studying in France is easier than you think...</h3>
            <p>
              The flexibility of French higher education allows you to design an
              academic itinerary that is perfectly suited to your goals and
              background. Thousands of possibilities exist in every field of
              knowledge. Are you interested in a general degree program? In
              acquiring a professional skill? Maybe you're ready to specialize
              at the graduate level? Or to do research? Somewhere in France
              there's a program that meets your personal goals. More likely
              you'll find a multitude.
            </p>
            <p>
              The flexibility of French higher education allows you to design an
              academic itinerary that is perfectly suited to your goals and
              background. Thousands of possibilities exist in every field of
              knowledge.
            </p>
            <p>
              Are you interested in a general degree program? In acquiring a
              professional skill? Maybe you're ready to specialize at the
              graduate level? Or to do research? Somewhere in France there's a
              program that meets your personal goals. More likely you'll find a
              multitude.
            </p>
            <p>
              The quality of the French higher education system rests on the
              country's many and varied institutions, each of which has unique
              goals as well as unique structures and programs through which to
              pursue those goals. Naturally, each also has its own admission
              requirements.
            </p>
            <p>
              The quality of the instruction offered is closely scrutinized by
              the French government.CampusFrance's membersall enjoy recognition
              for the excellence of their programs. They are proud ambassadors
              of French higher education.
            </p>
            <p>
              International students who already have begun their higher
              education, and who may even hold a university degree, may obtain
              further training in France. Many opportunities exist for students
              to transfer into degree programs and receive credit for the
              postsecondary work they have already done. In fact, that's one of
              the best ways to study in France.
            </p> */}
            <ul className="studyFranceUL">
              <li>Wide range of programs in every field of knowledge.</li>
              <li>
                Programs for various goals - general degree, professional
                skills, specialization, research.
              </li>
              <li>
                Many universities and institutions each with unique programs and
                admission requirements.
              </li>
              <li>Government ensures quality of instruction.</li>
              <li>Credits transfer possible for international students.</li>
            </ul>
            <h3 ref={uni} className="sideHeader">
              university courses in Frence
            </h3>
            <ul className="uniCourFranceUL">
              <li>
                <span>Two main course types:</span>
                Lectures (large halls) and Study sections (small groups).
              </li>
              <li>
                <span>Exams:</span>
                Short quizzes throughout the semester and final exams at
                semester end.
              </li>
              <li>
                <span>Coursework:</span>
                Modules (mandatory and elective) need to be completed for a
                degree.
              </li>
              <li>
                <span>Academic year:</span>
                Starts in Sep/Oct, ends in May/June with breaks throughout the
                year.
              </li>
              <li>
                <span>Tuition fees:</span>
                Public universities are very affordable (around 300€), business
                schools have wider range.
              </li>
              <li>
                <span>Living costs:</span> Around 1000€ per month recommended.
              </li>
            </ul>
            {/* 
            <p style={{ marginBottom: "0" }}>
              French university courses are of two basic types:
            </p>
            <h3 style={{ paddingTop: "0.5rem" }}>Lecture courses</h3>
            <p>
              are given in halls seating from 100 to 1,000 students. The
              professor presents the subject; students take notes. Many
              professors prepare and distribute course outlines or lecture notes
              that help students prepare for exams.
            </p>
            <h3>Study sections</h3>
            <p>
              (known as travaux dirigés and travaux pratiques) consist of small
              groups of students. In the seminar-style sections, students apply
              and deepen what the professor has presented in the lecture hall.
              Attendance is mandatory, as opposed to lecture courses, where
              attendance is not checke
            </p>
            <h3>Tests and grading</h3>
            <p>
              Student performance is assessed in two ways: . Short quizzes given
              throughout the semester allow instructors to check what their
              students have learned in each unit.
            </p>
            <p>
              Examinations covering all of the material presented during the
              semester are given at the end of each semester, generally just
              before the February break and again in June, before the summer
              break.
            </p>
            <p>
              In the university system, courses are usually organized into
              modules, some of which are mandatory and some elective (optional).
              To earn a degree, students must complete a certain number of
              modules. Once a module has been completed, it counts toward a
              degree. Failure in one module does not in any way reduce the value
              of a completed module.
            </p>
            <h3>The academic year</h3>
            <p>
              In France the academic year begins in September or October and
              ends in May or June. The exact starting and ending dates vary from
              institution to institution and from program to program.
            </p>
            <p style={{ margin: "0" }}>
              There are several breaks during the year:
            </p>
            <div className="scholarshipList">
              <ul>
                <li>
                  2 weeks in December-January for Christmas and the New Year
                </li>
                <li>2 weeks in February for winter break</li>
                <li>2 weeks in late March–early April for the Easter break</li>
              </ul>
            </div>
            <p>
              Quite a few holidays fall in May: May 1 (Labor Day), May 8
              (Victory Day, marking the end of the Second World War in Europe),
              Ascension Thursday, and Pentecost Monday. Summer vacation
              stretches over the entire months of July and August, and sometimes
              includes parts of June and September as well.
            </p>
            <p>
              University tuition is rarely more than 300 Euros per academic
              year. In public schools of engineering, the annual tuition is
              approximately 600 Euros. The range of tuition at other
              institutions, particularly business schools, is much wider.
              Tuition rates vary by program and by type of institution.
            </p>
            <p>
              The French government supports higher education to the tune of
              about 6,000 Euros per student per year. That high level of public
              support means that higher education in France is very affordable,
              for international as well as French students !
            </p>
            <p>
              You'll need to have about 1,000 Euros a month to live in France.
              Below that level, you are likely to have trouble living normally
              and may not be able to devote sufficient attention to your program
              of study.
            </p> */}
          </div>
          <div style={{ width: "25%" }}>
            <div className="stickyNavBar">
              <li onClick={welcomeScroll}>{">"} Welcome to France</li>
              <li onClick={studyScroll}>{">"} Studying in France</li>
              <li onClick={uniScroll}> {">"} Universiry courses in France</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
