import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function StatisticsSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Spring physics for smooth spotlight following
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const stats = [
    { number: "1970+", label: "Happy Clients", description: "Satisfied customers worldwide", 
      colors: ["from-violet-500", "to-fuchsia-500"], icon: "🏆" },
    { number: "491+", label: "Projects Completed", description: "Successful deliveries", 
      colors: ["from-blue-500", "to-cyan-500"], icon: "✨" },
    { number: "245+", label: "Skilled Experts", description: "Professionals in our team", 
      colors: ["from-emerald-500", "to-teal-500"], icon: "👨‍💻" },
    { number: "1090+", label: "Media Posts", description: "Content and updates shared", 
      colors: ["from-amber-500", "to-orange-500"], icon: "📱" }
  ];

  return (
    <motion.section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="statistics"
      className="py-28 bg-black relative overflow-hidden dark-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0517] via-[#0c0621] to-[#070510] opacity-90"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "linear-gradient(rgba(140, 90, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 90, 255, 0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}></div>
      </div>
      
      {/* Spotlight effect */}
      <motion.div 
        className="absolute pointer-events-none"
        style={{ 
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(140, 90, 255, 0.15) 0%, rgba(37, 99, 235, 0.08) 30%, transparent 70%)',
          x: useTransform(springX, (x) => x - 400),
          y: useTransform(springY, (y) => y - 400),
          opacity: 0.7,
        }}
      />
      
      {/* Floating particle elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? 'rgba(140, 90, 255, 0.5)' : 
                       i % 3 === 1 ? 'rgba(37, 99, 235, 0.5)' : 
                       'rgba(236, 72, 153, 0.5)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + Math.random() * 10,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span 
              className="font-black"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline"
              }}
            >Impact</span>
          </motion.h2>
          <motion.p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Numbers that showcase our commitment to excellence and global reach
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.label}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

interface StatCardProps {
  stat: {
    number: string;
    label: string;
    description: string;
    colors: string[];
    icon: string;
  };
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="perspective-1000"
    >
      <motion.div 
        className="bg-[#13111c]/60 backdrop-blur-lg rounded-3xl p-8 h-full border border-purple-800/20 relative overflow-hidden preserve-3d"
        whileHover={{ 
          y: -10, 
          scale: 1.03,
          rotateX: 5,
          rotateY: 5,
          boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 30px rgba(128, 90, 213, 0.2)'
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 20 
        }}
      >
        {/* Gradient background on hover */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${stat.colors[0]} ${stat.colors[1]} opacity-0`}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon Badge */}
        <div className="absolute -top-5 -right-5">
          <motion.div 
            className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.colors[0]} ${stat.colors[1]} flex items-center justify-center text-white text-2xl`}
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1 + 0.3,
              type: "spring"
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: '0 0 30px rgba(128, 90, 213, 0.5)'
            }}
          >
            {stat.icon}
          </motion.div>
        </div>
        
        {/* Number with gradient text */}
        <motion.div 
          className="mt-4 mb-4 z-depth-3"
          style={{ transform: 'translateZ(30px)' }}
        >
          <motion.h3 
            className="text-5xl md:text-6xl font-bold mb-2"
            style={{
              background: `linear-gradient(135deg, ${stat.colors[0].replace('from-', '')} 0%, ${stat.colors[1].replace('to-', '')} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1 + 0.5
            }}
            whileHover={{
              scale: 1.05
            }}
          >
            {stat.number}
          </motion.h3>
        </motion.div>
        
        {/* Label */}
        <motion.p 
          className="text-xl font-semibold text-white mb-2 z-depth-2"
          style={{ transform: 'translateZ(20px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1 + 0.7
          }}
        >
          {stat.label}
        </motion.p>
        
        {/* Description */}
        <motion.p 
          className="text-gray-400 z-depth-1"
          style={{ transform: 'translateZ(10px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1 + 0.9
          }}
        >
          {stat.description}
        </motion.p>
        
        {/* Glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ 
            boxShadow: `0 0 40px 5px ${stat.colors[0].replace('from-', 'rgba(').replace('-500', '')}, 0, 0, 0.2)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
