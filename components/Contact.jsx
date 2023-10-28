import React from "react";
import { Text, Heading, Container, Box, Flex } from "theme-ui";
import { FaGithub, FaLinkedin, FaMastodon } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import HeadShot from "../public/fb_headshot.jpg";
import Image from "next/image";

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
	    [FaMastodon ,"Mastodon", "https://mastodon.green/@korgoth0"],
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
                  width: [24, null, 36],
                  height: [24, null, 36],
                }}
              />
              <a href={link} rel="me" target="blank" sx={{ variant: "styles.a", fontSize: [1, null, 2], mx: 2, pt: 2 }}>
                {desc}
              </a>
            </Box>
          ))}
          {/* Profile Image */}
          <Image
            src={HeadShot}
            alt="Felix Baciu Photo"
            layout="fixed"
            placeholder="blur"
            width="60px"
            height="60px"
            sx={{ borderRadius: "50%", mx: "auto", }}
            
          />
        <Text
          as="h5"
          sx={(theme) => ({
            mt: 3,
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
        </Flex>
      </Container>
    </section>
  );
}
