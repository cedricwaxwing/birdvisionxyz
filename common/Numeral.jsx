import { Typography } from "@mui/material";
import { colors, typography } from "../src/styles/theme";

export const Numeral = ({ number, sx }) => {
  console.log(number);
  return (
    <Typography
      sx={{
        borderBottom: `2px solid ${colors.violet}`,
        color: colors.violet,
        display: "inline",
        fontFamily: typography.fontFamilies.displaySans,
        fontWeight: 700,
        lineHeight: 1,
        pb: 1,
        ...sx,
      }}
    >
      {number.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
    </Typography>
  );
};
