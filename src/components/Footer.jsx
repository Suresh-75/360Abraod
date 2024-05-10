import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <main className="footer">
      <div className="footerLogo">
        <p>
          360° <span>ABROAD</span>
        </p>
        <span>
          360° Abroad provides expert advice on Study Abroad & Immigration. As
          an experienced consultant, we guide applicants through the entire
          process with ease.
        </span>
      </div>
      <div className="navFooter">
        <p>Nav</p>
        <ul>
          <li
            style={{
              "&:hover": {
                color: "white",
              },
            }}
          >
            <Link
              onClick={scrollToTop}
              style={{ color: "inherit", textDecoration: "none" }}
              to="/"
            >
              <span className="navBtn blu">Home</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={scrollToTop}
              to="/AboutPage"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span className="navBtn blu">About</span>
            </Link>
          </li>{" "}
          <li>
            <span className="navBtn blu">
              <Link
                onClick={scrollToTop}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                to="/Services"
              >
                Services
              </Link>
            </span>
          </li>
          <li>
            <span className="navBtn blu">
              {" "}
              <Link
                onClick={scrollToTop}
                to="/StudyAbroad"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <span className="navBtn blu">Study Abroad</span>
              </Link>
            </span>
          </li>
          <li>
            <span className="navBtn blu">
              <Link
                onClick={scrollToTop}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                to="/ContactUs"
              >
                Contact
              </Link>
            </span>
          </li>{" "}
        </ul>
      </div>
      <div className="location">
        <p>Contact</p>
        <main>
          <span>
            <LocalPhoneIcon
              sx={{ marginRight: "1rem", width: "1.25rem", height: "1.25rem" }}
            />{" "}
            96000 21414
          </span>
          <span>
            <EmailIcon
              sx={{ marginRight: "1rem", width: "1.25rem", height: "1.25rem" }}
            />{" "}
            360abroad@gmail.com
          </span>
          <span>
            <LocationOnIcon
              sx={{ marginRight: "1rem", width: "1.25rem", height: "1.25rem" }}
            />
            # 14 A, Block "A", 3rd Floor, AARAI Complex, 3rd Avenue, Annanagar
            East, Near Rountana, Chennai – 600 102 Tamil Nadu, India
          </span>
        </main>
      </div>
      <div className="findUsFooter">
        <p>Find Us</p>
        <main>
          <a href="https://www.facebook.com/360Abroad/" target="_blank">
            <FacebookIcon
              sx={{ marginRight: "1rem", color: "white" }}
              fontSize="large"
            />
          </a>
          <a href="https://www.instagram.com/360.abroad/" target="_blank">
            <InstagramIcon
              sx={{ marginRight: "1rem", color: "white" }}
              fontSize="large"
            />
          </a>
        </main>
      </div>
    </main>
  );
}
