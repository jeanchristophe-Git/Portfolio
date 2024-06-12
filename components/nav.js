import Image from "next/image";
import Link from "next/link";
import profilPic from '../public/profile.png';
import DarkModeToggle from "./dark-mode-toogle";

export default function NavSection() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0  backdrop-blur-sm mx-3  z-40">
        <div className="container mx-auto  max-w-2xl flex justify-between items-center p-3 md:p-1  ">
          <div>
            <Image 
              className="rounded-full w-10 h-10  " 
              src={profilPic} 
              alt="Picture of the author" 
              width={40} 
              height={40} 
              placeholder="blur" 
            />
          </div>
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-slate-500  dark:text-white  dark:hover:text-slate-500 ">Acceuil</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-slate-500 dark:text-slate-100  dark:hover:text-slate-500  ">A propos</Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-700 hover:text-slate-500 dark:text-slate-100  dark:hover:text-slate-500  ">Blog</Link>
            </li>
          </ul>
           <DarkModeToggle/>
        </div>
      </nav>
     
    </>
  );
}
