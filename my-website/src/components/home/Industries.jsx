// Industries.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Laptop, Building2, Stethoscope, ShoppingBag } from 'lucide-react';

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    { 
      icon: <Laptop size={40} />, 
      name: 'Information Technology',
      description: 'Specialized solutions for tech companies including talent acquisition, compliance, and financial management for rapid growth.'
    },
    { 
      icon: <Building2 size={40} />, 
      name: 'Real Estate & Construction',
      description: 'Project-based accounting, contractor management, regulatory compliance, and workforce planning for construction projects.'
    },
    { 
      icon: <Stethoscope size={40} />, 
      name: 'Healthcare Service',
      description: 'Compliance management, regulatory oversight, and workforce planning specialized for healthcare operations.'
    },
    { 
      icon: <ShoppingBag size={40} />, 
      name: 'Retail & E-Commerce',
      description: 'Inventory management, seasonal workforce planning, customer service training, and multi-channel financial tracking.'
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Industries We <span className="text-[#FFBD59] italic">Serve</span>
          </h2>
          <div className="w-16 h-px bg-[#FFBD59] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore how we help businesses across various industries achieve growth and operational excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-lg border border-gray-100 hover:border-[#FFBD59] transition-all duration-300 h-full hover:shadow-md">
                <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-6 text-white group-hover:bg-[#FFBD59] transition-colors duration-300">
                  {industry.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  {industry.name}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;