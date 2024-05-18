'use client';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram
} from 'react-icons/ai';
import Image from 'next/image';
import bee from "../public/bee.webp";
import design from "../public/design.png";
import render from "../public/render.png";
import { useState } from 'react';

export default function Home() {
 
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>esther pui.</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={()=>{setDarkMode(!darkMode)}}/>
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
            </li>
          </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Esther Pui</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200'>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300'>
              Freelancer providing services for programming design needs. Join me below and let&apos;s get cracking!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300'>
            <a href="https://twitter.com/esther__pui" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle/>
            </a>
            <a href="https://www.linkedin.com/in/esther-pui/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/esther_pui/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram />
            </a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={bee} alt=""/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-100'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
              Since the beginning of my journey as a freelancer designer and developer, I&apos;ve done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'> startups </span> and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-50'>
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} alt=""/>
              </div>
              <h3 className='text-lg front-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>After Effect</p>
              <p className='text-gray-800 py-1'>Clipart studio</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-50'>
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} alt=""/>
              </div>
              <h3 className='text-lg front-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>After Effect</p>
              <p className='text-gray-800 py-1'>Clipart studio</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-50'>
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} alt=""/>
              </div>
              <h3 className='text-lg front-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>After Effect</p>
              <p className='text-gray-800 py-1'>Clipart studio</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-100'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
              Since the beginning of my journey as a freelancer designer and developer, I&apos;ve done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'> startups </span> and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={render} className='rounded-lg object-cover width={"100"} height={"100%"} layout="responsive"' alt=""/>
            </div>
          </div>
        </section>
        <section>
          <div className='text-sm text-center py-5 dark:text-gray-300'>
            <p>© 2024 Esther Pui. All rights reserved. Designed and developed with <BsFillHeartFill height={5} width={5} className='inline-block'/> by Esther Pui.</p>
          </div>
        </section>

      </div>
    </main>
  );
}
