// WhyChooseUs.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Target, Zap, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: <Award size={36} />,
      title: 'Expert-Driven Solutions',
      description: 'Backed by industry experts with deep domain knowledge and proven track records.'
    },
    {
      icon: <Target size={36} />,
      title: 'End-to-End Services',
      description: 'Complete business solutions from strategy to implementation and ongoing support.'
    },
    {
      icon: <Zap size={36} />,
      title: 'Innovative Approach',
      description: 'Cutting-edge technology and modern methodologies to stay ahead of the curve.'
    },
    {
      icon: <Heart size={36} />,
      title: 'Commitment to Excellence',
      description: 'Unwavering dedication to delivering superior results and exceeding expectations.'
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Why Choose <span className="text-[#FFBD59] italic">Us</span>
          </h2>
          <div className="w-16 h-px bg-[#FFBD59] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white p-8 rounded-lg border border-gray-100 hover:border-[#FFBD59] transition-all duration-300 h-full hover:shadow-md">
                <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-6 text-white">
                  {reason.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;