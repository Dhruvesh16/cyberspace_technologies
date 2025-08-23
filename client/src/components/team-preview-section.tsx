import { motion } from "motion/react";

export default function TeamPreviewSection() {
  // Show only the first 4 team members for the home page preview
  const teamMembers = [
    {
      name: "Sateesh Kumar Segu",
      role: "Founder & CEO",
      bio: "Sateesh has a strong business acumen and is able to identify new business opportunities and develop strategies.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2024/05/Sateesh-Pic-1.png",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Don Adams", 
      role: "VP Software and Automation Engineering",
      bio: "Don has end-to-end knowledge and experience in the Automation and AI implementation space.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2024/05/Don-Image-1.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Patrick Herman",
      role: "Business Development and Transformation Leader", 
      bio: "Patrick brings 25 years of experience with Accenture, Avanade and Deloitte.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/5-50x42.png",
      gradient: "from-green-500 to-blue-500"
    },
    {
      name: "Venkata Nandipati",
      role: "VP - Technology Delivery & Innovation",
      bio: "Venkata is a visionary tech leader with 25+ years of experience in IT strategy.",
      image: "https://cyberspaceinc.com/wp-content/uploads/2025/05/6-50x42.png", 
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <motion.section 
      id="team-preview"
      className="py-20 relative overflow-hidden"
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
          <motion.h2 className="text-4xl md:text-5xl team-title mb-4">
            Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-black">Team</span>
          </motion.h2>
          <motion.p className="text-xl team-desc max-w-3xl mx-auto">
            Talented professionals united by a passion for innovation and excellence
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
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
                className="bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 text-center shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-500"
                whileHover={{ y: -15, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl group-hover:shadow-xl group-hover:shadow-purple-500/50 overflow-hidden`}
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
                  <motion.h3 className="text-xl team-card-name mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {member.name}
                  </motion.h3>
                  <motion.p className={`text-sm team-card-role mb-3`}>
                    {member.role}
                  </motion.p>
                </motion.div>

                <motion.p className="team-card-bio text-sm mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {member.bio}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View Full Team Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="/team"
            className="luna-button inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Full Team</span>
            <motion.svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
