import { Link } from "@mui/material";
import { typography } from "../../src/styles/theme";

export const ViewLink = ({ children, ...props }) => {
  return (
    <Link
      underline="none"
      sx={{
        fontFamily: typography.fontFamilies.extended,
        fontSize: 14,
        opacity: 0.5,
        letterSpacing: 3,
        textTransform: "uppercase",
        transition: "all 0.25s ease-in-out",
        "&:hover": {
          opacity: 1,
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Link>
  );
};
