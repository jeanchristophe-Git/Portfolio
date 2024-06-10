import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

// image

import Homee from '../public/homee.png'
import Bolle from '../public/Bollestore.png'

export default function ProjectSection() {

    

    const project = [
        {
            id: 1,
            years: "2024-2003",
            name: "HOMEE",
            description: "c'est une application web inteligente permetent de vendre acheter louer en ligne ",
            suite: 'En production ...',
            image: Homee ,
            link:""
        },
        {
            id: 2,
            years: "2024-2003",
            name: "BolleStore",
            description: "Rrfonte fictive de l'application web yellow card en ajouteat plus de modernite  ",
            suite: 'Voir le projet',
            image: Bolle,
            link: "www.bollestoreplus.com"
        },
        {
            id: 3,
            years: "2024-2003",
            name: "Yellow Card",
            description: "Led design & development of Bitrefills design system as well as focusing on core flows like discovery, search and navigation",
            suite: 'Voir le projet ',
            image: Homee ,
            link:""
        },
    ];

    return (
        <div className=' mt-16  md:mt-20'>
            <h1 className=' ml-5 md:ml-0 font-medium md:mt-4 '>Projets sélectionnés</h1>
            <div>
                {project.map((projet) => (
                    <div key={projet.id} className=' p-5  md:flex  md:space-x-20 mt-11  '>
                        <div className=' flex  w-4/12 mb-4 md:mb-0  '  >{projet.years}</div>
                        <div className=' ' >
                            <h1 className=' font-semi-bold mb-4 md:mb-0 ' >{projet.name}</h1>
                            <p className=' text-gray-500 font-medium mb-4 md:mb-0 ' >{projet.description}</p>
                            <Link href={projet.link} className=' underline hover:underline-offset-4   ease-in-out  font-medium ' >{projet.suite}</Link>
                            <div className='  w-full ' >
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
