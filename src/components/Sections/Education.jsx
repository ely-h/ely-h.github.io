import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      date: ' Rentrée 2026',
      title: 'L3 MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)',
      school: 'Université-Paris-Saclay, Orsay',
      highlight: true
    },
    {
      date: '2024 - 2026',
      title: "BUT Informatique (Parcours: Développement, Conception et Réalisation d'applications)",
      school: "IUT d'Orsay Université-Paris-Saclay. Section anglophone."
    },
    {
      date: '2021 - 2024',
      title: 'Baccalauréat Général (NSI-MATH, classe européenne)',
      school: 'Lycée Newton, Clichy'
    }
  ];

  return (
    <section id="education" className="py-20 border-t border-pastelBlue/20">
      <div className="max-w-4xl mx-auto">
        <p className="text-pastelBlue font-bold tracking-widest uppercase text-sm mb-2">03 — Formation</p>
        <h2 className="text-4xl font-bold text-textPrimary mb-12">Mon parcours académique.</h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-pastelBlue/50 before:to-transparent">
          {educations.map((edu, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-pastelBlue text-textPrimary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <GraduationCap size={16} />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-pastelBlue/10 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-bold text-xs px-2 py-1 rounded-full ${edu.highlight ? 'bg-pastelYellow text-textPrimary' : 'bg-background text-textSecondary'}`}>
                    {edu.date}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-textPrimary mb-1">{edu.title}</h3>
                <p className="text-textSecondary text-sm">{edu.school}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
