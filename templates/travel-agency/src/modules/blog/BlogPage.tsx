import LayoutContainer from "@/shared-components/layouts/LayoutContainer";
import React, { Fragment, useRef, useState } from "react";
import BannerSection from "../../shared-components/BannerSection";
import Grid from "@mui/material/Grid";
import Section from "@/shared-components/layouts/Section";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SectionTitle from "@/shared-components/SectionTitle";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import Divider from "@mui/material/Divider";
import { BlogsProps } from "@/pages/blog";
import Image from "next/image";
import BlogItemSkeleton from "./BlogItemSkeleton";

type BlogPageProps = BlogsProps;

export default function BlogPage({ title, allBlogPosts }: BlogPageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const onImageLoaded = () => setLoaded(true);

  React.useEffect(() => {
    const imgElCurrent = imgRef.current;

    if (imgElCurrent) {
      imgElCurrent.addEventListener("load", onImageLoaded);
      return () => imgElCurrent.removeEventListener("load", onImageLoaded);
    }
  }, [imgRef]);

  return (
    <LayoutContainer>
      <BannerSection
        title={title}
        url="/images/blog-banner.jpeg"
        position="top"
      />
      {!allBlogPosts.length ? (
        <div className="py-12">
          <SectionTitle
            title="No posts found! Please check the server"
            sx={(theme) => ({
              fontSize: 36,
              color: theme.palette.grey[600],
            })}
          />
        </div>
      ) : (
        <Section>
          <Grid
            container
            spacing={4}
            sx={{
              mb: 3,
            }}
          >
            {/* <Image
            src="https://res.cloudinary.com/djw6zuvia/image/upload/v1687755678/tourist_1_e3dc69e442.jpg"
            alt="djjsdjs"
            width={200}
            height={150}
          /> */}
            <Grid item xs={12} lg={7}>
              <Grid container>
                <Stack
                  flexDirection="column"
                  justifyContent="center"
                  gap={2}
                  sx={{
                    backgroundImage: `url(${
                      allBlogPosts[0].image ? allBlogPosts[0].image : null
                    })`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: {
                      xs: "center",
                      sm: "200px top",
                    },
                    position: "relative",
                    height: 600,
                    width: "100%",
                  }}
                >
                  <div className="absolute bg-gradient-to-r from-white top-0 via-white via-[40%] bottom-0 left-0 right-0 z-0 h-full w-full"></div>

                  {allBlogPosts[0]?.categories?.length ? (
                    <Stack direction="row" gap={1}>
                      {allBlogPosts[0].categories?.map((category, index) => {
                        return (
                          <Chip
                            key={index}
                            label={category}
                            variant="filled"
                            sx={{
                              width: "fit-content",
                              fontWeight: "bold",
                              backgroundColor: "#FFBA00",
                              color: "white",
                              zIndex: 10,
                            }}
                          />
                        );
                      })}
                    </Stack>
                  ) : null}

                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "60%",
                      },
                      zIndex: 10,
                    }}
                  >
                    <Typography
                      variant="h2"
                      fontWeight="bold"
                      className="line-clamp-3"
                    >
                      {allBlogPosts[0].title}
                    </Typography>
                    <Typography variant="body1" className="line-clamp-4 mt-4">
                      {allBlogPosts[0].introduction_text}
                    </Typography>

                    {/* <Typography
                    variant="body1"
                    sx={(theme) => ({
                      color: theme.palette.grey[400],
                    })}
                  >
                    Date: 12/06/2023
                  </Typography> */}

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
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SectionTitle
                title="Latest blogs"
                sx={() => ({
                  mb: 2,
                  fontSize: 24,
                  textAlign: "left",
                  maxWidth: "none",
                })}
              />

              {allBlogPosts
                .filter((_, index) => index > 0 && index < 4)
                .map((blog, index) => {
                  const { title, image } = blog;
                  return (
                    <Fragment key={index}>
                      <Stack
                        justifyContent="space-between"
                        sx={{
                          flexDirection: {
                            xs: "column",
                            sm: "row",
                          },
                        }}
                      >
                        <Stack direction="row" gap={3}>
                          <Box
                            sx={{
                              position: "relative",
                              height: {
                                xs: "100%",
                                sm: 150,
                              },
                              aspectRatio: {
                                xs: "4/2.5",
                                sm: "4/3",
                              },
                              zIndex: 1,
                            }}
                          >
                            {!loaded && (
                              <div className="animate-pulse h-full w-full bg-slate-200"></div>
                            )}
                            <Image
                              ref={imgRef}
                              src={
                                image && image.toString()
                                  ? image.toString()
                                  : "/images/tourist-1.jpg"
                              }
                              alt={title}
                              fill
                              style={{
                                objectFit: "cover",
                              }}
                              loading="lazy"
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
                          </Stack>
                        </Stack>
                        <Box
                          sx={{
                            display: {
                              xs: "none",
                              sm: "block",
                            },
                          }}
                        >
                          <EastIcon />
                        </Box>
                      </Stack>

                      {/* <BlogItemSkeleton directionRow /> */}

                      {allBlogPosts.filter((_, index) => index > 0 && index < 4)
                        .length >
                      index + 1 ? (
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
            {allBlogPosts
              .filter((_, index) => index > 3)
              .map((blog, index) => {
                const { title, introduction_text, image } = blog;
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
                        zIndex: 1,
                        mb: 3,
                      }}
                    >
                      <Image
                        src={
                          image && image.toString()
                            ? image.toString()
                            : "/images/tourist-1.jpg"
                        }
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
                        {introduction_text}
                      </Typography>

                      {/* <Typography
                      variant="body1"
                      sx={(theme) => ({
                        mt: 3,
                        color: theme.palette.grey[400],
                      })}
                    >
                      {date}
                    </Typography> */}
                    </Stack>
                  </Grid>
                );
              })}
          </Grid>
        </Section>
      )}
    </LayoutContainer>
  );
}
