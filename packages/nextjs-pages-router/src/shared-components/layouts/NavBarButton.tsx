import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
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
  return (
    <Link href={href} passHref title={title} aria-label={title} scroll={false}>
      <Button
        fullWidth
        sx={(theme) => ({
          color: "white",
          justifyContent: "center",
          minHeight: 50,
          position: "relative",
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
            fontSize: 16,
          })}
        >
          {title}
        </Typography>
      </Button>
    </Link>
  );
}
