import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Mail, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animated paragraph that fades in from below on scroll
const AnimatedSection = ({ children, delay = 0, className = '' }) => (
    <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

const JournalPost = ({ title, category, date, readTime, image, sections, author = "Althario Editorial" }) => {
    const { scrollYProgress } = useScroll();
    const scrollSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[#070c1a] font-sans pb-40 overflow-hidden">

            {/* RED PROGRESS BAR */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#fc443b] via-[#ff5c3d] to-[#ff003c] z-[200] origin-left"
                style={{ scaleX: scrollSpring }}
            />

            {/* AMBIENT BACKGROUND */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-15"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#070c1a]/80 via-[#070c1a]/95 to-[#070c1a]" />
                <motion.div
                    animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#fc443b]/5 blur-[140px] rounded-full"
                />
                <motion.div
                    animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
                    transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00a8ff]/4 blur-[120px] rounded-full"
                />
            </div>

            {/* TOP NAV */}
            <div className="fixed top-20 left-0 w-full z-[100] px-8 lg:px-16 flex items-center justify-between pointer-events-none">
                <Link
                    to="/blog-grid"
                    className="pointer-events-auto flex items-center space-x-3 text-zinc-500 hover:text-white transition-all duration-300 group"
                >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#fc443b]/50 group-hover:bg-[#fc443b]/10 transition-all duration-500 backdrop-blur-md">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.35em] hidden md:block">Intelligence Feed</span>
                </Link>

                <div className="pointer-events-auto flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hidden md:block">Live Feed</span>
                </div>
            </div>

            {/* MAIN WRAPPER */}
            <div className="relative z-10 container mx-auto px-6 max-w-3xl pt-52 lg:pt-60">

                {/* === HERO HEADER === */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    {/* Category Badge */}
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-[#fc443b]/10 border border-[#fc443b]/25 px-5 py-2 rounded-full mb-10"
                    >
                        <Sparkles size={12} className="text-[#fc443b]" />
                        <span className="text-[9px] font-black tracking-[0.5em] text-[#fc443b] uppercase">{category}</span>
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-10">
                        {title}
                    </h1>

                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#fc443b]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fc443b]" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#fc443b]" />
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                        <div className="flex items-center gap-2">
                            <User size={12} className="text-[#fc443b]" />
                            {author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={12} className="text-[#fc443b]" />
                            {date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={12} className="text-[#fc443b]" />
                            {readTime}
                        </div>
                    </div>
                </motion.div>

                {/* === COVER IMAGE === */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 mb-24 shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                >
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070c1a]/70 via-transparent to-transparent" />
                </motion.div>

                {/* === ARTICLE CONTENT SECTIONS === */}
                <div className="space-y-0">
                    {sections.map((section, i) => {
                        if (section.type === 'intro') {
                            return (
                                <AnimatedSection key={i} delay={0}>
                                    <p
                                        className="text-xl md:text-2xl text-zinc-300 font-light leading-[1.85] tracking-wide text-justify mb-16"
                                        style={{ hyphens: 'auto' }}
                                    >
                                        {section.text}
                                    </p>
                                </AnimatedSection>
                            );
                        }

                        if (section.type === 'paragraph') {
                            return (
                                <AnimatedSection key={i}>
                                    <p
                                        className="text-[17px] text-zinc-400 font-light leading-[1.95] tracking-wide text-justify mb-10"
                                        style={{ hyphens: 'auto' }}
                                        dangerouslySetInnerHTML={{ __html: section.text }}
                                    />
                                </AnimatedSection>
                            );
                        }

                        if (section.type === 'heading') {
                            return (
                                <AnimatedSection key={i} className="mt-20 mb-6">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-8 h-[2px] bg-[#fc443b] rounded-full flex-shrink-0" />
                                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                            {section.text}
                                        </h2>
                                    </div>
                                </AnimatedSection>
                            );
                        }

                        if (section.type === 'subheading') {
                            return (
                                <AnimatedSection key={i} className="mt-12 mb-4">
                                    <h3 className="text-xl font-bold text-zinc-200 tracking-tight">
                                        {section.text}
                                    </h3>
                                </AnimatedSection>
                            );
                        }

                        if (section.type === 'quote') {
                            return (
                                <AnimatedSection key={i} className="my-16">
                                    <div className="relative border-l-4 border-[#fc443b] pl-8 py-4 bg-gradient-to-r from-[#fc443b]/8 to-transparent rounded-r-2xl">
                                        <div className="text-5xl text-[#fc443b]/20 font-black leading-none mb-2">"</div>
                                        <p className="text-xl md:text-2xl text-white font-medium leading-[1.6] italic">
                                            {section.text}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            );
                        }

                        if (section.type === 'list') {
                            return (
                                <AnimatedSection key={i} className="my-8">
                                    <ul className="space-y-4">
                                        {section.items.map((item, j) => (
                                            <motion.li
                                                key={j}
                                                initial={{ opacity: 0, x: -16 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: j * 0.08 }}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="mt-2 w-5 h-5 rounded-full border border-[#fc443b]/40 bg-[#fc443b]/10 flex items-center justify-center flex-shrink-0">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#fc443b]" />
                                                </div>
                                                <p
                                                    className="text-[16px] text-zinc-400 font-light leading-[1.85] text-justify"
                                                    dangerouslySetInnerHTML={{ __html: item }}
                                                />
                                            </motion.li>
                                        ))}
                                    </ul>
                                </AnimatedSection>
                            );
                        }

                        if (section.type === 'divider') {
                            return (
                                <AnimatedSection key={i} className="my-16">
                                    <div className="flex items-center gap-6">
                                        <div className="flex-1 h-px bg-white/5" />
                                        <div className="flex space-x-2">
                                            {[0, 1, 2].map(d => (
                                                <div key={d} className="w-1 h-1 rounded-full bg-zinc-700" />
                                            ))}
                                        </div>
                                        <div className="flex-1 h-px bg-white/5" />
                                    </div>
                                </AnimatedSection>
                            );
                        }

                        return null;
                    })}
                </div>

                {/* === SHARE STRIP === */}
                <AnimatedSection className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-5">
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">Share</span>
                        <div className="flex gap-3">
                            {[Linkedin, Twitter, Mail].map((Icon, i) => (
                                <button
                                    key={i}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                                >
                                    <Icon size={15} strokeWidth={1.5} />
                                </button>
                            ))}
                        </div>
                    </div>
                    <Link
                        to="/blog-grid"
                        className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                        ← More Intelligence
                    </Link>
                </AnimatedSection>

                {/* === BOTTOM CTA === */}
                <AnimatedSection className="mt-20">
                    <div className="relative bg-gradient-to-br from-[#0f0a1a] to-[#0a0710] border border-white/10 rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#fc443b]/8 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:bg-[#fc443b]/12 transition-all duration-700" />
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#00a8ff]/4 blur-[80px] rounded-full -ml-10 -mb-10" />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
                                <Sparkles size={11} className="text-[#fc443b]" />
                                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Work with us</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-white mb-5 tracking-tight">
                                Ready to Build What's Next?
                            </h2>
                            <p className="text-zinc-500 text-base font-light max-w-lg mx-auto mb-10 leading-relaxed">
                                Our engineering team turns complex challenges into exceptional digital products. Let's talk.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contacts"
                                    className="px-9 py-4 bg-gradient-to-r from-[#fc443b] to-[#ff003c] text-white text-[11px] font-black uppercase tracking-[0.25em] rounded-full hover:shadow-[0_15px_35px_rgba(252,68,59,0.35)] hover:-translate-y-1 transition-all duration-500"
                                >
                                    Start a Conversation
                                </Link>
                                <Link
                                    to="/blog-grid"
                                    className="px-9 py-4 bg-transparent border border-white/15 text-zinc-400 text-[11px] font-black uppercase tracking-[0.25em] rounded-full hover:border-white/30 hover:text-white transition-all duration-500"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

            </div>
        </div>
    );
};

export default JournalPost;
