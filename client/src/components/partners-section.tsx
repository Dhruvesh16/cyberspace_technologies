import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    // Clients
    {
      name: "Johnson & Johnson",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/johnson.jpg",
      type: "client"
    },
    {
      name: "Client Logo 2",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/2.-Logo.png",
      type: "client"
    },
    {
      name: "Client Logo 3", 
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/3.-Logo.png",
      type: "client"
    },
    {
      name: "IDEXX",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/idexx.jpg",
      type: "client"
    },
    {
      name: "Client Logo 5",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/5.-Logo.png",
      type: "client"
    },
    {
      name: "Newell Brands",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/newell.jpg",
      type: "client"
    },
    {
      name: "Verisk",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/04/verisk.png",
      type: "client"
    },
    // Partners
    {
      name: "Deloitte",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/deloitte.jpg",
      type: "partner"
    },
    {
      name: "Mphasis",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/mphasis.jpg",
      type: "partner"
    },
    {
      name: "Atos",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/atos.jpg",
      type: "partner"
    },
    {
      name: "Tech Mahindra",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tech-mahindra.jpg",
      type: "partner"
    },
    {
      name: "Virtusa",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/virtusa.jpg",
      type: "partner"
    },
    {
      name: "Wipro",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/wipro.jpg",
      type: "partner"
    },
    {
      name: "Tavant",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/tavant.jpg",
      type: "partner"
    },
    {
      name: "Apexon",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/apexon.jpg",
      type: "partner"
    },
    {
      name: "CRISIL",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2023/02/crisil.jpg",
      type: "partner"
    },
    {
      name: "Partner Logo 11",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2024/05/P11-Logo.png",
      type: "partner"
    },
    {
      name: "Partner Logo U1",
      logo: "https://cyberspaceinc.com/wp-content/uploads/2025/01/U-.1.png",
      type: "partner"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed as needed

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      // When we reach halfway through the duplicated content, reset to beginning
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after component mounts
    const timeoutId = setTimeout(() => {
      autoScroll();
    }, 1000);

    // Pause scrolling on hover
    const handleMouseEnter = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    const handleMouseLeave = () => {
      autoScroll();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('mouseenter', handleMouseEnter);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.section 
      id="partners" 
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
            data-testid="partners-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="gradient-text">Clients & Partners</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto" 
            data-testid="partners-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're proud to serve Fortune 500 clients and partner with industry leaders 
            who trust us to deliver innovative technology solutions.
          </motion.p>
        </motion.div>

        {/* Auto-scrolling partner logos */}
        <motion.div 
          className="relative overflow-hidden mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide"
            style={{ 
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Duplicate the partners array for seamless infinite scrolling */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ width: '180px', height: '100px' }}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-full flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain filter hover:grayscale-0 grayscale opacity-70 hover:opacity-100 transition-all duration-300"
                    data-testid={`partner-logo-${index}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/partners">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                data-testid="view-all-partners"
              >
                View All Partners
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
