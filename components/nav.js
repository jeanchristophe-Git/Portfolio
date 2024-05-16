import Image from "next/image";
import Link from "next/link";
import profilPic from '../public/profile.png';

export default function NavSection() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0  backdrop-blur-sm   z-40">
        <div className="container mx-auto max-w-2xl flex justify-between items-center p-1">
          <div>
            <Image 
              className="rounded-full w-10 h-10" 
              src={profilPic} 
              alt="Picture of the author" 
              width={40} 
              height={40} 
              placeholder="blur" 
            />
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-500 hover:text-slate-900">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-500 hover:text-slate-900">About</Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-500 hover:text-slate-900">Blog</Link>
            </li>
          </ul>
          <div>
            themeSwitch
          </div>
        </div>
      </nav>
     
    </>
  );
}