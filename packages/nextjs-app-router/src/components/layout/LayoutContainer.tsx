"use client";
import { NextSeo } from "next-seo";
import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box/Box";

interface LayoutContainerProps {
  children: React.ReactNode;
}

export default function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <>
      <NextSeo title="Nextjs Blog Template" />
      <Header />
      <Box>{children}</Box>
      {/* <Footer /> */}
    </>
  );
}
