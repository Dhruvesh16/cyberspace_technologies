import { motion } from "motion/react";
import { ArrowRight, Database, BarChart3, Cloud, Smartphone, Settings, Shield, CheckCircle, Users, Cpu, Globe, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Data Engineering",
      description: "Supercharge your data infrastructure and data onboarding process with lightning-fast insights and precision strategies deployed.",
      icon: Database,
      color: "from-blue-500 to-purple-500",
      features: [
        "Data Warehouse Modernization",
        "Real Time Data Onboarding", 
        "Data Governance & Data Observability",
        "Unique MDM Implementation"
      ],
      detailedFeatures: [
        "Real Time / Near Realtime data ingestion Lambda and Kappa Architecture",
        "Low Code/No Code Data Pipelines",
        "Real Time Monitoring with Alerting",
        "Cloud Scaling AWS, Azure, Google",
        "REST, Micro services ingestions and Micro Services (REST API) Egression",
        "Dimensional data Modeling / Data Vault data modeling",
        "Cloud Migrations with Cost optimized Data Pipelines",
        "Agile DataOps Services expertise"
      ],
      technologies: ["Apache Kafka", "Spark", "HBase", "Kudu", "Flink", "Azure Event-Hubs", "AWS Kinesis", "Snowflake", "Databricks"]
    },
    {
      id: 2,
      title: "Analytics",
      description: "Transform your data into actionable insights with AI-powered analytics and business intelligence solutions.",
      icon: BarChart3,
      color: "from-green-500 to-blue-500",
      features: [
        "Modern Data Analytics",
        "AI/ML Analytics Engineering",
        "Process Mining Analytics",
        "Contact Center AI"
      ],
      detailedFeatures: [
        "High performance NOSQL data Modeling",
        "Real Time Dimensional/OLAP Data Modeling (Kimball, Inmon, Data Vault Models)",
        "Re-Engineering, Reverse Engineering Data Architecture",
        "Cloud Migrations (Data Mesh with data Governance)",
        "Smart KPI/KLI/KRI Framework",
        "AI ML including Graph-Analytics, Deep learning Models with MLOPS",
        "Real Time process-mining expertise",
        "Discovery Conformance, Workflow optimizations"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Power BI", "Tableau", "Python", "R", "AutoML"]
    },
    {
      id: 3,
      title: "Cloud Services",
      description: "Comprehensive cloud solutions including infrastructure management, migration, and optimization across AWS, Azure, and GCP.",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      features: [
        "AWS/Azure/GCP Cloud Infrastructure",
        "Enterprise Architecture Consulting",
        "Cloud Migration Services",
        "Product/Project Management as Service"
      ],
      detailedFeatures: [
        "Cloud strategy and architecture design",
        "Infrastructure as Code implementation",
        "Multi-cloud management and optimization",
        "Cloud security and compliance",
        "DevOps and CI/CD pipeline setup",
        "Cost optimization and FinOps",
        "Disaster recovery and backup solutions",
        "Microservices architecture"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Jenkins", "GitLab CI"]
    },
    {
      id: 4,
      title: "App Services",
      description: "End-to-end application development services including mobile apps, web applications, and microservices architecture.",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      features: [
        "Mobile Apps Development",
        "Reactive and Progressive Web Apps",
        "Microservices Architecture",
        "Modern Data Visualization"
      ],
      detailedFeatures: [
        "Native iOS and Android development",
        "Cross-platform mobile solutions",
        "Progressive Web Applications (PWA)",
        "React and Angular web applications",
        "API development and integration",
        "Microservices and containerization",
        "Real-time applications with WebSocket",
        "Modern UI/UX design"
      ],
      technologies: ["React Native", "Flutter", "React", "Angular", "Node.js", "Spring Boot", ".NET Core", "MongoDB"]
    },
    {
      id: 5,
      title: "IT Services",
      description: "Complete IT infrastructure management, cybersecurity solutions, and digital transformation services.",
      icon: Settings,
      color: "from-teal-500 to-blue-500",
      features: [
        "Cybersecurity Solutions",
        "DBA as Service",
        "IT Infrastructure Management",
        "Digital Transformation"
      ],
      detailedFeatures: [
        "24/7 IT support and monitoring",
        "Database administration and optimization",
        "Network security and firewall management",
        "Backup and disaster recovery",
        "IT consulting and strategy",
        "Legacy system modernization",
        "Compliance and risk management",
        "Technology training and support"
      ],
      technologies: ["VMware", "Citrix", "Microsoft 365", "Oracle", "SQL Server", "PostgreSQL", "MongoDB", "Redis"]
    }
  ];

  const stats = [
    { number: "1970", label: "Happy Clients" },
    { number: "491", label: "Finished Projects" },
    { number: "245", label: "Skilled Experts" },
    { number: "1090", label: "Media Posts" }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We offer a range of solutions and services that include Data Engineering and Analytics, 
              Cloud FinOps, Migration, GenAI and other cutting-edge technologies to support your organization.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/">
                <Button variant="outline" className="mr-4">
                  Back to Home
                </Button>
              </Link>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preparing for your success, we provide truly prominent IT solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-all duration-300 group`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How We Work Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discussion",
                description: "We meet customers in set place to discuss the details about needs and demands before proposing a plan."
              },
              {
                step: "02", 
                title: "Ideas & Concepts",
                description: "Our experts come up with all kinds of ideas and initiatives for delivering the best solutions for IT services chosen."
              },
              {
                step: "03",
                title: "Testing & Trying", 
                description: "After agreeing on the ideas and plans, we will conduct as scheduled and give comments on the results & adaptations."
              },
              {
                step: "04",
                title: "Execute & Install",
                description: "Once the final plan is approved, everything will be conducted according to the agreed contract."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-blue-50 to-purple-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reach out to the world's most reliable IT services. Get a free consultation today.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 font-semibold">
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/#contact">
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 px-8 py-3 font-semibold hover:border-blue-600 hover:text-blue-600">
                  Contact Us Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
