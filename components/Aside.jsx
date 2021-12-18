import React from "react";
import { IconButton } from "theme-ui";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

export default function Aside() {
  const MotionIconButton = motion(IconButton, { forwardMotionProps: true });

  const aside = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const icon = {
    visible: { y: 0, opacity: 1, transition: { type: "spring", ease: "easeIn" } },
    hidden: { y: 40, opacity: 0 },
  };
  return (
    <motion.aside
      variants={aside}
      initial="hidden"
      animate="visible"
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex:99,
        height: "100vh",
        width: "auto",
        px:1,
        display: ["none", "flex"],
        flexDirection: "column",
        justifyContent: "center",
        "& button": {
          width: [32, 32, 42],
          height: [28, 28, 36],
          my: 4,
          p: 2,
          bg: "transparent",
          boxShadow: "none",
          transition: "all .2s ease",
          "&:hover": { bg: "sheet", boxShadow: "card", cursor: "pointer" },
          "&:hover svg": { color: "primary" },
        },
        "& a": { width: "100%", height: "100%" },
        "& svg": { color: "muted", width: "100%", height: "100%" },
      }}
    >
      <MotionIconButton variants={icon} whileHover={{ x: 3 }}>
        <motion.a href="https://github.com/felixHerder" target="blank" whileTap={{ scale: 0.85 }}>
          <FaGithub />
        </motion.a>
      </MotionIconButton>
      <MotionIconButton variants={icon} whileHover={{ x: 3 }}>
        <motion.a href="https://www.linkedin.com/in/felix-baciu-427183189/" target="blank" whileTap={{ scale: 0.85 }}>
          <FaLinkedin />
        </motion.a>
      </MotionIconButton>
      <MotionIconButton variants={icon} whileHover={{ x: 3 }}>
        <motion.a href="mailto:felixbaciu@gmail.com" target="blank" whileTap={{ scale: 0.85 }}>
          <RiMailSendFill />
        </motion.a>
      </MotionIconButton>
    </motion.aside>
  );
}
