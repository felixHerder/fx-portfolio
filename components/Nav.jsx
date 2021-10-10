import React, { useEffect, useState, useRef } from "react";
import { Heading, Link, Container, Grid, Text, Box, Flex, ThemeProvider } from "theme-ui";
import { motion } from "framer-motion";
import FxLogo from "../assets/fx_outline.svg";
import ColorSwitcher from "../components/ColorSwitcher";
import styled from "@emotion/styled";

export default function Nav() {
  //framer motion variants
  const nav = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration:0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const link = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 50, opacity: 0 },
  };
  //state
  const [isScrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sectionIds = ["home", "work", "about", "contact"];
    const sectionNodes = sectionIds.map((s) => document.getElementById(s));
    const offsets = sectionNodes.map((s) => s.offsetTop - window.outerHeight/3);

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
  //log active section
  useEffect(() => {
    console.log("section: ", activeSection);
  }, [activeSection]);
  //render
  return (
    <nav
      sx={{
        width: "100%",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        transition: "all .5s ease",
        bg: isScrolled ? "background" : "transparent",
        zIndex: 1,
        boxShadow: isScrolled ? "elevated" : "none",
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={nav}
        sx={{ variant: "layout.wide", py: [2, 3, 3], px:[1,2,2], display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <motion.a href="#home" whileTap={{ scale: 0.9 }} sx={{ variant: "styles.a", ml: 3, lineHeight: 0 }}>
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
        <Grid
          gap={[1, 3, 4]}
          columns={4}
          sx={{ alignItems: "center", justifyItems: "center", textTransform: "lowercase", fontWeight: 500, fontSize: [0, 1, 2] }}
        >
          <motion.a
            href="#work"
            variants={link}
            whileTap={{ scale: 0.9 }}
            sx={{ variant: activeSection === "work" ? "scrollSpy.active" : "scrollSpy.hidden" }}
          >
            Work
          </motion.a>
          <motion.a
            href="#about"
            variants={link}
            whileTap={{ scale: 0.9 }}
            sx={{ variant: activeSection === "about" ? "scrollSpy.active" : "scrollSpy.hidden" }}
          >
            About
          </motion.a>
          <motion.a
            href="#contact"
            variants={link}
            whileTap={{ scale: 0.9 }}
            sx={{ variant: activeSection === "contact" ? "scrollSpy.active" : "scrollSpy.hidden" }}
          >
            Contact
          </motion.a>
          <ColorSwitcher />
        </Grid>
      </motion.div>
    </nav>
  );
}
