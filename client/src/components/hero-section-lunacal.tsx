import { ArrowDown, ArrowRight } from "lucide-react";
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
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #2d1b69 50%, #0f0c29 75%, #24243e 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Spotlight Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central spotlight gradient */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "120%",
            height: "120%",
            background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.02) 50%, transparent 70%)",
            filter: "blur(2px)"
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Secondary glow effect */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "80%",
            height: "80%",
            background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 60%)",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
        />

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        <motion.div 
          className="mb-12" 
          data-testid="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4">
            <span className="text-white block mb-2">Own the </span>
            <span 
              className="font-black tracking-tight block mb-2"
              style={{
                background: "linear-gradient(135deg, #ff8a80 0%, #ff7043 25%, #ff5722 50%, #e64a19 75%, #d84315 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              best
            </span>
            <span 
              className="font-black tracking-tight block mb-2"
              style={{
                background: "linear-gradient(135deg, #ce93d8 0%, #ba68c8 25%, #ab47bc 50%, #9c27b0 75%, #8e24aa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              CyberSpace
            </span>
            <span className="text-white block">of your life</span>
          </h1>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          {location === "/" ? (
            <Button 
              size="lg" 
              className="px-8 py-4 rounded-2xl font-semibold text-lg group transition-all duration-300 text-white border-2 border-white/20 transform hover:scale-105 bg-transparent hover:bg-white/10"
              onClick={handleServicesClick}
            >
              Book a demo
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          ) : (
            <Link href="/services">
              <Button 
                size="lg" 
                className="px-8 py-4 rounded-2xl font-semibold text-lg group transition-all duration-300 text-white border-2 border-white/20 transform hover:scale-105 bg-transparent hover:bg-white/10"
              >
                Book a demo
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          )}
          
          {location === "/" ? (
            <Button 
              size="lg" 
              className="px-8 py-4 rounded-2xl font-semibold text-lg group transition-all duration-300 text-black transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #ff8a80 0%, #ffab91 50%, #ffcc80 100%)"
              }}
              onClick={handleContactClick}
            >
              Try now
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          ) : (
            <Link href="/contact">
              <Button 
                size="lg" 
                className="px-8 py-4 rounded-2xl font-semibold text-lg group transition-all duration-300 text-black transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #ff8a80 0%, #ffab91 50%, #ffcc80 100%)"
                }}
              >
                Try now
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
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
