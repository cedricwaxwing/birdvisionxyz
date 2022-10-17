import Image from "next/image";
import ReleaseLayout from "../common/Releases/ReleaseLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { releases } from "../constants/releases";
import Release1 from "../public/assets/imgs/tetrachroma/releases/1.jpeg";
import Release2 from "../public/assets/imgs/tetrachroma/releases/2.jpeg";
import Release3 from "../public/assets/imgs/tetrachroma/releases/3.jpeg";
import Release4 from "../public/assets/imgs/tetrachroma/releases/4.jpeg";
import Release5 from "../public/assets/imgs/tetrachroma/releases/5.jpeg";
import Release6 from "../public/assets/imgs/tetrachroma/releases/6.jpeg";
import Release7 from "../public/assets/imgs/tetrachroma/releases/7.jpeg";
import Release8 from "../public/assets/imgs/tetrachroma/releases/8.jpeg";
import { Box, Grid, Link } from "@mui/material";

const release = releases["tetrachroma"];

const nfts = [
  {
    link: "https://www.fxhash.xyz/gentk/1229772",
    image: Release1,
  },
  {
    link: "https://www.fxhash.xyz/gentk/1229762",
    image: Release2,
  },
  {
    link: "https://www.fxhash.xyz/gentk/1229766",
    image: Release3,
  },
  {
    link: "https://www.fxhash.xyz/gentk/1229767",
    image: Release4,
  },
  {
    link: "https://www.fxhash.xyz/gentk/1229771",
    image: Release5,
  },
  {
    link: "https://www.fxhash.xyz/gentk/1229768",
    image: Release6,
  },
  {
    link: "https://www.fxhash.xyz/gentk/1229799",
    image: Release7,
  },
  {
    link: "https://www.fxhash.xyz/gentk/1229778",
    image: Release8,
  },
];

const Tetrachroma = () => {
  return (
    <ReleaseLayout release={release}>
      <Box component="section" id="tetrachroma" mt={4}>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          {nfts.map((nft, i) => {
            return (
              <Grid item xs={12} md={3} key={i}>
                <Link
                  href={nft.link}
                  target="_blank"
                  rel="noredirect"
                  sx={{
                    "& span": {
                      transition: "all 0.25s ease-in-out",
                      "&:hover": {
                        boxShadow: `0 16px 24px rgba(0,0,0,0.25)`,
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  <Image
                    lazyBoundary="500px"
                    placeholder="blur"
                    src={nft.image}
                    alt="Tetrachroma NFT"
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </ReleaseLayout>
  );
};

export default Tetrachroma;
