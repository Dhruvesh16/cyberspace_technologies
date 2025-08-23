import { motion } from "motion/react";

export default function StatisticsSection() {
  const stats = [
    { number: "1970+", label: "Happy Clients", description: "Satisfied customers worldwide" },
    { number: "491+", label: "Projects Completed", description: "Successful deliveries" },
    { number: "245+", label: "Skilled Experts", description: "Professionals in our team" },
    { number: "1090+", label: "Media Posts", description: "Content and updates shared" }
  ];

  return (
    <motion.section 
      id="statistics"
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-4xl md:text-5xl stats-title mb-4">
            Our <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent font-black">Impact</span>
          </motion.h2>
          <motion.p className="text-xl stats-desc max-w-3xl mx-auto font-medium">
            Numbers that showcase our commitment to excellence and global reach
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group"
            >
              <motion.div 
                className="stats-card bg-white/90 backdrop-blur-sm border-2 border-cyber-blue/30 rounded-2xl p-8 text-center shadow-lg group-hover:shadow-xl group-hover:shadow-cyber-purple/30 transition-all duration-500"
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 className="text-4xl md:text-5xl font-bold text-cyber-blue mb-2">
                  {stat.number}
                </motion.h3>
                <motion.p className="text-xl stats-label font-semibold group-hover:text-cyber-purple transition-colors duration-300 mb-2">
                  {stat.label}
                </motion.p>
                <motion.p className="stats-description font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {stat.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
