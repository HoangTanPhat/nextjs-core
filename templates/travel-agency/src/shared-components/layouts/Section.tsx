import { Box, SxProps, Theme } from "@mui/material";
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
  return (
    <Box
      sx={[
        {
          margin: "auto",
          position: "relative",
          maxWidth: fullWidth ? "none !important" : 1280,
          height: "100%",
          py: 5,
          px: fullWidth ? 0 : 3,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
