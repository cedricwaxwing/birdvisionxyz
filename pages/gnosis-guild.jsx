import Image from "next/image";
import ProjectLayout from "../common/ProjectLayout";
import { projects } from "../constants/projects";
import { Typography } from "@mui/material";
import GnosisGuild1 from "../public/assets/imgs/gnosis-guild/thumb.png";
import { typography } from "../src/styles/theme";

const project = projects["gnosis-guild"];

const Body1 = () => {
  return (
    <Typography
      variant="body1"
      fontFamily={typography.fontFamilies.serif}
      sx={{
        mt: 4,
      }}
    >
      Once Graphy’s brand language was set in motion, we discovered and made the
      decision that creators on the platform should have their own visual voice
      to share their weird and wonderful ideas. A one-size-fits-all, centralised
      brand identity and language would not represent the diverse genres of
      content on the platform.
    </Typography>
  );
};

const Body2 = () => {
  return (
    <Typography
      variant="body1"
      fontFamily={typography.fontFamilies.serif}
      sx={{
        mt: 4,
      }}
    >
      To execute this, we designed a series of guiding principles and visuals
      for Graphers to put together their own Graphies, cover art and promotional
      material. We led this effort from the front, setting the quality bar of
      high by designing the narratives, visuals and motion for several Graphy
      Originals, graphies conceived, produced and directed in-house.
    </Typography>
  );
};

const Body = () => {
  return (
    <>
      <Body1 />
      <Body2 />
    </>
  );
};

project.body = <Body />;
const GnosisGuild = () => {
  return (
    <ProjectLayout project={project}>
      <Image
        src={GnosisGuild1}
        placeholder="blur"
        priority
        alt={project.caption}
      />
    </ProjectLayout>
  );
};

export default GnosisGuild;
