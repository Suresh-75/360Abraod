import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "../styles/canada.css";
import CanadaImg from "../assets/james-thomas-UG-m_ngzMFM-unsplash.jpg";
import McMaster from "../assets/McMaster.png";
import uniOfWaterloo from "../assets/uniOfWaterloo.png";
import University_of_Toronto from "../assets/University_of_Toronto-Logo.wine.png";
import WesternUni from "../assets/westernUni.png";
import McGill from "../assets/McGill.png";
import whatsAppImg from "../assets/whatsapp.png";
import { Banner } from "./Banner";
const images = [
  McMaster,
  uniOfWaterloo,
  University_of_Toronto,
  WesternUni,
  McGill,
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));
export default function Canada() {
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
          <motion.img src={CanadaImg} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="countryNameContainer"
          >
            <p>CANADA</p>
          </motion.div>
        </div>
        <Banner classN="canada" images={images} speed={35000} />
        <div className="countryPageContext">
          <div style={{ width: "75%", marginRight: "1.5rem" }}>
            <h2 style={{ fontSize: "2rem" }}>Canada</h2>
            <ul className="canadaUL">
              <li>
                <span>High Quality Education:</span>
                Canada spends a lot on education (compared to OECD and G8
                averages) resulting in well-regarded degrees globally
                (recognized by businesses, governments, and academia).
              </li>
              <li>
                <span>Excellent Living Standards:</span>
                Canada is consistently ranked among the top places to live in
                the world, offering a high life expectancy due to its universal
                healthcare system, low crime rates, and easy access to
                necessities.
              </li>
              <li>
                <span>Multicultural and Welcoming Society:</span>
                Canada has a long history of immigration and actively encourages
                multiculturalism. This fosters a respectful and inclusive
                environment where students can learn from diverse perspectives.
              </li>
              <li>
                <span> Breathtaking Natural Beauty: </span>
                From the Pacific coastlines to the majestic Rockies and vast
                prairies, Canada offers a stunning natural environment for
                students to explore and enjoy. Each region boasts unique
                landscapes, from the maple forests of the Great Lakes to the
                rugged coastlines of the Atlantic provinces.
              </li>
              <li>
                <span>Potential for Immigration:</span>Canada has a clear
                pathway to permanent residency for international students who
                graduate from Canadian institutions, making it an attractive
                option for those seeking to build a future in the country.
              </li>
            </ul>
            {/* <p>
              When it comes to the sheer quality of education, Canada
              undoubtedly figures among the top in the world. The country pays
              remarkable importance to the standard of education it offers.
              Canada spends more on education (as a percentage of GDP) compared
              to the OECD average, and is the second highest among G-8
              countries. It is then hardly surprising that Canadian students
              invariably come out with flying colors. A Canadian degree, diploma
              or certificate is well regarded in business, government and
              academic circles around the globe.
            </p>
            <p>
              Canada is most definitely one of the finest places, and offers a
              conducive environment for a good living. For nine consecutive
              years (1994-2002), a United Nations survey found Canada to be
              among the top three places in the world to live. Canada earned
              particularly high marks for its access to education, high life
              expectancy (due to universal health care system); and low crime
              and violence rates.
            </p>
            <p>
              Canada has traditionally been a country of immigrants and has a
              policy of encouraging multicultural diversity. In this vibrant
              setting, different perspectives are respected and learning
              together is encouraged.
            </p>
            <p>
              The tantalizing natural beauty of Canada has also been one of the
              reasons for enticing people from all over the world. Students who
              come to Canada lose themselves in one of the most exhilarating
              natural environments on earth. Canada is also a country of diverse
              geography, and there is much to experience in its great outdoors.
              From the lush coastline of British Columbia, the majestic Rocky
              Mountains of Alberta, the big skies of the prairies, to the 'maple
              sugar country' in the Great Lakes and St. Lawrence and the rugged
              hills and picturesque coastline of the Atlantic provinces.
            </p> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
