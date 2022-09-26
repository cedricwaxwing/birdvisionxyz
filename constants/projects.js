import GnosisGuildThumb from "../public/assets/imgs/gnosis-guild/thumb.png"
import GnosisGuildCursor from "../public/assets/imgs/gnosis-guild/cursor.svg"
import DaoDropsThumb from "../public/assets/imgs/dao-drops/thumb.png"
import DaoDropsCursor from "../public/assets/imgs/dao-drops/cursor.svg"
import SisuThumb from "../public/assets/imgs/sisu/thumb.png"
import SisuCursor from "../public/assets/imgs/sisu/cursor.svg"
import PolywrapThumb from "../public/assets/imgs/polywrap/thumb.png"
import PolywrapCursor from "../public/assets/imgs/polywrap/cursor.svg"
import ZigzagThumb from "../public/assets/imgs/zigzag/thumb.png"
import ZigzagCursor from "../public/assets/imgs/zigzag/cursor.svg"
import RanchHouseThumb from "../public/assets/imgs/ranch-house-dao/thumb.png"
import RanchHouseCursor from "../public/assets/imgs/ranch-house-dao/cursor.svg"

export const projects = {
  "gnosis-guild": {
    active: true,
    slug: "gnosis-guild",
    name: "Gnosis Guild",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    caption: `Various works from Gnosis Guild`,
    description: `The Gnosis Guild is a collective of builders and visionaries contributing to DAO tooling and community resources.`,
    tags: ["Visual Design", "Product Design", "Frontend"],
    thumb: GnosisGuildThumb,
    cursor: GnosisGuildCursor.src,
  },
  "zigzag": {
    active: true,
    slug: "zigzag",
    name: "Zigzag",
    type: "Decentralized Exchange",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    caption: `Product Design Hypersprint`,
    description: `Zigzag is an easy-to-use decentralized exchange that leverages the incredible benefits of ZK Rollups.`,
    tags: ["Product Design", "Branding",],
    thumb: ZigzagThumb,
    cursor: ZigzagCursor.src,
  },
  "polywrap": {
    active: true,
    slug: "polywrap",
    name: "Polywrap",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    caption: `Various works from Polywrap`,
    description: `Polywrap leverages WebAssembly to make web3 portable, secure, and easy to integrate across platforms.`,
    tags: ["Product Design", "Branding", "Frontend"],
    thumb: PolywrapThumb,
    cursor: PolywrapCursor.src,
  },
  "dao-drops": {
    active: true,
    slug: "dao-drops",
    name: "DAO Drops",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    caption: <>The Ethereum Foundation &amp; dOrg<br/> A Collborative Funding Project</>,
    description: `DAO Drops is a collaborative funding program from the Ethereum Foundation and dOrg that harnesses distributed knowledge for effective allocation of funds.`,
    tags: ["Product Design", "Branding"],
    thumb: DaoDropsThumb,
    cursor: DaoDropsCursor.src,
  },
  "sisu": {
    active: true,
    slug: "sisu",
    name: "SISU",
    type: "Website and Portfolio Dashboard App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    caption: `Product Design Hypersprint`,
    description: `SISU is a portfolio dashboard that unifies cross-chain assets from many
    different wallets and exchanges.`,
    tags: ["Product Design", "Branding"],
    thumb: SisuThumb,
    cursor: SisuCursor.src,
  },
  "ranch-house-dao": {
    active: false,
    slug: "ranch-house-dao",
    name: "Ranch House Dao",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    caption: `NFT Collection Branding and Artwork`,
    tags: ["Visual Design", "Branding", "Project Management"],
    thumb: RanchHouseThumb,
    cursor: RanchHouseCursor.src,
  },
};

export const getActiveProjects = () => {
  let activeProjects = Object.keys(projects).filter(
    (project) => projects[project].active
  );
  activeProjects.sort((a, b) => {
    if (projects[a].order || projects[b].order) {
      if (
        (projects[a].order && !projects[b].order) ||
        projects[a].order <= projects[b].order
      ) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  });
  return activeProjects;
}
