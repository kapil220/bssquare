// ServicesSection.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Users, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <BookOpen size={40} />,
      title: 'CAD & BIM Services',
      description: 'Comprehensive BIM modeling, architectural design, MEP coordination, structural solutions, and digital construction services for modern projects.',
      link: '/services/cad-bim'
    },
    {
      icon: <Users size={40} />,
      title: 'HR Support Services',
      description: 'HR solutions and talent support to complement your CAD & BIM team with recruitment, compliance, and HR management.',
      link: '/services/hr-services'
    }
  ];

  const handleServiceClick = (serviceLink) => {
    // Navigate to the service page
    window.location.href = serviceLink;
  };

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
            Our Premium <span className="text-[#FFBD59] italic">Services</span>
          </h2>
          <div className="w-16 h-px bg-[#FFBD59] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our CAD and BIM expertise can transform your design and construction projects, combined with dedicated HR support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div 
                onClick={() => handleServiceClick(service.link)}
                className="bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mb-6 text-white group-hover:bg-[#FFBD59] transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center text-gray-900 font-semibold group-hover:text-[#FFBD59] transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;