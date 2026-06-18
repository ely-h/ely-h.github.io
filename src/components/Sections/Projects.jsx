import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Skein: Outil de création de GANTT',
      description: "Outil de planification en diagramme de Gantt fait maison, né du constat que les alternatives en ligne sont souvent payantes ou datées. Développé en React 19 et TypeScript via du vibe-coding assisté par IA, il propose une gestion de projets 100% locale, fluide et visuelle. Plus d'info sur github !",
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind v4', 'GitHub Actions (CI/CD)'],
      image: '/img/skein.png',
      link: 'https://github.com/ely-h/skein'
    },
    {
      title: 'Gestionnaire de groupes TD/TP',
      description: "Plateforme complète (SAE S3) pour la répartition automatique des groupes d'étudiants. Site PHP MVC + API REST, algorithmes de distribution optimisés en Java, et application desktop Java Swing connectée.",
      tech: ['PHP MVC', 'API REST', 'Java', 'Swing', 'MySQL', 'Figma'],
      image: '/img/tdtp.png',
      link: 'https://github.com/ely-h/Creation-groupe-td-et-tp'
    },
    {
      title: 'Newton Plays Pokémon !',
      description: "Projet personnel inspiré de 'Twitch Plays Pokémon'. Un script Python qui se connecte à l'API Twitch en temps réel et laisse les viewers contrôler un jeu Pokémon via les commandes du chat. Plus d'info sur github!",
      tech: ['Python', 'API Twitch', 'Automatisation', 'IRC'],
      image: '/img/newton.png',
      link: 'https://github.com/ely-h/newton-plays-pokemon'
    },
    {
      title: 'Application de gestion pour la CIUP',
      description: "Application de gestion pour la Cité Internationale Universitaire de Paris. Conception UML avec Visual Paradigm, développement orienté objet en Java Swing.",
      tech: ['Java', 'Swing', 'UML', 'Programmation Orientée Objet (OOP/POO)', 'Figma'],
      image: '/img/ciup.png',
      link: 'https://github.com/ely-h/transverse'
    },
    {
      title: 'La Traversée',
      description: "Jeu multijoueur local massif en 2D, où les survivants doivent traverser une zone hostile pleine de zombies pour atteindre l'arrivée. Serveur node.js et communication des informations entre le serveur, le client et unity via Socket.io. Plus d'info sur github!",
      tech: ['Unity', 'C#', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Socket.io'],
      image: '/img/latraversee.png',
      link: 'https://github.com/ely-h/la-traversee'
    },
    {
      title: 'Étude BDD — IGDB',
      description: "Analyse et exploitation de la base de données de l'IGDB avec Oracle SQL Developer. Conception de schémas, requêtes complexes, procédures PL/SQL et administration BD.",
      tech: ['Oracle', 'PL/SQL', 'SQL Developer'],
      image: '/img/igdb2.png',
      link: '#'
    },
    {
      title: 'Portfolio',
      description: "Le site que vous regardez actuellement",
      tech: ['Tailwind', 'React', 'JavaScript', 'HTML/CSS', 'Vite'],
      image: '/img/portfolio.png',
      link: 'https://github.com/ely-h/ely-h.github.io'
    },
    {
      title: 'Code Game Jam 2026',
      description: "Jeu vidéo développé en 30 heures en équipe lors de la 10e édition de la Code Game Jam (IUT Montpellier-Sète). Thème : « Fête des Clics ».",
      tech: ['C#', 'Unity', "Travail d'équipe"],
      image: '/img/cgj.jpg',
      link: 'https://codegamejam.extragames.fr/'
    },
    {
      title: "Mise en place d'un poste pour le developpement",
      description: "Installation Linux sur Raspberry Pi, configuration MariaDB, gestion de serveur et provisionnement complet d'un environnement de développement.",
      tech: ['Linux', 'MariaDB', 'Raspberry Pi', 'Bash'],
      image: '/img/raspi.png',
      link: '#'
    },
    {
      title: 'Jeu 2D en C++ / SDL',
      description: "Jeu 2D universitaire en C++ avec SDL2 pour le rendu graphique et la gestion des événements. Architecture orientée objet complète avec boucle de jeu custom.",
      tech: ['C++', 'SDL2', 'POO', '2D'],
      image: '/img/sdl.png',
      link: '#'
    },
    {
      title: 'Site Atelier Loisirs pour Animaux',
      description: "Projet web universitaire - front-end complet pour un atelier de loisirs pour animaux. Cahier des charges, gestion de projet, HTML/CSS avancé et conception UI/UX.",
      tech: ['HTML', 'CSS', 'UI/UX'],
      image: '/img/cwab.png',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-pastelBlue/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-pastelBlue font-bold tracking-widest uppercase text-sm mb-2">05 — Projets</p>
        <h2 className="text-4xl font-bold text-textPrimary mb-12">Ce que j'ai construit.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-pastelBlue/20 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-48 overflow-hidden bg-pastelBlue/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14px' fill='%2394a3b8'%3EImage indisponible%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-textPrimary mb-3">{project.title}</h3>
                <p className="text-textSecondary text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-2 py-1 bg-pastelYellow/30 text-textPrimary rounded">
                      {t}
                    </span>
                  ))}
                </div>

                {project.link !== '#' && (
                  <div className="mt-auto pt-4 border-t border-pastelBlue/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-pastelBlue hover:text-textPrimary transition-colors"
                    >
                      Voir le projet <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
