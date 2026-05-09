import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-pastelBlue/20">
      <div className="max-w-3xl mx-auto">
        <p className="text-pastelBlue font-bold tracking-widest uppercase text-sm mb-2">01 — À propos</p>
        <h2 className="text-4xl font-bold text-textPrimary mb-8">Qui je suis.</h2>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-pastelBlue/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pastelYellow opacity-20 rounded-bl-full"></div>
          
          <p className="text-lg text-textSecondary leading-relaxed relative z-10">
            Étudiante en deuxième année de <span className="font-semibold text-textPrimary">BUT Informatique</span>, 
            passionnée par le développement et les nouvelles technologies. Rigoureuse, 
            autonome et à l'aise en anglais, je recherche une alternance pour mettre en 
            pratique mes acquis et contribuer à des projets innovants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
