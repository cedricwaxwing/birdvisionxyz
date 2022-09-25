import { Link } from "@mui/material";
import { colors, typography } from "../../src/styles/theme";

export const ViewLink = ({ children, ...props }) => {
  return (
    <Link
      sx={{
        // color: colors.violet,
        fontFamily: typography.fontFamilies.extended,
        fontSize: 12,
        opacity: 0.7,
        letterSpacing: 2,
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
