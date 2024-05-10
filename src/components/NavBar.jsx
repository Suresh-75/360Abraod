import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavDrawer from "./NavDrawer";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className="mainNavBar">
        <div className="navLogoContainer">
          <p className="navLogo">
            <span className="navlogo360">360°</span>
            ABROAD
          </p>
        </div>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/AboutPage">
            <li>About Us</li>
          </NavLink>{" "}
          <NavLink to="/Services">
            <li>Free Services</li>
          </NavLink>
          <NavLink to="/StudyAbroad">
            <li>Study Abroad</li>
          </NavLink>
          <li
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Countries <ArrowDropDownIcon />
          </li>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ padding: "0.5rem 1rem", margin: "1rem 0" }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <NavLink to="/UK">
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: "550",
                  transition: "0.15s",
                  margin: "0 0.5rem",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: "#EE4C7C ",
                    color: "white",
                  },
                  padding: "0.5rem 1rem",
                }}
              >
                United Kingdom
              </MenuItem>
            </NavLink>
            <NavLink to="/Australia">
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: "550",
                  transition: "0.15s",
                  margin: "0 0.5rem",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: "#EE4C7C ",
                    color: "white",
                  },
                  padding: "0.5rem 1rem",
                }}
              >
                Australia
              </MenuItem>
            </NavLink>
            <NavLink to="/Ireland">
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: "550",
                  transition: "0.15s",
                  margin: "0 0.5rem",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: "#EE4C7C ",
                    color: "white",
                  },
                  padding: "0.5rem 1rem",
                }}
              >
                Ireland
              </MenuItem>
            </NavLink>
            <NavLink to="/Canada">
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: "550",
                  transition: "0.15s",
                  margin: "0 0.5rem",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: "#EE4C7C ",
                    color: "white",
                  },
                  padding: "0.5rem 1rem",
                }}
              >
                Canada
              </MenuItem>
            </NavLink>
            <NavLink to="/Italy">
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: "550",
                  transition: "0.15s",
                  margin: "0 0.5rem",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: "#EE4C7C ",
                    color: "white",
                  },
                  padding: "0.5rem 1rem",
                }}
              >
                Italy
              </MenuItem>
            </NavLink>
            <NavLink to="/USA">
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: "550",
                  transition: "0.15s",
                  margin: "0 0.5rem",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: "#EE4C7C ",
                    color: "white",
                  },
                  padding: "0.5rem 1rem",
                }}
              >
                USA
              </MenuItem>
            </NavLink>
            <NavLink to="/France">
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: "550",
                  transition: "0.15s",
                  margin: "0 0.5rem",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: "#EE4C7C ",
                    color: "white",
                  },
                  padding: "0.5rem 1rem",
                }}
              >
                France
              </MenuItem>
            </NavLink>
            <NavLink to="/NewZeaLand">
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: "550",
                  transition: "0.15s",
                  margin: "0 0.5rem",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: "#EE4C7C ",
                    color: "white",
                  },
                  padding: "0.5rem 1rem",
                }}
              >
                New ZeaLand
              </MenuItem>
            </NavLink>
          </Menu>
          <NavLink to="/FaqPage">
            <li>FAQ</li>
          </NavLink>
          <NavLink to="/ContactUs">
            <li className="btn">Contact Us</li>
          </NavLink>
        </ul>
        <main className="mobileNav">
          <NavDrawer />
        </main>
      </nav>
    </>
  );
}
