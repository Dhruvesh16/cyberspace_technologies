import { useState } from "react";
import { Menu, X, Globe, Zap, Users, Mail, Info, Briefcase, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (item: any) => {
    // Always navigate to separate pages
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: "Home", path: "/", id: "home", icon: <Globe className="w-4 h-4" /> },
    { name: "About", path: "/about", id: "about", icon: <Info className="w-4 h-4" /> },
    { name: "Services", path: "/services", id: "services", icon: <Zap className="w-4 h-4" /> },
    { name: "Team", path: "/team", id: "team", icon: <Users className="w-4 h-4" /> },
    { name: "Partners", path: "/partners", id: "partners", icon: <HandHeart className="w-4 h-4" /> },
    { name: "Careers", path: "/careers", id: "careers", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", id: "contact", icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Logo Image */}
                <motion.img
                  src="/images/logo.png"
                  alt="CyberSpace Technologies"
                  className="w-12 h-12 rounded-xl shadow-lg object-contain bg-white"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Pulsing ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-cyber-blue/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </div>
              
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800 group-hover:text-cyber-blue transition-colors duration-300">
                  CyberSpace
                </h1>
                <p className="text-sm text-gray-500 font-medium">Technologies</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const isActive = location === item.path;
              
              // Always use Link for navigation to separate pages
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium group transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "text-cyber-blue bg-cyber-blue/10" 
                        : "text-gray-700 hover:text-cyber-blue hover:bg-cyber-blue/5"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={`transition-colors duration-300 ${
                      isActive ? "text-cyber-purple" : "group-hover:text-cyber-purple"
                    }`}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/contact">
              <Button
                className="px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-blue text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-2 gap-3">
                {navigationItems.map((item, index) => {
                  const isActive = location === item.path;
                  return (
                    <Link key={item.path} href={item.path}>
                      <motion.div
                        className={`flex items-center space-x-3 p-4 rounded-xl font-medium group text-left w-full transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? "text-cyber-blue bg-cyber-blue/10" 
                            : "text-gray-700 hover:text-cyber-blue hover:bg-cyber-blue/5"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className={`transition-colors duration-300 ${
                          isActive ? "text-cyber-purple" : "group-hover:text-cyber-purple"
                        }`}>
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
              
              <motion.div 
                className="mt-6 pt-6 border-t border-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link href="/contact">
                  <Button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-blue text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
