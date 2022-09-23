import { Typography } from "@mui/material";

export const SubProjectBody = ({ children, ...props }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        mt: 3,
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
