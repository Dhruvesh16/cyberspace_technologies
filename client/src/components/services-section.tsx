import { BarChart3, Cloud, Shield, ArrowRight, Zap, Database, Smartphone, MousePointer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

export default function ServicesSection() {
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

  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Data Warehouse Modernization, Real-time data onboarding, Data Governance & Observability, and Unique MDM implementation expertise.",
      gradient: "from-emerald-500 to-teal-500",
      color: "rgb(5, 150, 105)",
      href: "/services"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics", 
      description: "Modern Data Analytics, AI/ML Analytics Engineering, and Process Mining Analytics with real-time delivery and AI automation.",
      gradient: "from-blue-500 to-cyan-500",
      color: "rgb(37, 99, 235)",
      href: "/services"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "AWS/Azure/GCP Cloud Infrastructure, Microservices, Enterprise Architecture consulting, and DBA as a service solutions.",
      gradient: "from-purple-500 to-violet-500",
      color: "rgb(139, 92, 246)",
      href: "/services"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Services",
      description: "Reactive and Progressive Web Apps, Mobile App Development, and Microservices with Service Mesh architecture.",
      gradient: "from-pink-500 to-rose-500",
      color: "rgb(236, 72, 153)",
      href: "/services"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IT Services",
      description: "IT Management, Data Security, Business Reform, Infrastructure Planning, Firewall Advance, and Desktop Computing solutions.",
      gradient: "from-orange-500 to-amber-500",
      color: "rgb(249, 115, 22)",
      href: "/services"
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="services" 
      className="py-28 bg-black relative overflow-hidden dark-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070510] via-[#0c0621] to-[#070510] opacity-90"></div>
      
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
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(140, 90, 255, 0.15) 0%, rgba(37, 99, 235, 0.08) 30%, transparent 70%)',
          x: useTransform(springX, (x) => x - 300),
          y: useTransform(springY, (y) => y - 300),
          opacity: 0.7,
        }}
      />
      
      {/* Floating particle elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 5 === 0 ? 'rgba(140, 90, 255, 0.5)' : 
                       i % 5 === 1 ? 'rgba(37, 99, 235, 0.5)' : 
                       i % 5 === 2 ? 'rgba(236, 72, 153, 0.5)' :
                       i % 5 === 3 ? 'rgba(5, 150, 105, 0.5)' :
                       'rgba(249, 115, 22, 0.5)',
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
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6" 
            data-testid="services-title"
          >
            Services We <span 
              className="font-black"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline"
              }}
            >Deliver</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We offer a range of solutions and services that include Data Engineering and Analytics, Cloud FinOps, Migration, GenAI and other cutting-edge technologies to support your organization.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="px-10 py-7 rounded-xl font-semibold text-lg transition-all duration-300 text-white border-0 relative overflow-hidden bg-transparent"
              onClick={() => window.location.href = "/contact"}
            >
              {/* Button gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Button glow effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl"></span>
              </span>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center">
                <Zap className="mr-3 h-5 w-5 transition-transform" />
                Start Your Transformation
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

interface ServiceCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    color: string;
    href: string;
  };
  index: number;
}

// Interactive Service Card Component
function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hover, setHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Save mouse position for spotlight effect
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width * 100,
      y: (e.clientY - rect.top) / rect.height * 100
    });
    
    // Calculate rotation (limited to +/- 8 degrees)
    const rotX = mouseY / (rect.height / 2) * -5;
    const rotY = mouseX / (rect.width / 2) * 5;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative preserve-3d gpu-accelerated"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: hover ? 'none' : 'transform 0.5s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card with spotlight effect */}
      <div className="bg-[#13111c]/60 backdrop-blur-lg rounded-3xl h-full border border-purple-800/20 relative overflow-hidden">
        {/* Spotlight effect */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{ 
            opacity: hover ? 0.15 : 0,
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${service.color} 0%, transparent 80%)`,
          }}
        />
        
        {/* Border glow */}
        <motion.div 
          className="absolute inset-0 rounded-3xl opacity-0 z-0 pointer-events-none"
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ 
            boxShadow: `0 0 40px 5px ${service.color}40`,
          }}
        />
        
        <CardContent className="p-8 h-full flex flex-col relative z-10">
          {/* Service Icon */}
          <motion.div 
            className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 relative preserve-3d`}
            style={{ 
              background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}CC 100%)`,
              transform: 'translateZ(30px)',
              boxShadow: hover ? `0 10px 30px -5px ${service.color}60` : 'none',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            {/* Icon glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  `0 0 0px ${service.color}00`,
                  `0 0 20px ${service.color}40`,
                  `0 0 0px ${service.color}00`
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3
              }}
            />
            
            <motion.div
              className="text-white"
              animate={hover ? {
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              } : {}}
              transition={{ duration: 0.6 }}
              style={{ zIndex: 2 }}
            >
              {service.icon}
            </motion.div>
          </motion.div>
          
          {/* Service Title */}
          <motion.h3 
            className="text-xl font-bold text-white mb-4 preserve-3d"
            style={{ transform: 'translateZ(20px)' }}
          >
            {service.title}
          </motion.h3>
          
          {/* Service Description */}
          <motion.p 
            className="text-gray-400 leading-relaxed flex-grow mb-6 preserve-3d"
            style={{ transform: 'translateZ(15px)' }}
          >
            {service.description}
          </motion.p>
          
          {/* Learn More Button */}
          <motion.div
            className="preserve-3d"
            style={{ transform: 'translateZ(25px)' }}
          >
            <Button 
              variant="ghost" 
              className="text-white hover:text-white hover:bg-purple-500/20 p-0 flex items-center gap-2 group"
              onClick={() => window.location.href = service.href}
            >
              Learn More 
              <motion.div
                animate={hover ? { x: 5 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
        </CardContent>
      </div>
    </motion.div>
  );
}
