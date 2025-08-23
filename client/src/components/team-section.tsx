import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "wouter";
import { Users } from "lucide-react";

export default function TeamSection() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  const teamMembers = [
    {
      name: "Sateesh Kumar Segu",
      role: "Founder & CEO",
      bio: "Sateesh has a strong business acumen and is able to identify new business opportunities and develop strategies. He has more than two decades of experience providing services to clients.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2024/05/Sateesh-Pic-1.png",
      gradient: "from-cyber-blue to-cyber-purple"
    },
    {
      name: "Don Adams", 
      role: "VP Software and Automation Engineering",
      bio: "Don has end-to-end knowledge and experience in the Automation and AI implementation space with over 30 years of business process analysis.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2024/05/Don-Image-1.png",
      gradient: "from-cyber-purple to-cyber-pink"
    },
    {
      name: "Patrick Herman",
      role: "Business Development and Transformation Leader", 
      bio: "Patrick brings 25 years of experience with Accenture, Avanade and Deloitte, specializing in network, hybrid cloud, and app modernization.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/5-50x42.png",
      gradient: "from-cyber-green to-cyber-blue"
    },
    {
      name: "Venkata Nandipati",
      role: "VP - Technology Delivery & Innovation",
      bio: "Venkata is a visionary tech leader with 25+ years of experience in IT strategy, digital transformation, and global service delivery.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/6-50x42.png", 
      gradient: "from-cyber-orange to-cyber-pink"
    },
    {
      name: "Shruti Pattanshetti",
      role: "Director - Delivery & Operations",
      bio: "Shruti is a strong leader, capable of managing and mentoring team members and leading cross-functional teams in the delivery of complex solutions.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/01/2-50x42.png",
      gradient: "from-cyber-pink to-cyber-purple"
    },
    {
      name: "Yamini Sharma",
      role: "Client Partner",
      bio: "Yamini possesses strong communication and relationship building skills, which enable her to establish trust and credibility with clients.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/9-50x42.png",
      gradient: "from-cyber-blue to-cyber-purple"
    },
    {
      name: "Raju Yellaula",
      role: "Sales Director",
      bio: "As a Sales Director with over 21 years of experience, Raju specializes in driving business growth through staff augmentation and SOW-based project delivery.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/01/Raju-50x42.png",
      gradient: "from-cyber-green to-cyber-blue"
    },
    {
      name: "Sanchita Tiwari",
      role: "HR Manager - Operations",
      bio: "Sanchita is in charge of HR and operational services, making sure the office has a good vibe and maintaining a safe working environment.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/01/3-50x42.png",
      gradient: "from-cyber-pink to-cyber-orange"
    }
  ];

    // Determine which members to display based on the current route
  const displayedMembers = isHomePage ? teamMembers.slice(0, 4) : teamMembers;

  return (
    <motion.section 
      id="team"
      className="team-section py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold team-text mb-4">
            {isHomePage ? "Meet Our" : "Our"} <span className="team-accent bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">Team</span>
          </motion.h2>
          <motion.p className="text-xl team-text max-w-3xl mx-auto font-medium">
            {isHomePage 
              ? "Led by experienced professionals passionate about innovation" 
              : "Talented professionals united by a passion for innovation and excellence"
            }
          </motion.p>
        </motion.div>

        <div className={`grid ${isHomePage ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-8`}>
          {displayedMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group"
            >
              <motion.div 
                className="team-card bg-white/90 backdrop-blur-sm border-2 border-cyber-purple/30 rounded-2xl p-6 text-center group-hover:shadow-2xl group-hover:shadow-cyber-purple/30 transition-all duration-500"
                whileHover={{ y: -15, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl group-hover:shadow-xl group-hover:shadow-cyber-purple/50 overflow-hidden`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<span class="text-white font-bold text-xl">${member.name.split(' ').map(n => n[0]).join('')}</span>`;
                    }}
                  />
                </motion.div>

                <motion.div className="mb-4">
                  <motion.h3 className="text-xl font-bold team-card-name mb-2 group-hover:text-cyber-purple transition-colors duration-300">
                    {member.name}
                  </motion.h3>
                  <motion.p className={`text-sm font-medium team-card-role mb-3 text-cyber-blue`}>
                    {member.role}
                  </motion.p>
                </motion.div>

                <motion.p className="team-card-bio text-sm mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  {member.bio}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View Whole Team Button - Only show on home page */}
        {isHomePage && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/team">
              <Button 
                size="lg" 
                className="px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl font-semibold text-lg group bg-gradient-to-r from-cyber-purple to-cyber-pink hover:from-cyber-pink hover:to-cyber-purple transition-all duration-500 text-white border-0 transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #ad3aff 0%, #e84595 100%)",
                  boxShadow: "0 10px 25px rgba(173, 58, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                }}
              >
                <Users className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                View Whole Team
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
