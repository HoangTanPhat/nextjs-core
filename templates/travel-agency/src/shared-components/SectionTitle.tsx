import { SxProps, Theme, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

interface SectionTitleProps {
  title: string;
  sx?: SxProps<Theme>;
}
export default function SectionTitle({ sx = [], title }: SectionTitleProps) {
  const desktopView = useMediaQuery("(min-width:1024px)");
  return (
    <Typography
      variant="h2"
      fontSize={desktopView ? 36 : 24}
      maxWidth={desktopView ? "60%" : "none"}
      textAlign="center"
      fontWeight="bold"
      margin="auto"
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
    >
      {title}
    </Typography>
  );
}
