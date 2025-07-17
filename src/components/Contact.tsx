import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: '07 67 68 30 06',
      link: 'tel:0767683006'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'nunialiovas@gmail.com',
      link: 'mailto:nunialiovas@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: '9 chemin de la ferme\n69120 Vaulx-en-Velin',
      link: 'https://maps.google.com/?q=9+chemin+de+la+ferme+69120+Vaulx-en-Velin'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: 'Lun-Ven: 9h00-18h00\nSam: 9h00-12h00',
      link: null
    }
  ];

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
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Contactez-nous</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Une question, un projet, une envie de nous rejoindre ? Nous sommes là pour vous écouter
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">Restons en Contact</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4 md:mb-6 lg:mb-8">
            L'équipe d'AVAS est à votre disposition pour répondre à toutes vos questions et vous accompagner 
            dans vos projets. Que vous souhaitiez en savoir plus sur nos actions, devenir partenaire, 
            rejoindre nos bénévoles ou simplement échanger avec nous, n'hésitez pas à nous contacter.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Nous nous engageons à vous répondre dans les plus brefs délais et à vous proposer 
            un accompagnement personnalisé selon vos besoins.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-8 md:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const content = (
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group border-t-4 border-purple-500">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{info.title}</h3>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed text-sm md:text-base">
                  {info.details}
                </p>
              </div>
            );

            return info.link ? (
              <a key={index} href={info.link} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
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
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
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
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-vertical text-sm md:text-base"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2 text-sm md:text-base"
                  >
                    <Send size={16} className="md:w-5 md:h-5" />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 md:h-56 lg:h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mx-auto mb-3 md:mb-4" />
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Notre Localisation</h4>
                    <p className="text-gray-600 text-sm md:text-base">9 chemin de la ferme<br />69120 Vaulx-en-Velin</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Suivez-nous</h4>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  Restez connectés avec AVAS sur nos réseaux sociaux pour ne rien manquer de nos actualités.
                </p>
                <div className="flex space-x-3 md:space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Facebook size={16} className="md:w-5 md:h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                  >
                    <Instagram size={16} className="md:w-5 md:h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200"
                  >
                    <Linkedin size={16} className="md:w-5 md:h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-purple-50 rounded-lg p-4 md:p-6 border-l-4 border-purple-500">
                <h4 className="text-base md:text-lg font-bold text-purple-900 mb-2 md:mb-3">Réponse Rapide</h4>
                <p className="text-purple-800 text-xs md:text-sm leading-relaxed">
                  Notre équipe s'engage à répondre à tous les messages dans un délai de 24 heures 
                  pendant les jours ouvrables. Pour les urgences, n'hésitez pas à nous appeler directement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;