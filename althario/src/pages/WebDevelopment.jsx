import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Palette, Zap, Smartphone, Search, ArrowRight, Sparkles, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
    {
        icon: Palette,
        title: "Immersive UI/UX Design",
        desc: "We don't just design interfaces; we craft digital experiences that captivate users through high-end aesthetics and fluid interactions.",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1000" // UX mapping / wireframes
    },
    {
        icon: Zap,
        title: "Ultra-Performance",
        desc: "Lightning-fast page loads with optimized Core Web Vitals, ensuring your brand stays ahead in search rankings and user retention.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" // High performance / code
    },
    {
        icon: MonitorSmartphone,
        title: "Adaptive Engineering",
        desc: "Pixel-perfect responsiveness across every device, from ultra-wide monitors to the latest smartphones.",
        image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1000" // Adaptive devices / mobile
    }
];

const processSteps = [
    {
        title: "Strategy & Blueprinting",
        desc: "Defining the technical architecture and user flow to align with your business growth objectives.",
        image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=2000" // Architectural blueprint
    },
    {
        title: "High-End Development",
        desc: "Engineered with the latest tech stack (Next.js, Tailwind, Framer Motion) for maximum scalability.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000" // Code / engineering
    },
    {
        title: "Performance Optimization",
        desc: "Rigorous testing and fine-tuning for speed, security, and global accessibility.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" // Analytics chart
    }
];

const WebDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="relative w-full min-h-screen bg-[#070c1a] font-sans overflow-hidden">
            {/* Ambient High-Tech Glows */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#fc443b]/10 via-[#fc443b]/5 to-transparent blur-[150px] rounded-full pointer-events-none -translate-y-1/3"></div>
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#00f0ff]/5 to-transparent blur-[120px] rounded-full pointer-events-none translate-x-1/3"></div>

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 z-10">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 lg:flex items-center justify-between">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="lg:w-[60%]"
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
                            <Layout size={14} className="text-[#fc443b]" />
                            <span className="text-[11px] font-black tracking-[0.2em] text-white uppercase">Experience First</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight"
                        >
                            High-End <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc443b] to-[#ff003c]">Web Engineering.</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-lg text-zinc-400 font-light max-w-xl mb-12 leading-relaxed">
                            We architect websites that don't just look stunning—they are engineered for extreme performance, security, and conversion. Transforming your brand into a digital powerhouse.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
                            <Link to="/contacts" className="inline-flex items-center justify-center px-8 py-4 text-[13px] uppercase tracking-widest font-bold text-white bg-[#fc443b] rounded-full hover:shadow-[0_10px_30px_rgba(252,68,59,0.4)] hover:scale-105 transition-all duration-500 group">
                                <span>Start Building</span>
                                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right side floating elements */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-[40%] mt-16 lg:mt-0 relative hidden lg:block"
                    >
                        <div className="relative w-[120%] h-[500px] flex items-center justify-center -right-10">
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full h-full relative rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(252,68,59,0.2)] border border-[#fc443b]/10 group"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000')" }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#060b1a]/60 to-transparent"></div>
                                <div className="absolute inset-0 bg-[#fc443b]/10 mix-blend-overlay"></div>
                            </motion.div>

                            {/* Floating Stats */}
                            <motion.div
                                animate={{ y: [20, -20, 20] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-10 bottom-10 bg-[#060b1a]/90 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-white/10 text-white z-20 w-48"
                            >
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#fc443b] mb-1 flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-[#fc443b] animate-pulse mr-2"></div>
                                    Performance
                                </div>
                                <div className="text-3xl font-bold">100/100</div>
                                <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 2, delay: 0.5 }} viewport={{ once: true }} className="h-full bg-gradient-to-r from-[#fc443b] to-[#ff003c]"></motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CORE EXPERTISE */}
            <section className="py-24 relative z-10 bg-[#0a0710]/50 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">The Art of <span className="text-[#fc443b]">Web Science.</span></h2>
                        <p className="text-zinc-400 font-light max-w-2xl mx-auto">We combine world-class design with high-performance engineering to build digital assets that scale.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {capabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="relative rounded-[2.5rem] overflow-hidden group border border-white/5 h-[350px] flex flex-col"
                            >
                                {/* Immersive Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60 grayscale group-hover:grayscale-0"
                                    style={{ backgroundImage: `url(${cap.image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0710] via-[#0a0710]/80 to-transparent"></div>

                                <div className="relative z-10 p-10 mt-auto">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#fc443b]/20 group-hover:border-[#fc443b]/40 transition-all duration-500 text-zinc-300 group-hover:text-[#fc443b]">
                                        <cap.icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#fc443b] transition-colors">{cap.title}</h3>
                                    <p className="text-zinc-400 font-light leading-relaxed text-sm opacity-90 group-hover:opacity-100 transition-opacity">{cap.desc}</p>
                                </div>

                                {/* Subtle Bottom Line Indicator */}
                                <div className="absolute bottom-0 left-0 h-[2px] bg-[#fc443b] w-0 group-hover:w-full transition-all duration-700"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. STEP BY STEP PROCESS */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="relative group flex flex-col h-[420px] rounded-[2.5rem] overflow-hidden border border-white/5"
                            >
                                {/* Immersive Background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0"
                                    style={{ backgroundImage: `url(${step.image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] via-[#060b1a]/70 to-[#060b1a]/30 group-hover:opacity-90 transition-opacity duration-700"></div>
                                <div className="absolute inset-0 bg-[#fc443b]/0 group-hover:bg-[#fc443b]/10 transition-colors duration-700 mix-blend-overlay"></div>

                                {/* Step Number Badge */}
                                <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white font-black text-2xl group-hover:bg-[#fc443b] group-hover:border-[#fc443b] group-hover:scale-110 transition-all duration-500 shadow-xl z-20">
                                    0{i + 1}
                                </div>

                                {/* Content */}
                                <div className="relative z-10 p-10 mt-auto">
                                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#fc443b] transition-colors duration-500">{step.title}</h3>
                                    <p className="text-zinc-300 font-light text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">{step.desc}</p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#fc443b] to-[#ff003c] w-0 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative rounded-[3rem] bg-gradient-to-r from-[#fc443b] to-[#cc2a24] p-16 md:p-24 overflow-hidden text-center shadow-[0_20px_60px_rgba(252,68,59,0.3)]"
                    >
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay"></div>

                        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-md">Elevate your digital presence.</h2>
                        <p className="relative z-10 text-red-50 text-lg font-light max-w-2xl mx-auto mb-12 drop-shadow-sm">
                            Ready to build a high-performance website that dominates your market? Let's engineer something extraordinary together.
                        </p>

                        <Link to="/contacts" className="relative z-10 inline-flex items-center justify-center px-10 py-5 text-[14px] uppercase tracking-widest font-black text-[#fc443b] bg-white rounded-full hover:bg-zinc-50 hover:scale-105 shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                            <span>Initialize Project</span>
                            <ArrowRight size={20} className="ml-4 text-[#fc443b] group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment;
