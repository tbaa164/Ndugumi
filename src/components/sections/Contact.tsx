import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import logoNdugumi from './assets/images/logo.png';
import { EMAILJS_CONFIG, isEmailJSConfigured } from '@/lib/env';

// Initialisation d'EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Veuillez remplir tous les champs du formulaire.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!isEmailJSConfigured()) {
        console.error('Configuration EmailJS manquante');
        setSubmitStatus({
          success: false,
          message: 'Erreur de configuration du service de messagerie. Veuillez réessayer plus tard.'
        });
        setIsSubmitting(false);
        return;
      }

      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form.current!,
        EMAILJS_CONFIG.publicKey
      );

      console.log('Email envoyé avec succès!', result.text);
      setSubmitStatus({
        success: true,
        message: 'Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur détaillée:', error);
      setSubmitStatus({
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex justify-center mb-6">
            <img
              src={logoNdugumi}
              alt="Logo Ndugumi"
              className="h-16 w-auto object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ndugumi-green-dark mb-4">Contactez-Nous</h2>
          <p className="text-lg text-gray-600">
            Vous souhaitez devenir fournisseur, livreur ou agriculteur ? Ou vous avez une question sur nos services ? 
            Nous sommes là pour vous accompagner dans votre démarche !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-ndugumi-green-dark mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Envoyez-nous un message
            </h3>
            
            {/* Message de statut */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              {/* Champs cachés pour le template */}
              <input type="hidden" name="to_email" value="Ndugumi@ndugumi.com" />
              <input type="hidden" name="email" id="from_email" />
              <input type="hidden" name="subject" value="Nouveau message depuis le site Ndugumi" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom et Prénom</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-ndugumi-green focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="Entrez votre nom complet"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        handleChange(e);
                        const fromEmailInput = document.getElementById('from_email') as HTMLInputElement;
                        if (fromEmailInput) {
                          fromEmailInput.value = e.target.value;
                        }
                      }}
                      className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-ndugumi-green focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="Entrez votre adresse email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Je souhaite devenir</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="title"
                    value={formData.subject}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-ndugumi-green focus:ring-0 transition-colors duration-200 text-gray-900 appearance-none bg-white"
                    required
                  >
                    <option value="">Sélectionnez votre objectif</option>
                    <option value="fournisseur">Fournisseur - Je veux fournir des produits</option>
                    <option value="livreur">Livreur - Je veux effectuer des livraisons</option>
                    <option value="agriculteur">Agriculteur - Je veux vendre ma production</option>
                    <option value="client">Client - J'ai une question sur vos services</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-ndugumi-green focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Écrivez votre message ici..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ndugumi-green hover:bg-ndugumi-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ndugumi-green transition-colors duration-150 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer le Message'
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-ndugumi-green-dark mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Nos Coordonnées
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-ndugumi-green-light text-ndugumi-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Adresse</h4>
                  <a 
                    href="https://maps.app.goo.gl/sPfoHFJuDebjQ9789?g_st=iw" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-1 text-gray-600 hover:text-ndugumi-green transition-colors duration-200 flex items-center"
                  >
                    <span>Mbao, Dakar, Sénégal</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-ndugumi-green-light text-ndugumi-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <a 
                    href="mailto:ndugumi@ndugumi.com" 
                    className="mt-1 text-gray-600 hover:text-ndugumi-green transition-colors duration-200 flex items-center"
                  >
                    <span>Ndugumi@ndugumi.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-ndugumi-green-light text-ndugumi-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Téléphone</h4>
                  <p className="mt-1 text-gray-600">+221 77 123 45 67</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Heures d'ouverture</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ndugumi-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">Lundi - Vendredi</span>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">8h - 18h</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ndugumi-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">Samedi</span>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">9h - 16h</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ndugumi-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">Dimanche</span>
                    </div>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
