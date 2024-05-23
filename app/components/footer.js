import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {

    return (
        <footer className='relative h-[20%] py-4 mb-10 mx-8 lg:px-20'>
          <div className='flex justify-between text-sm text-center'>
            <p>© 2024 ESTHER PUI</p>

            <div className="flex">
              <a className="mr-4" href="https://twitter.com/esther__pui" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </a>
              <a href="https://www.linkedin.com/in/esther-pui/" target="_blank" rel="noopener noreferrer"> 
                <BsLinkedin />
              </a>
              </div>
          </div>
        </footer>
    );
}