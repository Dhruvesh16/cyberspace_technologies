import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation, Link } from "wouter";
import { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const [location] = useLocation();
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Handle mouse move for spotlight effect
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServicesClick = () => {
    if (location === "/") {
      scrollToServices();
    } else {
      window.location.href = "/services";
    }
  };

  const handleContactClick = () => {
    if (location === "/") {
      scrollToContact();
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <motion.section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center dark-section"
      style={{
        background: "linear-gradient(135deg, #0C0922 0%, #1E1250 50%, #2D2076 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient background */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #0C0922 0%, #1E1250 50%, #2D2076 100%)",
              "linear-gradient(135deg, #0C0922 0%, #2D2076 50%, #1E1250 100%)",
              "linear-gradient(135deg, #0C0922 0%, #1E1250 50%, #2D2076 100%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Central spotlight gradient with pulse effect */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "120%",
            height: "120%",
            background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 30%, rgba(30, 18, 80, 0) 70%)",
            filter: "blur(20px)"
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Mouse-following spotlight */}
        {isHovering && (
          <motion.div 
            className="absolute pointer-events-none"
            animate={{ opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              left: mousePosition.x,
              top: mousePosition.y,
              width: 600,
              height: 600,
              borderRadius: "50%",
              background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)",
              transform: "translate(-50%, -50%)",
              filter: "blur(10px)"
            }}
          />
        )}
        
        {/* Secondary glow effect */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "80%",
            height: "80%",
            background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 60%)",
            filter: "blur(40px)"
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated grid overlay */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, Math.random() * 0.5 + 0.3, 0],
              scale: [0, Math.random() * 1 + 0.5, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        <motion.div 
          className="mb-12" 
          data-testid="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          style={{ y: textY, opacity }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4">
            <motion.span 
              className="text-white block mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Own the 
            </motion.span>
            <motion.span 
              className="font-black tracking-tight block mb-2"
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.2)"
              }}
            >
              best
            </motion.span>
            <motion.span 
              className="font-black tracking-tight block mb-2"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.2)"
              }}
            >
              CyberSpace
            </motion.span>
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              of your life
            </motion.span>
          </h1>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          {location === "/" ? (
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="perspective-1000"
            >
              <Button 
                size="lg" 
                className="px-8 py-6 rounded-2xl font-semibold text-lg group transition-all duration-300 text-white border-2 border-white/20 transform bg-white/5 hover:bg-white/10 relative overflow-hidden backdrop-blur-sm"
                onClick={handleServicesClick}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Book a demo</span>
                <motion.div className="relative z-10">
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </Button>
            </motion.div>
          ) : (
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="perspective-1000"
              >
                <Button 
                  size="lg" 
                  className="px-8 py-6 rounded-2xl font-semibold text-lg group transition-all duration-300 text-white border-2 border-white/20 transform bg-white/5 hover:bg-white/10 relative overflow-hidden backdrop-blur-sm"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Book a demo</span>
                  <motion.div className="relative z-10">
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          )}
          
          {location === "/" ? (
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="perspective-1000"
            >
              <Button 
                size="lg" 
                className="px-8 py-6 rounded-2xl font-semibold text-lg group transition-all duration-300 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)"
                }}
                onClick={handleContactClick}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Try now</span>
                <motion.div className="relative z-10">
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </Button>
            </motion.div>
          ) : (
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="perspective-1000"
              >
                <Button 
                  size="lg" 
                  className="px-8 py-6 rounded-2xl font-semibold text-lg group transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-100"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Try now</span>
                  <motion.div className="relative z-10">
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          )}
        </motion.div>

        {location === "/" && (
          <motion.div 
            className="animate-bounce opacity-60 cursor-pointer group"
            onClick={handleServicesClick}
            whileHover={{ scale: 1.2, opacity: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          >
            <div className="flex flex-col items-center">
              <ArrowDown className="h-6 w-6 text-white/60 group-hover:text-white transition-colors duration-300" />
              <span className="text-xs text-white/40 mt-1 group-hover:text-white/60 transition-colors duration-300">
                Explore below
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
