import React from 'react'

function Présentation() {
  return (
    <section className="relative">  
        <div className="relative h-80 overflow-hidden bg-yellow-300 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <img
            className="h-full w-full object-cover"
            src={airport}
            alt="aulac tours"
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
                href="#contact"
                className="inline-flex rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-yellow-300 shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                Contactez-nous
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Présentation