"use client";

//icons
import { FaReact } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";

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
  ];

  const styleIcon = {
    fontSize: "2rem",
  };

  return (
    <div className=" mt-28 ">
      <h1 className="text-3xl font-semibold ">Comment puis-je vous aider ?</h1>
      <p className="text-gray-500 font-medium">
      Je conçois des expériences sur mesure pour vous, vos clients et vos projets les plus ambitieux, en partant de zéro.
      </p>
      <div className="mt-8 flex gap-3 ">
        {tecno.map((tecno) => {
          return (
            <button
              key={tecno.id}
              className=" inline-flex items-center  gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 hover:text-gray-900 duration-100 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700   "
            >
              <span className="text-3xl    ">{tecno.icon}</span>{" "}
              <p className="text-xl font-semibold ">{tecno.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
