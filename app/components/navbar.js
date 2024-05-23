'use client';
import Link from 'next/link';

export default function Navbar() {

    return (
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-the-red text-2xl'>
              <Link href="/">esther pui.</Link>
            </h1> 

            <div className="flex">
                <ul className={`sm:flex items-center hidden sm:mr-4`}>
                    <li>
                        <a className='text-the-red mr-6 hover:text-the-off-white hover:bg-the-red transition duration-300' href="/portfolio">portfolio</a>
                    </li>
                    <li>
                        <a className='text-the-red mr-6 hover:text-the-off-white hover:bg-the-red transition duration-300' href="/connect">connect</a>
                    </li>
                    <li>
                        <Link className='text-the-red hover:text-the-off-white hover:bg-the-red transition duration-300' href="/about">about</Link>
                    </li>
                </ul>
                <div className="sm:hidden">
                    <Link 
                        className="text-the-red text-3xl focus:outline-none w-10 flex justify-center"
                        href="/mobileNav"
                      >
                        +
                    </Link >
                </div>
            </div>
            

          </nav>
    );
}