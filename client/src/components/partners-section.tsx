import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clients = [
    { 
      name: "Johnson & Johnson", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/johnson.jpg", 
      color: "from-cyber-blue to-cyber-purple",
      category: "Healthcare"
    },
    { 
      name: "IDEXX", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/idexx.jpg", 
      color: "from-cyber-teal to-cyber-green",
      category: "Veterinary Technology"
    },
    { 
      name: "Newell Brands", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/newell.jpg", 
      color: "from-cyber-purple to-cyber-pink",
      category: "Consumer Goods"
    },
    { 
      name: "Verisk", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/04/verisk.png", 
      color: "from-cyber-teal to-cyber-blue",
      category: "Data Analytics"
    },
    { 
      name: "Client 2", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/2.-Logo.png", 
      color: "from-cyber-purple to-cyber-orange",
      category: "Technology"
    },
    { 
      name: "Client 3", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/3.-Logo.png", 
      color: "from-cyber-green to-cyber-teal",
      category: "Finance"
    },
    { 
      name: "Client 5", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/5.-Logo.png", 
      color: "from-cyber-blue to-cyber-pink",
      category: "Enterprise"
    }
  ];

  const partners = [
    { 
      name: "Deloitte", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/deloitte.jpg", 
      description: "Consulting Services", 
      color: "from-blue-500 to-purple-500" 
    },
    { 
      name: "Mphasis", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/mphasis.jpg", 
      description: "IT Services", 
      color: "from-purple-500 to-pink-500" 
    },
    { 
      name: "Atos", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/atos.jpg", 
      description: "Digital Transformation", 
      color: "from-cyan-500 to-blue-500" 
    },
    { 
      name: "Tech Mahindra", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tech-mahindra.jpg", 
      description: "Technology Services", 
      color: "from-orange-500 to-red-500" 
    },
    { 
      name: "Virtusa", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/virtusa.jpg", 
      description: "Digital Engineering", 
      color: "from-green-500 to-teal-500" 
    },
    { 
      name: "Wipro", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/wipro.jpg", 
      description: "IT Consulting", 
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      name: "Tavant", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tavant.jpg", 
      description: "Technology Solutions", 
      color: "from-indigo-500 to-purple-500" 
    },
    { 
      name: "Apexon", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/apexon.jpg", 
      description: "Digital Engineering", 
      color: "from-purple-500 to-cyan-500" 
    },
    { 
      name: "Crisil", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/crisil.jpg", 
      description: "Analytics & Research", 
      color: "from-cyan-500 to-teal-500" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 3));
    }, 5000); // Increased interval for smoother experience

    return () => clearInterval(interval);
  }, [clients.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(clients.length / 3)) % Math.ceil(clients.length / 3));
  };

  return (
    <motion.section 
      id="partners" 
      className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50/80 via-white to-cyber-purple/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Simplified background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(173, 58, 255, 0.1) 0%, transparent 70%)",
            transform: "translate3d(0, 0, 0)", // Hardware acceleration
            willChange: "transform"
          }}
        />
        <div 
          className="absolute bottom-40 right-10 w-24 h-24 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%)",
            transform: "translate3d(0, 0, 0)", // Hardware acceleration
            willChange: "transform"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Optimized Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 partners-title">
            Our <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-teal bg-clip-text text-transparent font-black">Partners</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium partners-desc">
            Trusted by <span className="font-bold text-cyber-blue">industry leaders</span> and powered by{" "}
            <span className="font-bold text-cyber-purple">cutting-edge technologies</span>
          </p>
        </motion.div>

        {/* Optimized Clients Carousel */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Trusted Clients</h3>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ 
                  transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
                  willChange: "transform"
                }}
              >
                {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {clients.slice(slideIndex * 3, slideIndex * 3 + 3).map((client, index) => (
                        <motion.div
                          key={client.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="group"
                        >
                          <div 
                            className="luna-card p-8 text-center group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-300 transform-gpu"
                            style={{ willChange: "transform, box-shadow" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0) scale(1)";
                            }}
                          >
                            <div 
                              className={`w-20 h-20 bg-gradient-to-r ${client.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/30 overflow-hidden transition-transform duration-300`}
                              style={{ willChange: "transform" }}
                            >
                              {client.logo.startsWith('http') ? (
                                <img 
                                  src={client.logo} 
                                  alt={client.name}
                                  className="w-full h-full object-contain p-2"
                                  loading="lazy"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement!.innerHTML = `<span class="text-white font-bold text-sm">${client.name.split(' ').map(w => w[0]).join('')}</span>`;
                                  }}
                                />
                              ) : (
                                <span className="text-white font-bold text-sm">{client.logo}</span>
                              )}
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                              {client.name}
                            </h4>
                            <p className="text-gray-600 text-sm font-medium">{client.category}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimized Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/90 hover:bg-white border-2 border-purple-200 hover:border-purple-400 rounded-full flex items-center justify-center text-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl z-10"
              style={{ willChange: "transform, box-shadow" }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/90 hover:bg-white border-2 border-purple-200 hover:border-purple-400 rounded-full flex items-center justify-center text-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl z-10"
              style={{ willChange: "transform, box-shadow" }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Optimized Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technology Partners</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div 
                  className="luna-card p-6 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-300 transform-gpu"
                  style={{ willChange: "transform, box-shadow" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px) translateX(2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) translateX(0)";
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:shadow-lg group-hover:shadow-cyan-500/30 overflow-hidden transition-transform duration-200`}
                      style={{ willChange: "transform" }}
                    >
                      {partner.logo.startsWith('http') ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `<span class="text-white font-bold text-xs">${partner.name.split(' ').map(w => w[0]).join('')}</span>`;
                          }}
                        />
                      ) : (
                        <span className="text-white font-bold text-xs">{partner.logo}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-200">
                        {partner.name}
                      </h4>
                      <p className="text-gray-600 text-sm font-medium">{partner.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
