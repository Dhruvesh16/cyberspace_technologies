import { Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Link } from "wouter";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sateesh Kumar Segu",
      position: "Founder & CEO",
      image: "https://cyberspaceinc.com/wp-content/uploads/2024/05/Sateesh-Pic-1.png",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Don Adams", 
      position: "VP Software and Automation Engineering",
      image: "https://cyberspaceinc.com/wp-content/uploads/2024/05/Don-Image-1.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Patrick Herman",
      position: "Business Development and Transformation Leader",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/5-50x42.png",
      gradient: "from-green-500 to-blue-500"
    },
    {
      name: "Venkata Nandipati",
      position: "VP - Technology Delivery & Innovation",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/6-50x42.png",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section 
      id="team" 
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" 
            data-testid="team-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Experienced <span className="gradient-text">Experts</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto" 
            data-testid="team-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We offer a range of solutions and services that include Data Engineering and Analytics, Cloud FinOps, Migration, GenAI and other cutting-edge technologies.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <Card
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 text-center"
                data-testid={`team-member-${index}`}
              >
                <CardContent className="p-8">
                  <motion.div 
                    className={`w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br ${member.gradient} p-1`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover bg-white"
                      data-testid={`team-member-image-${index}`}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid={`team-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className={`font-semibold mb-4 ${index === 0 ? 'text-blue-600' : 'text-purple-600'}`} data-testid={`team-member-position-${index}`}>
                    {member.position}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <motion.a 
                      href="#" 
                      className={`text-gray-400 transition-colors ${index === 0 ? 'hover:text-blue-600' : 'hover:text-purple-600'}`}
                      data-testid={`team-member-linkedin-${index}`}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className={`text-gray-400 transition-colors ${index === 0 ? 'hover:text-blue-600' : 'hover:text-purple-600'}`}
                      data-testid={`team-member-twitter-${index}`}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                data-testid="team-join-cta"
              >
                Join us now
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/team">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  data-testid="team-view-all"
                >
                  View all team
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
