import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

interface SectionTitleProps {
  title: string;
  sx?: SxProps<Theme>;
}
export default function SectionTitle({ sx = [], title }: SectionTitleProps) {
  return (
    <Typography
      variant="h2"
      fontSize={36}
      maxWidth="60%"
      textAlign="center"
      fontWeight="bold"
      margin="auto"
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
    >
      {title}
    </Typography>
  );
}
