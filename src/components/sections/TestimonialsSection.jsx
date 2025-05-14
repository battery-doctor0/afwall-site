
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex R.",
      stars: 5,
      comment: "Battery Doctor is a lifesaver! My phone lasts so much longer now. The one-tap optimization is fantastic.",
      avatar: "AR",
    },
    {
      name: "Sarah K.",
      stars: 5,
      comment: "I love how easily I can see which apps are draining my battery. Highly recommend this app for performance.",
      avatar: "SK",
    },
    {
      name: "Mike P.",
      stars: 4,
      comment: "Good app, helps cool down my phone during gaming. Battery saving is noticeable.",
      avatar: "MP",
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
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Loved by Users Worldwide</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
          >
            <Card className="testimonial-card h-full glassmorphism-card text-gray-200 border-purple-500/25 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
              <CardContent className="pt-8 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white">{testimonial.name}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className={`mr-0.5 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic text-base flex-grow">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
  