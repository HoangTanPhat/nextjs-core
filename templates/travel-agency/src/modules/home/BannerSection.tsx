import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

export default function BannerSection() {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: "url('/images/hero-banner-comz.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "100vh",
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
            maxWidth: {
              sm: "70%",
              lg: "40%",
            },
          }}
        >
          <Typography variant="h1" fontWeight={700} fontSize={70} color="white">
            Quickest & safest delivery
          </Typography>
          <Typography color="white" maxWidth="80%" my={4}>
            Our cutting-edge logistics system guarantees the fastest and most
            secure delivery service available.
          </Typography>
        </Box>
      </Container>
    </section>
  );
}
