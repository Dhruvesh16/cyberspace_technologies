import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "motion/react";
import { Target, Users, Rocket, Download, ExternalLink, Shield, Globe, TrendingUp, Award, Clock, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About
              </span>{" "}
              Us
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Our IT services ensure Your Success
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: <Clock className="w-8 h-8" />, number: "22+", label: "Years Experience" },
                { icon: <Users className="w-8 h-8" />, number: "500+", label: "Clients Served" },
                { icon: <Globe className="w-8 h-8" />, number: "50+", label: "Countries" },
                { icon: <Award className="w-8 h-8" />, number: "99%", label: "Success Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-purple-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About US Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  About
                </span>{" "}
                CyberSpace Technologies
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We at CST absolutely understand the criticality of data protection and the importance of building secure applications without compromising the functionality and business goals.
              </p>
              <div className="space-y-4">
                {[
                  "Data Protection & Security",
                  "Innovative IT Solutions",
                  "24/7 Support & Monitoring",
                  "Proven Track Record"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="luna-card p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Shield className="w-12 h-12 text-purple-400" />, title: "Secure", desc: "Enterprise-grade security protocols" },
                    { icon: <TrendingUp className="w-12 h-12 text-cyan-400" />, title: "Scalable", desc: "Solutions that grow with your business" },
                    { icon: <Globe className="w-12 h-12 text-purple-400" />, title: "Global", desc: "Worldwide service coverage" },
                    { icon: <Award className="w-12 h-12 text-cyan-400" />, title: "Certified", desc: "Industry-recognized expertise" }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 22 Years Experience Section */}
      <motion.section 
        className="py-20 relative overflow-hidden bg-gradient-to-r from-purple-900/10 to-cyan-900/10"
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
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                22
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              YEARS' EXPERIENCE IN IT
            </h2>
            <h3 className="text-xl font-semibold text-cyan-400 mb-12">
              More About Our Success Stories
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2 luna-card p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Cyber Space Technologies is a leading IT solutions provider in the United States. We collaborate with industry experts to deliver innovative solutions to complex business challenges. Our services, including Cloud FinOps, Migration, ManageIT, Big Data, Data Science, Business Intelligence, Machine Learning, Artificial Intelligence, and Cyber Security, empower our clients to uncover the value of their data.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {[
                { label: "Data Science Projects", value: "200+" },
                { label: "Cloud Migrations", value: "150+" },
                { label: "Security Implementations", value: "300+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="luna-card p-4 text-center"
                >
                  <div className="text-2xl font-bold text-purple-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Resources Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
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
            <h2 className="text-4xl font-bold text-white mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                RESOURCES
              </span>
            </h2>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Get a copy of our Services at CyberSpace
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="https://cyberspaceinc.com/wp-content/uploads/2025/01/CYBER-SPACE-JAN-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="luna-button inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="mr-2 w-5 h-5" />
                Download Our PDF
              </motion.a>
              <motion.a
                href="http://cyspacetech.com/wp-content/uploads/2024/05/Cyber-Space-Solutioning-Overview.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="luna-button inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="mr-2 w-5 h-5" />
                Solutions Overview
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why US Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
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
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                WHY CHOOSE
              </span>{" "}
              CYBERSPACE?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three key pillars that set us apart in the competitive IT landscape
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: "Proven Effective Methods",
                shortDesc: "Data-driven solutions with proven track record",
                description: "Clients come to us because of our expertise in data and analytics, digital transformation, and cyber security. We offer comprehensive solutions that help organizations make data-driven decisions, optimize digital operations, and protect against cyber threats.",
                gradient: "from-purple-500/20 to-cyan-500/20",
                iconColor: "text-purple-400"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Team & Innovation",
                shortDesc: "Dedicated professionals creating breakthrough solutions",
                description: "Our dedicated staff and consultants look beyond the status quo to create ground-breaking innovations and new collaborations. We take charge of your company's challenges, rethinking how business solutions can open new markets.",
                gradient: "from-cyan-500/20 to-purple-500/20",
                iconColor: "text-cyan-400"
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Collaborative Partnership",
                shortDesc: "Strategic partnerships delivering measurable ROI",
                description: "Clients value our highly skilled team of experts in their respective fields. We invest in R&D to stay at the forefront of technology, delivering solutions that provide measurable results and ROI for our clients.",
                gradient: "from-purple-500/20 to-cyan-500/20",
                iconColor: "text-purple-400"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <motion.div 
                  className="luna-card p-8 h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={item.iconColor}>
                      {item.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4 text-sm">
                    {item.shortDesc}
                  </p>
                  <p className="text-gray-300 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Get In Touch Section */}
      <motion.section 
        className="py-20 relative overflow-hidden bg-gradient-to-r from-purple-900/20 to-cyan-900/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join 500+ companies worldwide who trust CyberSpace Technologies for their IT transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="/contact"
                className="luna-button inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Consultation
              </motion.a>
              <motion.a
                href="tel:+1-555-0123"
                className="luna-button inline-flex items-center px-10 py-5 border-2 border-purple-500 text-purple-400 font-bold text-lg rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
