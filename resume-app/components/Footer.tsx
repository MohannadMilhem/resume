import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#0F0F0F] text-white py-8 pt-10 h-60 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between ml-40 md:space-y-0 space-y-6">
        <div className="md:pl-35 space-y-6">
          <a
            href="mailto:mohannad.milhem1201@gmail.com"
            className="flex items-center gap-2 hover:underline hover:text-emerald-500"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
            mohannad.milhem1201@gmail.com
          </a>
          <a
            href="tel:+9720542341808"
            className="flex items-center gap-2 hover:underline hover:text-emerald-500 "
          >
            <FontAwesomeIcon icon={faPhone} />
            +972-54-234-1808
          </a>
        </div>
        <div className="md:pr-40 space-y-6">
          <a
            href="https://www.linkedin.com/in/mohannad-milhem-a39710246"
            className="flex items-center gap-2 hover:underline hover:text-emerald-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            Mohannad Milhem
          </a>
          <a
            href="https://github.com/MohannadMilhem"
            className="flex items-center gap-2 hover:underline hover:text-emerald-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            Mohannd Milhem
          </a>
        </div>
      </div>
      <div className="pt-10">
        All copy rights are reserved to Mohannad Milhem
      </div>
    </div>
  );
}
