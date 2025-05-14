
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Footer from '@/components/sections/Footer';

const App = () => {
  const appLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/01d69581-09cf-4825-8b79-5bc6caf02a94/e7978da591bc5631e194e9b9f7015fbe.png";
  const apkDownloadLink = "https://your-domain.com/batterydoctor.apk";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 text-gray-100 flex flex-col items-center overflow-x-hidden">
      <Toaster />
      <HeroSection appLogoUrl={appLogoUrl} apkDownloadLink={apkDownloadLink} />
      <FeaturesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CallToActionSection apkDownloadLink={apkDownloadLink} />
      <Footer />
    </div>
  );
};

export default App;
  