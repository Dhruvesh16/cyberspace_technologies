import { motion } from "motion/react";

export default function PartnersSection() {
  const partners = [
    { name: "Deloitte", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/deloitte-50x33.jpg" },
    { name: "CRISIL", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/crisil-50x33.jpg" },
    { name: "Tavant", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tavant-50x33.jpg" },
    { name: "Mphasis", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/mphasis-50x33.jpg" },
    { name: "Virtusa", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/virtusa-50x33.jpg" },
    { name: "Atos", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/atos-50x33.jpg" },
    { name: "Persistent", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/04/persistent-50x33.png" },
    { name: "Apexon", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/apexon-50x33.jpg" },
    { name: "Tech Mahindra", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tech-mahindra-50x33.jpg" },
    { name: "Wipro", logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/wipro-50x33.jpg" }
  ];

  return (
    <motion.section 
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" 
            data-testid="partners-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technological <span className="gradient-text">Partners</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600" 
            data-testid="partners-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted by industry leaders worldwide
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full h-24 flex items-center justify-center"
              data-testid={`partner-${index}`}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain opacity-60"
                data-testid={`partner-logo-${index}`}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
