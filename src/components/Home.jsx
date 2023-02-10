import React from 'react';
import video from '../assets/City - 23857.mp4';
import maybay from '../assets/vna.png';
import airport from '../assets/airport-gd4d19d688_1920.jpg';

function Home() {
  return (
    <section id='accueil'>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-16 lg:py-20">
            <div className="pt-20 space-y-5 px-4 ">
                <h1 className="text-3xl  font-bold text-yellow-400 tracking-wide">AULAC TOURS <br /> agence de voyage</h1>
                <h2 className="text-xl text-blue-600 lg:text-2xl tracking-tight max-w-4xl mx-auto">Nous sommes  spécialiste et producteur  des voyages sur mesure, à la carte  en Asie du Sud- Est : Vietnam, Laos, Cambodge. Nous sommes également distributeur de toutes destinations du monde entier.</h2>
            </div>
            <div className="flex justify-center items-center relative py-10 px-4">
                <div className="p-5">
                    <video src={video} autoPlay muted loop className='rounded-3xl'></video>
                </div>
                <img src={maybay} alt="" className="absolute h-24 animate-pulse" />
            </div>
        </div>
        {/* Search */}
        <div className='max-w-[1140px] m-auto w-full mb-20'>
            <div className="border rounded-3xl m-4 shadow-lg">
                <form className='lg:flex lg:justify-between w-full items-center p-5 '>
                    <div className='flex flex-col my-2 py-2'>
                    <label className='font-bold text-lg text-blue-500'>Destination</label>
                    <select className='lg:w-[300px] md:w-full border rounded-md p-2 mt-3'>
                        <option>Ho Chi Minh</option>
                        <option>Ha Noi</option>
                        <option>Da Nang</option>
                        <option>Paris</option>
                        <option>Bangkok</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div className='flex w-full'>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label className='font-bold text-lg text-blue-500'>Aller</label>
                        <input className='border rounded-md p-2 mt-3' type='date' />
                    </div>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label className='font-bold text-lg text-blue-500'>Retour</label>
                        <input className='border rounded-md p-2 mt-3' type='date' />
                    </div>
                    </div>
                    <div className='flex flex-col my-2 p-2 w-full'>
                    <button className='w-full border py-2 rounded-full hover:bg-yellow-500'>Recherche</button>
                    </div>
                </form>
            </div>
        </div>

        {/* Présentation */}

    </section>
  )
}

export default Home