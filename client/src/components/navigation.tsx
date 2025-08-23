import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (sectionId: string, route?: string) => {
    setIsMobileMenuOpen(false);
    
    if (route && location !== route) {
      // Navigate to the route
      return route;
    } else if (location === "/" || location === route) {
      // Scroll to section if on the correct page
      scrollToSection(sectionId);
      return null;
    } else {
      // Navigate to home with hash
      return `/#${sectionId}`;
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 border-b border-gray-100 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/90 backdrop-blur-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link href="/">
                <img
                  src="https://cyberspaceinc.com/wp-content/uploads/2023/03/cst-logo-2-180x108.png"
                  alt="Cyber Space Technologies"
                  className="h-10 w-auto cursor-pointer"
                  data-testid="logo"
                />
              </Link>
            </motion.div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/"
                    className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    data-testid="nav-home"
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/services"
                    className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    data-testid="nav-services"
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/about"
                    className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    data-testid="nav-about"
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/team"
                    className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    data-testid="nav-team"
                  >
                    Our Team
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/partners"
                    className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    data-testid="nav-partners"
                  >
                    Partners
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/careers"
                    className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    data-testid="nav-careers"
                  >
                    Careers
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact"
                    className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    data-testid="nav-contact"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+17325159299"
                className="hidden sm:inline-flex text-sm text-gray-600 hover:text-blue-600 transition-colors"
                data-testid="phone-link"
              >
                +1 (732) 515-9299
              </a>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  data-testid="cta-button"
                >
                  <Link href="/contact">
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                    data-testid="mobile-nav-home"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/services"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                    data-testid="mobile-nav-services"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                    data-testid="mobile-nav-about"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/team"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                    data-testid="mobile-nav-team"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/partners"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                    data-testid="mobile-nav-partners"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Partners
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/careers"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                    data-testid="mobile-nav-careers"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Careers
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                    data-testid="mobile-nav-contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
