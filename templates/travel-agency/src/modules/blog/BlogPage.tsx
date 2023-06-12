import LayoutContainer from "@/shared-components/layouts/LayoutContainer";
import React, { Fragment } from "react";
import BannerSection from "../../shared-components/BannerSection";
import Grid from "@mui/material/Grid";
import Section from "@/shared-components/layouts/Section";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import SectionTitle from "@/shared-components/SectionTitle";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import Divider from "@mui/material/Divider";

export default function BlogPage() {
  const latestBlogData = [
    {
      title: "Top Adventure Travel Destinations",
      date: "11/06/2023",
      thumbnail: "/images/tourist-1.jpg",
    },
    {
      title: "Family-Friendly Vacation Spots",
      date: "10/06/2023",
      thumbnail: "/images/tourist-2.jpg",
    },
    {
      title: "Travel Photography Tips",
      date: "09/06/2023",
      thumbnail: "/images/commitment.jpg",
    },
  ];

  const othersBlogsData = [
    {
      title: "Top Adventure Travel Destinations",
      date: "11/06/2023",
      thumbnail: "/images/tourist-1.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      title: "Top Adventure Travel Destinations",
      date: "11/06/2023",
      thumbnail: "/images/tourist-1.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      title: "Top Adventure Travel Destinations",
      date: "11/06/2023",
      thumbnail: "/images/tourist-1.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <LayoutContainer>
      <BannerSection title="Our blog" url="/images/blog-banner.jpeg" />
      <Section>
        <Grid
          container
          spacing={4}
          sx={{
            mb: 3,
          }}
        >
          <Grid item xs={12} lg={7}>
            <Grid container>
              <Stack
                flexDirection="column"
                justifyContent="center"
                height="100%"
                gap={2}
                sx={{
                  backgroundImage: "url('/images/contact-form.jpeg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "200px top",
                  position: "relative",
                  height: 600,
                }}
              >
                <div className="absolute bg-gradient-to-r from-white top-0 via-white via-[300px] bottom-0 left-0 right-0 z-0 h-full w-full"></div>

                <Chip
                  label="Travel Guides"
                  variant="filled"
                  sx={{
                    width: "fit-content",
                    fontWeight: "bold",
                    backgroundColor: "#FFBA00",
                    color: "white",
                    zIndex: 10,
                  }}
                />

                <Box sx={{ width: "60%", zIndex: 10 }}>
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    className="line-clamp-3"
                  >
                    Solo Travel Guide: Tips and Inspiration
                  </Typography>
                  <Typography variant="body1" className="line-clamp-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={(theme) => ({
                      color: theme.palette.grey[400],
                    })}
                  >
                    Date: 12/06/2023
                  </Typography>

                  <Button
                    variant="contained"
                    disableElevation
                    endIcon={<EastIcon />}
                    sx={{
                      py: 2,
                      mt: 4,
                      borderRadius: 0,
                      fontWeight: 700,
                    }}
                  >
                    Continue to read
                  </Button>
                </Box>
              </Stack>
              {/* <Typography variant="h2" fontWeight="bold" color="#FFBA00">
                  Latest news
                </Typography> */}
              {/* <Grid item xs={6}>
                <Box
                  sx={{
                    position: "relative",
                    height: 600,
                    width: "100%",
                    zIndex: -1,
                  }}
                >
                  <div className="absolute bg-gradient-to-r from-white top-0 bottom-0 left-0 right-0 z-50 h-full w-full"></div>
                  <Image
                    src="/images/contact-form.jpeg"
                    alt="Contact form"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5}>
            <SectionTitle
              title="Latest blogs"
              sx={(theme) => ({
                mb: 2,
                fontSize: 24,
                textAlign: "left",
                maxWidth: "none",
              })}
            />
            {latestBlogData.map((blog, index) => {
              const { title, date, thumbnail } = blog;
              return (
                <Fragment key={index}>
                  <Stack direction="row" gap={3}>
                    <Box
                      sx={{
                        position: "relative",
                        height: 150,
                        aspectRatio: "4/3",
                        zIndex: -1,
                      }}
                    >
                      <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Stack direction="column" gap={1}>
                      <Typography
                        className="line-clamp-2"
                        variant="h6"
                        fontWeight={700}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={(theme) => ({
                          color: theme.palette.grey[400],
                        })}
                      >
                        {date}
                      </Typography>
                    </Stack>
                    <EastIcon />
                  </Stack>
                  {latestBlogData.length > index + 1 ? (
                    <Divider sx={{ my: 3 }} />
                  ) : null}
                </Fragment>
              );
            })}
          </Grid>
        </Grid>

        <SectionTitle
          title="All blog posts"
          sx={{
            textAlign: "left",
            m: 0,
            mb: 3,
          }}
        />
        <Grid container spacing={4}>
          {othersBlogsData.map((blog, index) => {
            const { title, date, thumbnail, desc } = blog;
            return (
              <Grid
                key={index}
                item
                xs={12}
                md={4}
                sx={{
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/2.5",
                    zIndex: -1,
                    mb: 3,
                  }}
                >
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Stack
                  justifyContent="space-between"
                  sx={{
                    height: "100%",
                  }}
                >
                  <Typography
                    className="line-clamp-2"
                    variant="h6"
                    fontWeight={700}
                  >
                    {title}
                  </Typography>
                  <Typography className="line-clamp-4" variant="body1">
                    {desc}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={(theme) => ({
                      mt: 3,
                      color: theme.palette.grey[400],
                    })}
                  >
                    {date}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Section>
    </LayoutContainer>
  );
}
