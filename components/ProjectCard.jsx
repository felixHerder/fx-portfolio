import React from "react";
import Image from "next/image";
import {  Card, Heading, Button, Box, Flex, Badge, } from "theme-ui";
import { FaGithub } from "react-icons/fa";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
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
    visible: {
      opacity: 1,
      transition: { duration: 0.2, type: "spring", ease: "easeIn" },
      transition: { staggerChildren: 0.05, delayChildren: 0 },
    },
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
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <CardMotion
      tabIndex="-1"
      variants={card}
      whileHover="visible"
      whileFocus="visible"
      initial="hidden"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        p: [0, 0],
        bg: "elevated",
        border: "1px solid",
        borderColor: "transparent",
        transition: "border-color .2s ease",
        // "&:hover,&:focus": { borderColor: alpha("primary", 0.5) },
        "&:hover,&:focus": { borderColor: "border" },
        "&:hover #proj-title,&:focus #proj-title": { color: "primary" },
        "&:hover #img-box,&:focus #img-box": { transform: "scale(1.05)" },
      }}
    >
      {/* Image */}
      <Box sx={{ height: [200, 250, 300, 250, 320], width: "100%", overflow: "hidden", position: "absolute" }}>
        <Image
          id="img-box"
          src={proj.isrc}
          alt={proj.title}
          layout="responsive"
          placeholder="blur"
          sx={{ transform: "scale(1)", transition: "transform .5s ease" }}
        />
      </Box>
      {/* Gradient fade to card background */}
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
        {/* Badges */}
        <FlexMotion
          variants={badgeBg}
          sx={(theme) => ({
            position: "absolute",
            top: 0,
            width: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
            py: 3,
            px: 4,
            background: theme.util.gx2(theme.colors.gxt2, theme.colors.gxt1),
          })}
        >
          {proj.badges.map((badge, idx) => (
            <BadgeMotion
              variants={badgeMotion}
              key={idx}
              sx={(theme) => ({
                lineHeight: [1.2, 1.5, 2],
                fontSize: 1,
                fontWeight: 400,
                color: "primary",
                mx: [1, 1, 3, 1, 2],
                my: [1, 1, 3, 1, 2],
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
      {/* Card Title */}
      <Heading
        id="proj-title"
        as="h3"
        variant="subtitle"
        sx={{
          color: "textAlt",
          px: [3, 3, 4],
          mt: -4,
          position: "relative",
          fontWeight: 700,
          fontSize: [4, 4, 4, 4, 5],
          transition: "color .2s ease",
        }}
      >
        {proj.title}
      </Heading>
      {/*Project Description */}
      <Box
        sx={{
          px: [3, 3, 4],
          pt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          height: isHidden ? "120px" : "auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Paragraphs */}
        {proj.description &&
          proj.description.split("\n").map((par, idx) => (
            <p key={idx} sx={{ my: 1, color: "textAlt", textAlign: "justify" }}>
              {par}
            </p>
          ))}
        {/* Hidden text overlay gradient */}
        <Box
          sx={(theme) => ({
            height: [200, 250, 300, 250, 320],
            width: "100%",
            height: isHidden ? "60px" : "0px",
            position: "absolute",
            bottom: "0",
            left: "0",
            display: "flex",
            alignItems: "end",
            justifyContent: "start",
            background: theme.util.gx2(theme.colors.gxt1, theme.colors.gxt2),
          })}
        ></Box>
      </Box>
      {/* Read more button */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: -2, }}>
        <ButtonMotion
          title={isHidden ? "Show more" : "Show less"}
          variant="primary"
          variants={buttonMotion}
          whileHover="hover"
          whileTap="tap"
          sx={{
            bg: "transparent",
            color: "textTer",
            lineHeight: 1,
            pt: 3,
            pb: 2,
          }}
          onClick={() => setIsHidden((prev) => !prev)}
        >
          {isHidden ? <BsChevronDown sx={{ width: 20, height: 20 }} /> : <BsChevronUp sx={{ width: 20, height: 20 }} />}
        </ButtonMotion>
      </Box>
      {/* Button links */}
      <Flex sx={{ justifyContent: "space-between", alignItems: "end", pt: 1, pb: [3, 3, 4], px: [3, 3, 4] }}>
        <ButtonMotion
          as="a"
          href={proj.git}
          target="_blank"
          variant="outline"
          variants={buttonMotion}
          whileHover="hover"
          whileTap="tap"
          sx={{ height: 42 }}
        >
          <FaGithub /> <span sx={{ mt: 1, ml: 1 }}> Code</span>
        </ButtonMotion>
        <ButtonMotion
          as="a"
          href={proj.web}
          target="_blank"
          variant="cta"
          variants={buttonMotion}
          whileHover="hover"
          whileTap="tap"
          sx={{}}
        >
          <span sx={{ fontSize: 1, fontWeight: 900, mt: 1, p: 1, letterSpacing: 0, lineHeight: 1 }}> Live Demo</span>
        </ButtonMotion>
      </Flex>
    </CardMotion>
  );
}
