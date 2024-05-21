import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import avatar from "../../public/avatar.jpeg"
import Link from 'next/link';

export default function About() {
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

      <div className='relative flex-1 px-10 lg:px-20'>
        <section className='relative z-10'>
          <Navbar/>
        </section>

        <div className='relative mb-10 lg:flex-1 lg:px-20 flex flex-col items-center justify-center'>
          <section className='relative z-10 max-w-screen-md mx-auto flex flex-col lg:flex-row items-center'>
            <div className='lg:order-1 mb-10'>
              <div className='relative bg-the-red rounded-full w-60 h-60 overflow-hidden lg:flex-shrink-0 lg:w-80 lg:h-80'>
                <Image src={avatar} alt="" layout="fill" objectFit="cover" />
              </div>
            </div>

            <div className='pb-10 lg:order-2 lg:ml-20 lg:flex-grow'>
              <p className="font-prata text-2xl lg:text-4xl text-the-red text-center lg:text-left">Esther Pui</p>
              <p className="text-lg text-the-red text-center md:text-left">Full-stack developer</p>
              <p className="text-the-red text-center mb-10 md:text-left">(React, Laravel)</p>
              <p className="text-the-red text-center md:text-left">
                Proud Sarawakian currently living in Kuala Lumpur, Malaysia.
                My main focus these days is seamlessly integrating both backend and frontend elements based on UI design.
                <br></br>
                <br></br>
                During my freetime, I like to practice in 3d, motion (three.js, webgl, blender) and digital illustration (clipart studio).

                <br></br>
                <br></br>
                When I’m not at the computer,
                I’m usually cooking, reading, hanging out with my cat, or persuading myself to hit the gym.
              </p>
            </div>
          </section>
        </div>

      </div>
      <Footer/>
    </main>
  );
  }
  