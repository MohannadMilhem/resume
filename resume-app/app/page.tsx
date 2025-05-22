import Slide from "@/components/Slide";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";

config.autoAddCss = false;

export default function HomePage() {
  return (
    <div className="bg-black pb-25 min-h-screen">
      <div className="flex flex-row-reverse justify-between pt-30 ">
        <Image
          className=""
          src="/images/Me-b-w.png"
          alt="Me"
          width={400}
          height={400}
        />

        <Slide />
      </div>
    </div>
  );
}
