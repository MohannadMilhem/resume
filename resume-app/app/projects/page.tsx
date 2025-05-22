"use client";

import ProjectSection from "@/components/ProjectSection";
import { useEffect, useState } from "react";

type Project = {
  _id: string;
  title: string;
  description: string;
  githubLink?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/getAllProjects", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  console.log(projects);

  return (
    <div className="bg-black min-h-screen flex flex-col space-y-20 text-gray-300 pb-20">
      <div className=" text-emerald-500 bold text-5xl pl-30 pt-20 pb-10 bold">
        Projects
      </div>
      {projects.map((project) => (
        <div key={project._id}>
          <ProjectSection
            title={project.title}
            description={project.description}
          />
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="ml-40 text-2xl bold hover:underline hover:text-emerald-300"
            >
              Go To Github!
            </a>
          )}
        </div>
      ))}

      <ProjectSection
        title="More to come"
        description="This is not all!! more projects will be uploaded soon"
      />
    </div>
  );
}
