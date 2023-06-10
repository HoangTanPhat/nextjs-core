import Section from "@/shared-components/layouts/Section";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

export default function TestimonialSection() {
  const [onHover, setOnHover] = useState<number | undefined>(undefined);

  const imgList = [
    {
      name: "Emily Johnson",
      link: "testimonial-2",
      text: "The trip was perfectly organized, with seamless transportation, handpicked accommodations, and knowledgeable guides that brought each destination to life",
    },
    {
      name: "James Anderson",
      link: "testimonial-1",
      text: "The itinerary was well-balanced, allowing us to explore popular attractions and off-the-beaten-path gems, with attention to detail in every aspect of the trip",
    },
    {
      name: "Michael Thompson",
      link: "testimonial-4",
      text: "I'm still buzzing with excitement from the incredible adventure, thanks to passionate tour guides and carefully selected local restaurants that introduced me to delicious cuisine",
    },
    {
      name: "Tan Phat",
      link: "testimonial-3",
      text: "Every day of the trip was filled with unique experiences and unforgettable moments, thanks to a well-curated itinerary, small group size, and a friendly tour leader",
    },
  ];

  const handleHover = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLElement;
    console.log(target);
    const targetClassNameIdx = target.className.match(/testimonial-(.+)/);
    if (targetClassNameIdx) {
      console.log(targetClassNameIdx);
      setOnHover(Number(targetClassNameIdx[1]));
    }
  };

  const handleOut = () => {
    setOnHover(undefined);
  };

  useEffect(() => {
    const testimonial = document.getElementById("testimonial");
    if (testimonial) {
      testimonial.addEventListener("mouseover", (e) => handleHover(e));
      testimonial.addEventListener("mouseout", handleOut);
      return () => {
        testimonial.removeEventListener("mouseout", handleOut);
        testimonial.removeEventListener("mouseover", (e) => handleHover(e));
      };
    }
  }, []);

  return (
    <Section fullWidth>
      <section
        style={{
          margin: "auto",
          position: "relative",
          maxWidth: 1280,
          height: "100%",
          padding: "0px 24px",
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h2" fontSize={36} fontWeight="bold">
              Our customers are satisfied
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </section>
      <Grid
        id="testimonial"
        container
        columnSpacing={1}
        mt={4}
        sx={{
          height: "100%",
        }}
      >
        {imgList.map(({ name, link, text }, index) => {
          return (
            <Grid
              key={index}
              item
              xs={6}
              md={3}
              sx={{
                position: "relative",
              }}
            >
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 z-50 h-full w-full testimonial-${
                  index + 1
                }`}
              ></div>

              <Box
                sx={{
                  backgroundImage: `url('/images/${link}.jpeg')`,
                  backgroundSize: "cover",
                  position: "relative",
                  width: "100%",
                  height: "500px",
                  zIndex: 0,
                  p: 3,
                }}
              >
                <div
                  className={`${
                    onHover === index + 1
                      ? "bg-black"
                      : "bg-gradient-to-t from-black "
                  } opacity-70 absolute top-0 bottom-0 left-0 right-0 z-0`}
                ></div>

                <div className="flex flex-col justify-between h-full z-10">
                  <Typography
                    sx={{
                      display: onHover === index + 1 ? "block" : "none",
                      position: "relative",
                    }}
                    variant="body1"
                    fontSize={20}
                    color="white"
                  >
                    {text}
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      mt: "auto",
                      color: "white",
                      position: "relative",
                    }}
                  >
                    {name}
                  </Typography>
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
