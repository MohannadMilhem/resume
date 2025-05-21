import Section from "@/components/Section";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
config.autoAddCss = false;

export default function HomePage() {
  return (
    <div className="bg-black pb-25">
      <div className="flex flex-row-reverse justify-between  ">
        <Image
          className=""
          src="/images/Me-b-w.png"
          alt="Me"
          width={400}
          height={400}
        />
        <div className="flex flex-col pt-50 space-y-18">
          <Section
            title="About Me"
            body="Motivated Programmer with experience in software and web development.
        Served as a programmer in the IDF, gaining expertise in coding,
        debugging, and deploying scalable solutions. Skilled in front-end and
        back-end development with proficiency in multiple languages and
        frameworks. Seeking a full-time software development role"
          />
          <Section
            title="Seeking"
            body="A full-time or part-time position where I can challenge
        myself by solving new and complex problems. I'm particularly interested
        in roles such as Full-Stack Developer, Backend Developer, Frontend
        Developer, Application Developer, Software Engineer, or Software
        Developer — but I'm also open to other opportunities."
            ml="ml-60"
          />
          <Section
            title="Skills"
            body="Strong experience in both frontend and backend development using React, Next.js, Node.js, TypeScript, and JavaScript. Additionally, possess solid knowledge and practical experience in C#, Python, and Java, along with familiarity and working experience in C++ and C. Excellent knowledge of databases, including MongoDB and PostgreSQL."
          />
        </div>
      </div>
    </div>
  );
}
