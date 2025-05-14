
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Download } from 'lucide-react';

const CallToActionSection = ({ apkDownloadLink }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="w-full cta-bg-gradient py-24 md:py-32 text-center px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <Users size={56} className="mx-auto mb-8 text-white opacity-90" />
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Join Over 10 Million Users</h2>
      <p className="text-lg md:text-xl text-purple-200 mb-12 max-w-xl mx-auto">
        Saving power and boosting performance every day. Download Battery Doctor now and experience the difference!
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-primary hover:bg-gray-100 font-bold text-xl py-5 px-12 rounded-full shadow-xl transform transition-all duration-300 ease-out focus:ring-4 focus:ring-white/50"
          onClick={() => window.open(apkDownloadLink, '_blank')}
        >
          <Download className="mr-3 h-7 w-7" />
          Get Battery Doctor APK
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default CallToActionSection;
  