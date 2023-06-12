import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

interface BannerSectionProps {
  homepage?: boolean;
  title: string;
  description?: string;
  url?: string;
}
export default function BannerSection({
  homepage,
  title = "Page title",
  description,
  url,
}: BannerSectionProps) {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url('${url}')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: homepage ? "100vh" : 400,
      }}
    >
      <div className="bg-gradient-to-r from-black opacity-80 absolute top-0 bottom-0 left-0 right-0"></div>
      <Container
        sx={{
          zIndex: 10,
          position: "relative",
          maxWidth: "1280px !important",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mt: !homepage ? "80px" : 0,
            maxWidth: {
              sm: "70%",
              lg: "40%",
            },
          }}
        >
          <Typography variant="h1" fontWeight={700} fontSize={70} color="white">
            {title}
          </Typography>
          <Typography color="white" maxWidth="80%" my={4}>
            {description}
          </Typography>
        </Box>
      </Container>
    </section>
  );
}
