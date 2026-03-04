import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, MoveRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#060b1a] text-zinc-500 font-sans pt-32 pb-12 overflow-hidden relative selection:bg-[#fc443b]/30 selection:text-white border-t border-white/5">
            {/* Immersive Footer Background */}
            <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-10 mix-blend-luminosity"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#060b1a] via-[#060b1a]/95 to-[#060b1a]/90"></div>

            {/* Deep Luxury Ambient Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#fc443b]/10 via-[#0c2c4c]/30 to-transparent rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#fc443b]/10 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row justify-between lg:space-x-16 mb-24">

                    {/* Brand Vision Column */}
                    <div className="w-full lg:w-[35%] flex flex-col items-start mb-16 lg:mb-0">
                        <Link to="/" className="relative flex items-center bg-white/5 backdrop-blur-xl px-8 py-5 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-500 hover:border-[#fc443b]/40 hover:shadow-[0_10px_40px_rgba(252,68,59,0.15)] hover:-translate-y-1 mb-8 group">
                            <img src="/images/logo_althario.png" alt="Althario Logo" className="h-[26px] object-contain transition-transform duration-500 group-hover:scale-[1.02] relative z-10 brightness-0 invert opacity-90 group-hover:opacity-100" />
                            {/* Inner subtle glow for the dark logo theme */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </Link>

                        <p className="text-[14px] leading-[1.8] text-zinc-400 font-light max-w-sm">
                            Merging deep technical expertise with refined design to engineer bespoke software solutions. Transforming intricate challenges into seamless digital experiences.
                        </p>

                        <div className="flex items-center space-x-5 mt-10">
                            {[
                                { network: Facebook, link: 'https://facebook.com' },
                                { network: Linkedin, link: 'https://linkedin.com' },
                                { network: Instagram, link: 'https://instagram.com' }
                            ].map((social, i) => {
                                const Icon = social.network;
                                return (
                                    <a
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="relative group p-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-[#fc443b]/30 hover:bg-[#fc443b]/10 text-zinc-400 hover:text-white transition-all duration-500 ease-out"
                                    >
                                        <Icon size={18} strokeWidth={1.5} className="relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Multi-Column Details */}
                    <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8 pt-4">
                        {/* Locale */}
                        <div className="flex flex-col">
                            <h3 className="text-[11px] font-bold text-white mb-6 uppercase tracking-[0.2em]">Locale</h3>
                            <ul className="space-y-4 text-[14px] text-zinc-400 font-light">
                                <li className="leading-[1.8] group">
                                    <span className="block text-zinc-200 font-medium mb-1 group-hover:text-[#fc443b] transition-colors duration-300">Dubai Studio</span>
                                    8th floor, Clover Bay Tower<br />Business Bay, UAE
                                </li>
                                <li className="pt-2">
                                    <a href="mailto:info@althario.com" className="text-zinc-400 hover:text-[#fc443b] transition-colors duration-300">
                                        info@althario.com
                                    </a>
                                </li>
                                <li>
                                    <span className="text-zinc-500">+971 56 240 6732</span>
                                </li>
                            </ul>
                        </div>

                        {/* Expertise */}
                        <div className="flex flex-col">
                            <h3 className="text-[11px] font-bold text-white mb-6 uppercase tracking-[0.2em]">Expertise</h3>
                            <ul className="space-y-4 text-[14px] text-zinc-400 font-light">
                                {[
                                    { name: 'Agentic AI', path: '/agentic-ai' },
                                    { name: 'Software Dev', path: '/software-development' },
                                    { name: 'Web Engineering', path: '/web-development' },
                                    { name: 'Growth Marketing', path: '/digital-marketing-2' }
                                ].map((service) => (
                                    <li key={service.name}>
                                        <Link to={service.path} className="hover:text-white transition-colors duration-300 relative group inline-flex items-center">
                                            <span className="group-hover:text-[#fc443b] transition-colors duration-300">{service.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Intel */}
                        <div className="flex flex-col">
                            <h3 className="text-[11px] font-bold text-white mb-6 uppercase tracking-[0.2em]">Intel</h3>
                            <p className="text-[14px] text-zinc-400 mb-6 font-light leading-[1.6]">
                                Curated insights on technical architecture and machine learning.
                            </p>
                            <form className="relative w-full max-w-[280px]" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative flex items-center border-b border-white/20 pb-2 focus-within:border-[#fc443b] transition-colors duration-500">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-transparent text-white text-[14px] tracking-wide focus:outline-none placeholder-zinc-600 font-light py-1"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-zinc-500 hover:text-[#fc443b] transition-colors duration-300 pl-2"
                                    >
                                        <MoveRight size={18} strokeWidth={1.5} className="transform hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Minimalist Lower Strip */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[11px] text-zinc-500 font-medium tracking-widest uppercase relative z-10">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} ALTHARIO.
                    </p>
                    <div className="flex space-x-8">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy</Link>
                        <Link to="/refund-policy" className="hover:text-white transition-colors duration-300">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
