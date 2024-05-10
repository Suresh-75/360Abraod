import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Alert, Button, CircularProgress, Snackbar } from "@mui/material";
import "./styles/ContactUs.css";
import Fade from "@mui/material/Fade";
import whatsAppImg from "./assets/whatsapp.png";
import { useRef, useState } from "react";
export default function ContactUs() {
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
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm("service_pvov5zw", "template_sfzvgqb", form.current, {
        publicKey: "k_HYhHakJYm7opIk2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setIsSent(true);
    setIsSending(false);
    setName("");
    setEmail("");
    setNumber("");
    setLocation("");
    setMsg("");
  };
  const handleClose = () => {
    setIsSent(false);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [PreferredCountry, setPreferredCountry] = useState("");
  const [PreferredCourse, setPreferredCourse] = useState("");
  const [location, setLocation] = useState("");
  const [msg, setMsg] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const form = useRef();
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
      <div className="contactUsContainer">
        <div className="locationsContainer">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=18cUrSQJQnAsqa6nXxLbM7QMTPQiyV3Y&ehbc=2E312F&noprof=1"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <motion.form
          variants={container}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          ref={form}
          onSubmit={sendEmail}
          className="contactFormContainer"
        >
          <p>Let's Talk</p>
          <motion.div variants={listItem}>
            {" "}
            <TextField
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              color="error"
              sx={{ margin: "0.5rem 0", width: "100%" }}
              id="standard-basic"
              label="Name"
              name="username"
              variant="standard"
            />
          </motion.div>
          <motion.div variants={listItem}>
            <TextField
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              color="error"
              sx={{ margin: "0.5rem 0", width: "100%" }}
              id="standard-basic"
              label="Email"
              name="useremail"
              variant="standard"
            />
          </motion.div>
          <motion.main variants={listItem}>
            <TextField
              value={number}
              required
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              color="error"
              sx={{ margin: "0.5rem 0", width: "100%", marginRight: "0.5rem" }}
              id="standard-basic"
              label="Mobile Number"
              name="mobileNumber"
              variant="standard"
            />
            <TextField
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              color="error"
              sx={{ margin: "0.5rem 0", width: "100%", marginLeft: "0.5rem" }}
              id="standard-basic"
              label="Location"
              name="location"
              variant="standard"
            />
          </motion.main>
          <motion.div variants={listItem}>
            <TextField
              value={PreferredCountry}
              required
              onChange={(e) => {
                setPreferredCountry(e.target.value);
              }}
              color="error"
              sx={{ margin: "0.5rem 0", width: "100%" }}
              id="standard-basic"
              label="Preferred Country"
              name="PreferredCountry"
              variant="standard"
            />
          </motion.div>
          <motion.div variants={listItem}>
            <TextField
              value={PreferredCourse}
              required
              onChange={(e) => {
                setPreferredCourse(e.target.value);
              }}
              color="error"
              sx={{ margin: "0.5rem 0", width: "100%" }}
              id="standard-basic"
              label="Preferred Course"
              name="PreferredCourse"
              variant="standard"
            />
          </motion.div>
          <motion.div variants={listItem}>
            <textarea
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              label="Message"
              required
              name="message"
              placeholder="Message here..."
              size="large"
              style={{
                width: "100%",
                height: "10rem",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                color: "rgb(76, 82, 83)",
                padding: ".5rem",
              }}
            ></textarea>
          </motion.div>
          <motion.div variants={listItem} style={{ width: "100%" }}>
            <Button
              type="submit"
              sx={{
                padding: "0.5rem",
                fontSize: "1rem",
                fontWeight: "500",
                width: "100%",
                bgcolor: "#EE4C7C",
                "&:hover": {
                  bgcolor: "#EE4C7C",
                },
              }}
              variant="contained"
            >
              {isSending ? (
                <CircularProgress size={30} thickness={5} />
              ) : (
                "Send"
              )}
            </Button>{" "}
          </motion.div>
        </motion.form>
        <Snackbar
          TransitionComponent={Fade}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isSent}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success" variant="filled">
            Message Sent , We will catch you back soon .
          </Alert>
        </Snackbar>
      </div>
      <Footer />
    </>
  );
}
