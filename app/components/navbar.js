'use client';
import Link from 'next/link';
import { useState } from 'react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-the-red'>
              <Link href="/">esther pui.</Link>
            </h1>
           
            <div className="sm:hidden flex items-center">
                <button
                    onClick={toggleNavbar}
                    className="text-the-red focus:outline-none mr-2">
                    {isOpen ? ('x') : ('+')}
                </button>
            </div>

            <ul className={`sm:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
                <li>
                    <a className='text-the-red mr-6 hover:text-the-off-white hover:bg-the-red transition duration-300' href="#">resume</a>
                </li>
                <li>
                    <a className='text-the-red mr-6 hover:text-the-off-white hover:bg-the-red transition duration-300' href="/connect">connect</a>
                </li>
                <li>
                    <Link className='text-the-red hover:text-the-off-white hover:bg-the-red transition duration-300' href="/about">about</Link>
                </li>
            </ul>
          </nav>
    );
}