import React, { useEffect } from 'react';
import {
    Users, LayoutGrid, BrainCircuit, Code,
    Share2, Laptop, TrendingUp, Cpu,
    ShoppingCart, ShieldCheck, ArrowRight, Globe, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const stats = [
    { value: "101", suffix: "+", label: "Satisfied Clients" },
    { value: "120", suffix: "+", label: "Complete Projects" },
    { value: "5", suffix: "+", label: "Years of Experience" }
];

const expertise = [
    {
        title: "Custom Website",
        desc: "Create high-quality websites that improve efficiency and user experience.",
        icon: LayoutGrid
    },
    {
        title: "AI Automation",
        desc: "Automate tasks to save time and boost team productivity.",
        icon: BrainCircuit
    },
    {
        title: "Software Development",
        desc: "Build custom software, apps, and internal tools for your business.",
        icon: Code
    },
    {
        title: "Digital Marketing",
        desc: "Grow your brand with SEO, social media, and paid campaigns.",
        icon: Share2
    }
];

const capabilities = [
    { num: "01", title: "AI Automation", desc: "Streamline business processes with intelligent AI solutions.", icon: Cpu },
    { num: "02", title: "Custom Website Design", desc: "Design websites that are fast, modern, and user-friendly.", icon: Laptop },
    { num: "03", title: "Digital Marketing", desc: "Increase leads, traffic, and visibility with smart campaigns.", icon: TrendingUp },
    { num: "04", title: "Software Development", desc: "Develop custom software, mobile apps, and internal tools.", icon: Code },
    { num: "05", title: "E-Commerce Development", desc: "Build online stores that convert visitors into customers.", icon: ShoppingCart },
    { num: "06", title: "IT & Support", desc: "Keep your systems secure, updated, and fully optimized.", icon: ShieldCheck }
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const About = () => {
    // Scroll to top when mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[#070c1a] font-sans pt-32 pb-20 overflow-hidden">
            {/* Soft global gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#131d3b] via-[#070c1a] to-[#040814] opacity-80 z-0 pointer-events-none"></div>

            {/* Background Space Network Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-full bg-cover bg-center opacity-30 mix-blend-screen"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')" }}
                ></motion.div>
                <div className="absolute inset-0 bg-[#060b1a]/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] via-[#060b1a]/20 to-[#060b1a]"></div>

                {/* Floating Light Orbs */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#00f0ff]/10 blur-[80px] rounded-full"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff003c]/10 blur-[100px] rounded-full"
                />
            </div>

            <div className="container mx-auto px-8 max-w-7xl relative z-10" style={{ perspective: '1500px' }}>

                {/* 1. HERO SECTION: Who We Are (3D Holographic) */}
                <motion.div
                    initial={{ opacity: 0, rotateX: 10, z: -100 }}
                    whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#0a0710]/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 shadow-2xl p-10 lg:p-20 mb-32 relative overflow-hidden transform-gpu"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Inner Holographic Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#00f0ff]/10 via-[#00f0ff]/5 to-transparent blur-[80px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#39ff14]/5 to-transparent blur-[60px] rounded-full pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10" style={{ transformStyle: 'preserve-3d' }}>

                        {/* 3D Floating Left Content */}
                        <motion.div
                            animate={{ y: [-5, 5] }}
                            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                            style={{ transform: 'translateZ(60px)' }}
                        >
                            <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
                                <Users size={14} className="text-[#00f0ff]" />
                                <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">Who We Are</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8">
                                Architecting <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff003c]">Digital Truth.</span>
                            </h1>

                            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md mb-8 relative overflow-hidden">
                                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#00f0ff] to-[#ff003c]"></div>
                                <p className="text-white text-lg font-light leading-relaxed italic border-white/10">
                                    We engineer the systems that scale modern enterprises.
                                </p>
                            </div>

                            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 pl-2">
                                We are a team of creators and strategists dedicated to building your standout digital presence. From crafting high-performance websites to implementing intelligent AI automation.
                            </p>

                            {/* Stats inline */}
                            <div className="flex flex-wrap gap-8 sm:gap-14 pt-6 border-t border-white/10">
                                {stats.map((stat, idx) => (
                                    <motion.div key={idx} variants={fadeUp} className="flex flex-col">
                                        <div className="flex items-baseline space-x-1">
                                            <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">{stat.value}</span>
                                            <span className="text-xl font-bold text-[#fc443b]">{stat.suffix}</span>
                                        </div>
                                        <span className="text-[12px] font-medium text-zinc-500 uppercase tracking-widest mt-2">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Floating Parallax UI Cluster (Right Side) */}
                        <div className="w-full h-[500px] relative hidden lg:flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}>
                            <motion.div
                                initial={{ opacity: 0, rotateY: 30, z: -300, x: -100 }}
                                whileInView={{ opacity: 1, rotateY: 10, z: 0, x: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="relative w-full h-full flex items-center justify-center transform-gpu"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Back Left: Orbital Node Core */}
                                <motion.div
                                    animate={{ y: [-15, 15], rotateX: [-10, 10], rotateY: [15, -15] }}
                                    transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                    className="absolute -top-10 left-0 w-56 h-60 rounded-full border border-white/5 bg-[#060b1a]/40 backdrop-blur-2xl p-5 shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center overflow-hidden"
                                    style={{ transform: 'translateZ(-150px)' }}
                                >
                                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)]"></div>

                                    {/* Rotating Rings */}
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-[90%] h-[90%] rounded-full border border-[#00f0ff]/20 border-t-[#00f0ff]/80 border-r-[#00f0ff]/50"></motion.div>
                                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[70%] h-[70%] rounded-full border border-[#ff003c]/10 border-b-[#ff003c]/60 border-l-[#ff003c]/30"></motion.div>
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-[50%] h-[50%] rounded-full border border-dashed border-[#39ff14]/30"></motion.div>

                                    {/* Central Core */}
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#00f0ff]/20 backdrop-blur-md border border-[#00f0ff] flex items-center justify-center shadow-[0_0_30px_#00f0ff]">
                                        <BrainCircuit size={20} className="text-white" />
                                    </div>

                                    <div className="absolute bottom-10 font-mono text-[9px] text-[#00f0ff] tracking-[0.3em] uppercase opacity-80 font-bold">Cognitive Core</div>
                                </motion.div>

                                {/* Center Main Dashboard: Holographic Topology Matrix */}
                                <motion.div
                                    animate={{ y: [15, -15], rotateZ: [1, -1], rotateX: [2, -2] }}
                                    transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                    className="relative z-10 w-[450px] h-[350px] rounded-[2rem] border border-white/10 bg-[#0a0f1d]/60 backdrop-blur-3xl p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden"
                                    style={{ transform: 'translateZ(50px)' }}
                                >
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.15),transparent_70%)] rounded-full blur-2xl`}></div>
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] perspective-grid opacity-50"></div>

                                    <div className="flex justify-between items-start mb-2 relative z-10">
                                        <div>
                                            <div className="text-[10px] text-zinc-400 mb-1 tracking-widest uppercase font-bold flex items-center"><div className="w-2 h-2 rounded-full bg-[#00f0ff] mr-2 shadow-[0_0_10px_#00f0ff] animate-pulse"></div> GLOBAL SYNERGY</div>
                                            <div className="text-3xl font-black text-white tracking-tight flex items-baseline gap-2">SYNAPSE <span className="text-lg font-light text-zinc-400">v4.2</span></div>
                                        </div>
                                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
                                            <Globe className="text-[#00f0ff]" size={20} />
                                        </div>
                                    </div>

                                    {/* SVG Network Topology Map */}
                                    <div className="flex-1 w-full relative z-10 flex items-center justify-center mt-2 group">
                                        <svg viewBox="0 0 400 200" className="w-full h-full preserve-3d overflow-visible">
                                            {/* Linking Lines */}
                                            <motion.path
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                whileInView={{ pathLength: 1, opacity: 0.5 }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 3, ease: "easeInOut" }}
                                                d="M50 150 Q 150 180, 200 100 T 350 50"
                                                fill="transparent" stroke="#00f0ff" strokeWidth="2" strokeDasharray="6 6"
                                            />
                                            <motion.path
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                whileInView={{ pathLength: 1, opacity: 0.8 }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                                                d="M80 50 L 200 100 L 280 150 L 350 50"
                                                fill="transparent" stroke="#ff003c" strokeWidth="1.5"
                                            />
                                            <motion.path
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                whileInView={{ pathLength: 1, opacity: 0.4 }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 4, ease: "easeInOut" }}
                                                d="M50 150 L 280 150"
                                                fill="transparent" stroke="#39ff14" strokeWidth="1.5"
                                            />

                                            {/* Blooming Nodes */}
                                            {[
                                                { x: 50, y: 150, c: "#00f0ff", r: 5 },
                                                { x: 80, y: 50, c: "#ff003c", r: 7 },
                                                { x: 200, y: 100, c: "#ffffff", r: 9 },
                                                { x: 280, y: 150, c: "#39ff14", r: 6 },
                                                { x: 350, y: 50, c: "#00f0ff", r: 8 }
                                            ].map((node, i) => (
                                                <g key={i}>
                                                    <motion.circle
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: false }}
                                                        transition={{ duration: 0.5, delay: 1 + (i * 0.2) }}
                                                        cx={node.x} cy={node.y} r={node.r} fill={node.c}
                                                        className="drop-shadow-[0_0_12px_currentColor]"
                                                    />
                                                    <motion.circle
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        whileInView={{ scale: 2.5, opacity: 0 }}
                                                        viewport={{ once: false }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: 1 + (i * 0.2) }}
                                                        cx={node.x} cy={node.y} r={node.r} fill="transparent" stroke={node.c} strokeWidth="1.5"
                                                    />
                                                </g>
                                            ))}

                                            {/* Data Packets moving along path */}
                                            <motion.circle
                                                animate={{ cx: [80, 200, 280, 350], cy: [50, 100, 150, 50] }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                                r="4" fill="#ffffff" className="drop-shadow-[0_0_15px_white]"
                                            />
                                        </svg>
                                    </div>

                                    {/* Bottom Data Streams */}
                                    <div className="w-full flex justify-between items-end border-t border-white/10 pt-5 mt-2 relative z-10">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono mb-1">Stream Alpha</span>
                                            <span className="text-white font-mono text-sm tracking-widest bg-white/5 py-1 px-3 rounded-lg border border-white/5">0xF8B<span className="text-[#39ff14] animate-pulse">_</span></span>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono mb-1">Packet Velocity</span>
                                            <span className="text-white font-mono text-lg font-bold">2,491 <span className="text-xs text-zinc-500 font-normal">/s</span></span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Front Right Holographic Quantum Vault Panel */}
                                <motion.div
                                    animate={{ y: [-25, 25], rotateY: [-5, 5], rotateX: [10, -10] }}
                                    transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }}
                                    className="absolute -right-12 top-6 bottom-auto w-52 h-64 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#060b1a]/90 to-black/90 backdrop-blur-3xl p-6 shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 flex flex-col items-center justify-center overflow-hidden"
                                    style={{ transform: 'translateZ(200px) rotateY(-15deg)' }}
                                >
                                    <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff003c] to-transparent opacity-80"></div>

                                    {/* Descending Matrix Code Effect */}
                                    <div className="absolute inset-0 opacity-[0.06] text-[#00f0ff] font-mono text-[8px] leading-[8px] break-all overflow-hidden flex flex-col items-center pointer-events-none p-2">
                                        <motion.div animate={{ y: [0, -100] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                                            {Array.from({ length: 40 }).map((_, i) => "10 0110 1101 00 \n")}
                                        </motion.div>
                                    </div>

                                    {/* Floating Shield Hologram */}
                                    <div className="relative w-28 h-28 flex items-center justify-center mb-6">
                                        <motion.div animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-[#ff003c]/40"></motion.div>
                                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-3 rounded-full border-2 border-b-[#ff003c]/80 border-t-[#00f0ff]/30 border-l-transparent border-r-transparent"></motion.div>
                                        <div className="relative z-10 p-4 bg-red-500/10 rounded-[1.2rem] border border-red-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(255,0,60,0.4)]">
                                            <Shield size={32} strokeWidth={1.5} className="text-[#ff003c]" />
                                        </div>
                                    </div>

                                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-2 w-full text-center tracking-[0.3em]">QUANTUM VAULT</div>
                                    <div className="w-full bg-red-500/10 text-[#ff003c] py-1.5 text-center justify-center flex items-center rounded text-[10px] tracking-[0.2em] font-bold border border-red-500/30 shadow-[0_0_15px_rgba(255,0,60,0.2)]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff003c] mr-2 animate-pulse"></div> SECURED
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. EXPERTISE SUMMARY */}
                <div className="relative z-20 w-full mb-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {expertise.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="bg-[#0a1024]/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
                            >
                                {/* top highlight */}
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff]/0 to-transparent group-hover:via-[#00f0ff]/50 transition-all duration-700"></div>

                                <div className="w-12 h-12 rounded-xl bg-[#fc443b]/5 flex items-center justify-center mb-6 group-hover:bg-[#fc443b]/10 group-hover:scale-110 transition-all duration-500">
                                    <item.icon size={24} className="text-zinc-400 group-hover:text-[#fc443b] transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-white text-lg font-medium mb-3 group-hover:text-[#fc443b] transition-colors">{item.title}</h3>
                                <p className="text-zinc-500 text-[14px] leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* 3. CAPABILITIES / NEXT LEVEL */}
                <div className="mb-32">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight mb-6"
                        >
                            Take Your Business to <span className="text-[#fc443b] italic pr-2">Next Level!</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-zinc-400 font-light"
                        >
                            We build end-to-end ecosystems designed to streamline, optimize, and massively scale your operations.
                        </motion.p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {capabilities.map((cap, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="group p-10 bg-gradient-to-b from-[#0a1024]/60 to-transparent border border-white/5 rounded-3xl relative overflow-hidden transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            >
                                {/* massive background number */}
                                <div className="absolute -top-6 -right-4 text-9xl font-black text-white/[0.02] transform group-hover:scale-110 group-hover:text-[#fc443b]/[0.05] transition-all duration-700 pointer-events-none select-none">
                                    {cap.num}
                                </div>

                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="w-10 h-px bg-white/10 group-hover:bg-[#fc443b]/50 group-hover:w-16 transition-all duration-500"></div>
                                    <span className="text-zinc-500 font-mono text-sm group-hover:text-[#fc443b] transition-colors">{cap.num}</span>
                                </div>

                                <div className="mb-6 h-12 w-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#fc443b]/10 group-hover:border-[#fc443b]/20 transition-all duration-500 relative z-10">
                                    <cap.icon size={22} strokeWidth={1.5} className="text-zinc-400 group-hover:text-[#fc443b] transition-colors" />
                                </div>

                                <h3 className="text-xl font-medium text-white mb-4 relative z-10">{cap.title}</h3>
                                <p className="text-zinc-400 text-[14px] leading-relaxed font-light relative z-10">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* 4. CALL TO ACTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-full rounded-[2.5rem] bg-gradient-to-r from-[#fc443b] to-[#d6312a] p-12 md:p-20 overflow-hidden shadow-[0_20px_50px_rgba(252,68,59,0.2)]"
                >
                    {/* decorative background patterns */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to engineer your next digital success?</h2>
                            <p className="text-red-100 text-lg font-light">Join the 100+ businesses who automated and scaled with Althario.</p>
                        </div>

                        <div className="flex-shrink-0">
                            <a href="mailto:info@althario.com" className="inline-flex items-center justify-center px-10 py-5 text-[14px] uppercase tracking-widest font-bold text-[#fc443b] bg-white rounded-full hover:bg-zinc-100 hover:scale-105 shadow-xl transition-all duration-500 group">
                                <span>Get In Touch</span>
                                <ArrowRight size={18} strokeWidth={2.5} className="ml-3 group-hover:translate-x-1.5 transition-transform duration-500" />
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default About;
