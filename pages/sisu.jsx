import Image from "next/image";
import ProjectLayout from "../common/ProjectLayout";
import { projects } from "../constants/projects";
import SisuThumb from "../public/assets/imgs/sisu/thumb.png";

const project = projects["sisu"];

const Sisu = () => {
  return (
    <ProjectLayout project={project}>
      <Image
        src={SisuThumb}
        placeholder="blur"
        priority
        alt={project.caption}
      />
    </ProjectLayout>
  );
};

export default Sisu;
