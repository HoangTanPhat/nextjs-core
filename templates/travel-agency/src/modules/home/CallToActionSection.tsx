import SectionTitle from "@/shared-components/SectionTitle";
import Section from "@/shared-components/layouts/Section";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CallToActionSection() {
  return (
    <Section
      fullWidth
      sx={{
        backgroundColor: "black",
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
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
      </Box>

      <Box
        sx={{
          zIndex: 10,
          mt: 4,
          position: "relative",
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
      <Typography
        sx={{
          m: "auto",
          zIndex: 0,
          color: "rgba(255,255,255,0.1)",
          fontSize: "28vw",
          whiteSpace: "nowrap",
          position: "absolute",
          bottom: "-20vw",
          left: 0,
          right: 0,
          fontWeight: "bold",
          //   WebkitTextFillColor: "black",
          //   WebkitTextStrokeWidth: 1,
          //   WebkitTextStrokeColor: "rgba(0,0,0,0.7)",
          //   textFill: white; /* Will override color (regardless of order) */
          //   -webkit-text-stroke-width: 1px;
          //   -webkit-text-stroke-color: black;
        }}
      >
        Traveldi
      </Typography>
    </Section>
  );
}
