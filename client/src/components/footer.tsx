import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        "Data Engineering",
        "Cloud Solutions", 
        "AI & Machine Learning",
        "Cybersecurity",
        "Digital Transformation"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Partners",
        "Case Studies"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Whitepapers",
        "Documentation",
        "Support",
        "Contact"
      ]
    }
  ];

  return (
    <motion.footer 
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-950" />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(173, 58, 255, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(66, 99, 235, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    CyberSpace
                  </span>
                  <span className="text-white"> Technologies</span>
                </h3>
              </motion.div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium">
                Transforming businesses with cutting-edge technology solutions. We deliver innovation that drives growth and success.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
                  <Mail className="w-4 h-4 text-purple-400" />
                  support@cyberspaceinc.com
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  +1 732-515-9299
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  Edison, NJ • Hyderabad, India
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  London, UK • Windsor, Canada
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/cyberspace-technologies-llc", color: "hover:text-purple-400" },
                  { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
                  { icon: Github, href: "#", color: "hover:text-purple-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-slate-800 border-2 border-purple-400/30 flex items-center justify-center text-gray-300 ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <motion.a
                        href="#"
                        className="text-white/80 hover:text-purple-400 transition-colors text-sm font-medium"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
                    <motion.div 
            className="border-t border-purple-400/20 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/80 text-sm font-medium">
                © 2025 Cyber Space Technologies. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/80 hover:text-purple-400 transition-colors text-sm font-medium">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors text-sm font-medium">
                  Terms of Service
                </a>
                <motion.button
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-full bg-slate-800 border-2 border-purple-400/30 flex items-center justify-center text-purple-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
