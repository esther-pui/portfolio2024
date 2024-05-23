import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Link from 'next/link';

export default function Connect() {
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
          <p className="text-the-red text-opacity-50 lg:text-2xl mx-auto text-center italic">0 works</p>
          <p className="text-the-red lg:text-xl mx-auto text-center">- more updates coming soon! -</p>
        </section>
      </div>
      <Footer/>
    </main>
  );
  }
  