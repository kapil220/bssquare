// ParallaxSection.jsx
import { motion } from 'framer-motion';
import { useRef } from 'react';

const ParallaxSection = () => {
  const ref = useRef(null);

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden flex items-center justify-center py-32"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
          Transforming <span className="text-[#FFBD59] italic">Visions</span> into Reality
        </h2>
        <p className="text-lg text-gray-100">
          Experience the power of precision engineering and innovative design solutions
        </p>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
