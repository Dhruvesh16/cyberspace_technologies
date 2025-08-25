import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function PartnersClientsSection() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  const allEntities = [
    // Clients
    { 
      name: "Johnson & Johnson", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/johnson.jpg", 
      type: "client",
      category: "Healthcare"
    },
    { 
      name: "IDEXX", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/idexx.jpg", 
      type: "client",
      category: "Veterinary Technology"
    },
    { 
      name: "Newell Brands", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/newell.jpg", 
      type: "client",
      category: "Consumer Goods"
    },
    { 
      name: "Verisk", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/04/verisk.png", 
      type: "client",
      category: "Data Analytics"
    },
    // Partners
    { 
      name: "Deloitte", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/deloitte.jpg", 
      type: "partner",
      category: "Consulting Services"
    },
    { 
      name: "Mphasis", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/mphasis.jpg", 
      type: "partner",
      category: "IT Services"
    },
    { 
      name: "Atos", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/atos.jpg", 
      type: "partner",
      category: "Digital Transformation"
    },
    { 
      name: "Tech Mahindra", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tech-mahindra.jpg", 
      type: "partner",
      category: "Technology Services"
    },
    { 
      name: "Virtusa", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/virtusa.jpg", 
      type: "partner",
      category: "Digital Engineering"
    },
    { 
      name: "Wipro", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/wipro.jpg", 
      type: "partner",
      category: "IT Consulting"
    },
    { 
      name: "Tavant", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tavant.jpg", 
      type: "partner",
      category: "Technology Solutions"
    },
    { 
      name: "Apexon", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/apexon.jpg", 
      type: "partner",
      category: "Digital Engineering"
    },
    { 
      name: "Crisil", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/crisil.jpg", 
      type: "partner",
      category: "Analytics & Research"
    }
  ];

  // Double the array for seamless infinite scroll
  const scrollingEntities = [...allEntities, ...allEntities];

  return (
    <motion.section 
      id="partners-clients" 
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(173, 58, 255, 0.08) 0%, transparent 70%)",
            filter: "blur(2px)"
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232, 69, 149, 0.06) 0%, transparent 70%)",
            filter: "blur(1px)"
          }}
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">Partners</span> & <span className="bg-gradient-to-r from-cyber-blue to-cyber-teal bg-clip-text text-transparent">Clients</span>
          </motion.h2>
          <motion.p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            {isHomePage 
              ? "Trusted collaborations driving innovation and excellence in technology" 
              : "Building lasting partnerships and delivering exceptional solutions to leading organizations worldwide"
            }
          </motion.p>
        </motion.div>

        {/* Optimized Infinite Scrolling Logos */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex space-x-8 py-8 animate-scroll"
              style={{ 
                width: `${200 * scrollingEntities.length}px`,
                willChange: "transform"
              }}
            >
              {scrollingEntities.map((entity, index) => (
                <div
                  key={`${entity.name}-${index}`}
                  className="flex-shrink-0 w-48 h-32 group"
                  style={{ willChange: "transform" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div className="w-full h-full bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 flex flex-col items-center justify-center group-hover:shadow-xl group-hover:shadow-cyber-purple/20 transition-all duration-300 group-hover:border-cyber-purple/30 transform-gpu">
                    <div className="w-full h-16 flex items-center justify-center mb-3">
                      <img 
                        src={entity.logo} 
                        alt={entity.name}
                        className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-12 h-12 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-lg flex items-center justify-center text-white font-bold';
                          fallback.textContent = entity.name.charAt(0);
                          target.parentElement!.appendChild(fallback);
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-cyber-purple transition-colors duration-300">
                        {entity.name}
                      </h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        entity.type === 'client' 
                          ? 'bg-cyber-blue/10 text-cyber-blue' 
                          : 'bg-cyber-purple/10 text-cyber-purple'
                      }`}>
                        {entity.type === 'client' ? 'Client' : 'Partner'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/60 to-transparent pointer-events-none z-10" />
        </div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {allEntities.filter(e => e.type === 'client').length}+
            </motion.div>
            <div className="text-white font-medium">Trusted Clients</div>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-teal bg-clip-text text-transparent mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {allEntities.filter(e => e.type === 'partner').length}+
            </motion.div>
            <div className="text-white font-medium">Strategic Partners</div>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              50+
            </motion.div>
            <div className="text-white font-medium">Projects Delivered</div>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-teal bg-clip-text text-transparent mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              100%
            </motion.div>
            <div className="text-white font-medium">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
