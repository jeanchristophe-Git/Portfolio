import NavSection from "@/components/nav";
//icons
import { ArrowUpRight } from "lucide-react";
// image
import logo from '../../public/profile.png'
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import Homee from '../../public/homee.png'

import Bolle from '../../public/Bollestore.png'
import ImageSection from "@/components/image";

export default function PageAbout() {
  // Tableau contenant les informations "À propos de moi"
  const aboutMe = [
    {
      id: 1,
      status: "Moi",
      name: "Jean-Christophe",
      location: "Abidjan",
      school: "ESMA",
      description: [
        
        "Je suis particulièrement curieux et j'apprends très vite. Formé en back-end de manière autodidacte, ce qui me permet de me définir comme un développeur full-stack junior. J'adore commencer des projets de A à Z, en créant les visuels pour les applications avec des outils comme Figma et Photoshop. J'aime transformer des idées en produits finis, en m'assurant que chaque détail est pris en compte pour offrir une expérience utilisateur optimale.",
        "J'aime travailler sur mes idées et je suis toujours ouvert à de nouvelles opportunités et collaborations pour grandir et apprendre."
      ]
    }
  ];

  // Tableau contenant les expériences de travail
  const Work = [
    {
      id: 1,
      status: "Work",
      experience: "Experience 🧑🏾‍💻",

      //xp 1
      image: logo,
      work: " Freelance Frontend",
      ets: "Malt",
      date: "2023-2023",

      //xp2
      image_2: logo,
      work_2: "Dev Frontend",
      ets_2: "Prestij Sarl",
      date_2: "2022-2023"
    }
  ];

  // Tableau contenant les projets
  const sideProject = [
    {
      id: 1,
      status: "Projets ",
      experience: "Ce que j'ai eu a réaliser 🌟",

      //projet 1
      title: "Bollestore",
      description: "J'ai travaillé sur le front-end de l'application ",
      image: Bolle,
      link: "https://bollestoreplus.com",

      //projet 2
      title_2: "Jean christophe Bogbé",
      description_2: "Le site web que vous consultez !",
      image_2: logo,
      link_2: "https://jeanchristophe-portfolio.vercel.app/",
      
      //projet 3
      title_3: "Homee",
      description_3: "Une application web intelligente permettant la vente, l'achat et la location en ligne.",
      image_3: Homee,
      link_3: "#",

      //projet 4
      title_4: "Homee",
      description_4: "c'est une application web inteligente permetent de vendre acheter louer en ligne",
      image_4: Homee,
      link_4: "#"
    }
  ];




  return (
    <>
      <NavSection />
      
      {/* Section "À propos de moi" */}
      <div className="mt-16 md:mt-20">
        {aboutMe.map((person) => (
          <div key={person.id} className='p-5 md:flex md:space-x-20 mt-11  '>
            <div className= ' mb-5 font-semibold  flex w-1/12'>{person.status}</div>
            <div className='mt-2 md:mt-0 w-full'>
              <div className="flex items-center justify-between">
                <h1 className='font-semibold'>Qui suis-je ?</h1>
              </div>
              <div className="mt-4 leading-9">
                {person.name} et je suis un développeur web passionné basé à <Button variant="outline" size="xs">{person.location}</Button> . Etudiant en informatique à  <Link href="/"><Button variant="outline" size="xs">{person.school}</Button></Link> .
              </div>

              {/* images grid */}

              <ImageSection/>

               {/* images grid */}

              {person.description.map((desc, index) => (
                <p key={index} className="mt-4 leading-7">{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Section "Work" */}
      <div className='mt-16 md:mt-20'>
        {Work.map((projet) => (
          <div key={projet.id} className='p-5 md:flex md:space-x-20 mt-11'>
            <div className='flex w-1/12 font-semibold '>{projet.status}</div>
            <div className='mt-2 md:mt-0 w-full'>
              <div className="flex items-center justify-between">
                <h1 className='font-semi-bold'>{projet.experience}</h1>
                <Link href="https://read.cv/jeanchristophe" target="_blank">
                  <Button variant="outline" size="xs">Lire mon cv</Button>
                </Link>
              </div>
              <div className='flex items-center justify-between w-full mt-5'>
                <div className='flex items-center'>
                  <Image className='w-16 h-16 rounded-full' src={projet.image} alt={projet.work} width={64} height={64} />
                  <div className='flex flex-col ml-4'>
                    <p className='font-medium'>{projet.work}</p>
                    <Link href="https://www.malt.fr/" className='text-gray-600 hover:underline gap-1 hover:underline-offset-2 flex space-x-4'>{projet.ets} <ArrowUpRight className="w-5" /></Link>
                  </div>
                </div>
                <div className='text-gray-500 text-sm  md:text-[15px]   '>{projet.date}</div>
              </div>
              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center'>
                  <Image className='w-16 h-16 rounded-full' src={projet.image_2} alt={projet.work_2} width={64} height={64} />
                  <div className='flex flex-col ml-4'>
                    <p className='font-medium '>{projet.work_2}</p>
                    <Link target="_blank" href="https://www.prestijsarl.com/" className='text-gray-600 hover:underline gap-1 hover:underline-offset-2 flex space-x-4  '>{projet.ets_2} <ArrowUpRight className="w-5" /></Link>
                  </div>
                </div>
                <div className='text-gray-500 text-sm  md:text-[15px]'>{projet.date_2}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section "Projects" */}
      <div className='mt-16 md:mt-20 mb-32 '>
        {sideProject.map((Sideprojet) => (
          <div key={Sideprojet.id} className='p-5 md:flex md:space-x-20 mt-11'>
            <div className='flex w-1/12 font-semibold '>{Sideprojet.status}</div>
            <div className='mt-2 md:mt-0 w-full'>
              <h1 className='font-semi-bold'>{Sideprojet.experience}</h1>

              {/* pojet 1 */}
              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center'>
                  <Image className='w-16 h-16 rounded-full  object-cover ' src={Sideprojet.image} alt={Sideprojet.title} width={64} height={64} />
                  <div className='flex flex-col ml-4'>
                    <Link href={Sideprojet.link} className='font-medium hover:underline gap-1 hover:underline-offset-2 flex space-x-4'>{Sideprojet.title} <ArrowUpRight className="w-5" /></Link>
                    <p className='text-gray-600 text-sm  md:text-[15px]'>{Sideprojet.description}</p>
                  </div>
                </div>
              </div>

                {/* pojet 2 */}

              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center'>
                  <Image className='w-16 h-16 rounded-full' src={Sideprojet.image_2} alt={Sideprojet.title_2} width={64} height={64} />
                  <div className='flex flex-col ml-4'>
                    <Link href={Sideprojet.link_2} className='font-medium hover:underline gap-1 hover:underline-offset-2 flex space-x-4'>{Sideprojet.title_2} <ArrowUpRight className="w-5" /></Link>
                    <p className='text-gray-600 text-sm  md:text-[15px]'>{Sideprojet.description_2}</p>
                  </div>
                </div>
              </div>


               {/* pojet 3 */}
              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center'>
                  <Image className='w-16 h-16 rounded-full object-cover ' src={Sideprojet.image_3} alt={Sideprojet.title_3} width={64} height={64} />
                  <div className='flex flex-col ml-4'>
                    <Link href={Sideprojet.link_3} className='font-medium hover:underline gap-1 hover:underline-offset-2 flex space-x-4'>{Sideprojet.title_3} <ArrowUpRight className="w-5" /></Link>
                    <p className='text-gray-600 text-sm  md:text-[15px]'>{Sideprojet.description_3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* mex technos  */}

        
       
      </div>
    </>
  )
}
