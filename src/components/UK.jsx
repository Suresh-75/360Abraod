import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "../styles/uk.css";
import { useRef } from "react";
//images
import ukImg from "../assets/susan-q-yin-ImoVrhUBeFs-unsplash.jpg";
import ukAR from "../assets/ukImages/ukAR-removebg-preview.png";
import UKchichester from "../assets/ukImages/UKchichester-removebg-preview.png";
import ukGlasgow from "../assets/ukImages/ukGlasgow-removebg-preview.png";
import ukKIngston from "../assets/ukImages/ukKIngston-removebg-preview.png";
import ukOxford from "../assets/ukImages/ukOxford-removebg-preview.png";
import ukLondonSouth from "../assets/ukImages/ukLondonSouth-removebg-preview.png";
import ukSunderland from "../assets/ukImages/ukSunderland-removebg-preview.png";
import whatsAppImg from "../assets/whatsapp.png";
import { Banner } from "./Banner";
const images = [
  ukAR,
  UKchichester,
  ukGlasgow,
  ukKIngston,
  ukLondonSouth,
  ukOxford,
  ukSunderland,
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));
export default function UK() {
  const whyStudy = useRef(null);
  const ukHigher = useRef(null);
  const reason = useRef(null);
  const whyUk = useRef(null);
  const whyStudyScroll = () =>
    whyStudy.current.scrollIntoView({
      behavior: "smooth",
    });
  const ukHigherScroll = () =>
    ukHigher.current.scrollIntoView({
      behavior: "smooth",
    });
  const reasonScroll = () =>
    reason.current.scrollIntoView({
      behavior: "smooth",
    });
  const whyUkScroll = () =>
    whyUk.current.scrollIntoView({
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
          <motion.img src={ukImg} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="countryNameContainer"
          >
            <p>UNITED KINGDOM</p>
          </motion.div>
        </div>
        <Banner classN="uk" images={images} speed={35000} />
        <div className="countryPageContext">
          <div style={{ width: "75%", marginRight: "1.5rem" }}>
            <h2>UNITED KINGDOM</h2>
            <ul className="ukUl">
              <li>
                <span> Renowned Education System:</span>
                The UK has a rich history and is known for its high-quality
                education system.
              </li>
              <li>
                <span> Globally Recognized Qualifications:</span>A UK
                qualification is respected worldwide and can boost your career
                prospects.
              </li>
              <li>
                <span> Vibrant Learning Environment:</span>
                UK universities offer a stimulating and challenging environment
                to develop your potential.
              </li>
              <li>
                <span> Focus on Practical Skills:</span>
                UK education emphasizes critical thinking, creativity, and
                independence, which are valuable skills in today's job market.
              </li>
            </ul>
            {/* <p>
              They call it the cradle of education. That is the United Kingdom
              for you. With a rich cultural heritage and a most triumphant
              history to boast of, the UK remains unparalleled in the sheer
              quality of education.
            </p>
            <p>
              Located near Western Europe, islands including the northern
              one-sixth of the island of Ireland between the North Atlantic
              Ocean and the North Sea, northwest of France. The climate is
              temperate; moderated by prevailing southwest winds over the North
              Atlantic Current; more than one-half of the days are overcast.
              Lies near vital North Atlantic sea lanes; only 35 km from France
              and now linked by tunnel under the English Channel; because of
              heavily indented coastline, no location is more than 125 km from
              tidal waters.
            </p>
            <p>
              Population of UK is 59,778,002 (July 2002 est.) with Ethic groups
              including English 81.5%, Scottish 9.6%, Irish 2.4%, Welsh 1.9%,
              Ulster 1.8%, West Indian, Indian, Pakistani, and other 2.8%.
              Religion followed is Anglican and Roman Catholic 40 million,
              Muslim 1.5 million, Presbyterian 800,000, Methodist 760,000, Sikh
              500,000, Hindu 500,000, Jewish 350,000. Languages commonly used
              English, Welsh (about 26% of the population of Wales), Scottish
              form of Gaelic (about 60,000 in Scotland). London is the Capital
              city.
            </p>
            <p>
              UK qualifications are recognised and respected throughout the
              world. Your UK qualification will be a solid foundation for
              building your future, boosting your career and prospects for a
              higher salary. UK universities, colleges and schools will provide
              a vibrant, creative and challenging environment in which to
              develop your potential. Quality standards for UK institutions are
              among the best in the world. Universities, colleges and schools
              continually have to prove that their courses meet strict criteria.
              Many other countries are now trying to follow the example of the
              UK.
            </p>
            <p>
              In an increasingly globalised world economy, people need special
              skills and qualities to succeed. Employers want employees who can
              think effectively, creatively and for themselves. This is an
              essential part of the UK learning experience. Institutions use a
              variety of teaching and assessment methods to encourage
              independence, as well as mastery of the subject.
            </p>
            <p>
              The entry profiles include: description of courses and schools,
              contact details, application procedures, admission requirements,
              cost of studies, scholarships, grants, degrees/qualifications
              awarded and other practical information.
            </p> */}
            <h3 ref={whyStudy} className="sideHeader">
              Why study in the UK?
            </h3>
            <ul className="ukWhyStudyUL">
              <li>
                <span>Globally Recognized Education:</span> A UK degree holds
                immense value in India. It can open doors to prestigious jobs
                back home or give you a competitive edge if you wish to work
                abroad.
              </li>
              <li>
                <span>Potentially Lower Costs:</span> Compared to, say, the US,
                UK programs, particularly Masters, can be shorter (1 year) and
                potentially have lower tuition fees, making them a more
                affordable option.
              </li>
              <li>
                <span>Improved English Skills:</span> Studying and living in the
                UK will naturally improve your English fluency. Strong English
                is a major advantage in the Indian job market and opens doors to
                international opportunities.
              </li>
              <li>
                <span>Exposure to a Diverse Culture:</span> The UK is a
                multicultural hub. Studying there allows you to experience
                different cultures and broaden your perspective, which can be
                valuable both personally and professionally.
              </li>
              <li>
                <span>Work and Earn:</span> Working part-time during term and
                full-time during breaks can help you gain valuable work
                experience and potentially offset some study costs. This
                experience can be a plus point for employers back in India or
                abroad.
              </li>
              <li>
                <span>Pathway to Permanent Residency:</span> While studying
                doesn't guarantee permanent residency, a UK degree can be a
                stepping stone. There might be opportunities to work in the UK
                after graduation through specific visa programs.
              </li>
              <li>
                <span>Travel Europe:</span> The UK's location and transportation
                links make it easy and affordable to explore Europe during your
                studies. This can be a fantastic way to experience different
                cultures and broaden your horizons.
              </li>
            </ul>
            {/* <p>
              UK universities provide internationally - recognised
              qualifications of the highest standard. They also offer more
              opportunities than ever before: there are currently over 50,000
              postgraduate taught courses and research opportunities to choose
              from.
            </p>
            <p>
              The UK higher education system combines the best elements of
              tradition and modernity. Some UK universities are among the oldest
              in the world; others are among the newest. Many provide degrees
              with a strong vocational foundation and enjoy good links with
              businesses and professional organisations.
            </p>
            <h3>Academic Culture</h3>
            <p>
              The quality and standard of UK higher education are guaranteed
              through the work of various official bodies. The quality of a
              university's teaching and its general facilities are assessed by
              the Quality Assurance Agency (QAA). Research standards are
              examined by the Research Assessment Exercise (RAE), which
              publishes its findings every five years. The results of all these
              assessments are freely available on the internet. Information on
              quality assurance and assessments is also available from the
              Higher Education Funding Councils.
            </p>
            <h3>Value for money</h3>
            <p>
              The quality of UK degrees is one reason why so many people come to
              the UK to study. Another is value for money. Unlike the equivalent
              programmes in the United States or Australia, most UK Masters
              programmes can be completed in one year.
            </p>
            <h3>An international tradition</h3>
            <p>
              The UK has always welcomed students from all over the world. In
              2003/2004, there were 96,845 students from the European Union (EU)
              and 203,210 students from outside of it in the UK at undergraduate
              and postgraduate level. UK universities are used to looking after
              the welfare of non-UK students and have well-developed support
              services and social networks on campus. At postgraduate level,
              students from outside the UK form over 30% of the entire student
              body.
            </p>
            <h3>The language of business</h3>
            <p>
              A major advantage of studying in the UK is the opportunity to
              perfect your knowledge of the English language – one of the most
              important skills in the international business world. If you are
              from outside the EU, especially if you are studying a commercial
              subject, you may well appreciate the opportunity to observe at
              first hand the operation of the European market. The UK is a
              member of the EU, and living and studying here can provide a
              useful insight into how this major trading bloc functions.
            </p>
            <p>
              The UK has grown to become one of the top destinations to study
              around the world. With traditions of excellence dating back
              hundreds of years, high class institutions at every corner and
              much more flexibility than many other countries, the United
              Kingdom has much to offer international students that other
              English-speaking countries cannot offer.
            </p>
            <p>
              But what makes the United Kingdom stand out? Why should you come
              to the UK as a destination to further your international
              education?
            </p>
            <h3>Growing Destination</h3>
            <p>
              International students have always been an important presence in
              the UK, and the numbers have been growing steadily. With over
              330,000 international students during the 2005/2006 school year,
              the UK is the second most popular destination for international
            </p>
            <p>
              students, behind the US. The UK has worked hard to capitalize on
              the growing demand for English-language instruction and the
              post-9/11 visa hurdles in the US. The top ten countries sending
              students to the UK are:
            </p> */}
            {/* <div className="growingDestList">
              <ul>
                <li>China 50,755</li>
                <li>India 19,205</li>
                <li>Greece 17,675</li>
                <li>Republic of Ireland 16,790</li>
                <li>USA 14,755</li>
                <li>Germany 13,265</li>
                <li>France 12,455</li>
                <li>Malaysia 11,450</li>
                <li>Nigeria 9,605</li>
                <li>Hong Kong 9,445</li>
              </ul>
            </div>
            <p>
              For more demographic and statistical information about
              international students in the UK, visit the UK Council for
              International Student Affairs.
            </p>
            <h3>Worldwide Recognition</h3>
            <p>
              The degrees and qualifications from UK higher education
              institutions are known around the world as high quality and world
              class. The standard of excellence is set by some of the older
              universities with recognizable names, like Oxford and Cambridge,
              but the tradition carries through to many of the universities and
              colleges throughout the UK. When looking for work in the future,
              this can be a great selling point in your favour!
            </p>
            <h3>Education Costs are Lower</h3>
            <p>
              The cost of education for an international student in the UK can
              be lower compared to the USA and other countries. Some courses in
              the USA can be $25,000 plus a year in tuition alone. Tution for
              the majority of UK higher education institutions is in the region
              of £6,000 to £7,000 a year - considerably less!
            </p>
            <p>
              You can also save a lot of money because your degree will
              generally take less time to complete in the UK than in other
              countries. Although four-year programs are increasing in
              popularity, most degree programs in the UK require a three-year
              course and a masters program is typically between one and two
              years. When you consider the shorter timeframe, the cost will be
              much lower if you only have to plan for three years instead of
              four or even five as in many other countries.
            </p>
            <p>
              Although international students can manage their affairs so that
              their UK education is affordable, UK policymakers are taking note
              of an alarming trend in the cost of education for non-EU students.
              With exchange rates climbing, life in the UK can be quite
              expensive generally. In addition, unlike in many other EU
              countries, non-EU students are charged higher rates in the UK than
              students from EU countries. One recent study from the Higher
              Education Policy Institute warned that the UK must act to contain
              and reduce tuition and costs to stay competitive in the hunt for
              international students. At InternationalStudent.com, we are always
              cheered when policy-makers take note of the increasing costs of
              international education. As global competition for international
              students heats up, we’ll be watching for the UK to act
              aggressively to keep the UK a primary destination for
              international students.
            </p>
            <h3>Work Opportunities</h3>
            <p>
              An international student in the UK is typically allowed to work up
              to 20 hours a week during school term, and up to full-time when
              school is out of term. Of course, you should always check with
              your international advisor at your school before starting any work
              - you do not want to be in violation of your visa, and rules
              change all the time. Also, it is not always easy to find a job, so
              relying on work income to fund your education is not a good idea.
              Unless you have employment set up through your school before you
              arrive, you should plan to fund the entire first year of your
              studies without any employment income. Please visit our Visa and
              Immigration pages for more details on working in the UK as an
              international student.
            </p>
            <h3>Scholarships/ Loans</h3>
            <p>
              Financing an international education is always difficult. The best
              approach includes lots of preparation, careful analysis of your
              budget, and hard work in researching and applying for
              scholarships. There are a variety of scholarships and loans
              available to students who wish to study in the UK. Please visit
              our Financing/ Scholarships section for more detailed information,
              and also check out the following resources:
            </p>
            <div className="scholarshipList">
              <ul>
                <li>UK Scholarship Search</li>
                <li>UK Loans for US Citizens</li>
                <li>Education UK Scholarship Database</li>
              </ul>
            </div>
            <h3>Gateway to Europe</h3>
            <p>
              With the addition of the Channel Tunnel and low cost airlines such
              as EasyJet and Ryan Air, Europe is easier to access from the UK
              than ever. You can reach most areas of Europe from the UK within a
              few hours by train or direct flight. For example, if you are
              studying in London or Manchester and you want a weekend away in
              Italy, you can fly Ryan Air direct to Rome, Milan, Pisa, Genoa,
              Venice or several other cities in Italy. The direct flight would
              take around two hours and cost anywhere from 30 to 100 pounds,
              depending on when you travel and when you book. Visit our Getting
              Around section for more UK travel information.
            </p>
            <h3>Multicultural Nation</h3>
            <p>
              The UK is known for having a multicultural society with all
              religions and faiths represented in some way. With a racial,
              ethnic and religious jumble, the UK is very open to new traditions
              and cultures - something that is a great thing for students from
              other countries! You can also be sure that a place of worship will
              be easily accessible for most major religions - and for more
              information on this please see our Religion section or visit the
              following sites:
            </p>
            <div className="scholarshipList">
              <ul>
                <li>Catholic Church in England</li>
                <li>Church of England (Protestant)</li>
                <li>Hindu Council UK</li>
                <li>Buddhist Society UK</li>
                <li>Islamic Society UK</li>
                <li>Judaism UK</li>
              </ul>
            </div>
            <p>
              Studying in the UK will provide you with an academic qualification
              respected and valued throughout the world. It gives students the
              experience of living in the UK, providing them with a vibrant,
              energetic educational experience, whilst enabling them to enjoy
              charismatic surroundings and a traditional British culture.
            </p> */}
            <h3 ref={ukHigher} className="sideHeader">
              The UK Higher Education system explained
            </h3>
            {/* <p>
              Standards of quality for UK institutions are amongst the highest
              in the world. Universities, colleges and schools are continually
              assessed to make sure they meet strict criteria.
            </p>
            <p>
              The British Higher Education system is based on a system of
              lectures, seminars, tutorials and self-directed study. When
              students apply for a Bachelor's degree in most of the UK, they
              apply to a specific course of study rather than an institution.
              Each university has designated admissions staff for each academic
              department.
            </p>
            <p>
              The British academic year is divided into three terms (autumn,
              winter and spring). Each term is approximately 10 to 12 weeks with
              3 week breaks in between.
            </p>
            <p>
              Undergraduate degrees usually take three years to complete in
              England. At some universities, particular subjects require a
              foundation course to be undertaken first. A foundation course
              consists of a class or a number of classes that bring the student
              up to university level of understanding in the subject before
              commencing the degree.
            </p>
            <p>
              Degrees can be awarded for study of a single academic subject
              (single honours), a combination of two subjects (joint honours) or
              a modular degree course which consists of three or more subjects
              (combined honours).
            </p>
            <p>
              Depending on the subject or subjects that you study, successful
              students will be awarded one of the following degrees; BA
              (Bachelor of Arts), BSc (Bachelor of Science), BEd (Bachelor of
              Education), BEng (Bachelor of Engineering), LLB (Bachelor of Law).
              UK degrees are graded and successful students may be awarded
              either a First class degree 1st (Excellent), Upper Second 2i (very
              good), Lower Second 2ii (good) or Third class 3rd (satisfactory).
              For further explanation of these terms and other words relating to
              the British education system, visit our glossary of terms.
            </p> */}
            <ul className="ukHigherEduUl">
              <li>
                <span>High standards:</span>UK institutions are known for their
                high standards of quality.
              </li>
              <li>
                <span>Regular assessment:</span>:Universities, colleges and
                schools are regularly assessed to ensure they meet strict
                criteria.
              </li>
              <li>
                <span>Course-based application:</span>Students apply for a
                specific course of study rather than an institution.
              </li>
              <li>
                <span>Three terms: </span>The academic year is divided into
                three terms (autumn, winter, spring).
              </li>
              <li>
                <span>Undergraduate degree length: </span>Undergraduate degrees
                typically take three years to complete.
              </li>
              <li>
                <span>Foundation courses</span> Some universities require
                foundation courses for specific subjects.
              </li>
              <li>
                <span>Degree types:</span>Degrees can be awarded for a single
                subject (honours), a combination of two subjects (joint
                honours), or multiple subjects (combined honours).
              </li>
              <li>
                <span>Degree classifications: </span>Degrees are classified
                based on achievement (First, Upper Second, Lower Second, Third).
              </li>
            </ul>
            <h3 ref={reason} className="sideHeader">
              Reasons to study here
            </h3>
            {/* <h3>The quality of education</h3> */}
            {/* <p>
              British Universities are subject to rigorous quality assurance
              audits to standardise the quality of education across all
              institutions in the UK, and standards are closely assessed by the
              government. The quality of UK education is recognised across the
              world by employers, universities and governments, which makes it
              an attractive destination for international students. Studying for
              a degree in the UK also gives students the opportunity to develop
              important transferable skills. Students are encouraged to ask
              questions, to discuss their own ideas and to analyse them which
              are all skills that are useful in future careers. For more
              information on quality assurance please visit the Quality
              Assurance Agency website.
            </p>
            <h3>The experience of living in the UK</h3>
            <p>
              The UK is a multi-cultural and multi-faith country. It offers both
              strong tradition and a diverse culture to any international
              student choosing to study here. It's a cosmopolitan society, and
              is home to over a quarter of a million international students at
              any one time. There is plenty to get involved in once you are
              here, from weekends away in Stratford upon Avon or London, to
              attending football matches and going to the theatre or cinema with
              friends. For more ideas on what the UK has to offer, see the Visit
              Britain website.
            </p>
            <h3>Improve your English skills</h3>
            <p>
              Studying in the UK will give you the opportunity to improve or
              perfect your English language skills. English is the International
              Language of business, science and technology, and by studying in
              the UK you will be able to immerse yourself in the language,
              giving you the English skills you need for any future career.
            </p>
            <h3>Financial benefits</h3>
            <p>
              Undergraduate degrees in England are generally three years in
              length, and taught masters programmes one year in length, compared
              to four and two years respectively in most other countries, so you
              should be able to save on both tuition fees and living costs by
              studying here. During your studies in the UK, you can take
              advantage of having permission to work here too. A visa means that
              you have Leave to Enter/Remain as a student in the UK, granted for
              longer than 6 months. During University term-times you can work up
              to 20 hours per week and during the vacation periods you can work
              full-time. Many international students use this opportunity to
              gain valuable work experience and to improve their English
              language skills.
            </p>
            <p>
              The UK also has a subsidised health service called the National
              Health Service (NHS). The NHS provides free and subsidised
              treatment for UK residents. As a student, you, your spouse and any
              children who accompany you to the UK as your dependants are
              entitled to free NHS treatment as long as you are enrolled at the
              University of Warwick for more than 6 months. You will also be
              entitled to free and subsidised treatment if you are a national or
              resident of an EEA country.
            </p> */}
            <ul className="ukHigherEduUl">
              <li>
                <span>High standards:</span> Universities go through regular
                quality checks to ensure consistent standards across the UK.
              </li>
              <li>
                <span>Internationally recognized:</span>UK degrees are valued by
                employers, universities and governments worldwide.
              </li>
              <li>
                <span>Transferable skills development:</span>The educational
                approach encourages critical thinking and communication skills.
              </li>
              <li>
                <span>Multicultural experience</span>The UK offers a diverse and
                welcoming environment for international students.
              </li>
              <li>
                <span>English language immersion:</span>Studying in the UK
                provides an opportunity to improve English language skills.
              </li>
              <li>
                <span>Financial benefits:</span>UK degrees can be shorter than
                in other countries, potentially reducing tuition and living
                costs.
              </li>
              <li>
                <span>Work opportunities:</span>Students can gain work
                experience while studying through part-time and full-time work
                options.
              </li>
              <li>
                <span>Healthcare access:</span>International students may be
                entitled to free or subsidized healthcare through the NHS.
              </li>
            </ul>
            <h3 ref={whyUk} className="sideHeader">
              Why the UK is the best place to pursue your education?
            </h3>
            <ul className="ukWhyBest">
              <li>
                <span>Education:</span>
                <ul>
                  <li>
                    High quality education with internationally recognized
                    degrees.
                  </li>
                  <li>
                    Rigorous quality assurance ensures consistent standards
                    across universities.
                  </li>
                  <li>
                    Develop valuable transferable skills like critical thinking
                    and communication.
                  </li>
                </ul>
              </li>
              <li>
                <span>Benefits:</span>
                <ul>
                  <li>Improve English language skills through immersion.</li>
                  <li>
                    Potentially lower tuition fees and living costs due to
                    shorter programs (3 years undergrad, 1 year postgraduate
                    masters).
                  </li>
                  <li>
                    Gain work experience with part-time or full-time
                    opportunities during breaks.
                  </li>
                  <li>
                    Access to free or subsidized healthcare through the National
                    Health Service (NHS) for students and dependents (with some
                    limitations).
                  </li>
                </ul>
              </li>
              <li>
                <span>Living in the UK:</span>
                <ul>
                  <li>
                    Diverse and multicultural society welcoming international
                    students.
                  </li>
                  <li>
                    Explore historical and cultural landmarks with easy travel
                    options.
                  </li>
                  <li>Enjoy a variety of sports and outdoor activities.</li>
                </ul>
              </li>
            </ul>
            {/* <p>
              The United Kingdom harbors most of the best educational
              institutions in the world. Add to this the soothing climate of the
              UK and the most efficient studying environment you can ever find.
            </p>
            <h3>Modern Environment</h3>
            <p>
              In this era of intense globalization, people need special skills
              and qualities to succeed. Employers want employees who can think
              effectively, creatively and independently. These qualities are
              essentially integrated by the students through the UK learning
              experience. Institutions use a variety of teaching and assessment
              methods to encourage independent thinking and thus enhance
              leadership qualities.
            </p>
            <h3>Culture</h3>
            <p>
              The United Kingdom is a diverse and multi-ethnic society, where
              students of all backgrounds are welcomed and their involvement in
              local communities is valued.
            </p>
            <h3>Working in the UK</h3>
            <p>
              Due to recent changes, it is now easier than ever for
              international students to earn extra money while staying in the
              UK. New rules have been introduced to make it easier for you to
              work while you study. Opportunities are available for you,
              including part-time or vacation work, as well as course-related
              work placements. You will have permission to stay for the duration
              of your course plus a few extra months. However your visa should
              enclose the words 'Work and any changes must be authorized'. This
              will give you the permission to work as a student, up to 20 hours
              per week during the term-time and for unlimited number of hours
              during University vacation periods. You can even apply to stay in
              the UK at the end of your course.
            </p>
            <h3>Traveling within the UK</h3>
            <p>
              The UK consists of three countries and a province. Those are
              England, Scotland, Wales; and the province of Northern Ireland.
              Each portion has its unique history with a diverse culture. As
              these countries are all within easy reach of one another, they're
              easy to explore. The UK is well connected through national air,
              rail, coach and bus networks, which enables one to get almost
              anywhere in the UK. Discounts or special rates are generally
              available for students on most forms of transport.
            </p>
            <h3>Affordable</h3>
            <p>
              UK degrees can take only three years for undergraduates and only
              one year for postgraduate master courses, compared with four years
              and two years in most other countries. This means you will save a
              great deal on both tuition fees and living costs, and you will be
              able to start working and earning money sooner. UK degree courses
              are shorter because they are more intensive, and therefore more
              efficient in terms of your time and money. Health care is often
              free for international students. You are likely to be able to take
              advantage of National Health Service (NHS) treatment, as well as
              reduced-cost medicines, dental treatment and eye tests.
            </p>
            <h3>The Students' Union</h3>
            <p>
              At all UK universities and most of the larger colleges, students
              are automatically considered as members of the National Union of
              Students (NUS). This will give you access to clubs and societies,
              representing a vast range of hobbies, sports and interests. Most
              branches of the Students' Union hold a 'Fresher Week'- at the
              beginning of the autumn term, during which you will be able to
              join these clubs and societies. The Students' Union also organizes
              a wide range of social activities.
            </p>
            <h3>UK – Climate & Clothing</h3>
            <p>
              There are four seasons, namely autumn, winter, spring and summer
              but it rains all year round. During autumn and spring seasons, it
              tends to get chilly and you will need heavy warm clothes such as
              Jackets, pullovers, sweaters, vests, waterproof shoes or boots,
              jumpers, coats, hats, gloves and scarves.
            </p>
            <h3>Accommodation</h3>
            <p>
              Most Universities and Colleges in the UK are well served with
              suitable student accommodation. Accommodation is of two types, on
              campus and off campus. The on campus accommodation is called Halls
              of Residence. The off campus accommodation can be modern,
              multi-storied town houses, located close to the Universities.
              While the on campus Halls of Residence cost less, it is left to
              student's choice which type of accommodation is preferred.
              Reservations for accommodation have to be made well in advance.
              The Universities will also offer full membership sports and
              recreation facilities and it is included within the rent payable
              for your accommodation.
            </p>
            <h3>Art</h3>
            <p>
              Art in the UK is flourishing and most of the UK's 2,000 museums
              and galleries are free. Art exhibitions are regular events
              throughout the UK and are highly popular. There are many art
              galleries in the UK including the Tate Modern Gallery in London
              and BALTIC in Gateshead. One of the largest art spaces in Europe
              and the biggest arts event of all is the renowned annual Edinburgh
              Festival which is actually several festivals at once - a real
              feast of music, drama, comedy, dance, film, books and other arts.
            </p>
            <h3>Sports</h3>
            <p>
              Sport is popular throughout the UK. Football, cricket and rugby
              are the national games. UK colleges and universities have a range
              of sports teams and clubs. If you prefer to go along and watch,
              look out for football matches (thousands of games kick off at 3.00
              p.m. every Saturday), cricket (at cricket grounds and village
              greens from May to September), international athletics events,
              golf tournaments, the Wimbledon tennis championships, the London
              Marathon, horse - racing (meetings all over the country), Cowes
              sailing week and the Oxford and Cambridge boat race.
            </p>
            <h3>Working - after your studies</h3>
            <p>
              On graduation, there may be opportunities to work with leading UK
              and international corporations in the UK, or to join national and
              international firms in Europe, the United States or, indeed, in
              any part around the globe.
            </p>
            <p>
              At the end of your course, you may be able to stay and work in the
              UK through TWES.
            </p>
            <p>
              To be eligible for this scheme, you will have to do one of the
              following:
            </p>
            <div className="scholarshipList">
              <ul></ul>
            </div>
            <div className="scholarshipList" style={{ margin: "0 1rem" }}>
              <ul>
                <li>
                  Undertake training leading to a recognized professional or
                  specialist qualification (e.g. accountancy).
                </li>
                <li>
                  Follow a graduate training programme leading to international
                  employment.
                </li>
                <li>
                  Join a work experience scheme where you can gain up to twelve
                  months work experience with a UK employer.
                </li>
                <li>Stay/Work in the UK after graduation.</li>

                <li>
                  Under new work permit regulations, international graduates
                  with specific skills (in areas such as electronics,
                  engineering, health and technology) will be able to stay and
                  work in the UK for a limited period.
                </li>
              </ul>
            </div>
            <p>
              You are welcomed to the UK. The UK has been welcoming
              international students for generations. Many institutions arrange
              for you to be collected from the airport and offer guaranteed
              accommodation for your first year. They will provide a dedicated
              international office, international student societies, planned
              social activities, academic support, counselors and advisers.
            </p>
            <h3>Quality Education</h3>
            <p>
              The UK has two distinct education systems: one for England, Wales
              and Northern Ireland, and one for Scotland. Each is compatible
              with the other. The Scottish Parliament has devolved
              responsibility for education in Scotland. Wherever you choose to
              study, you will be able to study relevant, world-class
              qualifications of exceptional quality.
            </p>

            <h3>Teaching Methods</h3>
            <p>
              Programmes are intensive and you should be prepared for a heavy
              workload. Postgraduate students attend classes and lectures, do a
              great deal of independent reading and/or experimental work between
              classes, complete regular written assignments, and write a
              substantial dissertation.
            </p>

            <h3>Leisure & Fun</h3>
            <p>
              Studying in the UK is not only a wonderful opportunity to benefit
              from a world-class education but also a chance to experience the
              country's vibrant culture.
            </p>

            <h3>Sightseeing</h3>
            <p>
              There are many places in the UK you won't want to miss, such as
              the sights of cities like London, Edinburgh, Oxford, Cambridge,
              Bath and York, and the landmarks of Stonehenge, the Giant's
              Causeway and the mountains of Snowdonia. You'll find that almost
              every city and major town in the UK has at least one intriguing
              historic building or feature.
            </p>

            <h3>Outdoor Adventure</h3>
            <p>
              The UK boasts a wide variety of landscapes and an equally wide
              choice of outdoor activities. Miles of rivers and sandy coastlines
              are ideal for rowing, sailing, white water rafting, canoeing and
              fishing. Tennis courts and swimming pools can be found in
              virtually every town. And thousands of acres of unspoiled
              countryside, many of them in national parks offer ideal terrain
              for walking, cycling and horse riding.
            </p>
            <h3>Healthcare in the UK</h3>
            <p>
              The costs of most healthcare in the UK are free to students.
              Students whose academic work is affected by ill health will need
              to supply evidence, in the form of a self-certificate, to their
              department.
            </p>
            <p>
              The following NHS (National Health Service) treatment is free for
              anyone:
            </p>
            <div className="growingDestList " style={{ margin: "0 2rem" }}>
              <ul>
                <li>
                  Emergency treatments, eg: for a serious injury at an accident
                  emergency (A&E) unit of a hospital (but not the follow-up
                  treatment).
                </li>
                <li>Family Planning Services, eg: contraception.</li>
                <li>
                  Treatment for some diseases of the type that you can catch
                  from other people. Compulsory psychiatric treatment.
                </li>
                <li>
                  However, this insurance does not include dental, eye treatment
                  and prescriptions.
                </li>
              </ul>
            </div>*/}
          </div>
          <div style={{ width: "25%" }}>
            <ul className="stickyNavBar">
              <li onClick={whyStudyScroll}> {">"} Why study in UK?</li>
              <li onClick={ukHigherScroll}>
                {">"} The UK Higher Education system explained
              </li>
              <li onClick={reasonScroll}> {">"} Reasons to study here</li>
              <li onClick={whyUkScroll}>
                {">"} Why the UK is the best place to pursue your education?
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
