import { ArrowRight, Database, BarChart3, Cloud, Smartphone, Shield, CheckCircle, Zap, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export default function DetailedServicesSection() {
  const mainServices = [
    {
      id: "data-engineering",
      icon: <Database className="w-12 h-12 text-cyber-green" />,
      title: "Data Engineering",
      subtitle: "Supercharging your data infrastructure with lightning-fast insights",
      description: "We run all kinds of data services that ensure your success with modern data warehouse modernization, real-time data onboarding, and comprehensive data governance.",
      gradient: "from-emerald-500 to-teal-500",
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
      icon: <BarChart3 className="w-12 h-12 text-cyber-blue" />,
      title: "Analytics",
      subtitle: "Everyone in your organization can make an impact with AI",
      description: "CST Cloud AI helps solve your most important business problems end-to-end with prepackaged solutions, putting AI in the hands of those closest to your business.",
      gradient: "from-blue-500 to-cyan-500",
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
      icon: <Cloud className="w-12 h-12 text-cyber-purple" />,
      title: "Cloud Services",
      subtitle: "Preparing for your success with prominent cloud solutions",
      description: "We offer a complete range of cloud services designed to protect your infrastructure, applications and data while providing scalable, cost-effective solutions.",
      gradient: "from-purple-500 to-violet-500",
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
      icon: <Smartphone className="w-12 h-12 text-cyber-pink" />,
      title: "App Services",
      subtitle: "Modern application development and deployment solutions",
      description: "Comprehensive application development services including web apps, mobile applications, and microservices architecture with cutting-edge technologies.",
      gradient: "from-pink-500 to-rose-500",
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
      icon: <Shield className="w-12 h-12 text-cyber-orange" />,
      title: "IT Services",
      subtitle: "Comprehensive IT management and security solutions",
      description: "Full-spectrum IT services to manage, secure, and optimize your technology infrastructure with advanced security measures and business transformation strategies.",
      gradient: "from-orange-500 to-amber-500",
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
      description: "We meet customers in set place to discuss the details about needs and demands before proposing a plan."
    },
    {
      number: "02", 
      title: "Ideas & Concepts",
      description: "Our experts come up with all kinds of ideas and initiatives for delivering the best solutions for IT services chosen."
    },
    {
      number: "03",
      title: "Testing & Trying", 
      description: "After agreeing on the ideas and plans, we will conduct as scheduled and give comments on the results & adaptations."
    },
    {
      number: "04",
      title: "Execute & Install",
      description: "Once the final plan is approved, everything will be conducted according to the agreed contract."
    }
  ];

  const stats = [
    { number: "1970+", label: "Happy Clients" },
    { number: "491+", label: "Finished Projects" }, 
    { number: "245+", label: "Skilled Experts" },
    { number: "1090+", label: "Media Posts" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50/80 via-white to-cyber-purple/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Services We <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-teal bg-clip-text text-transparent font-black">Deliver</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-normal leading-relaxed"
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
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent mb-2 group-hover:from-cyber-blue group-hover:to-cyber-purple transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Services */}
      {mainServices.map((service, serviceIndex) => (
        <motion.section 
          key={service.id}
          className={`py-16 relative overflow-hidden ${serviceIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
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
                className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {service.title}
              </h2>
              <p className="text-lg text-cyber-blue mb-4 font-medium">
                {service.subtitle}
              </p>
              <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <span className="text-2xl mr-4">{feature.icon}</span>
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">{feature.title}</h3>
                      </div>
                      <div className="space-y-3">
                        {feature.details.slice(0, 5).map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex}
                            className="flex items-start group hover:bg-gray-50/50 p-2 rounded-lg transition-all duration-200"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: detailIndex * 0.05 }}
                          >
                            <CheckCircle className="w-5 h-5 text-cyber-green mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed text-sm">{detail}</span>
                          </motion.div>
                        ))}
                        {feature.details.length > 5 && (
                          <p className="text-xs text-gray-500 italic">+ {feature.details.length - 5} more capabilities</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Specialties */}
            <motion.div 
              className="text-center bg-gray-50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Specialties</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {service.specialties.map((specialty, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="px-3 py-1 text-sm font-medium bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 hover:bg-cyber-blue/20 transition-colors rounded-full"
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
        className="py-24 bg-gradient-to-br from-cyber-purple/5 via-white to-cyber-blue/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              How <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">We Work</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                className="text-center group"
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyber-purple to-cyber-pink flex items-center justify-center mx-auto mb-8 text-white font-bold text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 group-hover:text-cyber-purple transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-24 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how our expert team can help you achieve your technology goals with innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="px-10 py-5 bg-white text-cyber-purple hover:bg-gray-100 font-semibold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                onClick={() => window.location.href = "/contact"}
              >
                <Users className="mr-4 h-7 w-7 group-hover:scale-110 transition-transform" />
                Get Free Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-10 py-5 border-3 border-white text-white hover:bg-white hover:text-cyber-purple font-semibold text-xl rounded-2xl transition-all duration-300 group"
                onClick={() => window.location.href = "/about"}
              >
                <Target className="mr-4 h-7 w-7 group-hover:scale-110 transition-transform" />
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
