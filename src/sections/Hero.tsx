import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import { TbPlugConnected } from "react-icons/tb";
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import Orbit from '@/components/Orbit';
import SparkleIcon from '@/assets/icons/sparkle.svg'

export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-40 relative z-0 overflow-x-clip" >
    <div className='absolute inset-0 ' style={{
    maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 70%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 70%, transparent 100%)', // For Safari support
  }}>
    <div
     className="absolute inset-0 -z-30 opacity-5 "
     style={{
      backgroundImage: `url(${grainImage.src})`,
    
    }}
      ></div>
      <div className="size-[660px] hero-ring"></div>
      <div className="size-[860px] hero-ring"></div>
      <div className="size-[1060px] hero-ring"></div>
      <div className="size-[1260px] hero-ring"></div>

      {/* orbitDuration, 
    shouldOrbit = false ,
    shouldSpin = false, 
    spinDuration, */}


      <Orbit size={800} rotation={-72} shouldSpin
      spinDuration='6s'
       shouldOrbit 
       orbitDuration='48s'>
        <StarIcon className="size-28 text-emerald-300"/>
        </Orbit>
        <Orbit size={710} rotation={145} shouldSpin
      spinDuration='6s' shouldOrbit orbitDuration='44s'>
          <SparkleIcon className="size-15 text-emerald-300/20" />
        </Orbit>
        <Orbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin
      spinDuration='6s'>
          <StarIcon className="size-12 text-emerald-300" />
        </Orbit>
        <Orbit size={590}   rotation={99}   shouldOrbit  orbitDuration='40s'  >
          <StarIcon className="size-8 text-emerald-300"   />
        <Orbit size={530} rotation={180} shouldOrbit  orbitDuration='36s' shouldSpin
      spinDuration='3s'>
          <SparkleIcon className="size-11 text-emerald-300/20" />
        </Orbit>
        </Orbit>
        <Orbit size={440} rotation={78} shouldSpin
      spinDuration='3s' shouldOrbit orbitDuration='32s'>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </Orbit>
        <Orbit size={430} rotation={-14} shouldSpin
      spinDuration='3s' shouldOrbit  orbitDuration='30s'>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </Orbit>
        {/* circles  */}
        <Orbit size={720} rotation={85} shouldOrbit orbitDuration='46s' shouldSpin
      spinDuration='3s'>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </Orbit>
        <Orbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        <Orbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </Orbit>
        </Orbit>
        </div>
      <div className="container">
      <div className='flex flex-col items-center'>
      {/* <Image src={memojiImage} className='size-[100px]' 
      alt="person behind the laptop"/> */}
       <p className=" mb-4 uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent
      ">mohammed charef
      </p>
    <div className='bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
    <div className='bg-green-500 size-2.5 rounded-full animate-ping relative'>
      <div className='bg-green-500 absolute inset-0 rounded-full '></div>
    </div>
    <div className='text-sm font-medium'>
      Avaible for new innovative projects
    </div>
    </div>
    </div>
    <div className='max-w-lg mx-auto '>
    <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Crafting Exceptional Digital Experiences</h1>
    <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming innovative designs into high-performing and user-centric web applications. With a keen eye for detail and a commitment to enhancing user experience, I excel in creating responsive, accessible, and visually appealing interfaces</p>
    </div>
  <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
  <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
    <span className='font-semibold'>
      Explore My Work
    </span>
    <ArrowDown className="size-4" />
  </button>
  <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
    <TbPlugConnected/>
    <span className='font-semibold '>Let&lsquo;s collaborate</span>
  </button>
  </div>
  </div>
  </div>
  );
};
