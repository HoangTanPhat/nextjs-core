import React from "react";
import TopFooter from "./footer/TopFooter";
import BottomFooter from "./footer/BottomFooter";
import Divider from "@mui/material/Divider/Divider";

export default function Footer() {
  return (
    <footer className="lg:pt-14 lg:pb-9 z-20 bg-black">
      <div className="m-auto flex max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <TopFooter />
        <Divider
          sx={{
            pt: 2,
            borderColor: "#353945",
          }}
        />
        <BottomFooter />
      </div>
    </footer>
  );
}
