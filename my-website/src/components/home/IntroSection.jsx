// IntroSection.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { ref: parallaxRef, offset } = useParallax(0.3);

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Refined grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-gray-900"
            >
              Your Growth Partner in{' '}
              <span className="text-[#FFBD59] italic">CAD & BIM</span>{' '}
              & Design Excellence
            </motion.h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="font-semibold text-gray-900">B Square Global</span> is a dynamic solutions partner specializing in cutting-edge CAD and BIM services for the construction and design industry. We deliver comprehensive design solutions, project delivery expertise, and specialized talent support to architects, engineers, and construction professionals.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4 pt-4"
              >
                <div className="h-px w-16 bg-[#FFBD59]"></div>
                <span className="text-gray-900 font-semibold text-sm tracking-wide">Excellence in Every Solution</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            ref={parallaxRef}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{
              transform: `translateY(${offset}px)`
            }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-100">
              <div className="aspect-[3/4] min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFBD59] rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-gray-900 w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;