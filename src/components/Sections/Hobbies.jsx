import React from 'react';
import { Music, Camera, Palette, Sword, Waves, Activity } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    { name: 'Contrebasse', icon: <Music size={32} /> },
    { name: 'Guitare', icon: <Music size={32} /> },
    { name: 'Piano', icon: <Music size={32} /> },
    { name: 'Photographie', icon: <Camera size={32} /> },
    { name: 'Art et Dessin', icon: <Palette size={32} /> },
    { name: 'Jeux de stratégie', icon: <Sword size={32} /> },
    { name: 'Natation', icon: <Waves size={32} /> },
    { name: 'Tennis', icon: <Activity size={32} /> },
  ];

  return (
    <section id="hobbies" className="py-20 border-t border-pastelBlue/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-pastelBlue font-bold tracking-widest uppercase text-sm mb-2">06 — Loisirs</p>
        <h2 className="text-4xl font-bold text-textPrimary mb-12">En dehors du code.</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hobbies.map((hobby, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-pastelBlue/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group">
              <div className="text-pastelBlue mb-4 group-hover:text-textPrimary transition-colors duration-300 group-hover:scale-110 transform">
                {hobby.icon}
              </div>
              <h3 className="font-bold text-textPrimary">{hobby.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
