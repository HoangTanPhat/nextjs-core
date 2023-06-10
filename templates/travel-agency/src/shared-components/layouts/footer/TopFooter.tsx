import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider/Divider";
import FormControl from "@mui/material/FormControl/FormControl";
import Grid from "@mui/material/Grid/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import Link from "next/link";
import React from "react";
import ListLink from "./ListLink";
import Logo from "@/shared-components/Logo";

export default function TopFooter() {
  const data = [
    {
      id: "p1",
      title: "Services",
      items: [
        {
          id: "p1c1",
          name: "Service A",
          href: "#",
          external: false,
        },
        {
          id: "p1c2",
          name: "Service B",
          href: "#",
          external: false,
        },
      ],
    },
    {
      id: "p2",
      title: "Quick Links",
      items: [
        {
          id: "p2c1",
          name: "About us",
          href: "#",
          external: false,
        },
        {
          id: "p2c2",
          name: "Blog",
          href: "#",
          external: false,
        },
        {
          id: "p2c3",
          name: "Contact",
          href: "#",
          external: false,
        },
      ],
    },
  ];

  return (
    <div className=" py-4 sm:py-8 ">
      <Grid container columns={20} rowSpacing={3}>
        <Grid item xs={20} sm={7}>
          <Stack direction="column" maxWidth={256}>
            <Box
              sx={{
                flex: "none",
                width: 190,
                height: 72,
                position: "relative",
              }}
            >
              <Link aria-label="Traveldi" href="/">
                <Logo />
              </Link>
            </Box>
            <Typography
              variant="subtitle2"
              sx={(theme) => ({
                color: theme.palette.grey[50],
              })}
            >
              1108 August Street, Ward 1, District 1, Ho Chi Minh City
            </Typography>
          </Stack>
          <Divider
            className="block sm:hidden"
            sx={{
              mt: 2,
              borderColor: "#353945",
            }}
          />
        </Grid>

        {data.map((item, index) => (
          <Grid item xs={10} sm={3} key={index}>
            <ListLink items={item.items} title={item.title} key={item.id} />
          </Grid>
        ))}
        <Grid item xs={20} sm={7}>
          <Divider
            className="block sm:hidden"
            sx={{
              mb: 2,
              borderColor: "#353945",
            }}
          />
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={(theme) => ({
              fontSize: 20,
              color: theme.palette.grey[50],
            })}
          >
            Join Newsletter
          </Typography>
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.grey[50],
              mt: {
                xs: 2,
                sm: 4,
              },
            })}
          >
            Subscribe our newsletter to get more free design course and resource
          </Typography>
          <form>
            <FormControl
              fullWidth
              sx={{
                mt: {
                  xs: 1,
                  sm: 2,
                },
              }}
              variant="outlined"
              size="small"
            >
              <InputLabel
                htmlFor="subscribe-newsletter"
                sx={(theme) => ({
                  color: theme.palette.grey[500],
                })}
              >
                Enter your email
              </InputLabel>
              <OutlinedInput
                id="subscribe-newsletter"
                type="text"
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{
                      width: 32,
                      height: 32,
                    }}
                  >
                    <IconButton
                      edge="end"
                      sx={{
                        width: 32,
                        height: 32,
                      }}
                    >
                      {/* <Image
                        src="/static/icons/SubmitFormButton.svg"
                        layout="fill"
                      /> */}
                    </IconButton>
                  </InputAdornment>
                }
                label="Enter your email"
                sx={{
                  borderColor: "#353945",
                  borderWidth: 2,
                  borderRadius: 10,
                  pr: 1,
                  input: {
                    color: "white",
                    fontSize: 14,
                  },
                }}
              />
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
