import React from 'react'
import logo from '../assets/logoaulac.png';
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function NavBar() {
    const [showLinks, setShowLinks] = React.useState(false);
    const links = [
      { href: '#accueil', label: 'Accueil', },
      { href: '#présentation', label: 'Présentation', },
      { href: '#galerie', label: 'Galerie', },
      { href: '#contact', label: 'Contact',},
    ];
  return (
    <nav className='bg-slate-900 flex justify-between shadow-sm'>
         {/* Menu mobile */}
        <div className="md:hidden">
        <div className="p-4">
            <HiOutlineMenuAlt2
              className='text-3xl  text-white hover:scale-110 translate duration-300'
              onClick={() => setShowLinks(!showLinks)}
            />
        </div>
        {showLinks && (
          <div className="absolute w-screen h-screen bg-slate-800 flex flex-col justify-center items-center space-y-12 z-10">
            {links.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-slate-50 text-3xl hover:scale-110 transition duration-500"
                onClick={() => setShowLinks(false)} 
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        </div>
        <a href="#" className="p-4"><img src={logo} alt="logo aulac tours" className="h-10 hover:scale-110 translate duration-300" /></a>
        <div className="hidden md:flex items-center text-xl space-x-5 text-slate-50 pr-8">
            <a href="#" className="">Accueil</a>
            <a href="#présentation" className="">Présentation</a>
            <a href="#galerie" className="">Galerie</a>
            <a href="#contact" className="">Contact</a>
        </div>
    </nav>
  )
}

export default NavBar