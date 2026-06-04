import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-pastelBlue/20">
      <div className="max-w-4xl mx-auto">
        <p className="text-pastelBlue font-bold tracking-widest uppercase text-sm mb-2">02 — Expérience Professionnelle</p>
        <h2 className="text-4xl font-bold text-textPrimary mb-12">Mon parcours professionnel.</h2>
        
        <div className="relative border-l-2 border-pastelBlue/30 pl-8 pb-8">
          <div className="absolute -left-[11px] top-0 bg-pastelBlue text-textPrimary p-1 rounded-full shadow-md">
            <Briefcase size={16} />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-pastelBlue/10 hover:border-pastelYellow transition-colors group">
            <span className="inline-block px-3 py-1 bg-pastelYellow/40 text-textPrimary text-xs font-bold rounded-full mb-4">
              En cours (10/04/26 au 20/07/26)
            </span>
            <h3 className="text-3xl font-bold text-textPrimary mb-1 group-hover:text-pastelBlue transition-colors">
              Ingénieur Systèmes Embarqués
            </h3>
            <p className="text-textSecondary font-medium mb-4">Marine Nationale (ALFOST), Base Navale de Brest</p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-textPrimary mb-2 text-sm uppercase tracking-wider">Missions et Réalisations Techniques : </h4>
              <ul className="list-disc list-inside text-textSecondary space-y-1">
                <li><strong>Architecture VoIP et Système :</strong> Conception et déploiement d'une infrastructure de bout en bout en réseau LAN fermé (Serveur Asterisk 20 LTS sur un PC-Serveur, clients SIP Linphonec sur 12 Raspberry Pi 5 sous Debian 12).</li>
                <li><strong>Développement Asynchrone :</strong> Création d'une application tactile industrielle (Python 3, Kivy, Asyncio) pilotant le système audio en sous-processus, avec implémentation d'un mode alternat (Push-to-Talk).</li>
                <li><strong>Ingénierie Réseau et Audio :</strong> Développement d'un protocole UDP sur mesure (port 5555) pour la signalisation des conférences multi-postes et routage matériel bas niveau des flux sonores via ALSA.</li>
                <li><strong>Automatisation et Déploiement :</strong> Automatisation de la configuration du parc matériel de 12 Raspberry Pi via Ansible, et création de services Systemd pour garantir l'exécution autonome des applicatifs au démarrage.</li>
                <li><strong>Documentation et Pilotage :</strong> Génération automatique de la documentation technique du code avec Sphinx, rédaction du manuel d'utilisation, et résolution de contraintes matérielles critiques (défaillances NAND, pivot architectural complet).</li>
                <li><strong>Gestion de Projet & Résolution de problèmes :</strong> Audit et pivot technologique complet (migration d'un système P2P Jami vers une stack SIP standard P2P).</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-textPrimary mb-2 text-sm uppercase tracking-wider">Technologies :</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Ansible', 'Proxmox', 'Asterisk', 'SIP/VoIP', 'LXC', 'Debian Linux', 'Systemd', 'Raspberry Pi', 'Asyncio', 'Kivy', 'Linphone', 'ALSA', 'Git', 'Sphinx', 'Figma'].map(tech => (
                  <span key={tech} className="bg-background text-textSecondary px-3 py-1 rounded-md text-sm border border-pastelBlue/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
