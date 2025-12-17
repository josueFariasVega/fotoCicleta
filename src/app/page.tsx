"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    { label: "01 Qué Hacemos", id: "que-hacemos" },
    { label: "02 Galería", id: "galeria" },
    { label: "03 Proceso", id: "como-trabajamos" },
    { label: "04 Sistemas", id: "sistemas" },
    { label: "05 Diferencial", id: "diferencial" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-neutral-900/80 border-b border-white/5">
        <div className="font-bold text-xl tracking-tight text-white cursor-pointer z-50" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          FOTOCICLETA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-mono text-text-gray hover:text-brand-red transition-colors uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="mailto:hola@fotocicleta.com"
            className="px-6 py-2 text-sm font-medium text-white border border-white/20 hover:bg-brand-red hover:border-brand-red transition-colors duration-300 rounded-full"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-neutral-950 flex flex-col items-center justify-center gap-8 md:hidden"
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
              href="mailto:hola@fotocicleta.com"
              className="mt-8 px-8 py-3 text-lg font-medium text-white border border-brand-red bg-brand-red/10 rounded-full hover:bg-brand-red transition-colors"
            >
              Hablemos
            </a>
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
      {children}
    </motion.section>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="space-y-6 z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none"
        >
          {"FOTOCICLETA".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8"
        >
          <button
            onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors uppercase tracking-wider text-sm"
          >
            Ver Galería
          </button>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-hover transition-colors uppercase tracking-wider text-sm"
          >
            Contacto
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="font-mono text-sm text-text-gray max-w-md mx-auto mt-8 border-t border-white/10 pt-4"
        >
          Dirección creativa y producción visual integral
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs text-text-gray/50"
      >
        SCROLL DOWN
      </motion.div>
    </section>
  );
};

const Manifiesto = () => {
  return (
    <Section className="min-h-[50vh] flex items-center justify-center">
      <div className="max-w-4xl text-center md:text-left space-y-8">
        <h2 className="text-3xl md:text-5xl font-light leading-tight text-white">
          <span className="font-bold">FOTOCICLETA</span> es una productora
          visual de dirección creativa y producción integral que diseña y
          ejecuta sistemas de contenido, campañas publicitarias y proyectos
          narrativos para marcas y organizaciones.
        </h2>
        <div className="text-xl md:text-2xl text-text-gray leading-relaxed space-y-4">
          <p>
            <span className="text-brand-red">
              Trabajamos con criterio, estructura y responsabilidad real de
              producción.
            </span>
          </p>
          <p className="font-mono text-lg text-white">
            No operamos por piezas sueltas. <br />
            Operamos por sistemas.
          </p>
        </div>
      </div>
    </Section>
  );
};

const QueHacemos = () => {
  const items = [
    { label: "Fotografía", icon: Camera },
    { label: "Audiovisual", icon: Clapperboard },
    { label: "Narrativa", icon: Layers },
    { label: "Producción publicitaria", icon: MonitorPlay },
    { label: "Edición centralizada", icon: Share2 },
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark border border-border-dark">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 p-8 min-h-[200px] flex flex-col justify-between hover:bg-white/10 transition-colors"
          >
            <item.icon className="w-8 h-8 text-white mb-4" />
            <span className="text-xl text-text-gray font-medium">
              {item.label}
            </span>
          </div>
        ))}
        <div className="bg-white/5 p-8 min-h-[200px] flex items-center justify-center text-center">
          <div className="space-y-2">
            <p className="font-mono text-brand-red text-sm">
              "Cada proyecto tiene un alcance definido."
            </p>
            <p className="font-mono text-white text-sm">
              "Cada entrega tiene un porqué."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ComoTrabajamos = () => {
  const points = [
    "Dirección creativa clara",
    "Producción integral cuando el proyecto lo requiere",
    "Equipos y recursos adecuados a cada escala",
    "Procesos simples y controlados",
    "Edición consistente bajo un mismo criterio",
  ];

  return (
    <Section id="como-trabajamos" className="bg-neutral-900/20">
      <div className="border-t border-border-dark pt-8 mb-12">
        <h3 className="text-sm font-mono text-text-gray">
          02 / CÓMO TRABAJAMOS
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ul className="space-y-6">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 text-lg md:text-xl text-white"
            >
              <Check className="w-6 h-6 text-brand-red mt-1 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="p-8 md:p-12 border border-border-dark bg-white/5">
          <p className="text-2xl md:text-3xl font-mono text-center">
            <span className="block text-text-gray mb-2">
              Menos improvisación.
            </span>
            <span className="block text-brand-red font-bold">
              Más control y resultado.
            </span>
          </p>
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
          title="Contenido Continuo Mensual"
          sub="Presencia constante, coherencia visual"
          desc="Sistema de producción mensual para marcas que necesitan presencia constante, coherencia visual y continuidad. Incluye producción, edición y planificación bajo un criterio definido."
        />
        <SystemCard
          title="Producción Documental"
          sub="Profundidad, relato y archivo"
          desc="Proyectos narrativos y documentales para marcas, instituciones y propuestas culturales que requieren profundidad, relato y archivo visual."
        />
        <SystemCard
          title="Producción Publicitaria Integral"
          sub="Control total del resultado"
          desc="Campañas publicitarias completas: preproducción, producción y postproducción bajo una misma dirección. Asumimos la producción general, coordinación de equipos y decisiones creativas."
        />
        <SystemCard
          title="Producción Express"
          sub="Acciones puntuales"
          desc="Acciones puntuales, lanzamientos y eventos con alcance y tiempos definidos. Producción ágil, edición eficiente y entregables claros."
        />
      </div>
    </Section>
  );
};

const Diferencial = () => {
  const points = [
    "Operación liviana, sin estructura inflada",
    "Alto criterio estético y narrativo",
    "Capacidad real de producción integral",
    "Resolución bajo presión",
    "Edición centralizada y consistente",
  ];

  return (
    <Section id="diferencial" className="bg-neutral-900/20">
      <div className="border-t border-border-dark pt-8 mb-12">
        <h3 className="text-sm font-mono text-text-gray">
          04 / DIFERENCIAL FOTOCICLETA
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ul className="space-y-6">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 text-xl text-white"
            >
              <div className="w-2 h-2 bg-brand-red mt-2.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="p-12 border-l-4 border-brand-red bg-white/5">
          <blockquote className="text-4xl md:text-5xl font-serif italic text-white leading-tight">
            "No prometemos magia. <br />
            <span className="text-brand-red">Ejecutamos bien.</span>"
          </blockquote>
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/5 pb-8">
          <div>
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
            <a href="mailto:hola@fotocicleta.com" className="inline-block mt-8 text-sm font-mono text-white border-b border-brand-red hover:text-brand-red transition-colors pb-1">
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
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          ¿Tenés una campaña o <br className="hidden md:block" /> necesitás un
          sistema?
        </h2>

        <a
          href="mailto:hola@fotocicleta.com"
          className="inline-block px-12 py-6 bg-brand-red text-white text-xl font-bold rounded hover:bg-brand-red-hover transition-all transform hover:scale-105"
        >
          HABLEMOS / CONTACTO
        </a>

        <div className="pt-24 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-text-gray/40 gap-4">
          <p>© 2024 FOTOCICLETA</p>
          <a
            href="mailto:hola@fotocicleta.com"
            className="hover:text-white transition-colors"
          >
            hola@fotocicleta.com
          </a>
          <p>BUENOS AIRES, ARG</p>
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
      <Manifiesto />
      <QueHacemos />
      <PremiumGallery />
      <ComoTrabajamos />
      <NuestrosSistemas />
      <Diferencial />
      <ParaQuienes />
      <FAQ />
      <Footer />
    </main>
  );
}
