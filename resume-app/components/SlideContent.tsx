"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Section from "./Section";
import { useEffect, useState } from "react";
export default function SlideContent() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Section
            title="About Me"
            body="Motivated Programmer with experience in software and web development.
        Served as a programmer in the IDF, gaining expertise in coding,
        debugging, and deploying scalable solutions. Skilled in front-end and
        back-end development with proficiency in multiple languages and
        frameworks. Seeking a full-time software development role"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Section
            title="Seeking"
            body="A full-time or part-time position where I can challenge
        myself by solving new and complex problems. I'm particularly interested
        in roles such as Full-Stack Developer, Backend Developer, Frontend
        Developer, Application Developer, Software Engineer, or Software
        Developer — but I'm also open to other opportunities."
            ml="ml-60"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Section
            title="Skills"
            body="Strong experience in both frontend and backend development using React, Next.js, Node.js, TypeScript, and JavaScript. Additionally, possess solid knowledge and practical experience in C#, Python, and Java, along with familiarity and working experience in C++ and C. Excellent knowledge of databases, including MongoDB and PostgreSQL."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
