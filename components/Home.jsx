import { Text, Box, Button } from "theme-ui";
import { motion } from "framer-motion";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Home() {
  const handleNavClick = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const targetOffset = document.getElementById(e.currentTarget.hash.slice(1)).offsetTop;
    const navHeight = document.getElementById("nav").clientHeight;
    // console.log(e.target.hash.slice(1), navHeight);
    window.scrollTo(0, targetOffset - navHeight);
  };
  const ButtonMotion = motion(Button, { forwardMotionProps: true });
  const BoxMotion = motion(Box, { forwardMotionProps: true });
  return (
    <section
      id="home"
      sx={(theme) => ({
        width: "100%",
        minHeight: "100vh",
        px: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        alignItems: "center",
        background: theme.util.gx(theme.colors.gx1, theme.colors.gx2),
      })}
    >
      <Box sx={{ mt: -5 }}>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          sx={{ variant: "text.ultratitle", fontSize: [5, 6, 7], my: 1 }}
        >
          Hi, I&apos;m{" "}
          <Text as="span" color="primary" sx={(theme) => ({ ...theme.util.gxText(theme.colors.gxc1, theme.colors.gxc2) })}>
            Felix
          </Text>
        </motion.h1>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          sx={{
            variant: "text.title",
            fontSize: [3, 4, 5],
            color: "secondary",
            fontWeight: "100",
            fontFamily: "body",
            letterSpacing: "-0.062em",
            my: 0,
          }}
        >
          a frontend web developer
        </motion.h2>
        <Box sx={{ position: "relative", width: "100%" }}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            sx={(theme) => ({
              position: "absolute",
              width: "100%",
              variant: "text.title",
              textAlign: "right",
              fontSize: [1, 2],
              color: "secondary",
              fontWeight: "400",
              fontFamily: "body",
              letterSpacing: "-0.06em",
              mt: 1,
              ...theme.util.gxText(theme.colors.secondary, theme.colors.placeholder),
            })}
          >
            based in Iași
          </motion.h3>
          <BoxMotion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            sx={{ position: "absolute", top: "5vh", left: "50%", transform: "translateX(-50%)" }}
          >
            <ButtonMotion
              as="a"
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavClick}
              variant="outline"
              sx={(theme) => ({
                width: "max-content",
                color: "secondary",
                borderColor: "secondary",
                textDecoration: "none",
                fontSize: 0,
                fontWeight: 900,
                mt: 1,
                pt: 2,
                pb: 1,
                px: 3,
                lineHeight: 2,
                textTransform: "uppercase",
                letterSpacing: 0,
              })}
            >
              Checkout my works
            </ButtonMotion>
          </BoxMotion>
        </Box>
      </Box>
      <BoxMotion
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1.1 } }}
        sx={{ position: "absolute", bottom: 0 }}
      >
        <ButtonMotion
          as="a"
          href="#work"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNavClick}
          variant="primary"
          sx={(theme) => ({
            width: "max-content",
            color: "secondary",
            bg: "transparent",
            mb: 4,
            pt: 2,
            pb: 1,
          })}
        >
          <BsChevronDown sx={{ width: "24px", height: "24px" }} />
        </ButtonMotion>
      </BoxMotion>
    </section>
  );
}
