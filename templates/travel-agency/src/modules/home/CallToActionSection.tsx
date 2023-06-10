import SectionTitle from "@/shared-components/SectionTitle";
import Section from "@/shared-components/layouts/Section";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

export default function CallToActionSection() {
  return (
    <Section
      fullWidth
      sx={{
        backgroundColor: "black",
        py: 10,
      }}
    >
      <SectionTitle
        title="Get started today for free"
        sx={{
          color: "white",
        }}
      />
      <Typography variant="body1" textAlign="center" color="white" mt={2}>
        Everything you need for great experiences
      </Typography>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{
            px: 4,
            py: 3,
            borderRadius: 0,
            fontWeight: 700,
            maxHeight: 48,
          }}
        >
          Talk to us
        </Button>
      </Box>
    </Section>
  );
}
