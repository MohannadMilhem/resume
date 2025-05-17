import Section from "@/components/Section";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function HomePage() {
  return (
    <div className="space-y-10 flex flex-col">
      <div className="p-20">
        <Section
          title="About Me..."
          body="Motivated Programmer with experience in software and web development.
        Served as a programmer in the IDF, gaining expertise in coding,
        debugging, and deploying scalable solutions. Skilled in front-end and
        back-end development with proficiency in multiple languages and
        frameworks. Seeking a full-time software development role"
        />
      </div>
      <div className="pl-20 md:pl-160">
        <Section
          title="Seeking..."
          body="I'm seeking a full-time or part-time position where I can challenge
        myself by solving new and complex problems. I'm particularly interested
        in roles such as Full-Stack Developer, Backend Developer, Frontend
        Developer, Application Developer, Software Engineer, or Software
        Developer — but I'm also open to other opportunities."
        />
      </div>
      <div className="p-20">
        <Section
          title="Skills"
          body="Strong experience in both frontend and backend development using React, Next.js, Node.js, TypeScript, and JavaScript. Additionally, possess solid knowledge and practical experience in C#, Python, and Java, along with familiarity and working experience in C++ and C. Excellent knowledge of databases, including MongoDB and PostgreSQL."
        />
      </div>
    </div>
  );
}
