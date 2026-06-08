import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center py-20">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-pastelBlue rounded-full blur-xl opacity-50 transform scale-110"></div>
        <img 
          src="/img/pfp.png" 
          alt="Elyssa Hallou" 
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg relative z-10"
        />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-textPrimary mb-6 tracking-tight font-flaviotte">
        Elyssa <span className="text-pastelYellow inline-block transform -rotate-2">Hallou</span>
      </h1>
      
      <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed mb-10">
        Recherche un contrat d'alternance en L3 MIAGE.
        <br className="hidden md:block" />
        <span className="font-medium text-textPrimary bg-pastelYellow/30 px-2 py-1 rounded">
          Durée 12 à 36 mois, rythme 2 semaines entreprise / 2 semaines école.
        </span>
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#projects" 
          className="px-8 py-3 bg-textPrimary text-white font-medium rounded-full hover:bg-pastelBlue hover:text-textPrimary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Voir mes projets
        </a>
        <a 
          href="#contact" 
          className="px-8 py-3 bg-white text-textPrimary font-medium rounded-full border border-pastelBlue hover:bg-pastelYellow transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
};

export default Hero;
