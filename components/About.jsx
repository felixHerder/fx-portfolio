import React from "react";
import { Grid, Text, Heading, Container, Box, Flex } from "theme-ui";
import { FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiCsswizardry, SiHtml5, SiWebpack, SiTypescript, SiNodedotjs } from "react-icons/si";


export default function About() {
  return (
    <section id="about" sx={(theme) => ({ bg: "background" })}>
      <Container variant="wide" sx={{ px: [3, 5], py: [3, 3, 3, 4], display: "flex", flexDirection: "column" }}>
        {/* Title */}
        <Flex
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: ["column", "row"],
            pt: [4, null, null, null, 5],
            pb: [3, null, null, null, 4],
            color: "placeholder",
          }}
        >
          {/*About Section title */}
          <Heading
            variant="ultratitle"
            sx={(theme) => ({
              ...theme.util.gxText(theme.colors.text, theme.colors.secondary),
              fontSize: [5, 5, 5, 6, 7],
            })}
          >
            About
          </Heading>
          <Box>
            {/* About subtitle */}
            <Text
              as="h3"
              color="primary"
              variant="title"
              sx={(theme) => ({
                fontSize: [4, 4, 4, 5, 6],
                ml: 3,
                ...theme.util.gxText(theme.colors.gxc1, theme.colors.gxc2),
              })}
            >
              Felix Baciu
            </Text>
          </Box>
        </Flex>
        {/* About story */}
        <Grid columns={[null, null, 1, 2]} gap={[3, 3, 3, 4, 5]} sx={{ mb: [3, 3, 4] }}>
          <Box sx={{ px: 3, color: "textAlt", fontSize: [1, 1, 2, 2, 2] }}>
            <p>
              I am a frontend web developer with a strong background in 3d graphics and motion graphic design having worked a
              number of years in the architectural visualization industry.
            </p>
            <p>
              During this time I always found myself writing a lot of scripts in whatever api was available in order to automate
              and lessen my workload. A process I always enjoyed and looked forward to.
            </p>
            <p>
              Frontend development seemed the logical step to take for someone with my background. Switching careers has not been
              an easy choice but I am a big believer in self-education and have spent hundreds of hours completing a multitude of
              online courses.
            </p>
          </Box>
          {/* Skills */}
          <Flex sx={{ flexDirection: "column", textAlign: "center" }}>
            <Text
              as="h4"
              sx={{
                mt: 2,
                py: 2,
                color: "textAlt",
                letterSpacing: "title",
                fontFamily: "body",
                fontWeight: "light",
                lineHeight: 1,
                fontSize: [2, 2, 3],
              }}
            >
              Skill set:
            </Text>
            <Grid columns={[4]} gap={[1, 2, 3]} sx={{ flexGrow: 1, mt: 2, alignItems: "center" }}>
              {[
                [SiJavascript, "Javascript"],
                [SiTypescript, "Typescript"],
                [FaReact, "React"],
                [SiWebpack, "Webpack"],
                [SiNodedotjs, "Node"],
                [FaSass, "Sass"],
                [SiCsswizardry, "CSS"],
                [SiHtml5, "Html"],
              ].map(([Icon, desc], idx) => (
                <Box key={idx} sx={{ py: 3, color: "textAlt" }}>
                  <Icon
                    title={desc}
                    sx={{
                      display: "block",
                      color: "textAlt",
                      margin: "0 auto",
                      width: [24, 32, 48, 48, 54],
                      height: [24, 32, 48, 48, 54],
                      mb: 0,
                    }}
                  />
                  <Text sx={{ display: "block", pt: 2, fontSize: ["14px", 1, 2], textAlign: "center" }}>{desc}</Text>
                </Box>
              ))}
            </Grid>
          </Flex>
        </Grid>
      </Container>
    </section>
  );
}
