import Image from "next/image";
import ProjectLayout from "../common/ProjectLayout";
import { projects } from "../constants/projects";
import PolywrapThumb from "../public/assets/imgs/polywrap/thumb.png";

const project = projects["polywrap"];

const Polywrap = () => {
  return (
    <ProjectLayout project={project}>
      <Image src={PolywrapThumb} alt={project.caption} />
    </ProjectLayout>
  );
};

export default Polywrap;
