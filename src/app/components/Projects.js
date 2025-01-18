import Button from "./Button";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import { projectData } from "../constant/data";

function Projects() {
  return (
    <div>
      <Heading
        heading="Recent Projects"
        subHeading="Showcasing top projects highlighting expertise in design, development, and technology."
      />
      <div className="container m-auto py-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {projectData.map((item, index) => {
          return <ProjectCard key={index} item={item} />;
        })}
      </div>
      <div className="m-auto flex justify-center">
        <Button href="/projects" icon="true">
          View all
        </Button>
      </div>
    </div>
  );
}

export default Projects;
