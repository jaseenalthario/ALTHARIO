import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram, Menu, X, ChevronDown, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans ${isScrolled ? 'bg-[#060b1a]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-white/0'
            }`}>
            {/* Ultra-refined Top Bar */}
            <AnimatePresence>
                {!isScrolled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:block border-b border-white/5 overflow-hidden bg-gradient-to-r from-transparent via-[#101b30]/40 to-transparent"
                    >
                        <div className="container mx-auto px-8 max-w-7xl h-10 flex justify-between items-center text-[11px] uppercase tracking-widest font-medium text-zinc-400">
                            <div className="flex space-x-10 items-center h-full">
                                <a href="mailto:info@althario.com" className="flex items-center space-x-2.5 hover:text-white transition-colors duration-300">
                                    <Mail size={12} className="text-[#fc443b]" />
                                    <span>info@althario.com</span>
                                </a>
                                <div className="flex items-center space-x-2.5">
                                    <MapPin size={12} className="text-[#fc443b]" />
                                    <span>Dubai, United Arab Emirates</span>
                                </div>
                            </div>
                            <div className="flex space-x-10 items-center h-full">
                                <div className="flex items-center space-x-2.5">
                                    <Phone size={12} className="text-[#fc443b]" />
                                    <span>+971 56 240 6732</span>
                                </div>
                                <div className="flex space-x-6 items-center pl-10 border-l border-white/10 h-full">
                                    <a href="https://facebook.com" className="hover:text-white transition-colors duration-300"><Facebook size={14} /></a>
                                    <a href="https://linkedin.com" className="hover:text-white transition-colors duration-300"><Linkedin size={14} /></a>
                                    <a href="https://instagram.com" className="hover:text-white transition-colors duration-300"><Instagram size={14} /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Spacious Navigation */}
            <div className="container mx-auto px-8 max-w-7xl relative">
                <div className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'h-20' : 'h-28'} relative z-10`}>

                    {/* Logo Area inside a pristine white frosted pill for extreme contrast */}
                    <Link to="/" className="flex items-center space-x-4 z-10 group cursor-pointer shrink-0 relative bg-white/95 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/20 transition-all duration-500 hover:shadow-[0_0_25px_rgba(252,68,59,0.2)] hover:border-[#fc443b]/30">
                        <img src="/images/logo_althario.png" alt="Althario Logo" className="h-[24px] lg:h-[22px] object-contain transition-transform duration-500 group-hover:scale-105 relative z-10" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About Us', path: '/about-company' },
                        ].map((item) => (
                            <Link key={item.name} to={item.path} className="relative text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white transition-colors duration-300 group py-2">
                                {item.name}
                                <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#fc443b] to-[#ff7a55] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full shadow-[0_0_10px_rgba(252,68,59,0.5)]"></span>
                            </Link>
                        ))}

                        {/* Dropdown */}
                        <div
                            className="relative py-8"
                            onMouseEnter={() => setIsServicesHovered(true)}
                            onMouseLeave={() => setIsServicesHovered(false)}
                        >
                            <div className="flex items-center text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white cursor-pointer transition-colors duration-300 group">
                                Services <ChevronDown size={14} className={`ml-1.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#fc443b] ${isServicesHovered ? 'rotate-180' : ''}`} />
                            </div>

                            <AnimatePresence>
                                {isServicesHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute top-20 left-1/2 -translate-x-1/2 w-72 bg-[#0a0f1d]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
                                    >
                                        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#fc443b] to-transparent opacity-80 shadow-[0_0_15px_rgba(252,68,59,0.8)]"></div>
                                        <div className="p-3 bg-gradient-to-b from-white/[0.03] to-transparent">
                                            {[
                                                { name: 'Agentic AI', path: '/agentic-ai' },
                                                { name: 'Software Development', path: '/software-development' },
                                                { name: 'Web Development', path: '/web-development' }
                                            ].map((srv) => (
                                                <Link
                                                    key={srv.name}
                                                    to={srv.path}
                                                    className="flex items-center justify-between px-5 py-4 text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all duration-300 group/link rounded-lg"
                                                >
                                                    <span className="group-hover/link:bg-clip-text group-hover/link:text-transparent group-hover/link:bg-gradient-to-r group-hover/link:from-[#ff7a55] group-hover/link:to-[#fc443b] transition-all duration-300">
                                                        {srv.name}
                                                    </span>
                                                    <MoveRight size={14} className="opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-[#fc443b]" />
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {[
                            { name: 'Portfolio', path: '/portfolio-grid' },
                            { name: 'Contacts', path: '/contacts' },
                            { name: 'Journal', path: '/blog-grid' }
                        ].map((item) => (
                            <Link key={item.name} to={item.path} className="relative text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white transition-colors duration-300 group py-2">
                                {item.name}
                                <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#fc443b] to-[#ff7a55] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full shadow-[0_0_10px_rgba(252,68,59,0.5)]"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggles */}
                    <div className="flex items-center space-x-6 z-10 shrink-0">
                        <Link to="/contacts" className="relative hidden lg:inline-flex items-center justify-center px-8 py-3.5 text-[12px] uppercase tracking-widest font-bold text-white overflow-hidden rounded-full group bg-gradient-to-br from-[#fc443b] to-[#bd2c25] shadow-[0_4px_20px_rgba(252,68,59,0.3)] hover:shadow-[0_8px_30px_rgba(252,68,59,0.5)] transition-all duration-500">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 drop-shadow-md">Start Project</span>
                        </Link>

                        <button
                            className="p-2 lg:hidden text-zinc-300 hover:text-[#fc443b] transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="lg:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-[#060b1a]/95 backdrop-blur-3xl z-40 overflow-y-auto border-t border-white/5"
                    >
                        <div className="flex flex-col px-8 py-10 space-y-6">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about-company' },
                            ].map((item, i) => (
                                <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                    <Link to={item.path} className="text-2xl font-light tracking-tight text-white block" onClick={() => setIsMobileMenuOpen(false)}>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                <div
                                    className="flex items-center justify-between text-2xl font-light tracking-tight text-white w-full cursor-pointer"
                                    onClick={() => setIsServicesHovered(!isServicesHovered)}
                                >
                                    Services
                                    <ChevronDown size={20} className={`text-[#fc443b] transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
                                </div>
                                <AnimatePresence>
                                    {isServicesHovered && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="flex flex-col pl-6 mt-6 space-y-5 overflow-hidden border-l border-white/10"
                                        >
                                            <Link to="/agentic-ai" className="text-lg text-zinc-400 hover:text-white transition-colors font-light" onClick={() => setIsMobileMenuOpen(false)}>Agentic AI</Link>
                                            <Link to="/software-development" className="text-lg text-zinc-400 hover:text-white transition-colors font-light" onClick={() => setIsMobileMenuOpen(false)}>Software Development</Link>
                                            <Link to="/web-development" className="text-lg text-zinc-400 hover:text-white transition-colors font-light" onClick={() => setIsMobileMenuOpen(false)}>Web Development</Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {[
                                { name: 'Portfolio', path: '/portfolio-grid' },
                                { name: 'Contacts', path: '/contacts' },
                                { name: 'Journal', path: '/blog-grid' },
                            ].map((item, i) => (
                                <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (i * 0.1) }}>
                                    <Link to={item.path} className="text-2xl font-light tracking-tight text-white block" onClick={() => setIsMobileMenuOpen(false)}>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="pt-8 w-full">
                                <Link to="/contacts" className="relative flex items-center justify-center w-full py-5 text-[12px] uppercase tracking-[0.2em] font-bold text-white bg-gradient-to-r from-[#fc443b] to-[#bd2c25] rounded-full shadow-xl shadow-[#fc443b]/20" onClick={() => setIsMobileMenuOpen(false)}>
                                    Start Project
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
