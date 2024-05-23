'use client';
import { useState } from "react";
import emailjs from 'emailjs-com';

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Mail() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_oh99kxh';
        const templateID = 'template_dxuhkao';
        const userID = 'yN1JNoC614oTyz_SP';

        emailjs.send(serviceID, templateID, formData, userID)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            
            setFormData({
            user_name: '',
            user_email: '',
            message: ''
            });
        }, (err) => {
            console.log('FAILED...', err);
        });
    }

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

            <form onSubmit={handleSubmit} className="mx-auto lg:w-full lg:max-w-lg lg:bg-white lg:bg-opacity-50 lg:p-8">
                <h2 className="text-the-red font-prata text-xl font-bold mb-4 text-center">send me a message</h2>
                <p className="text-the-red mx-auto text-center mb-8 text-opacity-50 text-sm italic">
                    a work request, questions, or even a commendation.
                </p>
        
                <div className="mb-4 lg:flex">
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="your name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="w-full mb-4 lg:mb-0 lg:w-3/5 mr-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-the-red"
                        required
                    />
               
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        placeholder="your email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-the-red"
                        required
                    />
                </div>
        
                <div className="mb-4">
                    <textarea
                        id="body"
                        name="message"
                        value={formData.message}
                        placeholder="enter your message"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-the-red"
                        rows="5"
                        required
                    ></textarea>
                </div>
        
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-the-red text-white font-bold py-2 px-4 rounded-md hover:bg-the-red-dark focus:outline-none focus:ring-2 focus:ring-the-red"
                    >Send</button>
                </div>
            </form>
            </div>
            <Footer/>
        </main>
    );
}