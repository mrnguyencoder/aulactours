import React from 'react';
import img1 from '../assets/adult-g7e9b35152_1280.jpg';
import img2 from '../assets/boy-g232ea94cc_1920.jpg';
import img3 from '../assets/elephant-g0ff81c018_1920.jpg';
import img4 from '../assets/harvesting-gae7debe94_1920.jpg';
import img5 from '../assets/woman-g6096574e2_1920.jpg';
import img6 from '../assets/asia-ge3284e414_1280.jpg';

function Galerie() {
    const galeries = [
        img6, 
        img2,
        img1, 
        img3, 
        img4, 
        img5, 
    ]
  return (
    <div id='galerie' className='px-4 py-16'>
        <h2 className='text-center tracking-wide text-yellow-500 text-3xl py-10'>Galerie</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {galeries.map(item => (
                <div className="">
                    <img key={item} src={item} alt="aulac tours" className="rounded-lg" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Galerie