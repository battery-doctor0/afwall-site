
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Brain, LockKeyhole, Gauge } from 'lucide-react';

const WhyChooseUsSection = () => {
  const whyChooseUs = [
    {
      icon: <Brain size={36} className="text-amber-400" />,
      title: "Intelligent Optimization",
      description: "Our advanced algorithms learn your usage habits for personalized optimization and maximum efficiency.",
    },
    {
      icon: <LockKeyhole size={36} className="text-green-400" />,
      title: "Privacy Guaranteed",
      description: "We respect your privacy. Battery Doctor works locally on your device without collecting personal data.",
    },
    {
      icon: <Gauge size={36} className="text-sky-400" />,
      title: "Enhanced Performance",
      description: "More than just battery saving, enjoy a faster, more responsive phone in your daily use.",
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
      className="py-16 md:py-24 bg-slate-900/40 w-full px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">Why Choose Battery Doctor?</h2>
      <p className="text-center text-purple-300 mb-16 md:mb-20 max-w-2xl mx-auto text-lg">
        Discover what makes Battery Doctor unique and why millions of users trust us to optimize their devices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {whyChooseUs.map((reason, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="glassmorphism-card h-full text-gray-200 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 p-6 flex flex-col items-center text-center">
              <motion.div
                className="p-4 rounded-full mb-6 inline-block bg-gradient-to-br from-purple-600/30 to-pink-600/30"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-purple-300 text-base">{reason.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
  