'use client'

// Import the Image component from Next.js
import Image from 'next/image';

// images
import Moi from '../public/moi.jpg';
import Moi_1 from '../public/moi(1).jpg';
import Moi_2 from '../public/moi(2).jpg';
import Moi_3 from '../public/moi(3).jpg';
import Moi_4 from '../public/moi(4).jpg';

export default function ImageSection() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8 ">
      <div className="relative h-40">
        <Image
          alt="Me speaking on stage at React Summit about the future of Next.js"
          src={Moi}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative sm:row-span-2 row-span-1">
        <Image
          alt="Me standing on stage at Reactathon delivering the keynote"
          src={Moi_1}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover sm:object-cover"
        />
      </div>
      <div className="relative">
        <Image
          alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
          src={Moi_2}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
          src={Moi_3}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg  object-cover sm:object-center"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt="My badge on top of a pile of badges from a Vercel meetup we held"
          src={Moi_4}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-40">
        <Image
          alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
          src={Moi_4}  // Replace this with the correct image source or remove if not needed
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
