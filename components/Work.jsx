import React from "react";
import { Grid, Card, Heading, Container, Box, Flex, Badge } from "theme-ui";
import { FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiCsswizardry, SiHtml5, SiWebpack, SiBabel } from "react-icons/si";
import ProjectCard from "./ProjectCard";
import PholdImg from "../public/geofolds.png";
import GeofoldsImg from "../public/geofolds.png";
import PokedexImg from "../public/pokedex.png";
import SwagboxImg from "../public/swagbox.png";

//skill component
const Skill = ({ Icon, desc, ...rest }) => {
  return (
    <Box {...rest} sx={{ textAlign: "center", lineHeight: 1 }}>
      <Icon sx={{ width: [12, 20], height: [12, 20], mb: 0 }} />
      <p sx={{ fontSize: 0, my: 0, display: ["none", "block"] }}>{desc}</p>
    </Box>
  );
};
export default function Work() {
  return (
    <section id="work" sx={(theme) => ({ bg: "elevated" })}>
      <Container variant="wide" sx={{ px: [3, 5], display: "flex", flexDirection: "column" }}>
        <Flex sx={{ justifyContent: "space-between", alignItems: "end", py: [3, 4, 5, 5, 6], color: "placeholder" }}>
          <Heading variant="ultratitle" sx={(theme) => ({ ...theme.util.gxText(theme.colors.text, theme.colors.secondary), lineHeight: 0.8 })}>
            Work
          </Heading>
          {[
            [SiJavascript, "Javascript"],
            [FaReact, "React"],
            [SiNextdotjs, "Next.js"],
            [SiWebpack, "Webpack"],
            [SiBabel, "Babel"],
            [FaSass, "Sass"],
            [SiCsswizardry, "Css"],
            [SiHtml5, "Html"],
          ].map(([Icon, desc], idx) => (
            <Box key={idx} sx={{ lineHeight: 0 }}>
              <Icon title={desc} sx={{ width: [8, 16, 20], height: [8, 16, 20], mb: 0 }} />
            </Box>
          ))}
        </Flex>

        <Grid columns={[null, null, 1, 2]} gap={5} sx={{ my: 3,mb:5 }}>
          {[
            {
              title: "Feudal Swag",
              badges: ["javascript", "react", "theme-ui", "styled-components", "redux", "firebase"],
              isrc: PholdImg,
              git: "https://github.com/felixHerder/geofolds",
              web: "https://geofolds.felixherder.space",
            },
            { title: "Hyperion Mission Control", badges: ["typescript", "react", "material-ui", "express", "webpack"], isrc: PholdImg },
            {
              title: "Swag Box",
              badges: ["javascript", "react", "tachyons", "express", "postgresql"],
              isrc: SwagboxImg,
              git: "https://github.com/felixHerder/swagbox-app",
              web: "https://swagbox.felixherder.space",
            },
            {
              title: "Geofolds Landing",
              badges: ["sass", "css", "html"],
              isrc: GeofoldsImg,
              git: "https://github.com/felixHerder/geofolds",
              web: "https://geofolds.felixherder.space",
            },
            {
              title: "Pokedex Cards",
              badges: ["javascript", "react", "css", "pokeapi", "cra"],
              isrc: PokedexImg,
              git: "https://github.com/felixHerder/pokedex-cards",
              web: "https://pokedex-cards.felixherder.space",
            },
            { title: "JS Sketches", badges: [], isrc: PholdImg },
          ].map((proj, idx) => (
            <ProjectCard proj={proj} key={idx} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
