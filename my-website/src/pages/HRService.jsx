import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, FileText, UserPlus, FileCheck, Handshake, Target, Scale, MapPin, DollarSign, Layers, Zap, ChevronRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const HRServices = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const virtualHRRef = useRef(null);
  const benefitsRef = useRef(null);
    const navigate = useNavigate();
  
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const virtualHRInView = useInView(virtualHRRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  const [selectedServices, setSelectedServices] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  const hrServices = [
    {
      icon: FileText,
      title: 'HR Documentation',
      description: 'Organized, accurate records to support smooth HR operations.',
      details: 'Comprehensive documentation systems including employee files, contracts, policy manuals, and compliance records.',
      image: 'https://images.unsplash.com/photo-1554224311-beee460c201f?w=600&q=80'
    },
    {
      icon: UserPlus,
      title: 'Employee Onboarding & Integration',
      description: 'Smooth onboarding that accelerates integration and drives early success.',
      details: 'Structured onboarding programs, orientation schedules, training coordination, and integration support.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
    },
    {
      icon: FileCheck,
      title: 'Policy Drafting',
      description: 'Clear, compliant policies tailored to your business needs.',
      details: 'Custom HR policies, employee handbooks, code of conduct, and regulatory compliance documentation.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80'
    },
    {
      icon: Handshake,
      title: 'Employee Relations',
      description: 'Building strong workplace relationships for a positive, productive culture.',
      details: 'Conflict resolution, engagement programs, communication strategies, and workplace culture development.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
    },
    {
      icon: Target,
      title: 'Recruitment & Talent Acquisition',
      description: 'Smart hiring to find the right fit and drive long-term success.',
      details: 'End-to-end recruitment, candidate screening, interview coordination, and talent pipeline management.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80'
    },
    {
      icon: Scale,
      title: 'Compliance Management',
      description: 'Ensuring your HR practices stay aligned with legal and regulatory standards.',
      details: 'Labor law compliance, regulatory updates, audit support, and risk management.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80'
    }
  ];

  const virtualHRFeatures = [
    {
      icon: Users,
      title: 'Talent Management',
      description: 'End-to-end recruitment, onboarding, and talent development solutions.',
      color: 'from-[#FFBD59] to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Management',
      description: 'Comprehensive performance tracking and employee development programs.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Compliance & Regulatory',
      description: 'Stay compliant with all labor laws and regulatory requirements.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: 'Payroll Services',
      description: 'Accurate and timely payroll processing with tax compliance.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const benefits = [
    { icon: MapPin, title: 'Location Independent', desc: 'Full HR support regardless of your team\'s geographical distribution.' },
    { icon: DollarSign, title: 'Cost-Effective', desc: 'Access expert HR services without the overhead of an in-house department.' },
    { icon: Layers, title: 'Scalable Solutions', desc: 'HR services that grow with your business, adapting to your changing needs.' },
    { icon: Zap, title: 'Tech-Driven Efficiency', desc: 'Leverage modern HR technology for streamlined processes and data insights.' }
  ];

  const toggleService = (serviceTitle) => {
    setSelectedServices(prev => 
      prev.includes(serviceTitle) 
        ? prev.filter(s => s !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-[#FFBD59]/20 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
            alt="HR Services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-20">
          <div style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-20 w-24 h-24 border border-[#FFBD59]/30 rounded-lg"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-20 w-16 h-16 border border-[#FFBD59]/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#FFBD59]/20 backdrop-blur-sm rounded-2xl mb-8"
            >
              <Users size={48} className="text-[#FFBD59]" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight text-white">
              <span className="block font-normal mb-2">Strategic HR Services for</span>
              <span className="text-[#FFBD59] italic">Peak Business Performance</span>
            </h1>

            <div className="flex items-center justify-center gap-4 mt-8 mb-10">
              <div className="h-px w-16 bg-[#FFBD59]"></div>
              <p className="text-lg text-white/90 font-light">From Talent Acquisition to Retention Strategies – We've Got You Covered</p>
              <div className="h-px w-16 bg-[#FFBD59]"></div>
            </div>

            <motion.button
              onClick={() => setShowVideo(true)}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-[#FFBD59] text-gray-900 text-base font-semibold rounded-md hover:bg-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} />
              Get A Quote
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#FFBD59] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#FFBD59] rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* HR Services Grid */}
      <section ref={servicesRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Our Comprehensive <span className="text-[#FFBD59] italic">HR Service Offerings</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of expert HR services, meticulously crafted to meet the unique needs of modern businesses and empower your human capital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hrServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFBD59] rounded-lg">
                      <service.icon size={24} className="text-gray-900" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-[#FFBD59] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    {service.details}
                  </p>

                  <motion.button
                    onClick={() => toggleService(service.title)}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${
                      selectedServices.includes(service.title)
                        ? 'bg-[#FFBD59] text-gray-900'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedServices.includes(service.title) ? (
                      <>
                        <CheckCircle size={18} />
                        Selected
                      </>
                    ) : (
                      <>
                        Select For Quote
                        <ChevronRight size={18} />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote Summary */}
          {selectedServices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 p-8 bg-[#FFBD59]/10 border border-[#FFBD59]/30 rounded-lg"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">
                    Selected Services ({selectedServices.length})
                  </h3>
                  <p className="text-gray-600">
                    {selectedServices.join(', ')}
                  </p>
                </div>
                <motion.button
                  className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-[#FFBD59] hover:text-gray-900 transition-colors duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Virtual HR Services Section */}
      <section ref={virtualHRRef} className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div style={{
            backgroundImage: `linear-gradient(45deg, transparent 46%, #FFBD59 50%, transparent 54%)`,
            backgroundSize: '80px 80px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={virtualHRInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#FFBD59]/10 text-[#FFBD59] font-semibold rounded-full mb-6">
                Looking for a complete, professional HR solution?
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
                Introducing <span className="text-[#FFBD59] italic">Virtual HR Services</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Everything You Need, Without the Overhead
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Complete HR solutions tailored to your needs',
                  'Payroll management and compliance',
                  'Talent acquisition and recruitment',
                  'Performance management systems',
                  'HR policy development',
                  '24/7 HR support and consultation'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={virtualHRInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-[#FFBD59] w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

             <motion.button
    onClick={() => navigate('/services/hr-services/virtual-hr-services')}
    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-md hover:bg-[#FFBD59] hover:text-gray-900 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Explore Services
    <ArrowRight size={20} />
  </motion.button>
            </motion.div>

            {/* Image with Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={virtualHRInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80"
                  alt="Virtual HR Services"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <motion.button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-gray-900/40 hover:bg-gray-900/60 transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-20 h-20 bg-[#FFBD59] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} className="text-gray-900 ml-1" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Virtual HR Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {virtualHRFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={virtualHRInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.color} rounded-lg mb-4 text-white`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefits */}
      <section ref={benefitsRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Why Businesses <span className="text-[#FFBD59] italic">Choose Us?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of a modern, flexible, and expert-driven HR function.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FFBD59] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFBD59]/10 text-[#FFBD59] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '50%', label: 'Cost Reduction', desc: 'Compared to in-house HR teams' },
              { stat: '100%', label: 'Compliance Rate', desc: 'Guaranteed regulatory adherence' },
              { stat: '24/7', label: 'Support Available', desc: 'Round-the-clock HR assistance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-[#FFBD59]/10 to-orange-50 p-8 rounded-lg border border-[#FFBD59]/20 text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#FFBD59] mb-2">{item.stat}</div>
                <div className="text-xl font-serif text-gray-900 mb-2">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div style={{
            backgroundImage: `linear-gradient(rgba(255,189,89,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,189,89,0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
              Ready to Transform Your <span className="text-[#FFBD59] italic">Business?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join hundreds of satisfied clients who have streamlined their operations with our professional services.
            </p>
            
            <motion.button
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#FFBD59] text-gray-900 text-base font-semibold rounded-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                Get a Free Consultation
              </span>
              <ArrowRight size={20} className="relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-gray-900/95 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full aspect-video bg-gray-800 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10"
            >
              ×
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play size={64} className="mx-auto mb-4 opacity-50" />
                <p className="text-gray-400">Video placeholder - Add your HR services video URL here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HRServices;