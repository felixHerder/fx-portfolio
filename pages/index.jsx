import React from "react";
import Head from "next/head";
import theme from "../themeui/theme";
import { Heading, Link, Container, Grid, Text, Box, Flex, ThemeProvider } from "theme-ui";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Aside from "../components/Aside"

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
          <section id="work" sx={{ height: "800px" }}>
            Work
          </section>
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
