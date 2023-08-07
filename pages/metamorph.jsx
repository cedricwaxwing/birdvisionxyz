import Image from "next/image";
import ReleaseLayout from "../common/Releases/ReleaseLayout";
import { releases } from "../constants/releases";
import Release1 from "../public/assets/imgs/metamorph/1.webp";
import Release2 from "../public/assets/imgs/metamorph/4.webp";
import Release3 from "../public/assets/imgs/metamorph/6.webp";
import Release4 from "../public/assets/imgs/metamorph/8.webp";
import Release5 from "../public/assets/imgs/metamorph/15.webp";
import Release6 from "../public/assets/imgs/metamorph/21.webp";
import Release7 from "../public/assets/imgs/metamorph/27.webp";
import Release8 from "../public/assets/imgs/metamorph/43.webp";
import { Box, Grid, Link } from "@mui/material";

const release = releases["metamorph"];

const nfts = [
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1505133",
    image: Release1,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1505143",
    image: Release2,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1505155",
    image: Release3,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1505532",
    image: Release4,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1505715",
    image: Release5,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1506889",
    image: Release6,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1516610",
    image: Release7,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1517849",
    image: Release8,
  },
];

const Elemental = () => {
  return (
    <ReleaseLayout release={release}>
      <Box component="section" id="elemental" mt={4}>
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
                    alt="Elemental NFT"
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

export default Elemental;
