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

export interface SlugProps {
  slug: "polywrap" | "wand-nft" | "dao-drops" | "zodiac-protocol" | "ranch-house-dao" | "tabula";
}

export const projects = {
  "gnosis-guild": {
    slug: "gnosis-guild",
    name: "Gnosis Guild",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    propsTo: ["Sam Panter"],
    caption: `Various works from Gnosis Guild`,
    description: `The Gnosis Guild is a collective of builders and visionaries contributing to DAO tooling and community resources.`,
    tags: ["Visual Design", "Product Design", "Frontend"],
    thumb: GnosisGuildThumb,
    cursor: GnosisGuildCursor.src,
  },
  "dao-drops": {
    slug: "dao-drops",
    name: "DAO Drops",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    propsTo: ["Sam Panter"],
    caption: `Gnosis Guild caption`,
    tags: ["Product Design", "Branding"],
    thumb: DaoDropsThumb,
    cursor: DaoDropsCursor.src,
  },
  "sisu": {
    slug: "sisu",
    name: "SISU",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    propsTo: ["Sam Panter"],
    caption: `Gnosis Guild caption`,
    tags: ["Product Design", "Branding"],
    thumb: SisuThumb,
    cursor: SisuCursor.src,
  },
  "polywrap": {
    slug: "polywrap",
    name: "Polywrap",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    propsTo: ["Sam Panter"],
    caption: `Gnosis Guild caption`,
    tags: ["Product Design", "Branding", "Frontend"],
    thumb: PolywrapThumb,
    cursor: PolywrapCursor.src,
  },
  "zigzag": {
    slug: "zigzag",
    name: "Zigzag Exchange",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    propsTo: ["Sam Panter"],
    caption: `Gnosis Guild caption`,
    tags: ["Product Design", "Branding"],
    thumb: ZigzagThumb,
    cursor: ZigzagCursor.src,
  },
  "ranch-house-dao": {
    slug: "ranch-house-dao",
    name: "Ranch House Dao",
    type: "Minting App",
    date: "2022",
    myRole: ["Logo Design", "Illustration", "Branding Identity", "Visual Design", "Naming", "Tokenomics"],
    propsTo: ["Sam Panter"],
    caption: `Gnosis Guild caption`,
    tags: ["Visual Design", "Branding", "Project Management"],
    thumb: RanchHouseThumb,
    cursor: RanchHouseCursor.src,
  },
};