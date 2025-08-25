import { ArrowDown, Sparkles, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";

export default function HeroSection() {
  const [location] = useLocation();

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
      className="relative pt-4 pb-2 overflow-hidden bg-gradient-to-br from-white via-cyber-blue/5 to-cyber-purple/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Professional Cybersecurity Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Digital Security Grid */}
        <motion.div 
          className="absolute inset-0 opacity-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="securityGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="0.5"/>
                <circle cx="25" cy="25" r="1" fill="rgba(59, 130, 246, 0.1)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#securityGrid)" />
          </svg>
        </motion.div>

        {/* Encrypted Data Streams */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                <stop offset="30%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="70%" stopColor="rgba(16, 185, 129, 0.4)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Horizontal encrypted data streams */}
            {[120, 200, 280, 360, 440, 520, 600].map((y, index) => (
              <motion.g key={`stream-${index}`}>
                <motion.line 
                  x1="0" y1={y} x2="1200" y2={y}
                  stroke="url(#dataGradient)"
                  strokeWidth="1"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 3, delay: index * 0.3 }}
                />
                {/* Encrypted data packets */}
                <motion.rect
                  x="0" y={y - 2} width="8" height="4" rx="2"
                  fill="rgba(59, 130, 246, 0.8)"
                  animate={{
                    x: [0, 1200],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "linear"
                  }}
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>

        {/* Security Shield Pattern */}
        <motion.div 
          className="absolute top-1/4 right-1/6 opacity-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <svg width="300" height="300" viewBox="0 0 300 300">
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(16, 185, 129, 0.2)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" />
              </linearGradient>
            </defs>
            
            {/* Shield outline */}
            <motion.path 
              d="M150 20 C190 20 220 40 220 80 C220 140 190 200 150 280 C110 200 80 140 80 80 C80 40 110 20 150 20 Z"
              fill="url(#shieldGradient)"
              stroke="rgba(59, 130, 246, 0.4)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            
            {/* Lock symbol inside shield */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <rect x="130" y="130" width="40" height="30" rx="4" fill="rgba(59, 130, 246, 0.6)"/>
              <path d="M140 130 C140 120 145 115 150 115 C155 115 160 120 160 130" 
                    fill="none" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3"/>
              <circle cx="150" cy="145" r="3" fill="rgba(255, 255, 255, 0.8)"/>
            </motion.g>
            
            {/* Security scan lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.line
                key={`scan-${i}`}
                x1="90" y1={60 + i * 40} x2="210" y2={60 + i * 40}
                stroke="rgba(16, 185, 129, 0.3)"
                strokeWidth="1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2 + 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Digital Fingerprint Pattern */}
        <motion.div 
          className="absolute top-1/3 left-1/12 opacity-8"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.08, rotate: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <defs>
              <radialGradient id="fingerprintGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
              </radialGradient>
            </defs>
            
            {/* Fingerprint ridges */}
            {[30, 45, 60, 75, 90, 105].map((radius, index) => (
              <motion.circle
                key={`ridge-${index}`}
                cx="100" cy="100" r={radius}
                fill="none"
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="1"
                strokeDasharray="3 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 2 + index * 0.2 }}
              />
            ))}
            
            {/* Center dot */}
            <motion.circle
              cx="100" cy="100" r="3"
              fill="rgba(99, 102, 241, 0.6)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 1, delay: 3 }}
            />
          </svg>
        </motion.div>

        {/* Network Security Nodes */}
        {[
          { x: 15, y: 20, type: 'firewall' },
          { x: 85, y: 15, type: 'endpoint' },
          { x: 25, y: 65, type: 'server' },
          { x: 75, y: 70, type: 'cloud' },
          { x: 10, y: 45, type: 'router' },
          { x: 90, y: 40, type: 'database' }
        ].map((node, index) => (
          <motion.div
            key={`security-node-${index}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              backgroundColor: node.type === 'firewall' ? 'rgba(239, 68, 68, 0.6)' :
                              node.type === 'endpoint' ? 'rgba(59, 130, 246, 0.6)' :
                              node.type === 'server' ? 'rgba(16, 185, 129, 0.6)' :
                              node.type === 'cloud' ? 'rgba(99, 102, 241, 0.6)' :
                              node.type === 'router' ? 'rgba(245, 158, 11, 0.6)' :
                              'rgba(139, 92, 246, 0.6)',
              boxShadow: `0 0 10px ${
                node.type === 'firewall' ? 'rgba(239, 68, 68, 0.4)' :
                node.type === 'endpoint' ? 'rgba(59, 130, 246, 0.4)' :
                node.type === 'server' ? 'rgba(16, 185, 129, 0.4)' :
                node.type === 'cloud' ? 'rgba(99, 102, 241, 0.4)' :
                node.type === 'router' ? 'rgba(245, 158, 11, 0.4)' :
                'rgba(139, 92, 246, 0.4)'
              }`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.3, 1],
              opacity: [0, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              delay: 2 + index * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 4
            }}
          />
        ))}

        {/* Binary Code Rain Effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-xs font-mono text-emerald-500 opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `-10%`,
              fontFamily: 'monospace'
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 0.3, 0.3, 0]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 15 }, () => 
              Math.random() > 0.5 ? '1' : '0'
            ).join('')}
          </motion.div>
        ))}

        {/* Floating Security Icons */}
        <motion.div 
          className="absolute top-1/5 left-1/5 w-6 h-6 opacity-15"
          animate={{
            y: [-8, 8, -8],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10V11.5C15.4 11.5 16 12.1 16 12.7V16.3C16 16.9 15.4 17.5 14.8 17.5H9.2C8.6 17.5 8 16.9 8 16.3V12.7C8 12.1 8.6 11.5 9.2 11.5V10C9.2 8.6 10.6 7 12 7ZM12 8.2C11.2 8.2 10.4 8.7 10.4 10V11.5H13.6V10C13.6 8.7 12.8 8.2 12 8.2Z"/>
          </svg>
        </motion.div>

        <motion.div 
          className="absolute top-3/5 left-1/12 w-5 h-5 opacity-12"
          animate={{
            y: [10, -10, 10],
            x: [3, -3, 3],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-indigo-500">
            <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-2">
        <div>
          {/* Enhanced icon animation with better styling */}
          <motion.div 
            className="flex justify-center mb-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-cyber-blue/20 shadow-2xl shadow-cyber-blue/25"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="w-12 h-12 text-cyber-blue drop-shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-r from-cyber-purple to-cyber-pink p-2 rounded-full shadow-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              
              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-cyber-blue/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="mb-6 w-full" 
            data-testid="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-center text-5xl md:text-6xl lg:text-7xl leading-tight" aria-label="Welcome to CyberSpace Technologies">
              <span className="font-extrabold text-gray-800">Welcome to </span>
              <span 
                className="font-black tracking-tight"
                style={{
                  background: "linear-gradient(90deg, #4263eb, #ad3aff, #fb923c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(66, 99, 235, 0.3)",
                  display: "inline"
                }}
              >
                CyberSpace
              </span>
              <span className="font-bold text-gray-800"> Technologies</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl hero-desc mb-3 max-w-5xl mx-auto leading-relaxed text-gray-600" 
            data-testid="hero-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            We are a <span className="font-semibold text-cyber-blue">dynamic tech consultancy</span> specializing in{" "}
            <span className="font-semibold text-cyber-purple">Data Engineering</span>,{" "}
            <span className="font-semibold text-cyber-teal">Analytics</span>, and{" "}
            <span className="font-semibold text-cyber-orange">Cloud Solutions</span> to help organizations transform their digital landscape.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            {location === "/" ? (
              <Button 
                size="lg" 
                className="px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl font-semibold text-lg group bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-blue transition-all duration-500 text-white border-0 transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #4263eb 0%, #ad3aff 100%)",
                  boxShadow: "0 10px 25px rgba(66, 99, 235, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                }}
                onClick={handleServicesClick}
              >
                <Zap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Explore Services
              </Button>
            ) : (
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl font-semibold text-lg group bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-blue transition-all duration-500 text-white border-0 transform hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #4263eb 0%, #ad3aff 100%)",
                    boxShadow: "0 10px 25px rgba(66, 99, 235, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <Zap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Services
                </Button>
              </Link>
            )}
            {location === "/" ? (
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl font-semibold text-lg group border-2 border-cyber-purple/30 text-cyber-blue hover:text-white hover:bg-gradient-to-r hover:from-cyber-blue hover:to-cyber-purple hover:border-transparent transition-all duration-500 bg-white/80 backdrop-blur-sm transform hover:scale-105"
                onClick={handleContactClick}
              >
                <Globe className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Contact Us
              </Button>
            ) : (
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl font-semibold text-lg group border-2 border-cyber-purple/30 text-cyber-blue hover:text-white hover:bg-gradient-to-r hover:from-cyber-blue hover:to-cyber-purple hover:border-transparent transition-all duration-500 bg-white/80 backdrop-blur-sm transform hover:scale-105"
                >
                  <Globe className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Contact Us
                </Button>
              </Link>
            )}
          </motion.div>

          {location === "/" ? (
            <motion.div 
              className="animate-bounce mt-1 opacity-60 cursor-pointer group"
              onClick={handleServicesClick}
              whileHover={{ scale: 1.2, opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center">
                <ArrowDown className="h-6 w-6 text-cyber-blue group-hover:text-cyber-purple transition-colors duration-300" />
                <span className="text-xs text-gray-500 mt-1 group-hover:text-cyber-blue transition-colors duration-300">
                  Explore below
                </span>
              </div>
            </motion.div>
          ) : (
            <Link href="/services">
              <motion.div 
                className="animate-bounce mt-1 opacity-60 cursor-pointer group"
                whileHover={{ scale: 1.2, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-6 w-6 text-cyber-blue group-hover:text-cyber-purple transition-colors duration-300" />
                  <span className="text-xs text-gray-500 mt-1 group-hover:text-cyber-blue transition-colors duration-300">
                    Explore Services
                  </span>
                </div>
              </motion.div>
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  );
}
