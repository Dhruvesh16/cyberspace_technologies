import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedCompaniesSection() {
  const companies = [
    { 
      name: "Johnson & Johnson", 
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Johnson-Johnson-Logo.png",
      fallback: "J&J"
    },
    { 
      name: "IDEXX", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/idexx.jpg",
      fallback: "IDEXX"
    },
    { 
      name: "Newell Brands", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/newell.jpg",
      fallback: "Newell"
    },
    { 
      name: "Verisk", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Verisk_Analytics_logo.svg",
      fallback: "Verisk"
    },
    { 
      name: "Deloitte", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Deloitte-Logo.png",
      fallback: "Deloitte"
    },
    { 
      name: "Microsoft", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png",
      fallback: "Microsoft"
    },
    { 
      name: "IBM", 
      logo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png",
      fallback: "IBM"
    },
    { 
      name: "Oracle", 
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
      fallback: "Oracle"
    },
  ];

  // Component for logo with fallback
  const LogoWithFallback = ({ company }: { company: typeof companies[0] }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
      <div className="flex items-center justify-center w-full h-full">
        {!imageError && (
          <img 
            src={company.logo} 
            alt={company.name}
            className="max-h-10 max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{ display: imageError ? 'none' : 'block' }}
          />
        )}
        {(imageError || !imageLoaded) && (
          <div className="text-white/80 font-semibold text-sm tracking-wider flex items-center justify-center w-full h-full">
            {company.fallback}
          </div>
        )}
      </div>
    );
  };

  return (
    <motion.section 
      className="py-16 bg-[#0F0A2A] relative overflow-hidden dark-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient background */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.07) 0%, rgba(30, 18, 80, 0) 40%)",
              "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.07) 0%, rgba(30, 18, 80, 0) 40%)",
              "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.07) 0%, rgba(30, 18, 80, 0) 40%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">1000+ Companies Trust </span>
            <span 
              className="font-black"
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline"
              }}
            >
              CyberSpace
            </span>
          </h2>
        </motion.div>

        {/* Animated Logo Carousel */}
        <div className="relative overflow-hidden py-6">
          {/* First row - moving left to right */}
          <div className="mb-10 overflow-hidden relative">
            <motion.div 
              className="flex animate-marquee gap-8"
              style={{ 
                display: "inline-flex", 
                willChange: "transform" 
              }}
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-48 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center p-4 hover:bg-white/15 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <LogoWithFallback company={company} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second row - moving right to left */}
          <div className="mb-10 overflow-hidden relative">
            <motion.div 
              className="flex animate-marquee-reverse gap-8"
              style={{ 
                display: "inline-flex", 
                willChange: "transform"
              }}
            >
              {[...companies.slice().reverse(), ...companies.slice().reverse(), ...companies.slice().reverse()].map((company, index) => (
                <motion.div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-48 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center p-4 hover:bg-white/15 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <LogoWithFallback company={company} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Third row - moving left to right (slower) */}
          <div className="overflow-hidden relative">
            <motion.div 
              className="flex animate-marquee-slow gap-8"
              style={{ 
                display: "inline-flex", 
                willChange: "transform"
              }}
            >
              {[...companies.slice(0, 6), ...companies.slice(0, 6), ...companies.slice(0, 6)].map((company, index) => (
                <motion.div
                  key={`row3-${index}`}
                  className="flex-shrink-0 w-48 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center p-4 hover:bg-white/15 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <LogoWithFallback company={company} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays to create fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0F0A2A] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0F0A2A] to-transparent pointer-events-none z-10" />
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "500+", label: "Trusted Companies" },
            { number: "1000+", label: "Projects Delivered" },
            { number: "15+", label: "Countries Served" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center perspective-1000"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                {/* Subtle glow behind numbers */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl opacity-20"
                  style={{ 
                    background: "linear-gradient(90deg, #8b5cf6, #3b82f6)",
                    zIndex: -1
                  }}
                />
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
              </motion.div>
              <div className="text-white/90 text-lg font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
