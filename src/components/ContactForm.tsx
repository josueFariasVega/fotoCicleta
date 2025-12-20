"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react";

export const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Construct mailto link
        const subject = encodeURIComponent(`Nuevo Contacto Web: ${formState.subject || "Sin asunto"}`);
        const body = encodeURIComponent(
            `Nombre: ${formState.name}\nEmail: ${formState.email}\n\nMensaje:\n${formState.message}`
        );

        // Simulate processing for visual feedback
        setTimeout(() => {
            window.location.href = `mailto:ralphie@fotocicleta.com?subject=${subject}&body=${body}`;
            setStatus("success");
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-neutral-900/50 border border-white/10 rounded-lg p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl -z-10" />

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-brand-red" />
                Inicia tu Proyecto
            </h3>

            <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-mono text-text-gray pl-1">NOMBRE</label>
                            <div className="relative group">
                                <User className="absolute left-3 top-3 w-4 h-4 text-white/30 group-focus-within:text-brand-red transition-colors" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded p-2.5 pl-10 text-white placeholder-white/20 focus:outline-none focus:border-brand-red transition-all"
                                    placeholder="Tu nombre"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-mono text-text-gray pl-1">EMAIL</label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-3 w-4 h-4 text-white/30 group-focus-within:text-brand-red transition-colors" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded p-2.5 pl-10 text-white placeholder-white/20 focus:outline-none focus:border-brand-red transition-all"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-xs font-mono text-text-gray pl-1">ASUNTO</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formState.subject}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded p-2.5 text-white placeholder-white/20 focus:outline-none focus:border-brand-red transition-all"
                            placeholder="¿Qué necesitás crear?"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-mono text-text-gray pl-1">MENSAJE</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded p-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-red transition-all resize-none"
                            placeholder="Contanos sobre tu proyecto..."
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={status === "submitting" || status === "success"}
                        className={`w-full py-4 mt-4 font-bold tracking-wider rounded flex items-center justify-center gap-2 transition-all ${status === "success"
                                ? "bg-green-600 text-white hover:bg-green-700"
                                : "bg-brand-red text-white hover:bg-red-700"
                            }`}
                    >
                        {status === "submitting" ? (
                            <span className="animate-pulse">PROCESANDO...</span>
                        ) : status === "success" ? (
                            <>
                                <CheckCircle2 className="w-5 h-5" />
                                ENVIANDO MAIL...
                            </>
                        ) : (
                            <>
                                ENVIAR MENSAJE
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </motion.button>

                    <p className="text-[10px] text-center text-text-gray/50 font-mono mt-4">
                        Al enviar, se abrirá tu cliente de correo predeterminado.
                    </p>
                </form>
            </div>
        </div>
    );
};
