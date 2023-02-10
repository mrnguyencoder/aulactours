import React from 'react'

function Footer() {
  return (
    <footer className='bg-slate-800'>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-8 text-center text-sm text-gray-300 sm:text-left">
              <span className="block sm:inline hover:text-yellow-400">&copy; {new Date().getFullYear()} AuLac Tours</span>{' '}
              <span className="block sm:inline">Tous droits réservés.</span>
              <a href="https://nguyendev.fr/"
                className="hover:text-[#61dbfb]"
                target="_blank"
                rel="noopener noreferrer" >
                Made by Nguyen Dev
             </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer