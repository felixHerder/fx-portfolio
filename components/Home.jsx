import { Heading, Container, Text, Box, Flex } from "theme-ui";
import { motion } from "framer-motion";
import React from "react";
export default function Home() {
  return (
    <section
      id="home"
      sx={(theme) => ({
        width: "100%",
        minHeight: "100vh",
        px: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: theme.util.gx(theme.colors.gx1, theme.colors.gx2),
      })}
    >
      <Box>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          sx={{ variant: "text.ultratitle", fontSize: [5, 6, 7], my: 1 }}
        >
          Hi, I&apos;m{" "}
          <Text as="span" color="primary" sx={theme=>({...theme.util.gxText(theme.colors.gxc1, theme.colors.gxc2)})}>
            Felix
          </Text>
        </motion.h1>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          sx={{ variant: "text.title", fontSize: [3, 4, 5], color: "secondary", fontWeight: "100", fontFamily: "body", letterSpacing: "-0.062em", my: 0 }}
        >
          a frontend web developer
        </motion.h2>
      

        <Box sx={{position:"relative",width:"100%"}}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            sx={(theme) => ({
              position:"absolute",
              width:"100%",
              variant: "text.title",
              textAlign: "right",
              fontSize: [1, 2],
              color: "secondary",
              fontWeight: "400",
              fontFamily: "body",
              letterSpacing: "-0.06em",
              mt: 1,
              ...theme.util.gxText(theme.colors.secondary, theme.colors.placeholder)
            })}
          >
            based in Iași
          </motion.h3>
        </Box>
      </Box>
    </section>
  );
}
