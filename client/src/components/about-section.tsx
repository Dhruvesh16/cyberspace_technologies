import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}></div>
        </div>
        
        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? 'rgba(139, 92, 246, 0.4)' : 'rgba(59, 130, 246, 0.4)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">CyberSpace</span>
          </motion.h2>
          <motion.p className="text-xl text-white/80 max-w-3xl mx-auto">
            Pioneering the future of technology with innovative solutions and cutting-edge expertise
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group"
          >
            <motion.div className="luna-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To empower businesses with transformative technology solutions that drive innovation, 
                efficiency, and sustainable growth in the digital age.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group"
          >
            <motion.div className="luna-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To be the global leader in innovative technology solutions, creating a world where 
                technology seamlessly integrates with human potential.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
