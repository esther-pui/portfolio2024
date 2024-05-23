export default function Footer() {

    return (
        <footer className='relative h-[20%] py-4 mx-8 lg:px-20'>
          <div className='flex justify-between text-sm text-center lg:py-5'>
            <p>© 2024 ESTHER PUI</p>
            <a className='hover:text-the-off-white hover:bg-the-red transition duration-300' href="/mail">SEND ME A MESSAGE</a>
          </div>
        </footer>
    );
}