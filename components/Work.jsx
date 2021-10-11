import React from "react";
import { Grid, Card, Heading, Container, Box, Flex, Badge } from "theme-ui";
import { FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiCsswizardry, SiHtml5, SiWebpack, SiBabel } from "react-icons/si";

const Skill = ({ Icon, desc, ...rest }) => {
  return (
    <Box {...rest} sx={{ textAlign: "center",lineHeight:1 }}>
      <Icon sx={{ width: [12, 20], height: [12, 20],mb:0 }} />
      <p sx={{ fontSize: 0, my: 0, display: ["none", "block"] }}>{desc}</p>
    </Box>
  );
};
export default function Work() {
  return (
    <section id="work" sx={(theme) => ({ py: 4, background: theme.util.gx(theme.colors.background, theme.colors.sunken) })}>
      <Container variant="wide" sx={{ px: [1, 5], display: "flex", flexDirection: "column" }}>
        <Flex sx={{ justifyContent: "space-between", alignItems:"center",py: 5, color: "placeholder" }}>
          {[
            [SiJavascript, "Javascript"],
            [FaReact, "React"],
            [SiNextdotjs, "Next.js"],
            [SiWebpack, "Webpack"],
            
          ].map(([Icon, desc], idx) => (
            <Skill key={idx} Icon={Icon} desc={desc} />
          ))}
          <Heading
            variant="title"
            sx={(theme) => ({ ...theme.util.gxText(theme.colors.gxc1, theme.colors.gxc2), mb:2})}
          >
            Work
          </Heading>
          {[
            [SiBabel, "Babel"],
            [FaSass, "Sass"],
            [SiCsswizardry, "Css"],
            [SiHtml5, "Html"],
          ].map(([Icon, desc], idx) => (
            <Skill key={idx} Icon={Icon} desc={desc} />
          ))}
        </Flex>

        <Grid columns={[null, 1, 2]} gap={2} sx={{ "& > *": { border: "1px dotted black" } }}>
          <Box sx={{ height: 400 }}>Feudal Swag</Box>
          <Box sx={{ height: 400 }}>Hyperion Misssion Control</Box>
          <Box sx={{ height: 400 }}>Swag Box</Box>
          <Box sx={{ height: 400 }}>Geotours</Box>
          <Box sx={{ height: 400 }}>Pokedex Boxs</Box>
          <Box sx={{ height: 400 }}>JS Sketches</Box>
        </Grid>
      </Container>
    </section>
  );
}
