import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Users, LayoutGrid, BrainCircuit, Code,
    Share2, Laptop, TrendingUp, Cpu,
    ShoppingCart, ShieldCheck, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div className="relative w-full min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0a1024] via-[#060b1a] to-[#040814] font-sans pt-32 pb-20 overflow-hidden">

            {/* Background Atmosphere Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fc443b]/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-8 max-w-7xl relative z-10">

                {/* 1. HERO SECTION: Who We Are */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-32 items-center"
                >
                    <motion.div variants={fadeUp}>
                        <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
                            <Users size={14} className="text-[#fc443b]" />
                            <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">Who We Are</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
                            Your Partner for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc443b] to-[#ff7a55]">Digital Excellence</span>
                        </h1>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 border-l-2 border-[#fc443b]/30 pl-6">
                            We are a team of creators and strategists dedicated to building your standout digital presence. From crafting high-performance websites to implementing intelligent AI automation and executing impactful digital marketing campaigns, we provide the end-to-end solutions that deliver measurable success.
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

                    {/* Hero Image / Graphic */}
                    <motion.div variants={fadeUp} className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#060b1a] via-transparent to-transparent z-10 mix-blend-multiply"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#060b1a] to-transparent z-10 border-b border-white/10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
                            alt="Althario Team"
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[20s] ease-out brightness-75"
                        />
                        {/* decorative floaters */}
                        <div className="absolute bottom-8 right-8 z-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                            <div className="w-10 h-10 rounded-full bg-[#fc443b]/20 flex items-center justify-center mb-4 border border-[#fc443b]/30">
                                <Cpu size={20} className="text-[#fc443b]" />
                            </div>
                            <h4 className="text-white text-sm font-medium mb-1">Engineered Growth</h4>
                            <p className="text-zinc-500 text-xs">Transforming visionary ideas</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 2. EXPERTISE SUMMARY */}
                <div className="relative z-20 w-full mb-32 pt-20 border-t border-white/5">
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
                                className="bg-[#0a1024]/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
                            >
                                {/* top highlight */}
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fc443b]/0 to-transparent group-hover:via-[#fc443b]/50 transition-all duration-700"></div>

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
