import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Network, Zap, Shield, ArrowRight, Activity, Database, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
    {
        icon: Bot,
        title: "Autonomous Execution",
        desc: "Agents that don't just answer questions, but take multi-step actions across your software ecosystem.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
    },
    {
        icon: Network,
        title: "Neural Synergy",
        desc: "Interconnected models that communicate, delegate tasks, and synthesize complex data in real-time.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
    },
    {
        icon: Zap,
        title: "Adaptive Learning",
        desc: "Systems that evolve with your business, self-optimizing workflows and correcting errors autonomously.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
    }
];

const useCases = [
    {
        title: "Enterprise Data Synthesis",
        desc: "Automate the extraction and analysis of millions of records across disparate databases instantly.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070",
        stats: "300% Faster Processing"
    },
    {
        title: "Autonomous Customer Relations",
        desc: "Deploy self-learning agents that resolve complex support tickets by interacting directly with your backend systems.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070",
        stats: "90% Automation Rate"
    },
    {
        title: "Predictive Supply Chain Management",
        desc: "Agents that monitor global variables and autonomously adjust inventory and logistics before bottlenecks occur.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070",
        stats: "Zero Downtime"
    }
];

const AgenticAI = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="relative w-full min-h-screen bg-[#070c1a] font-sans overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#fc443b]/10 via-[#fc443b]/5 to-transparent blur-[150px] rounded-full pointer-events-none -translate-y-1/3"></div>
            <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#fc443b]/5 to-transparent blur-[120px] rounded-full pointer-events-none -translate-x-1/3"></div>

            {/* 1. IMMERSIVE HERO */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 z-10">
                {/* 3D Network Background element */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
                    <motion.div
                        initial={{ rotateX: 60, scale: 2, y: 200, opacity: 0 }}
                        animate={{ rotateX: 60, scale: 2, y: 0, opacity: 0.15 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="w-full h-full bg-[linear-gradient(rgba(252,68,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(252,68,59,0.3)_1px,transparent_1px)] bg-[size:50px_50px] transform-gpu origin-bottom shadow-[inset_0_-100px_100px_#070c1a]"
                    >
                        <motion.div
                            animate={{ y: [0, 50] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 lg:flex items-center justify-between">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="lg:w-1/2"
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center space-x-3 bg-[#fc443b]/10 border border-[#fc443b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
                            <Sparkles size={14} className="text-[#fc443b]" />
                            <span className="text-[11px] font-black tracking-[0.2em] text-[#fc443b] uppercase">Althario Intelligence</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
                        >
                            Beyond Chatbots. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc443b] to-[#ff003c]">Agentic Automation.</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-lg text-zinc-400 font-light max-w-xl mb-12 leading-relaxed">
                            We deploy autonomous AI agents capable of reasoning, planning, and executing complex workflows across your existing enterprise architecture—turning static software into an intelligent workforce.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
                            <Link to="/contacts" className="inline-flex items-center justify-center px-8 py-4 text-[13px] uppercase tracking-widest font-bold text-white bg-gradient-to-r from-[#fc443b] to-[#d6312a] rounded-full hover:shadow-[0_10px_30px_rgba(252,68,59,0.4)] hover:scale-105 transition-all duration-500 group">
                                <span>Deploy Agents</span>
                                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                            <a href="#architecture" className="inline-flex items-center justify-center px-8 py-4 text-[13px] uppercase tracking-widest font-bold text-zinc-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300">
                                View Architecture
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right side floating graphic element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-[45%] mt-16 lg:mt-0 relative hidden md:block"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-dashed border-[#fc443b]/30 opacity-50"
                            ></motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 rounded-full border border-[#fc443b]/20"
                            ></motion.div>

                            {/* Center Core */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 40px rgba(252,68,59,0.3)", "0 0 80px rgba(252,68,59,0.6)", "0 0 40px rgba(252,68,59,0.3)"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-48 h-48 rounded-full bg-gradient-to-br from-[#fc443b]/20 to-[#060b1a] border border-[#fc443b]/40 backdrop-blur-xl flex items-center justify-center z-20"
                                >
                                    <BrainCore />
                                </motion.div>
                            </div>

                            {/* Orbiting Nodes */}
                            {[Cpu, Database, Network, Shield].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        rotate: 360,
                                        transition: { duration: 20 + (i * 5), repeat: Infinity, ease: "linear" }
                                    }}
                                    className="absolute inset-0 z-30"
                                >
                                    <div className={`absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12 bg-[#0a0710] border border-white/10 rounded-xl flex items-center justify-center shadow-lg ${i % 2 === 0 ? 'text-[#fc443b]' : 'text-[#00f0ff]'}`} style={{ transform: `rotate(-${360}deg)` }}>
                                        <Icon size={20} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CORE CAPABILITIES (Glassmorphism Grid) */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Intelligence <span className="text-zinc-500">Architecture</span></h2>
                        <p className="text-zinc-400 font-light max-w-2xl mx-auto">Unlike basic LLM wrappers, our Agentic systems are engineered with memory, tool-use capability, and self-reflection.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="relative rounded-[2.5rem] overflow-hidden group border border-white/5 h-[350px] flex flex-col"
                            >
                                {/* Immersive Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60 grayscale group-hover:grayscale-0"
                                    style={{ backgroundImage: `url(${feat.image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#070c1a] via-[#070c1a]/80 to-transparent"></div>

                                <div className="relative z-10 p-10 mt-auto">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#fc443b]/20 group-hover:border-[#fc443b]/40 transition-all duration-500 text-zinc-300 group-hover:text-[#fc443b]">
                                        <feat.icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#fc443b] transition-colors">{feat.title}</h3>
                                    <p className="text-zinc-400 font-light leading-relaxed text-sm opacity-90 group-hover:opacity-100 transition-opacity">{feat.desc}</p>
                                </div>

                                {/* Subtle Bottom Line Indicator */}
                                <div className="absolute bottom-0 left-0 h-[2px] bg-[#fc443b] w-0 group-hover:w-full transition-all duration-700"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PARALLAX USE CASES */}
            <section id="architecture" className="py-24 relative z-10 bg-[#0a0710]/50 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    {useCases.map((useCase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 mb-32 last:mb-0`}
                        >
                            <div className="lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#fc443b]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-white/10">
                                    <motion.div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${useCase.image})` }}
                                    ></motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] to-transparent opacity-60"></div>
                                </div>

                                {/* Floating Stat Card */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className={`absolute ${i % 2 !== 0 ? '-left-8' : '-right-8'} -bottom-8 bg-[#060b1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center space-x-4`}
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#fc443b]/20 flex items-center justify-center">
                                        <Activity size={20} className="text-[#fc443b]" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Impact Metric</div>
                                        <div className="text-white font-bold">{useCase.stats}</div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="lg:w-1/2">
                                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#fc443b] mb-4">Deployment Scenario 0{i + 1}</div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">{useCase.title}</h3>
                                <p className="text-xl text-zinc-400 font-light leading-relaxed">{useCase.desc}</p>
                            </div>
                        </motion.div>
                    ))}
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

                        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-md">Ready to deploy your neural workforce?</h2>
                        <p className="relative z-10 text-red-50 text-lg font-light max-w-2xl mx-auto mb-12 drop-shadow-sm">
                            Connect with our AI architects to map out how autonomous agents can completely transform your operational efficiency.
                        </p>

                        <Link to="/contacts" className="relative z-10 inline-flex items-center justify-center px-10 py-5 text-[14px] uppercase tracking-widest font-black text-[#fc443b] bg-white rounded-full hover:bg-zinc-50 hover:scale-105 shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                            <span>Request AI Consultation</span>
                            <ArrowRight size={20} className="ml-4 text-[#fc443b] group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

// Abstract rotating brain component for hero graphic
const BrainCore = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fc443b" />
                <stop offset="100%" stopColor="#ff003c" />
            </linearGradient>
        </defs>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
);

export default AgenticAI;
