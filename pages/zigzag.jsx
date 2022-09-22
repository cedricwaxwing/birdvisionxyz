import Image from "next/image";
import ProjectLayout from "../common/ProjectLayout";
import { projects } from "../constants/projects";
import ZigzagThumb from "../public/assets/imgs/zigzag/thumb.png";

const project = projects["zigzag"];

const Zigzag = () => {
  return (
    <ProjectLayout project={project}>
      <Image
        src={ZigzagThumb}
        placeholder="blur"
        priority
        alt={project.caption}
      />
    </ProjectLayout>
  );
};

export default Zigzag;
