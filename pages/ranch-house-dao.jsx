import Image from "next/image";
import ProjectLayout from "../common/Projects/ProjectLayout";
import { projects } from "../constants/projects";
import RanchHouseDaoThumb from "../public/assets/imgs/ranch-house-dao/thumb.png";

const project = projects["ranch-house-dao"];

const RanchHouseDao = () => {
  return (
    <ProjectLayout project={project}>
      <Image
        lazyBoundary="500px"
        src={RanchHouseDaoThumb}
        placeholder="blur"
        alt={project.caption}
      />
    </ProjectLayout>
  );
};

export default RanchHouseDao;
