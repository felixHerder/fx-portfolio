import React, { useEffect, useState } from "react";
import { Heading, Link, Container, Grid, Text, Box, Flex, ThemeProvider } from "theme-ui";
import { alpha } from '@theme-ui/color'
import ColorSwitcher from "../components/ColorSwitcher";

export default function Nav() {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
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
  return (
    <nav
      sx={{
        width: "100%",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        transition: "all .5s",
        bg: isScrolled ? alpha("background",.95) : "transparent",
        zIndex: 1,
      }}
    >
      <Container
        variant="wide"
        sx={{
          py: [2,3,3],
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform:"uppercase",
          fontWeight:700,
          fontSize: [0, 1, 2],
        }}
      >
        <Link href="#home" sx={{ ml: 3 }}>
          Home
        </Link>
        <Grid gap={[1,3,4]} columns={4} sx={{ alignItems: "center", justifyItems: "center", }}>
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <ColorSwitcher />
        </Grid>
      </Container>
    </nav>
  );
}
