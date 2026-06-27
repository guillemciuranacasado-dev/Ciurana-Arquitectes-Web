import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { Project, Language, TranslationSet } from '../types';

interface ProjectCardProps {
  project: Project;
  lang: Language;
  onSelect: (project: Project) => void;
  translations: TranslationSet;
}

export default function ProjectCard({ project, lang, onSelect, translations }: ProjectCardProps) {
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

  return (
    <motion.div
      id={`project-card-${project.id}`}
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer bg-[#151515] border border-white/10 rounded-sm overflow-hidden h-[500px] flex flex-col justify-end p-6 md:p-8 transition-all duration-500 hover:border-[#C5A059]/40 hover:shadow-2xl hover:shadow-[#C5A059]/5 w-full flex-shrink-0"
    >
      {/* Background Image with Referrer Policy and Zoom Hover Effect */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.4] group-hover:brightness-[0.25]"
        />
        {/* Subtle linear gradient highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      </div>

      {/* Badges Overlays */}
      <div className="absolute top-6 left-6 z-20 flex flex-col space-y-2">
        <span className="bg-[#0A0A0A]/90 backdrop-blur-md border border-[#C5A059]/20 text-[#C5A059] text-[9px] tracking-[0.2em] uppercase font-semibold py-1 px-3 rounded-full">
          {getCategoryLabel(project.category)}
        </span>
      </div>

      {/* Main Content Info */}
      <div className="relative z-20 flex flex-col justify-between h-full pt-12">
        {/* Top-right corner Arrow Icon */}
        <div className="flex justify-end opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div className="w-10 h-10 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#0A0A0A]/80 backdrop-blur-md">
            <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
          </div>
        </div>

        {/* Bottom Details */}
        <div className="space-y-3">
          {/* Metadata Grid */}
          <div className="flex items-center space-x-4 text-gray-500 text-[10px] tracking-widest uppercase font-mono">
            <span className="flex items-center">
              <MapPin className="w-3 h-3 text-[#C5A059] mr-1" />
              {project.location.split(' (')[0]}
            </span>
            <span className="text-gray-800/60">|</span>
            <span className="flex items-center">
              <Calendar className="w-3 h-3 text-[#C5A059] mr-1" />
              {project.year}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-serif text-2xl text-white tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description Snippet */}
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 font-sans font-light tracking-wide pt-1">
            {project.description[lang]}
          </p>

          {/* Elegant Horizontal Divider with interactive expansion on hover */}
          <div className="pt-4">
            <div className="w-full h-[1px] bg-white/10 group-hover:bg-[#C5A059]/30 transition-colors duration-500 relative">
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-700 ease-out group-hover:w-1/3" />
            </div>
            <div className="flex justify-between items-center pt-3 text-[10px] tracking-widest text-gray-400 uppercase font-medium group-hover:text-[#C5A059] transition-colors duration-300">
              <span>{translations.viewCaseStudy}</span>
              <span className="font-mono text-xs">+{project.year}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
