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
import Link from "next/link";
import { useRouter } from "next/router";
import dayjs from "dayjs";

type BlogPageProps = BlogsProps;

export default function BlogPage({ title, allBlogPosts }: BlogPageProps) {
  const [loaded, setLoaded] = useState(false);
  const [onHover, setOnHover] = useState<number | undefined>(undefined);

  const imgRef = useRef<HTMLImageElement>(null);
  const blogItemRef = useRef<HTMLDivElement>(null);

  const { pathname } = useRouter();
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
            spacing={{ xs: 0, sm: 4 }}
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
                    <p
                      className="line-clamp-4 mt-4"
                      dangerouslySetInnerHTML={{
                        __html: allBlogPosts[0].introduction_text,
                      }}
                    ></p>

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
                      <Link
                        href={{
                          pathname: `${pathname}/${allBlogPosts[0].slug}`,
                        }}
                        passHref
                      >
                        Continue to read
                      </Link>
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
                  const { title, image, categories, slug, date } = blog;
                  return (
                    <div
                      key={index}
                      className="focus-within:outline-2 focus-within:outline focus-within:outline-offset-2 focus-within:rounded-md focus-within:outline-[#FFBA00]"
                    >
                      <Link
                        href={{
                          pathname: `${pathname}/${slug}`,
                        }}
                        passHref
                        onMouseEnter={() => setOnHover(index)}
                        onMouseLeave={() => setOnHover(undefined)}
                      >
                        <Stack
                          direction="row"
                          gap={3}
                          ref={blogItemRef}
                          className={index === 0 ? "pb-6" : "py-6"}
                        >
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
                          <Stack
                            direction="column"
                            gap={1}
                            justifyContent="space-between"
                            flexGrow={1}
                          >
                            <Typography
                              className={`line-clamp-2 ${
                                onHover === index && "text-[#FFBA00]"
                              }`}
                              variant="h6"
                              fontWeight={700}
                            >
                              {title}
                            </Typography>
                            <Stack
                              direction="row"
                              justifyContent={
                                categories && categories.length
                                  ? "space-between"
                                  : "flex-end"
                              }
                              alignItems="center"
                              sx={{
                                width: "100%",
                              }}
                            >
                              <div className="flex flex-row gap-1 flex-none">
                                {categories && categories.length ? (
                                  <h6 className="rounded-full text-sm bg-[#FFBA00] py-1 px-2 text-white">
                                    {categories[0]}
                                  </h6>
                                ) : null}
                              </div>

                              <div className="text-sm text-gray-400 truncate ml-2 whitespace-nowrap flex-none">
                                {dayjs(date).format("DD/MM/YYYY").toString()}
                              </div>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Link>

                      {/* <BlogItemSkeleton directionRow /> */}

                      {allBlogPosts.filter((_, index) => index > 0 && index < 4)
                        .length >
                      index + 1 ? (
                        <Divider />
                      ) : null}
                    </div>
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
          <Grid
            container
            spacing={{
              xs: 0,
              sm: 4,
            }}
          >
            {allBlogPosts
              .filter((_, index) => index > 3)
              .map((blog, index) => {
                const { title, introduction_text, image, date, slug } = blog;
                return (
                  <Grid
                    key={index + 3}
                    item
                    xs={12}
                    md={4}
                    sx={{
                      height: "100%",
                    }}
                  >
                    <div className="focus-within:outline-2 focus-within:outline focus-within:outline-offset-2 focus-within:rounded-md focus-within:outline-[#FFBA00] pb-2">
                      <Link
                        href={{
                          pathname: `${pathname}/${slug}`,
                        }}
                        passHref
                        onMouseEnter={() => setOnHover(index + 3)}
                        onMouseLeave={() => setOnHover(undefined)}
                      >
                        <Box
                          className="focus-within:outline-2"
                          sx={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: "4/2.5",
                            zIndex: 1,
                            mb: 2,
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
                          <h6
                            className={`line-clamp-2 font-bold text-xl ${
                              onHover === index + 3 && "text-[#FFBA00]"
                            }`}
                          >
                            {title}
                          </h6>
                          <p className="line-clamp-2 mb-6">
                            {introduction_text}
                          </p>
                          <h6 className="text-sm text-gray-400">
                            {dayjs(date).format("DD/MM/YYYY").toString()}
                          </h6>
                        </Stack>
                      </Link>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
        </Section>
      )}
    </LayoutContainer>
  );
}
