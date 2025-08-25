import { ArrowRight, Database, BarChart3, Cloud, Smartphone, Shield, CheckCircle, Zap, Users, Target, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useRef, useState, useEffect } from "react";

export default function DetailedServicesSection() {
  const mainServices = [
    {
      id: "data-engineering",
      icon: <Database className="w-12 h-12 text-white" />,
      title: "Data Engineering",
      subtitle: "Supercharging your data infrastructure with lightning-fast insights",
      description: "We run all kinds of data services that ensure your success with modern data warehouse modernization, real-time data onboarding, and comprehensive data governance.",
      primaryColor: "#22c55e", // emerald-500
      secondaryColor: "#14b8a6", // teal-500
      textColor: "text-emerald-500",
      features: [
        {
          title: "Data Warehouse Modernization",
          icon: "🏗️",
          details: [
            "Real Time / Near Realtime data ingestion Lambda and Kappa Architecture",
            "Low Code/No Code Data Pipelines",
            "Real Time Monitoring with Alerting",
            "Cloud Scaling AWS, Azure, Google",
            "REST, Micro services ingestions and egression",
            "Dimensional data Modeling / Data Vault data modeling",
            "Cloud Migrations with Cost optimized Data Pipelines",
            "Agile DataOps Services expertise",
            "Strong expertise with Azure Synapse, Data bricks, Snowflake, Redshift"
          ]
        },
        {
          title: "Real Time Data Onboarding",
          icon: "⚡",
          details: [
            "Batch/Micro batch/Complex Events (CEP)/Stream data processing",
            "Event Driven Micro services Integration",
            "CDC (Change Data capture) IOT Data Ingestions",
            "IIOT/IOT Digital twins setup for real-time sensor data",
            "Digital Twins solutions in Healthcare, Manufacturing, Energy",
            "Apache kafka, Spark, Hbase, Kudu, Flink expertise",
            "Azure Event-Hubs, Logic Functions, Power Automate (RPA)",
            "AWS Kinesis, SQS, AWS Lambda functions integrations"
          ]
        },
        {
          title: "Data Governance & Data Observability",
          icon: "🛡️",
          details: [
            "Modern Data Catalogs, Active Meta Data cycles",
            "Data Lineage, schema Lineage, SQL query visual lineage",
            "Async/sync Data Quality Rules with Reverse ETL mechanism",
            "Data driven Data Quality embedded across pipelines",
            "Data Mesh /Data Fabric data lakes setup",
            "Secured Data Sharing and Access Audits",
            "Real Time Data Anomalies, data drift with AI ML",
            "Root cause Analysis and Impact Assessment"
          ]
        },
        {
          title: "Unique MDM Implementation",
          icon: "🎯",
          details: [
            "Real Time MDM implementation expertise",
            "MDM with Data quality integrated",
            "AIML based Data Deduplication/record Linkage",
            "Hybrid MDM style, integrable to any apps",
            "Preferred vendor for famous MDM product implementations",
            "Custom on-prem MDM frameworks and solutions"
          ]
        }
      ],
      specialties: [
        "DevOps with CI/CD",
        "Knowledge Graph and Graph Analytics", 
        "Data Catalog and Lineage Discovery Platform",
        "Open MetaData Management"
      ]
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-12 h-12 text-white" />,
      title: "Analytics",
      subtitle: "Everyone in your organization can make an impact with AI",
      description: "CST Cloud AI helps solve your most important business problems end-to-end with prepackaged solutions, putting AI in the hands of those closest to your business.",
      primaryColor: "#3b82f6", // blue-500
      secondaryColor: "#06b6d4", // cyan-500
      textColor: "text-blue-500",
      features: [
        {
          title: "Modern Data Analytics",
          icon: "📊",
          details: [
            "High performance NOSQL data Modeling",
            "High performance transactional database design",
            "Real Time Dimensional/OLAP Data Modeling (Kimball, Inmon, Data Vault)",
            "Re-Engineering, Reverse Engineering Data Architecture",
            "Cloud Migrations with Data Mesh and data Governance",
            "Smart KPI/KLI/KRI Framework",
            "Domain expertise: Banking, Auto Insurance, Property, Healthcare, Pharma, Utilities, Telecom"
          ]
        },
        {
          title: "AI/ML Analytics Engineering",
          icon: "🤖",
          details: [
            "AI ML including Graph-Analytics, Deep learning Models with MLOPS",
            "Analytics as Service with real-time delivery",
            "Unique real Time KPI, KRI Framework integrations",
            "IOT and Edge AI integration",
            "Discover Outlier events, Anomalies, Risk in Real Time",
            "Modern AI Automation with MLOPS Delivery"
          ]
        },
        {
          title: "Process Mining Analytics",
          icon: "⚙️",
          details: [
            "Real Time process-mining expertise",
            "Process Mining as Service (Rest API, Real Time Alerts)",
            "Discovery Conformance, Workflow optimizations",
            "Operations research and optimization",
            "BPM Management and Optimization"
          ]
        }
      ],
      specialties: [
        "Advanced AI with Cloud AutoML",
        "Experts in deployed AI solutions",
        "Explainable AI and Inclusive ML",
        "Contact Center AI integration"
      ]
    },
    {
      id: "cloud-services",
      icon: <Cloud className="w-12 h-12 text-white" />,
      title: "Cloud Services",
      subtitle: "Preparing for your success with prominent cloud solutions",
      description: "We offer a complete range of cloud services designed to protect your infrastructure, applications and data while providing scalable, cost-effective solutions.",
      primaryColor: "#8b5cf6", // purple-500
      secondaryColor: "#8b5cf6", // violet-500
      textColor: "text-purple-500",
      features: [
        {
          title: "AWS/Azure/GCP Cloud Infrastructure",
          icon: "☁️",
          details: [
            "Cloud Infrastructure Administration Services",
            "Multi-cloud architecture and deployment",
            "Cost optimization and FinOps strategies",
            "High Availability and Disaster Recovery",
            "Cloud scaling and performance optimization",
            "Infrastructure as Code (IaC) implementation"
          ]
        },
        {
          title: "Enterprise Architecture & Consulting",
          icon: "🏛️",
          details: [
            "Enterprise Architecture consulting services",
            "Digital transformation roadmaps",
            "Technology strategy and planning",
            "System integration and modernization",
            "Architecture governance and standards"
          ]
        },
        {
          title: "Modern Data Visualization & Reporting",
          icon: "📈",
          details: [
            "Real-time dashboards and reporting",
            "Interactive data visualization platforms",
            "Business Intelligence solutions",
            "Self-service analytics tools",
            "Custom reporting frameworks"
          ]
        }
      ],
      specialties: [
        "Product Management as a Service",
        "Project Management as a Service",
        "DBA as a Service",
        "Cloud Migration and Optimization"
      ]
    },
    {
      id: "app-services",
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: "App Services",
      subtitle: "Modern application development and deployment solutions",
      description: "Comprehensive application development services including web apps, mobile applications, and microservices architecture with cutting-edge technologies.",
      primaryColor: "#ec4899", // pink-500
      secondaryColor: "#f43f5e", // rose-500
      textColor: "text-pink-500",
      features: [
        {
          title: "Reactive and Progressive Web Apps",
          icon: "🌐",
          details: [
            "Modern web Apps solutions with scaling, HA/DR",
            "Performance and cost optimization",
            "Micro Front-Ends architecture",
            "App modernizations and upgrades",
            "Cross platform upgrades and migrations",
            "WEB RTC expertise for real-time communication",
            "React Js, Flutter, Angular tool set expertise"
          ]
        },
        {
          title: "Mobile Apps Development",
          icon: "📱",
          details: [
            "Native iOS development (Apple Mac OS)",
            "Native Android application development",
            "Cross platform Mobile App development",
            "Hybrid mobile application solutions",
            "Mobile app performance optimization",
            "App store deployment and maintenance"
          ]
        },
        {
          title: "Micro Services",
          icon: "🔧",
          details: [
            "Micro Services with 'Service Mesh' architecture",
            "Cloud – Server less Micro Services",
            "Agile Micro Services with CI/CD pipelines",
            "Kubernetes driven containerized solutions",
            "Reactive Micro services with Scala, Go and Rust",
            "Rust with Rocket framework development",
            "Spring boot including Cloud integrations",
            "Flask/Fast API rapid API development"
          ]
        }
      ],
      specialties: [
        "Cross-platform development",
        "API-first architecture",
        "Container orchestration",
        "Serverless computing"
      ]
    },
    {
      id: "it-services",
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "IT Services",
      subtitle: "Comprehensive IT management and security solutions",
      description: "Full-spectrum IT services to manage, secure, and optimize your technology infrastructure with advanced security measures and business transformation strategies.",
      primaryColor: "#f97316", // orange-500
      secondaryColor: "#f59e0b", // amber-500
      textColor: "text-orange-500",
      features: [
        {
          title: "IT Management",
          icon: "⚙️",
          details: [
            "Comprehensive IT infrastructure management",
            "Server management and transformation",
            "Network administration and optimization",
            "System monitoring and maintenance",
            "IT service desk and support"
          ]
        },
        {
          title: "Data Security",
          icon: "🔒",
          details: [
            "Database backup and secure storage solutions",
            "Data encryption and protection strategies",
            "Access control and authentication systems",
            "Security audit and compliance management",
            "Incident response and recovery planning"
          ]
        },
        {
          title: "Business Reform",
          icon: "🚀",
          details: [
            "Feasible and practical business transformation plans",
            "Process optimization and automation",
            "Digital transformation strategies",
            "Change management and adoption",
            "ROI analysis and business case development"
          ]
        },
        {
          title: "Infrastructure & Security",
          icon: "🛡️",
          details: [
            "Infrastructure planning with budget considerations",
            "Advanced firewall configuration and management",
            "Desktop computing and endpoint management",
            "Network security and monitoring",
            "Cybersecurity threat detection and prevention"
          ]
        }
      ],
      specialties: [
        "Cybersecurity consulting",
        "Infrastructure modernization",
        "Business continuity planning",
        "IT governance and compliance"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discussion",
      description: "We meet customers in set place to discuss the details about needs and demands before proposing a plan.",
      primaryColor: "#8b5cf6", // purple-500
      secondaryColor: "#3b82f6" // blue-500
    },
    {
      number: "02", 
      title: "Ideas & Concepts",
      description: "Our experts come up with all kinds of ideas and initiatives for delivering the best solutions for IT services chosen.",
      primaryColor: "#3b82f6", // blue-500
      secondaryColor: "#06b6d4" // cyan-500
    },
    {
      number: "03",
      title: "Testing & Trying", 
      description: "After agreeing on the ideas and plans, we will conduct as scheduled and give comments on the results & adaptations.",
      primaryColor: "#06b6d4", // cyan-500
      secondaryColor: "#22c55e" // emerald-500
    },
    {
      number: "04",
      title: "Execute & Install",
      description: "Once the final plan is approved, everything will be conducted according to the agreed contract.",
      primaryColor: "#22c55e", // emerald-500
      secondaryColor: "#f97316" // orange-500
    }
  ];

  const stats = [
    { number: "1970+", label: "Happy Clients" },
    { number: "491+", label: "Finished Projects" }, 
    { number: "245+", label: "Skilled Experts" },
    { number: "1090+", label: "Media Posts" }
  ];

  // Track mouse position for spotlight effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Handle mouse move for spotlight effect
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 detailed-services-section">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated Background Effects */}
        <motion.div 
          className="absolute inset-0 bg-[#120F26]"
          style={{ y: backgroundY }}
        />
        
        {/* Radial gradient spotlight */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[200%] h-[200%] pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 30%, transparent 70%)",
            x: "-50%",
            y: "-50%",
          }}
        />
        
        {/* Mouse-following spotlight */}
        {isHovering && (
          <motion.div 
            className="absolute pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              left: mousePosition.x,
              top: mousePosition.y,
              width: 600,
              height: 600,
              borderRadius: "50%",
              background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
        
        {/* Grid pattern overlay */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            style={{ y: textY, opacity: fadeIn }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Services We <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-black">Deliver</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-200/80 max-w-4xl mx-auto font-normal leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Preparing for your success with innovative IT solutions and cutting-edge technologies
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center relative group perspective-1000"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Services */}
      {mainServices.map((service, serviceIndex) => (
        <motion.section 
          key={service.id}
          className={`py-16 relative overflow-hidden ${serviceIndex % 2 === 0 ? 'bg-gradient-to-br from-slate-900 to-purple-900' : 'bg-gradient-to-br from-purple-900 to-blue-900'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  `radial-gradient(circle at 30% 30%, ${service.primaryColor}30 0%, transparent 60%)`,
                  `radial-gradient(circle at 70% 70%, ${service.secondaryColor}30 0%, transparent 60%)`,
                  `radial-gradient(circle at 30% 30%, ${service.primaryColor}30 0%, transparent 60%)`
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Grid pattern */}
            <motion.div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
            
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, -40, -10],
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Service Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg glossy"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.6 }}
                style={{ 
                  background: `linear-gradient(135deg, ${service.primaryColor} 0%, ${service.secondaryColor} 100%)`,
                  boxShadow: `0 10px 30px -10px ${service.primaryColor}50`
                }}
              >
                {service.icon}
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h2>
              <p className={`text-lg ${service.textColor} mb-4 font-medium`}>
                {service.subtitle}
              </p>
              <p className="text-base text-gray-300/80 max-w-3xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            {/* Service Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              {service.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                  className="perspective-1000"
                >
                  <motion.div
                    whileHover={{ 
                      y: -5, 
                      boxShadow: `0 20px 40px -20px ${service.primaryColor}50`,
                      borderImage: `linear-gradient(135deg, ${service.primaryColor}50, ${service.secondaryColor}50) 1`
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card className="h-full border border-white/5 shadow-lg bg-white/5 backdrop-blur-sm overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-6">
                          <span className="text-2xl mr-4">{feature.icon}</span>
                          <h3 className="text-xl font-bold text-white leading-tight">{feature.title}</h3>
                        </div>
                        <div className="space-y-3">
                          {feature.details.slice(0, 5).map((detail, detailIndex) => (
                            <motion.div 
                              key={detailIndex}
                              className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-200"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: detailIndex * 0.05 }}
                            >
                              <CheckCircle className="w-5 h-5 text-white/80 mr-3 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                              <span className="text-gray-300/90 leading-relaxed text-sm group-hover:text-white/90 transition-colors">{detail}</span>
                            </motion.div>
                          ))}
                          {feature.details.length > 5 && (
                            <p className="text-xs text-gray-400 italic">+ {feature.details.length - 5} more capabilities</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Specialties */}
            <motion.div 
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Additional Specialties</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {service.specialties.map((specialty, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="px-3 py-1 text-sm font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors rounded-full"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      ))}

      {/* Process Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large spotlight */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 30%, transparent 70%)",
            }}
          />
          
          {/* Grid pattern */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              How <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">We Work</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300/80 max-w-4xl mx-auto leading-relaxed">
              Our proven 4-step process ensures successful project delivery and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group perspective-1000"
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white font-bold text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300 glossy"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ 
                    background: `linear-gradient(135deg, ${step.primaryColor} 0%, ${step.secondaryColor} 100%)`,
                    boxShadow: `0 10px 30px -10px ${step.primaryColor}80`
                  }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300/80 leading-relaxed text-lg">
                  {step.description}
                </p>
                <motion.div 
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ height: 0 }}
                  whileHover={{ height: 'auto' }}
                >
                  <div className="h-0.5 w-10 mx-auto bg-gradient-to-r from-purple-400 to-blue-400"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient rays */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -80, -20],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Subtle glow effect behind title */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 rounded-full blur-3xl -z-10 opacity-20"
              style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
            />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-300/90 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how our expert team can help you achieve your technology goals with innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="perspective-1000"
              >
                <Button 
                  size="lg"
                  className="px-10 py-5 bg-white text-[#2D2076] hover:bg-gray-100 font-semibold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group glossy"
                  onClick={() => window.location.href = "/contact"}
                >
                  <Users className="mr-4 h-7 w-7 group-hover:scale-110 transition-transform" />
                  Get Free Consultation
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="perspective-1000"
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-10 py-5 border-3 border-white text-white hover:bg-white/10 font-semibold text-xl rounded-2xl transition-all duration-300 group backdrop-blur-sm"
                  onClick={() => window.location.href = "/about"}
                >
                  <Target className="mr-4 h-7 w-7 group-hover:scale-110 transition-transform" />
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-16 text-purple-900 opacity-30"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.61,2.61,191.87,27.57,321.39,56.44Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </motion.section>
    </div>
  );
}
