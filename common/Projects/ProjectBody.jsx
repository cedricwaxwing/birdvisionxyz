import { Typography } from "@mui/material";

export const ProjectBody = ({ children, ...props }) => {
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
