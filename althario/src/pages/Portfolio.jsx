import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Globe, Sparkles, Code, Cpu,
    Smartphone, Bot, Database, BarChart3, Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ["All Projects", "Agentic AI", "Software Dev", "Web Engineering", "Digital Scaling"];

const projects = [
    {
        id: 1,
        title: "HealthCore AI",
        category: "Agentic AI",
        desc: "An intelligent autonomous healthcare diagnostic agent that streamlines patient processing using neural transformers.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2070",
        tags: ["Machine Learning", "Healthcare", "Python"]
    },
    {
        id: 2,
        title: "Nexus ERP",
        category: "Software Dev",
        desc: "Full-scale enterprise resource planning software for manufacturing, featuring real-time supply chain automation.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
        tags: ["Industrial", "ERP", "React/Node"]
    },
    {
        id: 3,
        title: "Aura E-Commerce",
        category: "Web Engineering",
        desc: "A high-performance luxury shopping experience with instant page loads and seamless 3D product previews.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070",
        tags: ["Next.js", "Retail", "3D Web"]
    },
    {
        id: 4,
        title: "Sentinel Security",
        category: "Software Dev",
        desc: "Advanced cybersecurity dashboard for monitoring threat vectors across distributed network infrastructures.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
        tags: ["Cybersecurity", "Rust", "Analytics"]
    },
    {
        id: 5,
        title: "MarketFlow IQ",
        category: "Digital Scaling",
        desc: "Predictive analytics engine for marketing attribution, achieving a 300% increase in lead generation efficiency.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070",
        tags: ["Big Data", "Growth", "Marketing"]
    },
    {
        id: 6,
        title: "AutoBot CRM",
        category: "Agentic AI",
        desc: "Self-learning customer relations agent that automates 90% of support queries through natural language understanding.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
        tags: ["NLP", "Automation", "GPT-4"]
    }
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All Projects");
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (activeCategory === "All Projects") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <div className="relative w-full min-h-screen bg-[#070c1a] font-sans pt-32 pb-20 overflow-hidden">
            {/* Soft global gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#131d3b] via-[#070c1a] to-[#040814] opacity-80 z-0 pointer-events-none"></div>

            {/* Background Animations */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.15 }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-full bg-cover bg-center opacity-25 mix-blend-screen"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')" }}
                ></motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] via-transparent to-[#060b1a]"></div>

                {/* Luminous Light Orbs */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#fc443b]/5 blur-[120px] rounded-full"
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* 1. HERO SECTION */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md"
                    >
                        <Sparkles size={14} className="text-[#fc443b]" />
                        <span className="text-[11px] font-black tracking-[0.2em] text-white uppercase">Our Work Journal</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8"
                    >
                        Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc443b] to-[#ff003c]">Digital Success.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        A curated showcase of enterprise systems, AI agents, and custom software engineered to scale global businesses.
                    </motion.p>
                </div>

                {/* 2. FILTER SYSTEM */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-20 px-4"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-500 border ${activeCategory === cat
                                ? "bg-[#fc443b] border-[#fc443b] text-white shadow-[0_10px_30px_rgba(252,68,59,0.3)] scale-105"
                                : "bg-white/5 border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* 3. PROJECT GRID */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.3 } }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0710]/40 transition-all duration-700 hover:border-[#fc443b]/40 shadow-2xl"
                            >
                                {/* Immersive Image */}
                                <div className="absolute inset-0 z-0">
                                    <motion.div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    ></motion.div>
                                    {/* Gradients */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] via-[#060b1a]/70 to-transparent opacity-100 shadow-inner"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#fc443b]/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                                </div>

                                {/* Header Info (Always Visible) */}
                                <div className="absolute top-8 left-8 right-8 z-10 flex justify-between items-start pointer-events-none">
                                    <div className="bg-[#fc443b]/20 backdrop-blur-xl border border-[#fc443b]/40 rounded-full px-4 py-1.5 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#fc443b]">{project.category}</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                        <ArrowRight size={16} className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                </div>

                                {/* Content Architecture */}
                                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end z-10">
                                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-white transition-colors">{project.title}</h3>

                                        <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-zinc-400 text-[14px] leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 line-clamp-2 mb-6">
                                            {project.desc}
                                        </p>

                                        <Link to="/contacts" className="inline-flex items-center space-x-3 text-white text-[11px] font-black uppercase tracking-[0.2em] transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                                            <span>Inquire Now</span>
                                            <div className="w-5 h-px bg-[#fc443b] group-hover:w-8 transition-all duration-500"></div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Bottom Glow Line */}
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#fc443b] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center opacity-80 shadow-[0_0_15px_rgba(252,68,59,0.5)]"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* 4. CALL TO ACTION */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-32 relative text-center bg-gradient-to-r from-[#fc443b] to-[#cc2a24] rounded-[3rem] p-16 md:p-24 overflow-hidden shadow-[0_20px_60px_rgba(252,68,59,0.3)]"
                >
                    {/* Light Decorative Background Elements */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[80px] rounded-full mix-blend-overlay pointer-events-none"></div>
                    <div className="absolute top-0 right-1/4 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>

                    <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-md">Need a custom solution?</h2>
                    <p className="relative z-10 text-red-50 text-lg font-light max-w-xl mx-auto mb-12 drop-shadow-sm">
                        Whether it's an AI assistant or a secure enterprise ERP, we have the engineering expertise to bring it to life.
                    </p>

                    <Link to="/contacts" className="relative z-10 inline-flex items-center justify-center px-10 py-5 text-[14px] uppercase tracking-widest font-black text-[#fc443b] bg-white rounded-full hover:bg-zinc-50 hover:scale-105 shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                        <span>Initialize Your Project</span>
                        <ArrowRight size={20} className="ml-4 text-[#fc443b] group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>

            </div>
        </div>
    );
};

export default Portfolio;
