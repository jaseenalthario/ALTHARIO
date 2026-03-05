import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const getContextMessages = (pathname) => {
    if (pathname.includes('/services/agentic-ai')) {
        return [
            { threshold: 0.0, text: "👋 Welcome to Agentic AI automation." },
            { threshold: 0.2, text: "Deploy self-learning neural networks." },
            { threshold: 0.4, text: "Automate complex enterprise workflows." },
            { threshold: 0.6, text: "AI that takes action, not just text generation." },
            { threshold: 0.8, text: "Ready to deploy your neural workforce?" }
        ];
    } else if (pathname.includes('/services/software-development')) {
        return [
            { threshold: 0.0, text: "👋 Exploring our software capabilities?" },
            { threshold: 0.2, text: "We engineer scalable enterprise platforms." },
            { threshold: 0.4, text: "Focusing on security and system integration." },
            { threshold: 0.6, text: "Robust architectures with modern tech stacks." },
            { threshold: 0.8, text: "Let's align our code with your vision." }
        ];
    } else if (pathname.includes('/services/web-development')) {
        return [
            { threshold: 0.0, text: "👋 Let's build a high-performance web asset." },
            { threshold: 0.2, text: "Crafting immersive, high-end digital experiences." },
            { threshold: 0.4, text: "Optimizing for maximum speed and conversion." },
            { threshold: 0.6, text: "Responsive engineering for every screen size." },
            { threshold: 0.8, text: "Ready to elevate your digital presence?" }
        ];
    } else if (pathname.includes('/about')) {
        return [
            { threshold: 0.0, text: "👋 Discover the minds behind Althario." },
            { threshold: 0.3, text: "We believe in transforming digital landscapes." },
            { threshold: 0.6, text: "Our expertise spans across AI and digital engineering." },
            { threshold: 0.9, text: "Join forces with our elite technical team." }
        ];
    } else if (pathname.includes('/contact')) {
        return [
            { threshold: 0.0, text: "👋 We're here to help." },
            { threshold: 0.5, text: "Send us a message or schedule a call!" }
        ];
    } else {
        // Default / Home
        return [
            { threshold: 0.0, text: "👋 Hi! I'm your Althario AI assistant." },
            { threshold: 0.2, text: "We build custom enterprise software." },
            { threshold: 0.4, text: "Scale your business with AI automation." },
            { threshold: 0.6, text: "Ready to accelerate your digital presence?" },
            { threshold: 0.8, text: "Let's engineer your success. Get in touch!" }
        ];
    }
};

const AIAssistantMascot = () => {
    const location = useLocation();
    const scrollMessages = getContextMessages(location.pathname);
    const [currentFrame, setCurrentFrame] = useState(1);
    const [messageIndex, setMessageIndex] = useState(0);

    // Frame animation loop (~10 FPS)
    useEffect(() => {
        let frame = 1;
        const interval = setInterval(() => {
            frame = (frame % 15) + 1;
            setCurrentFrame(frame);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Preload images
    useEffect(() => {
        for (let i = 1; i <= 15; i++) {
            const img = new Image();
            img.src = `/ai-agent/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
        }
    }, []);

    // Robust scroll detection via Framer Motion
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        let newIndex = 0;
        for (let i = scrollMessages.length - 1; i >= 0; i--) {
            if (latest >= scrollMessages[i].threshold) {
                newIndex = i;
                break;
            }
        }
        if (newIndex !== messageIndex) {
            setMessageIndex(newIndex);
        }
    });

    // Reset message when route changes
    useEffect(() => {
        setMessageIndex(0);
    }, [location.pathname]);

    const frameString = String(currentFrame).padStart(3, '0');
    const imageSrc = `/ai-agent/ezgif-frame-${frameString}.jpg`;

    return (
        <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] pointer-events-none flex flex-col items-end">
            {/* Speech Bubble */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={messageIndex}
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                    className="mb-6 mr-2 lg:mr-4 bg-gradient-to-br from-[#0a0f1d]/95 to-[#131d3b]/95 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] rounded-br-sm p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(252,68,59,0.15)] max-w-[280px] pointer-events-auto relative group/bubble hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(252,68,59,0.3)] transition-all duration-500"
                >
                    {/* Top edge highlight */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <div className="absolute -bottom-2 right-6 w-5 h-5 bg-[#131d3b]/95 border-b border-r border-white/10 transform rotate-45"></div>

                    <div className="text-white text-sm font-medium leading-relaxed relative z-10 flex items-start space-x-4">
                        <div className="mt-0.5 w-7 h-7 shrink-0 rounded-full bg-gradient-to-tr from-[#fc443b] to-[#ff003c] flex items-center justify-center shadow-[0_0_15px_rgba(252,68,59,0.5)]">
                            <Sparkles size={14} className="text-white" />
                        </div>
                        <div className="flex-1 font-light tracking-wide pt-1">
                            <TypeAnimation
                                key={messageIndex + location.pathname} /* Ensures TypeAnimation restarts on new text and page load */
                                sequence={[scrollMessages[messageIndex]?.text || scrollMessages[0].text]}
                                wrapper="span"
                                cursor={true}
                                speed={60}
                                style={{ display: 'inline-block' }}
                            />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Mascot Container */}
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-28 h-28 lg:w-32 lg:h-32 pointer-events-auto cursor-pointer group"
            >
                {/* Holographic Base Projector Light */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#fc443b] rounded-[100%] blur-[12px] opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-10 h-1 bg-white rounded-[100%] blur-[4px] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Rotating Tech Rings */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-[-6px] rounded-full border border-dashed border-white/20 group-hover:border-[#00f0ff]/50 transition-colors duration-500 pointer-events-none"></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-[-12px] rounded-full border-[1.5px] border-transparent border-t-[#fc443b]/40 border-b-[#fc443b]/40 group-hover:border-t-[#fc443b]/80 group-hover:border-b-[#fc443b]/80 transition-colors duration-500 pointer-events-none"></motion.div>

                {/* Outer Glow */}
                <div className="absolute inset-0 bg-[#fc443b]/10 rounded-full blur-[30px] group-hover:bg-[#fc443b]/30 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#00f0ff]/10 rounded-full blur-[20px] group-hover:bg-[#00f0ff]/30 transition-all duration-500 translate-x-2 pointer-events-none"></div>

                {/* Render the current frame */}
                <img
                    src={imageSrc}
                    alt="AI Assistant"
                    // mix-blend-screen helps to blend dark JPG backgrounds into the app's dark theme
                    className="absolute inset-0 w-full h-full object-cover mix-blend-screen rounded-full border-2 border-white/10 group-hover:border-[#fc443b]/50 shadow-[0_0_20px_rgba(252,68,59,0.1)] transition-all duration-500"
                />
            </motion.div>
        </div>
    );
};

export default AIAssistantMascot;
