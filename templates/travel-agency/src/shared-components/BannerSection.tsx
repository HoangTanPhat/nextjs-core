import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface BannerSectionProps {
  homepage?: boolean;
  title: string;
  description?: string;
  url?: string;
  position?: "top" | "bottom" | "center";
  titleAlign?: "left" | "center" | "right";
  descAlign?: "left" | "center" | "right";
}
export default function BannerSection({
  homepage,
  title = "Page title",
  description,
  url,
  position = "top",
  titleAlign = "left",
  descAlign = "left",
}: BannerSectionProps) {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url('${url}')`,
        backgroundSize: "cover",
        backgroundPosition: position,
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
            maxWidth: ["center", "right"].includes(titleAlign)
              ? "none"
              : {
                  sm: "70%",
                  lg: "40%",
                },
            width: "100%",
          }}
        >
          <h1
            className={`text-7xl font-gilroy font-bold text-white ${
              titleAlign === "right"
                ? "text-right"
                : titleAlign === "center"
                ? "text-center"
                : "text-left"
            }`}
          >
            {title}
          </h1>
          <h4
            className={`max-w-[80%] text-white my-4 ${
              descAlign === "right"
                ? "text-right"
                : descAlign === "center"
                ? "text-center"
                : "text-left"
            }`}
          >
            {description}
          </h4>
        </Box>
      </Container>
    </section>
  );
}
