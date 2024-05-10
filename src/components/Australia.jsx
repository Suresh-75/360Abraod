import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "../styles/australia.css";
import { useRef } from "react";
import AustraliaImg from "../assets/city-of-gold-coast-4fq7tcUMnc4-unsplash.jpg";
import UofMel from "../assets/UofMel.png";
import UofNewSouth from "../assets/UofNewSouth.png";
import MonashUni from "../assets/MonashUni.png";
import AustNatUni from "../assets/AustNatUni.png";
import UniOfQueen from "../assets/UniOfQueen.png";
import whatsAppImg from "../assets/whatsapp.png";
const images = [UofMel, UofNewSouth, MonashUni, AustNatUni, UniOfQueen].map(
  (image) => ({
    id: crypto.randomUUID(),
    image,
  })
);

import { Banner } from "./Banner";
export default function Australia() {
  const features = useRef(null);
  const whyStudy = useRef(null);
  const visa = useRef(null);
  const afterStudy = useRef(null);
  const featuresScroll = () =>
    features.current.scrollIntoView({
      behavior: "smooth",
    });
  const whyStudyScroll = () =>
    whyStudy.current.scrollIntoView({
      behavior: "smooth",
    });
  const visaScroll = () =>
    visa.current.scrollIntoView({
      behavior: "smooth",
    });
  const afterStudyScroll = () =>
    afterStudy.current.scrollIntoView({
      behavior: "smooth",
    });
  return (
    <>
      <NavBar />
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
            src={AustraliaImg}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="countryNameContainer"
          >
            <p>AUSTRALIA</p>
          </motion.div>
        </div>
        <Banner classN="aust" images={images} speed={35000} />
        <div className="countryPageContext">
          <div style={{ width: "75%", marginRight: "1.5rem" }}>
            <h2 style={{ fontSize: "2rem" }}>Australia</h2>
            {/* <p>
              To those who seek the best of education in the most enjoyable
              ambience, Australia is truly the most ideal choice. Australia is a
              land of beauty and contrast. It offers a wealth of experiences
              from the vast deserts and rough outback, to cosmopolitan cities or
              the colourful Great Barrier Reef and some of the best beaches in
              the world. Australia is the world's smallest continent but
              sixth-largest country and its population is concentrated along the
              eastern and southeastern coasts.
            </p>
            <p>
              All parts of Australia enjoy warm summers and relatively mild
              winters; regular, tropical, invigorating, sea breeze known as "the
              Doctor" occurs along the West Coast in the summer. It has a
              population of 19,546,792 (July 2002 est.). Australia follows
              Anglican 26.1%, Roman Catholic 26%, other Christian 24.3%,
              non-Christian 11%, other 12.6% Religions.
            </p> */}
            <h3 ref={features} className="sideHeader">
              Features of studying in Australia
            </h3>
            <ul className="austFeaturesUL">
              <li>
                <span>Education:</span>
                <ul>
                  <li>
                    World-class education with internationally recognized
                    qualifications.
                  </li>
                  <li>Attractive and stimulating learning environment.</li>
                  <li>
                    Wide range of programs at all levels (thousands to choose
                    from).
                  </li>
                  <li>Modern facilities with up-to-date technology.</li>
                  <li>
                    Qualified and supportive teaching staff with excellent
                    support services.
                  </li>
                  <li>Many courses with an international focus.</li>
                </ul>
              </li>
              <li>
                <span>Cost and Affordability:</span>
                <ul>
                  <li>
                    Lower tuition fees compared to some other Western countries
                    (USA, UK).
                  </li>
                  <li>High standard of living with a relatively low cost.</li>
                  <li>Opportunity to work part-time while studying.</li>
                </ul>
              </li>
              <li>
                <span>Location and Lifestyle:</span>
                <ul>
                  <li>Safe and politically stable country.</li>
                  <li>
                    Diverse and multicultural environment with supportive
                    communities.
                  </li>
                  <li>
                    Variety of study locations: cities, beaches, and rural
                    areas.
                  </li>
                </ul>
              </li>
              <li>
                <span>Overall Benefits:</span>
                <ul>
                  <li>
                    Develop personally and academically while preparing for your
                    future career.
                  </li>
                  <li>
                    Live in a beautiful country with a high quality of life.
                  </li>
                  <li>Gain valuable international experience.</li>
                </ul>
              </li>
            </ul>

            {/* <div className="growingDestList" style={{ marginTop: "2rem" }}>
              <ul>
                <li>World class education, recognised internationally.</li>
                <li>Attractive and stimulating academic environment.</li>
                <li>
                  Lower fees than other western countries like the USA and UK.
                </li>
                <li>Modern facilities using current technologies.</li>
                <li>Thousands of study programs at many levels.</li>
                <li>Helpful, qualified teaching staff.</li>
                <li>Excellent support services.</li>
                <li>International focus in courses.</li>
                <li>Safe friendly, politically stable country</li>
                <li>
                  Multicultural society with supportive ethnic communities.
                </li>
                <li>
                  Your choice of study environments- cities, tropical areas and
                  country towns.
                </li>
                <li>Part-time work permitted for international students.</li>
                <li>High standard of living at relatively low cost.</li>
                <li>
                  Australia welcomes international students from all countries.
                </li>
              </ul>
            </div>
            <h3>Live</h3>
            <p>
              Australia is one of the best places in the world to live while you
              learn. The standard of living is amongst the highest in the world,
              yet costs remain competitive. On your breaks from study, you will
              have a wide choice of activities to enrich your experience - from
              cultural festivals, concerts and museums, to major sporting events
            </p>

            <h3>Learn</h3>
            <p>
              Australian education has a strong international reputation for
              excellence. Whether you study at a university, school, vocational
              or English language institute, you will receive a quality
              education that will form a strong foundation for your future
              success.
            </p>
            <h3>Grow</h3>
            <p>
              The benefits of living and learning in Australia are both personal
              and academic. Your years in Australia will give you the best
              platform to succeed in your career, and prepare you for the
              challenges of the work place. It won’t just be your mind that
              develops - your time in the classroom will change you as a person.
              Australia is the perfect place to live, learn and grow.
            </p> */}
            <h3 ref={whyStudy} className="sideHeader">
              Why study in Australia?
            </h3>
            <ul className="whyAustStudyUL">
              <li>Offers a wide range of courses</li>
              <li>Encourages innovative, creative and independent thinking</li>
              <li>Provides practical skills and intellectual abilities</li>
              <li>Has a strong international reputation</li>
              <li>Australian qualifications are internationally recognized</li>
              <li>Focuses on vocational education and training</li>
              <li>Has a national curriculum framework</li>
              <li>Offers English language programs</li>
              <li>Provides quality assurance for international students</li>
              <li>Is a safe and multicultural country</li>
              <li>Qualifications are recognized internationally</li>
            </ul>
            {/* <p>
              In Australia, you have the freedom to choose a path that suits
              your particular goals. There are thousands of courses on offer.
            </p>
            <p>
              Whichever course you choose, you’ll experience a unique kind of
              education. Studying in Australia promotes innovative, creative and
              independent thinking. You’ll learn to work as part of a team, to
              communicate effectively with others and to develop the practical
              skills and intellectual abilities you need for global success.
            </p>
            <p>
              Most importantly, you’ll learn how to use your initiative. Your
              teachers will encourage you to think of original, practical
              solutions to real-world problems. Upon graduation, your
              qualification will make you highly sought after by Australian and
              international employers.
            </p>
            <p>
              The Australian education system has a strong international
              reputation and is known for its effective structure and innovative
              policy developments. Many other countries, eager to improve their
              own education systems, turn to Australia for advice.
            </p>
            <p>
              Australia is also one of the best places to live. It is a young,
              vibrant and friendly country in which students can live, learn and
              grow. So if you want a quality education and a good lifestyle,
              Australia’s the place to be.
            </p>
            <h3 style={{ fontSize: "1.5rem", color: "#EE4C7C" }}>Excellence</h3>
            <p style={{ marginBottom: "0" }}>
              Australia has an international reputation for excellence in all
              areas of education and training.
            </p>
            <h3>Australian qualification, international recognition</h3>
            <p>
              Australian universities are widely known for the quality of their
              teaching and research. You’ll learn from teachers who are experts
              in their industries and who can provide you with a sound
              understanding of your chosen field. You’ll develop strong academic
              skills that can be applied to other areas and learn to think
              creatively and independently.
            </p>
            <p>
              Australia’s scientists and researchers have been responsible for
              major breakthroughs and technological advances around the world.
              Our best-known achievers have won international awards, including
              eight Nobel Prizes.
            </p>
            <h3>A place where work and study meet</h3>
            <p>
              Australia’s approach to vocational education and training leads
              the world in innovation and quality. You’ll have the opportunity
              to step outside the classroom and practice your skills in real and
              simulated workplaces. This will give you a genuine advantage over
              other graduates.
            </p>
            <h3>A great place to grow up</h3>
            <p>
              School students in Australia study under a national curriculum
              framework which ensures high academic standards in eight key
              learning areas, including English, mathematics, science and arts.
              Teachers are committed to encouraging children’s intellectual,
              personal and emotional growth.
            </p>
            <h3>Improve your English</h3>
            <p>
              Studying English in Australia will give you the opportunity to use
              and improve your English every day. Australian English language
              institutions have video facilities, libraries and
              computer-assisted learning to help you become a fluent
              English-speaker in no time. You’ll even be able to find a program
              to meet your specific needs.
            </p>
            <p>
              Australia is a technologically advanced society and you’ll study
              at an institution with great facilities. Australian classrooms are
              equipped with the latest technology and laptops are allowed in
              many lecture halls and classrooms.
            </p>
            <h3 style={{ fontSize: "1.5rem", color: "#EE4C7C" }}>
              Quality assurance
            </h3>
            <p>
              How can you be sure that the schools, universities and training
              institutions you’ll read about on this website will deliver on
              what they promise?
            </p>
            <p>
              Here’s how: Australia provides international students with the
              most rigorous consumer protection in the world. Period. In 2000,
              Australia introduced the Education Services for Overseas Students
              (ESOS) Act 2000. ESOS ensures that, in order to enrol
              international students, institutions must first meet requirements
              for registration. All institutions which meet registration
              requirements are listed on the publicly available Commonwealth
              Register of Institutions and Courses for Overseas Students
              (CRICOS).
            </p>
            <p>
              If an institution doesn’t meet stringent standards for marketing
              activities, education delivery, facilities and student support
              services, it isn’t registered. That means it can’t enrol
              international students. However, it’s important to note that if
              you come to Australia on a non-student visa, you won’t have this
              assurance.
            </p>
            <h3>Consumer protection</h3>
            <p>
              The ESOS legislation provides consumer protection. This means you
              will receive the tuition for which you have paid, and your fees
              are protected by law.
            </p>
            <h3>Course information</h3>
            <p>
              Institutions must ensure that the marketing materials (such as
              brochures and handbooks) they provide to international students
              are accurate and not misleading. Before issuing your proof of
              enrolment, the institution must first provide you with current and
              accurate information, such as:
            </p>
            <div className="scholarshipList">
              <ul>
                <li>
                  requirements for acceptance into the course, including English
                  language proficiency, previous work experience or educational
                  qualifications necessary for admittance;
                </li>
                <li>
                  the course content, duration and the qualification it leads
                  to;
                </li>
                <li>modes of study and assessment methods;</li>
                <li>
                  the facilities, equipment, learning and library resources
                  available;
                </li>
                <li>
                  indicative course-related fees, including advice on the
                  potential for fees to change during your course; and
                </li>
                <li>
                  relevant information on living in Australia, including
                  indicative costs of living and accommodation options.
                </li>
              </ul>
            </div>
            <h3>Student support services</h3>
            <p>
              Institutions must support international students in adjusting to
              study and life in Australia, achieving their learning goals and
              satisfying the learning outcomes of their course.
            </p>
            <p>This includes providing information on arrival about:</p>
            <div className="scholarshipList">
              <ul>
                <li>
                  student support services available to help facilitate a smooth
                  transition to life in Australia;
                </li>
                <li>legal services;</li>
                <li>emergency and health services;</li>
                <li>facilities and resources;</li>
                <li>complaints and appeals processes; and</li>
                <li>
                  any student visa conditions relating to course progress and/or
                  attendance as appropriate.
                </li>
              </ul>
            </div>
            <p>
              Throughout your course, institutions must help you access study
              support services and welfare-related services if you need them.
            </p>
            <h3 style={{ fontSize: "1.5rem", color: "#EE4C7C" }}>
              Safe, multicultural society
            </h3>
            <p>
              Australia is a safe, friendly and harmonious country. When you
              arrive you may find yourself struck by the friendliness and
              hospitality of the people. Imagine: you’ve left your country
              behind, yet somehow, you’ve arrived home.
            </p>
            <p>
              Australia is a very safe country compared with almost anywhere in
              the world. Political unrest is limited in Australia, crime rates
              are low and strict gun control laws provide a safe environment.
            </p>
            <p>
              As one of the most multicultural countries in the world, Australia
              is accepting of all religions. Your right to practice your faith
              without persecution or discrimination is protected by law. You’ll
              find Australia to be very friendly and welcoming.
            </p>
            <p>
              Australians value the wealth of cultural diversity and social
              sophistication that international students bring to our campuses
              and communities. We take great care in looking after international
              students and helping them adjust to the Australian way of life.
            </p>
            <p>
              Australians are open, friendly people and you will receive a warm
              welcome. Many students living in Homestay situations experience
              Australian family life in a natural, friendly way and often they
              find themselves treated like a family member. Wherever you live -
              Homestay, boarding school, or campus accommodation - you will
              discover many opportunities to make lasting friendships.
            </p>
            <h3 style={{ fontSize: "1.5rem", color: "#EE4C7C" }}>
              Qualifications recognition
            </h3>
            <p>
              More than 400,000 international students were enrolled at an
              Australian education institution in 2007. When you graduate, your
              qualification will be recognised by international employers and
              leading education institutions around the world.
            </p>
            <p>
              This is because all Australian education qualifications are
              included under one national system - Australian Qualifications
              Framework (AQF). The AQF links school, vocational and university
              qualifications, making it easier to progress to the next AQF level
              anywhere in Australia.
            </p>
            <p>
              The AQF also makes it easy for overseas governments to recognise
              your qualification. When international employers see it, they know
              what it stands for: a world class education in a modern,
              democratic and technologically advanced society.
            </p>
            <p>
              Australia even has a system to recognise your qualifications from
              other countries. The Australian Government organisation, National
              Office of Overseas Skills Recognition (NOOSR) helps Australian
              institutions to recognise qualifications from overseas, allowing
              for recognition of your previous studies.
            </p>
            <p>
              English speaking country English language studies can prepare you
              for further studies and a global career. The best way to learn
              English is to live among, and converse with, native speakers.
              Students from around the world come to Australia every year to do
              just that. While some students study to prepare them for academic
              challenges, others study to improve their English for business,
              travel or personal reasons. Australia’s flexible English language
              institutions cater for everyone from beginner to advanced, and you
              can enrol at virtually any time of the year.
            </p>
            <h3>Guarantee of quality</h3>
            <p>
              You can be sure that you’ll receive quality training. In
              Australia, English language courses are closely regulated to
              ensure the highest standards of education delivery are maintained.
              These standards extend to class sizes, professional teacher
              qualifications, curriculum, teaching methods and materials.
            </p>
            <h3>Recognition of your skills</h3>
            <p>
              When you finish your English course you can choose to sit for one
              of the major internationally recognised tests, including the
              Cambridge Test, Test of English as a Foreign Language (TOEFL), and
              the International English Language Testing System (IELTS). IELTS
              is the test preferred by most Australian institutions and is also
              a requirement for many student visas.
            </p>
            <h3 style={{ fontSize: "1.5rem", color: "#EE4C7C" }}>
              Student support services
            </h3>
            <p>
              Student support forms a large part of Australia’s education
              system. Institutions take their responsibility to student welfare
              seriously. They provide specialist services to help international
              students adjust to life and study in Australia and to achieve
              their goals. This includes student services such as:
            </p>
            <div className="scholarshipList">
              <ul>
                <li>language tuition;</li>
                <li>designated international student advisers;</li>
                <li>on-arrival reception and orientation programs; and</li>
                <li>
                  health, counselling, accommodation and employment services.
                </li>
              </ul>
            </div>
            <h3 style={{ fontSize: "1.5rem", color: "#EE4C7C" }}>
              Globally recognised qualifications
            </h3>
            <p>
              In Australia, you have the freedom to choose the study option to
              suit your goals. You can study at universities, vocational
              education, schools and English language training. These sectors
              are linked so you can move easily from one qualification level to
              the next and from one institution to another.
            </p>
            <p>
              Graduating with an Australian qualification will give you a
              competitive edge. Other governments, international employers and
              institutions around the world recognise the value of an Australian
              qualification and the high quality of our education system.
            </p>
            <h3 style={{ fontSize: "1.5rem", color: "#EE4C7C" }}>
              Study costs
            </h3>
            <p>
              There is no doubt that Australia is the perfect place to enjoy a
              quality education and outstanding quality of life. What makes it
              even better is that Australia offers excellent value for money,
              with living expenses and tuition costs comparable to the United
              Kingdom and Unites States.
            </p>
            <p>
              Australians enjoy one of the highest standards of living in the
              world - without the expensive price tag. An average international
              student in Australia will spend about A$360 a week on
              accommodation, food, clothing, entertainment, transport and
              telephone. Remember, though, that this figure depends on your
              location, lifestyle and even your course. You should seek further
              information on living costs from your institution.
            </p> */}
            <h3 ref={visa} className="sideHeader">
              Visa requirements
            </h3>
            {/* <p>
              Before you receive a student visa, you will have to show that you
              have enough money to pay for living expenses, education costs and
              travel for the duration of your course. You can offset your living
              expenses by working part time while you study, but you shouldn’t
              rely on your wages as your only source of income.
            </p>
            <h3 style={{ fontSize: "1.5rem", color: "#EE4C7C" }}>
              Overseas Student Health Cover (OSHC)
            </h3>
            <p>
              Another requirement is that you maintain Overseas Student Health
              Cover (OSHC) for the duration of your student visa. You will also
              be responsible for your own accident and property insurance. It’s
              a good idea to purchase travel insurance before leaving your
              country to cover lost baggage, cancellation of plane tickets and
              repatriation.
            </p> */}
            <ul className="whyAustStudyUL">
              <li>
                Must show sufficient funds to cover living expenses, tuition
                fees, and travel for your entire study program.{" "}
              </li>
              <li>
                Part-time work is allowed to help with living costs, but income
                cannot be the only source of financial support.
              </li>
              <li>
                Overseas Student Health Cover (OSHC) is mandatory throughout
                your student visa period.
              </li>
            </ul>
            <h3 ref={afterStudy} className="sideHeader">
              After your studies
            </h3>
            {/* <p>
              When it comes time to return home after completing your studies,
              you may find it useful to join an Australian Alumni network. The
              Australian Government provides help in your country to contact
              these networks. Some offices help organise alumni functions and
              assist Australian institutions to conduct in-country graduation
              ceremonies for international students who have returned home.
            </p>
            <p>
              Australian Government offices have also been very active in
              developing Memoranda of Understanding and qualifications
              recognition between Australia and other countries. They can also
              advise you where to find information about employment and further
              study opportunities in Australia and in your country.
            </p> */}
            <ul className="austFeaturesUL">
              <li>
                <span>Join an Australian Alumni network:</span> This can be
                helpful for professional networking and staying connected after
                you return home.
              </li>
              <li>
                <span>
                  Australian Government can help you find Alumni networks:
                </span>
                They can provide contact information for networks in your home
                country.
              </li>
              <li>
                <span>
                  Government offices can help with graduation ceremonies:
                </span>
                Some offices assist Australian institutions with holding
                graduation ceremonies in your home country.
              </li>
              <li>
                <span>
                  Government offices can advise on employment and further study:
                </span>
                They can provide information on opportunities in Australia and
                your home country.
              </li>
            </ul>
          </div>
          <div style={{ width: "25%" }}>
            <div className="stickyNavBar">
              <li onClick={featuresScroll}>
                {">"} Features of studying in Australia
              </li>
              <li onClick={whyStudyScroll}>{">"} Why study in Australia?</li>
              <li onClick={visaScroll}> {">"} Visa Requirements</li>
              <li onClick={afterStudyScroll}> {">"} After Study?</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
