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
          <p className="font-prata text-the-red text-center">connect with me for work</p>
          <div class="border-t border-the-red mb-3 lg:w-1/2 mx-auto"></div>
          <div className="flex flex-col lg:justify-center lg:flex-row">
            <Link 
              className='text-4xl mb-2 italic font-prata text-the-red text-center lg:mx-4' 
              href="https://www.estherpui.com"
              target="_blank" rel="noopener noreferrer"
            >PORTFOLIO</Link>
            <Link 
              className='text-4xl mb-2 italic font-prata text-the-red text-center lg:mx-4' 
              href="https://www.linkedin.com/in/esther-pui/"
              target="_blank" rel="noopener noreferrer"
            >LINKEDIN</Link>
            <Link 
              className='text-4xl italic font-prata text-the-red text-center lg:mx-4' 
              href="https://twitter.com/esther__pui"
              target="_blank" rel="noopener noreferrer"
            >TWITTER</Link>
          </div>
        </section>

        <section className='relative z-10 pb-20'>
          <p className="font-prata text-the-red text-center">get to know me personally</p>
          <div class="border-t border-the-red mb-3 lg:w-1/2 mx-auto"></div>
          <div className="flex flex-col lg:justify-center lg:flex-row">
            
            <Link 
              className='text-4xl italic font-prata text-the-red text-center lg:mx-4' 
              href="https://cup-of-esther.blogspot.com/"
              target="_blank" rel="noopener noreferrer"
            >BLOG</Link>

            <Link 
              className='text-4xl italic font-prata text-the-red text-center lg:mx-4' 
              href="https://open.spotify.com/user/obh93op0okdbw85vr30dryp3s?si=2782a3188abc47ee"
              target="_blank" rel="noopener noreferrer"
            >SPOTIFY</Link>

            <Link 
              className='text-4xl mb-2 italic font-prata text-the-red text-center lg:mx-4' 
              href="https://www.instagram.com/esther_pui/"
              target="_blank" rel="noopener noreferrer"
            >INSTAGRAM</Link>
          </div>
          <div className="flex flex-col lg:justify-center lg:flex-row">

            <Link 
              className='text-4xl italic font-prata text-the-red text-center lg:mx-4' 
              href="https://www.instagram.com/beixxiang/"
              target="_blank" rel="noopener noreferrer"
            >INSTA - ART</Link>

            <Link 
              className='text-4xl italic font-prata text-the-red text-center lg:mx-4' 
              href="https://www.instagram.com/cat_jujube/"
              target="_blank" rel="noopener noreferrer"
            >INSTA - CAT</Link>

            
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  );
  }
  