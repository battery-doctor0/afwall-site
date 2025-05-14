
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BatteryCharging, Zap, Thermometer, ShieldCheck } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BatteryCharging size={32} className="text-primary" />,
      title: "Real-time Monitoring",
      description: "Keep a close eye on your battery status, usage, and health with precise, real-time data.",
    },
    {
      icon: <Zap size={32} className="text-primary" />,
      title: "One-Tap Optimization",
      description: "Instantly boost your battery life by closing background apps and optimizing system settings.",
    },
    {
      icon: <ShieldCheck size={32} className="text-primary" />,
      title: "App Power Usage Control",
      description: "Identify and manage power-hungry apps to prevent unnecessary drain and extend usage time.",
    },
    {
      icon: <Thermometer size={32} className="text-primary" />,
      title: "CPU Cooler",
      description: "Prevent overheating and improve performance by effectively cooling down your phone's CPU.",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="py-16 md:py-24 w-full max-w-7xl mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">Powerful Features, Simple Control</h2>
      <p className="text-center text-purple-300 mb-16 md:mb-20 max-w-2xl mx-auto text-lg">
        Battery Doctor is packed with tools to enhance your phone's battery life and performance, all while ensuring your data remains private and secure.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(128, 90, 213, 0.3)" }}
            className="h-full"
          >
            <Card className="glassmorphism-card h-full text-gray-200 border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 flex flex-col">
              <CardHeader className="items-center text-center pt-8">
                <motion.div
                  className="feature-icon-bg mb-5 p-5 rounded-full inline-block bg-purple-600/30 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {React.cloneElement(feature.icon, {size: 36})}
                </motion.div>
                <CardTitle className="text-2xl font-semibold text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <CardDescription className="text-purple-300 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
  