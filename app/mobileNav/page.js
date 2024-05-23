'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function MobileNav() {
    const router = useRouter();
    
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
            <div className='relative mt-40 mb-6 flex justify-center items-center'>
                <button
                    className="text-the-red text-3xl focus:outline-none flex"
                    onClick={() =>  router.back()}
                    style={{ width: '2rem', height: '2rem', borderRadius: '50%' }}
                >X</button>
            </div>
            <div className='relative z-10 mx-20 lg:px-20'>
                <div className="border-t border-the-red mb-3 lg:w-1/2 mx-auto"></div>
                <div className="flex flex-col lg:justify-center lg:flex-row">
                    <Link 
                        className='text-4xl mb-2 italic font-prata text-the-red text-center lg:mx-4' 
                        href="/"
                    >HOME</Link>
                    <Link 
                        className='text-4xl mb-2 italic font-prata text-the-red text-center lg:mx-4' 
                        href="/portfolio"
                    >PORTFOLIO</Link>
                    <Link 
                        className='text-4xl mb-2 italic font-prata text-the-red text-center lg:mx-4' 
                        href="/mail"
                    >CONTACT</Link>
                    <Link 
                    className='text-4xl mb-2 italic font-prata text-the-red text-center lg:mx-4' 
                    href="/about"
                    >ABOUT</Link>
                </div>
            </div>
        </main>
    );
}