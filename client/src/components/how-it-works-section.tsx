import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle, Users, Zap, Target, ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import Scene3D from "./3d-scene";

export default function HowItWorksSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Spring physics for smooth spotlight following
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const steps = [
    {
      step: "01",
      title: "Connect & Discover",
      description: "We analyze your current infrastructure and identify optimization opportunities",
      icon: <Users className="w-8 h-8" />,
      image: "https://cyberspaceinc.com/wp-content/uploads/2023/04/verisk.png",
      primaryColor: "rgb(126, 34, 206)", // purple-800
      secondaryColor: "rgb(147, 51, 234)" // purple-600
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Create custom solutions tailored to your business needs and goals",
      icon: <Target className="w-8 h-8" />,
      image: "https://cyberspaceinc.com/wp-content/uploads/2023/02/johnson.jpg",
      primaryColor: "rgb(79, 70, 229)", // indigo-600
      secondaryColor: "rgb(67, 56, 202)" // indigo-700
    },
    {
      step: "03",
      title: "Implement & Deploy",
      description: "Execute the solution with minimal disruption to your operations",
      icon: <Zap className="w-8 h-8" />,
      image: "https://cyberspaceinc.com/wp-content/uploads/2023/02/idexx.jpg",
      primaryColor: "rgb(37, 99, 235)", // blue-600
      secondaryColor: "rgb(29, 78, 216)" // blue-700
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuous monitoring and optimization to ensure peak performance",
      icon: <CheckCircle className="w-8 h-8" />,
      image: "https://cyberspaceinc.com/wp-content/uploads/2023/02/newell.jpg",
      primaryColor: "rgb(16, 185, 129)", // emerald-500
      secondaryColor: "rgb(5, 150, 105)" // emerald-600
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-28 bg-black relative overflow-hidden dark-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f17] via-[#0c0621] to-[#0f0f17] opacity-90"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "linear-gradient(rgba(140, 90, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 90, 255, 0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}></div>
      </div>
      
      {/* Spotlight effect */}
      <motion.div 
        className="absolute pointer-events-none"
        style={{ 
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(140, 90, 255, 0.15) 0%, rgba(37, 99, 235, 0.08) 30%, transparent 70%)',
          x: useTransform(springX, (x) => x - 300),
          y: useTransform(springY, (y) => y - 300),
          opacity: 0.7,
        }}
      />
      
      {/* Floating particle elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? 'rgba(140, 90, 255, 0.5)' : 'rgba(37, 99, 235, 0.5)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + Math.random() * 10,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">How it </span>
            <span 
              className="font-black"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline"
              }}
            >
              works
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transform your digital infrastructure with our proven 4-step methodology
          </motion.p>
          
          {/* 3D Scene Integration */}
          <motion.div 
            className="my-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Scene3D />
          </motion.div>
        </motion.div>

        {/* Steps Card Layout - 3D Perspective Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 max-w-6xl mx-auto perspective-1000">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              step={step} 
              index={index} 
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="px-12 py-7 rounded-xl font-semibold text-lg transition-all duration-300 text-white border-0 relative overflow-hidden bg-transparent group"
            >
              {/* Button gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Button glow effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl"></span>
              </span>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center">
                Start Your Transformation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Step Card Component with 3D hover effect
function StepCard({ step, index }: { 
  step: { 
    step: string; 
    title: string; 
    description: string; 
    icon: React.ReactNode;
    primaryColor: string;
    secondaryColor: string;
  }; 
  index: number 
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation (limited to +/- 10 degrees)
    const rotX = mouseY / (rect.height / 2) * -8;
    const rotY = mouseX / (rect.width / 2) * 8;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="relative preserve-3d gpu-accelerated"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: hover ? 'none' : 'transform 0.5s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-[#13111c]/60 backdrop-blur-lg rounded-3xl p-8 h-full border border-purple-800/20 relative overflow-hidden">
        {/* Glow effect when hovered */}
        <motion.div 
          className="absolute inset-0 opacity-0 z-0 pointer-events-none"
          animate={{ opacity: hover ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ 
            background: `radial-gradient(circle at center, ${step.primaryColor} 0%, transparent 70%)`,
            filter: 'blur(20px)'
          }}
        />
        
        {/* Border glow */}
        <motion.div 
          className="absolute inset-0 rounded-3xl opacity-0 z-0 pointer-events-none"
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ 
            boxShadow: `0 0 40px 5px ${step.primaryColor}50`,
          }}
        />
        
        {/* Step Number */}
        <div className="flex items-center mb-6 relative z-10">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4 preserve-3d"
            style={{ 
              background: `linear-gradient(135deg, ${step.primaryColor} 0%, ${step.secondaryColor} 100%)`,
              transform: 'translateZ(20px)',
              boxShadow: hover ? `0 10px 25px -5px ${step.primaryColor}80` : 'none',
              transition: 'box-shadow 0.3s ease, transform 0.2s ease'
            }}
          >
            {step.step}
          </div>
          <div 
            className="text-white/80 preserve-3d"
            style={{ transform: 'translateZ(15px)' }}
          >
            {step.icon}
          </div>
        </div>

        {/* Content */}
        <h3 
          className="text-2xl font-bold text-white mb-4 preserve-3d"
          style={{ transform: 'translateZ(15px)' }}
        >
          {step.title}
        </h3>
        <p 
          className="text-gray-400 text-lg leading-relaxed mb-6 preserve-3d"
          style={{ transform: 'translateZ(10px)' }}
        >
          {step.description}
        </p>

        {/* Visual Element */}
        <div 
          className="relative h-48 rounded-2xl overflow-hidden preserve-3d bg-[#0c0621]/40"
          style={{ transform: 'translateZ(5px)' }}
        >
          {/* Background glow */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                `radial-gradient(circle at 30% 30%, ${step.primaryColor}30 0%, transparent 70%)`,
                `radial-gradient(circle at 70% 70%, ${step.primaryColor}30 0%, transparent 70%)`,
                `radial-gradient(circle at 30% 30%, ${step.primaryColor}30 0%, transparent 70%)`
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Animated particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`card-particle-${index}-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? step.primaryColor : step.secondaryColor,
                left: `${10 + (i * 15)}%`,
                top: `${20 + (i * 10)}%`,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + Math.random() * 3,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Center icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 10 }}
          >
            <motion.div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white"
              style={{ 
                background: `linear-gradient(135deg, ${step.primaryColor} 0%, ${step.secondaryColor} 100%)`
              }}
              animate={{
                boxShadow: [
                  `0 0 20px 0px ${step.primaryColor}40`,
                  `0 0 30px 5px ${step.primaryColor}60`,
                  `0 0 20px 0px ${step.primaryColor}40`
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              {step.icon}
            </motion.div>
          </motion.div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}></div>
        </div>
      </div>
    </motion.div>
  );
}
