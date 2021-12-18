import React from "react";
import Head from "next/head";
import theme from "../themeui/theme";
import { ThemeProvider, Text } from "theme-ui";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Aside from "../components/Aside";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import { FaCentercode } from "react-icons/fa";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title> Felix | Frontend Web Developer</title>
      </Head>
      <div sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Nav />
        <Aside />
        <main sx={{ width: "100%" }}>
          <Home />
          <Work />
          <About />
          <Contact />
        </main>
        <footer
          sx={(theme) => ({
            width: "100%",
            textAlign: "center",
            lineHeight: 1.3,
            fontSize: "14px",
            color: "textTer",
            fontWeight: "light",
            bg: "elevated",
          })}
        >
          <p sx={{ my: 2 }}>Felix Baciu - 2022</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
