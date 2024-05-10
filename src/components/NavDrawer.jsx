import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { IconButton } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PublicIcon from "@mui/icons-material/Public";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import { motion, AnimatePresence } from "framer-motion";
export default function NavDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCountryOpen, setCountry] = React.useState(false);
  function toggleDrawer() {
    setIsOpen((open) => !open);
  }

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
    hidden: { opacity: 0, y: 5 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };
  const list = () => (
    <Box
      sx={{ width: "300px", overflowX: "hidden" }}
      role="presentation"
      // onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className="navDrawerLogo">
        <p>
          <span>360°</span> ABROAD
        </p>
      </div>
      <List>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(77, 77, 77)",
            fontSize: "0.8rem",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/"
        >
          <ListItem
            key="home"
            sx={{
              // border: "1px solid black",
              padding: "0.25rem 2rem",
              width: "150%",
            }}
          >
            <ListItemButton>
              <HomeOutlinedIcon
                sx={{
                  marginRight: "1rem",
                  width: "1.85rem",
                  height: "1.85rem",
                  color: "#EE4C7C",
                }}
              />
              <span>Home</span>
            </ListItemButton>
          </ListItem>
        </Link>{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(77, 77, 77)",
            fontSize: "0.8rem",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/AboutPage"
        >
          <ListItem
            key="about"
            sx={{
              // border: "1px solid black",
              padding: "0.25rem 2rem",
              width: "150%",
            }}
          >
            <ListItemButton>
              <HelpOutlineOutlinedIcon
                sx={{
                  marginRight: "1rem",
                  width: "1.85rem",
                  height: "1.85rem",
                  color: "#EE4C7C",
                }}
              />
              <span>About</span>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(77, 77, 77)",
            fontSize: "0.8rem",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/Services"
        >
          <ListItem
            key="services"
            sx={{
              // border: "1px solid black",
              padding: "0.25rem 2rem",
              width: "150%",
            }}
          >
            <ListItemButton>
              <DiscountOutlinedIcon
                sx={{
                  marginRight: "1rem",
                  width: "1.85rem",
                  height: "1.85rem",
                  color: "#EE4C7C",
                }}
              />
              <span>Free Services</span>
            </ListItemButton>
          </ListItem>
        </Link>{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(77, 77, 77)",
            fontSize: "0.8rem",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/StudyAbroad"
        >
          <ListItem
            key="services"
            sx={{
              // border: "1px solid black",
              padding: "0.25rem 2rem",
              width: "150%",
            }}
          >
            <ListItemButton>
              <ConnectingAirportsIcon
                sx={{
                  marginRight: "1rem",
                  width: "1.85rem",
                  height: "1.85rem",
                  color: "#EE4C7C",
                }}
              />
              <span>Study Abroad</span>
            </ListItemButton>
          </ListItem>
        </Link>{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(77, 77, 77)",
            fontSize: "0.8rem",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/FaqPage"
        >
          <ListItem
            key="services"
            sx={{
              // border: "1px solid black",
              padding: "0.25rem 2rem",
              width: "150%",
            }}
          >
            <ListItemButton>
              <QuizOutlinedIcon
                sx={{
                  marginRight: "1rem",
                  width: "1.85rem",
                  height: "1.85rem",
                  color: "#EE4C7C",
                }}
              />
              <span>FAQ</span>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(77, 77, 77)",
            fontSize: "0.8rem",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/ContactUs"
        >
          <ListItem
            key="services"
            sx={{
              // border: "1px solid black",
              padding: "0.25rem 2rem",
              width: "150%",
            }}
          >
            <ListItemButton>
              <QuestionAnswerOutlinedIcon
                sx={{
                  marginRight: "1rem",
                  width: "1.85rem",
                  height: "1.85rem",
                  color: "#EE4C7C",
                }}
              />
              <span>Contact Us</span>
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem
          key="services"
          sx={{
            textDecoration: "none",
            color: "rgb(77, 77, 77)",
            fontSize: "0.8rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            // border: "1px solid black",
            padding: "1rem 2rem",
            paddingTop: "0",
          }}
        >
          <ListItemButton
            onClick={() => setCountry((isCountryOpen) => !isCountryOpen)}
          >
            <PublicIcon
              sx={{
                marginRight: "1rem",
                width: "1.85rem",
                height: "1.85rem",
                color: "#EE4C7C",
              }}
            />
            <span>Country</span>
            <ArrowDropDownOutlinedIcon />
          </ListItemButton>
          <AnimatePresence mode="wait">
            {isCountryOpen && (
              <motion.ul
                variants={container}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="show"
                className="mobileNavCountriesList"
              >
                <NavLink to="/UK">
                  <motion.li variants={listItem}>
                    <FiberSmartRecordIcon
                      sx={{
                        marginRight: "0.5rem",
                        color: "#EE4C7C",
                        width: "15px",
                      }}
                    />
                    United Kingdom
                  </motion.li>
                </NavLink>
                <NavLink to="/Australia">
                  <motion.li variants={listItem}>
                    <FiberSmartRecordIcon
                      sx={{
                        marginRight: "0.5rem",
                        color: "#EE4C7C",
                        width: "15px",
                      }}
                    />{" "}
                    Australia
                  </motion.li>
                </NavLink>
                <NavLink to="/Canada">
                  <motion.li variants={listItem}>
                    <FiberSmartRecordIcon
                      sx={{
                        marginRight: "0.5rem",
                        color: "#EE4C7C",
                        width: "15px",
                      }}
                    />
                    Canada
                  </motion.li>
                </NavLink>
                <NavLink to="/France">
                  <motion.li variants={listItem}>
                    <FiberSmartRecordIcon
                      sx={{
                        marginRight: "0.5rem",
                        color: "#EE4C7C",
                        width: "15px",
                      }}
                    />
                    France
                  </motion.li>
                </NavLink>
                <NavLink to="/NewZeaLand">
                  <motion.li variants={listItem}>
                    <FiberSmartRecordIcon
                      sx={{
                        marginRight: "0.5rem",
                        color: "#EE4C7C",
                        width: "15px",
                      }}
                    />
                    New ZeaLand
                  </motion.li>
                </NavLink>
                <NavLink to="/USA">
                  <motion.li variants={listItem}>
                    <FiberSmartRecordIcon
                      sx={{
                        marginRight: "0.5rem",
                        color: "#EE4C7C",
                        width: "15px",
                      }}
                    />
                    USA
                  </motion.li>
                </NavLink>
                <NavLink to="/Ireland">
                  <motion.li variants={listItem}>
                    <FiberSmartRecordIcon
                      sx={{
                        marginRight: "0.5rem",
                        color: "#EE4C7C",
                        width: "15px",
                      }}
                    />
                    Ireland
                  </motion.li>
                </NavLink>
                <NavLink to="/Italy">
                  <motion.li variants={listItem}>
                    <FiberSmartRecordIcon
                      sx={{
                        marginRight: "0.5rem",
                        color: "#EE4C7C",
                        width: "15px",
                      }}
                    />
                    Italy
                  </motion.li>
                </NavLink>
              </motion.ul>
            )}
          </AnimatePresence>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment key={"right"}>
      <IconButton onClick={toggleDrawer}>
        <DnsOutlinedIcon
          sx={{ width: "2.5rem", height: "2.5rem", fill: "#EE4C7C" }}
        />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {list("right")}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
