import { Heading, Container, Text, Box, Flex } from "theme-ui";
import { motion } from "framer-motion";
import React from "react";
export default function Home() {
  return (
    <section
      id="home"
      sx={(theme) => ({
        width: "100%",
        minHeight: "75vh",
        px: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.util.gx(theme.colors.gx1, theme.colors.gx2),
      })}
    >
      <Box>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: .5}}
          sx={{ variant: "text.ultratitle", fontSize: [5, 6, 7], mb: 0 }}
        >
          Hi, I&apos;m{" "}
          <Text as="span" color="primary">
            Felix
          </Text>
        </motion.h1>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .8 }}
          sx={{ variant: "text.title", fontSize: [3, 4, 5], color: "secondary", fontWeight: "100", fontFamily: "body", letterSpacing: "-0.06em", mt: 0 }}
        >
          a frontend web developer
        </motion.h2>
      </Box>
    </section>
  );
}
