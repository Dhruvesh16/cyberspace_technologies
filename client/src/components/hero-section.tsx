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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>
      
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      ></motion.div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            y: [20, -30, 20],
            x: [10, -15, 10],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"
          animate={{
            y: [-15, 25, -15],
            x: [15, -20, 15],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
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
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-xl"
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
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-transparent"
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
