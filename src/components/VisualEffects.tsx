"use client";

import React from "react";
import { motion } from "framer-motion";
import { Film, Video, Mic, Aperture, SlidersHorizontal, Grid3x3, Clock, Disc, Clapperboard, Monitor } from "lucide-react";

// --- CSS Effects ---

export const FilmGrain = () => (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
    />
);

export const Vignette = () => (
    <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
);

// --- Frame Components ---

export const FilmFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative p-8 bg-black border-y-8 border-black ${className}`}>
        {/* Perforations Top */}
        <div className="absolute top-0 left-0 right-0 h-8 flex justify-between px-2 py-1 select-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
                <div key={`top-${i}`} className="w-5 h-6 bg-neutral-900 rounded-[2px]" />
            ))}
        </div>

        {/* Content */}
        <div className="relative overflow-hidden bg-neutral-900 shadow-2xl">
            {children}
        </div>

        {/* Perforations Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 flex justify-between px-2 py-1 select-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
                <div key={`bottom-${i}`} className="w-5 h-6 bg-neutral-900 rounded-[2px]" />
            ))}
        </div>
    </div>
);

export const MonitorFrame = ({ children, label = "REC" }: { children: React.ReactNode; label?: string }) => (
    <div className="relative bg-neutral-900 rounded-lg p-1 border border-neutral-800 shadow-xl">
        {/* Screen UI Overlay */}
        <div className="relative overflow-hidden bg-black rounded">
            {children}

            {/* Camera UI Elements */}
            <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                <span className="text-red-600 font-mono text-xs font-bold tracking-widest">{label}</span>
                <span className="text-white/50 font-mono text-xs ml-2">00:00:14:22</span>
            </div>

            <div className="absolute top-4 right-4 text-white/50 font-mono text-xs pointer-events-none">
                ISO 800 <br />
                1/50 <br />
                f/2.8
            </div>

            {/* Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-4 h-4 border border-white/50" />
                <div className="absolute w-full h-[1px] bg-white/10" />
                <div className="absolute h-full w-[1px] bg-white/10" />
            </div>

            {/* Safety Margins */}
            <div className="absolute inset-4 border border-white/10 pointer-events-none" />
        </div>
    </div>
);

export const PolaroidFrame = ({ children, caption }: { children: React.ReactNode; caption: string }) => (
    <div className="bg-white p-3 pb-12 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="aspect-square bg-gray-100 overflow-hidden mb-2 filter grayscale hover:grayscale-0 transition-all duration-500">
            {children}
        </div>
        <div className="font-handwriting text-black/80 text-center font-bold text-lg rotate-[-1deg]">
            {caption}
        </div>
    </div>
);

// --- Icons & Badges ---

export const ProductionBadge = ({ type }: { type: "4K" | "RAW" | "HDR" | "FPS" }) => (
    <span className="inline-flex items-center justify-center px-1.5 py-0.5 border border-white/30 rounded text-[10px] font-mono text-white/70 tracking-tighter">
        {type}
    </span>
);

export const CinematicIcon = ({ icon: Icon, glow = false }: { icon: any, glow?: boolean }) => (
    <div className={`p-3 rounded-full bg-neutral-900 border border-white/10 ${glow ? 'shadow-[0_0_15px_rgba(220,38,38,0.3)]' : ''}`}>
        <Icon className={`w-6 h-6 ${glow ? 'text-brand-red' : 'text-white'}`} />
    </div>
);
