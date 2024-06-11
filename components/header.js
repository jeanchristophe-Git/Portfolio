import ConctactSection from "./contact";
import NavSection from "./nav";
import ProjectSection from "./project";
import TechnoSection from "./techno";

//icons
import { BadgeCheck } from "lucide-react";

export default function HeaderSection() {
  return (
    <div className="  "  >
      <NavSection/>
      <div className=" ml-5 md:ml-0 mt-32 w-full   " >
        <div className="flex space-x-2 items-center " >
        <h1 className="  font-medium text-slate-800 dark:text-slate-200 ">Jean Christophe Désiré Bogbé </h1>
        <BadgeCheck  className=" w-5 text-blue-600  "  />
        </div>
        <p className="text-gray-500" >Je conçois & construis des interfaces  </p>
      </div>
      <ProjectSection />
      <TechnoSection/>
      <ConctactSection/>
    </div>
  )
}
