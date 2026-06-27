import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface ContactFormProps {
  lang: Language;
  translations: TranslationSet;
}

export default function ContactForm({ lang, translations }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'architecture',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate high-end server-side database submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', type: 'architecture', message: '' });
    }, 1800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Direct Address & Contact Channels */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl text-white tracking-wide">
            Atelier Ciurana
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed font-sans font-light tracking-wide max-w-sm">
            Estem disponibles per a reunions presencials als nostres estudis o visites directes d'obra a tota Catalunya.
          </p>
        </div>

        {/* Contact list items */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#C5A059]/30 flex items-center justify-center bg-[#151515] transition-all duration-300">
              <Phone className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div>
              <span className="block text-[10px] tracking-widest text-gray-500 uppercase font-mono mb-0.5 font-semibold">
                {translations.contactPhone}
              </span>
              <a
                href="tel:647773025"
                className="text-gray-200 hover:text-[#C5A059] text-sm tracking-widest transition-colors duration-300"
              >
                +34 647 77 30 25
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#C5A059]/30 flex items-center justify-center bg-[#151515] transition-all duration-300">
              <Mail className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div>
              <span className="block text-[10px] tracking-widest text-gray-500 uppercase font-mono mb-0.5 font-semibold">
                {translations.contactEmail}
              </span>
              <a
                href="mailto:ciuranarquitectes@gmail.com"
                className="text-gray-200 hover:text-[#C5A059] text-sm tracking-widest transition-colors duration-300"
              >
                ciuranarquitectes@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#C5A059]/30 flex items-center justify-center bg-[#151515] transition-all duration-300">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div>
              <span className="block text-[10px] tracking-widest text-gray-500 uppercase font-mono mb-0.5 font-semibold">
                Atelier Principal
              </span>
              <span className="text-gray-200 text-sm font-sans font-light tracking-wide">
                Móra la Nova · Valls, Tarragona
              </span>
            </div>
          </div>
        </div>

        {/* Abstract Minimalist Map graphic / Blueprint pattern representing the territories */}
        <div className="p-6 rounded-sm bg-[#151515]/40 border border-white/10 relative overflow-hidden h-[160px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] opacity-60 z-0" />
          <div className="absolute w-[200%] h-[1px] bg-[#C5A059]/10 rotate-[22deg] top-1/2 left-[-50%] z-0" />
          <div className="absolute w-[200%] h-[1px] bg-[#C5A059]/5 -rotate-[12deg] top-1/3 left-[-50%] z-0" />
          <div className="relative z-10 text-center space-y-1">
            <div className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold font-mono">
              Camp de Tarragona & Ebre
            </div>
            <div className="text-xs text-gray-500 font-sans font-light">
              Valls · Móra la Nova · Móra d'Ebre · Tivissa · Aitona
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Premium Contact Form */}
      <div className="lg:col-span-7 bg-[#151515]/60 border border-white/10 p-8 rounded-sm shadow-xl relative">
        <AnimatePresence mode="wait">
          {!submitSuccess ? (
            <motion.form
              key="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] tracking-widest text-gray-500 uppercase font-mono">
                    {translations.contactFormName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#C5A059] text-gray-200 py-2.5 px-1 text-sm outline-none transition-all duration-300 font-sans font-light placeholder-gray-700"
                    placeholder="E.g. Martí Ciurana"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] tracking-widest text-gray-500 uppercase font-mono">
                    {translations.contactFormEmail} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#C5A059] text-gray-200 py-2.5 px-1 text-sm outline-none transition-all duration-300 font-sans font-light placeholder-gray-700"
                    placeholder="marti@email.com"
                  />
                </div>
              </div>

              {/* Project Type selection */}
              <div className="space-y-1.5">
                <label className="block text-[9px] tracking-widest text-gray-500 uppercase font-mono">
                  {translations.contactFormType}
                </label>
                <div className="relative">
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#C5A059] text-gray-300 py-2.5 px-1 text-sm outline-none transition-all duration-300 appearance-none font-sans font-light cursor-pointer"
                  >
                    <option value="architecture">{translations.contactFormTypeArch}</option>
                    <option value="rehabilitation">{translations.contactFormTypeRehab}</option>
                    <option value="restoration">{translations.contactFormTypeRest}</option>
                    <option value="other">{translations.contactFormTypeOther}</option>
                  </select>
                  <div className="absolute right-2 top-3 pointer-events-none text-gray-500 text-[10px]">▼</div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-[9px] tracking-widest text-gray-500 uppercase font-mono">
                  {translations.contactFormMsg} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#151515] border border-white/10 focus:border-[#C5A059] text-gray-200 p-3 text-sm outline-none transition-all duration-300 font-sans font-light placeholder-gray-700 rounded-sm resize-none"
                  placeholder="..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C5A059] hover:bg-white text-black font-semibold tracking-widest uppercase text-xs py-4 px-6 rounded-sm flex items-center justify-center space-x-2 transition-all duration-300 focus:outline-none disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>{translations.contactFormSending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{translations.contactFormSend}</span>
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center py-16 px-4 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-2xl text-white tracking-wide">
                Sol·licitud Rebuda / Solicitud Recibida
              </h3>
              <p className="text-gray-300 text-sm font-sans font-light leading-relaxed max-w-sm">
                {translations.contactFormSuccess}
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-6 border border-[#C5A059]/30 hover:border-[#C5A059] text-[#C5A059] hover:text-white px-6 py-2 rounded-sm text-xs tracking-widest uppercase font-mono transition-colors duration-300 focus:outline-none"
              >
                Tornar a enviar / Volver a enviar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
