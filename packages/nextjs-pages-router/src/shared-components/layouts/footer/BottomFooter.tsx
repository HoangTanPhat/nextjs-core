import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import Image from "next/image";

export default function BottomFooter() {
  return (
    <div className="pt-4 sm:pt-8">
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="!flex-col sm:!flex-row"
      >
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.grey[50],
          })}
        >
          Copyright © {new Date().getFullYear()} Hoàng Tấn Phát
        </Typography>

        <Stack direction="row" gap={1}>
          <Image
            src="/icons/facebook-icon.png"
            width={32}
            height={32}
            alt="Facebook logo"
          />
          <Image
            src="/icons/instagram-icon.png"
            width={32}
            height={32}
            alt="Instagram logo"
          />
          <Image
            src="/icons/linkedin-icon.png"
            width={32}
            height={32}
            alt="Linkedin logo"
          />
        </Stack>
      </Stack>
    </div>
  );
}
