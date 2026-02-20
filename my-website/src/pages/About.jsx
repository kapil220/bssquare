import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, CheckCircle2, TrendingUp, Users, Award, Building2, CheckCircle } from 'lucide-react';

const About = () => {
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const directorRef = useRef(null);
  const industriesRef = useRef(null);
  const aboutRef = useRef(null);
  
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const directorInView = useInView(directorRef, { once: true, margin: "-100px" });
  const industriesInView = useInView(industriesRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans mb-6 leading-[0.95] tracking-[-0.02em] text-gray-900">
              <span className="block font-semibold mb-3">About</span>
              <span className="text-[#FFBD59] font-black">B Square Global</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 bg-[#FFBD59]"></div>
              <p className="text-lg text-gray-600 font-light">Empowering Business from Day One</p>
              <div className="h-px w-16 bg-[#FFBD59]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              About <span className="text-[#FFBD59] italic">Us</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <div className="w-12 h-12 bg-[#FFBD59] rounded-lg flex items-center justify-center mb-6">
                <Building2 size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Who We Are</h3>
              <p className="text-gray-600 leading-relaxed">
                B SQUARE GLOBAL is a company started by Bijal Shah, who has over 20 years of experience in BIM technology and construction management. We help architects, engineers, and builders by providing a wide range of BIM services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <div className="w-12 h-12 bg-[#FFBD59] rounded-lg flex items-center justify-center mb-6">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                At B SQUARE GLOBAL, our goal is to make building projects easier and more successful with our BIM services. We want to give each client the best solutions for their needs, using our skilled and experienced team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <div className="w-12 h-12 bg-[#FFBD59] rounded-lg flex items-center justify-center mb-6">
                <CheckCircle size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Our Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Many of our clients come back to us for new projects. This shows that they trust our work and appreciate our professionalism. We always focus on what our clients need, and our team is dedicated to doing their best on every project.
              </p>
            </motion.div>
          </div>

          {/* Founder Section */}
        
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
                Transforming Design & Construction with{' '}
                <span className="text-[#FFBD59] italic">CAD & BIM</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">B Square Global</span> specializes in cutting-edge CAD and BIM services for the architecture, engineering, and construction industries. We empower design professionals and construction teams with advanced modeling, coordination, and digital solutions that accelerate project delivery and enhance precision.
                </p>
                
                <p>
                  Our approach combines technical excellence, industry expertise, and innovative methodologies. Whether you need architectural BIM modeling, structural coordination, MEP integration, or construction management support, B Square Global delivers integrated solutions that help organizations optimize workflows, reduce costs, and deliver projects on time.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  {[
                    { icon: TrendingUp, text: 'Design Excellence' },
                    { icon: Users, text: 'Skilled Teams' },
                    { icon: Award, text: 'Quality Focused' }
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
                Driven by <span className="text-[#FFBD59] italic">Digital Innovation</span> & Technical Expertise
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At B Square Global, we believe that advanced technology and skilled expertise are the cornerstones of successful design and construction projects. Our BIM and CAD solutions leverage the latest tools and methodologies to streamline workflows and enhance collaboration across all project phases.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We don't just provide services — we partner with architects, engineers, and construction firms to unlock project potential, optimize design efficiency, and deliver exceptional results. From conceptual modeling to construction coordination, we bring precision, innovation, and strategic thinking to every project.
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
                To deliver world-class BIM and CAD services that empower architects, engineers, and construction professionals to design, plan, and build more efficiently. We enable our clients to leverage cutting-edge digital technology, drive project excellence, and achieve superior outcomes through precision modeling, seamless coordination, and expert technical guidance.
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
                To be the leading partner for BIM and CAD excellence in the Middle East and beyond. We aspire to transform the AEC industry by combining technical innovation, skilled expertise, and forward-thinking solutions that enable organizations to build smarter, faster, and more sustainably. Our vision is a world where digital collaboration and BIM-driven workflows are standard practice.
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
            <div className="p-10">
              {/* Bhavin S. Director Info */}
              <div className="mb-12">
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
                    Known for his entrepreneurial mindset, Bhavin blends innovation, operational efficiency, and customer-centric strategy to position BSquare Global as a trusted partner in engineering and digital services.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8"></div>

              {/* Bijal Shah Founder Info */}
              <div>
                <div className="mb-6">
                  <h3 className="text-3xl font-serif text-gray-900 mb-2">Bijal Shah</h3>
                  <p className="text-[#FFBD59] font-semibold text-lg">Technical Director | BIM Consultant | Founder</p>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                  <p>
                    Empowering AEC firms with 20 years of BIM expertise in the UAE. Bijal Shah is the founder and technical director of B Square Global, bringing over two decades of specialized expertise in BIM technology and construction management.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <a href="tel:+971563045152" className="text-[#FFBD59] font-semibold hover:underline">+971 563045152</a>
                    </p>
                    <p>
                      <a href="mailto:Bijal.s@bsquareglobalfze.com" className="text-[#FFBD59] font-semibold hover:underline">Bijal.s@bsquareglobalfze.com</a>
                    </p>
                    <p>
                      <a href="http://www.bsquareglobalfze.com" target="_blank" rel="noopener noreferrer" className="text-[#FFBD59] font-semibold hover:underline">www.bsquareglobalfze.com</a>
                    </p>
                  </div>
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
              Explore how we serve diverse sectors within the AEC industry with specialized CAD and BIM expertise to drive project success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Architecture & Design Firms',
                description: 'We support architectural practices with comprehensive BIM services including 3D modeling, documentation, visualization, and design coordination to enhance client presentations and project delivery.',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
              },
              {
                title: 'Construction & Development',
                description: 'We assist contractors and developers with project coordination, BIM clash detection, construction sequencing, and technical documentation to optimize on-site execution and reduce project delays.',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80'
              },
              {
                title: 'Engineering Consultancies',
                description: 'Our structural and MEP BIM services enable engineering firms to deliver accurate models, coordinated systems, and detailed construction drawings for complex projects.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
              },
              {
                title: 'Facility Management',
                description: 'We provide BIM-based asset management and facility coordination services to help organizations maintain and operate buildings efficiently throughout their lifecycle.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
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