import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useInfos } from '../hooks/useInfos';
import { useMessages } from '../hooks/useMessages';

const Contact: React.FC = () => {
  const { site } = useInfos();
  const { addMessage } = useMessages();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // Create message data for backend
      const messageData = {
        fullName: formData.name,
        email: formData.email,
        subject: formData.subject,
        content: formData.content,
      };
      
      await addMessage(messageData);
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', content: ''});
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjects = [
    'Information générale',
    'Partenariat',
    'Bénévolat',
    'Formation',
    'Médiation urbaine',
    'Pôle jeunesse',
    'Pôle citoyenneté',
    'Autre'
  ];

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/contact-hero.png')` }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Contactez-nous</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Une question, un projet, une envie de nous rejoindre ? Nous sommes là pour vous écouter
          </p>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Envoyez-nous un message</h3>

              {isSubmitted ? (
                <div className="text-center py-6 md:py-8">
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-3 md:mb-4" />
                  <h4 className="text-lg md:text-xl font-bold text-green-600 mb-2">Message envoyé !</h4>
                  <p className="text-gray-600 text-sm md:text-base">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Message *
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical text-sm md:text-base"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  <div className="mt-auto">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} className="md:w-5 md:h-5" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-800 text-white py-12 md:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Soutenez AVAS</h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
                    Vos dons nous permettent de poursuivre nos actions pour les jeunes, la médiation urbaine et la citoyenneté à Vaulx-en-Velin.
                    Chaque contribution compte et fait une réelle différence.
                  </p>
                  <a
                    href={site?.social?.donation || '#'} // Replace with your real donation link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-700 font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base"
                  >
                    Faire un Don
                  </a>
                </div>
              </div>
              {/* Quick Info */}
              <div className="bg-blue-50 rounded-lg p-4 md:p-6 border-l-4 border-blue-500">
                <h4 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3">Réponse Rapide</h4>
                <p className="text-blue-800 text-xs md:text-sm leading-relaxed">
                  Notre équipe s'engage à répondre à tous les messages dans un délai de 24 heures
                  pendant les jours ouvrables. Pour les urgences, n'hésitez pas à nous appeler directement.
                </p>
              </div>
            </div>

          </div>
          {/* Map Container */}
          <div className="relative mt-5 h-64 md:h-80 lg:h-96 w-full shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.20062217616!2d4.9092728766320395!3d45.787208311828714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c064fb045e21%3A0xa15a163afa5767b3!2s9%20Chem.%20de%20la%20Ferme%2C%2069120%20Vaulx-en-Velin%2C%20France!5e0!3m2!1sen!2sma!4v1753363520559!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation AVAS - 9 chemin de la ferme, Vaulx-en-Velin"
              className="w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;