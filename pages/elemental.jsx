import Image from "next/image";
import ReleaseLayout from "../common/Releases/ReleaseLayout";
import { ProjectBody } from "../common/Projects/ProjectBody";
import { releases } from "../constants/releases";
import Release1 from "../public/assets/imgs/elemental/1.webp";
import Release2 from "../public/assets/imgs/elemental/2.webp";
import Release3 from "../public/assets/imgs/elemental/3.webp";
import Release4 from "../public/assets/imgs/elemental/4.webp";
import Release5 from "../public/assets/imgs/elemental/5.webp";
import Release6 from "../public/assets/imgs/elemental/6.webp";
import Release7 from "../public/assets/imgs/elemental/7.webp";
import Release8 from "../public/assets/imgs/elemental/8.webp";
import { Box, Grid, Link } from "@mui/material";

const release = releases["elemental"];

const nfts = [
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1580962",
    image: Release1,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1580963",
    image: Release2,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1580955",
    image: Release3,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1580957",
    image: Release4,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1580967",
    image: Release5,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1581254",
    image: Release6,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1581762",
    image: Release7,
  },
  {
    link: "https://www.fxhash.xyz/gentk/FX0-1594952",
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
