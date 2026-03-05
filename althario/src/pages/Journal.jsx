import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: "The Future of Agentic AI in Enterprise Operations",
        category: "Artificial Intelligence",
        readTime: "8 min read",
        date: "March 15, 2026",
        desc: "Explore how autonomous AI agents are moving beyond simple automation to dynamically manage full-scale enterprise operations and decision-making.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2070",
        featured: true,
        slug: "/journal/agentic-ai-future"
    },
    {
        id: 2,
        title: "How to Scale Your High-Traffic Next.js Architecture",
        category: "Web Engineering",
        readTime: "6 min read",
        date: "March 10, 2026",
        desc: "Deep dive into the caching strategies, edge networking, and database optimizations required to serve millions of users with sub-second latency.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
        featured: false,
        slug: "/journal/scaling-nextjs"
    },
    {
        id: 3,
        title: "Why Custom Software Outpaces SaaS in ROI",
        category: "Software Development",
        readTime: "7 min read",
        date: "February 22, 2026",
        desc: "An analytical breakdown of why off-the-shelf software falls short in industrial applications, and how custom ERPs are saving millions.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
        featured: false,
        slug: "/journal/custom-software-roi"
    }
];

const categories = ["All", "Artificial Intelligence", "Web Engineering", "Software Development"];

const Journal = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredPosts = activeFilter === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeFilter);

    const featuredPost = blogPosts.find(p => p.featured);

    return (
        <div className="relative w-full min-h-screen bg-[#070c1a] font-sans pt-32 pb-20 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#fc443b]/10 to-transparent blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#fc443b]/5 to-transparent blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

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
                        <span className="text-[11px] font-black tracking-[0.2em] text-white uppercase">Intel & Insights</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8"
                    >
                        Our Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc443b] to-[#ff003c]">Journal.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Deep technical breakdowns, industry analysis, and architectural blueprints from the minds at Althario.
                    </motion.p>
                </div>

                {/* 2. FEATURED POST */}
                {featuredPost && activeFilter === "All" && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-20"
                    >
                        <Link to={featuredPost.slug} className="group relative block bg-[#0a0710]/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] overflow-hidden hover:border-[#fc443b]/40 transition-all duration-700 shadow-2xl">
                            <div className="flex flex-col lg:flex-row min-h-[500px]">
                                {/* Image side */}
                                <div className="lg:w-1/2 relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                                        style={{ backgroundImage: `url(${featuredPost.image})` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0710] to-transparent hidden lg:block"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0710] to-transparent lg:hidden"></div>
                                </div>

                                {/* Content side */}
                                <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center relative z-10">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#fc443b]/10 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <div className="flex items-center space-x-4 mb-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#fc443b] px-3 py-1 bg-[#fc443b]/10 border border-[#fc443b]/20 rounded-full">
                                            Featured • {featuredPost.category}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight group-hover:text-white transition-colors">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-zinc-400 text-[15px] leading-relaxed font-light mb-8">
                                        {featuredPost.desc}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex space-x-5 text-zinc-500 text-xs font-medium uppercase tracking-wider">
                                            <div className="flex items-center"><Calendar size={14} className="mr-2" />{featuredPost.date}</div>
                                            <div className="flex items-center"><Clock size={14} className="mr-2" />{featuredPost.readTime}</div>
                                        </div>

                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#fc443b] group-hover:border-[#fc443b] transition-all duration-500 shadow-lg">
                                            <ArrowRight size={18} className="text-white transform group-hover:-rotate-45 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* 3. FILTER / TABS */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center gap-3 mb-12 border-b border-white/10 pb-6"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${activeFilter === cat
                                ? "bg-white text-[#060b1a]"
                                : "text-zinc-500 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* 4. POST GRID */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.filter(p => !p.featured || activeFilter !== "All").map((post, index) => (
                            <motion.div
                                layout
                                key={post.id}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link
                                    to={post.slug}
                                    className="group relative bg-[#0a0710]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#fc443b]/30 transition-all duration-500 flex flex-col shadow-lg hover:shadow-[0_20px_40px_rgba(252,68,59,0.15)] cursor-pointer h-full"
                                >
                                    {/* Image Wrapper */}
                                    <div className="h-64 relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${post.image})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0710] to-transparent opacity-90"></div>

                                        {/* Category Badge on Image */}
                                        <div className="absolute top-6 left-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-300">{post.category}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 pt-4 flex flex-col flex-1 relative">
                                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-snug group-hover:text-[#fc443b] transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="text-zinc-400 text-[14px] leading-relaxed font-light mb-8 line-clamp-3">
                                            {post.desc}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex flex-col space-y-1 text-zinc-500 text-[10px] font-medium uppercase tracking-widest">
                                                <span>{post.date}</span>
                                                <span className="text-zinc-600">{post.readTime}</span>
                                            </div>

                                            <div className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center group-hover:border-[#fc443b] group-hover:bg-[#fc443b]/10 transition-all duration-300">
                                                <ArrowRight size={16} className="text-zinc-400 group-hover:text-[#fc443b] transform group-hover:translate-x-1 transition-all duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* 5. NEWSLETTER CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-32 relative text-center bg-gradient-to-r from-[#fc443b] to-[#cc2a24] rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-[0_20px_60px_rgba(252,68,59,0.3)]"
                >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay"></div>

                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">Stay on the Cutting Edge</h2>
                    <p className="relative z-10 text-red-50 text-base md:text-lg font-light max-w-xl mx-auto mb-10 drop-shadow-sm">
                        Subscribe to our intelligence feed for the latest strategies in AI, Software Engineering, and Digital Growth.
                    </p>

                    <form className="relative z-10 max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-black/20 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:bg-black/30 transition-all"
                            required
                        />
                        <button type="submit" className="px-8 py-4 bg-white text-[#fc443b] rounded-full font-black text-[12px] uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                            Subscribe
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default Journal;
