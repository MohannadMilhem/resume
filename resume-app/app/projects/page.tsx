"use client";

import Section from "@/components/Section";
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
    <div className="bg-black min-h-screen flex flex-col space-y-20 text-gray-300">
      <div className=" text-emerald-500 bold text-3xl pl-30 pt-20 pb-10">
        Projects
      </div>
      {projects.map((project) => (
        <Section
          key={project._id}
          title={project.title}
          body={project.description}
        />
      ))}
    </div>
  );
}
