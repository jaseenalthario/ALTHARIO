import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoContactPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenClosed, setHasBeenClosed] = useState(false);

    useEffect(() => {
        // Check if the popup was already closed in this session
        const closed = sessionStorage.getItem('demo_popup_closed');
        if (closed) {
            setHasBeenClosed(true);
            return;
        }

        // Timer to show popup after 12-15 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 13000); // 13 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setHasBeenClosed(true);
        sessionStorage.setItem('demo_popup_closed', 'true');
    };

    const handleDemoBook = () => {
        const whatsappNumber = "971562406732";
        const message = "Hi Althario, I'm interested in booking a free demo of your services!";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (hasBeenClosed && !isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-32 md:bottom-12 z-[150] md:max-w-md w-full pointer-events-none"
                >
                    <div className="bg-[#0a0f1d]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_40px_rgba(252,68,59,0.1)] pointer-events-auto relative overflow-hidden group">
                        {/* Decorative Gradient Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#fc443b]/5 blur-[40px] rounded-full -mr-16 -mt-16 group-hover:bg-[#fc443b]/10 transition-colors duration-700"></div>

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex items-start space-x-5">
                            {/* Icon Container */}
                            <div className="relative shrink-0">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#fc443b] to-[#ff003c] flex items-center justify-center shadow-[0_10px_30px_rgba(252,68,59,0.4)]">
                                    <Sparkles size={24} className="text-white" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-[#0a0f1d] rounded-full"></div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Need help getting started?</h3>
                                <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 font-light">
                                    Book a free demo or consultation and see how our platform can simplify your workflow.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-3">
                                    <button
                                        onClick={handleDemoBook}
                                        className="w-full sm:w-auto px-6 py-3.5 bg-[#fc443b] text-white text-[13px] font-bold uppercase tracking-widest rounded-full hover:bg-[#d6312a] transition-all duration-300 shadow-[0_10px_25px_rgba(252,68,59,0.3)] hover:shadow-[0_15px_35px_rgba(252,68,59,0.4)] hover:-translate-y-1"
                                    >
                                        Book Free Demo
                                    </button>
                                    <Link
                                        to="/contacts"
                                        onClick={handleClose}
                                        className="w-full sm:w-auto px-6 py-3.5 bg-white/5 border border-white/10 text-white text-[13px] font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300 text-center"
                                    >
                                        Contact Us
                                    </Link>
                                </div>

                                <div className="mt-6 flex items-center space-x-2 text-[11px] text-zinc-500 font-medium uppercase tracking-wider">
                                    <MessageSquare size={12} className="text-[#fc443b]" />
                                    <span>Our team usually responds within minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DemoContactPopup;
