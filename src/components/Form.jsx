import { Alert, Button, Snackbar, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
// import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Fade from "@mui/material/Fade";
// import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CancelIcon from "@mui/icons-material/Cancel";
export default function FormComponent({ setdialogOpen }) {
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

  return (
    <>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contactFormContainer"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            className="contactFromHeaderP"
            style={{ fontWeight: "600", fontSize: "2rem" }}
          >
            Get a Free consultation
          </p>
          <button
            onClick={() => setdialogOpen(false)}
            style={{ border: "none", background: "white" }}
          >
            <CancelIcon />
          </button>
        </div>
        <motion.div>
          <TextField
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            color="error"
            sx={{ margin: "0.5rem 0", width: "100%", color: "white" }}
            id="standard-basic"
            label="Name"
            name="username"
            variant="standard"
          />
        </motion.div>
        <motion.div>
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
        <motion.main>
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
        <motion.div>
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
        <motion.div>
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
        <motion.div>
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
        <motion.div style={{ width: "100%" }}>
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
            {isSending ? <CircularProgress size={30} thickness={5} /> : "Send"}
          </Button>
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
    </>
  );
}
