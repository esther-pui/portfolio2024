'use client';
import Image from 'next/image';
import render from "../public/render.png";
import Link from 'next/link';

import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Home() {

  return (
    <main className='min-h-screen flex flex-col bg-the-off-white'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='
          circlePosition w-[80%] h-[70%]
          bg-the-red opacity-30 rounded-[100%] 
          fixed top-[50%] left-[50%] 
          translate-x-[-50%] translate-y-[-50%]
          blur-[200px]
          z-1'
        ></div>
      </div>

      <div className='relative flex-1 px-10 md:px-20 lg:px-20'>
        <section className='relative z-10'>
          <Navbar/>
        </section>

        <section className='relative z-10 pb-20'>
          <div className='text-center'>
              <p className='text-md leading-8 text-the-red drop-shadow-sm md:text-xl max-w-lg mx-auto dark:text-the-salmon'>
                esther pui is a web developer, based in kuala lumpur, malaysia. her work focuses on creating interactive web experiences through 3D and motion.
              </p>
          </div>
        </section>


        <section className='py-20 relative z-10'>
          <div className='flex flex-col items-center'>
            <p className='text-the-red text-center text-sm'>- more updates coming soon! -</p>
          </div>

          {/* <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
          </div> */}
        </section>
      </div>
      <Footer/>
    </main>
  );
}
