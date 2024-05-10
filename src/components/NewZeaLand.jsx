import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "../styles/newZeaLand.css";
import { useRef } from "react";
import { Banner } from "./Banner";
import NZLImg from "../assets/sulthan-auliya-zWgypPCCWVc-unsplash.jpg";
import whatsAppImg from "../assets/whatsapp.png";
import NZ_Ara from "../assets/NZ/NZ-Ara-Landscape-Logo.png-removebg-preview.png";
import NZ_massey from "../assets/NZ/NZ-massey-ferguson-1-logo-svg-vector.svg";
import NZ from "../assets/NZ/NZ-removebg-preview.png";
import NZ_SIT from "../assets/NZ/NZ-SIT-removebg-preview.png";
import NZ_whitireia from "../assets/NZ/NZ-whitireia-logo_600.png.png";
import NZ1 from "../assets/NZ/NZ1-removebg-preview.png";
import NZ4 from "../assets/NZ/NZ4-removebg-preview.png";
import NZ3 from "../assets/NZ/NZ3-removebg-preview.png";
const images = [NZ_Ara, NZ_massey, NZ, NZ_SIT, NZ1, NZ_whitireia, NZ4, NZ3].map(
  (image) => ({
    id: crypto.randomUUID(),
    image,
  })
);
export default function UK() {
  const Study = useRef(null);
  const Benefits = useRef(null);
  const Code = useRef(null);
  const StudyScroll = () =>
    Study.current.scrollIntoView({
      behavior: "smooth",
    });
  const BenefitsScroll = () =>
    Benefits.current.scrollIntoView({
      behavior: "smooth",
    });
  const CodeScroll = () =>
    Code.current.scrollIntoView({
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
            src={NZLImg}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="countryNameContainer"
          >
            <p>New ZeaLand</p>
          </motion.div>
        </div>
        <Banner classN="newZealand" images={images} speed={35000} />
        <div className="countryPageContext">
          <div style={{ width: "75%", marginRight: "1.5rem" }}>
            <h2 style={{ fontSize: "2rem" }}>New ZeaLand</h2>
            <p>
              Being one of the most conducive places for education across the
              world, Ireland offers all the benefits that you expect.
            </p>
            <p>
              Located near Western Europe, occupying five-sixths of the island
              of Ireland in the North Atlantic Ocean, west of Great Britain.
              Climate of Ireland is temperate maritime; modified by North
              Atlantic Current; mild winters, cool summers; consistently humid;
              overcast about half the time.it's the strategic location on major
              air and sea routes between North America and northern Europe; over
              40% of the population resides within 97 km of Dublin. Population
              of Ireland is 3,883,159 (July 2002 est.) with Ethnic groups,
              Celtic, English. Irish follow Roman Catholic 91.6%, Church of
              Ireland 2.5%, other 5.9% (1998) religions. English is the language
              generally used, Irish (Gaelic) spoken mainly in areas located
              along the western seaboard. Dublin is the Capital od Ireland.
              Currency used in Ireland is euro (EUR); Irish pound (IEP).
            </p>
            <h3 ref={Study} className="sideHeader">
              Study in New Zealand - International Student Support
            </h3>
            <p>
              New Zealand has an international reputation as a provider of
              quality education. New Zealand offers a safe learning environment
              with excellent study opportunities and support services for
              international students. Courses are available for academic,
              professional and vocational studies at universities, polytechnics,
              colleges of education, secondary schools and private training
              establishments Language Schools, High Schools, Universities
              Politechnics, Technical Schools and Institutes.
            </p>
            <h3>Schools and Universities in New Zealand:</h3>
            <p>
              There are many private training establishments in New Zealand
              providing a wide range of tertiary and vocational courses.
              Students are advised to enrol in courses approved by the New
              Zealand Qualifications Authority for which the issuing of student
              visas have been approved. These courses meet international
              standards and are recognised world-wide.
            </p>
            <h3 ref={Benefits} className="sideHeader">
              Benefits for studying in New Zealand include:
            </h3>
            {/* <div style={{ marginTop: "1rem" }} className="scholarshipList">
              <ul>
                <li>
                  New Zealand is a small and distant destination, it is a unique
                  country in which to study and gain a qualification.
                </li>
                <li>
                  No wonder New Zealand is the ultimate outdoor adventure
                  playground, offering every kind of thrill and degree of
                  blood-pumping adrenalin adventure.
                </li>
                <li>High standard of living conditions</li>
                <li>
                  Secondary and tertiary education in New Zealand offers an
                  attractive and stimulating academic environment. The
                  institutions are diverse in size and location, and offer a
                  wide range of general and specialist courses
                </li>
                <li>
                  The quality of a New Zealand tertiary education is
                  well-recognised internationally.
                </li>
                <li>
                  New Zealand offers a safe and stable democratic political
                  environment
                </li>
                <li>
                  A great variety of recreational and cultural experiences are
                  available in a country renowned for its natural rugged beauty,
                  yet without any dangerous animals
                </li>
                <li>
                  Living and tuition costs compare well with other countries
                </li>
                <li>
                  Universities and colleges offer excellent sport facilities for
                  students who want to play tennis, squash, cricket, basketball,
                  soccer, netball, softball or rugby.
                </li>
              </ul>
            </div>
            <p>
              Every new day in the world begins in New Zealand. Light and time
              start here. Youthful in age and outlook, New Zealand is the
              natural home for fresh ideas. Come catch some new light.
            </p>
            <p>
              New Zealand is a compact country and highly responsive to the
              changing needs of global communities and international business.
            </p>
            <p>
              New Zealand’s youth and fresh outlook make it the natural home for
              fresh ideas.This innovative thinking is reflected in the way they
              teach and learn. Their education system encourages inventive
              thinking and teaching techniques that reach far beyond traditional
              rote learning.
            </p>
            <p>
              As a former British colony, New Zealand’s education system is
              based on the prestigious British system. It offers world-class
              facilities, resources and teaching staff, and the qualifications
              are valued and transferable throughout the world.
            </p>
            <p>
              New Zealand’s universities perform very highly on a global level.
              Many feature in international university rankings. In New Zealand,
              every student enjoys a supportive learning environment. With
              relatively small class sizes, students receive more personalised
              attention from their teachers than they do in other parts of the
              world.
            </p>
            <p>
              Students are treated as individuals – you’re encouraged to learn
              from others but also to think for yourself. You’ll learn how to
              harness your unique strengths and original ideas and channel them
              into an exciting career.
            </p>
            <p>
              For international students, this personalised treatment extends
              beyond the classroom. New Zealand was the first country to adopt a
              code of practice that sets out standards for the care of
              international students, in and out of the classroom.
            </p>
            <p>
              All institutions that host international students have staff
              dedicated to ensuring their time in New Zealand is happy and
              successful. New Zealand’s scenic beauty is world renowned. But
              many visitors are surprised to discover an energetic, modern
              society among the mountains, rivers and coast.
            </p>
            <p>
              As an international student in New Zealand you’ll enjoy a
              sophisticated lifestyle and high quality, affordable
              accommodation. You’ll probably live close to where you learn so
              classes, as well as social opportunities, are easy to get to.
            </p>
            <p>
              New Zealand cities have their own special character, but they’re
              all a rich blend of nightlife, cafes, movies and shopping. With so
              much to see and do, it’s little wonder that New Zealand cafes
              serve some of the world’s strongest coffee.
            </p>
            <p>
              New Zealanders are a famously hospitable people with a lively
              interest in other cultures. An education here is frequently the
              beginning of lifelong friendships. Beyond the warm welcome, you’ll
              find a place where safety and security are valued. New Zealand has
              strong guidelines for education and home stay providers to ensure
              international students are always well looked after.
            </p> */}
            <ul className="newZeaBenUL">
              <li>Unique country to study with beautiful natural scenery.</li>
              <li> High standard of living and safe environment.</li>
              <li>
                {" "}
                Internationally recognized education system with innovative
                teaching methods.
              </li>
              <li>
                Affordable tuition fees and living costs compared to other
                countries.
              </li>
              <li>
                Supportive learning environment with small class sizes and
                personalized attention.
              </li>
              <li>
                {" "}
                Opportunity to experience a modern society with rich nightlife
                and outdoor activities.
              </li>
            </ul>
            <h3 ref={Code} className="sideHeader">
              Code of Practice
            </h3>
            <p>
              The Code of Practice for the Pastoral Care of International
              Students sets out the minimum standards for the welfare of
              students and the way they are given advice.
            </p>
            <p>
              These standards are required of all education providers who have
              students enrolled on international student permits. The code
              applies to pastoral care and provision of information only, and
              not to academic standards, which are regulated in other ways.
            </p>
            <h3>The code ensures that:</h3>
            <div className="scholarshipList" style={{ marginTop: "0.75rem" }}>
              <ul>
                <li>high professional standards are maintained</li>
                <li>
                  recruitment, financial and contractual dealings with
                  international students are done ethically and responsibly
                </li>
                <li>
                  students receive comprehensive, accurate and up-to-date
                  information
                </li>
                <li>students receive information before making commitments</li>
                <li>
                  the particular needs of international students are recognised,
                  especially those who are vulnerable because of their youth or
                  lack of experience
                </li>
                <li>support services are sensitive to cultural matters</li>
                <li>
                  appropriate accommodation is provided, with special measures
                  to ensure the safety of students under 18
                </li>
                <li>
                  there are fair procedures for the resolution of grievances.
                  Top
                </li>
              </ul>
            </div>
          </div>
          <div style={{ width: "25%" }}>
            <div className="stickyNavBar">
              <li onClick={StudyScroll}>{">"} Study in New Zealand</li>
              <li onClick={BenefitsScroll}>{">"} Benefits</li>
              <li onClick={CodeScroll}> {">"} Code of Practice</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
