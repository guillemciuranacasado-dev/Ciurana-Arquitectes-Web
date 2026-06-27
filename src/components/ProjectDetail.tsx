import { motion } from 'motion/react';
import { X, MapPin, Calendar, Compass, Shield, Award, Layers, CheckCircle2 } from 'lucide-react';
import { Project, Language, TranslationSet } from '../types';

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  translations: TranslationSet;
}

export default function ProjectDetail({ project, isOpen, onClose, lang, translations }: ProjectDetailProps) {
  if (!project) return null;

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'architecture':
        return translations.categoryArch;
      case 'rehabilitation':
        return translations.categoryRehab;
      case 'restoration':
        return translations.categoryRest;
      default:
        return '';
    }
  };

  const getSpecIcon = (labelCa: string) => {
    const term = labelCa.toLowerCase();
    if (term.includes('superfície') || term.includes('edificació')) return <Layers className="w-4 h-4 text-[#C5A059]" />;
    if (term.includes('materials') || term.includes('fusta') || term.includes('morter')) return <Compass className="w-4 h-4 text-[#C5A059]" />;
    if (term.includes('conservació') || term.includes('categoria')) return <Shield className="w-4 h-4 text-[#C5A059]" />;
    return <Award className="w-4 h-4 text-[#C5A059]" />;
  };

  return (
    <motion.div
      id={`project-detail-overlay-${project.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#0A0A0A]/98 backdrop-blur-xl overflow-y-auto"
    >
      {/* Upper Navigation Row */}
      <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent border-b border-white/5">
        <div className="flex items-center space-x-3 text-xs tracking-widest text-[#C5A059] font-mono uppercase font-semibold">
          <span>Ciurana</span>
          <span className="text-zinc-700">/</span>
          <span>{getCategoryLabel(project.category)}</span>
        </div>
        
        {/* Close Button */}
        <button
          id="project-detail-close"
          onClick={onClose}
          className="group flex items-center space-x-2 text-gray-400 hover:text-[#C5A059] transition-colors duration-300 focus:outline-none"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono hidden sm:inline-block">
            {translations.closeBtn}
          </span>
          <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#C5A059]/30 flex items-center justify-center bg-[#151515] transition-all duration-300">
            <X className="w-4 h-4" />
          </div>
        </button>
      </div>

      {/* Main Two-Column Structure */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 pt-28 pb-12">
        {/* Left Column: Huge Immersive Image */}
        <div className="lg:col-span-6 px-6 md:px-12 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-[#C5A059]/5"
          >
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            
            {/* Title Badge over image */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <span className="bg-[#C5A059] text-black text-[9px] tracking-[0.25em] uppercase font-bold py-1 px-3 rounded-full inline-block mb-3">
                {getCategoryLabel(project.category)}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white tracking-wide leading-tight">
                {project.title}
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Case Study Narrative & Specifications */}
        <div className="lg:col-span-6 px-6 md:px-12 lg:pl-4 lg:pr-16 flex flex-col justify-center mt-12 lg:mt-0">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Location & Year Row */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-mono tracking-widest uppercase pb-4 border-b border-white/10">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 text-[#C5A059] mr-2" />
                <span className="text-zinc-400 mr-1.5">{translations.locationLabel}:</span>
                <span className="text-white font-sans">{project.location}</span>
              </span>
              <span className="hidden sm:inline-block text-zinc-800">|</span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 text-[#C5A059] mr-2" />
                <span className="text-zinc-400 mr-1.5">{translations.yearLabel}:</span>
                <span className="text-white font-sans">{project.year}</span>
              </span>
            </div>

            {/* Core Storytelling Paragraph */}
            <div className="space-y-4">
              <p className="text-[#C5A059] text-sm tracking-wider font-light italic leading-relaxed">
                "{project.description[lang]}"
              </p>
              <p className="text-gray-300 text-sm leading-relaxed font-sans font-light tracking-wide pt-2">
                {project.story[lang]}
              </p>
            </div>

            {/* Specifications Cards Grid */}
            <div className="space-y-4">
              <h4 className="font-serif text-sm text-white tracking-[0.2em] uppercase font-semibold">
                Fitxa Tècnica / Ficha Técnica
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-sm bg-[#151515] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-2 text-gray-500 text-[10px] tracking-widest uppercase font-mono mb-1.5">
                      {getSpecIcon(spec.label.ca)}
                      <span>{spec.label[lang]}</span>
                    </div>
                    <span className="text-gray-200 text-xs font-sans font-light leading-relaxed block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key restored/built features */}
            <div className="space-y-4 pt-2">
              <h4 className="font-serif text-sm text-white tracking-[0.2em] uppercase font-semibold">
                Aspectes Destacats / Aspectos Destacados
              </h4>
              <ul className="space-y-3">
                {project.keyFeatures[lang].map((feature, i) => (
                  <li key={i} className="flex items-start text-xs text-gray-400 font-sans font-light tracking-wide leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
