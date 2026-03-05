import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Mail, Phone, MapPin, Send, MessageSquare,
    Globe, Clock, ArrowRight, Sparkles,
    Linkedin, Facebook, Instagram, Twitter
} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        // Basic validation
        if (!name || !message) {
            alert("Please provide at least your name and a message.");
            return;
        }

        const companyEmail = "info@althario.com";
        const emailSubject = subject || `New Inquiry from ${name}`;
        const emailBody = `Sender Name: ${name}%0D%0ASender Email: ${email || 'Not provided'}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        const mailtoUrl = `mailto:${companyEmail}?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

        // Use window.open instead of location.href to ensure better browser compatibility
        window.open(mailtoUrl, '_blank');

        // Clear the form fields after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

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
                    animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-[#fc443b]/5 blur-[100px] rounded-full"
                />
            </div>

            <div className="container mx-auto px-8 max-w-7xl relative z-10">

                {/* 1. HERO SECTION: Contact Intro */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md"
                    >
                        < Sparkles size={14} className="text-[#fc443b]" />
                        <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">Get In Touch</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-8"
                    >
                        Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc443b] to-[#ff003c]">Something Big.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Ready to scale your business with custom enterprise software or AI automation? Our engineering team is online and ready to architect your future.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* 2. CONTACT INFO (Left Side) - 4 Columns */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="lg:col-span-5 space-y-8"
                    >
                        <motion.div variants={fadeUp} className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group relative overflow-hidden shadow-2xl">
                            {/* Card Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#fc443b]/5 blur-[40px] rounded-full -mr-16 -mt-16 transition-colors duration-500 group-hover:bg-[#fc443b]/10"></div>

                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#fc443b]/10 border border-[#fc443b]/30 flex items-center justify-center group-hover:bg-[#fc443b] transition-all duration-500 shadow-[0_0_20px_rgba(252,68,59,0.2)]">
                                    <Mail size={24} className="text-[#fc443b] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white text-xl font-bold mb-2">Email Us</h3>
                                    <p className="text-zinc-500 text-sm mb-4 font-light">Direct response within 2 hours.</p>
                                    <a href="mailto:info@althario.com" className="text-white text-lg font-medium hover:text-[#fc443b] transition-colors flex items-center group-hover:translate-x-1 transition-transform">
                                        info@althario.com
                                        <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group relative overflow-hidden shadow-2xl">
                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#39ff14]/5 border border-[#39ff14]/20 flex items-center justify-center group-hover:bg-[#39ff14]/80 transition-all duration-500 shadow-[0_0_20px_rgba(57,255,20,0.1)]">
                                    <Phone size={24} className="text-[#39ff14] group-hover:text-[#060b1a] transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white text-xl font-bold mb-2">Call Us</h3>
                                    <p className="text-zinc-500 text-sm mb-4 font-light">Available Mon-Fri, 9am - 6pm (GST).</p>
                                    <a href="tel:+971562406732" className="text-white text-lg font-medium hover:text-[#39ff14] transition-colors flex items-center group-hover:translate-x-1 transition-transform">
                                        +971 56 240 6732
                                        <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group relative overflow-hidden shadow-2xl">
                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center group-hover:bg-[#00f0ff] transition-all duration-500 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                                    <MapPin size={24} className="text-[#00f0ff] group-hover:text-[#060b1a] transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white text-xl font-bold mb-2">Main Office</h3>
                                    <p className="text-zinc-500 text-sm mb-4 font-light">Headquarters in the heart of tech excellence.</p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Clover+Bay+Tower+Business+Bay+Dubai+UAE"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-lg font-medium hover:text-[#00f0ff] transition-colors flex items-center group-hover:translate-x-1 transition-transform"
                                    >
                                        Clover Bay Tower, Business Bay, Dubai
                                        <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={fadeUp} className="pt-8 flex items-center justify-center lg:justify-start space-x-6 px-10">
                            {[
                                { network: Linkedin, link: 'https://www.linkedin.com/company/al-thario/' },
                                { network: Instagram, link: 'https://www.instagram.com/al.thario?igsh=MTlobDY2cTRnYXM5dw==' },
                                { network: Facebook, link: 'https://www.facebook.com/althario.ae' }
                            ].map((social, i) => {
                                const Social = social.network;
                                return (
                                    <a key={i} href={social.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#fc443b] hover:bg-[#fc443b]/10 hover:border-[#fc443b]/30 transition-all duration-500 transform hover:scale-110">
                                        <Social size={20} strokeWidth={1.5} />
                                    </a>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* 3. CONTACT FORM (Right Side) - 7 Columns */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 bg-[#0a0710]/40 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 md:p-16 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] group"
                    >
                        {/* Interactive Background Glows */}
                        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#fc443b]/10 via-transparent to-transparent blur-[120px] pointer-events-none group-hover:opacity-100 transition-opacity duration-1000 opacity-50"></div>
                        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-transparent blur-[80px] pointer-events-none"></div>

                        <form className="relative z-10 space-y-8" onSubmit={handleSendMessage}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 ml-1">Your Identity</label>
                                    <div className="relative group/input">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="James Watson"
                                            required
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4.5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#fc443b]/60 focus:bg-white/[0.05] transition-all duration-500 text-lg font-light"
                                        />
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fc443b]/0 to-[#fc443b]/0 group-hover/input:from-[#fc443b]/10 group-focus-within/input:from-[#fc443b]/20 transition-all duration-700 pointer-events-none -z-10"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 ml-1">Email Coordinates</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="james@company.com"
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4.5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#fc443b]/60 focus:bg-white/[0.05] transition-all duration-500 text-lg font-light"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 ml-1">Subject of Engagement</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="AI Automation Inquiry"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4.5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#fc443b]/60 focus:bg-white/[0.05] transition-all duration-500 text-lg font-light"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 ml-1">Communication Body</label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Briefly describe your vision..."
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-6 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#fc443b]/60 focus:bg-white/[0.05] transition-all duration-500 text-lg font-light resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="w-full relative group/btn overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#fc443b] to-[#ff003c] transition-transform duration-700 group-hover/btn:scale-105"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite_linear] pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>

                                <div className="relative py-5 px-8 flex items-center justify-center space-x-4">
                                    <span className="text-white text-[13px] font-black uppercase tracking-[0.3em]">Initialize Transmission</span>
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-2 transition-transform duration-500">
                                        <Send size={12} className="text-white" />
                                    </div>
                                </div>
                            </button>

                            <div className="flex items-center justify-center space-x-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest pt-4">
                                <Clock size={12} className="text-[#39ff14]" />
                                <span>Typical response: Next 60 minutes</span>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* 4. DUBAI LOCATION MAP PREVIEW / GLOBE THEME */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-32 relative h-[400px] w-full rounded-[3rem] overflow-hidden border border-white/5"
                >
                    <div className="absolute inset-0 bg-[#0a0f1d] z-0">
                        {/* Stylized custom map placeholder background */}
                        <div className="w-full h-full bg-cover bg-center opacity-40 mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] via-[#060b1a]/50 to-transparent"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,68,59,0.1)_0%,transparent_100%)]"></div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-12 lg:p-20 z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h2 className="text-white text-3xl font-bold mb-4 tracking-tight">Global Synergy HUB</h2>
                            <p className="text-zinc-400 font-light flex items-center justify-center lg:justify-start">
                                <Globe size={16} className="text-[#fc443b] mr-3" />
                                Coordinating international excellence from Dubai, UAE.
                            </p>
                        </div>

                        <div className="bg-[#0a0f1d]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center space-x-6">
                            <div className="w-12 h-12 rounded-full border border-green-500/30 bg-green-500/5 flex items-center justify-center shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                            </div>
                            <div>
                                <div className="text-white text-xs font-bold uppercase tracking-widest mb-1">Office Status</div>
                                <div className="text-zinc-500 text-[11px]">Online - Accepting Transmissions</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
