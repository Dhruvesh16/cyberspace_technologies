import { ArrowDown, Sparkles, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cyber Network Grid */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(66, 99, 235, 0.3)" strokeWidth="1"/>
              </pattern>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* Animated Network Nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 rounded-full bg-cyber-blue"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              boxShadow: "0 0 20px rgba(66, 99, 235, 0.6)"
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}

        {/* Data Flow Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `rgba(${66 + i * 10}, ${99 + i * 8}, 235, 0.8)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1
            }}
          />
        ))}

        {/* Cyber Circuit Lines */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(66, 99, 235, 0.6)" />
                <stop offset="50%" stopColor="rgba(173, 58, 255, 0.6)" />
                <stop offset="100%" stopColor="rgba(52, 211, 153, 0.6)" />
              </linearGradient>
            </defs>
            
            {/* Horizontal circuit lines */}
            <motion.line 
              x1="0" y1="150" x2="1200" y2="150"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, delay: 1 }}
            />
            <motion.line 
              x1="0" y1="350" x2="1200" y2="350"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, delay: 1.5 }}
            />
            <motion.line 
              x1="0" y1="550" x2="1200" y2="550"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, delay: 2 }}
            />
            
            {/* Vertical circuit lines */}
            <motion.line 
              x1="200" y1="0" x2="200" y2="800"
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 2.5 }}
            />
            <motion.line 
              x1="600" y1="0" x2="600" y2="800"
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 3 }}
            />
            <motion.line 
              x1="1000" y1="0" x2="1000" y2="800"
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 3.5 }}
            />

            {/* Circuit nodes at intersections */}
            <motion.circle cx="200" cy="150" r="4" fill="rgba(66, 99, 235, 0.8)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 4 }}
            />
            <motion.circle cx="200" cy="350" r="4" fill="rgba(173, 58, 255, 0.8)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 4.2 }}
            />
            <motion.circle cx="600" cy="150" r="4" fill="rgba(52, 211, 153, 0.8)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 4.4 }}
            />
            <motion.circle cx="600" cy="350" r="4" fill="rgba(251, 146, 60, 0.8)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 4.6 }}
            />
          </svg>
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-cyber-purple"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className="absolute top-3/4 right-1/4 w-6 h-6 border border-cyber-teal"
          animate={{
            rotate: [0, -180, -360],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Enhanced floating orbs with better colors */}
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(66, 99, 235, 0.20) 0%, rgba(66, 99, 235, 0.08) 40%, transparent 70%)",
            filter: "blur(2px)",
            boxShadow: "0 0 60px rgba(66, 99, 235, 0.15)"
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-40 right-32 w-28 h-28 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(173, 58, 255, 0.18) 0%, rgba(173, 58, 255, 0.08) 40%, transparent 70%)",
            filter: "blur(2px)",
            boxShadow: "0 0 50px rgba(173, 58, 255, 0.15)"
          }}
          animate={{
            y: [35, -35, 35],
            x: [20, -20, 20],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute bottom-32 left-1/3 w-24 h-24 rounded-2xl"
          style={{
            background: "linear-gradient(45deg, rgba(52, 211, 153, 0.18), rgba(251, 146, 60, 0.18))",
            filter: "blur(1px)",
            boxShadow: "0 0 40px rgba(52, 211, 153, 0.12)"
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/2 right-20 w-16 h-16 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(233, 69, 147, 0.15) 0%, rgba(233, 69, 147, 0.05) 40%, transparent 70%)",
            filter: "blur(1px)"
          }}
          animate={{
            y: [-25, 25, -25],
            x: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Enhanced geometric network lines */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(66, 99, 235, 0.35)" />
                <stop offset="25%" stopColor="rgba(173, 58, 255, 0.35)" />
                <stop offset="50%" stopColor="rgba(52, 211, 153, 0.35)" />
                <stop offset="75%" stopColor="rgba(251, 146, 60, 0.35)" />
                <stop offset="100%" stopColor="rgba(233, 69, 147, 0.35)" />
              </linearGradient>
            </defs>
            <motion.path 
              d="M200,300 Q400,50 600,300 T900,300"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
            />
            <motion.path 
              d="M100,500 Q300,700 500,500 T900,500"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, delay: 2 }}
            />
            <motion.path 
              d="M150,700 Q350,900 550,700 T950,700"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, delay: 2.5 }}
            />
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
