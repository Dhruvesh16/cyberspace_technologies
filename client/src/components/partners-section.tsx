import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clients = [
    { 
      name: "Johnson & Johnson", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/johnson.jpg", 
      color: "from-red-500 to-blue-500",
      category: "Healthcare"
    },
    { 
      name: "IDEXX", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/idexx.jpg", 
      color: "from-green-500 to-blue-500",
      category: "Veterinary Technology"
    },
    { 
      name: "Newell Brands", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/newell.jpg", 
      color: "from-purple-500 to-cyan-500",
      category: "Consumer Goods"
    },
    { 
      name: "Verisk", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/04/verisk.png", 
      color: "from-cyan-500 to-purple-500",
      category: "Data Analytics"
    },
    { 
      name: "Client 2", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/2.-Logo.png", 
      color: "from-purple-500 to-pink-500",
      category: "Technology"
    },
    { 
      name: "Client 3", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/3.-Logo.png", 
      color: "from-cyan-500 to-teal-500",
      category: "Finance"
    },
    { 
      name: "Client 5", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/5.-Logo.png", 
      color: "from-indigo-500 to-purple-500",
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
    }, 4000);

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
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Partners</span>
          </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by industry leaders and powered by cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Clients Carousel */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Trusted Clients</h3>
          
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {clients.slice(slideIndex * 3, slideIndex * 3 + 3).map((client, index) => (
                        <motion.div
                          key={client.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="group"
                        >
                          <motion.div 
                            className="luna-card p-8 text-center group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-300"
                            whileHover={{ y: -10, scale: 1.05 }}
                          >
                            <motion.div 
                              className={`w-20 h-20 bg-gradient-to-r ${client.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/30 overflow-hidden`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              {client.logo.startsWith('http') ? (
                                <img 
                                  src={client.logo} 
                                  alt={client.name}
                                  className="w-full h-full object-contain p-2"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement!.innerHTML = `<span class="text-white font-bold text-sm">${client.name.split(' ').map(w => w[0]).join('')}</span>`;
                                  }}
                                />
                              ) : (
                                <span className="text-white font-bold text-sm">{client.logo}</span>
                              )}
                            </motion.div>
                            <h4 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                              {client.name}
                            </h4>
                            <p className="text-gray-400 text-sm">{client.category}</p>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 luna-button w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 luna-button w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
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

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Partners</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div 
                  className="luna-card p-6 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-300"
                  whileHover={{ y: -5, x: 5 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:shadow-lg group-hover:shadow-cyan-500/30 overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {partner.logo.startsWith('http') ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-contain p-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `<span class="text-white font-bold text-xs">${partner.name.split(' ').map(w => w[0]).join('')}</span>`;
                          }}
                        />
                      ) : (
                        <span className="text-white font-bold text-xs">{partner.logo}</span>
                      )}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {partner.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{partner.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
