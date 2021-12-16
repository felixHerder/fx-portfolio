import React from "react";
import { Grid, Card, Heading, Container, Box, Flex, Badge } from "theme-ui";
import { FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiCsswizardry, SiHtml5, SiWebpack, SiBabel } from "react-icons/si";
import ProjectCard from "./ProjectCard";
import GeofoldsImg from "../public/projects/geofolds.png";
import PokedexImg from "../public/projects/pokedex.png";
import SwagboxImg from "../public/projects/swagbox.png";
import JssketchesImg from "../public/projects/jssketches.png";
import HyperionImg from "../public/projects/hyperion.png";
import FeudalSwagImg from "../public/projects/feudalswag.png";

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
        <Flex sx={{ justifyContent: "space-between", alignItems: "end", py: [4, 4, 5, 5, 5], color: "placeholder" }}>
          <Heading
            variant="ultratitle"
            sx={(theme) => ({ ...theme.util.gxText(theme.colors.text, theme.colors.secondary), lineHeight: 0.8 })}
          >
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

        <Grid columns={[null, null, 1, 2]} gap={5} sx={{ my: 2, mb: 5, alignItems:"flex-start" }}>
          {[
            {
              title: "Feudal Swag",
              badges: ["javascript", "react", "chakra-ui", "redux", "cra", "firebase"],
              isrc: FeudalSwagImg,
              git: "https://github.com/felixHerder/feudal-swag",
              web: "https://feudalswag.felixherder.space/shop",
              description:"E-commerce app for a fictional medieval clothing store built using firebase populated with mockdata. \n Frontend is react with chakra-ui build with cra. Backend is firebase for authorization with email or google and firestore db for storing item and user data. \n Redux and react-router is used heavily with url search params for preserving navigation history and application state on refresh/reload. \n Firestore db queries are cached in memory as much as possible for a smoother ux and to decrease db load. Frontend is hosted on netlify."
            },
            {
              title: "Hyperion Mission Control",
              badges: ["typescript", "react", "material-ui", "webpack", "express", "mongodb atlas", "aws ec2"],
              isrc: HyperionImg,
              git: "https://github.com/felixHerder/hyperion-mc",
              web: "https://hyperion.felixherder.space",
              description: "Admin Control Panel for a rocket launch scheduling system using data from api.spacexdata.com. \n Frontend is react with typescript and material-ui using a custom made webpack and babel config, complete with dev and prod ready npm scripts. \n Backend is node with express using mongoose to connect to a atlas mongodb server. The frontend static files are also served from this express server.  \n Hosted on an aws ec2 private server instance using a nginx reverse proxy."
            },
            {
              title: "Swag Box",
              badges: ["javascript", "react", "tachyons", "cra", "express", "postgresql", "clarifai"],
              isrc: SwagboxImg,
              git: "https://github.com/felixHerder/swagbox-app",
              web: "https://swagbox.felixherder.space",
              description:"Dashboard for the Clarifai image clothing clasifier. Please be patient while the heroku backend spins up. \n Frontend is react built with create-react-app and tachyons. Backend is build with node and express with postgresql for user auth and redis for jwt authentication \n The submited image url is sent to the express backend which sends a post request to the Clarifai api. The frontend is hosted on github pages and the backend on heroku."
            },
            {
              title: "Pokedex Cards",
              badges: ["javascript", "react", "css", "cra", "pokeapi"],
              isrc: PokedexImg,
              git: "https://github.com/felixHerder/pokedex-cards",
              web: "https://pokedex-cards.felixherder.space",
              description:
                "Single page app built with React using data from pokeapi.co and vanilla css. \n Each card is generated dynamicaly from json data supplied by the pokeapi rest server. Card images are composites of svg sprites from pokeapi and pseudorandom background images. \n Fetched data is cached in localstorage for subsequent page loads in order to reduce load on the pokeapi server. Also has an option for loading diferent generations of cards and a simple search. Build and developed with create-react-app and hosted on github pages",
            },
            {
              title: "Geofolds Landing",
              badges: ["sass", "css"],
              isrc: GeofoldsImg,
              git: "https://github.com/felixHerder/geofolds",
              web: "https://geofolds.felixherder.space",
              description:
                "A landing page for a fictional company build using Sass with and emphasis on modular and reusable styles through variables, mixins and functions. No ui library or utility used. \n Css built from scss using Node and npm with scripts configured for development and production using sass and postcss with autoprefixer.",
            },
            {
              title: "Vanilla JS Sketches",
              badges: ["javascript", "css"],
              isrc: JssketchesImg,
              git: "https://github.com/felixHerder/jssketches",
              web: "https://jssketches.felixherder.space",
              description:
                "Various projects done with vanilla javascript and css. \n In order to get a better grasp of the fundamentals of frontend web development I've build these small experiments without the help of frameworks or ui libraries or utilities.",
            },
          ].map((proj, idx) => (
            <ProjectCard proj={proj} key={idx} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
