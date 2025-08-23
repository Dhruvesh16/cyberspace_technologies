import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function HeroSection() {
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

  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-home-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      
      {/* Floating Geometric Shapes for added depth */}
      <div className="absolute inset-0">
        {/* Professional cyber network nodes */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg backdrop-blur-sm"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-lg"></div>
        </motion.div>
        
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 border border-blue-400/15 rounded-full backdrop-blur-sm"
          animate={{
            y: [15, -15, 15],
            x: [8, -8, 8],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-purple-400/10 rounded-sm rotate-45 backdrop-blur-sm"
          animate={{
            y: [-12, 12, -12],
            rotate: [45, 50, 45]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-400/5 to-cyan-400/5 rounded-sm"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" 
            data-testid="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Welcome to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Cyber Space</span> Technologies
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed" 
            data-testid="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            Explore innovations in Data Engineering, Analytics, Cloud Services, and Cyber Security. 
            Empowering organizations with cutting-edge IT solutions.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={scrollToContact}
                className="tech-button text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                data-testid="hero-cta-primary"
              >
                Talk to a Consultant
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={scrollToServices}
                variant="outline"
                className="glass-card border-2 border-cyan-400/30 text-white px-8 py-4 text-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm bg-transparent"
                data-testid="hero-cta-secondary"
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ArrowDown className="w-6 h-6 text-white/70" data-testid="scroll-indicator" />
      </motion.div>
    </motion.section>
  );
}
