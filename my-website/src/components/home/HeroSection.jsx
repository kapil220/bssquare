import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/80"></div>
      
      {/* Right side subtle grid */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.04]">
        <motion.div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 92%, #000 100%), linear-gradient(180deg, transparent 92%, #000 100%)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Left side pattern - More visible */}
      <div className="absolute left-0 top-0 w-1/3 h-full opacity-[0.05]">
        <motion.div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 46%, #FFBD59 50%, transparent 54%)`,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Left side elements - More visible */}
      <motion.div
        className="absolute top-1/4 left-24 w-16 h-16 border border-[#FFBD59]/40 rounded-lg rotate-45"
        animate={{
          y: [0, -40, 0],
          rotate: [45, 135, 45],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-32 w-14 h-14 border border-gray-500/30 rounded-full"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.25, 1]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-2/3 left-40 w-10 h-10 bg-[#FFBD59]/25 rounded-lg"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -45, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Right side elements */}
      <motion.div
        className="absolute top-20 right-36 w-8 h-8 border border-[#FFBD59]/35 rounded-lg"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-52 w-10 h-10 border border-[#FFBD59]/30 rounded-full"
        animate={{
          y: [0, 35, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Center elements */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-24 h-24 border border-[#FFBD59]/20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Connection lines - More visible */}
      <motion.div
        className="absolute left-16 top-1/2 w-0.5 h-40 bg-gradient-to-b from-transparent via-[#FFBD59]/25 to-transparent"
        animate={{
          height: [40, 50, 40],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute left-28 bottom-20 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFBD59]/25 to-transparent"
        animate={{
          width: [24, 32, 24],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating dots - More visible */}
      <motion.div
        className="absolute top-1/5 left-44 w-2.5 h-2.5 bg-[#FFBD59]/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-36 w-2.5 h-2.5 bg-gray-500/30 rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Soft glow effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-56 h-56 bg-[#FFBD59]/8 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Main headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-gray-900 font-normal mb-3">
              Elevate Your Business
            </span>
            <span className="block text-gray-900 font-normal mb-3">
              with Professional
            </span>
            <span className="block">
              <span className="text-[#FFBD59] font-normal italic">Excellence</span>
            </span>
          </motion.h1>

          {/* Refined subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Strategic HR management, precise accounting services, and comprehensive training solutions 
            tailored to drive sustainable growth and operational excellence.
          </motion.p>

          {/* Key benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              'Expert Consultation',
              'Proven Results',
              'Trusted Partner'
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle2 className="text-[#FFBD59] w-5 h-5" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Elegant CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.a
              href="/contact"
              className="group relative inline-flex items-center px-10 py-4 bg-gray-900 text-white text-base font-semibold rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center tracking-wide">
                Schedule Consultation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-[#FFBD59]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.a>
            
            <motion.a
              href="/about"
              className="group inline-flex items-center px-10 py-4 bg-white border-2 border-gray-900 text-gray-900 text-base font-semibold rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="tracking-wide">Explore Services</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-sm text-gray-500 font-light"
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