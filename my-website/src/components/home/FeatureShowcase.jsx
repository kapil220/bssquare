// FeatureShowcase.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useParallax } from '../../hooks/useParallax';
import { TrendingUp, Briefcase, CheckCircle2 } from 'lucide-react';

const FeatureShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { ref: parallaxRef, offset } = useParallax(0.3);

  const features = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Proven Results',
      description: 'Consistent delivery excellence with measurable outcomes for every project we undertake.'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Industry Experience',
      description: 'Decades of combined expertise across architecture, engineering, and construction sectors.'
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and standards compliance in every deliverable.'
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Image with Parallax */}
          <motion.div
            ref={parallaxRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{
              transform: `translateY(${offset}px)`
            }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                  alt="Professional team working" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-[#FFBD59] p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
                <div className="text-sm font-semibold text-gray-800">Projects Delivered</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <motion.h2 
                className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-gray-900"
              >
                Delivering Excellence Through{' '}
                <span className="text-[#FFBD59] italic">Expertise & Innovation</span>
              </motion.h2>
              
              <div className="space-y-2 mb-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team combines technical mastery with creative problem-solving to transform complex projects into successful outcomes. Every engagement is backed by our commitment to excellence and client success.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFBD59]/20">
                      <div className="text-[#FFBD59]">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Accent line */}
            <motion.div
              className="mt-8 flex items-center gap-4 pt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-px w-12 bg-[#FFBD59]"></div>
              <span className="text-gray-900 font-semibold text-sm tracking-wide">Partnership & Performance</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
