import { SxProps, Theme } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form/dist/types";

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: any;
  register?: UseFormRegisterReturn;
  sx?: SxProps<Theme>;
  multiline?: boolean;
}

export default function FormField({
  label,
  placeholder,
  value,
  register,
  sx = [],
  multiline = false,
}: FormFieldProps) {
  return (
    <FormControl
      sx={[
        {
          width: "100%",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography
        component="label"
        fontWeight="bold"
        sx={(theme) => ({
          color: theme.palette.grey[500],
          fontSize: 16,
        })}
      >
        {label}
      </Typography>
      <TextField
        fullWidth
        variant="filled"
        type="text"
        hiddenLabel
        size="small"
        required
        {...register}
        value={value}
        multiline={multiline}
        placeholder={placeholder}
        rows={multiline ? 4 : undefined}
        sx={(theme) => ({
          marginTop: 1,
          ".MuiFilledInput-root": {
            py: 1,
            "&:before": {
              border: "none",
            },

            "&.Mui-focused": {
              ".MuiOutlinedInput-notchedOutline": {
                span: {
                  color: theme.palette.grey[700],
                },
              },
            },
          },

          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[300],
            borderWidth: 2,
          },

          ".MuiFormHelperText-root": {
            color: theme.palette.grey[700],
          },
        })}
      />
    </FormControl>
  );
}
