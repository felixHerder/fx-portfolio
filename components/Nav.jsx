import React, { useEffect, useState, useRef } from "react";
import { Flex } from "theme-ui";
import { motion } from "framer-motion";
import FxLogo from "../assets/fx_outline.svg";
import ColorSwitcher from "../components/ColorSwitcher";

export default function Nav() {
  //framer motion variants
  const nav = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };
  const link = {
    visible: { x: 0, opacity: 1, transition: { type: "spring", ease: "easeIn" } },
    hidden: { x: -40, opacity: 0 },
  };
  //state
  const [isScrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sectionIds = ["home", "work", "about", "contact"];
    const sectionNodes = sectionIds.map((s) => document.getElementById(s));
    const navHeight = document.getElementById("nav").clientHeight;
    const offsets = sectionNodes.map((s) => s.offsetTop - window.innerHeight / 3);

    const handleScroll = () => {
      //scroll spy functionality, sets active section id
      const sy = window.scrollY;
      const sIndex = offsets.findIndex((s, idx, arr) => {
        if (arr[idx + 1] !== undefined) {
          if (sy >= arr[idx] && sy <= arr[idx + 1]) {
            return true;
          }
        } else {
          if (sy >= arr[idx]) {
            return true;
          }
        }
      });
      sIndex >= 0 ? setActiveSection(sectionIds[sIndex]) : setActiveSection("");
      //nav bar transparency toggle
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Overwrite default smooth scrolling in order to offses nav height
  const handleNavClick = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const targetOffset = document.getElementById(e.currentTarget.hash.slice(1)).offsetTop;
    const navHeight = document.getElementById("nav").clientHeight;
    // console.log(e.currentTarget.hash.slice(1),navHeight);
    window.scrollTo(0, targetOffset - navHeight);
  };

  //log active section
  // useEffect(() => {
  //   console.log("section: ", activeSection);
  // }, [activeSection]);

  //render
  return (
    <nav
      sx={(theme) => ({
        zIndex: 99,
        width: "100%",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        transition: "background .3s ease, box-shadow .3s ease",
        background: isScrolled ? theme.colors.elevated : "transparent",
        zIndex: 1,
        boxShadow: isScrolled ? "none" : "none",
        "&:hover": { boxShadow: isScrolled ? "small" : "none" },
      })}
    >
      <motion.div
        id="nav"
        variants={nav}
        initial="hidden"
        animate="visible"
        sx={{
          variant: "layout.wide",
          py: [2, 3],
          my: isScrolled ? 0 : [3, 4],
          px: [3, 4, 5],
          transition: "margin .2s ease",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <motion.a
          href="#home"
          onClick={handleNavClick}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          sx={{ variant: "styles.a", lineHeight: 0 }}
        >
          <FxLogo
            width="1em"
            height="1em"
            sx={(theme) => ({
              width: [24, 28, 32],
              height: [24, 28, 32],
              path: { fill: activeSection === "home" ? theme.colors.primary : theme.colors.muted, transition: "fill 0.2s ease" },
              "&:hover path": { fill: theme.colors.text },
            })}
          />
        </motion.a>
        <Flex
          sx={{
            alignItems: "center",
            justifyItems: "center",
            textTransform: "lowercase",
            fontSize: [1, 1, 2],
            lineHeight:1,
            "& > *": { ml: [3, 4, 5] },
          }}
        >
          {["work", "about", "contact"].map((sect) => (
            <motion.a
              key={sect}
              href={`#${sect}`}
              onClick={handleNavClick}
              variants={link}
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.85 }}
              sx={{ variant: activeSection === sect ? "scrollSpy.active" : "scrollSpy.hidden", }}
            >
              {sect}
            </motion.a>
          ))}
          <ColorSwitcher sx={{ ml: [3, 4, 5] }} />
        </Flex>
      </motion.div>
    </nav>
  );
}
