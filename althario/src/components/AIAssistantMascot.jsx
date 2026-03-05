import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const scrollMessages = [
    { threshold: 0.0, text: "👋 Hi! I'm your Althario AI assistant." },
    { threshold: 0.2, text: "We build custom enterprise software." },
    { threshold: 0.4, text: "Scale your business with AI automation." },
    { threshold: 0.6, text: "Ready to accelerate your digital presence?" },
    { threshold: 0.8, text: "Let's engineer your success. Get in touch!" }
];

const AIAssistantMascot = () => {
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
                    className="mb-4 mr-2 lg:mr-4 bg-[#0a0f1d]/90 backdrop-blur-xl border border-[#fc443b]/30 rounded-2xl rounded-br-sm px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)] max-w-[240px] pointer-events-auto relative"
                >
                    <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#0a0f1d]/90 border-b border-r border-[#fc443b]/30 transform rotate-45"></div>
                    <div className="text-white text-sm font-medium leading-relaxed relative z-10">
                        <TypeAnimation
                            key={messageIndex} /* Ensures TypeAnimation restarts on new text */
                            sequence={[scrollMessages[messageIndex].text]}
                            wrapper="span"
                            cursor={true}
                            speed={50}
                            style={{ display: 'inline-block' }}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Mascot Container */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-28 h-28 lg:w-32 lg:h-32 pointer-events-auto cursor-pointer group"
            >
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-[#fc443b]/10 rounded-full blur-[30px] group-hover:bg-[#fc443b]/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-[#00f0ff]/10 rounded-full blur-[20px] group-hover:bg-[#00f0ff]/20 transition-all duration-500 translate-x-2"></div>

                {/* Render the current frame */}
                <img
                    src={imageSrc}
                    alt="AI Assistant"
                    // mix-blend-screen helps to blend dark JPG backgrounds into the app's dark theme
                    className="absolute inset-0 w-full h-full object-cover mix-blend-screen rounded-full border-2 border-white/5 group-hover:border-[#fc443b]/30 shadow-[0_0_20px_rgba(252,68,59,0.2)] transition-all duration-500"
                />
            </motion.div>
        </div>
    );
};

export default AIAssistantMascot;
