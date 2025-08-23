import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <motion.section 
      id="contact"
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
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your next project
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div className="luna-card p-8" whileHover={{ y: -5 }}>
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message *</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  className="luna-button w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                We're here to help you transform your ideas into reality.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div className="luna-card p-6" whileHover={{ y: -5, x: 5 }}>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-400">support@cyberspaceinc.com</p>
              </motion.div>
              
              <motion.div className="luna-card p-6" whileHover={{ y: -5, x: 5 }}>
                <h4 className="text-lg font-semibold text-white mb-1">US Office</h4>
                <p className="text-gray-400">2015 RT 27 South, Suite #234</p>
                <p className="text-gray-400">Edison, NJ 08817</p>
                <p className="text-gray-400">4300 Punjab Way, STE 280</p>
                <p className="text-gray-400">Frisco, TX 75033</p>
                <p className="text-cyan-400 mt-2">+1 732-515-9299</p>
              </motion.div>
              
              <motion.div className="luna-card p-6" whileHover={{ y: -5, x: 5 }}>
                <h4 className="text-lg font-semibold text-white mb-1">India Office</h4>
                <p className="text-gray-400">Suite #414, Manjeera Magestic Commercial</p>
                <p className="text-gray-400">JNTU-HITech City Road</p>
                <p className="text-gray-400">Hyderabad-500085, India</p>
                <p className="text-cyan-400 mt-2">+91 9182273913</p>
              </motion.div>
              
              <motion.div className="luna-card p-6" whileHover={{ y: -5, x: 5 }}>
                <h4 className="text-lg font-semibold text-white mb-1">UK Office</h4>
                <p className="text-gray-400">71-75 Shelton Street, Covent Garden</p>
                <p className="text-gray-400">London, United Kingdom, WC2H 9JQ</p>
                <p className="text-cyan-400 mt-2">+44 7770695162</p>
              </motion.div>
              
              <motion.div className="luna-card p-6" whileHover={{ y: -5, x: 5 }}>
                <h4 className="text-lg font-semibold text-white mb-1">Canada Office</h4>
                <p className="text-gray-400">2279 Mckay Avenue</p>
                <p className="text-gray-400">Windsor, Ontario, N9B3W6, Canada</p>
                <p className="text-cyan-400 mt-2">+1 (519) 984-7976</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
