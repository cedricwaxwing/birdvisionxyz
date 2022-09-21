import GnosisGuildThumb from "../public/assets/imgs/gnosis-guild/thumb.png"
import DaoDropsThumb from "../public/assets/imgs/dao-drops/thumb.png"
import SisuThumb from "../public/assets/imgs/sisu/thumb.png"
import PolywrapThumb from "../public/assets/imgs/polywrap/thumb.png"
import ZigzagThumb from "../public/assets/imgs/zigzag/thumb.png"
import RanchHouseThumb from "../public/assets/imgs/ranch-house-dao/thumb.png"

export interface SlugProps {
  slug: "polywrap" | "wand-nft" | "dao-drops" | "zodiac-protocol" | "ranch-house-dao" | "tabula";
}

export const projects = {
  "gnosis-guild": {
    slug: "gnosis-guild",
    name: "Gnosis Guild",
    client: "Gnosis Guild",
    tags: ["Visual Design", "Product Design", "Frontend"],
    thumb: GnosisGuildThumb,
  },
  "dao-drops": {
    slug: "dao-drops",
    name: "DAO Drops",
    client: "Ethereum Foundation",
    tags: ["Product Design", "Branding"],
    thumb: DaoDropsThumb,
  },
  "sisu": {
    slug: "sisu",
    name: "SISU",
    client: "SISU",
    tags: ["Product Design", "Branding"],
    thumb: SisuThumb,
  },
  "polywrap": {
    slug: "polywrap",
    name: "Polywrap",
    client: "Polywrap",
    tags: ["Product Design", "Branding", "Frontend"],
    thumb: PolywrapThumb,
  },
  "zigzag": {
    slug: "zigzag",
    name: "Zigzag Exchange",
    client: "Zigzag Labs",
    tags: ["Product Design", "Branding"],
    thumb: ZigzagThumb,
  },
  "ranch-house-dao": {
    slug: "ranch-house-dao",
    name: "Ranch House Dao",
    client: "Co-Founder",
    tags: ["Visual Design", "Branding", "Project Management"],
    thumb: RanchHouseThumb,
  },
};