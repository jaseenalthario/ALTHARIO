import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, MeshTransmissionMaterial, Environment, Lightformer, Html, useGLTF } from '@react-three/drei';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import {
    ChevronRight, Code2, Globe, Cpu, ArrowRight, Zap, ShieldCheck, Layers,
    CheckCircle2, BarChart3, Activity, FileText, Layout, MessageSquare,
    Users, Briefcase, Award, Shield
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import ErrorBoundary from '../components/ErrorBoundary';

const codeSnippets = [
    "const ai = new Agent();",
    "function optimize() { ... }",
    "await system.deploy();",
    "class DigitalReality { }",
    "01100010 01101001",
    "import { Althario } from '@core';",
    "console.log('Excellence');",
    "let scale = Infinity;",
    "res.status(200).send();",
    "Array.prototype.transform();",
    "export default Innovate;",
    "function execute_workflow()",
    "Promise.all([scale, speed])"
];

// Elite 3D Glass Core Component (Luxurious Abstract Geometry)
const LuxuryDataCore = () => {
    const coreRef = useRef();

    useFrame((state, delta) => {
        if (coreRef.current) {
            coreRef.current.rotation.x += delta * 0.15;
            coreRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <>
            {/* Studio Lighting Setup for high-end glass reflections */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={3} color="#fc443b" />
            <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
            <pointLight position={[0, -5, 0]} intensity={1} color="#ff7a55" />

            {/* Floating Animation */}
            <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
                <mesh ref={coreRef} scale={1.4}>
                    <torusKnotGeometry args={[1, 0.35, 256, 64]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={2}
                        chromaticAberration={0.5}
                        anisotropy={0.3}
                        distortion={0.2}
                        distortionScale={0.3}
                        temporalDistortion={0.1}
                        color="#ff3333"
                        attenuationDistance={1.5}
                        attenuationColor="#ffffff"
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        metalness={0.2}
                        roughness={0}
                    />
                </mesh>
            </Float>

            {/* Custom Environment Map for realistic glass reflections in a dark theme */}
            <Environment resolution={256}>
                <Lightformer form="rect" intensity={5} color="#fc443b" position={[5, 5, 10]} scale={10} onUpdate={self => self.lookAt(0, 0, 0)} />
                <Lightformer form="circle" intensity={3} color="#ffffff" position={[-5, 5, -10]} scale={5} onUpdate={self => self.lookAt(0, 0, 0)} />
            </Environment>
        </>
    );
};

// 3D Background Elements
const FloatingCode = () => {
    // Generate static values outside of render entirely using lazy initial state
    const [nodes] = useState(() => Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        position: [
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 45,
            (Math.random() - 0.5) * 20 - 5
        ],
        scale: Math.random() * 0.4 + 0.3,
        color: Math.random() > 0.85 ? '#fc443b' : '#334155',
        speed: Math.random() * 0.8 + 0.2,
        rotationIntensity: Math.random() * 0.3,
        floatIntensity: Math.random() * 1.5 + 0.5
    })));

    const ref = useRef();
    useFrame((state, delta) => {
        if (ref.current) ref.current.rotation.y += delta * 0.015;
    });

    return (
        <group ref={ref}>
            {nodes.map((node) => (
                <Float key={node.id} speed={node.speed} rotationIntensity={node.rotationIntensity} floatIntensity={node.floatIntensity}>
                    <Text
                        position={node.position}
                        fontSize={node.scale}
                        color={node.color}
                        font="https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgJv7S.woff"
                        anchorX="center"
                        anchorY="middle"
                        fillOpacity={0.3}
                        depthWrite={false}
                    >
                        {node.text}
                    </Text>
                </Float>
            ))}
        </group>
    );
};

const ParticleSwarm = () => {
    const ref = useRef();
    const count = 3000;

    const [positions] = useState(() => {
        const generatedPositions = new Float32Array(count * 3);
        const radius = 40;
        for (let i = 0; i < count; i++) {
            generatedPositions[i * 3] = (Math.random() - 0.5) * radius * 2.5;
            generatedPositions[i * 3 + 1] = (Math.random() - 0.5) * radius * 2.5;
            generatedPositions[i * 3 + 2] = (Math.random() - 0.5) * radius * 1.5;
        }
        return generatedPositions;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30;
            ref.current.rotation.y -= delta / 40;
        }
    });

    return (
        <points ref={ref}>
            {positions && (
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
            )}
            <pointsMaterial size={0.035} color="#fc443b" sizeAttenuation={true} transparent opacity={0.4} depthWrite={false} />
        </points>
    );
};

// Hero Slider Data (Outcome-Oriented for Business Impact)
const slides = [
    {
        num: "01",
        title: "Automate Complex Operations with AI",
        desc: "Boost team productivity by 40% with intelligent agents that handle multi-step workflows autonomously.",
        accent: "from-[#00f0ff] to-[#ff003c]", // Cyan to Magenta
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072"
    },
    {
        num: "02",
        title: "Scale Securely with Enterprise AI",
        desc: "Engineered for high-concurrency environments with a focus on data integrity and secure cloud infrastructure.",
        accent: "from-[#39ff14] to-[#00f0ff]", // Lime to Cyan
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
    },
    {
        num: "03",
        title: "Custom Systems Built for Growth",
        desc: "From AI-driven analytics to bespoke web platforms, we engineer the tools that scale your business impact.",
        accent: "from-[#ff003c] to-[#39ff14]", // Magenta to Lime
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 40;
        const moveY = (clientY - window.innerHeight / 2) / 40;
        mouseX.set(moveX);
        mouseY.set(moveY);
    };

    const contentX = useTransform(mouseX, (v) => v * 1.8);
    const contentY = useTransform(mouseY, (v) => v * 1.8);
    const contentRotateY = useTransform(mouseX, (v) => v / 10);
    const contentRotateX = useTransform(mouseY, (v) => -v / 10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen min-h-[700px] flex flex-col justify-center overflow-hidden bg-black"
            style={{ perspective: "2000px" }}
        >
            {/* 3D Cinematic Background Layer - Dark Nocturne */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0710]">
                {/* Immersive 3D Image Transitions */}
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={current}
                        initial={{
                            opacity: 0,
                            scale: 1.1,
                            z: -300,
                            rotateY: 10,
                            filter: 'blur(30px) brightness(0)'
                        }}
                        animate={{
                            opacity: 0.55, /* Lightened transparency for brighter background */
                            scale: 1,
                            z: 0,
                            rotateY: 0,
                            filter: 'blur(1px) brightness(1.3)' /* Brighter image */
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            z: 300,
                            rotateY: -10,
                            filter: 'blur(20px) brightness(0)'
                        }}
                        transition={{
                            duration: 2.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${slides[current].image})`,
                            transformStyle: 'preserve-3d'
                        }}
                    />
                </AnimatePresence>

                {/* Blending Overlays to integrate image with aesthetic (Lightened) */}
                <div className="absolute inset-0 bg-[#0a0710]/10 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0710]/90 via-transparent to-[#0a0710]/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0710]/80 via-transparent to-transparent"></div>

                {/* Simulated Floating Neon Orbs replacing flat images */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                    <motion.div
                        animate={{
                            rotateZ: [0, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`absolute w-[900px] h-[900px] rounded-full blur-[140px] bg-gradient-to-tr ${slides[current].accent} mix-blend-screen opacity-30`}
                    />
                </div>

                {/* Scanline/Grid Overlay for Digital Texture */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] perspective-grid"></div>
            </div>

            {/* 3D Content Wrapper */}
            <motion.div
                style={{
                    x: contentX,
                    y: contentY,
                    rotateY: contentRotateY,
                    rotateX: contentRotateX,
                    transformStyle: 'preserve-3d'
                }}
                className="container mx-auto px-8 max-w-7xl relative z-10 pt-20"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full" style={{ transform: 'translateZ(100px)' }}>
                    {/* Left Column: Text */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: { opacity: 0, rotateX: -20, z: -200, filter: 'blur(10px)' },
                                visible: {
                                    opacity: 1,
                                    rotateX: 0,
                                    z: 0,
                                    filter: 'blur(0px)',
                                    transition: { staggerChildren: 0.1, delayChildren: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                                },
                                exit: {
                                    opacity: 0,
                                    rotateX: 20,
                                    z: 200,
                                    filter: 'blur(10px)',
                                    transition: { duration: 0.8, ease: "easeInOut" }
                                }
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <motion.div
                                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                                className="flex items-center space-x-4 mb-6"
                            >
                                <span className="text-white font-mono text-sm tracking-[0.2em]">{slides[current].num}</span>
                                <div className={`h-px w-12 bg-gradient-to-r ${slides[current].accent}`}></div>
                            </motion.div>

                            <motion.h1
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
                                className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6 min-h-[120px]"
                            >
                                <TypeAnimation
                                    key={current}
                                    sequence={[slides[current].title]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={0}
                                    speed={50}
                                />
                            </motion.h1>

                            <motion.p
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                                className="text-base text-zinc-400 max-w-lg font-normal leading-[1.7] mb-10 pl-6 border-l-2 border-white/10"
                            >
                                {slides[current].desc}
                            </motion.p>

                            <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}>
                                <Link to="/about-company" className="inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-wider font-semibold text-white rounded bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all duration-300">
                                    <span>Explore Solutions</span>
                                    <ArrowRight size={14} className="ml-3" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right Column: 3D Glass Cards Animation Cluster */}
                    <div className="hidden lg:flex relative h-[600px] w-full items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, rotateY: 25, z: -400, x: 100 }}
                                animate={{ opacity: 1, rotateY: 0, z: 0, x: 0 }}
                                exit={{ opacity: 0, rotateY: -25, z: 200, x: -100 }}
                                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 flex items-center justify-center transform-gpu"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Card 1: Back Left (Blurred, slow float) */}
                                <motion.div
                                    animate={{ y: [-15, 15], rotateX: [2, -2], rotateY: [-5, 5] }}
                                    transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                    className="absolute -left-12 top-16 w-64 h-52 rounded-2xl border border-white/5 bg-[#0a0710]/40 backdrop-blur-md p-5 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden"
                                    style={{ transform: 'translateZ(-150px) rotateY(10deg)' }}
                                >
                                    <div className="flex items-center space-x-3 opacity-60">
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${slides[current].accent} blur-[1px]`}></div>
                                        <div className="font-mono text-xs text-zinc-300">Data Throughput</div>
                                    </div>
                                    {/* Mini Bar Chart */}
                                    <div className="flex items-end justify-between h-20 space-x-2 mt-4">
                                        {[40, 70, 45, 90, 60, 85].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                                                className={`w-full bg-gradient-to-t ${slides[current].accent} rounded-t-sm opacity-50`}
                                            />
                                        ))}
                                    </div>
                                    <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r ${slides[current].accent} opacity-30`}></div>
                                </motion.div>

                                {/* Card 2: Center Main (The large line chart) */}
                                <motion.div
                                    animate={{ y: [10, -10], rotateX: [-2, 2] }}
                                    transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                    className="relative z-10 w-[450px] h-[340px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-7 shadow-2xl flex flex-col justify-between overflow-hidden"
                                    style={{ transform: 'translateZ(50px)' }}
                                >
                                    {/* Luminous Glow Edge */}
                                    <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${slides[current].accent} opacity-60`}></div>

                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="text-xs text-zinc-400 mb-1 tracking-wider uppercase font-medium">Global AI Synergy</div>
                                            <div className="text-3xl font-bold text-white tracking-tight">1,248.5k <span className="text-sm font-normal text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded ml-2">+12.4%</span></div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-xl border border-white/10">
                                            <div className="flex space-x-1">
                                                <div className="w-1 h-3 rounded-full bg-white/40"></div>
                                                <div className="w-1 h-5 rounded-full bg-white/80"></div>
                                                <div className="w-1 h-3 rounded-full bg-white/40"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Simulated Chart/Data */}
                                    <div className="flex-1 w-full mt-4 relative">
                                        <div className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-t ${slides[current].accent} opacity-[0.05] rounded-lg`}></div>
                                        <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d overflow-visible">
                                            {/* Grid lines */}
                                            <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                                            <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                                            <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

                                            <motion.path
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 1 }}
                                                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                                                d="M0 35 C 10 35, 20 15, 30 20 S 50 5, 60 15 S 80 5, 100 10"
                                                fill="transparent"
                                                stroke="url(#gradLine)"
                                                strokeWidth="1.5"
                                                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                            />
                                            <motion.path
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.2 }}
                                                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                                                d="M0 35 C 10 35, 20 15, 30 20 S 50 5, 60 15 S 80 5, 100 10 L 100 40 L 0 40 Z"
                                                fill={`url(#gradArea)`}
                                            />
                                            <defs>
                                                <linearGradient id="gradLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
                                                    <stop offset="100%" stopColor="#fff" stopOpacity="1" />
                                                </linearGradient>
                                                <linearGradient id="gradArea" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                                                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </motion.div>

                                {/* Card 3: Front Right (Floating Widget) */}
                                <motion.div
                                    animate={{ y: [-20, 20], rotateZ: [-2, 2], rotateY: [5, -5] }}
                                    transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1 }}
                                    className="absolute -right-10 -bottom-16 w-60 h-36 rounded-2xl border border-white/20 bg-[#060b1a]/80 backdrop-blur-2xl p-5 shadow-[0_30px_70px_rgba(0,0,0,0.6)] z-20 flex items-center space-x-5"
                                    style={{ transform: 'translateZ(180px) rotateY(-5deg)' }}
                                >
                                    {/* Circular Progress */}
                                    <div className="relative w-16 h-16 flex items-center justify-center">
                                        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                            <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            <motion.path
                                                initial={{ strokeDasharray: "0, 100" }}
                                                animate={{ strokeDasharray: "75, 100" }}
                                                transition={{ duration: 2, ease: "easeOut" }}
                                                className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                                                strokeLinecap="round"
                                                strokeWidth="3"
                                                stroke="currentColor"
                                                fill="none"
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <span className="absolute text-[12px] font-bold text-white">75%</span>
                                    </div>
                                    <div>
                                        <div className="text-[11px] text-zinc-400 uppercase tracking-[0.2em] font-bold mb-1">System Load</div>
                                        <div className="text-sm text-zinc-300 leading-tight">Optimized & stable performance</div>
                                    </div>
                                    <div className={`absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b ${slides[current].accent} opacity-40`}></div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Slider Controls / Progress */}
                <div className="absolute bottom-20 left-8 flex items-center space-x-6">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className="relative h-1 cursor-pointer overflow-hidden rounded-full transition-all duration-500"
                            style={{ width: current === idx ? '64px' : '24px', backgroundColor: 'rgba(255,255,255,0.1)' }}
                        >
                            {current === idx && (
                                <motion.div
                                    layoutId="progress"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 6, ease: "linear" }}
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#fc443b] to-[#ff7a55]"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

// Data and Component for Realistic Typewriter Code Block
const codeTokens = [
    { text: "import ", color: "text-[#ff7a55]" },
    { text: "{ ", color: "text-zinc-400" },
    { text: "Agent ", color: "text-white" },
    { text: "} ", color: "text-zinc-400" },
    { text: "from ", color: "text-[#ff7a55]" },
    { text: "'@althario/core';\n\n", color: "text-emerald-400" },
    { text: "const ", color: "text-[#ff7a55]" },
    { text: "system = ", color: "text-zinc-400" },
    { text: "new ", color: "text-[#ff7a55]" },
    { text: "Agent", color: "text-white font-medium" },
    { text: "();\n\n", color: "text-zinc-400" },
    { text: "await ", color: "text-[#ff7a55]" },
    { text: "system.", color: "text-zinc-400" },
    { text: "initialize", color: "text-white font-medium" },
    { text: "({\n", color: "text-zinc-400" },
    { text: "    protocol: ", color: "text-zinc-400" },
    { text: "'Extreme Concurrency',\n", color: "text-emerald-400" },
    { text: "    security: ", color: "text-zinc-400" },
    { text: "true,\n", color: "text-amber-400" },
    { text: "});\n\n", color: "text-zinc-400" },
    { text: "// Activating Digital Excellence\n", color: "text-zinc-500 italic" },
    { text: "system.", color: "text-zinc-400" },
    { text: "execute", color: "text-white font-medium" },
    { text: "();", color: "text-zinc-400" }
];

const TypewriterCode = () => {
    const [charIndex, setCharIndex] = useState(0);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!inView) return;

        const totalChars = codeTokens.reduce((acc, t) => acc + t.text.length, 0);
        if (charIndex >= totalChars) return;

        const timeout = setTimeout(() => {
            setCharIndex(prev => prev + 1);
        }, 30 + Math.random() * 40);

        return () => clearTimeout(timeout);
    }, [charIndex, inView]);

    return (
        <motion.div
            onViewportEnter={() => setInView(true)}
            viewport={{ once: false, margin: "-10%" }}
            className="p-10 sm:p-12 font-mono text-[16px] leading-[2.4] text-zinc-300 whitespace-pre-wrap flex flex-col items-start h-[400px]"
        >
            <div className="inline-block break-all">
                {codeTokens.map((token, i) => {
                    // Calculate remaining capacity per token functionally without mutating outer state
                    const priorChars = codeTokens.slice(0, i).reduce((acc, t) => acc + t.text.length, 0);
                    const charsToRender = Math.max(0, Math.min(token.text.length, charIndex - priorChars));

                    if (charsToRender <= 0) return null;
                    const chars = token.text.substring(0, charsToRender);
                    return <span key={i} className={token.color}>{chars}</span>;
                })}
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-4 bg-[#fc443b] ml-1 align-middle"
                />
            </div>
        </motion.div>
    );
};

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    // Extract number and everything else as suffix
    const numValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            animate(count, numValue, { duration: 3, ease: [0.16, 1, 0.3, 1] });
        }
    }, [isInView, numValue, count]);

    return (
        <span ref={ref} className="tabular-nums">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

// 3D Angled Screen for Terminal
const FloatingComputerScreen = () => {
    return (
        <ErrorBoundary fallback={<mesh><boxGeometry /><meshBasicMaterial color="#060b1a" /></mesh>}>
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} intensity={3} color="#fc443b" />
            <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
                <group rotation={[0.05, 0.5, -0.08]} scale={1.8}>
                    {/* Glass Bezel */}
                    <mesh castShadow receiveShadow>
                        <boxGeometry args={[4.5, 3.5, 0.05]} />
                        <MeshTransmissionMaterial
                            backside
                            samples={4}
                            thickness={0.6}
                            roughness={0.05}
                            clearcoat={1}
                            color="#060b1a"
                        />
                    </mesh>

                    {/* Projected UI Screen */}
                    <Html transform position={[0, 0, 0.03]} scale={0.14}>
                        <div className="w-[500px] h-[400px] bg-[#0a0f1d]/95 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(252,68,59,0.25)] border border-white/30 relative group">
                            {/* Inner Screen Glow effect */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,68,59,0.1)_0%,transparent_100%)] pointer-events-none group-hover:bg-[radial-gradient(circle_at_center,rgba(252,68,59,0.2)_0%,transparent_100%)] transition-all duration-1000"></div>

                            <div className="px-6 py-5 border-b border-white/20 flex items-center bg-[#060b1a]">
                                <div className="w-4 h-4 rounded-full bg-red-500/90 mr-2.5 shadow-[0_0_15px_rgba(239,68,68,0.6)]"></div>
                                <div className="w-4 h-4 rounded-full bg-amber-500/90 mr-2.5 shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
                                <div className="w-4 h-4 rounded-full bg-green-500/90 mr-5 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                                <span className="text-[12px] font-mono text-zinc-400 font-bold uppercase tracking-[0.2em] flex items-center"><Zap size={14} className="mr-2.5 text-[#fc443b]" /> Althario.Agent</span>
                            </div>
                            <TypewriterCode />
                        </div>
                    </Html>
                </group>
            </Float>
            <Environment preset="city" />
        </ErrorBoundary>
    );
};

// 3D Photorealistic MacBook rendering TypewriterCode
const FloatingLaptop = () => {
    // using Suspense to fetch the standard photorealistic MacBook GLTF model
    const mac = useGLTF('https://vazxmixizvqrz.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group rotation={[0.2, Math.PI + 0.3, 0]} scale={1.1} position={[0, -1, 0]}>
                <primitive object={mac.scene} />
                <Html transform wrapperClass="laptop-screen" distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
                    <div className="w-[334px] h-[216px] bg-[#02050f] rounded-sm overflow-hidden border border-white/5 relative">
                        {/* Window Header */}
                        <div className="h-4 bg-[#0a0f1d] flex items-center px-2 border-b border-white/10">
                            <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                            <span className="ml-2 text-[6px] text-zinc-500 font-mono">althario-engineer.exe</span>
                        </div>
                        <div className="px-3 pt-1 transform scale-[0.65] origin-top-left -ml-2 -mt-1">
                            <TypewriterCode />
                        </div>
                        {/* CRT Scanline Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] mix-blend-overlay opacity-20 z-10"></div>
                    </div>
                </Html>
            </group>
        </Float>
    );
};
// Ensure GLTF is preloaded for instant render
useGLTF.preload('https://vazxmixizvqrz.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

const Home = () => {
    return (
        <div className="relative w-full min-h-screen bg-[#070c1a] font-sans">
            {/* Soft global gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#131d3b] via-[#070c1a] to-[#040814] opacity-80 z-0 pointer-events-none"></div>

            {/* Global 3D Interactive Code Background - Absolute over top half */}
            <div className="absolute inset-x-0 top-0 h-screen z-0 overflow-hidden mix-blend-screen opacity-60">
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
                    <ambientLight intensity={0.5} />
                    <React.Suspense fallback={null}>
                        <ParticleSwarm />
                        <FloatingCode />
                    </React.Suspense>
                </Canvas>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full">

                {/* 1. New Stunning Hero Slideshow */}
                <HeroSlider />

                {/* 1.25 Brand Identity: Who We Are & Impact Statistics (Consolidated) */}
                <div className="relative z-20 w-full py-24 lg:py-32 overflow-hidden">
                    {/* Space/Digital Environment Image Overlay Background */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                            className="w-full h-full bg-cover bg-center opacity-45 mix-blend-screen"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')" }}
                        ></motion.div>
                        {/* Dark Overlay to maintain theme and text readability, lightened */}
                        <div className="absolute inset-0 bg-[#060b1a]/30"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] via-transparent to-[#060b1a]/80"></div>

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

                    {/* Perspective container for entire "Who We Are" section */}
                    <div className="container mx-auto px-8 max-w-7xl relative z-10" style={{ perspective: '1500px' }}>

                        {/* Main 3D Glass Dashboard Panel: Who We Are */}
                        <motion.div
                            initial={{ opacity: 0, rotateX: 10, z: -100, y: 50 }}
                            whileInView={{ opacity: 1, rotateX: 0, z: 0, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#0a0710]/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 shadow-2xl p-10 lg:p-20 mb-20 relative overflow-hidden transform-gpu"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Inner Holographic Glows */}
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#fc443b]/10 via-[#fc443b]/5 to-transparent blur-[100px] rounded-full pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#39ff14]/5 to-transparent blur-[80px] rounded-full pointer-events-none"></div>
                            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10" style={{ transformStyle: 'preserve-3d' }}>

                                {/* 3D Hovering Text Block (Left) */}
                                <motion.div
                                    animate={{ y: [-5, 5] }}
                                    transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                    className="lg:w-1/2"
                                    style={{ transform: 'translateZ(60px)' }}
                                >
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#fc443b] to-[#ff7a55] blur-[1px]"></div>
                                        </div>
                                        <span className="text-white font-mono text-xs font-bold tracking-[0.3em] uppercase">Identity Vector</span>
                                    </div>

                                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
                                        YOUR PARTNER FOR <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff003c]">DIGITAL IMPACT</span>
                                    </h2>

                                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md mb-8 relative overflow-hidden">
                                        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#00f0ff] to-[#ff003c]"></div>
                                        <p className="text-white text-xl font-light leading-relaxed italic border-white/10">
                                            "We are a team of creators and strategists dedicated to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff003c] font-semibold">building your standout digital presence</span>."
                                        </p>
                                    </div>

                                    <p className="text-zinc-400 text-lg leading-relaxed font-normal">
                                        From high-performance web platforms to intelligent AI automation, we architect end-to-end solutions that scale your operations and solidify your market authority.
                                    </p>
                                </motion.div>

                                {/* 3D Parallax Dashboard Panels (Right) */}
                                <div className="lg:w-1/2 w-full h-[500px] relative hidden lg:flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}>
                                    <motion.div
                                        initial={{ opacity: 0, rotateY: -30, z: -300, x: 100 }}
                                        whileInView={{ opacity: 1, rotateY: -10, z: 0, x: 0 }}
                                        viewport={{ once: false, margin: "-100px" }}
                                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="relative w-full h-full flex items-center justify-center transform-gpu"
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {/* Back Right: Network Node Card */}
                                        <motion.div
                                            animate={{ y: [-10, 10], rotateX: [2, -2], rotateY: [-5, 5] }}
                                            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                            className="absolute top-5 right-0 w-64 h-48 rounded-2xl border border-white/10 bg-[#060b1a]/60 backdrop-blur-xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
                                            style={{ transform: 'translateZ(-150px)' }}
                                        >
                                            <div className={`absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#39ff14] to-transparent opacity-60`}></div>
                                            <div className="flex items-center space-x-3 opacity-80 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14]"></div>
                                                <div className="font-mono text-[10px] text-zinc-300 tracking-wider">AI INFRASTRUCTURE</div>
                                            </div>
                                            {/* Animated Nodes Chart */}
                                            <div className="relative w-full flex-1 mt-2">
                                                <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
                                                    <motion.path
                                                        initial={{ pathLength: 0 }}
                                                        whileInView={{ pathLength: 1 }}
                                                        viewport={{ once: false }}
                                                        transition={{ duration: 2, ease: "easeOut" }}
                                                        d="M10 50 L 30 20 L 60 40 L 90 10"
                                                        fill="transparent"
                                                        stroke="rgba(57, 255, 20, 0.5)"
                                                        strokeWidth="1.5"
                                                    />
                                                    {[
                                                        { cx: 10, cy: 50 }, { cx: 30, cy: 20 }, { cx: 60, cy: 40 }, { cx: 90, cy: 10 }
                                                    ].map((pt, i) => (
                                                        <motion.circle
                                                            key={i}
                                                            initial={{ scale: 0, opacity: 0 }}
                                                            whileInView={{ scale: 1, opacity: 1 }}
                                                            viewport={{ once: false }}
                                                            transition={{ duration: 0.5, delay: 0.5 + (i * 0.2) }}
                                                            cx={pt.cx} cy={pt.cy} r="3" fill="#39ff14" className="shadow-[0_0_8px_#39ff14]"
                                                        />
                                                    ))}
                                                </svg>
                                            </div>
                                        </motion.div>

                                        {/* Center Main Dashboard (Cinematic View) */}
                                        <motion.div
                                            animate={{ y: [15, -15], rotateZ: [-1, 1], rotateX: [-2, 2] }}
                                            transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                            className="relative z-10 w-[420px] h-[320px] rounded-2xl border border-white/20 bg-white/[0.04] backdrop-blur-3xl p-7 shadow-2xl flex flex-col justify-between overflow-hidden"
                                            style={{ transform: 'translateZ(50px)' }}
                                        >
                                            <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#fc443b] to-[#ff7a55] opacity-80`}></div>
                                            <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#fc443b] to-transparent opacity-20 blur-2xl rounded-full`}></div>

                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <div className="text-[10px] text-zinc-400 mb-1 tracking-widest uppercase font-bold">Network Synergy</div>
                                                    <div className="text-4xl font-black text-white tracking-tight">854.2m <span className="text-[10px] font-normal text-[#39ff14] bg-[#39ff14]/10 border border-[#39ff14]/30 px-2 py-0.5 rounded ml-2 shadow-[0_0_8px_rgba(57,255,20,0.3)]">SYNCED</span></div>
                                                </div>
                                            </div>

                                            {/* Progressive Draw Line Chart */}
                                            <div className="flex-1 w-full relative border-l border-b border-white/10 mt-2 pb-2 pl-2">
                                                <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d overflow-visible absolute bottom-0 left-0">
                                                    {/* Grid */}
                                                    <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                                    <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                                                    <motion.path
                                                        initial={{ pathLength: 0, opacity: 0 }}
                                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                                        viewport={{ once: false }}
                                                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                                                        d="M0 35 C 20 40, 30 15, 60 20 S 80 5, 100 0"
                                                        fill="transparent"
                                                        stroke="#fc443b"
                                                        strokeWidth="2.5"
                                                        className="drop-shadow-[0_0_12px_rgba(252,68,59,0.9)]"
                                                    />
                                                    <motion.path
                                                        initial={{ opacity: 0 }}
                                                        whileInView={{ opacity: 0.15 }}
                                                        viewport={{ once: false }}
                                                        transition={{ duration: 3 }}
                                                        d="M0 35 C 20 40, 30 15, 60 20 S 80 5, 100 0 L 100 40 L 0 40 Z"
                                                        fill={`url(#gradArea2)`}
                                                    />
                                                    <defs>
                                                        <linearGradient id="gradArea2" x1="0%" y1="0%" x2="0%" y2="100%">
                                                            <stop offset="0%" stopColor="#fc443b" stopOpacity="1" />
                                                            <stop offset="100%" stopColor="#fc443b" stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </motion.div>

                                        {/* Front Left Holographic Status Panel */}
                                        <motion.div
                                            animate={{ y: [-25, 25], rotateY: [5, -5] }}
                                            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }}
                                            className="absolute -left-12 bottom-0 w-60 h-44 rounded-2xl border border-white/15 bg-black/50 backdrop-blur-3xl p-5 shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-20 flex flex-col justify-end overflow-hidden"
                                            style={{ transform: 'translateZ(180px) rotateY(15deg)' }}
                                        >
                                            <div className={`absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[#00f0ff] to-transparent opacity-80`}></div>
                                            <div className="absolute top-4 left-5">
                                                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-1">DATA FLOW</div>
                                                <div className="text-2xl text-white font-black">42.8<span className="text-sm font-normal text-zinc-400 ml-1">GB/s</span></div>
                                            </div>
                                            {/* Progressive Growing Bars */}
                                            <div className="w-full flex items-end justify-between h-20 space-x-2 mt-4 opacity-80">
                                                {[30, 50, 40, 70, 95, 60, 85].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: `${h}%` }}
                                                        viewport={{ once: false }}
                                                        transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                                                        className={`w-full bg-gradient-to-t from-[#00f0ff] to-transparent rounded-t-sm shadow-[0_0_10px_rgba(0,240,255,0.4)]`}
                                                    />
                                                ))}
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating 3D Stats/Widgets Cluster */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20" style={{ transformStyle: 'preserve-3d' }}>
                            {[
                                { icon: Users, val: "101 +", label: "Satisfied Clients", accent: "from-[#00f0ff] to-[#ff003c]", delay: 0 },
                                { icon: Briefcase, val: "120 +", label: "Complete Projects", accent: "from-[#ff003c] to-[#39ff14]", delay: 1 },
                                { icon: Award, val: "5 +", label: "Years Experience", accent: "from-[#39ff14] to-[#00f0ff]", delay: 2 }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50, rotateX: 20 }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    animate={{ y: [-10, 10] }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <motion.div
                                        animate={{ rotateY: [-2, 2], rotateX: [1, -1] }}
                                        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: stat.delay }}
                                        className="relative h-[240px] bg-[#0a0710]/60 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-8 flex flex-col justify-between overflow-hidden group hover:border-white/20 transition-all duration-500 transform-gpu"
                                    >
                                        {/* Glowing Edge Header */}
                                        <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${stat.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                        <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${stat.accent} blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 rounded-full`}></div>

                                        <div className="flex justify-between items-start">
                                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                                                <stat.icon size={24} className="text-white" />
                                            </div>
                                            <div className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase border border-white/10 px-3 py-1.5 rounded-full bg-black/40">Verified</div>
                                        </div>

                                        <div style={{ transform: 'translateZ(20px)' }}>
                                            <h3 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400 tracking-tighter mb-2">
                                                <AnimatedNumber value={stat.val} />
                                            </h3>
                                            <div className="flex items-center space-x-3 mb-1">
                                                <div className={`h-[2px] w-4 bg-gradient-to-r ${stat.accent}`}></div>
                                                <p className="text-white text-sm font-bold tracking-[0.2em] uppercase">{stat.label}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 1.5 Quick Value Proposition Banner (sleek 3-column block) */}
                <div className="relative z-20 w-full py-16 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518433278981-2244031d83ce?q=80&w=2070')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060b1a] via-[#060b1a]/70 to-[#060b1a]"></div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
                            {[
                                {
                                    icon: Zap,
                                    title: "AI Systems That Deliver Results",
                                    desc: "We focus on solving business bottlenecks with autonomous software agents.",
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Unmatched Reliability & Support",
                                    desc: "Enterprise-grade security and 99.9% uptime for your critical systems.",
                                },
                                {
                                    icon: Layers,
                                    title: "Scalable Infrastructure by Design",
                                    desc: "Custom platforms engineered to grow with your business without technical debt.",
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-10 lg:p-14 group hover:bg-white/[0.01] transition-colors duration-500"
                                >
                                    <div className="flex items-start space-x-6">
                                        <div className="mt-1 flex-shrink-0">
                                            <div className="size-12 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#fc443b]/10 group-hover:border-[#fc443b]/30 transition-all duration-500">
                                                <item.icon size={22} className="text-zinc-400 group-hover:text-[#fc443b] transition-colors duration-500" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium text-lg leading-snug mb-3 group-hover:text-[#fc443b] transition-colors duration-500">{item.title}</h3>
                                            <p className="text-white/60 text-[14px] leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>





                {/* Outcomes Section: What You Get (NEW) */}
                <div className="relative z-20 w-full py-24 lg:py-32 overflow-hidden">
                    {/* Background Themed Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-110 pointer-events-none opacity-20 mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060b1a]/95 via-[#060b1a]/60 to-[#060b1a]/95"></div>

                    <div className="container mx-auto px-8 max-w-7xl relative z-10">
                        <div className="text-center mb-28">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 uppercase">ENGINEERING <span className="text-[#fc443b]">IMPACT</span></h2>
                                <p className="text-white text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed opacity-95 tracking-widest uppercase">Measurable transformations. Exponential growth.</p>
                            </motion.div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {[
                                { icon: Activity, title: "Peak Efficiency", desc: "Our AI systems optimize legacy workflows to reduce operational friction by 40%." },
                                { icon: BarChart3, title: "Direct ROI", desc: "Predictable cost reduction through intelligent automation of high-frequency tasks." },
                                { icon: Shield, title: "Hardened Security", desc: "Enterprise-grade protection systems specifically designed for proprietary assets." },
                                { icon: Globe, title: "Infinite Scale", desc: "Future-proof architectures built to handle exponential global growth without latency." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-12 rounded-[3.5rem] bg-white/[0.04] backdrop-blur-3xl border border-white/10 hover:border-[#fc443b]/60 transition-all duration-700 shadow-2xl relative group overflow-hidden"
                                >
                                    <div className="size-20 rounded-3xl bg-[#fc443b]/10 border border-[#fc443b]/20 flex items-center justify-center mb-10 group-hover:bg-[#fc443b]/20 group-hover:scale-110 transition-all duration-700">
                                        <item.icon size={32} className="text-[#fc443b]" />
                                    </div>
                                    <h3 className="text-white font-bold text-3xl mb-6 tracking-tighter group-hover:text-[#fc443b] transition-colors">{item.title}</h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed font-normal opacity-90 group-hover:opacity-100">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Features Section (Restored Laptop Split Layout) */}
                <div className="relative w-full z-20 bg-[#060b1a] pt-16 pb-24 lg:py-0 overflow-hidden">
                    {/* Immersive Background for Features */}
                    <div
                        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-15 scale-105 mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060b1a]/90 via-[#060b1a]/70 to-[#060b1a]/90"></div>
                    {/* Sticky Left: Laptop & Typing Code Background (Desktop Only) */}
                    <div className="hidden lg:block absolute top-[100px] left-0 w-[45%] h-full z-0 pointer-events-none">
                        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden border-r border-white/5 bg-[#040814]">
                            {/* High-End immersive 3D Screen Canvas */}
                            <div className="absolute inset-0 w-full h-full pointer-events-auto">
                                <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
                                    <React.Suspense fallback={null}>
                                        <FloatingComputerScreen />
                                    </React.Suspense>
                                </Canvas>
                            </div>
                            {/* Deep Shadow on bottom */}
                            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#040814] to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    <div className="container mx-auto px-8 max-w-7xl relative z-10 flex justify-end">
                        <div className="w-full lg:w-[55%] lg:py-16">

                            <div className="mb-16">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6"
                                >
                                    CORE <span className="text-[#fc443b]">CAPABILITIES</span>
                                </motion.h2>
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    whileInView={{ opacity: 1, width: "100px" }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.8 }}
                                    className="h-1 bg-[#fc443b]"
                                ></motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                                {/* Decorative elements */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#fc443b]/5 blur-[120px] pointer-events-none rounded-full"></div>

                                {[
                                    {
                                        icon: Cpu,
                                        title: 'AI Automation',
                                        desc: 'Deploy intelligent agents to automate complex multi-step workflows with extreme precision and speed.',
                                        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000',
                                        customClass: 'md:col-span-2 md:aspect-[2/1] min-h-[300px]' // Large top card
                                    },
                                    {
                                        icon: Code2,
                                        title: 'Software Engineering',
                                        desc: 'Custom enterprise-grade web applications built with robust modern architectures.',
                                        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000',
                                        customClass: 'min-h-[320px] md:mt-6' // Offset slightly
                                    },
                                    {
                                        icon: Globe,
                                        title: 'Global Digital Reach',
                                        desc: 'Scale your operations worldwide with infrastructure designed for extreme concurrency.',
                                        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000',
                                        customClass: 'min-h-[320px]'
                                    }
                                ].map((feat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: false, margin: "-50px" }}
                                        transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                        className={`relative z-10 rounded-[2rem] overflow-hidden group border border-white/10 hover:border-[#fc443b]/50 transition-all duration-700 shadow-2xl bg-[#0a0f1d] flex flex-col ${feat.customClass}`}
                                    >
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-30 group-hover:opacity-40 mix-blend-luminosity"
                                            style={{ backgroundImage: `url(${feat.image})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] via-[#060b1a]/80 to-transparent"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#fc443b]/0 to-[#fc443b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                                            <div className="absolute top-8 right-8 size-12 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#fc443b]/20 group-hover:border-[#fc443b]/40 transition-all duration-700 group-hover:scale-110">
                                                <feat.icon size={20} className="text-white group-hover:text-[#fc443b] transition-colors" strokeWidth={2} />
                                            </div>

                                            <div className="mt-auto pt-16">
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[#fc443b] transition-colors duration-500">{feat.title}</h3>
                                                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed group-hover:text-white transition-colors duration-500">{feat.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industries Section: Who exactly is this for? (NEW) */}
                <div className="relative z-20 w-full py-24 lg:py-32 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.10] scale-105 mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2071')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060b1a]/95 via-transparent to-[#060b1a]/95"></div>
                    <div className="container mx-auto px-8 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1 }}
                                className="lg:w-1/3 text-center lg:text-left"
                            >
                                <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-10 leading-tight uppercase">WHO WE <br /> <span className="text-[#fc443b]">EMPOWER</span></h2>
                                <p className="text-white/80 text-xl font-light leading-relaxed mb-12">Elite solutions for industries where intelligence and scale are mandatory.</p>
                                <div className="h-1.5 w-24 bg-[#fc443b] mx-auto lg:mx-0"></div>
                            </motion.div>
                            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Finance & Fintech", desc: "Automated risk assessment and intelligent customer analytics.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070" },
                                    { title: "Logistics & Supply Chain", desc: "Real-time AI tracking and predictive software for multi-node operations.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070" },
                                    { title: "Healthcare & MedTech", desc: "Data integrity and custom platforms built for scale and patient experience.", image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2070" },
                                    { title: "Enterprise Retail", desc: "High-concurrency systems handling millions of transactions with zero friction.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" }
                                ].map((ind, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.8, delay: i * 0.1 }}
                                        className="relative h-[300px] rounded-[3.5rem] overflow-hidden group border border-white/10"
                                    >
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                            style={{ backgroundImage: `url(${ind.image})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] to-transparent"></div>
                                        <div className="relative h-full p-12 flex flex-col justify-end">
                                            <h4 className="text-white font-bold text-2xl mb-4 group-hover:text-[#fc443b] transition-colors">{ind.title}</h4>
                                            <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 uppercase tracking-widest">{ind.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Section: How We Work (NEW) */}
                <div className="relative z-20 w-full py-24 lg:py-32 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.15] scale-105 mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060b1a]/95 via-[#060b1a]/70 to-[#060b1a]/95"></div>

                    <div className="container mx-auto px-8 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1 }}
                            >
                                <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-12 leading-tight uppercase">OUR <span className="text-[#fc443b]">ELITE</span><br />WORKFLOW</h2>
                                <div className="space-y-16">
                                    {[
                                        { step: "01", title: "Strategy & Architecture", desc: "We deep-dive into your core infrastructure to build a high-performance roadmap." },
                                        { step: "02", title: "Engineering & Launch", desc: "Our squad builds and deploys your custom systems with zero downtime." },
                                        { step: "03", title: "Rigorous Optimization", desc: "Every line of code is stress-tested for extreme scalability and speed." },
                                        { step: "04", title: "Continuous Evolution", desc: "Ongoing partnership to ensure your tech stack stays ahead of the industry." }
                                    ].map((proc, i) => (
                                        <div key={i} className="flex items-start space-x-12 group">
                                            <span className="text-6xl text-[#fc443b] font-mono font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-500">{proc.step}</span>
                                            <div>
                                                <h4 className="text-white font-bold text-4xl mb-4 tracking-tighter group-hover:text-[#fc443b] transition-colors">{proc.title}</h4>
                                                <p className="text-white/70 text-xl font-light leading-relaxed">{proc.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="relative px-4">
                                <div className="aspect-square rounded-[5rem] bg-gradient-to-br from-[#fc443b]/30 to-transparent p-px shadow-[0_0_100px_rgba(252,68,59,0.1)]">
                                    <div className="w-full h-full rounded-[5rem] bg-[#0a1024]/95 backdrop-blur-3xl overflow-hidden relative p-16 flex flex-col justify-center items-center group">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,68,59,0.2)_0%,transparent_70%)]"></div>
                                        {/* 3D Luxury Glass Core injected into the card */}
                                        <div className="w-full h-64 mb-10 relative flex justify-center items-center">
                                            {/* Ambient Glow behind the 3D canvas */}
                                            <div className="absolute inset-0 bg-[#fc443b]/10 blur-[80px] rounded-full pointer-events-none scale-150"></div>

                                            <div className="w-full h-full relative z-10 cursor-pointer">
                                                <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
                                                    <React.Suspense fallback={null}>
                                                        <LuxuryDataCore />
                                                    </React.Suspense>
                                                </Canvas>
                                            </div>
                                        </div>

                                        <h3 className="text-white text-5xl font-black mb-10 tracking-tighter text-center leading-tight uppercase">ELITE CODE<br />ON DEMAND</h3>
                                        <Link to="/contacts" className="flex items-center space-x-6 text-black font-black tracking-[0.4em] uppercase text-sm bg-white px-14 py-7 rounded-full hover:bg-[#fc443b] hover:text-white hover:shadow-[0_0_60px_rgba(252,68,59,0.5)] transition-all duration-700">
                                            <span>TALK TO EXPERTS</span>
                                            <ArrowRight size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Success Stories: Trust & Results (NEW) */}
                <div className="relative z-20 w-full py-24 lg:py-32 overflow-hidden bg-[#060b1a]">
                    <div
                        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-15 mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060b1a]/95 via-[#060b1a]/60 to-[#060b1a]/95"></div>
                    <div className="container mx-auto px-8 max-w-7xl relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                            >
                                <div className="flex items-center space-x-4 text-[#fc443b] mb-6 uppercase tracking-[0.4em] font-black text-xs">
                                    <CheckCircle2 size={16} />
                                    <span>CLIENT SUCCESS REPORTS</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[1]">LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc443b] to-[#ff7a55]">CASE STUDIES</span></h2>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                            >
                                <Link to="/portfolio-grid" className="px-8 py-4 bg-white/[0.03] backdrop-blur-md border border-white/10 text-white text-xs uppercase tracking-widest font-bold hover:bg-[#fc443b] hover:border-transparent rounded-full hover:shadow-[0_10px_40px_rgba(252,68,59,0.3)] transition-all duration-500 whitespace-nowrap inline-flex items-center space-x-3 group">
                                    <span>View All Case Studies</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                                </Link>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Shipping & Logistics Global Scale",
                                    cat: "Custom Software Architecture",
                                    desc: "Althario re-architected how we handle $50M+ in annual logistics with zero friction. Massive efficiency surge across multi-node operations.",
                                    metrics: [
                                        { val: "65%", label: "Efficiency Surge" },
                                        { val: "0.0%", label: "System Failure" }
                                    ],
                                    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                                },
                                {
                                    title: "Healthcare Management System",
                                    cat: "Enterprise Web Development",
                                    desc: "Complete digital transformation for modern hospitals. Perfect data integrity, ultra-low latency, and vastly improved patient processing times.",
                                    metrics: [
                                        { val: "10x", label: "Speed Increase" },
                                        { val: "100%", label: "Data Integrity" }
                                    ],
                                    image: "https://images.unsplash.com/photo-1516549655669-bfa0993540d5?q=80&w=2072"
                                }
                            ].map((study, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                                    className="group relative rounded-[3rem] overflow-hidden bg-[#0a0f1d] border border-white/10 hover:border-[#fc443b]/50 hover:shadow-2xl transition-all duration-700 min-h-[500px] flex flex-col"
                                >
                                    {/* Immersive Background */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-30 group-hover:opacity-40 mix-blend-luminosity"
                                        style={{ backgroundImage: `url(${study.image})` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b1a] via-[#060b1a]/90 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#fc443b]/0 to-[#fc443b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                    {/* Content */}
                                    <div className="relative z-10 p-12 h-full flex flex-col justify-between flex-grow">
                                        <div className="flex justify-between items-start">
                                            <span className="px-5 py-2 rounded-full bg-white/[0.05] border border-white/10 text-[#fc443b] text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
                                                {study.cat}
                                            </span>
                                            <div className="size-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md">
                                                <ArrowRight className="text-white transform -rotate-45" size={20} />
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-24">
                                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter leading-tight group-hover:text-[#fc443b] transition-colors duration-500">
                                                {study.title}
                                            </h3>
                                            <p className="text-zinc-300 font-light leading-relaxed mb-10 group-hover:text-white transition-colors duration-500">
                                                "{study.desc}"
                                            </p>

                                            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                                                {study.metrics.map((metric, i) => (
                                                    <div key={i}>
                                                        <p className="text-4xl font-black text-white mb-2 leading-none">{metric.val}</p>
                                                        <p className="text-[#fc443b] text-[10px] uppercase tracking-[0.3em] font-bold">{metric.label}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Investment Section: Addressing the "Pricing" question professionally (NEW) */}
                <div className="relative z-20 w-full py-24 lg:py-32 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.10] scale-105 mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010309]/95 via-transparent to-[#060b1a]/95"></div>

                    <div className="container mx-auto px-8 max-w-7xl relative z-10">
                        <div className="text-center mb-32">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-10">INVESTMENT <span className="text-[#fc443b]">MODELS</span></h2>
                                <p className="text-white/80 text-2xl font-light max-w-3xl mx-auto leading-relaxed uppercase tracking-[0.3em]">Precision engineering. Transparent architecture.</p>
                            </motion.div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "Custom Projects", type: "Fixed-Investment", desc: "For clearly defined scopes. We architecturalize, build, and deploy your solution under a fixed milestone structure.", icon: Layers },
                                { title: "Elite Engineering", type: "Monthly Partnership", desc: "Your own Althario squad. Scaling your internal technical capacity with elite AI and software engineers.", icon: Users },
                                { title: "Platform Support", type: "Ongoing Evolution", desc: "Long-term infrastructure maintenance, security monitoring, and continuous system optimization.", icon: ShieldCheck }
                            ].map((plan, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.8, delay: i * 0.15 }}
                                    className="group p-16 rounded-[4rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 hover:border-[#fc443b] transition-all duration-700 relative overflow-hidden flex flex-col items-center text-center shadow-2xl"
                                >
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#fc443b]/10 blur-[100px] group-hover:bg-[#fc443b]/20 transition-colors"></div>
                                    <div className="size-24 rounded-[2.5rem] bg-white/[0.05] border border-white/10 flex items-center justify-center mb-14 group-hover:scale-110 group-hover:bg-[#fc443b]/20 transition-all duration-700 shadow-xl">
                                        <plan.icon size={42} className="text-white group-hover:text-white" />
                                    </div>
                                    <h4 className="text-[#fc443b] font-mono text-xs uppercase tracking-[0.6em] mb-8 font-black">{plan.type}</h4>
                                    <h3 className="text-white font-black text-4xl mb-10 tracking-tighter leading-tight">{plan.title}</h3>
                                    <p className="text-white/70 text-xl leading-relaxed mb-20 font-light">{plan.desc}</p>
                                    <Link to="/contacts" className="mt-auto w-full inline-flex items-center justify-center space-x-6 text-white text-xs uppercase tracking-[0.4em] font-black border-2 border-[#fc443b]/40 py-6 rounded-full hover:bg-[#fc443b] hover:border-transparent transition-all duration-700">
                                        <span>GET PROPOSAL</span>
                                        <ChevronRight size={20} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Re-aligned "Turning Your Vision" & Logo Presentation Matrix */}
                <div className="w-full relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#060b1a] to-[#010309] z-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,68,59,0.03)_0%,transparent_70%)] pointer-events-none"></div>

                    <div className="container mx-auto px-8 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                            {/* Left Side: Modernized Vision Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col relative z-20"
                            >
                                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#fc443b]/10 to-transparent blur-[120px] -translate-y-1/2 pointer-events-none"></div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md w-max"
                                >
                                    <span className="flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#fc443b] to-[#ff7a55] animate-pulse shadow-[0_0_10px_rgba(252,68,59,0.8)]"></span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">Digital Reality</span>
                                </motion.div>

                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
                                    Ready to Engineer Your <br />
                                    <span className="relative inline-block mt-2">
                                        <span className="absolute -inset-1 bg-gradient-to-r from-[#fc443b]/20 to-[#ff7a55]/20 blur-2xl rounded-full"></span>
                                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a55] via-[#fc443b] to-[#bd2c25] drop-shadow-sm">
                                            Digital Future?
                                        </span>
                                    </span>
                                </h2>

                                <p className="text-lg text-zinc-400 font-light leading-[1.8] mb-12">
                                    Stop dealing with fragmented systems. Partner with Althario to build the AI-driven foundation your business needs to outperform in the next decade.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/contacts" className="px-10 py-5 bg-[#fc443b] text-white text-[13px] uppercase tracking-widest font-bold border border-transparent hover:bg-[#ff5b52] rounded-full hover:shadow-[0_10px_40px_rgba(252,68,59,0.3)] transition-all duration-500 flex items-center justify-center space-x-3 group">
                                        <span>Book Free Consultation</span>
                                        <ChevronRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                                    </Link>
                                    <Link to="/portfolio-grid" className="px-10 py-5 bg-white/5 backdrop-blur-md text-white text-[13px] uppercase tracking-widest font-bold border border-white/10 hover:border-[#fc443b]/40 rounded-full hover:bg-white/[0.08] transition-all duration-500 flex items-center justify-center">
                                        View Case Studies
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Right Side: Realigned Glass Logo Matrix Presentation */}
                            <motion.div
                                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10 flex justify-center lg:justify-end items-center"
                            >
                                <div className="bg-white/95 backdrop-blur-3xl px-12 py-16 sm:px-16 sm:py-20 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/20 relative group hover:scale-[1.02] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_40px_120px_rgba(252,68,59,0.2)] flex justify-center items-center w-full max-w-lg hover:border-[#fc443b]/30">

                                    {/* Inner elegant glow matching the logo's red */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,68,59,0.08)_0%,transparent_80%)] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                                    <img
                                        src="/images/logo_std.png"
                                        alt="Althario Brand Symbol"
                                        className="w-full object-contain relative z-10"
                                    />
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
