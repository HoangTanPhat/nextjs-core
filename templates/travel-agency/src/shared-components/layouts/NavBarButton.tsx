import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import React from "react";

interface NavBarButtonProps {
  title: string;
  href?: string;
  icon?: string;
  activeIcon?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export default function NavBarButton({
  title = "",
  href = "/",
}: NavBarButtonProps) {
  const desktopView = useMediaQuery("(min-width:1024px)");

  return (
    <Link href={href} legacyBehavior title={title} aria-label={title}>
      <Button
        fullWidth
        sx={(theme) => ({
          color: "white",
          justifyContent: desktopView ? "center" : "flex-start",
          minHeight: 50,
          position: "relative",
          textTransform: "capitalize",
          borderRadius: 0,
          "&:hover": {
            backgroundColor: "transparent",
            "&:after": {
              content: "''",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: theme.palette.primary.main,
            },
          },
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        })}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={(theme) => ({
            fontSize: 20,
          })}
        >
          {title}
        </Typography>
      </Button>
    </Link>
  );
}
