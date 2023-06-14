import Section from "@/shared-components/layouts/Section";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import CardContent from "@mui/material/CardContent";
import SectionTitle from "@/shared-components/SectionTitle";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ServicesCardProps {
  title: string;
  desc: string;
}
const allServices = [
  {
    title: "Customized Itineraries",
    desc: "Tailor-made journeys that match your preferences",
  },
  {
    title: "Seamless Logistics",
    desc: "Hassle-free travel arrangements",
  },
  {
    title: "Destination Expertise",
    desc: "Insider knowledge for unforgettable experiences",
  },
];
const ServicesCard = ({ title, desc }: ServicesCardProps) => {
  return (
    <CardContent
      sx={(theme) => ({
        px: 3,
        boxShadow: theme.shadows[5],
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        color: "white",
        ":hover": {
          filter: "brightness(0.8)",
        },
      })}
    >
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="subtitle1">{desc}</Typography>
    </CardContent>
  );
};

export default function IntroductionSection() {
  const desktopView = useMediaQuery("(min-width:1024px)");
  return (
    <Section>
      <SectionTitle
        title="We create unforgettable adventures with unmatched excellence"
        sx={{
          fontSize: 36,
        }}
      />
      <Grid container spacing={2} mt={desktopView ? 6 : 1}>
        {allServices.map(({ title, desc }, index) => {
          return (
            <Grid key={index} item xs={12} sm={4}>
              <ServicesCard title={title} desc={desc} />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
