import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Terminal, Settings, Layers, Lock, ArrowRight, Activity, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
    {
        icon: Server,
        title: "Enterprise Architecture",
        desc: "Scalable backend systems built with Node, Python, and Rust to handle millions of concurrent operations seamlessly."
    },
    {
        icon: Layers,
        title: "API Ecosystems",
        desc: "REST and GraphQL microservices designed for rapid data traversal and seamless third-party integrations."
    },
    {
        icon: Lock,
        title: "Military-Grade Security",
        desc: "End-to-end encryption, regular penetration testing, and compliance-driven development architecture."
    }
];

const technologies = [
    { name: "Node.js", color: "text-green-500", border: "border-green-500/20", bg: "bg-green-500/10" },
    { name: "Python", color: "text-blue-500", border: "border-blue-500/20", bg: "bg-blue-500/10" },
    { name: "React / Next.js", color: "text-cyan-400", border: "border-cyan-400/20", bg: "bg-cyan-400/10" },
    { name: "PostgreSQL", color: "text-blue-400", border: "border-blue-400/20", bg: "bg-blue-400/10" },
    { name: "Rust", color: "text-orange-500", border: "border-orange-500/20", bg: "bg-orange-500/10" },
    { name: "AWS", color: "text-yellow-500", border: "border-yellow-500/20", bg: "bg-yellow-500/10" }
];

const SoftwareDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="relative w-full min-h-screen bg-[#070c1a] font-sans overflow-hidden">
            {/* Ambient System Glows */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-b from-[#00f0ff]/10 via-[#00f0ff]/5 to-transparent blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#00f0ff]/5 to-transparent blur-[120px] rounded-full pointer-events-none translate-y-1/4 -translate-x-1/4"></div>

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 z-10">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 lg:flex items-center justify-between">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="lg:w-[55%]"
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center space-x-3 bg-[#00f0ff]/10 border border-[#00f0ff]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
                            <Code2 size={14} className="text-[#00f0ff]" />
                            <span className="text-[11px] font-black tracking-[0.2em] text-[#00f0ff] uppercase">Core Engineering</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight"
                        >
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0055ff]">Digital Reality.</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-lg text-zinc-400 font-light max-w-xl mb-12 leading-relaxed">
                            We architect high-performance custom software, internal tools, and complex data systems that give your enterprise an unfair operational advantage.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
                            <Link to="/contacts" className="inline-flex items-center justify-center px-8 py-4 text-[13px] uppercase tracking-widest font-bold text-[#060b1a] bg-gradient-to-r from-[#00f0ff] to-[#00d0ff] rounded-full hover:shadow-[0_10px_30px_rgba(0,240,255,0.4)] hover:scale-105 transition-all duration-500 group">
                                <span>Start Development</span>
                                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Technical Graphic Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-[45%] mt-16 lg:mt-0 relative hidden lg:block"
                    >
                        <div className="relative w-full max-w-[500px] h-[500px] mx-auto bg-[#0a0710]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl p-8 overflow-hidden">
                            {/* Editor Header */}
                            <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                <span className="ml-4 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">sys_kernel.rs</span>
                            </div>

                            {/* Simulated Code Animation */}
                            <div className="space-y-4 font-mono text-sm text-zinc-400">
                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }} className="overflow-hidden whitespace-nowrap text-blue-400">fn <span className="text-white">initialize_system</span>() -{'>'} Result{`<`}(){`>`} {'{'}</motion.div>
                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }} className="overflow-hidden whitespace-nowrap ml-4 text-purple-400">let core <span className="text-white">=</span> <span className="text-yellow-300">Engine::new</span>();</motion.div>
                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }} className="overflow-hidden whitespace-nowrap ml-4 text-green-400">core.<span className="text-blue-300">bind_port</span>(<span className="text-orange-400">8080</span>).<span className="text-blue-300">await</span>?</motion.div>
                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 2.0, ease: "easeOut" }} className="overflow-hidden whitespace-nowrap ml-4 text-zinc-500">// Establishing secure tunnel...</motion.div>
                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }} className="overflow-hidden whitespace-nowrap ml-4 text-white">Logger::info(<span className="text-green-300">"Althario servers ONLINE"</span>);</motion.div>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, delay: 3 }} className="text-blue-400">{'}'}</motion.div>

                                <motion.div
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-2 h-4 bg-[#00f0ff] mt-4"
                                />
                            </div>

                            {/* Decorative glowing grid on bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#00f0ff]/10 to-transparent pointer-events-none"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. ARCHITECTURE EXPERTISE */}
            <section className="py-24 relative z-10 bg-[#0a0710]/50 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#00f0ff] mb-4">Scalable Infrastructure</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Built for performance, engineered for growth.</h2>
                            <p className="text-lg text-zinc-400 font-light mb-10 leading-relaxed">
                                We don't just write code; we architect systems. From zero-downtime database migrations to distributed cloud infrastructure, our software is built to handle the demands of millions of users without breaking a sweat.
                            </p>

                            <div className="space-y-8">
                                {capabilities.map((cap, i) => (
                                    <div key={i} className="flex bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                                        <div className="w-12 h-12 shrink-0 bg-[#00f0ff]/10 rounded-xl border border-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] mr-6">
                                            <cap.icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-2">{cap.title}</h4>
                                            <p className="text-zinc-500 text-sm font-light leading-relaxed">{cap.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {technologies.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`relative p-8 rounded-[2rem] border ${tech.border} ${tech.bg} backdrop-blur-xl flex flex-col items-center justify-center text-center group hover:scale-[1.02] transition-transform`}
                                >
                                    <Terminal size={32} className={`${tech.color} mb-4 opacity-80 group-hover:opacity-100 transition-opacity`} />
                                    <h4 className={`font-bold ${tech.color} tracking-wide`}>{tech.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CALL TO ACTION */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative rounded-[3rem] bg-gradient-to-r from-[#00f0ff] to-[#0066ff] p-16 md:p-24 overflow-hidden text-center shadow-[0_20px_60px_rgba(0,240,255,0.2)]"
                    >
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay"></div>

                        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-[#060b1a] mb-8 tracking-tight drop-shadow-sm">Ready to build your digital infrastructure?</h2>
                        <p className="relative z-10 text-[#060b1a]/80 text-lg font-medium max-w-2xl mx-auto mb-12">
                            Speak directly with our technical leads and let's architect a software solution that guarantees competitive advantage.
                        </p>

                        <Link to="/contacts" className="relative z-10 inline-flex items-center justify-center px-10 py-5 text-[14px] uppercase tracking-widest font-black text-white bg-[#060b1a] rounded-full hover:bg-black hover:scale-105 shadow-[0_15px_30px_rgba(0,0,0,0.2)] transition-all duration-500 group">
                            <span>Initialize Project</span>
                            <ArrowRight size={20} className="ml-4 text-[#00f0ff] group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SoftwareDevelopment;
