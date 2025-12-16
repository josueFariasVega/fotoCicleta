"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PortfolioItem = ({
    type,
    title,
    category,
    image,
}: {
    type: "photo" | "video";
    title: string;
    category: string;
    image: string;
}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="group relative aspect-square overflow-hidden bg-neutral-900 cursor-pointer"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-colors" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                    <ArrowUpRight className="text-white w-6 h-6" />
                </div>
                <div>
                    <span className="text-brand-red text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                        {type === "video" && <Play className="w-3 h-3 fill-current" />}
                        {category}
                    </span>
                    <h3 className="text-white text-xl font-bold leading-none">{title}</h3>
                </div>
            </div>
        </motion.div>
    );
};

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("TODO");

    const categories = ["TODO", "FOTOGRAFÍA", "AUDIOVISUAL", "DOCUMENTAL"];

    // Extended mocked data
    const items = [
        {
            id: 1,
            type: "video" as const,
            category: "AUDIOVISUAL",
            title: "URBAN MOVEMENT 24",
            image: "https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 2,
            type: "photo" as const,
            category: "FOTOGRAFÍA",
            title: "SILENT ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1486716985456-630ee40902f3?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 3,
            type: "photo" as const,
            category: "FOTOGRAFÍA",
            title: "NEON ESSENCE",
            image: "https://images.unsplash.com/photo-1550257018-c2909e334ae8?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 4,
            type: "video" as const,
            category: "AUDIOVISUAL",
            title: "TECH SYSTEMS",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 5,
            type: "video" as const,
            category: "DOCUMENTAL",
            title: "ROOTS OF CULTURE",
            image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 6,
            type: "photo" as const,
            category: "FOTOGRAFÍA",
            title: "HUMAN CANVAS",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 7,
            type: "photo" as const,
            category: "FOTOGRAFÍA",
            title: "ABSTRACT FORMS",
            image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 8,
            type: "video" as const,
            category: "AUDIOVISUAL",
            title: "FASHION FILM 2024",
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 9,
            type: "video" as const,
            category: "DOCUMENTAL",
            title: "STREET VOICES",
            image: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=1000&auto=format&fit=crop",
        }
    ];

    const filteredItems =
        activeCategory === "TODO"
            ? items
            : items.filter((item) => new RegExp(item.category, "i").test(activeCategory) || item.category === activeCategory);

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-neutral-900/90 border-b border-white/5">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-text-gray hover:text-white transition-colors text-sm font-mono uppercase tracking-wider"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver al Inicio
                </Link>
                <div className="font-bold text-xl tracking-tight text-white hidden md:block">
                    FOTOCICLETA <span className="text-brand-red">/ PORTFOLIO</span>
                </div>
                <div className="w-24 md:hidden"></div> {/* Spacer for mobile centering */}
            </header>

            {/* Main Content */}
            <section className="pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto">

                {/* Filters */}
                <div className="flex flex-wrap gap-4 md:gap-8 justify-center mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-sm md:text-base font-mono tracking-wider transition-colors px-4 py-2 rounded-full border ${activeCategory === cat
                                ? "text-brand-red border-brand-red bg-brand-red/10"
                                : "text-text-gray border-transparent hover:text-white hover:border-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <PortfolioItem
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-text-gray font-mono">No hay proyectos en esta categoría.</p>
                    </div>
                )}
            </section>

            {/* Footer Simple */}
            <footer className="py-12 text-center text-text-gray/40 text-xs font-mono border-t border-white/5 mx-6 md:mx-12">
                © 2024 FOTOCICLETA — PRODUCTION SYSTEMS
            </footer>
        </main>
    );
}
