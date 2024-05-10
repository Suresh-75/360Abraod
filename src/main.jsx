import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";
import FaqPage from "./FaqPage.jsx";
import StudyAbroadPage from "./StudyAbroadPage.jsx";
import ContactUs from "./ContactUs.jsx";
import UK from "./components/UK.jsx";
import Australia from "./components/Australia.jsx";
import Canada from "./components/Canada.jsx";
import France from "./components/France.jsx";
import Ireland from "./components/ireland.jsx";
import USA from "./components/Usa.jsx";
import Italy from "./components/italy.jsx";
import NewZeaLand from "./components/NewZeaLand.jsx";
import Form from "./components/Form.jsx";

import { motion, AnimatePresence } from "framer-motion";
import Services from "./Services.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

function App() {
  const location = useLocation();
  const [dialogOpen, setdialogOpen] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setdialogOpen(true);
    }, 26000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <AnimatePresence>
        {dialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="popUpFormContainer"
          >
            <Form setdialogOpen={setdialogOpen} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/AboutPage" element={<AboutUs />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/FaqPage" element={<FaqPage />}></Route>
          <Route path="/StudyAbroad" element={<StudyAbroadPage />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/UK" element={<UK />}></Route>
          <Route path="/Australia" element={<Australia />}></Route>
          <Route path="/Canada" element={<Canada />}></Route>
          <Route path="/France" element={<France />}></Route>
          <Route path="/NewZeaLand" element={<NewZeaLand />}></Route>
          <Route path="/Ireland" element={<Ireland />}></Route>
          <Route path="/USA" element={<USA />}></Route>
          <Route path="/Italy" element={<Italy />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
