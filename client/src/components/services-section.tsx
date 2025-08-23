import { BarChart3, Cloud, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "wouter";

export default function ServicesSection() {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Data Engineering",
      description: "We assist customers in organizing and structuring data for actionable insights via clear data pipelines, warehouse modernization, and real-time data ingestion.",
      gradient: "from-blue-500 to-cyan-500",
      href: "#data-engineering"
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Cloud Services", 
      description: "Provide re-host migration, refactoring, cloud optimization and FinOps services for clients on AWS, Azure and Google Cloud platforms.",
      gradient: "from-purple-500 to-pink-500",
      href: "#cloud-services"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Cyber Security",
      description: "As cyberattacks become more common and sophisticated, we provide a comprehensive variety of cyber security solutions to protect your organization.",
      gradient: "from-emerald-500 to-teal-500",
      href: "#cyber-security"
    }
  ];

  return (
    <motion.section 
      id="services" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden circuit-pattern"
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" 
            data-testid="services-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Services We <span className="gradient-text">Deliver</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto" 
            data-testid="services-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Preparing for your success, we provide truly prominent IT solutions that transform, automate, and optimize your digital operations.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <Card
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full card-hover tech-grid relative"
                data-testid={`service-card-${index}`}
              >
                <CardContent className="p-8">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                  <motion.a
                    href={service.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    data-testid={`service-link-${index}`}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Discover now
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/services">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                data-testid="view-all-services"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
