"use client";


//icons
import { FaReact } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

export default function TechnoSection() {
  const tecno = [
    {
      id: 1,
      name: "React",
      icon: <FaReact />,
    },
    {
      id: 2,
      name: "NextJS",
      icon: <SiNextdotjs />,
    },
    {
      id: 3,
      name: "Javascript",
      icon: <IoLogoJavascript />,
    },
    {
      id: 4,
      name: "Supabase",
      icon: <RiSupabaseLine />,
    },
    {
      id: 5,
      name: "Github",
      icon:  <FaGithub />
,
    },
    {
      id: 6,
      name: "Sass",
      icon:  <SiSass />
,
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon:  <SiTailwindcss />
,
    },
    {
      id: 6,
      name: "TypeScript",
      icon:  <SiTypescript />
,
    },
    {
      id: 6,
      name: "Firebase",
      icon:  <IoLogoFirebase />
,
    },
  ];

  const styleIcon = {
    fontSize: "2rem",
  };

  return (
    <div className=" mt-28 p-5 md:p-0  ">
      <h1 className="text-3xl font-semibold ">Comment puis-je vous aider ?</h1>
      <p className="text-gray-500 font-medium mt-2 ">
      Je suis spécialisé dans la conception d'expériences personnalisées pour vous, vos clients et vos projets les plus ambitieux, en commençant de zéro.
      </p>
      <div className="mt-8 grid  grid-cols-2  md:grid-cols-4   gap-1">
        {tecno.map((tecno) => {
          return (
            <button
              key={tecno.id}
              className=" flex  items-center  gap-2 py-2 px-4 me-2 mb-2 text-sm font-medium border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500  "
            >
              <span className=" text-2xl md:text-2xl    ">{tecno.icon}</span>{" "}
              <p className=" text-sm md:text-md font-semibold ">{tecno.name}</p>
            </button>
            
          );
        })}
      </div>
    </div>
  );
}
