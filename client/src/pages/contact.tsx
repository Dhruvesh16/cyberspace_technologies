import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Globe,
  Building,
  Users,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const offices = [
    {
      country: "United States",
      company: "Cyber Space Technologies LLC.",
      addresses: [
        "2015 RT 27 South, Suite #234, Edison, NJ 08817",
        "4300 Punjab Way, STE 280, Frisco, TX 75033"
      ],
      email: "support@cyberspaceinc.com",
      phone: "+1 732-515-9299",
      flag: "🇺🇸",
      timezone: "EST/PST"
    },
    {
      country: "India",
      company: "Cyber Space Technologies Pvt. Ltd.",
      addresses: [
        "Suite #414, Manjeera Magestic Commercial, JNTU-HITech City Road, Hyderabad-500085"
      ],
      email: "support@cyberspaceinc.com",
      phone: "+91 9182273913",
      flag: "🇮🇳",
      timezone: "IST"
    },
    {
      country: "United Kingdom",
      company: "Cyber Space Technologies Ltd.",
      addresses: [
        "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ"
      ],
      email: "support@cyberspaceinc.com",
      phone: "+44 7770695162",
      flag: "🇬🇧",
      timezone: "GMT"
    },
    {
      country: "Canada",
      company: "Cyber Space Technologies Inc.",
      addresses: [
        "2279 Mckay Avenue, Windsor, Ontario, N9B3W6"
      ],
      email: "support@cyberspaceinc.com",
      phone: "+1 (519) 984-7976",
      flag: "🇨🇦",
      timezone: "EST"
    }
  ];

  const contactReasons = [
    {
      icon: Building,
      title: "Business Inquiries",
      description: "New partnerships and enterprise solutions"
    },
    {
      icon: Users,
      title: "Support",
      description: "Technical support and customer service"
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description: "International business opportunities"
    }
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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Reach out to the world's most reliable IT services. We're here to help 
                your organization succeed with innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Reasons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Can We <span className="gradient-text">Help You?</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6 text-center">
                      <reason.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-gray-600 mb-8">
                    For more information, please provide your contact details here. 
                    We will get back to you as soon as possible.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Your first name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Your last name"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="your.email@company.com"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 123-4567"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project or requirements..."
                        className="w-full h-32"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Contact Information
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Get a free consultation and discover how we can help your organization succeed.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <a 
                          href="mailto:support@cyberspaceinc.com"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          support@cyberspaceinc.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone (US)</h4>
                        <a 
                          href="tel:+17325159299"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          +1 732-515-9299
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Business Hours</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Ready to get started?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Get a free consultation to discuss your project requirements.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      Get Free Consultation
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
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
                Our <span className="gradient-text">Global Offices</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With offices across four continents, we're always close to our clients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <span className="text-3xl mb-2 block">{office.flag}</span>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {office.country}
                        </h3>
                        <p className="text-sm text-gray-500">{office.timezone}</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Company</h4>
                          <p className="text-sm text-gray-600">{office.company}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                          {office.addresses.map((address, idx) => (
                            <p key={idx} className="text-sm text-gray-600 mb-1">
                              {address}
                            </p>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-blue-600 mr-2" />
                            <a 
                              href={`tel:${office.phone.replace(/\s/g, '')}`}
                              className="text-sm text-blue-600 hover:text-blue-700"
                            >
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-blue-600 mr-2" />
                            <a 
                              href={`mailto:${office.email}`}
                              className="text-sm text-blue-600 hover:text-blue-700"
                            >
                              {office.email}
                            </a>
                          </div>
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
                Let's discuss how our innovative IT solutions can help drive your organization forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Schedule a Call
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View Our Services
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
