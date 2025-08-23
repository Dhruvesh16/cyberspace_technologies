import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";

export default function Team() {
  const teamMembers = [
    {
      name: "Sateesh Kumar Segu",
      position: "Founder & CEO",
      image: "https://cyberspaceinc.com/wp-content/uploads/2024/05/Sateesh-Pic-1.png",
      gradient: "from-blue-500 to-purple-500",
      bio: "Sateesh has a strong business acumen and is able to identify new business opportunities and develop strategies. The people that work for him are inspired and encouraged by his principles and values. He has more than two decades of experience providing services to clients.",
      expertise: ["Strategic Leadership", "Business Development", "Digital Transformation", "Client Relations"],
      email: "sateesh@cyberspaceinc.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Don Adams", 
      position: "VP Software and Automation Engineering",
      image: "https://cyberspaceinc.com/wp-content/uploads/2024/05/Don-Image-1.png",
      gradient: "from-purple-500 to-pink-500",
      bio: "Don has end-to-end knowledge and experience in the Automation and AI implementation space and over 30 years of business process analysis and enterprise application development. From client engagement, process discovery and ROI feasibility analysis to technical design, development and operations and support, Don has provided Automation and AI best practices and standards that have delivered success for many businesses and organizations.",
      expertise: ["Automation Engineering", "AI Implementation", "Business Process Analysis", "Enterprise Development"],
      email: "don@cyberspaceinc.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Patrick Herman",
      position: "Business Development and Transformation Leader",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/5-50x42.png",
      gradient: "from-green-500 to-blue-500",
      bio: "Patrick brings 25 years of experience with Accenture, Avanade and Deloitte, including roles as Partner, Principal, and Managing Director. He has led infrastructure practices in network and hybrid cloud. Patrick has extensive experience in sales development and delivering complex projects across all sectors, specializing in network, hybrid cloud, and app modernization.",
      expertise: ["Business Transformation", "Hybrid Cloud", "Network Infrastructure", "App Modernization"],
      email: "patrick@cyberspaceinc.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Venkata Nandipati",
      position: "VP - Technology Delivery & Innovation",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/6-50x42.png",
      gradient: "from-orange-500 to-red-500",
      bio: "Venkata is a visionary tech leader with 25+ years of experience in IT strategy, digital transformation, and global service delivery. His expertise includes AI-driven modernization, cloud operations, and technology governance, aligning innovation with business goals. A strong collaborator, he excels in building high-performance teams, optimizing delivery, and fostering strategic partnerships for sustainable growth.",
      expertise: ["IT Strategy", "Digital Transformation", "AI-driven Modernization", "Technology Governance"],
      email: "venkata@cyberspaceinc.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Shruti Pattanshetti",
      position: "Director - Delivery & Operations",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/01/2-50x42.png",
      gradient: "from-red-500 to-purple-500",
      bio: "Shruti is a strong leader, capable of managing and mentoring team members and leading cross-functional teams in the delivery of complex solutions and services. She implements best practices, standards, and policies in delivery and operations to ensure customer satisfaction.",
      expertise: ["Operations Management", "Team Leadership", "Service Delivery", "Process Optimization"],
      email: "shruti@cyberspaceinc.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Yamini Sharma",
      position: "Client Partner",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/9-50x42.png",
      gradient: "from-indigo-500 to-purple-500",
      bio: "Yamini Sharma possesses strong communication and relationship building skills, which enable her to establish trust and credibility with clients. She is able to understand and articulate the value of the company's solutions and services to clients in terms that align with their specific business objectives.",
      expertise: ["Client Relations", "Business Communication", "Solution Articulation", "Relationship Building"],
      email: "yamini@cyberspaceinc.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Raju Yellaula",
      position: "Sales Director",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/01/Raju-50x42.png",
      gradient: "from-teal-500 to-blue-500",
      bio: "As a Sales Director with over 21 years of experience, I specialize in driving business growth through staff augmentation and SOW-based project delivery. My expertise lies in providing top-tier talent and customized solutions to meet the unique needs of clients in various industries, including IT, Supply Chain, SAP, Gen AI, Salesforce, and Data Engineering.",
      expertise: ["Sales Leadership", "Staff Augmentation", "Business Growth", "Client Solutions"],
      email: "raju@cyberspaceinc.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sanchita Tiwari",
      position: "HR Manager - Operations",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/01/3-50x42.png",
      gradient: "from-pink-500 to-rose-500",
      bio: "Sanchita is in charge of HR and other operational services, and she's also the one who makes sure the office has a good vibe. Maintaining the identity of the business or group, Maintain a safe and comfortable working environment for everyone. Watch over the administration of pay and perks.",
      expertise: ["Human Resources", "Operations Management", "Workplace Culture", "Employee Benefits"],
      email: "sanchita@cyberspaceinc.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Vijay Kumar Nukala",
      position: "Account Manager",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/01/4-50x42.png",
      gradient: "from-cyan-500 to-blue-500",
      bio: "I'm a Sr. Recruiter, having excellent experience to recruit IT professionals all over in the USA and giving excellent support to the client to fruit-fill their requirements. Having good experience in full life-cycle of Recruitment.",
      expertise: ["IT Recruitment", "Account Management", "Client Support", "Talent Acquisition"],
      email: "vijay@cyberspaceinc.com",
      linkedin: "#",
      twitter: "#"
    }
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
              Meet Our <span className="gradient-text">Expert Team</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our diverse team of experts brings together decades of experience in technology, 
              innovation, and digital transformation to deliver exceptional results for our clients.
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
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Join Our Team
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Members Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 h-full">
                  <CardContent className="p-6">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br ${member.gradient} p-1`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className={`font-semibold mb-3 text-center text-sm`} style={{
                      background: `linear-gradient(135deg, ${member.gradient.split(' ')[1]}, ${member.gradient.split(' ')[3]})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {member.position}
                    </p>
                    
                    <p className="text-gray-600 text-sm mb-4 text-center">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-3 pt-2">
                      {member.email && (
                        <motion.a 
                          href={`mailto:${member.email}`}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Mail className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.linkedin && (
                        <motion.a 
                          href={member.linkedin}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.twitter && (
                        <motion.a 
                          href={member.twitter}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Twitter className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.github && (
                        <motion.a 
                          href={member.github}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
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
            Want to Join Our Team?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're always looking for talented individuals who share our passion for technology and innovation.
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
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 font-semibold">
                View Open Positions
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/#contact">
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 px-8 py-3 font-semibold hover:border-blue-600 hover:text-blue-600">
                  Get In Touch
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
