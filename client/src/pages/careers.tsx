import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Link } from "wouter";
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
  Calendar,
  Mail,
  ExternalLink,
  CheckCircle
} from "lucide-react";

// 🔧 EASY UPDATE SECTION - Update job openings here
const jobOpenings = [
  {
    id: 1,
    title: "Senior Data Engineer",
    department: "Data Engineering",
    location: "Remote / Hyderabad, India",
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
    ],
    benefits: ["Health Insurance", "Remote Work", "Learning Budget", "Stock Options"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "App Services",
    location: "Edison, NJ / Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$70,000 - $100,000",
    description: "Develop and maintain web applications using modern technologies and frameworks.",
    requirements: [
      "3+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud services and DevOps practices",
      "Strong understanding of software development lifecycle"
    ],
    benefits: ["Health Insurance", "Flexible Hours", "Professional Development", "401(k)"]
  },
  {
    id: 3,
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
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Strong understanding of networking and security",
      "Excellent communication and client-facing skills"
    ],
    benefits: ["Health Insurance", "Certification Support", "Travel Opportunities", "Bonus"]
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
    ],
    benefits: ["Health Insurance", "Remote Work", "Training Budget", "Pension"]
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
      "Experience with monitoring tools (Prometheus, Grafana)",
      "Strong automation and configuration management skills"
    ],
    benefits: ["Health Insurance", "Remote Work", "Equipment Budget", "RRSP"]
  }
];

// 🔧 EASY UPDATE SECTION - Update company benefits here
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

// 🔧 EASY UPDATE SECTION - Update company values here
const companyValues = [
  {
    title: "Innovation",
    description: "We foster creativity and embrace cutting-edge technologies to solve complex challenges."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and building strong relationships with our clients."
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do and continuously improve our services."
  },
  {
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical business practices."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
                Join Our Team
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Build Your <span className="gradient-text">Career</span> With Us
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join a dynamic team of innovators and help shape the future of technology. 
                We're looking for talented individuals who are passionate about making a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View Open Positions
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Work <span className="gradient-text">With Us?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we provide a platform for growth, innovation, and meaningful impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6 text-center">
                      <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Current <span className="gradient-text">Openings</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover exciting opportunities to grow your career with us
              </p>
            </motion.div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {job.title}
                            </h3>
                            <Badge variant="secondary">{job.department}</Badge>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.experience}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4">{job.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                            <ul className="space-y-1">
                              {job.requirements.slice(0, 3).map((req, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-6 lg:mt-0 lg:ml-6">
                          <Button 
                            size="lg" 
                            className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            asChild
                          >
                            <Link href="/contact">
                              <Mail className="mr-2 h-4 w-4" />
                              Apply Now
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* No Current Openings Message (uncomment if needed) */}
            {/* 
            {jobOpenings.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  No Current Openings
                </h3>
                <p className="text-gray-600 mb-6">
                  We don't have any open positions at the moment, but we're always interested in connecting with talented professionals.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Send Us Your Resume
                  </Link>
                </Button>
              </motion.div>
            )}
            */}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and define our company culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Take the next step in your career and become part of our innovative team. 
                We'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact HR
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Our Culture
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
