import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-pastelBlue/20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-pastelBlue font-bold tracking-widest uppercase text-sm mb-2">07 — Contact</p>
        <h2 className="text-4xl font-bold text-textPrimary mb-8">Entrons en contact.</h2>

        <p className="text-lg text-textSecondary max-w-2xl mx-auto mb-12">
          Je suis activement à la recherche d'une alternance à partir de
          <span className="font-bold text-textPrimary"> septembre 2026</span> pour un rythme de 2 semaines en entreprise et 2 semaines en école.
          Si mon profil vous intéresse, que vous avez des conseils, opportunités ou si vous avez des questions, n'hésitez pas à me contacter ! Je serai ravie de discuter avec vous.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-pastelBlue/20 shadow-sm">
            <div className="w-12 h-12 bg-pastelBlue/20 rounded-full flex items-center justify-center text-textPrimary mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-textPrimary mb-1">Email</h3>
            <a href="mailto:contact@elyssa.dev" className="text-textSecondary hover:text-pastelBlue transition-colors">
              contact@elyssa.dev
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-pastelBlue/20 shadow-sm">
            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-textPrimary mb-4 border border-pastelBlue/20">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-textPrimary mb-1">Localisation</h3>
            <p className="text-textSecondary">
              Clichy, Paris et périphérie, Île-de-France
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/ely-h"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full text-textPrimary hover:bg-pastelBlue/20 hover:text-pastelBlue transition-colors shadow-sm border border-pastelBlue/20"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/elyssa-hallou/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full text-textPrimary hover:bg-pastelBlue/20 hover:text-pastelBlue transition-colors shadow-sm border border-pastelBlue/20"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
