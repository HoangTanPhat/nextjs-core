import SectionTitle from "@/shared-components/SectionTitle";
import Section from "@/shared-components/layouts/Section";
import Grid from "@mui/material/Grid";
import React from "react";

export default function ContactFormSection() {
  return (
    <Section sx={{ py: 10 }}>
      <SectionTitle
        title="Find out the approximate cots of your travel plan"
        sx={{
          textAlign: "left",
          maxWidth: "50%",
          m: 0,
        }}
      />
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </Section>
  );
}
