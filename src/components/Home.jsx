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
        <div className="relative">
            <div className="relative h-80 overflow-hidden bg-yellow-300 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <img
                className="h-full w-full object-cover"
                src={airport}
                alt=""
                />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8 ">
                <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                <h2 className="text-base font-semibold leading-7 text-yellow-400">Présentation</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-blue-700">Notre mission est de réaliser vos rêves les plus tendres et les plus audacieux</p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Aucune réservation ne nous est trop petite. Aucun client ne nous est moins important : du booking d’une nuit d’hôtel, d’un vol sec ; de la souscription d’une assurance, de l’obtention d’un visa à  l’organisation d’un voyage en all inclusive à l’autre bout du monde pour un  CE ou des VIP … 
                    notre équipe s’occupe de tous  avec soins, écoute, rigueur, connaissance, savoir-faire, respect, expertise…
                </p>
                <div className="mt-8">
                    <a
                    href="#"
                    className="inline-flex rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-yellow-300 shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                    Contactez-nous
                    </a>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home