"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
function ProjectCard({ index, item }) {
  const handleProjectClick = (url, isJavaScript) => {
    if (isJavaScript) {
      alert("You’re already on this site! 🎉 Welcome back, rockstar! 🤩");
    } else {
      window.location.href = url;
    }
  };
  return (
    <>
      <div className="group relative overflow-hidden rounded-lg">
        {/* Image */}
        <Image
          alt={item.title}
          className="object-cover w-full h-full"
          height={400}
          key={index}
          quality={100}
          src={`/assets/project/${item.src}`}
          width={400}
        />

        {/* Project Info */}
        <div className=" absolute inset-0 bg-[#000] bg-opacity-80 cursor-pointer  text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <div className="mb-4  absolute left-5 right-5 bottom-2">
            <h3 className="text-base leading-3 mb-4 font-bold">{item.title}</h3>
            <p className="text-sm mt-2 capitalize">{item.tech.join(", ")}</p>
          </div>

          {/* Links */}
          <div className="project-link flex gap-1 absolute right-0 top-5">
            {item.isGithubLink && (
              <Link
                className="w-10 h-10"
                href={item.githubLink}
                target="_blank"
              >
                <FaGithub size={22} />
              </Link>
            )}

            <button
              className="w-10 h-10 p-0 -mt-[10px]"
              onClick={() => handleProjectClick(item.url, item.isJavaScript)}
            >
              <FaGlobe size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
