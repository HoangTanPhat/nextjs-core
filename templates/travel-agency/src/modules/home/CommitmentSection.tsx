import Section from "@/shared-components/layouts/Section";
import { Button, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Image from "next/image";

export default function CommitmentSection() {
  return (
    <Section>
      <Grid container columnSpacing={12}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src="/images/commitment.jpg"
              alt="Our commitment"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} py={4} pl={3} pr={1}>
          <Typography variant="h2" fontSize={36} fontWeight="bold">
            Building memories
          </Typography>
          <Typography variant="h2" fontSize={36} fontWeight="bold">
            One journey at a time
          </Typography>
          <Typography variant="subtitle1" mt={3}>
            We create unforgettable experiences that make a lasting impact. With
            years of industry expertise, we are known for excellence,
            reliability, and professionalism.
          </Typography>

          <Typography variant="subtitle1" mt={3}>
            Our commitment to customer satisfaction drives us to build strong
            relationships, understand your preferences, and exceed your
            expectations with personalized itineraries. Trust us to handle every
            aspect of your journey with meticulous care
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              mt: 3,
              px: 4,
              py: 3,
              borderRadius: 0,
              fontWeight: 700,
              maxHeight: 48,
            }}
          >
            Learn more
          </Button>

          <Divider sx={{ my: 4 }} />

          <Typography variant="body1" fontWeight={700} mt={3}>
            Trusted by some of the world wide companies
          </Typography>

          <Stack direction="row" gap={3} alignItems="center" mt={3}>
            <Image
              src="/icons/tripadvisor-icon.png"
              width={50}
              height={50}
              alt="Tripadvisor logo"
            />
            <Image
              src="/icons/airbnb-icon.png"
              width={50}
              height={50}
              alt="Airbnb logo"
            />
            <Image
              src="/icons/tripadvisor-icon.png"
              width={50}
              height={50}
              alt="Tripadvisor logo"
            />
            <Image
              src="/icons/airbnb-icon.png"
              width={50}
              height={50}
              alt="Airbnb logo"
            />
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
