import ToyotaTacoma from "@/assets/images/1.png";
import PrayerTimes from "@/assets/images/2.png";
import fifaWorld from "@/assets/images/3.png";
import toDoList from "@/assets/images/4.png";
import weatherApp from "@/assets/images/5.png"
import Image from "next/image"
import   CheckCircleIcon  from '@/assets/icons/check-circle.svg'; 
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'; 
import grainImage from '@/assets/images/grain.jpg'

 
const portfolioProjects = [
  {
    company: "Toyota",
    year: "2025",
    title: "CAR WEBSITE",
    results: [
      { title: "Demonstrated proficiency in web design " },
      { title: "Enhanced UI/UX design" },
      { title: "Optimized performance" },
    ],
    link: "https://fanciful-granita-f9caeb.netlify.app/",
    image: ToyotaTacoma,
  },
  {
    company: "Eservices DZ",
    year: "2024",
    title: "PRAYER TIMES",
    results: [
      { title: "Web app that determines prayer time" },
      { title: "Depends on the city selected" },
      { title: "count down showing when will be the next prayer" },
    ],
    link: "https://gregarious-lokum-3a00c9.netlify.app/",
    image: PrayerTimes,
  },
  {
    company: "Eservices DZ",
    year: "2024",
    title: "FIFA WORLD CUP",
    results: [
      { title: "A website that displays results of the World Cup 2026" },
      { title: "The groups and the classment with points" },
      { title: "Implement your own paid API when the game starts" },
    ],
    link: "https://nimble-lily-f7d150.netlify.app/",
    image: fifaWorld,
  },
  {
    company: "Eservices DZ",
    year: "2024",
    title: "TO DO LIST",
    results: [
      { title: "Easy-to-use To-Do List app" },
      { title: "Add tasks to your list and track their progress" },
      { title: "Easily manage your to-dos and check off completed items as you go" },
    ],
    link: "https://reliable-salamander-78fcf3.netlify.app/",
    image: toDoList,
  },
  {
    company: "Eservices DZ",
    year: "2024",
    title: "WEATHER APP",
    results: [
      { title: "Simple weather web app using react" },
    ],
    link: "https://reliable-salamander-78fcf3.netlify.app/",
    image: weatherApp,
  },
];

export const ProjectsSection = () => {
  return <section id="Projects" className="lg:py-24 pb-16">
    <div className="container">
      <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent
      ">Practical outcomes
      </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Showcase Projects</h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl">Explore how I brought concepts to life through immersive digital experiences.</p>
    <div className="flex flex-col md:mt-20 mt-10 gap-20">
      {portfolioProjects.map((project, projectIndex) => (
        <div key={project.title} className="bg-gray-800
         rounded-3xl relative z-0 overflow-hidden
          after:z-10 after-[''] after:absolute after:inset-0
           after:outline-2 after:outline after:-outline-offset-2
            after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12
             md:px-10 after:pointer-events-none lg:pt-16 lg:px-20 sticky"
             style={{
               top: `calc(64px + ${projectIndex * 40}px)`
             }}>
              <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage:`url(${grainImage.src})`}}>
              </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
             <span>{project.company}</span>
             <span>&bull;</span>
             <span> {project.year}</span>
            </div>

            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {project.results.map((result) => (
              <>
              <li className="flex gap-2 text-sm md:text-base text-white/50">
                <CheckCircleIcon className="size-5"/>
                {result.title}
                </li>
                </>
            ))}
            </ul>
            <a href={project.link}>
            <button className="bg-white
             text-gray-950
              h-12 w-full md:w-auto px-6 rounded-xl
               font-semibold inline-flex 
               items-center justify-center gap-2 mt-8"><span>
                View Live Site
                </span>
                <ArrowUpRightIcon/>
                </button>
            </a>
            </div>
            <div>
            <Image  src={project.image} alt={project.title} 
            className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-3xl "
            />
            </div>
            </div>
          </div>
      ))}
    </div>
    </div>
  </section>;
};
