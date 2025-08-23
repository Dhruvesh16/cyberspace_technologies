import { Linkedin } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="https://cyberspaceinc.com/wp-content/uploads/2023/03/cst-logo-2-180x108.png"
              alt="Cyber Space Technologies"
              className="h-12 w-auto mb-4 filter brightness-0 invert"
              data-testid="footer-logo"
            />
            <p className="text-gray-400 text-sm leading-relaxed" data-testid="footer-description">
              Empowering organizations with innovative solutions in data engineering, analytics, cloud services, and cyber security.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="https://www.linkedin.com/company/cyberspace-technologies-llc"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-linkedin"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-services-title">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-service-data-engineering">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-service-analytics">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-service-cloud">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-service-app">
                  App Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-service-it">
                  IT Services
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-company-title">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-team">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-clients">
                  Clients & Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">
              Contact
            </h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p data-testid="footer-address-line1">2015 RT 27 South, Suite #234</p>
              <p data-testid="footer-address-line2">Edison, NJ 08817</p>
              <p className="text-white font-medium" data-testid="footer-phone">
                +1 (732) 515-9299
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm" data-testid="footer-copyright">
            © 2025 Cyber Space Technologies. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
