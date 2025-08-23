import { motion } from "motion/react";

export default function PartnersScrollingSection() {
  // Merge clients and partners into one array with backup logos
  const partnersAndClients = [
    // Clients
    { name: "Johnson & Johnson", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/johnson.jpg", type: "client" },
    { name: "IDEXX", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/idexx.jpg", type: "client" },
    { name: "Newell Brands", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/newell.jpg", type: "client" },
    { name: "Verisk", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/04/verisk.png", type: "client" },
    { name: "Client 2", logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/2.-Logo.png", type: "client" },
    { name: "Client 3", logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/3.-Logo.png", type: "client" },
    { name: "Client 5", logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/5.-Logo.png", type: "client" },
    // Partners
    { name: "Deloitte", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/deloitte.jpg", type: "partner" },
    { name: "Mphasis", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/mphasis.jpg", type: "partner" },
    { name: "Atos", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/atos.jpg", type: "partner" },
    { name: "Tech Mahindra", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tech-mahindra.jpg", type: "partner" },
    { name: "Virtusa", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/virtusa.jpg", type: "partner" },
    { name: "Wipro", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/wipro.jpg", type: "partner" },
    { name: "Tavant", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tavant.jpg", type: "partner" },
    { name: "Apexon", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/apexon.jpg", type: "partner" },
    { name: "Crisil", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/crisil.jpg", type: "partner" }
  ];

  // Triple the array for seamless scrolling (more copies for smoother loop)
  const duplicatedItems = [...partnersAndClients, ...partnersAndClients, ...partnersAndClients];

  return (
    <motion.section 
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-4xl md:text-5xl partners-title mb-4">
            Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-black">Partners</span> & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-black">Clients</span>
          </motion.h2>
          <motion.p className="text-xl partners-desc max-w-3xl mx-auto">
            Trusted by industry leaders and powered by cutting-edge partnerships
          </motion.p>
        </motion.div>

        {/* Combined Partners & Clients Scrolling Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-8 w-max"
                animate={{ 
                  x: [`0%`, `-${33.33}%`]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                {duplicatedItems.map((item, index) => (
                  <motion.div
                    key={`${item.name}-${index}`}
                    className="flex-shrink-0 w-40 h-24 bg-white/95 rounded-lg flex items-center justify-center p-4 backdrop-blur-sm hover:bg-white/100 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <img 
                        src={item.logo} 
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                        style={{ 
                          maxWidth: '120px',
                          maxHeight: '60px'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          // Create a fallback with company name
                          const fallback = document.createElement('div');
                          fallback.className = 'text-gray-800 font-bold text-sm text-center leading-tight px-2';
                          fallback.innerHTML = item.name;
                          target.parentElement?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="/partners"
            className="luna-button inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Partners & Clients</span>
            <motion.svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
