import TetrachromaThumb from "../public/assets/imgs/tetrachroma/thumb.jpeg"
import TetrachromaCursor from "../public/assets/imgs/tetrachroma/cursor.svg"
import ElementalThumb from "../public/assets/imgs/elemental/thumbnail.png"
// import TetrachromaCursor from "../public/assets/imgs/tetrachroma/cursor.svg"
import MetamorphThumb from "../public/assets/imgs/metamorph/thumbnail.png"
// import TetrachromaCursor from "../public/assets/imgs/tetrachroma/cursor.svg"

export const releases = {
  "tetrachroma": {
    active: true,
    slug: "tetrachroma",
    name: "TETRACHROMA",
    type: "Generative Art",
    date: "Oct 21, 2022",
    link: "https://www.fxhash.xyz/generative/20388",
    marketplace: "fxhash.xyz",
    iterations: 24,
    tags: ["p5js", "generative", "gan", "creative coding", "gradient mapping", "dithering"],
    description: `This generative NFT collection combines GAN imagery with custom dithering algorithms to explore what life with 4 cones might be like.`,
    thumb: TetrachromaThumb,
    cursor: TetrachromaCursor.src,
  },
  "elemental": {
    active: true,
    slug: "elemental",
    name: "Elemental",
    type: "Generative Art",
    date: "Mar 6, 2023",
    link: "https://www.fxhash.xyz/generative/25734",
    marketplace: "fxhash.xyz",
    iterations: 24,
    tags: ["p5js", "generative", "threejs", "tonejs", "nature", "3d", "interactive", "audiovisual"],
    description: `Elemental is a generative audio/visual experience that explores the essence of our natural world. Each token represents one of seven elements - fire, mineral, forest, earth, water, air, and plasma.`,
    thumb: ElementalThumb,
    cursor: TetrachromaCursor.src,
  },
  "metamorph": {
    active: true,
    slug: "metamorph",
    name: "metamorph.",
    type: "Generative Art",
    date: "Mar 24, 2023",
    link: "https://www.fxhash.xyz/generative/26211",
    marketplace: "fxhash.xyz",
    iterations: 64,
    tags: ["p5js", "generative", "seasons", "mon", "mandala", "params", "nature"],
    description: `Every single millisecond, each flower will change its colors slightly in relation to the time of the season. Each edition will is assigned with 4 palettes that the flower will transform between as the seasons pass.`,
    thumb: MetamorphThumb,
    cursor: TetrachromaCursor.src,
  },
};
