import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video element */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            backgroundAttachment: 'fixed'
          }}
        >
          <source 
            src="/vid.mp4" 
            type="video/mp4" 
          />
          {/* Fallback gradient if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
        </video>
        
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-0"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"
          animate={{
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Animated floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-white/30 rounded-lg"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 45, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-32 w-16 h-16 bg-[#FFBD59]/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main headline with fade-in animation */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight tracking-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="block font-bold mb-3">
              Master CAD & BIM
            </span>
            <span className="block mb-3">
              for Modern Design &
            </span>
            <span className="block">
              <span className="text-[#FFBD59] font-bold italic">Construction Excellence</span>
            </span>
          </motion.h1>

          {/* Refined subtitle with fade-in animation */}
          <motion.p
            className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive BIM services, precision CAD solutions, and expert coordination for architects, engineers, and construction professionals. 
            Delivering projects on time, within budget, and exceeding expectations.
          </motion.p>

          {/* Key benefits with staggered fade-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              'BIM Expertise',
              'CAD Excellence',
              'Project Success'
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 189, 89, 0.2)' }}
              >
                <CheckCircle2 className="text-[#FFBD59] w-5 h-5" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Elegant CTA buttons with fade-in animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.a
              href="/contact"
              className="group relative inline-flex items-center px-10 py-4 bg-[#FFBD59] text-gray-900 text-base font-semibold rounded-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center tracking-wide">
                Schedule Consultation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>
            
            <motion.a
              href="/about"
              className="group inline-flex items-center px-10 py-4 bg-white/20 backdrop-blur-md border-2 border-white text-white text-base font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-wide">Explore Services</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-sm text-white/70 font-light"
          >
            Trusted by leading businesses worldwide
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1.5 bg-white/50 backdrop-blur-sm">
            <motion.div
              className="w-1 h-2 bg-gray-400 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;