import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

// image

import Homee from '../public/homee.png'
import Bolle from '../public/Bollestore.png'
import yCard from '../public/ywllow.png'
import Bnb from '../public/refonteAirbnb.png'

export default function ProjectSection() {

    

    const project = [
        {
            id: 1,
            years: "2024",
            name: "HOMEE",
            description: "Une  application web intelligente, facilite la vente, l'achat et la location de biens immobiliers en ligne. Je travaillé sur l'ensemble du cycle de développement. ",
            suite: 'En production ...',
            image: Homee ,
            link:""
        },
        {
            id: 2,
            years: "2023",
            name: "BolleStore",
            description: " une application e-commerce en ligne offrant une vaste gamme de produits Apple. Mon rôle était de développer et d'améliorer le front-end pour garantir une expérience utilisateur fluide et intuitive. ",
            suite: 'Voir le projet',
            image: Bolle,
            link: "https://bollestoreplus.com"
        },
        {
            id: 3,
            years: "2024",
            name: "Yellow Card",
            description: "Refonte fictive de l'application web Yellow Card, en ajoutant une touche de modernité.",
            suite: 'Voir le projet ',
            image: yCard ,
            link:""
        },
        {
            id: 3,
            years: "2024",
            name: "Airbnb Clone",
            description: "j'ai entrepris le défi passionnant de cloner l'interface utilisateur et certaines fonctionnalités clés de la célèbre plateforme Airbnb.",
            suite: 'Voir le projet ',
            image: Bnb ,
            link:"https://jean-christophe-b-n-b.vercel.app/"
        },
    ];

    return (
        <div className=' mt-16   md:mt-20'>
            <h1 className=' ml-5 md:ml-0 font-medium md:mt-4 '>Projets sélectionnés</h1>
            <div>
                {project.map((projet) => (
                    <div key={projet.id} className=' p-5  md:flex   md:space-x-20 mt-6  '>
                        <div className='hidden md:flex md:p-1 mb-4 md:mb-0   md:justify-center  '>{projet.years}</div>
                        <div className=' ' >
                            <h1 className=' font-semi-bold mb-4 md:mb-0 ' >{projet.name}</h1>
                            <p className=' text-gray-500 font-medium mb-4 md:mb-3  ' >{projet.description}</p>
                            
                            <Link href={projet.link} className='  p-2 md:p-1 text-sm border border-gray-300 dark:border-gray-500 rounded-md' >{projet.suite}</Link>
                          
                            
                            <div className=' w-full  ' >
                            <Image className='w-full mt-5 rounded-2xl '
                                src={projet.image}
                                alt={projet.name}
                                width={630}
                                height={500}
                            />
                           
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
