import TetrachromaThumb from "../public/assets/imgs/tetrachroma/thumb.jpeg"
import TetrachromaCursor from "../public/assets/imgs/tetrachroma/cursor.svg"

export const releases = {
  "tetrachroma": {
    active: true,
    slug: "tetrachroma",
    name: "TETRACHROMA",
    type: "Generative Art",
    date: "Oct 21, 2022",
    tags: ["p5js", "generative", "gan", "creative coding", "gradient mapping", "dithering"],
    description: `This generative NFT collection combines GAN imagery with custom dithering algorithms to explore what life with 4 cones might be like.`,
    thumb: TetrachromaThumb,
    cursor: TetrachromaCursor.src,
  },
};

// export const getActiveRelease = () => {
//   let activeReleases = Object.keys(releases).filter(
//     (project) => releases[project].active
//   );
//   activeReleases.sort((a, b) => {
//     if (releases[a].order || releases[b].order) {
//       if (
//         (releases[a].order && !releases[b].order) ||
//         releases[a].order <= releases[b].order
//       ) {
//         return -1;
//       } else {
//         return 1;
//       }
//     } else {
//       return 1;
//     }
//   });
//   return activeProjects;
// }
