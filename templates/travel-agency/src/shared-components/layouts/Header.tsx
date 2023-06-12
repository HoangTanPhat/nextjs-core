import { Disclosure } from "@headlessui/react";
import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Container from "@mui/material/Container/Container";
import Stack from "@mui/material/Stack/Stack";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Image from "next/legacy/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBarButton from "./NavBarButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { Typography, useScrollTrigger } from "@mui/material";
import Logo from "../Logo";
import XMenuIcon from "../icons/XMenuIcon";
import MenuIcon from "../icons/MenuIcon";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  open?: boolean;
  window?: () => Window;
  children?: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window, open } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  // const handleScroll = () => {
  //   const viewerportHeight = window().innerHeight
  //   if (scrollTop >= vi)
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", handleScroll);
  //   return () => document.removeEventListener("scroll", handleScroll);
  // }, []);

  if (!children) return;
  return React.cloneElement(children, {
    elevation: trigger && !open ? 4 : 0,
    sx: [
      {
        ...(Array.isArray(children.props.sx)
          ? children.props.sx
          : [children.props.sx]),
        backgroundColor: !open
          ? trigger
            ? "rgba(0,0,0,0.4)"
            : "transparent"
          : "rgba(0,0,0,0.8)",
        backdropFilter: trigger ? "blur(24px)" : "none",
        ".menu-items button > h6": {
          color: trigger ? "#FFBA00" : "white",
        },
      },
    ],
  });
}

export default function Header(props?: Props) {
  const matches = useMediaQuery("(min-width:1024px)");
  const allHeaders = [
    {
      id: "home",
      title: "Home",
      href: "/",
    },
    {
      id: "services",
      title: "Services",
      href: "/services",
    },
    {
      id: "about-us",
      title: "About us",
      href: "/about-us",
    },
    {
      id: "blog",
      title: "Blog",
      href: "/blog",
    },
    {
      id: "contact",
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <header className="fixed inset-x-0 top-0 z-[999]">
          <ElevationScroll {...props} open={open}>
            <AppBar
              position="fixed"
              component="nav"
              elevation={0}
              sx={(theme) => ({
                m: "auto",
                backgroundColor: "transparent !important",
                zIndex: 10,
              })}
            >
              <Toolbar
                variant="dense"
                sx={{
                  py: 2,
                  justifyContent: "center",
                  maxWidth: 1280,
                  m: "auto",
                  width: "100%",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  flex={1}
                  spacing={5}
                  sx={{
                    maxWidth: 1280,
                    ml: 0,
                  }}
                >
                  <Disclosure.Button
                    aria-label="menu"
                    className="lg:hidden absolute right-4 inline-flex items-center justify-center text-neutral-50"
                  >
                    {open ? (
                      <XMenuIcon className="md:hover:fill-primary-50 fill-neutral-50" />
                    ) : (
                      <MenuIcon className="md:hover:fill-primary-50 fill-neutral-50" />
                    )}
                  </Disclosure.Button>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    flex={1}
                    sx={{
                      ml: "0 !important",
                    }}
                  >
                    <Box
                      sx={{
                        flex: "none",
                        width: 190,
                        position: "relative",
                      }}
                    >
                      <Link aria-label="Nextjs Blog Template" href="/">
                        <Logo />
                      </Link>
                    </Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                      sx={{
                        mr: 1,
                        display: matches ? "flex" : "none",
                      }}
                    >
                      <Stack direction="row" spacing={2}>
                        {allHeaders.map((item) => {
                          return (
                            <div key={item.id} className="menu-items">
                              <NavBarButton {...item} />
                            </div>
                          );
                        })}
                      </Stack>
                    </Stack>
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{
                        display: matches ? "flex" : "none",
                        px: 4,
                        borderRadius: 0,
                        fontWeight: 700,
                        maxHeight: 48,
                      }}
                    >
                      Talk to us
                    </Button>
                  </Stack>
                </Stack>
              </Toolbar>
            </AppBar>
          </ElevationScroll>

          {/* Mobile menu button */}

          <Disclosure.Panel className="lg:hidden mt-[80px] h-[calc(100vh-80px)] bg-[rgba(0,0,0,0.8)] px-6 backdrop-blur-xl">
            <div className="flex flex-col pb-6">
              <div className="overflow-x-none grow overflow-y-auto shadow-inner">
                {allHeaders.map((item) => {
                  return (
                    <div key={item.id}>
                      <NavBarButton {...item} />
                    </div>
                  );
                })}
              </div>

              <Button
                variant="contained"
                disableElevation
                sx={{
                  mt: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: 0,
                  fontWeight: 700,
                  maxHeight: 48,
                }}
              >
                Talk to us
              </Button>
            </div>
          </Disclosure.Panel>
        </header>
      )}
    </Disclosure>
  );
}
