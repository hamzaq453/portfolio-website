import React from 'react'
import H1 from '/public/H1.png'
import Image from 'next/image'
const Herosec = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
        <h1 className='text-white mb-4 text-4xl font-extrabold lg:text-6xl'>Hello, I'm Hamza </h1>
        
        <p className='text-[#ADB7BE] text-lg lg:text-xl mb-4'>
            Lorem isspm jdnes wokejs jxnjws kxx ks  c cksnkwnxksxn csc skckc
        </p>
        <div>
            <button className='px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-sky-200 to-red-300 bg-white hover:bg-slate-200 text-black font-semibold'>
                Hire Me</button>
            <button className='px-6 py-3 mt-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white'>
                Download CV</button>

        </div>

        </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image src={H1}
            height={300}
            width={300}
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            alt='Hamza'>
            </Image>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Herosec