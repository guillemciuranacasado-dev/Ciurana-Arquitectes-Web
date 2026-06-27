import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowDown, MapPin, Sparkles, Hammer, ShieldAlert } from 'lucide-react';
import { Language } from './types';
import { TRANSLATIONS, PROJECTS } from './data';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import ContactForm from './components/ContactForm';

export default function App() {
  const [lang, setLang] = useState<Language>('ca');
  const [activeCategory, setActiveCategory] = useState<'all' | 'architecture' | 'rehabilitation' | 'restoration'>('all');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const t = TRANSLATIONS[lang];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active category
  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  // Scroll horizontal gallery helper
  const scrollGallery = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Average card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenDetail = (project: any) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    // Give time to exit animation before clearing project
    setTimeout(() => {
      setSelectedProject(null);
    }, 500);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-gray-200 selection:bg-[#C5A059]/30 selection:text-white">
      {/* Sleek Header Navigation */}
      <Navbar currentLang={lang} setLang={setLang} translations={t} />

      {/* 1. IMMERSIVE HERO SECTION (Full-Screen) */}
      <section
        id="hero"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Dark Elegant Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/tivissa_mas_capcir_1782580447634.jpg"
            alt="Masia de Capçir de Ciurana"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.22] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/35 to-[#0A0A0A]/85" />
        </div>

        {/* Content Centered */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-2 text-[#C5A059]"
          >
            <span className="h-[1px] w-6 bg-[#C5A059]" />
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-mono font-semibold">
              {t.heroSubtitle}
            </span>
            <span className="h-[1px] w-6 bg-[#C5A059]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-[0.08em] leading-none uppercase font-light"
          >
            CIURANA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans text-sm md:text-base text-gray-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            {t.heroTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-6"
          >
            <button
              id="hero-cta-btn"
              onClick={scrollToContact}
              className="px-8 py-3.5 border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:text-white bg-black/40 hover:bg-[#C5A059]/10 text-xs tracking-[0.25em] uppercase font-semibold rounded-sm transition-all duration-300 cursor-pointer"
            >
              Atelier / {t.navContact}
            </button>
          </motion.div>
        </div>

        {/* Mouse/Scroll animated indicator at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center hidden sm:block">
          <span className="block text-[9px] tracking-[0.25em] text-gray-500 uppercase font-mono mb-2">
            {t.scrollDown}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex justify-center"
          >
            <ArrowDown className="w-4 h-4 text-[#C5A059]" />
          </motion.div>
        </div>
      </section>

      {/* 2. TRAJECTÒRIA (STORYTELLING & METRICS) */}
      <section
        id="story"
        className="py-24 md:py-32 border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#151515] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs tracking-[0.2em] text-[#C5A059] uppercase font-mono font-semibold block">
                  01 / {t.navStory}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-wide leading-tight">
                  {t.philosophyTitle}
                </h2>
                <div className="w-16 h-[1px] bg-[#C5A059] mt-4" />
              </div>

              <div className="space-y-5 text-gray-400 font-sans font-light text-sm md:text-base leading-relaxed tracking-wide">
                <p className="font-medium text-[#C5A059]/90">
                  {t.philosophySubtitle}
                </p>
                <p>{t.philosophyText1}</p>
                <p>{t.philosophyText2}</p>
              </div>

              {/* High-end key figures panel */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="space-y-1">
                  <span className="block font-serif text-3xl md:text-4xl text-[#C5A059] font-light">
                    25+
                  </span>
                  <span className="block text-[9px] tracking-widest text-gray-500 uppercase font-mono">
                    {t.yearsExperience}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block font-serif text-3xl md:text-4xl text-[#C5A059] font-light">
                    80+
                  </span>
                  <span className="block text-[9px] tracking-widest text-gray-500 uppercase font-mono">
                    {t.projectsCompleted}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block font-serif text-3xl md:text-4xl text-[#C5A059] font-light">
                    12+
                  </span>
                  <span className="block text-[9px] tracking-widest text-gray-500 uppercase font-mono">
                    {t.restoredHeritage}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-6">
              <div className="relative group">
                {/* Visual border accents */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C5A059]/20 z-0" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C5A059]/20 z-0" />
                
                {/* Main Image */}
                <div className="relative z-10 rounded-sm overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
                  <img
                    src="/src/assets/images/aitona_esglesia_1782580460287.jpg"
                    alt="Església d'Aitona restauració"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 filter brightness-[0.65]"
                  />
                  {/* Subtle dark layout overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-[#0A0A0A]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] tracking-widest text-gray-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Església d'Aitona</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES & PROJECTS SHOWCASE (Horizontal Scroll Gallery) */}
      <section
        id="projects"
        className="py-24 md:py-32 border-t border-white/10 bg-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.2em] text-[#C5A059] uppercase font-mono font-semibold block">
                02 / {t.navProjects}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-wide">
                Trajectòria de Projectes
              </h2>
            </div>

            {/* Gallery Navigation Controls */}
            <div className="flex items-center space-x-4">
              <button
                id="gallery-prev-btn"
                onClick={() => scrollGallery('left')}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C5A059]/40 flex items-center justify-center text-gray-400 hover:text-[#C5A059] transition-colors bg-[#151515] focus:outline-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="gallery-next-btn"
                onClick={() => scrollGallery('right')}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C5A059]/40 flex items-center justify-center text-gray-400 hover:text-[#C5A059] transition-colors bg-[#151515] focus:outline-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Category Filter Menu */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-white/10">
            {[
              { id: 'all', label: t.categoryAll },
              { id: 'architecture', label: t.categoryArch },
              { id: 'rehabilitation', label: t.categoryRehab },
              { id: 'restoration', label: t.categoryRest },
            ].map((cat) => (
              <button
                id={`filter-btn-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`text-xs tracking-widest uppercase py-2.5 px-5 transition-all duration-300 rounded-sm focus:outline-none cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A059] text-black font-semibold shadow-lg'
                    : 'text-gray-400 hover:text-[#C5A059] border border-white/10 bg-[#151515] hover:border-[#C5A059]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Draggable/Horizontal Scroll Gallery Track */}
          <div className="relative overflow-visible">
            <div
              id="projects-gallery-track"
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto overflow-y-hidden py-4 px-1 no-scrollbar scroll-smooth snap-x touch-pan-x"
              style={{ scrollbarWidth: 'none' }}
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div key={project.id} className="w-[300px] sm:w-[420px] snap-start flex-shrink-0">
                    <ProjectCard
                      project={project}
                      lang={lang}
                      onSelect={handleOpenDetail}
                      translations={t}
                    />
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-12 text-gray-500 text-xs tracking-widest uppercase font-mono">
                  No s'han trobat projectes / No se encontraron proyectos
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 4. WORK PHILOSOPHY / VALUE PROPOSITIONS */}
      <section
        id="philosophy"
        className="py-24 md:py-32 border-t border-white/10 bg-[#151515]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs tracking-[0.2em] text-[#C5A059] uppercase font-mono font-semibold">
              03 / {t.navPhilosophy}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
              Mètode i Compromís constructiu
            </h2>
            <p className="text-gray-400 text-xs tracking-wide leading-relaxed font-sans font-light">
              La nostra dedicació des de l'esbós teòric arquitectònic fins al detall final de la fusteria artesana.
            </p>
          </div>

          {/* 3-Column Luxury Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-sm bg-[#0A0A0A] border border-white/10 space-y-6 hover:border-[#C5A059]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#151515]">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl text-white tracking-wide">
                Rigidesa Tècnica & Sinceritat
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-sans font-light tracking-wide">
                Arquitectura autèntica sense artificis. Deixem que el formigó texturitzat, els perfils d'acer cru i la pedra de calç parlin directament, reflectint sinceritat constructiva a cada paret.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-sm bg-[#0A0A0A] border border-white/10 space-y-6 hover:border-[#C5A059]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#151515]">
                <Hammer className="w-4 h-4 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl text-white tracking-wide">
                Mestratge de l'Ofici
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-sans font-light tracking-wide">
                El diàleg directe amb els artesans tancadors, pedrers i constructors locals garanteix l'excel·lència física del projecte. Estem presents a peu d'obra diàriament.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-sm bg-[#0A0A0A] border border-white/10 space-y-6 hover:border-[#C5A059]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#151515]">
                <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl text-white tracking-wide">
                Conservació Arqueològica
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-sans font-light tracking-wide">
                El respecte per la història d'un monument requereix d'un rigorós procés científic. Apliquem micro-neteges làser i consolidació estructural imperceptible per salvaguardar el passat.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CONTACT & ATELIER SECTION */}
      <section
        id="contact"
        className="py-24 md:py-32 border-t border-white/10 bg-gradient-to-b from-[#151515] to-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="space-y-3 max-w-xl">
            <span className="text-xs tracking-[0.2em] text-[#C5A059] uppercase font-mono font-semibold block">
              04 / {t.navContact}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
              {t.contactTitle}
            </h2>
            <p className="text-gray-400 text-xs md:text-sm font-sans font-light tracking-wide leading-relaxed">
              {t.contactSubtitle}
            </p>
          </div>

          <ContactForm lang={lang} translations={t} />

        </div>
      </section>

      {/* ATELIER FOOTER */}
      <footer className="border-t border-white/10 bg-[#151515] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <span className="font-serif text-md tracking-[0.2em] text-white uppercase font-medium">
              Ciurana
            </span>
            <span className="block text-[8px] tracking-[0.35em] text-[#C5A059] uppercase mt-0.5 font-semibold">
              Arquitectes & Constructors
            </span>
          </div>

          <p className="text-[10px] tracking-widest text-gray-600 uppercase font-mono text-center sm:text-right">
            © 2026 Ciurana · Tots els drets reservats · Valls · Móra la Nova
          </p>
        </div>
      </footer>

      {/* Immersive Deep-Dive Case Study Sidebar/Overlay */}
      <AnimatePresence>
        {isDetailOpen && selectedProject && (
          <ProjectDetail
            project={selectedProject}
            isOpen={isDetailOpen}
            onClose={handleCloseDetail}
            lang={lang}
            translations={t}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
