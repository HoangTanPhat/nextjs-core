import SectionTitle from "@/shared-components/SectionTitle";
import Section from "@/shared-components/layouts/Section";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@mui/material/Button";
import { useState } from "react";
import FormField from "@/shared-components/FormField";
import { useMediaQuery } from "@mui/material";

import Box from "@mui/material/Box";
import Image from "next/image";

export interface ContactFormData {
  name: string;
  mail: string;
  phone?: number | undefined;
  role: string;
  reason: string;
  message: string;
}

const schemaSubmitContactForm = yup.object({
  name: yup.string().required("Please fill name"),
  mail: yup.string().required("Please fill email"),
  message: yup.string().required("Please fill"),
  role: yup.string().required("Please fill"),
  reason: yup.string().required("Please fill"),
});

export default function ContactFormSection() {
  const desktopView = useMediaQuery("(min-width:1024px)");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      mail: "",
      phone: undefined,
      role: "",
      reason: "",
      message: "",
    },
    resolver: yupResolver(schemaSubmitContactForm),
  });
  const { register, handleSubmit, watch } = form;

  const nameValue = watch("name");
  const phoneValue = watch("phone");
  const mailValue = watch("mail");
  const roleValue = watch("role");
  const messageValue = watch("message");

  const handleContact = () => {};

  return (
    <Section sx={{ py: 10 }}>
      <SectionTitle
        title="Find out the approximate cots of your travel plan"
        sx={{
          textAlign: "left",
          maxWidth: desktopView ? "50%" : "none",
          m: 0,
          fontSize: 36,
        }}
      />
      <Grid
        container
        sx={(theme) => ({
          mt: 4,
          boxShadow: theme.shadows[24],
        })}
      >
        <Grid item xs={0} sm={5}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src="/images/contact-form.jpeg"
              alt="Contact form"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "32px",
              padding: 40,
            }}
            onSubmit={handleSubmit(handleContact)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormField
                  label="Sender name"
                  placeholder="Hoang Tan Phat"
                  value={nameValue}
                  register={register("name")}
                />
                <FormField
                  label="Phone"
                  placeholder="0818292836"
                  value={phoneValue}
                  register={register("phone")}
                  sx={{
                    mt: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  label="Email"
                  placeholder="abc@gmail.com"
                  value={mailValue}
                  register={register("mail")}
                />
              </Grid>
            </Grid>
            <FormField
              label="Message"
              placeholder="Let us know your message"
              value={messageValue}
              register={register("message")}
              multiline
            />

            <Button
              variant="contained"
              size="medium"
              type="submit"
              disableElevation
              //   loading={isLoading || isSubmitting}
              //   endIcon={<ArrowRightIcon />}
              sx={(theme) => ({
                fontWeight: 700,
                ml: "auto",
                backgroundColor: theme.palette.primary.main,
                px: 3,
                py: 2,
                borderRadius: 0,
                fontSize: 14,
                width: "max-content",
                "&.Mui-disabled": {
                  color: "white",
                  opacity: 0.4,
                },
              })}
              //   disabled={!isValid}
            >
              Send request
            </Button>
          </form>
        </Grid>
      </Grid>
    </Section>
  );
}
