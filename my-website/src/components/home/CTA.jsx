// CTA.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import ParallaxBackground from '../ParallaxBackground';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ParallaxBackground
      backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80"
      className="py-32 relative overflow-hidden"
      speed={0.4}
      darkenOverlay={true}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFBD59] to-transparent opacity-40"></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
          >
            Ready to Elevate Your{' '}
            <span className="text-[#FFBD59] italic">CAD & BIM Projects?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join leading design and construction firms who trust our BIM expertise, CAD solutions, and professional coordination services for project success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="group relative inline-flex items-center px-10 py-5 bg-[#FFBD59] text-gray-900 text-base font-semibold rounded-md overflow-hidden transition-all duration-300 hover:bg-white">
              <span className="flex items-center tracking-wide">
                Get a Free Consultation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </ParallaxBackground>
  );
};

export default CTA;