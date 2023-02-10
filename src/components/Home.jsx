import React from 'react';
import video from '../assets/City - 23857.mp4';
import maybay from '../assets/vna.png';

function Home() {
  return (
    <section>
        <div className="pt-20 space-y-5 px-4 ">
            <h1 className="text-center text-3xl  font-bold text-yellow-400 tracking-wide">AULAC TOURS agence de voyage</h1>
            <h2 className="text-xl lg:text-2xl tracking-tight max-w-4xl mx-auto">Nous sommes  spécialiste et producteur  des voyages sur mesure, à la carte  en Asie du Sud- Est : Vietnam, Laos, Cambodge. Nous sommes également distributeur de toutes destinations du monde entier.</h2>
        </div>
        <div className="flex justify-center items-center relative py-10 px-4">
            <div className="p-5">
                <video src={video} autoPlay muted loop className='rounded-full'></video>
            </div>
            <img src={maybay} alt="" className="absolute h-24 animate-pulse" />
        </div>
    </section>
  )
}

export default Home