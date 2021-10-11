import React from "react";
import Head from "next/head";
import theme from "../themeui/theme";
import { ThemeProvider } from "theme-ui";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Aside from "../components/Aside"
import Work from "../components/Work"

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title> Felix | Frontend Developer</title>
      </Head>
      <div sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Nav />
        <Aside />
        <main sx={{ width: "100%" }}>
          <Home />
          <Work />
          <section id="about" sx={{ height: "800px" }}>
            About
          </section>
          <section id="contact" sx={{ height: "800px" }}>
            Contact
          </section>
        </main>
        <footer sx={{ width: "100%" }}>Footer</footer>
      </div>
    </ThemeProvider>
  );
}
