import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
function ProjectCard({ item, index }) {
  return (
    <>
      <div className="group relative overflow-hidden rounded-lg">
        {/* Image */}
        <Image
          key={index}
          alt={item.title}
          className="object-cover w-full h-full"
          height={400}
          src={`/assets/project/${item.src}`}
          width={400}
        />

        {/* Project Info */}
        <div className=" absolute inset-0 bg-gray-500 bg-opacity-75 backdrop-blur text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <div className=" mb-4  absolute left-5 bottom-2">
            <h3 className="text-base leading-3 mb-4 font-bold">{item.title}</h3>
            <p className="text-sm mt-2">{item.tech.join(", ")}</p>
          </div>

          {/* Links */}
          <div className="project-link flex gap-4 absolute right-5 top-5">
            <Link href={item.githubLink} target="_blank">
              <FaGithub size={22} />
            </Link>

            <Link href={`/projects/${item.slug}`} size={30} target="_blank">
              <FaGlobe size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
