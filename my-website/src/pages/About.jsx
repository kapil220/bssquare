import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const directorRef = useRef(null);
  const industriesRef = useRef(null);
  
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const directorInView = useInView(directorRef, { once: true, margin: "-100px" });
  const industriesInView = useInView(industriesRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/80"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-24 w-16 h-16 border border-[#FFBD59]/30 rounded-lg rotate-45"
          animate={{
            y: [0, -30, 0],
            rotate: [45, 135, 45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
              <span className="block text-gray-900 font-normal mb-3">About</span>
              <span className="text-[#FFBD59] italic">B Square Global</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 bg-[#FFBD59]"></div>
              <p className="text-lg text-gray-600 font-light">Empowering Business from Day One</p>
              <div className="h-px w-16 bg-[#FFBD59]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-gray-900">
                Your Growth Partner in{' '}
                <span className="text-[#FFBD59] italic">HR</span>,{' '}
                <span className="text-[#FFBD59] italic">Finance</span> & Beyond
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">B Square Global</span> is a dynamic solutions partner, committed to transforming how businesses operate, grow, and innovate. We offer a diverse portfolio of services — from Virtual HR solutions and specialized talent deployment to cutting-edge BIM & CAD training — designed to help organizations stay agile in a rapidly evolving market.
                </p>
                
                <p>
                  Our approach is rooted in flexibility, innovation, and deep domain knowledge. Whether you're seeking to enhance workforce capabilities, streamline technical operations, or access scalable expertise on demand, B Square Global delivers tailored solutions that align with your strategic goals.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  {[
                    { icon: TrendingUp, text: 'Smart Growth' },
                    { icon: Users, text: 'People First' },
                    { icon: Award, text: 'Excellence Driven' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <item.icon className="text-[#FFBD59] w-5 h-5" />
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-100">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                    alt="Business collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section with Image */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div style={{
            backgroundImage: `linear-gradient(45deg, transparent 46%, #FFBD59 50%, transparent 54%)`,
            backgroundSize: '80px 80px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image First */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-100">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                    alt="Our approach" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-[#FFBD59]"></div>
                <span className="text-gray-900 font-semibold text-sm tracking-wide uppercase">Our Approach</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-gray-900">
                Driven by <span className="text-[#FFBD59] italic">Vision</span> & Innovation
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Driven by a vision to empower businesses through smart services and sustainable growth, we continue to expand into new verticals to meet tomorrow's challenges today.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Partner with us to unlock the full potential of your people, processes, and projects. We don't just provide services — we build strategic partnerships that help organizations unlock potential, adapt to change, and grow with confidence in a dynamic business landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
              Our <span className="text-[#FFBD59] italic">Purpose</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-[#FFBD59]"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFBD59]/10 text-[#FFBD59] rounded-lg mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-serif text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To enable businesses to operate efficiently and grow strategically by delivering integrated, tech-enabled services in HR, engineering, workforce deployment, and training. We are committed to offering flexible, high-impact solutions that simplify operations, elevate workforce capabilities, and drive sustainable performance — all under one trusted platform.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-10 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFBD59]/10 text-[#FFBD59] rounded-lg mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-serif text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading force in transforming business support services through innovative, virtual-first solutions. By blending technology, talent, and training, we aim to empower organizations of all sizes to achieve operational agility, digital readiness, and people-focused growth in an ever-evolving business landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section ref={directorRef} className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={directorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
              Meet Our <span className="text-[#FFBD59] italic">Director</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-[#FFBD59]"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={directorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="grid md:grid-cols-5 gap-0">
              {/* Director Image - Placeholder for now */}
              <div className="md:col-span-2">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" 
                    alt="Bhavin S. - Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Director Info */}
              <div className="md:col-span-3 p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-serif text-gray-900 mb-2">Bhavin S.</h3>
                  <p className="text-[#FFBD59] font-semibold text-lg">Director</p>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Bhavin Shah is a strategic business development leader with over 20 years of experience in scaling startups, launching new ventures, and driving revenue growth across international markets.
                  </p>
                  
                  <p>
                    As Director – Business Development at BSquare Global, he leads the company's expansion strategy, focusing on key partnerships, market entry in the UAE and India, and innovative go-to-market initiatives.
                  </p>
                  
                  <p>
                    Bhavin has successfully co-founded and scaled multiple ventures, including startups acquired by leading global firms. His deep expertise in building tech-driven businesses and navigating startup-to-scale-up transitions makes him a valuable driver of BSquare's long-term growth.
                  </p>

                  <p className="font-medium text-gray-900 pt-4">
                    Known for his entrepreneurial mindset, Bhavin blends innovation, operational efficiency, and customer-centric strategy to position BSquare Global as a trusted partner in HR, engineering, and digital services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section ref={industriesRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Industries We <span className="text-[#FFBD59] italic">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how we help businesses across various industries achieve growth, optimize operations, and navigate challenges with our expert consulting services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Information Technology',
                description: 'We support tech companies with strategic hiring, automated payroll, and scalable financial systems to help teams grow efficiently in a competitive landscape.',
                image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80'
              },
              {
                title: 'Real Estate & Construction',
                description: 'Our core focus. We offer complete HR and financial solutions for real estate developers and contractors, including workforce planning, vendor payments, and project cost forecasting.',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
              },
              {
                title: 'Healthcare Service',
                description: 'We assist clinics and healthcare providers with regulatory HR frameworks, staffing support, and accurate financial management for sustained care delivery.',
                image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80'
              },
              {
                title: 'Retail & E-commerce',
                description: 'Supporting retail businesses with workforce management, financial planning, and operational efficiency to thrive in the digital marketplace.',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80'
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-serif text-gray-900 mb-4 group-hover:text-[#FFBD59] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div style={{
            backgroundImage: `linear-gradient(45deg, transparent 46%, #FFBD59 50%, transparent 54%)`,
            backgroundSize: '80px 80px',
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
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Ready to Transform Your <span className="text-[#FFBD59] italic">Business</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Join hundreds of satisfied clients who have streamlined their operations with our professional services.
            </p>
            
            <motion.a
              href="/contact"
              className="group relative inline-flex items-center px-10 py-4 bg-gray-900 text-white text-base font-semibold rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 tracking-wide">
                Get Started Today
              </span>
              <motion.div
                className="absolute inset-0 bg-[#FFBD59]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;