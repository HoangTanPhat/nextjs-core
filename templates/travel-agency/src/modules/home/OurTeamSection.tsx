import Section from "@/shared-components/layouts/Section";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function OurTeamSection() {
  const desktopView = useMediaQuery("(min-width:1024px)");
  return (
    <Section>
      <Grid container columnSpacing={12}>
        <Grid
          item
          xs={12}
          md={6}
          py={desktopView ? 10 : 0}
          pl={desktopView ? 3 : 0}
          pr={desktopView ? 1 : 0}
        >
          <Typography variant="h2" fontSize={36} fontWeight="bold">
            Your personal travel architects
          </Typography>
          <Typography variant="h2" fontSize={36} fontWeight="bold">
            Crafting extraordinary experiences
          </Typography>
          <Typography variant="subtitle1" mt={3}>
            Our passionate team of travel enthusiasts with extensive global
            knowledge is dedicated to curating your perfect itinerary. We
            prioritize your unique interests and preferences, taking the time to
            understand your needs.
          </Typography>

          <Typography variant="subtitle1" mt={3}>
            Whether you seek relaxation on a beach, adventure in the mountains,
            or cultural immersion, our experts will bring your travel dreams to
            life with a tailor-made journey.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold">Personalized</Typography>
              <Typography variant="caption">
                Tailored itineraries based on your unique preferences and
                interests
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold">Knowledgeable</Typography>
              <Typography variant="caption">
                Expert team with extensive global knowledge for valuable
                insights
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold">Dream-fulfilling</Typography>
              <Typography variant="caption">
                Transforming your travel dreams into unforgettable experiences
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} mt={desktopView ? 0 : 3}>
          <Stack
            direction="column"
            sx={{ height: desktopView ? "100%" : 500 }}
            gap={2}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "70%",
                float: "left",
              }}
            >
              <Image
                src="/images/tourist-2.jpg"
                alt="Tourist"
                fill
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "50%",
                height: "40%",
                float: "right",
              }}
            >
              <Image
                src="/images/tourist-1.jpg"
                alt="Tourist"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
