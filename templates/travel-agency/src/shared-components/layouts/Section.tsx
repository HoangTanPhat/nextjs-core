import { Box, SxProps, Theme, useMediaQuery } from "@mui/material";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}
export default function Section({
  sx = [],
  children,
  fullWidth,
}: SectionProps) {
  const desktopView = useMediaQuery("(min-width:1024px)");
  return (
    <Box
      sx={[
        {
          margin: "auto",
          position: "relative",
          maxWidth: fullWidth ? "none !important" : 1280,
          height: "100%",
          py: desktopView ? 5 : 3,
          px: fullWidth ? 0 : !desktopView ? 2 : 3,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
