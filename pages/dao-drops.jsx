import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { projects } from "../constants/projects";
import DaoDropsThumb from "../public/assets/imgs/dao-drops/thumb.png";

const project = projects["dao-drops"];

const DaoDrops = () => {
  return (
    <ProjectLayout project={project}>
      <Image
        src={DaoDropsThumb}
        placeholder="blur"
        priority
        alt={project.caption}
      />
    </ProjectLayout>
  );
};

export default DaoDrops;
