"use client"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import Image from "next/image";
import bookImage from "@/assets/images/certfication.png";
import JavascriptIcon from '@/assets/icons/js-official-svgrepo-com.svg';
import CssIcon from "@/assets/icons/css-3-svgrepo-com.svg";
import ReactIcon from "@/assets/icons/react-javascript-js-framework-facebook-svgrepo-com.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import Html from "@/assets/icons/html-5-svgrepo-com.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import NextJs from "@/assets/icons/nextjs.svg";
import VueJs from "@/assets/icons/vue-9-logo-svgrepo-com.svg";
import Angular from "@/assets/icons/angular-svgrepo-com.svg";
import mapImage from "@/assets/images/map.png";
import Typescript from "@/assets/icons/typescript-official-svgrepo-com.svg";
import { ToolboxItems } from "@/components/Toolboxitems";
import {motion} from 'framer-motion'

const toolboxItems = [
  { title: 'JavaScript', iconType: JavascriptIcon },
  { title: 'HTML5', iconType: Html },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'Next', iconType: NextJs },
  { title: 'Vue', iconType: VueJs },
  { title: 'Angular', iconType: Angular },
  { title: 'Tailwind', iconType: Tailwind },
  { title: 'Github', iconType: GitHubIcon },
  { title: 'Typescript', iconType: Typescript },
];

const hobbies = [
  { title: 'Algorithms', left: '25%', top: '5%' },
  { title: 'Electrical Engineering', left: '10%', top: '5%' },
  { title: 'Data Structures', left: '10%', top: '35%' },
  { title: 'APIs', left: '45%', top: '40%' },
  { title: 'Back-end technologies', left: '57%', top: '75%' },
  { title: 'Security', left: '70%', top: '45%' },
  { title: 'English', left: '5%', top: '65%' },
  { title: 'French', left: '35%', top: '70%' },
  { title: 'Arabic', left: '80%', top: '10%' },
  { title: 'Cloud', left: '55%', top: '7%' },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div id="About" className="container">
        <SectionHeader 
         
          eyebrow="about me"
          title="A Glimpse Into My World"
          description="Highly motivated and detail-oriented Junior Front-End Developer"
        />
        <div className="mt-20 flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3 lg:gap-8">
          {/* Book Card */}
          <Card className="h-[320px] md:col-span-2 md:gap-8 lg:col-span-1">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">Certifications</h3>
              </div>
              <p className="text-sm text-white/60 mt-2">CCNA | HCIA | Azure Fundamentals</p>
            </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>

          {/* Toolbox Card */}
          <Card className="h-[320px] p-0 col-span-3 md:col-span-3  lg:col-span-2">
            <div className="flex flex-col px-6 pt-6">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl mb-2">My toolbox</h3>
              </div>
              <p className="text-sm text-white/60 mt-2 mb-6">explore the technologies and tools I use to create digital experiences</p>
            </div>
            <div className="flex flex-col gap-6">
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6 " itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
            </div>
          </Card>
        </div>

        {/* Section with Beyond the Code and Map Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-8">
    {/* Beyond the Code Card */}
<div className="col-span-1 md:col-span-3">
  <Card className="h-auto p-0 flex flex-col">
    <div className="flex flex-col px-6 pt-6">
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl mb-2">Beyond the Code</h3>
      </div>
      <p className="text-sm text-white/60 mt-2 mb-6">
        More information about me
      </p>
    </div>
    
    {/* Hobbies Section */}
    <div className="flex flex-wrap justify-center gap-4 px-6 py-4">
      {hobbies.map((hobby) => (
        <motion.div
          key={hobby.title}
          className="inline-flex items-center justify-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 mb-4"
          drag
        >
          <span className="font-medium text-gray-950">{hobby.title}</span>
        </motion.div>
      ))}
    </div>
  </Card>
</div>


          {/* Map Card */}
          <div className="col-span-1 md:col-span-2">
  <Card className="h-[320px] p-0 relative">
    <div className="w-full h-full overflow-hidden">
      <Image 
        className="object-cover w-full h-full" 
        src={mapImage} 
        alt="map" 
      />
    </div>
  </Card>
</div>

        </div>
      </div>
    </div>
  );
};
