import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "motion/react";
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase,
  DollarSign,
  Heart,
  Trophy,
  Globe,
  Coffee,
  Laptop,
  Mail,
  ExternalLink,
  CheckCircle,
  Building,
  Phone,
  Target,
  Award
} from "lucide-react";

// Job openings data
const jobOpenings = [
  {
    id: 1,
    title: "Senior Data Engineer",
    department: "Data Engineering",
    location: "Edison, NJ / Remote",
    type: "Full-time",
    experience: "5-8 years",
    salary: "$80,000 - $120,000",
    description: "Design and implement scalable data pipelines and infrastructure for large-scale data processing.",
    requirements: [
      "5+ years of experience in data engineering",
      "Proficiency in Python, SQL, and big data technologies",
      "Experience with Apache Spark, Kafka, or Airflow",
      "Knowledge of cloud platforms (AWS, Azure, GCP)",
      "Strong problem-solving and analytical skills"
    ]
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "Frisco, TX / Remote",
    type: "Full-time",
    experience: "7-10 years",
    salary: "$100,000 - $140,000",
    description: "Design and implement cloud architecture solutions for enterprise clients.",
    requirements: [
      "7+ years of cloud architecture experience",
      "AWS/Azure/GCP certifications preferred",
      "Experience with infrastructure as code",
      "Strong understanding of networking and security",
      "Excellent communication and client-facing skills"
    ]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "App Services",
    location: "Hyderabad, India / Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$50,000 - $80,000",
    description: "Develop and maintain web applications using modern technologies and frameworks.",
    requirements: [
      "3+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud services and DevOps practices",
      "Strong understanding of software development lifecycle"
    ]
  },
  {
    id: 4,
    title: "Business Intelligence Analyst",
    department: "Analytics",
    location: "London, UK / Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "£45,000 - £65,000",
    description: "Analyze business data and create insights to drive strategic decision-making.",
    requirements: [
      "2+ years of BI/analytics experience",
      "Proficiency in SQL, Power BI, or Tableau",
      "Strong analytical and problem-solving skills",
      "Experience with data modeling and visualization",
      "Excellent presentation and communication skills"
    ]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "IT Services",
    location: "Windsor, Canada / Remote",
    type: "Full-time",
    experience: "4-6 years",
    salary: "CAD $75,000 - $105,000",
    description: "Implement and maintain CI/CD pipelines and infrastructure automation.",
    requirements: [
      "4+ years of DevOps/infrastructure experience",
      "Experience with Docker, Kubernetes, and Jenkins",
      "Knowledge of Linux systems and shell scripting",
      "Experience with monitoring tools",
      "Strong automation and configuration management skills"
    ]
  }
];

// Company benefits
const companyBenefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, and vision coverage for you and your family."
  },
  {
    icon: Laptop,
    title: "Remote Work",
    description: "Flexible work arrangements with the option to work remotely or from our global offices."
  },
  {
    icon: Trophy,
    title: "Learning & Growth",
    description: "Professional development budget, certification support, and continuous learning opportunities."
  },
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Market competitive salaries with performance bonuses and stock option plans."
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible working hours, unlimited PTO, and a supportive work environment."
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work with international teams and clients across four continents."
  }
];

// Company locations
const locations = [
  {
    country: "United States",
    offices: [
      {
        city: "Edison, NJ",
        address: "2015 RT 27 South, STE 234, Edison, NJ 08817",
        phone: "+1 732-515-9299"
      },
      {
        city: "Frisco, TX", 
        address: "4300 Punjab Way, STE 280, Frisco, TX 75033",
        phone: "+1 732-515-9299"
      }
    ]
  },
  {
    country: "India",
    offices: [
      {
        city: "Hyderabad",
        address: "Suite # 414, Manjeera Magestic Commercial, JNTU-HITech City Road, Hyderabad-500085",
        phone: "+91 9182273913"
      }
    ]
  },
  {
    country: "United Kingdom",
    offices: [
      {
        city: "London",
        address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
        phone: "+44 7770695162"
      }
    ]
  },
  {
    country: "Canada",
    offices: [
      {
        city: "Windsor",
        address: "2279 Mckay Avenue, Windsor, Ontario, N9B3W6",
        phone: "+1 (519) 984-7976"
      }
    ]
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 relative overflow-hidden"
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
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Careers
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Join a dynamic team of innovators and help shape the future of technology
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: <Users className="w-6 h-6" />, number: "22+", label: "Years Experience" },
                { icon: <Globe className="w-6 h-6" />, number: "4", label: "Global Offices" },
                { icon: <Target className="w-6 h-6" />, number: "500+", label: "Clients Served" },
                { icon: <Award className="w-6 h-6" />, number: "99%", label: "Success Rate" }
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
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Work With Us */}
      <motion.section 
        className="py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Work With <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">CyberSpace?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We offer a collaborative environment where innovation thrives and careers flourish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <motion.div 
                  className="luna-card p-6 text-center h-full"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Current Openings */}
      <motion.section 
        className="py-16 relative overflow-hidden bg-gradient-to-r from-purple-900/10 to-cyan-900/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Current Openings
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore exciting opportunities to grow your career with us
            </p>
          </motion.div>

          <div className="grid gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <motion.div 
                  className="luna-card p-6"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-sm text-cyan-400 font-medium">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <motion.a
                      href="/contact"
                      className="luna-button inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 self-start text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply Now
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          + {job.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Locations */}
      <motion.section 
        className="py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Global Locations</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Work from any of our offices around the world or remotely
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div 
                  className="luna-card p-4 h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-3">
                    <Globe className="w-5 h-5 text-purple-400 mr-2" />
                    <h3 className="text-lg font-bold text-white">{location.country}</h3>
                  </div>
                  <div className="space-y-3">
                    {location.offices.map((office, idx) => (
                      <div key={idx} className="border-l-2 border-purple-500/30 pl-3">
                        <div className="flex items-center mb-1">
                          <Building className="w-4 h-4 text-cyan-400 mr-2" />
                          <h4 className="font-semibold text-white text-sm">{office.city}</h4>
                        </div>
                        <p className="text-gray-400 text-xs mb-1">{office.address}</p>
                        <div className="flex items-center text-gray-400 text-xs">
                          <Phone className="w-3 h-3 mr-1" />
                          {office.phone}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 relative overflow-hidden bg-gradient-to-r from-purple-900/20 to-cyan-900/20"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                className="luna-button inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Resume
                <Mail className="ml-2 w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:careers@cyberspaceinc.com"
                className="luna-button inline-flex items-center px-6 py-3 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Email Us
                <ExternalLink className="ml-2 w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
