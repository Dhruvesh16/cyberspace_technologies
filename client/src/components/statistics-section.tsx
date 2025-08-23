import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function StatisticsSection() {
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    experts: 0,
    posts: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const finalStats = {
    clients: 1790,
    projects: 491,
    experts: 245,
    posts: 1090
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("statistics");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        clients: Math.floor(finalStats.clients * progress),
        projects: Math.floor(finalStats.projects * progress),
        experts: Math.floor(finalStats.experts * progress),
        posts: Math.floor(finalStats.posts * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats(finalStats);
      }
    }, stepDuration);
  };

  return (
    <motion.section 
      id="statistics" 
      className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div 
            data-testid="stat-clients"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div 
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
            >
              {stats.clients.toLocaleString()}
            </motion.div>
            <div className="text-cyan-300 font-medium">Happy Clients</div>
          </motion.div>
          <motion.div 
            data-testid="stat-projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div 
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
            >
              {stats.projects.toLocaleString()}
            </motion.div>
            <div className="text-cyan-300 font-medium">Finished Projects</div>
          </motion.div>
          <motion.div 
            data-testid="stat-experts"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div 
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
            >
              {stats.experts.toLocaleString()}
            </motion.div>
            <div className="text-cyan-300 font-medium">Skilled Experts</div>
          </motion.div>
          <motion.div 
            data-testid="stat-posts"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div 
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
            >
              {stats.posts.toLocaleString()}
            </motion.div>
            <div className="text-cyan-300 font-medium">Media Posts</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
