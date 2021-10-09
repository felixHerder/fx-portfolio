import { Heading, Container, Text, Box, Flex } from "theme-ui";
import React from 'react';
export default function Home() {
  return (
    <section id="home"
      sx={(theme) => ({
        width: "100%",
        minHeight:"75vh",
        px: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.util.gx(theme.colors.gx1, theme.colors.gx2),
      })}
    >
      <Box >
        <Heading as="h1" variant="ultratitle" sx={{ fontSize: [6, 7, 8] }}>
          Hi, I&apos;m{" "}
          <Text as="span" color="primary">
            Felix
          </Text>
        </Heading>
        <Heading variant="title" color="secondary" sx={{fontWeight:"100", fontFamily:"body", letterSpacing:"-0.06em", mt:3}}>
          a frontend web developer
        </Heading>
      </Box>
    </section>
  );
}
