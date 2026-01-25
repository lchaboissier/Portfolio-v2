import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = new FormData(e.target as HTMLFormElement);
      form.append("access_key", "d9258d38-6f1a-4eac-886c-d6110ef1037b");

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });

      const data = await response.json();
      console.log('Web3Forms response:', data);

      if (data.success) {
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        console.error('Erreur Web3Forms:', data);
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Contactez-moi
          </h2>
          <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            N'hésitez pas à me contacter.
            Je reste ouvert aux nouvelles opportunités !
          </p>
        </motion.div>

        {/* Liens sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-6 mb-12"
        >
          {[
            { icon: Mail, href: 'mailto:lucachaboissier@outlook.fr', label: 'Email' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/luca-chaboissier/', label: 'LinkedIn' },
            { icon: Github, href: 'https://github.com/lchaboissier', label: 'GitHub' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-[#1a1a1f] border border-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-[#6366f1] hover:border-[#6366f1]/30 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#1a1a1f] border border-white/5 rounded-2xl p-8"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-block mb-4"
              >
                <CheckCircle2 className="text-green-500" size={64} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
              <p className="text-gray-400">Je vous répondrai dans les plus brefs délais.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f0f14] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f0f14] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-all"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0f0f14] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className="w-full px-6 py-4 bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
