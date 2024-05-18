import NavSection from "@/components/nav";

//icons
import { ArrowUpRight } from "lucide-react";


// image

import logo from '../../public/profile.png'
import Link from "next/link";
import Image from "next/image";




export default function PageAbout() {

   

    const Work = [
        {
            id: 1,

            //Mention par defaut 
            status: "Work",
            experience: "Experience 🧑🏾‍💻",
           
            //premiere xp
            image: logo,
            work: " Freelance Frontend",
            ets: "Malt",
            date: "2023-2023",

            //seconde xp 
            image_2: logo,
            work_2: "Frontend  develloper ",
            ets_2: "Prestij Sarl",
            date_2: "2022-2023"

        },
      

    ];
  
     

    const sideProject=[
        {
            id:1,
            status:"projects ",
            experience:"J'aime travailler sur mes idees 🌟",
            

            // projet 01
            title:"E-commerce",
            description:"Création d'un site e-commerce avec Next.js et Stripe",
            image:logo,
            link:"https://github.com/lucidev/e-commerce",

            //projet 02 
            title_2:"Jean christophe Bogbé",
            description_2:"Le site web que vous consultez !",
            image_2:logo,
            link_2:"https://github.com/lucidev/e-commerce",
        },
        
    ]





    return (
        <>
            <NavSection />

            <div className="mt-32" >
                <h1>about page</h1>
            </div>
            <div className=' mt-16  md:mt-20'>
                
                <div>
                    {Work.map((projet) => (
                        <div key={projet.id} className=' p-5  md:flex  md:space-x-20 mt-11  '>
                            <div className=' flex  w-1/12  '  >{projet.status}</div>
                            <div className='mt-2 md:mt-0 w-full' >

                                <h1 className=' font-semibold ' >{projet.experience}</h1>
                                <p className=' text-gray-500 font-medium ' >{projet.description}</p>
                                <Link href="/" className=' underline hover:underline-offset-4   ease-in-out  font-medium ' >{projet.suite}</Link>

                                <div className='flex items-center justify-between w-full mt-4 '>
                                    <div className='flex items-center'>
                                        <Image
                                            className='w-16 h-16 rounded-full'
                                            src={projet.image}
                                            alt={projet.name}
                                            width={64}  // Taille plus appropriée pour un avatar
                                            height={64} // Taille plus appropriée pour un avatar
                                        />
                                        <div className='flex flex-col ml-4'>  {/* Ajout d'une marge à gauche pour espacer */}
                                            <p className='font-medium'>{projet.work}</p>  {/* Peut-être ajouter une police différente */}
                                            <Link href="https://www.malt.fr/" className='text-gray-600         hover:underline gap-1   hover:underline-offset-2 flex   space-x-4 '>{projet.ets} <ArrowUpRight className="w-5" /> </Link>   {/* Couleur de texte plus claire */}
                                        </div>
                                        
                                    </div>
                                    <div className='text-gray-500'>
                                        {projet.date}
                                    </div>
                                </div>


                                <div className='flex items-center justify-between  mt-4'>
                                    <div className='flex items-center'>
                                        <Image
                                            className='w-16 h-16 rounded-full'
                                            src={projet.image_2}
                                            alt={projet.name}
                                            width={64}  // Taille plus appropriée pour un avatar
                                            height={64} // Taille plus appropriée pour un avatar
                                        />
                                        <div className='flex flex-col ml-4'>  {/* Ajout d'une marge à gauche pour espacer */}
                                            <p className='font-medium'>{projet.work_2}</p>  {/* Peut-être ajouter une police différente */}
                                            <Link href="https://www.prestijsarl.com/" className='text-gray-600         hover:underline gap-1   hover:underline-offset-2 flex   space-x-4 '>{projet.ets_2} <ArrowUpRight className="w-5" /> </Link>  {/* Couleur de texte plus claire */}
                                        </div>
                                    </div>
                                    <div className='text-gray-500'>
                                        {projet.date_2}
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
             





             {/* Affichage des mes projets  */}



              <div className=' mt-16  md:mt-20'>
                
                <div>
                    {sideProject.map((Sideprojet) => (
                        <div key={Sideprojet.id} className=' p-5   md:flex  md:space-x-20 mt-11  '>
                            <div className=' flex  w-1/12  '  >projects </div>
                            <div className='mt-2 md:mt-0  ' >
                            <h1 className=' font-semibold ' >J'aime travailler sur mes idees 🌟</h1> 
                            

                                 {/*  projets 01  */}

                                <div className='flex items-center justify-between mt-4'>
                                    <div className='flex items-center'>
                                        <Image
                                            className='w-16 h-16 rounded-full'
                                            src={Sideprojet.image}
                                            alt={Sideprojet.name}
                                            width={64}  // Taille plus appropriée pour un avatar
                                            height={64} // Taille plus appropriée pour un avatar
                                        />
                                        <div className='flex flex-col ml-4'>  {/* Ajout d'une marge à gauche pour espacer */}
                                            <Link href={Sideprojet.link_2}  className='font-medium   hover:underline gap-1   hover:underline-offset-2 flex  space-x-4 '>{Sideprojet.title} <ArrowUpRight className="w-5" /></Link>  {/* Peut-être ajouter une police différente */}
                                            <p  className='text-gray-600 '>{Sideprojet.description}  </p>  {/* Couleur de texte plus claire */}
                                        </div>
                                    </div>
                                    
                                </div>

                                  {/*  projets 02  */}

                                <div className='flex items-center justify-between mt-4'>
                                    <div className='flex items-center'>
                                        <Image
                                            className='w-16 h-16 rounded-full'
                                            src={Sideprojet.image_2}
                                            alt={Sideprojet.name_2}
                                            width={64}  // Taille plus appropriée pour un avatar
                                            height={64} // Taille plus appropriée pour un avatar
                                        />
                                        <div className='flex flex-col ml-4'>  {/* Ajout d'une marge à gauche pour espacer */}
                                            <Link href={Sideprojet.link_2} className='font-medium   hover:underline gap-1   hover:underline-offset-2 flex  space-x-4 '>{Sideprojet.title_2} <ArrowUpRight className="w-5" /></Link>  {/* Peut-être ajouter une police différente */}
                                            <p  className='text-gray-600 '>{Sideprojet.description_2}  </p>  {/* Couleur de texte plus claire */}
                                        </div>
                                    </div>
                                    
                                </div>


                                 {/*  projets 03  */}



                                <div className='flex items-center justify-between mt-4'>
                                    <div className='flex items-center'>
                                        <Image
                                            className='w-16 h-16 rounded-full'
                                            src={Sideprojet.image_2}
                                            alt={Sideprojet.name_2}
                                            width={64}  // Taille plus appropriée pour un avatar
                                            height={64} // Taille plus appropriée pour un avatar
                                        />
                                        <div className='flex flex-col ml-4'>  {/* Ajout d'une marge à gauche pour espacer */}
                                            <Link href={Sideprojet.link_2} className='font-medium   hover:underline gap-1   hover:underline-offset-2 flex  space-x-4 '>{Sideprojet.title_2} <ArrowUpRight className="w-5" /></Link>  {/* Peut-être ajouter une police différente */}
                                            <p  className='text-gray-600 '>{Sideprojet.description_2}  </p>  {/* Couleur de texte plus claire */}
                                        </div>
                                    </div>
                                    
                                </div>



                                 {/*  projets 04  */}


                                <div className='flex items-center justify-between mt-4'>
                                    <div className='flex items-center'>
                                        <Image
                                            className='w-16 h-16 rounded-full'
                                            src={Sideprojet.image_2}
                                            alt={Sideprojet.name_2}
                                            width={64}  // Taille plus appropriée pour un avatar
                                            height={64} // Taille plus appropriée pour un avatar
                                        />
                                        <div className='flex flex-col ml-4'>  {/* Ajout d'une marge à gauche pour espacer */}
                                            <Link href={Sideprojet.link_2} className='font-medium   hover:underline gap-1   hover:underline-offset-2 flex  space-x-4 '>{Sideprojet.title_2} <ArrowUpRight className="w-5" /></Link>  {/* Peut-être ajouter une police différente */}
                                            <p  className='text-gray-600 '>{Sideprojet.description_2}  </p>  {/* Couleur de texte plus claire */}
                                        </div>
                                    </div>
                                    
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>           
        </>

    )
}