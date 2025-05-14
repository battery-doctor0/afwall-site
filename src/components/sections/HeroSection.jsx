
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ShieldCheck, Star } from 'lucide-react';

const HeroSection = ({ appLogoUrl, apkDownloadLink }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="w-full hero-bg-gradient py-24 md:py-40 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect x="0" y="0" width="100%" height="100%" fill="none"/><path d="M10-2.5L20 .5 30-2.5L40 .5M0 7.5L10 10.5L20 7.5L30 10.5L40 7.5M0 17.5L10 20.5L20 17.5L30 20.5L40 17.5M0 27.5L10 30.5L20 27.5L30 30.5L40 27.5"  strokeWidth="1" stroke="hsla(262, 83%, 58%, 0.3)" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(#hero-pattern)"/></svg>
      </div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <img src={appLogoUrl} alt="Battery Doctor Logo" className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-8 rounded-3xl shadow-2xl border-4 border-white/60" />
      </motion.div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Extend Your <span className="text-gradient">Battery Life</span><br/> with Smart Optimization
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-purple-200 mb-12 max-w-2xl mx-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Optimize battery, reduce background power consumption, and improve phone performance. Battery Doctor: Where privacy meets performance.
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 150 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 text-white font-bold text-xl py-5 px-12 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 ease-out focus:ring-4 focus:ring-pink-500/50"
          onClick={() => window.open(apkDownloadLink, '_blank')}
        >
          <Download className="mr-3 h-7 w-7" />
          Download APK
        </Button>
      </motion.div>
      <div className="mt-8 flex space-x-4 text-sm text-purple-300">
        <span><ShieldCheck size={16} className="inline mr-1" /> Secure & Reliable</span>
        <span><Star size={16} className="inline mr-1" /> User Approved</span>
      </div>
    </motion.section>
  );
};

export default HeroSection;
  