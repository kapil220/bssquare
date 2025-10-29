import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Layers, Box, Eye, GitMerge, Database, Users, CheckCircle, ArrowRight, Play, ChevronRight, Building2, Ruler, Zap, Shield, Clock, TrendingUp, Sofa, FileText, Wrench, Briefcase } from 'lucide-react';

const BIMServices = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const coreServicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const aboutRef = useRef(null);
  
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const coreServicesInView = useInView(coreServicesRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const [selectedServices, setSelectedServices] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  const bimServices = [
    {
      icon: Building2,
      title: 'Architectural BIM Services',
      description: 'Transform your designs with precision, efficiency, and collaboration.',
      details: 'From concept to construction, we deliver intelligent 3D models, smart documentation, accurate quantity take-offs, stunning visualizations, and seamless coordination, empowering architects to design faster, smarter, and better.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80'
    },
    {
      icon: Sofa,
      title: 'Interior Design BIM Services',
      description: 'Transform interiors with precision, creativity, and collaboration.',
      details: '3D Interior Modeling, Material Libraries & Family Creation, Smart Documentation, Accurate Quantity Take-Offs, Lighting & Daylight Simulation, Clash Detection & Coordination, High-Quality Visualizations & Walkthroughs, Facility & Asset Data Integration.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80'
    },
    {
      icon: Box,
      title: 'Structural BIM',
      description: 'Accurate 3D modeling, detailing, and documentation of structural elements.',
      details: 'Complete structural solutions including precast, rebar, and concrete modeling. We deliver bar bending schedules, quantity take-offs, and coordination to enhance structural integrity, efficiency, and collaboration.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80'
    },
    {
      icon: Zap,
      title: 'MEP BIM Services',
      description: 'Digital models integrating mechanical, electrical, and plumbing systems.',
      details: 'MEP BIM involves creating digital models to design, plan, and manage building systems efficiently. Services include modeling & design development, family/library creation, schedules & quantity take-off, visualization, and coordination.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80'
    },
    {
      icon: GitMerge,
      title: 'BIM Coordination',
      description: 'Seamless integration of architectural, structural, and MEP systems.',
      details: 'BIM Coordination ensures seamless integration preventing conflicts and enhancing collaboration. Key Services: Identify design issues, clash detection, clash reports, coordination meetings, visualization, clash-free documentation.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
    },
    {
      icon: Database,
      title: 'BIM Object Library',
      description: 'Standardized, data-rich digital components for design integration.',
      details: 'A repository of standardized digital components—architectural, structural, and MEP—that streamline accurate design. Services: Architectural elements, structural families, mechanical fittings/equipment/fixtures, product library, parametric families.',
      image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&q=80'
    },
    {
      icon: FileText,
      title: 'As-Built BIM',
      description: 'Digital representation of building\'s actual state after construction.',
      details: 'As-Built BIM captures accurate data for maintenance, facility management, and operational use. Services: Construction model, as-built documentation, FM data integration, asset management/COBie integration, point cloud modeling.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80'
    },
    {
      icon: Wrench,
      title: 'Asset Data Management',
      description: 'Organized collection and maintenance of building component data.',
      details: 'Asset data management in BIM involves organized collection, storage, and maintenance of digital information for ongoing operations. Services: Architectural data, mechanical data, asset tagging, incorporate FM, asset data sheeting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      icon: Users,
      title: 'BIM Team Establishment',
      description: 'Forming dedicated BIM professionals for project excellence.',
      details: 'BIM Team Establishment involves forming a dedicated group to implement and manage BIM processes, standards, and projects. Services: BIM/software training, BIM implementation/planning, documentation and standards setup, on-site BIM support, customized Revit templates, virtual BIM support.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
    },
    {
      icon: Briefcase,
      title: 'BIM Manpower Outsource',
      description: 'Skilled BIM professionals tailored to your project needs.',
      details: 'We provide skilled BIM professionals managed by an in-house BIM Manager to ensure coordination and quality. What We Provide: Architectural Modelers, MEP Modelers, Structural Modelers, BIM Coordinators, In-House BIM Manager.',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80'
    }
  ];

  const coreServices = [
    {
      icon: Layers,
      title: 'Consulting & Training',
      description: 'BIM Consulting & Implementation, Specialized BIM Consultancy, Smart BIM Workflow training with AI & ML, BIM Training & Workshops.',
      color: 'from-[#FFBD59] to-orange-500'
    },
    {
      icon: Box,
      title: 'Core BIM Services',
      description: 'Architectural, Structural, and MEP BIM Modeling (LOD 200-500), CAD/Sketch/PDF to BIM Conversion, As-Built BIM Models, Quantity Take-Offs.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Visualization & Reality',
      description: '3D Rendering & Visualization, Walkthroughs & Flythroughs, VR (Virtual Reality) & AR (Augmented Reality).',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GitMerge,
      title: 'Coordination & Data',
      description: 'Interdisciplinary Clash Coordination, Clash Detection & Resolution, Revit Family & BIM Object Library creation, COBie Adaptation, Asset Data Management.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const benefits = [
    { icon: Clock, title: 'On Time Delivery', desc: 'We work closely with clients to deliver high-quality results, on time and within budget.' },
    { icon: TrendingUp, title: 'Proven Track Record', desc: 'Many clients come back to us for new projects, showing trust in our work and professionalism.' },
    { icon: Shield, title: '20+ Years Expertise', desc: 'Founded by Bijal Shah with over 20 years of experience in BIM technology and construction management.' },
    { icon: Zap, title: 'AI & ML Integration', desc: 'Smart BIM workflow training with cutting-edge AI & ML technologies for future-ready solutions.' }
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-[#FFBD59]/20 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="BIM Services"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 opacity-[0.03] z-20">
          <div style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

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
              <Layers size={48} className="text-[#FFBD59]" />
            </motion.div>

            <div className="mb-4">
              <p className="text-lg text-[#FFBD59] font-semibold mb-2">PROUDLY PRESENTING...!</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-2 leading-tight text-white">
                <span className="block font-bold mb-2">B SQUARE GLOBAL</span>
              </h1>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8 mb-10">
              <div className="h-px w-16 bg-[#FFBD59]"></div>
              <p className="text-2xl text-[#FFBD59] italic font-serif">THE BIM PARTNER</p>
              <div className="h-px w-16 bg-[#FFBD59]"></div>
            </div>

            <p className="text-lg text-white/90 font-light max-w-2xl mx-auto mb-8">
              Empowering AEC firms with 20 years of BIM expertise in the UAE
            </p>

            <motion.button
              onClick={() => setShowVideo(true)}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-[#FFBD59] text-gray-900 text-base font-semibold rounded-md hover:bg-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} />
              Watch Our Story
            </motion.button>
          </motion.div>
        </div>

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
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-16 bg-gradient-to-br from-[#FFBD59]/10 to-orange-50 p-8 rounded-lg border border-[#FFBD59]/20"
>
  <div className="grid md:grid-cols-2 gap-8 items-start">
    {/* Left Column - Bijal Shah with Large Image */}
    <div className="space-y-6">
      {/* Large Image */}
      <div className="w-full">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
          alt="Bijal Shah"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
      
      {/* Content */}
      <div>
        <h3 className="text-3xl font-serif text-gray-900 mb-2">Bijal Shah</h3>
        
        <div className="space-y-2 text-gray-700 mb-4">
          <p>
            <a href="tel:+971563045152" className="hover:text-[#FFBD59]">+971 563045152</a>
          </p>
          <p>
            <a href="mailto:Bijal.s@bsquareglobalfze.com" className="hover:text-[#FFBD59]">Bijal.s@bsquareglobalfze.com</a>
          </p>
          <p>
            <a href="http://www.bsquareglobalfze.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFBD59]">www.bsquareglobalfze.com</a>
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-semibold text-gray-900 mb-1">PROFESSIONAL BUSINESS SOLUTION</h4>
          <p className="text-lg text-[#FFBD59] font-semibold">Technical Director | BIM Consultant | Founder at B Square Global</p>
        </div>

        <p className="text-gray-600">
          Empowering AEC firms with 20 years of BIM expertise in the UAE
        </p>
      </div>
    </div>

    {/* Right Column - Founders and Directors */}
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-serif text-gray-900 mb-4">Founder and directors</h4>
        <div className="space-y-4">
          {/* Bhavin Shah */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">Mr. Bhavin Shah</h5>
            <p className="text-gray-600">
              <a href="mailto:Bhavin.s@bsquareglobalfze.com" className="hover:text-[#FFBD59]">Bhavin.s@bsquareglobalfze.com</a>
            </p>
          </div>
          
          {/* Mohan Babu */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">Mr. Mohan Babu</h5>
            <p className="text-gray-600">
              <a href="mailto:Mohan.b@bsquareglobalfze.com" className="hover:text-[#FFBD59]">Mohan.b@bsquareglobalfze.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info Section to fill space */}
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FFBD59]">
        <h5 className="text-lg font-semibold text-gray-900 mb-3">Get in Touch</h5>
        <p className="text-gray-600 mb-4">
          Ready to transform your AEC projects with BIM expertise? Contact us for consultation and services.
        </p>
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <span>🏢</span>
            <span>Based in UAE</span>
          </p>
          <p className="flex items-center gap-2">
            <span>⏰</span>
            <span>20+ Years Experience</span>
          </p>
          <p className="flex items-center gap-2">
            <span>📞</span>
            <span>Available for Consultation</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>
        </div>
      </section>

      {/* BIM Services Grid */}
      <section ref={servicesRef} className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div style={{
            backgroundImage: `linear-gradient(45deg, transparent 46%, #FFBD59 50%, transparent 54%)`,
            backgroundSize: '80px 80px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Our Comprehensive <span className="text-[#FFBD59] italic">BIM Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to construction, we provide end-to-end BIM solutions that transform how you design, build, and manage projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bimServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
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

      {/* Core Services Overview */}
      <section ref={coreServicesRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={coreServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Service <span className="text-[#FFBD59] italic">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Organized expertise across four key pillars of BIM excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={coreServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg mb-4 text-white`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={benefitsRef} className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Why Choose <span className="text-[#FFBD59] italic">B Square Global?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of working with UAE's trusted BIM partner with proven expertise and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#FFBD59] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFBD59]/10 text-[#FFBD59] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '20+', label: 'Years Experience', desc: 'In BIM technology & construction management' },
              { stat: '100%', label: 'Client Satisfaction', desc: 'Returning clients and referrals' },
              { stat: 'LOD 500', label: 'Modeling Excellence', desc: 'Highest level of detail and accuracy' }
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
          </div> */}
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
              Happy to Address Your <span className="text-[#FFBD59] italic">Queries</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed font-semibold">
              Ready to Transform Your Business?
            </p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
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
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10 text-2xl"
            >
              ×
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play size={64} className="mx-auto mb-4 opacity-50" />
                <p className="text-gray-400">Video placeholder - Add your BIM services video URL here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default BIMServices;