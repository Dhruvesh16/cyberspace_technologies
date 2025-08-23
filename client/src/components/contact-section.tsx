import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "motion/react";

interface ContactForm {
  name: string;
  email: string;
  inquiry: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    inquiry: "",
    message: ""
  });

  const { toast } = useToast();

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", inquiry: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.inquiry || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    submitContactMutation.mutate(formData);
  };

  const offices = [
    {
      title: "US Headquarters",
      address: ["2015 RT 27 South, STE 234, Edison, NJ 08817", "4300 Punjab Way, STE 280, Frisco, TX 75033"],
      phone: "+1 732-515-9299",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "India Office",
      address: ["Suite # 414, Manjeera Magestic Commercial", "JNTU-HITech City Road, Hyderabad-500085"],
      phone: "+91 9182273913", 
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "UK Office",
      address: ["71-75 Shelton Street, Covent Garden", "London, United Kingdom, WC2H 9JQ"],
      phone: "+44 7770695162",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Canada Office",
      address: ["2279 Mckay Avenue", "Windsor, Ontario, N9B3W6, Canada"],
      phone: "+1 (519) 984-7976",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  const inquiryOptions = [
    "Data Engineering",
    "Analytics", 
    "App Services",
    "IT Services",
    "Management Services",
    "Cloud Services",
    "Cyber Security",
    "Integration Services"
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-white"
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
            data-testid="contact-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600" 
            data-testid="contact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Reach out to the world's most reliable IT services
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100" data-testid="contact-form-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" data-testid="contact-form-title">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Enter your name"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Enter your email"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="inquiry" className="text-sm font-medium text-gray-700 mb-2">
                    Your Inquiry About
                  </Label>
                  <Select value={formData.inquiry} onValueChange={(value) => setFormData(prev => ({ ...prev, inquiry: value }))}>
                    <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" data-testid="select-inquiry">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project"
                    data-testid="textarea-message"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={submitContactMutation.isPending}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                    data-testid="submit-contact-form"
                  >
                    {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
            </Card>
          </motion.div>

          {/* Location Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6" 
              data-testid="offices-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Global Offices
            </motion.h3>
            
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card
                  className="bg-white rounded-xl shadow-sm border border-gray-100"
                  data-testid={`office-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className={`w-10 h-10 bg-gradient-to-r ${office.gradient} rounded-lg flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <MapPin className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1" data-testid={`office-title-${index}`}>
                          {office.title}
                        </h4>
                        {office.address.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-gray-600 text-sm" data-testid={`office-address-${index}-${lineIndex}`}>
                            {line}
                          </p>
                        ))}
                        <div className="flex items-center mt-2">
                          <Phone className="w-4 h-4 text-blue-600 mr-2" />
                          <p className="text-blue-600 text-sm font-medium" data-testid={`office-phone-${index}`}>
                            {office.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
