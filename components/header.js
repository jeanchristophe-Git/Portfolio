import ConctactSection from "./contact";
import NavSection from "./nav";
import ProjectSection from "./project";
import TechnoSection from "./techno";


export default function HeaderSection() {
  return (
    <div>
      <NavSection/>
      <div className="  mt-32  " >
        <h1 className=" font-medium text-slate-800 dark:text-slate-200 " >Jean Christophe Désiré Bogbé</h1>
        <p className="text-gray-500" >Je conçois & construis des interfaces </p>
      </div>
      <ProjectSection />
      <TechnoSection/>
      <ConctactSection/>
    </div>
  )
}
