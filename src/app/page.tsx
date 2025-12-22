"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, useScroll } from "framer-motion";
import {
  Camera,
  Clapperboard,
  Layers,
  MonitorPlay,
  Share2,
  Check,
  X,
  ArrowRight,
  Play,
  Briefcase,
  Users,
  Building2,
  Plus,
  Minus,
  Menu,
  Film,
  Video,
  Mic,
  Aperture,
  SlidersHorizontal,
  Grid3x3,
  Clock,
  Disc,
  Monitor,
  Settings,
  Maximize,
  Battery,
  Focus,
  Cpu,
  Zap,
  Scan,
  Database,
  Instagram,
  Facebook,
  Move3d,
  View,
  Calendar,
} from "lucide-react";
import {
  FilmGrain,
  Vignette,
  FilmFrame,
  MonitorFrame,
  PolaroidFrame,
  ProductionBadge,
  CinematicIcon
} from "@/components/VisualEffects";
import { ContactForm } from "@/components/ContactForm";

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const links = [
    { label: "Qué Hacemos", id: "que-hacemos" },
    { label: "Galería", id: "galeria" },
    { label: "Proceso", id: "como-trabajamos" },
    { label: "Sistemas", id: "sistemas" },
    { label: "Diferencial", id: "diferencial" },
  ];

  return (
    <>
      <FilmGrain />
      <Vignette />

      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${isMobile ? 'pt-2' : 'pt-6'}`}>
        <motion.nav
          initial={{ width: "95%", y: 0 }}
          animate={{
            width: isMobile ? "80%" : (isScrolled ? "65%" : "70%"),
            y: 0,
            padding: isMobile ? "0.5rem 1rem" : (isScrolled ? "0.75rem 1.5rem" : "1rem 2rem"),
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="pointer-events-auto flex items-center justify-between backdrop-blur-xl bg-neutral-900/60 border border-white/10 shadow-2xl rounded-full"
        >
          <div className="font-bold text-lg tracking-tight text-white cursor-pointer z-50 flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative w-28 h-10 md:w-40 md:h-14">
              <Image
                src="/logoFotocicleta.png"
                alt="FOTOCICLETA"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[11px] font-mono text-text-gray hover:text-white transition-colors uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-red group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/595981136144"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-bold text-white bg-brand-red hover:bg-red-700 transition-all duration-300 rounded-full flex items-center gap-2 ${isScrolled ? 'px-4 py-2' : 'px-6 py-2.5'}`}
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              CONTACTO
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white z-50 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, idx) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-mono text-white hover:text-brand-red transition-colors uppercase tracking-wider"
              >
                {link.label}
              </motion.button>
            ))}

            <a
              href="mailto:ralphie@fotocicleta.com"
              className="mt-8 px-8 py-3 text-lg font-medium text-white border border-brand-red bg-brand-red/10 rounded-full hover:bg-brand-red transition-colors"
            >
              Hablemos
            </a>

            <button
              className="absolute top-8 right-8 p-2 text-white/50 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Section = ({
  children,
  className = "",
  id = "",
  noPadding = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${noPadding ? "py-0" : "py-24"
        } px-6 md:px-12 max-w-7xl mx-auto ${className}`}
    >
      {/* Decorative Guide Lines */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />
      <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />

      {children}
    </motion.section>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
          <Image
            src="/biciLogo.png"
            alt="FOTOCICLETA"
            fill
            className="object-contain opacity-50 grayscale mix-blend-overlay"
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-950/80 to-neutral-950 -z-10" />

      <div className="space-y-8 z-10 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-4 opacity-30 select-none"
        >
          <div className="border border-white/50 px-2 py-1 text-[10px] font-mono tracking-widest text-white">CALIDAD</div>
          <div className="border border-white/50 px-2 py-1 text-[10px] font-mono tracking-widest text-white">DETALLE</div>
          <div className="border border-white/50 px-2 py-1 text-[10px] font-mono tracking-widest text-white">ACCIÓN</div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-red font-mono text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-brand-red/50" />
            Estudio Creativo
            <span className="w-12 h-px bg-brand-red/50" />
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
            NARRATIVA <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/50">FOTOCICLETA</span>
          </h1>
        </motion.div>

        <p className="text-text-gray text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Transformamos conceptos en experiencias visuales de alto impacto.
          <span className="block mt-2 text-white/60 text-sm font-mono">FOTOGRAFÍA • VIDEO • DIRECCIÓN DE ARTE</span>
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <button
            onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-brand-red text-white font-bold tracking-wider overflow-hidden rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              VER GALERÍA <Play className="w-4 h-4 fill-current" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button
            onClick={() => document.getElementById('que-hacemos')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white/20 text-white font-mono tracking-wider hover:bg-white/5 transition-colors rounded-sm flex items-center gap-2"
          >
            <Grid3x3 className="w-4 h-4" />
            SERVICIOS
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-white/30 tracking-widest">DESLIZAR</span>
        <div className="w-px h-12 bg-linear-to-b from-brand-red to-transparent" />
      </motion.div>
    </section>
  );
};

const Manifiesto = () => {
  const containerRef = React.useRef(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2 });

  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(e => console.log("Play error:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <Section className="min-h-[50vh] md:min-h-[70vh] flex items-center justify-center relative overflow-hidden bg-black text-white py-14 md:py-24">
      {/* Film Strip Border Top */}
      <div className="absolute top-0 left-0 right-0 h-10 md:h-16 bg-neutral-900 flex items-center justify-between px-2 z-20 border-b border-white/10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={`top-${i}`} className="w-2 md:w-6 h-6 md:h-10 bg-black rounded-sm shrink-0 mx-1 md:mx-4" />
        ))}
      </div>

      {/* Background Video */}
      <div ref={containerRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dimming Overlay */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/DEMO%20REEL%20FOTOCICLETA.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none z-10" />

      <div className="max-w-4xl w-full relative z-10 p-4 md:p-12">
        {/* Scene Heading */}
        <div className="font-mono text-sm tracking-[0.2em] text-white/40 mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-white/20" />
          INT. ESTUDIO CREATIVO - DÍA
        </div>

        <div className="space-y-12">
          <h2 className="text-4xl md:text-7xl font-sans font-bold leading-[0.9] tracking-tighter uppercase text-transparent bg-clip-text bg-linear-to-b from-white to-white/50">
            <span className="block text-xl md:text-3xl tracking-widest font-light text-white mb-2">FOTOCICLETA</span>
            Productora Visual<br />
            <span className="text-white">Integral</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl font-light text-text-gray leading-relaxed">
                Diseñamos y ejecutamos sistemas de contenido, campañas publicitarias y proyectos narrativos con
                <span className="text-white font-medium"> precision absoluta</span>.
              </p>
            </div>

            <div className="md:col-span-4">
              {/* System Badge */}
              <div className="border border-white/20 p-1 inline-block rotate-[-5deg] hover:rotate-0 transition-transform duration-500 origin-center cursor-default">
                <div className="border border-white/20 p-4 bg-brand-red/10 backdrop-blur-sm">
                  <p className="font-mono text-[10px] text-brand-red tracking-widest text-center mb-1">SYSTEM CHECK</p>
                  <p className="font-bold text-lg text-white leading-none text-center">
                    OPERAMOS<br />POR<br />SISTEMAS
                  </p>
                  <p className="font-mono text-[10px] text-white/40 tracking-widest text-center mt-1">EST. 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Film Strip Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-neutral-900 flex items-center justify-between px-2 z-20 border-t border-white/10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={`bottom-${i}`} className="w-3 md:w-6 h-8 md:h-10 bg-black rounded-sm shrink-0 mx-1 md:mx-4" />
        ))}
      </div>
    </Section>
  );
};

const QueHacemos = () => {
  return (
    <Section id="que-hacemos">
      <div className="border-t border-border-dark pt-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h3 className="text-sm font-mono text-text-gray mb-2">
            01 / QUÉ HACEMOS
          </h3>
          <p className="text-xl text-white max-w-2xl">
            Diseñamos y ejecutamos estructuras de producción visual que permiten
            a las marcas comunicar de forma clara, consistente y sostenida.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
        {/* Fotografía - Polaroid Style */}
        <PolaroidFrame caption="FOTOGRAFÍA">
          <div className="h-64 bg-neutral-900 relative group overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </PolaroidFrame>

        {/* Audiovisual - Monitor Style */}
        <div className="lg:mt-12">
          <MonitorFrame label="REC">
            <div className="h-64 bg-neutral-900 relative group overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-brand-red/90 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:animate-pulse">
                  <Clapperboard className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </MonitorFrame>
          <div className="text-center mt-4">
            <h4 className="text-white font-bold text-xl uppercase tracking-wider">Audiovisual</h4>
            <p className="text-sm text-text-gray font-mono">Producción & Dirección</p>
          </div>
        </div>

        {/* Narrativa - Film Style */}
        <FilmFrame className="border-none bg-transparent p-0">
          <div className="bg-neutral-900 border-x-8 border-black p-8 h-full min-h-[300px] flex flex-col items-center justify-center relative group">
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_49px,#ffffff05_50px)]" />
            <Layers className="w-12 h-12 text-text-gray group-hover:text-white transition-colors mb-6" />
            <h4 className="text-2xl font-bold text-white mb-2">NARRATIVA</h4>
            <p className="text-center text-text-gray text-sm leading-relaxed px-4">
              Desarrollo de guion, estructura y storytelling estratégico.
            </p>
            <div className="mt-6 flex gap-2">
              <ProductionBadge type="RAW" />
              <ProductionBadge type="HDR" />
            </div>
          </div>
        </FilmFrame>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/5 p-6 rounded border border-white/5 flex items-center gap-4 hover:border-brand-red/50 transition-colors">
          <CinematicIcon icon={MonitorPlay} glow />
          <div>
            <h5 className="text-white font-bold">Producción Publicitaria</h5>
            <p className="text-xs text-text-gray font-mono">Spots & Campañas</p>
          </div>
        </div>
        <div className="bg-white/5 p-6 rounded border border-white/5 flex items-center gap-4 hover:border-brand-red/50 transition-colors">
          <CinematicIcon icon={Share2} />
          <div>
            <h5 className="text-white font-bold">Edición Centralizada</h5>
            <p className="text-xs text-text-gray font-mono">Post-producción & Color</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const RealEstatePromo = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Detect when section is in viewport
  const isInView = useInView(containerRef, { amount: 0.5 });

  // Auto-play/pause based on scroll visibility
  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <>
      <section ref={containerRef} className="relative py-32 flex flex-col items-center justify-center overflow-hidden">

        {/* Cinematic Header - Floating above */}
        <motion.div
          style={{ opacity, y: textY }}
          className="relative z-20 text-center mb-12 mix-blend-difference"
        >
          <h2 className="text-4xl md:text-8xl font-bold text-white tracking-tighter mb-4">
            INMOBILIARIA
          </h2>
          <p className="text-sm md:text-base font-mono text-white/70 tracking-[0.5em] uppercase">
            TOUR VIRTUAL 360º
          </p>
        </motion.div>

        {/* Main Cinema Scope Container */}
        <motion.div
          style={{ scale, opacity }}
          className="relative w-full max-w-[90%] md:max-w-7xl aspect-video md:aspect-[2.39/1] group"
        >
          {/* Ambilight Glow Effect - Behind */}
          <div className="absolute inset-0 bg-brand-red/20 blur-[100px] scale-110 opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />

          {/* Video Container */}
          <div className="relative w-full h-full rounded-none overflow-hidden shadow-2xl ring-1 ring-white/10">
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
            >
              <source src="/DEMO%20REEL%20FOTOCICLETA.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] pointer-events-none" />

            {/* Minimalist Controls / Overlay - Only VER DEMO on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
              <button
                onClick={() => setIsOpen(true)}
                className="group/btn relative flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-none hover:bg-white hover:text-black transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current" />
                <span className="font-mono text-xs tracking-widest font-bold">VER DEMO 360º</span>
              </button>
            </div>

            {/* Bottom Info Minimal */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-col items-start gap-1 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-red rounded-none animate-pulse" />
                <span className="text-[10px] font-mono text-white/80 tracking-widest">EN VIVO</span>
              </div>
              <span className="text-xs md:text-sm font-bold text-white tracking-wider">RECORRIDOS VIRTUALES</span>
            </div>

          </div>
        </motion.div>

        {/* Premium CTA - Outside Video, Always Visible */}
        <motion.div
          style={{ opacity }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://wa.me/595981136144"
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta relative flex items-center gap-4 px-12 py-6 bg-brand-red backdrop-blur-md border-2 border-brand-red rounded-none hover:bg-red-700 hover:border-red-700 transition-all duration-300 shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_80px_rgba(220,38,38,0.8)] hover:scale-105"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span className="font-mono text-sm tracking-widest font-bold text-white">RESERVAR AHORA</span>
            <ArrowRight className="w-5 h-5 text-white group-hover/cta:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-7xl aspect-video rounded-none overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <video
                autoPlay
                controls
                className="w-full h-full object-contain"
              >
                <source src="/DEMO%20REEL%20FOTOCICLETA.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ComoTrabajamos = () => {
  const steps = [
    {
      phase: "01. PRE-PRODUCCIÓN",
      title: "Dirección Creativa Definida",
      desc: "Guion, Scouting, Casting & Moodboard",
      icon: Aperture
    },
    {
      phase: "02. RODAJE / SHOOTING",
      title: "Producción Técnica Integral",
      desc: "Cámaras Cinema Line, Iluminación & Sonido",
      icon: Video
    },
    {
      phase: "03. POST-PRODUCCIÓN",
      title: "Edición & Color Grading",
      desc: "Montaje, Diseño Sonoro & Entrega Final",
      icon: Layers
    },
  ];

  return (
    <Section id="como-trabajamos" className="bg-neutral-900/40 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-neutral-900/50 pointer-events-none" />

      <div className="border-t border-border-dark pt-8 mb-16 flex items-center justify-between relative z-10">
        <h3 className="text-sm font-mono text-text-gray">
          02 / CÓMO TRABAJAMOS
        </h3>
        <div className="hidden md:flex gap-2 font-mono text-xs text-brand-red">
          <span>REC ●</span> <span className="text-white">00:14:23:10</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Timeline Visualization */}
        <div className="space-y-0 relative">
          <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-white/10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative flex gap-8 pb-12 last:pb-0 group"
            >
              <div className="relative z-10 p-3 bg-black border border-white/20 rounded-full group-hover:border-brand-red group-hover:bg-brand-red/10 transition-colors duration-300">
                <step.icon className="w-6 h-6 text-white group-hover:text-brand-red transition-colors" />
              </div>
              <div className="pt-2">
                <span className="text-xs font-mono text-brand-red tracking-widest mb-1 block">{step.phase}</span>
                <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-text-gray font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Monitor Preview */}
        <div className="relative">
          <div className="absolute -top-12 -right-12 text-white/5 pointer-events-none">
            {/* Icon Removed */}
          </div>

          <MonitorFrame label="LIVE VIEW">
            <div className="aspect-video bg-neutral-900 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
              {/* Animated Scanline */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-red/5 to-transparent h-4 animate-scan opacity-50" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-20 mix-blend-screen" />

              <div className="relative z-10 border border-brand-red/30 p-8 backdrop-blur-sm bg-black/40">
                <div className="flex items-center gap-2 justify-center mb-4 text-brand-red">
                  <Grid3x3 className="w-4 h-4 animate-spin-slow" />
                  <span className="font-mono text-xs tracking-widest">SYSTEM CHECK: OK</span>
                </div>
                <p className="text-3xl md:text-5xl font-black uppercase text-white mb-2 tracking-tighter">
                  CONTROL<br />TOTAL
                </p>
                <p className="font-mono text-white/50 text-xs">NO IMPROVISATION ALLOWED</p>
              </div>

              {/* Monitor Data Overlay */}
              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-brand-red space-y-1 text-left">
                <p>ISO: 800</p>
                <p>WB: 5600K</p>
                <p>SHUTTER: 180°</p>
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/50 space-y-1 text-right">
                <p>BAT: 84%</p>
                <p>MEM: 1TB</p>
              </div>
            </div>
          </MonitorFrame>
        </div>
      </div>
    </Section>
  );
};

const SystemCard = ({
  title,
  sub,
  desc,
}: {
  title: string;
  sub: string;
  desc: string;
}) => (
  <div className="group relative p-8 border border-border-dark bg-white/5 hover:border-brand-red transition-colors duration-300 min-h-[300px] flex flex-col">
    <h4 className="text-2xl font-bold text-white group-hover:text-brand-red transition-colors mb-2">
      {title}
    </h4>
    <p className="text-sm font-mono text-brand-red mb-6 uppercase">{sub}</p>
    <p className="text-text-gray leading-relaxed">{desc}</p>
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowRight className="text-brand-red" />
    </div>
  </div>
);

const NuestrosSistemas = () => {
  return (
    <Section id="sistemas">
      <div className="border-t border-border-dark pt-8 mb-12">
        <h3 className="text-sm font-mono text-text-gray">
          03 / NUESTROS SISTEMAS DE TRABAJO
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SystemCard
          title="Producción Publicitaria Integral"
          sub="Control total del resultado"
          desc="Campañas completas: preproducción, producción y postproducción."
        />
        <SystemCard
          title="Contenido Continuo (Mensual)"
          sub="Presencia constante"
          desc="Sistemas de producción mensual para redes, web y comunicación constante."
        />
        <SystemCard
          title="Producción Documental / Storytelling"
          sub="Profundidad y relato"
          desc="Proyectos narrativos para marcas, instituciones y cultura."
        />
        <SystemCard
          title="Producción Express / Acciones Puntuales"
          sub="Agilidad de respuesta"
          desc="Lanzamientos, eventos y acciones de corto plazo."
        />
      </div>
    </Section>
  );
};

const Diferencial = () => {
  const specs = [
    { label: "ESTRUCTURA", value: "LIVIANA / ÁGIL", icon: Video },
    { label: "CRITERIO", value: "CINEMATOGRÁFICO", icon: Film },
    { label: "CAPACIDAD", value: "FULL INTEGRAL", icon: Grid3x3 },
    { label: "RESOLUCIÓN", value: "BAJO PRESIÓN", icon: Aperture },
    { label: "WORKFLOW", value: "CENTRALIZADO", icon: Layers },
  ];

  return (
    <Section id="diferencial" className="bg-neutral-900/20">
      <div className="border-t border-border-dark pt-8 mb-12 flex justify-between items-end">
        <h3 className="text-sm font-mono text-text-gray">
          04 / DIFERENCIAL FOTOCICLETA
        </h3>
        <div className="hidden md:block font-mono text-xs text-white/30 border border-white/20 px-2 py-1 rounded">
          SPEC_SHEET_V2.0
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Spec Sheet List */}
        <div className="lg:col-span-7 bg-black/40 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
          <div className="bg-white/5 border-b border-white/5 p-4 flex justify-between items-center">
            <span className="font-mono text-xs text-brand-red font-bold">TECHNICAL SPECIFICATIONS</span>
          </div>
          <div className="divide-y divide-white/5">
            {specs.map((spec, idx) => (
              <div key={idx} className="p-6 flex items-center justify-between group hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4">
                  <spec.icon className="w-5 h-5 text-text-gray group-hover:text-brand-red transition-colors" />
                  <span className="font-mono text-sm text-text-gray tracking-widest">{spec.label}</span>
                </div>
                <span className="text-lg md:text-xl font-bold text-white tracking-tight">{spec.value}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-brand-red/5 border-t border-brand-red/10 text-center">
            <p className="text-xs font-mono text-brand-red">All systems optimized for high performance.</p>
          </div>
        </div>

        {/* Quote Block - Sensor Style */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/3] bg-neutral-900 rounded-lg border border-white/10 relative overflow-hidden flex flex-col justify-center items-center p-8 text-center group">
            {/* Sensor Grid Pattern */}
            <div className="absolute inset-0 bg-neutral-900" />

            <Focus className="w-16 h-16 text-brand-red mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />

            <blockquote className="relative z-10 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-white/60 leading-tight mb-4">
              "No prometemos magia."
            </blockquote>
            <div className="h-px w-12 bg-brand-red mb-4" />
            <p className="relative z-10 text-xl text-white font-mono tracking-wider">
              EJECUTAMOS <span className="text-brand-red font-bold">BIEN</span>.
            </p>

            {/* Corner Marks */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20" />
          </div>
        </div>
      </div>
    </Section>
  );
};

const ParaQuienes = () => {
  const clients = [
    "Marcas en crecimiento",
    "Empresas con equipos internos saturados",
    "Agencias que necesitan producción sólida",
    "Instituciones y proyectos culturales",
    "Organizaciones que valoran criterio, orden y continuidad",
  ];

  return (
    <Section id="clientes">
      <div className="border-t border-border-dark pt-8 mb-12">
        <h3 className="text-sm font-mono text-text-gray">
          05 / PARA QUIÉNES TRABAJAMOS
        </h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="px-6 py-4 border border-white/10 rounded-full text-lg text-white hover:border-brand-red transition-colors cursor-default"
          >
            {client}
          </div>
        ))}
      </div>
    </Section>
  );
};

const GalleryItem = ({
  size,
  type,
  title,
  category,
  image,
}: {
  size: "large" | "tall" | "normal" | "wide";
  type: "photo" | "video";
  title: string;
  category: string;
  image: string;
}) => {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2 min-h-[400px]",
    tall: "md:col-span-1 md:row-span-2 min-h-[400px]",
    wide: "md:col-span-2 md:row-span-1 min-h-[200px]",
    normal: "md:col-span-1 md:row-span-1 min-h-[200px]",
  };

  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      className={`relative group overflow-hidden bg-neutral-900 ${sizeClasses[size]}`}
    >
      {/* Background Image Placeholder using CSS for demo purposes or Next/Image in real prod */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-brand-red text-xs font-mono uppercase tracking-wider mb-2 block">
            {type === "video" && <Play className="inline w-3 h-3 mr-1 mb-0.5" />}
            {category}
          </span>
          <h3 className="text-white text-xl md:text-2xl font-bold leading-none">{title}</h3>
        </div>
      </div>

      {/* Play Button Overlay for Video */}
      {type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-brand-red/80 backdrop-blur-sm flex items-center justify-center text-white">
            <Play className="w-6 h-6 ml-1 fill-white" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const GalleryVideoItem = ({
  item,
  onClick,
}: {
  item: {
    size: "large" | "tall" | "normal" | "wide";
    type: "photo" | "video";
    category: string;
    title: string;
    image: string;
    videoUrl?: string;
  };
  onClick: () => void;
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isLocalVideo = item.videoUrl && (item.videoUrl.startsWith('/') || item.videoUrl.startsWith('./'));

  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2 min-h-[400px]",
    tall: "md:col-span-1 md:row-span-2 min-h-[400px]",
    wide: "md:col-span-2 md:row-span-1 min-h-[200px]",
    normal: "md:col-span-1 md:row-span-1 min-h-[200px]",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 0.98 }}
      className={`relative group overflow-hidden bg-neutral-900 cursor-pointer ${sizeClasses[item.size]}`}
      onMouseEnter={() => {
        if (item.type === "video" && isLocalVideo && videoRef.current) {
          videoRef.current.play();
        }
      }}
      onMouseLeave={() => {
        if (item.type === "video" && isLocalVideo && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      onClick={onClick}
    >
      {/* Background - Image or Video */}
      {item.type === "video" && isLocalVideo ? (
        <video
          ref={videoRef}
          src={item.videoUrl}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
          muted
          loop
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
          style={{ backgroundImage: `url(${item.image})` }}
        />
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-brand-red text-xs font-mono uppercase tracking-wider mb-2 block">
            {item.type === "video" && <Play className="inline w-3 h-3 mr-1 mb-0.5" />}
            {item.category}
          </span>
          <h3 className="text-white text-xl md:text-2xl font-bold leading-none">{item.title}</h3>
        </div>
      </div>

      {/* Play Button Overlay for Video */}
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-brand-red/80 backdrop-blur-sm flex items-center justify-center text-white">
            <Play className="w-6 h-6 ml-1 fill-white" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}) => {
  if (!isOpen) return null;

  // Check if it's a local video file or an embed
  const isLocal = videoUrl.startsWith('/') || videoUrl.startsWith('./');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-neutral-900 rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-brand-red transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Title */}
          <div className="absolute top-4 left-4 z-10 bg-black/70 px-4 py-2 rounded">
            <p className="text-white font-mono text-sm">{title}</p>
          </div>

          {/* Video Player */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            {isLocal ? (
              <video
                src={videoUrl}
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
              />
            ) : (
              <iframe
                src={videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PremiumGallery = () => {
  const [activeCategory, setActiveCategory] = React.useState("TODO");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentVideo, setCurrentVideo] = React.useState({ url: "", title: "" });

  const categories = ["TODO", "FOTOGRAFÍA", "AUDIOVISUAL", "DOCUMENTAL"];

  const openVideoModal = (url: string, title: string) => {
    setCurrentVideo({ url, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setCurrentVideo({ url: "", title: "" }), 300);
  };

  // Gallery items with proper categories, limited to 6
  const allItems = [
    {
      size: "large" as const,
      type: "video" as const,
      category: "AUDIOVISUAL",
      title: "URBAN MOVEMENT 24",
      image: "https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // YouTube embed
    },
    {
      size: "tall" as const,
      type: "photo" as const,
      category: "FOTOGRAFÍA",
      title: "SILENT ARCHITECTURE",
      image: "https://images.unsplash.com/photo-1486716985456-630ee40902f3?q=80&w=2000&auto=format&fit=crop",
    },
    {
      size: "normal" as const,
      type: "photo" as const,
      category: "FOTOGRAFÍA",
      title: "NEON ESSENCE",
      image: "https://images.unsplash.com/photo-1550257018-c2909e334ae8?q=80&w=1000&auto=format&fit=crop",
    },
    {
      size: "normal" as const,
      type: "video" as const,
      category: "AUDIOVISUAL",
      title: "TECH SYSTEMS",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // YouTube embed
    },
    {
      size: "wide" as const,
      type: "video" as const,
      category: "DOCUMENTAL",
      title: "ROOTS OF CULTURE",
      image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // YouTube embed
    },
    {
      size: "large" as const,
      type: "photo" as const,
      category: "FOTOGRAFÍA",
      title: "HUMAN CANVAS",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === "TODO"
    ? allItems
    : allItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Section id="galeria" className="bg-black/30">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 border-b border-white/5 pb-8">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-mono text-text-gray mb-2">PRODUCCIONES RECIENTES</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Galería Visual</h2>
          </div>

          <div className="flex gap-4 md:gap-8 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-mono tracking-wider hover:text-brand-red transition-colors whitespace-nowrap ${activeCategory === cat ? "text-brand-red" : "text-text-gray"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <GalleryVideoItem
                key={`${item.title}-${idx}`}
                item={item}
                onClick={() => {
                  if (item.type === "video" && item.videoUrl) {
                    openVideoModal(item.videoUrl, item.title);
                  }
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-white border-b border-brand-red pb-1 hover:text-brand-red transition-colors">
            VER PORTFOLIO COMPLETO <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={currentVideo.url}
        title={currentVideo.title}
      />
    </>
  );
};

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg md:text-xl font-medium text-white group-hover:text-brand-red transition-colors">
          {question}
        </span>
        <span className="shrink-0 ml-4 max-w-6 max-h-6 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-5 h-5 text-brand-red" />
          ) : (
            <Plus className="w-5 h-5 text-white group-hover:text-brand-red transition-colors" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-text-gray leading-relaxed text-base md:text-lg max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const questions = [
    {
      q: "¿Entregan los archivos crudos (RAW)?",
      a: "No. En FOTOCICLETA consideramos que la edición y el revelado son partes inseparables de nuestro sistema de producción. Entregamos las imágenes y videos finales con el look y la identidad visual que definimos en la dirección creativa."
    },
    {
      q: "¿Cómo se manejan los derechos de uso?",
      a: "Nuestros presupuestos incluyen derechos de uso digital (web y redes sociales) por tiempo ilimitado. Para campañas publicitarias en medios masivos (TV, Vía Pública) o packaging, se cotiza un fee de uso específico según el alcance y tiempo."
    },
    {
      q: "¿Qué incluye la Producción Integral?",
      a: "Nos encargamos de todo el sistema: desde el scouting de locaciones, casting de modelos y dirección de arte, hasta la captura, edición, colorimetría y exportación final. Centralizamos la responsabilidad para garantizar el resultado."
    },
    {
      q: "¿Realizan versiones para redes (Reels/TikTok)?",
      a: "Sí. Entendemos la necesidad de contenido nativo. Podemos adaptar cualquier producción principal a formatos verticales (9:16) o planificar jornadas específicas de creación de contenido para redes sociales."
    },
    {
      q: "¿Cuáles son los tiempos de entrega?",
      a: "Para galerías de fotos estándar, el tiempo promedio es de 5 a 7 días hábiles. Para producciones audiovisuales o campañas complejas, los tiempos varían entre 10 y 15 días hábiles dependiendo de la complejidad de la postproducción."
    }
  ];

  return (
    <Section id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="border-t border-border-dark pt-8 mb-8">
            <h3 className="text-sm font-mono text-text-gray mb-4">PREGUNTAS FRECUENTES</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dudas sobre <br /> <span className="text-brand-red">nuestro sistema.</span>
            </h2>
            <p className="text-text-gray text-sm">
              Si tenés una consulta específica que no está acá, escribinos directamente.
            </p>
            <a href="mailto:ralphie@fotocicleta.com" className="inline-block mt-8 text-sm font-mono text-white border-b border-brand-red hover:text-brand-red transition-colors pb-1">
              CONSULTAR AHORA
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          {questions.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer id="contacto" className="py-24 px-6 border-t border-border-dark">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="flex justify-center mb-8">
          <div className="relative w-72 h-36">
            <Image
              src="/LOGOCICLETACHECK.png"
              alt="FOTOCICLETA"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          ¿Tenés una campaña o <br className="hidden md:block" /> necesitás un
          sistema?
        </h2>

        <div className="w-full flex justify-center">
          <ContactForm />
        </div>

        {/* Footer info - Redesigned */}
        <div className="pt-24 border-t border-white/5 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">

            {/* Brand Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-[0.2em] text-brand-red">MARCA</h4>
              <div className="space-y-2">
                <p className="text-sm text-white font-bold">FOTOCICLETA</p>
                <p className="text-xs text-text-gray">Productora Visual Integral</p>
                <p className="text-xs text-white/30 font-mono mt-4">© 2024 TODOS LOS DERECHOS RESERVADOS</p>
              </div>
            </div>

            {/* Socials Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-[0.2em] text-brand-red">REDES</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/fotocicletapy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-gray hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Instagram className="w-4 h-4 text-white/50 group-hover:text-brand-red transition-colors" />
                  <span>@fotocicletapy</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100063744878888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-gray hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Facebook className="w-4 h-4 text-white/50 group-hover:text-brand-red transition-colors" />
                  <span>Página de Facebook</span>
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-[0.2em] text-brand-red">CONTACTO</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:ralphie@fotocicleta.com"
                  className="text-sm text-text-gray hover:text-white transition-colors"
                >
                  ralphie@fotocicleta.com
                </a>
                <a
                  href="https://wa.me/595981136144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-gray hover:text-white transition-colors"
                >
                  +595 981 136144
                </a>
              </div>
            </div>

            {/* Location Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-[0.2em] text-brand-red">ESTUDIO</h4>
              <div className="space-y-2">
                <p className="text-sm text-text-gray">Asunción, Paraguay</p>
                <p className="text-xs text-white/30 font-mono">DISPONIBLE EN TODO EL MUNDO</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <PremiumGallery />
      <RealEstatePromo />
      <Manifiesto />
      <NuestrosSistemas />
      <ComoTrabajamos />
      <QueHacemos />
      <Diferencial />
      <ParaQuienes />
      <FAQ />
      <Footer />
    </main>
  );
}
