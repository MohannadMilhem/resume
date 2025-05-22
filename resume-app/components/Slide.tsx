"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Section from "./Section";
import "../styles.css";

export default function Slide() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wait for client hydration
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Swiper
      centeredSlides={true}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper custom-pagination"
    >
      <SwiperSlide>
        <div className="flex items-center justify-center h-full w-full">
          <Section
            title="About Me"
            body="Motivated Programmer with experience in software and web development.
        Served as a programmer in the IDF, gaining expertise in coding,
        debugging, and deploying scalable solutions. Skilled in front-end and
        back-end development with proficiency in multiple languages and
        frameworks. Seeking a full-time software development role"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center justify-center h-full w-full">
          <Section
            title="Seeking"
            body="A full-time or part-time position where I can challenge
        myself by solving new and complex problems. I'm particularly interested
        in roles such as Full-Stack Developer, Backend Developer, Frontend
        Developer, Application Developer, Software Engineer, or Software
        Developer — but I'm also open to other opportunities."
            ml="ml-60"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center h-full w-full">
          <Section
            title="Skills"
            body="Strong experience in both frontend and backend development using React, Next.js, Node.js, TypeScript, and JavaScript. Additionally, possess solid knowledge and practical experience in C#, Python, and Java, along with familiarity and working experience in C++ and C. Excellent knowledge of databases, including MongoDB and PostgreSQL."
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
