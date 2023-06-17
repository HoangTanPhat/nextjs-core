import { NextSeo } from "next-seo";
import React from "react";
import Box from "@mui/material/Box/Box";
import dynamic from "next/dynamic";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutContainerProps {
  children: React.ReactNode;
}

export default function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <>
      <NextSeo title="Nextjs Blog Template" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
