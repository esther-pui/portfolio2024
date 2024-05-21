'use client';
import Image from 'next/image';
import render from "../public/render.png";

export default function Home() {

  return (
    <main>
      <div className='bg-the-off-white px-10 md:px-20 lg:px-40 dark:bg-the-blue-grey'>
        <div className='
          circlePosition w-[80%] h-[70%]
          bg-the-red opacity-30 rounded-[100%] 
          fixed top-[50%] left-[50%] 
          translate-x-[-50%] translate-y-[-50%]
          blur-[200px]
          z-1\'
        ></div>

        <section className='relative z-10'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-the-red'>
              <a href="/" className='text-xl'>esther pui.</a>
            </h1>
           
            <ul className='sm:flex items-center hidden'>
              <li>
              <a className=' text-the-red mx-10 hover:text-the-off-white hover:bg-the-red transition duration-300' href="#">get in touch</a>
              </li>
              <li>
                <a className=' text-the-red hover:text-the-off-white hover:bg-the-red transition duration-300' href="#">download resume</a>
              </li>
            </ul>
          </nav>
        </section>

        <section className='relative z-10 pb-20'>
          <div className='text-center'>
              <p className='text-md leading-8 text-the-red drop-shadow-sm md:text-xl max-w-lg mx-auto dark:text-the-salmon'>
                esther pui is a web developer, based in kuala lumpur, malaysia. her work focuses on creating interactive web experiences through 3D and motion.
              </p>
          </div>
        </section>

        <div class="border-t border-the-red"></div>

        <section className='py-20 relative z-10'>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
           
            
            
          </div>
        </section>
        <section>
          <div className='flex justify-between text-sm text-center py-5 dark:text-gray-300'>
            <p>© 2024 ESTHER PUI</p>
            <a className='hover:text-the-off-white hover:bg-the-red transition duration-300' href="https://twitter.com/esther__pui" target="_blank" rel="noopener noreferrer">TWITTER</a>
            <a className='hover:text-the-off-white hover:bg-the-red transition duration-300' href="https://github.com/esther-pui" target="_blank" rel="noopener noreferrer">GITHUB</a>
          </div>
        </section>


       
      </div>
    </main>
  );
}
