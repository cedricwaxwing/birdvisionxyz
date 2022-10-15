import { Typography } from "@mui/material";
import { typography } from "../src/styles/theme";

export const Context = ({ children, ...props }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontFamily: typography.fontFamilies.sans,
        fontSize: 12,
        mt: 0.5,
        letterSpacing: 1,
        textTransform: "uppercase",
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
