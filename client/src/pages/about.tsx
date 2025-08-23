import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Link } from "wouter";
import { 
  Shield, 
  Globe, 
  Users, 
  Trophy,
  Target,
  Heart,
  MapPin,
  Phone,
  Download,
  CheckCircle,
  BarChart3,
  Cloud,
  Database,
  Cpu
} from "lucide-react";

export default function About() {
  const stats = [
    { number: "22+", label: "Years of Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "4", label: "Global Offices" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We absolutely understand the criticality of data protection and building secure applications without compromising functionality."
    },
    {
      icon: Target,
      title: "Proven Methods",
      description: "Efficient methods of approach that have already been proven effective in delivering successful IT solutions."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Superb abilities and expertise with dedicated staff and consultants who look beyond the status quo."
    },
    {
      icon: Heart,
      title: "Client Partnership",
      description: "We collaborate with clients to create ground-breaking innovations and new business solutions."
    }
  ];

  const services = [
    {
      icon: Database,
      name: "Data Engineering",
      description: "Transform raw data into actionable insights"
    },
    {
      icon: BarChart3,
      name: "Analytics",
      description: "Advanced analytics and business intelligence"
    },
    {
      icon: Cloud,
      name: "Cloud Services",
      description: "Cloud migration and optimization solutions"
    },
    {
      icon: Cpu,
      name: "App Services",
      description: "Custom application development and maintenance"
    }
  ];

  const locations = [
    {
      country: "United States",
      address: "2015 RT 27 South, STE 234, Edison, NJ 08817",
      address2: "4300 Punjab Way, STE 280, Frisco, TX 75033",
      phone: "+1 732-515-9299"
    },
    {
      country: "India",
      address: "Suite # 414, Manjeera Magestic Commercial, JNTU-HITech City Road, Hyderabad-500085",
      phone: "+91 9182273913"
    },
    {
      country: "United Kingdom",
      address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
      phone: "+44 7770695162"
    },
    {
      country: "Canada",
      address: "2279 Mckay Avenue, Windsor, Ontario, N9B3W6",
      phone: "+1 (519) 984-7976"
    }
  ];

  const whyChooseUs = [
    "Expertise in data and analytics, digital transformation, and cyber security",
    "Comprehensive range of solutions tailored to meet specific client needs",
    "Cutting-edge solutions that help organizations make data-driven decisions",
    "Highly skilled and experienced team of experts",
    "Investment in research and development to stay at the forefront of technology",
    "Proven track record of delivering measurable results and ROI"
  ];

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
                About CyberSpace Technologies
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Leading <span className="gradient-text">IT Solutions</span> Provider
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                With 22+ years of experience, we collaborate with industry experts to deliver 
                innovative solutions to complex business challenges, empowering clients to 
                uncover the value of their data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <a href="/CYBER-SPACE-JAN-2025.pdf" download="CyberSpace-Services-2025.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download Services PDF
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Our <span className="gradient-text">Services Overview</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Download our comprehensive services brochure to learn more about our 
                data engineering, analytics, cloud services, and IT solutions.
              </p>
              <div className="mb-4">
                <a 
                  href="/CYBER-SPACE-JAN-2025.pdf" 
                  download="CyberSpace-Services-2025.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '16px 32px',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    border: '2px solid #2563eb'
                  }}
                >
                  Download Services PDF
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                PDF • 2025 Edition • Comprehensive Services Overview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Cyber Space Technologies is a leading IT solutions provider in the United States. 
                We collaborate with industry experts to deliver innovative solutions to complex business challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our IT Services Ensure Your Success
                </h3>
                <p className="text-gray-600 mb-6">
                  Our services, including Cloud FinOps, Migration, ManageIT, Big Data, Data Science, 
                  Business Intelligence, Machine Learning, Artificial Intelligence, and Cyber Security, 
                  empower our clients to uncover the value of their data.
                </p>
                <p className="text-gray-600 mb-6">
                  The demands of a competitive market necessitate a highly complex transformation of the 
                  technology landscape. Our dedicated staff and consultants look beyond the status quo to 
                  create ground-breaking innovations and new collaborations.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {services.map((service, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6 text-center">
                      <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

      {/* Why Choose Us Section */}
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
                Why <span className="gradient-text">Choose Us</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Clients come to us because of our expertise in data and analytics, digital 
                transformation, and cyber security.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
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
                Our <span className="gradient-text">Global Presence</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Serving clients worldwide with offices across multiple continents
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Globe className="h-6 w-6 text-blue-600 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          {location.country}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-600">{location.address}</p>
                        </div>
                        {location.address2 && (
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                            <p className="text-sm text-gray-600">{location.address2}</p>
                          </div>
                        )}
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-400 mr-2" />
                          <p className="text-sm text-gray-600">{location.phone}</p>
                        </div>
                      </div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Reach out to the world's most reliable IT services. Get a free consultation 
                and discover how we can help your organization succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
                <a 
                  href="/CYBER-SPACE-JAN-2025.pdf" 
                  download="CyberSpace-Services-2025.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 24px',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '9999px',
                    fontSize: '16px',
                    fontWeight: '500',
                    border: '2px solid #ffffff',
                    minHeight: '44px',
                    transition: 'all 0.2s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
