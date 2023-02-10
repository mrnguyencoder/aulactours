import React from 'react';
import { HiLocationMarker, HiMail, HiPhoneIncoming} from "react-icons/hi";
import img from '../assets/view-g8038c8559_1920.jpg';

function Contact() {
  return (
    <section id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-3xl tracking-wider py-6 text-yellow-500'>Contacts</h2>

      <p className='flex justify-center items-center space-x-3 text-gray-700 py-2'><HiLocationMarker/> <span>3 rue Jean Lurçat 94800 Villejuif</span></p>
      <a href="mailto:agenceAulac@gmail.com" className="flex justify-center items-center space-x-3 text-gray-700 py-2"><HiMail/><span>AgenceAulac@gmail.com</span></a>
      <a href="tel:+33634121317" target="_blank" rel="noreferrer" className="flex justify-center items-center space-x-3 text-gray-700 py-2"><HiPhoneIncoming/><span>Mr. Phương Huỳnh</span></a>

      <div className='grid md:grid-cols-2 gap-5'>
        <img
          src={img}
          alt='aulac tours vietnam'
          className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded-lg'
        />
        <form>
          <div className='grid grid-cols-2'>
            <input className='border m-2 p-2 rounded-lg' type='text' placeholder='Prénom' />
            <input className='border m-2 p-2 rounded-lg' type='text' placeholder='Nom' />
            <input className='border m-2 p-2 rounded-lg' type='email' placeholder='Email' />
            <input className='border m-2 p-2 rounded-lg' type='tel' placeholder='Phone' />
            <input className='border col-span-2 p-2 m-2 rounded-lg' type='text' placeholder='Adresse' />
            <textarea className='border col-span-2 m-2 p-2 rounded-lg' cols='30' rows='10'></textarea>
            <button className='col-span-2 m-2 border  py-2 rounded-full bg-slate-50 hover:bg-yellow-500'>Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact