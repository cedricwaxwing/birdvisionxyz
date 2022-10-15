import Image from "next/image";
import ReleaseLayout from "../common/Releases/ReleaseLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { releases } from "../constants/releases";
import Release1 from "../public/assets/imgs/tetrachroma/releases/1.jpg";
import Release2 from "../public/assets/imgs/tetrachroma/releases/2.jpg";
import Release3 from "../public/assets/imgs/tetrachroma/releases/3.jpg";
import Release4 from "../public/assets/imgs/tetrachroma/releases/4.jpg";
import Release5 from "../public/assets/imgs/tetrachroma/releases/5.jpg";
import Release6 from "../public/assets/imgs/tetrachroma/releases/6.jpg";
import Release7 from "../public/assets/imgs/tetrachroma/releases/7.jpg";
import Release8 from "../public/assets/imgs/tetrachroma/releases/8.jpg";
import { Box, Grid } from "@mui/material";

const release = releases["tetrachroma"];

const images = [
  Release1,
  Release2,
  Release3,
  Release4,
  Release5,
  Release6,
  Release7,
  Release8,
];

const Tetrachroma = () => {
  return (
    <ReleaseLayout release={release}>
      <Box component="section" id="tetrachroma" mt={4}>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          {images.map((Release, i) => {
            return (
              <Grid item xs={12} md={3}>
                <Image
                  lazyBoundary="500px"
                  placeholder="blur"
                  src={Release}
                  alt="Tetrachroma NFT"
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </ReleaseLayout>
  );
};

export default Tetrachroma;
