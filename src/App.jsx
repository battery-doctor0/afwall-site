
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ShieldCheck, Smartphone, Users, Zap, AlertTriangle, WifiOff, EyeOff } from 'lucide-react';
    import { Toaster } from '@/components/ui/toaster';
    import { useToast } from '@/components/ui/use-toast';

    const FeatureCard = ({ icon, title, description, highlight = false }) => (
      <motion.div
        className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center ${highlight ? 'bg-gradient-to-br from-green-100 to-teal-100 border-2 border-green-500' : 'bg-gradient-to-br from-slate-50 to-gray-100'}`}
        whileHover={{ y: -5 }}
      >
        <div className={`p-3 rounded-full mb-4 text-white ${highlight ? 'bg-green-600' : 'bg-green-500'}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-semibold mb-2 ${highlight ? 'text-green-700' : 'text-gray-800'}`}>{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </motion.div>
    );

    const App = () => {
      const { toast } = useToast();

      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/ab.apk'; // Chemin relatif depuis le dossier /public
        link.download = 'AFWall+.apk'; // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      

      return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center text-gray-800 font-sans">
          <Toaster />
          <header className="w-full py-16 md:py-20 bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 text-white text-center shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="container mx-auto px-4"
            >
              <div className="flex justify-center mb-6">
                <AlertTriangle size={80} className="text-yellow-300 opacity-90 animate-pulse" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Is Your Android TRULY Secure?</span>
                <span className="block text-yellow-300">AFWall+ is the Answer.</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed">
                Every day, apps access the internet <strong className="text-yellow-300">without your permission</strong>, exposing your photos, messages, and banking details. Don't be a target! AFWall+ gives you the <strong className="underline">total</strong> and essential control over your digital fortress.
              </p>
            </motion.div>
          </header>

          <main className="container mx-auto px-4 py-12 md:py-20 flex-grow">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                Why AFWall+ is Not an Option, but a <span className="text-red-600 underline">NECESSITY</span>:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<WifiOff size={32} className="text-red-500" />}
                  title="Block Intruders"
                  description="STOP apps that snoop and consume your data without your consent. It's your right!"
                  highlight={true}
                />
                <FeatureCard
                  icon={<EyeOff size={32} />}
                  title="Privacy Intact"
                  description="Your personal data is precious. AFWall+ is your shield against leaks and surveillance."
                />
                <FeatureCard
                  icon={<ShieldCheck size={32} />}
                  title="Absolute Flexibility"
                  description="Whether your device is rooted or not, AFWall+ adapts to provide maximum, tailored protection."
                />
                <FeatureCard
                  icon={<Users size={32} />}
                  title="Powerful Simplicity"
                  description="A clear interface for custom rules. Advanced security finally accessible to everyone."
                />
                <FeatureCard
                  icon={<Zap size={32} />}
                  title="Transparent & Ethical"
                  description="100% open-source. No trackers, no ads. Only your security and privacy."
                  highlight={true}
                />
                <FeatureCard
                  icon={<Smartphone size={32} />}
                  title="Smart Savings"
                  description="Reduce your mobile data consumption by cutting off access to greedy apps. Your wallet will thank you."
                />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16 md:mb-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 md:p-16 rounded-xl shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-300">
                WHO IS AFWALL+ FOR? <span className="block text-2xl md:text-3xl text-white mt-2">FOR YOU!</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                If you use an Android smartphone, you are concerned. Whether you're a tech expert or an everyday user, <strong className="text-yellow-400">ignoring network security is a risk you can no longer afford to take</strong>. Protect your digital identity, finances, and peace of mind. AFWall+ is the essential tool for confident browsing.
              </p>
              <div className="mt-10 flex justify-center">
                <img  class="w-full max-w-lg h-auto rounded-lg shadow-xl border-4 border-teal-500" alt="Illustration of a shield protecting a smartphone" src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd" />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 150 }}
              className="text-center py-10"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Don't wait until it's too late.</h3>
              <Button
                onClick={handleDownload}
                className="bg-gradient-to-r from-green-500 via-green-600 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-extrabold text-xl md:text-2xl py-5 px-12 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
                size="lg"
              >
                <ShieldCheck className="mr-3 h-7 w-7 animate-bounce" />
                Download AFWall+ NOW
              </Button>
              <p className="mt-6 text-sm text-gray-600">Join thousands of users who have taken back control.</p>
            </motion.section>
          </main>

          <footer className="w-full py-10 bg-gray-900 text-gray-400 text-center">
            <p>&copy; {new Date().getFullYear()} AFWall+ Promotion. Security is a right, not a privilege.</p>
            <p className="text-xs mt-2">AFWall+ is an independent open-source project. This page is for promotional purposes.</p>
          </footer>
        </div>
      );
    };

    export default App;
  