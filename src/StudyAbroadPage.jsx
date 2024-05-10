import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import "./styles/studyAbroad.css";
import { useState } from "react";

import whatsAppImg from "./assets/whatsapp.png";

//images
import image1 from "./assets/Location search-bro.svg";
import image2 from "./assets/Select-amico.svg";
import image3 from "./assets/Business vision-pana.svg";

export default function StudyAbroadPage() {
  const [ques, setQues] = useState(1);
  function handleAllchanges(i) {
    handleChangeTab(i);
  }
  function handleChangeTab(i) {
    setQues(i);
  }
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
      <div className="studyAbroadBody">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="studyAbroadQueTab"
        >
          <ul>
            <li
              className={ques === 0 ? "active" : ""}
              onClick={() => {
                handleAllchanges(0);
              }}
            >
              Why study abroad?
            </li>
            <li
              className={ques === 1 ? "active" : ""}
              onClick={() => handleChangeTab(1)}
            >
              Where to study abroad?
            </li>
            <li
              className={ques === 2 ? "active" : ""}
              onClick={() => handleChangeTab(2)}
            >
              How do I choose a program?
            </li>
            <li
              className={ques === 3 ? "active" : ""}
              onClick={() => handleChangeTab(3)}
            >
              Why 360° Abroad?
            </li>
          </ul>
        </motion.div>
        {ques === 0 && (
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="whyStudyAbroad"
          >
            <h3>Why study abroad ?</h3>
            <p>
              Studying abroad is just an amazing experience. It is unique from
              the personal as well as academic point of view. Being for a few
              months in an international enviroment is the best opportunity to
              establish intercultural contacts, have a valuable insight into a
              different culture, learn a language and grow as a person.{" "}
            </p>
            <p>
              Studying abroad is a life-changing experience that offers several
              positive and lasting benefits.Anyone who has studied abroad will
              confirm that it is a life-changing experience and one of the most
              rewarding things they have ever done.
            </p>
            <p style={{ paddingBottom: "0" }}>
              Some reasons why you should consider studying Abroad:
            </p>
            <h3
              style={{ paddingTop: "0.5rem" }}
              className="whyAbraodSideHeader"
            >
              Understand Culture:
            </h3>
            <p>
              Studying abroad allows you get to know another culture first-hand.
              There are a lot of cultural differences apart from language, food,
              appearances, and personal habits which reflects a person's deep
              perceptions, beliefs, and values that influence his or her way of
              life and the way that she/he views the world. Going to a different
              country gives you the opportunity to understand the cultural
              differences at a very young age and helps you adapt to such
              differences.
            </p>
            <h3 className="whyAbraodSideHeader">Make New Friends:</h3>
            <p>
              By going abroad to study at a young age, you can easily make
              friends around the world and improve your network. This may help
              you enormously in building your contacts and helps you grow in
              your career path
            </p>
            <h3 className="whyAbraodSideHeader">Discover Yourself: </h3>
            <p>
              You may develop skills and experiences a classroom setting will
              never provide. Even though you may find it a little scary to go &
              live in a new country with lot of cultural & lifestyle
              differences, over a period of time you will learn that it is also
              more exciting. It's an opportunity to discover new strengths and
              abilities, conquer new challenges, and solve new problems. You
              will encounter situations that are wholly unfamiliar to you and
              will learn to adapt and respond in effective ways.
            </p>
            <h3 className="whyAbraodSideHeader">Expands your worldview: </h3>
            <p>
              As a student & a Citizen who has not travelled much beyond the
              nation's boundary, you tend to develop some fixed opinions about
              the people in other countries. Students who study abroad return
              home with an informed and much less biased perspective toward
              other cultures and peoples.
            </p>
            <h3 className="whyAbraodSideHeader">
              Improves your employment opportunities:
            </h3>
            <p>
              An employer feels that a student who has studied abroad is
              self-motivated, independent, willing to embrace challenges, and
              able to cope with diverse problems and situations. Your experience
              living and studying in a foreign country, negotiating another
              culture, and acquiring another language will all set you apart
              from the majority of other job applicants.
            </p>

            <h3 className="whyAbraodSideHeader">
              Study abroad helps you to learn about yourself:
            </h3>
            <p>
              The Overseas study & living in a foreign land for a substantial
              amount of time helps one develop new ideas and perspectives about
              oneself and your own culture. This also helps you to reconsider
              your own beliefs and values. This experience may strengthen those
              values or it may cause students to alter or abandon them and
              embrace new concepts and perceptions.
            </p>
            <h3 className="whyAbraodSideHeader">
              Study abroad gives you the opportunity to break out of your
              academic routine:
            </h3>
            <p>
              As a student you may be used to a particular way of teaching. You
              may be experiencing a completely unfamiliar & interesting academic
              system. You will also have the chance to take courses not offered
              in your country. This also gives you a great opportunity to break
              out the monotony of the routine you would have followed every year
              in India.
            </p>
            <h3 className="whyAbraodSideHeader">Learn a new language:</h3>
            <p>
              It also gives you the opportunity to learn a new language
              depending on the country you go to. You're surrounded by the
              language on a daily basis and are seeing and hearing it in the
              proper cultural context. Language learning happens most quickly
              under these circumstances.
            </p>
            <h3 className="whyAbraodSideHeader">
              Opportunity to travel widely:
            </h3>
            <p>
              Weekends and academic breaks allow you to venture out and explore
              your surroundings. You will be much closer to places you might
              otherwise not have had the opportunity to visit.
            </p>
          </motion.main>
        )}
        {ques === 1 && (
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="whereToStudy"
          >
            <div className="whereToStudyContent">
              <h3>Where to study abroad ?</h3>
              {/* <p>
                Deciding where to study is just as important as choosing a study
                abroad program, and it depends on very personal factors.
                Different factors are important to different people.
              </p>
              <p>
                Depending on the choice of your course or program, you may
                choose the country. There are some courses that are special in
                certain countries.
              </p>
              <p>
                Some countries allow students to gain work experience after the
                completion of the education. So if you are looking at some
                international work exposure, then you can choose them
                accordingly.
              </p>
              <p>
                Some courses in certain countries have an integrated work option
                during your regular college curriculum. This gives you an
                opportunity to interact with the industry and also gain little
                bit of work experience and understanding of the work culture in
                these countries.
              </p>
              <p>
                If closely integrating the experience with your degree is
                important to you, then you should consider a location that
                offers courses in your major and has natural affinities to your
                major that will afford you experiences in your field of interest
                outside the classrrom, too.
              </p>
              <p>
                Developing nations are playing an increasing role in the global
                economy. Also remember that while large cities offer numerous
                social and intellectual opportunities, they are also more
                cosmopolitan. Your extracurricular options may seem more limited
                in a smaller town, but it's there that you will gain more of an
                appreciation of traditional ways of life and make connections
                with the natives.
              </p> */}
              <p>
                Choosing a study abroad program involves a blend of academic and
                cultural considerations:
              </p>
              <ul>
                <li>
                  <span>Academic Focus:</span>
                  Certain countries are known for specialized programs. Align
                  your course selection with destinations offering unique
                  programs in your field.
                </li>
                <li>
                  <span>Work Experience:</span>
                  Consider countries with post-graduation work opportunities or
                  programs with integrated work placements for practical
                  experience and cultural understanding of the work environment.
                </li>
                <li>
                  <span>Cultural Integration:</span>
                  Look for locations that offer experiences related to your
                  major outside of the classroom, especially in developing
                  nations for a deeper immersion in a growing global economy.
                </li>
                <li>
                  <span>Urban vs. Rural:</span>
                  Large cities provide a vibrant social and intellectual scene
                  but may feel more cosmopolitan. Smaller towns offer a chance
                  to connect with locals and appreciate traditional ways of
                  life.
                </li>
              </ul>
            </div>
            <div>
              <img loading="lazy" src={image1} />
            </div>
          </motion.main>
        )}
        {ques === 2 && (
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="chooseProgram"
          >
            <div>
              <h3>How do I choose a program?</h3>
              <p>
                Choosing a study abroad program is harder than ever. With 1000s
                of specializations available and programs to choose from, every
                student is sure to find something that fits his or her needs.
                But with such unlimited options, it becomes increasingly
                difficult to choose the program
              </p>
              <p>
                Hence, to choose a program that would ideally suit you, you must
              </p>
              <ul>
                <li>
                  Understand how the program choice is relevant toward your
                  degree or to your education as a whole.
                </li>
                <li>
                  Check if the program relate to your major (if you already have
                  one).
                </li>
                <li>
                  Analyse if the program would give you the opportunity to take
                  courses you might not otherwise have the opportunity to take
                  in India.
                </li>
                <li>
                  Find out if there are extracurricular offerings like organized
                  field trips or intership options, that can enhance the
                  experience.
                </li>
                <li>
                  Check the growth of the field that interests you and find out
                  if graduates with your major being hired right out of college
                  or if they need additional training?
                </li>
                <li>
                  Finally, you may prefer a program that has an on-site support
                  network for international students.
                </li>
              </ul>
            </div>
            <div>
              <img loading="lazy" src={image2} />
            </div>
          </motion.main>
        )}
        {ques === 3 && (
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="Why360Abroad"
          >
            <div>
              <h3>Why 360 Abroad?</h3>
              {/* <p>
                There is nothing as exciting and valuable as studying abroad. At
                a very young age, you get a great opportunity to mingle with
                students from various countries, religions and cultures. This
                exposure is sure to build tremendous self-confidence in you,
                which will be of immense help in facing a challenging future.
                And of course, you get to enjoy world-class education!
              </p>
              <p>
                At 360o Abroad, we fully understand the importance of overseas
                education. Which is why, we have fully equipped ourselves to
                provide the most appropriate and the most effective guidance for
                you.
              </p>
              <p>
                Our teams of thorough professionals get to know your educational
                background, your strengths, your interests, your financial
                status and every other vital information about you.
                Subsequently, they make a complete analysis and give you the
                right directions for you to choose the ideal place and the apt
                courses. That is why; when you go through 360o Abroad you never
                go wrong.
              </p> */}
              <h4>Expand your world with overseas education!</h4>
              <p>
                Studying abroad isn't just about textbooks - it's about personal
                growth. Imagine yourself living and learning alongside
                classmates from around the globe. This exposure to diverse
                cultures builds confidence and prepares you for a globalized
                future. Plus, you'll gain a top-notch education that sets you
                apart.
              </p>
              <h4>
                360 Abroad: Your one-stop guide to a successful study abroad
                journey.
              </h4>
              <p>
                We understand the complexities of navigating overseas education.
                Our expert advisors take the time to understand you - your
                background, strengths, interests, and finances. With this
                personalized approach, we help you find the perfect program and
                destination to match your goals. Don't go it alone - choose 360o
                Abroad for a stress-free and successful study abroad experience
              </p>
            </div>
            <div className="why360ImageContainer">
              <img loading="lazy" src={image3} />
            </div>
          </motion.main>
        )}{" "}
      </div>
      <Footer />
    </>
  );
}
