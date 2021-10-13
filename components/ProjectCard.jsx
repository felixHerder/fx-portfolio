import React from "react";
import Image from "next/image";
import { Grid, Card, Heading, Button, Box, Flex, Badge, Link } from "theme-ui";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { alpha } from "@theme-ui/color";
export default function ProjectCard({ proj, ...rest }) {
  //framer motion variants
  const card = {
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0 },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const badgeBg = {
    visible: { opacity: 1, transition: { duration: 0.2, type: "spring", ease: "easeIn" }, transition: { staggerChildren: 0.05, delayChildren: 0 } },
    hidden: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };
  const badgeMotion = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.2, type: "spring", ease: "easeIn" } },
    hidden: { y: -10, opacity: 0 },
  };
  const buttonMotion = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const CardMotion = motion(Card, { forwardMotionProps: true });
  const BadgeMotion = motion(Badge, { forwardMotionProps: true });
  const ButtonMotion = motion(Button, { forwardMotionProps: true });
  const FlexMotion = motion(Flex, { forwardMotionProps: true });
  return (
    <CardMotion
      tabIndex="-1"
      variants={card}
      whileHover="visible"
      whileFocus="visible"
      initial="hidden"
      sx={{
        position: "relative",
        p: [0, 0],
        bg: "elevated",
        border: "1px solid",
        borderColor: "transparent",
        transition: "border-color .2s ease",
        "&:hover,&:focus": { borderColor: alpha("primary", 0.5) },
        "&:hover #proj-title,&:focus #proj-title": { color: "primary" },
        "&:hover #img-box,&:focus #img-box": { transform:"scale(1.05)" },
      }}
    >
      <Box  sx={{ height: [200, 250, 300, 250, 320], width: "100%", overflow: "hidden", position: "absolute", }}>
        <Image  id="img-box" src={proj.isrc} alt={proj.title} layout="responsive" placeholder="blur" sx={{transform:"scale(1)",transition:"transform .5s ease"}}/>
      </Box>
      <Box
        sx={(theme) => ({
          height: [200, 250, 300, 250, 320],
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "end",
          justifyContent: "start",
          background: theme.util.gx2(theme.colors.gxt1, theme.colors.gxt2),
        })}
      >
        <FlexMotion
          variants={badgeBg}
          sx={(theme) => ({
            position: "absolute",
            top: 0,
            width: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
            py: 4,
            px: 5,
            background: theme.util.gx2(theme.colors.gxt2, theme.colors.gxt1),
          })}
        >
          {proj.badges.map((badge, idx) => (
            <BadgeMotion
              variants={badgeMotion}
              key={idx}
              sx={theme=>({
                lineHeight: 2,
                fontSize: 1,
                fontWeight: 200,
                color: "primary",
                mx: 3,
                my: 3,
                pt: 2,
                pb: 1,
                boxShadow: "card",
                background: theme.util.gx(theme.colors.gx1, theme.colors.gx2),
              })}
            >
              <span sx={{}}> {badge}</span>
            </BadgeMotion>
          ))}
        </FlexMotion>
      </Box>
      <Heading
        id="proj-title"
        as="h3"
        variant="subtitle"
        sx={{
          color: "textAlt",
          px: 4,
          mt: -4,
          position: "relative",
          fontWeight: 700,
          fontSize: [2, 3, 4],
          transition: "color .2s ease",
        }}
      >
        {proj.title}
      </Heading>
      <Box sx={{ p: 4, pt: 2 }}>
        <p sx={{ mb: 4, color: "textAlt" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo voluptate aliquam dolorum possimus eveniet.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga consequuntur magnam pariatur ullam rem minus.
        </p>
        <Flex sx={{ justifyContent: "space-between", alignItems: "end" }}>
          <ButtonMotion as="a" href={proj.git} target="_blank" variant="outline" variants={buttonMotion} whileHover="hover" whileTap="tap" sx={{ height: 42 }}>
            <FaGithub /> <span sx={{ mt: 1, ml: 1 }}> Code</span>
          </ButtonMotion>
          <ButtonMotion as="a" href={proj.web} target="_blank" variant="cta" variants={buttonMotion} whileHover="hover" whileTap="tap" sx={{}}>
            <span sx={{ fontSize: 1, fontWeight: 900, mt: 1, p: 1, letterSpacing: 0 }}> Live Demo</span>
          </ButtonMotion>
        </Flex>
      </Box>
    </CardMotion>
  );
}
