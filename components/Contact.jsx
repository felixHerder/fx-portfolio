import React from "react";
import { Text, Heading, Container, Box, Flex } from "theme-ui";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contact" sx={(theme) => ({ bg: "sunken" })}>
      <Container variant="wide" sx={{ px: [3, 5], py: [3, 3, 3, 4], display: "flex", flexDirection: "column" }}>
        {/* Title */}
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            pt: [4, null, null, null, 5],
            pb: [2, null, null, null, 2],
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
            Contact
          </Heading>
        </Flex>
        <p sx={{ color: "textAlt", fontSize: [1, null, 2], ml: 2, mb: 4, fontWeight: "light", textAlign: "center" }}>
          Get in touch using any of the following:
        </p>
        <Flex
          sx={{
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            "& #linkContainer:not(:last-child)": { mb: 4 },
          }}
        >
          {[
            [FaLinkedin, "Linkedin", "https://www.linkedin.com/in/felixbaciu"],
            [FaGithub, "Github", "https://github.com/felixHerder"],
            [RiMailSendFill, "felixbaciu@gmail.com", "mailto:felixbaciu@gmail.com"],
          ].map(([Icon, desc, link], idx) => (
            <Box
              id="linkContainer"
              key={idx}
              sx={{
                color: "textAlt",
                display: "flex",
                alignItems: "center",
                "&:hover *,&:active *": { color: "primary" },
              }}
            >
              <Icon
                title={desc}
                sx={{
                  color: "textAlt",
                  width: [36, null, 48],
                  height: [36, null, 48],
                }}
              />
              <a
                href={link}
                target="blank"
                sx={{ variant: "styles.a", fontSize: [2, null, 3], mx: 3, pt: 2 }}
              >
                {desc}
              </a>
            </Box>
          ))}
        </Flex>
        <Text
          as="h5"
          sx={(theme) => ({
            mt: 5,
            mb: 4,
            textAlign: "center",
            fontWeight: "light",
            fontFamily: "heading",
            fontSize: [3, null, 4],
            lineHeight: 1.5,
            ...theme.util.gxText(theme.colors.gxc1, theme.colors.gxc2),
          })}
        >
          Thanks for visiting!
        </Text>
      </Container>
    </section>
  );
}
