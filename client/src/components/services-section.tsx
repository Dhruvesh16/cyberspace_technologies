import { BarChart3, Cloud, Shield, ArrowRight, Zap, Database, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "Data Engineering",
      description: "Data Warehouse Modernization, Real-time data onboarding, Data Governance & Observability, and Unique MDM implementation expertise.",
      gradient: "from-purple-500/20 to-cyan-500/20",
      glow: "shadow-purple-500/20",
      href: "/services"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: "Analytics", 
      description: "Modern Data Analytics, AI/ML Analytics Engineering, and Process Mining Analytics with real-time delivery and AI automation.",
      gradient: "from-cyan-500/20 to-purple-500/20",
      glow: "shadow-cyan-500/20",
      href: "/services"
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: "Cloud Services",
      description: "AWS/Azure/GCP Cloud Infrastructure, Microservices, Enterprise Architecture consulting, and DBA as a service solutions.",
      gradient: "from-purple-500/20 to-cyan-500/20",
      glow: "shadow-purple-500/20",
      href: "/services"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: "App Services",
      description: "Reactive and Progressive Web Apps, Mobile App Development, and Microservices with Service Mesh architecture.",
      gradient: "from-cyan-500/20 to-purple-500/20",
      glow: "shadow-cyan-500/20",
      href: "/services"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "IT Services",
      description: "IT Management, Data Security, Business Reform, Infrastructure Planning, Firewall Advance, and Desktop Computing solutions.",
      gradient: "from-purple-500/20 to-cyan-500/20",
      glow: "shadow-purple-500/20",
      href: "/services"
    }
  ];

  return (
    <motion.section 
      id="services" 
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4" 
            data-testid="services-title"
          >
            Services We <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Deliver</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We offer a range of solutions and services that include Data Engineering and Analytics, Cloud FinOps, Migration, GenAI and other cutting-edge technologies to support your organization.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className={`luna-card h-full transition-all duration-300 hover:${service.glow} hover:shadow-2xl border-0`}>
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed flex-grow mb-6">
                    {service.description}
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button 
                      variant="ghost" 
                      className="text-purple-400 hover:text-cyan-400 hover:bg-purple-400/10 group-hover:bg-purple-400/20 transition-all p-0"
                      onClick={() => window.location.href = service.href}
                    >
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            className="luna-button text-lg px-8 py-4 group"
            onClick={() => window.location.href = "/contact"}
          >
            <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Start Your Transformation
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
