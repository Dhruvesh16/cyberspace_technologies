import { Zap, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gray-50"
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
            data-testid="about-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What We <span className="gradient-text">Offer</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600" 
            data-testid="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our company values and vision
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -8 }}
          >
            <Card className="bg-white rounded-2xl shadow-lg border-0" data-testid="mission-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900" data-testid="mission-title">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed" data-testid="mission-description">
                  Our mission at Cyber Space Technologies is to empower organizations to make data-driven decisions, optimize their digital operations, and protect against cyber threats through innovative solutions in data and analytics, digital transformation, and cyber security.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ y: -8 }}
          >
            <Card className="bg-white rounded-2xl shadow-lg border-0" data-testid="vision-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900" data-testid="vision-title">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed" data-testid="vision-description">
                  Our vision is to be the leading provider of Data & Analytics, Cloud FinOps, Cloud Migration and Cyber Security Solutions, empowering organizations to unlock the full potential of their data and protect against cyber threats.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
