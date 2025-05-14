
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 text-center text-purple-400 text-sm bg-slate-950 w-full border-t border-purple-500/20">
      <p>&copy; {new Date().getFullYear()} Battery Doctor. All rights reserved.</p>
      <p className="mt-2">Your Privacy, Our Priority. Optimized for Performance.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
        <span className="text-purple-500">|</span>
        <a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
  