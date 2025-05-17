import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-black text-white py-8 mt-10 h-50 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="md:pl-40 space-y-6">
          <a
            href="mailto:mohannad.milhem1201@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
            mohannad.milhem1201@gmail.com
          </a>
          <a
            href="tel:+9720542341808"
            className="flex items-center gap-2 hover:underline "
          >
            <FontAwesomeIcon icon={faPhone} />
            +972-54-234-1808
          </a>
        </div>
        <div className="pr-40 space-y-6">
          <a
            href="www.linkedin.com/in/mohannad-milhem-a39710246"
            className="flex items-center gap-2 hover:underline"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            Mohannad Milhem
          </a>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
}
