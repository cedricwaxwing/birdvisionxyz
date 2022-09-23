import { Typography } from "@mui/material";

export const SubProjectTitle = ({ children, ...props }) => {
  return (
    <Typography
      variant="h5"
      component="h2"
      sx={{ lineHeight: 1, ...props.sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};
