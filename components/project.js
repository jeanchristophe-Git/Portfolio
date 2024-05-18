import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

// image
import profile from '../public/placehod.svg';

export default function ProjectSection() {

    const projName = {
        name: "Tronis"
    };

    const project = [
        {
            id: 1,
            years: "2024-2003",
            name: "Tronis",
            description: "Led design & development of Bitrefills design system as well as focusing on core flows like discovery, search and navigation",
            suite: `lire plus sur ${projName.name}`,
            image: profile 
        },
        {
            id: 2,
            years: "2024-2003",
            name: "Tronis",
            description: "Led design & development of Bitrefills design system as well as focusing on core flows like discovery, search and navigation",
            suite: `lire plus sur ${projName.name}`,
            image: profile 
        },
        {
            id: 3,
            years: "2024-2003",
            name: "Tronis",
            description: "Led design & development of Bitrefills design system as well as focusing on core flows like discovery, search and navigation",
            suite: `lire plus sur ${projName.name}`,
            image: profile 
        },
    ];

    return (
        <div className=' mt-16  md:mt-20'>
            <h1 className=' ml-5 md:ml-0 font-medium md:mt-4 '>Projets sélectionnés</h1>
            <div>
                {project.map((projet) => (
                    <div key={projet.id} className=' p-5  md:flex  md:space-x-20 mt-11  '>
                        <div className=' flex  w-4/12  '  >{projet.years}</div>
                        <div className=' ' >
                            <h1 className=' font-semibold ' >{projet.name}</h1>
                            <p className=' text-gray-500 font-medium ' >{projet.description}</p>
                            <Link href="/" className=' underline hover:underline-offset-4   ease-in-out  font-medium ' >{projet.suite}</Link>
                            <div className='  w-full ' >
                            <Image className='w-full mt-5 rounded-2xl '
                                src={projet.image}
                                alt={projet.name}
                                width={600}
                                height={400}
                            />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
