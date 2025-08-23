import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: "Johnson & Johnson",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/johnson.jpg",
      category: "Healthcare"
    },
    {
      name: "Client Logo 2",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/2.-Logo.png",
      category: "Technology"
    },
    {
      name: "Client Logo 3", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/3.-Logo.png",
      category: "Finance"
    },
    {
      name: "IDEXX",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/idexx.jpg",
      category: "Veterinary Technology"
    },
    {
      name: "Client Logo 5",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/5.-Logo.png",
      category: "Technology"
    },
    {
      name: "Newell Brands",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/newell.jpg",
      category: "Consumer Goods"
    },
    {
      name: "Verisk",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/04/verisk.png",
      category: "Data Analytics"
    }
  ];

  const partners = [
    {
      name: "Deloitte",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/deloitte.jpg",
      category: "Consulting"
    },
    {
      name: "Mphasis",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/mphasis.jpg",
      category: "IT Services"
    },
    {
      name: "Atos",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/atos.jpg",
      category: "Digital Transformation"
    },
    {
      name: "Tech Mahindra",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tech-mahindra.jpg",
      category: "Technology Services"
    },
    {
      name: "Virtusa",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/virtusa.jpg",
      category: "Digital Engineering"
    },
    {
      name: "Wipro",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/wipro.jpg",
      category: "IT Consulting"
    },
    {
      name: "Tavant",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tavant.jpg",
      category: "Software Solutions"
    },
    {
      name: "Apexon",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/apexon.jpg",
      category: "Digital Engineering"
    },
    {
      name: "CRISIL",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/crisil.jpg",
      category: "Financial Analytics"
    },
    {
      name: "Partner Logo 11",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/P11-Logo.png",
      category: "Technology"
    },
    {
      name: "Partner Logo U1",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2025/01/U-.1.png",
      category: "Services"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed as needed

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after a delay
    const timeoutId = setTimeout(() => {
      autoScroll();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const LogoCard = ({ logo, name, category, index }: { logo: string; name: string; category: string; index: number }) => (
    <motion.div
      className="flex-shrink-0 bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
      style={{ width: '200px', height: '120px' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <div className="h-16 flex items-center justify-center mb-2">
          <img 
            src={logo} 
            alt={name}
            className="max-h-full max-w-full object-contain filter hover:grayscale-0 grayscale transition-all duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        <p className="text-xs text-gray-500 text-center font-medium">{category}</p>
      </div>
    </motion.div>
  );

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
              Our <span className="gradient-text">Clients & Partners</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're proud to work with industry-leading companies and trusted partners 
              who share our commitment to innovation and excellence.
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
                Become a Partner
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by Fortune 500 companies and industry leaders worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <LogoCard
                key={client.name}
                logo={client.logo}
                name={client.name}
                category={client.category}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with leading technology and consulting companies.
            </p>
          </motion.div>

          {/* Auto-scrolling partners */}
          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide"
              style={{ 
                scrollBehavior: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Duplicate the partners array for seamless scrolling */}
              {[...partners, ...partners].map((partner, index) => (
                <LogoCard
                  key={`${partner.name}-${index}`}
                  logo={partner.logo}
                  name={partner.name}
                  category={partner.category}
                  index={index % partners.length}
                />
              ))}
            </div>
          </div>

          {/* Static grid for better accessibility */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {partners.map((partner, index) => (
              <LogoCard
                key={partner.name}
                logo={partner.logo}
                name={partner.name}
                category={partner.category}
                index={index}
              />
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
            Want to Partner With Us?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our network of trusted partners and help us deliver exceptional solutions to clients worldwide.
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
                Become a Partner
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/#contact">
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 px-8 py-3 font-semibold hover:border-blue-600 hover:text-blue-600">
                  Contact Us
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
