import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: 'Langages', skills: ['Python', 'Java', 'PHP', 'C', 'C++', 'C#'] },
    { title: 'Front-end', skills: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Back-end', skills: ['Python', 'PHP', 'API REST', 'Java'] },
    { title: 'Base de données', skills: ['SQL', 'SQLite', 'MySQL'] },
    { title: 'Réseau', skills: ['TCP/IP', 'DHCP', 'DNS', 'routage'] },
    { title: 'Outils', skills: ['GIT', 'Docker', 'Linux', 'UML', 'Figma', 'Proxmox'] },
    { title: 'Mobile', skills: ['Android (Java)'] },
    { title: 'Langues', skills: ['Français (C2)', 'Anglais (C1)', 'Allemand (A2)'] },
  ];

  return (
    <section id="skills" className="py-20 border-t border-pastelBlue/20">
      <div className="max-w-5xl mx-auto">
        <p className="text-pastelBlue font-bold tracking-widest uppercase text-sm mb-2">04 — Compétences</p>
        <h2 className="text-4xl font-bold text-textPrimary mb-12">Ce avec quoi je travaille.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-pastelBlue/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-textPrimary mb-4 border-b border-pastelBlue/20 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-pastelBlue/10 text-textSecondary text-sm px-3 py-1 rounded-md border border-pastelBlue/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
