import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Layers, Box, Eye, GitMerge, Database, Users, CheckCircle, ArrowRight, Play, ChevronRight, Building2, Ruler, Zap, Shield, Clock, TrendingUp, Sofa, FileText, Wrench, Briefcase, Calculator, Plug, Cloud, Globe, Award, Cpu, Server, Activity } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import QuoteModal from '../components/common/QuoteModal';

const BIMServices = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const coreServicesRef = useRef(null);
  const cubeRef = useRef(null);
  const benefitsRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const coreServicesInView = useInView(coreServicesRef, { once: true, margin: "-100px" });
  const cubeInView = useInView(cubeRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  const [selectedServices, setSelectedServices] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const bimServices = [
    {
      icon: Building2,
      title: 'Architectural BIM Services',
      description: 'Transform your designs with precision, efficiency, and collaboration.',
      details: 'From concept to construction, we deliver intelligent 3D models, smart documentation, accurate quantity take-offs, stunning visualizations, and seamless coordination, empowering architects to design faster, smarter, and better.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.41.jpeg'
    },
    {
      icon: Sofa,
      title: 'Interior Design BIM Services',
      description: 'Transform interiors with precision, creativity, and collaboration.',
      details: '3D Interior Modeling, Material Libraries & Family Creation, Smart Documentation, Accurate Quantity Take-Offs, Lighting & Daylight Simulation, Clash Detection & Coordination, High-Quality Visualizations & Walkthroughs, Facility & Asset Data Integration.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.42.jpeg'
    },
    {
      icon: Box,
      title: 'Structural BIM',
      description: 'Accurate 3D modeling, detailing, and documentation of structural elements.',
      details: 'Complete structural solutions including precast, rebar, and concrete modeling. We deliver bar bending schedules, quantity take-offs, and coordination to enhance structural integrity, efficiency, and collaboration.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.42 (1).jpeg'
    },
    {
      icon: Zap,
      title: 'MEP BIM Services',
      description: 'Digital models integrating mechanical, electrical, and plumbing systems.',
      details: 'MEP BIM involves creating digital models to design, plan, and manage building systems efficiently. Services include modeling & design development, family/library creation, schedules & quantity take-off, visualization, and coordination.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.43.jpeg'
    },
    {
      icon: GitMerge,
      title: 'BIM Coordination',
      description: 'Seamless integration of architectural, structural, and MEP systems.',
      details: 'BIM Coordination ensures seamless integration preventing conflicts and enhancing collaboration. Key Services: Identify design issues, clash detection, clash reports, coordination meetings, visualization, clash-free documentation.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.44.jpeg'
    },
    {
      icon: Database,
      title: 'BIM Object Library',
      description: 'Standardized, data-rich digital components for design integration.',
      details: 'A repository of standardized digital components—architectural, structural, and MEP—that streamline accurate design. Services: Architectural elements, structural families, mechanical fittings/equipment/fixtures, product library, parametric families.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.45.jpeg'
    },
    {
      icon: FileText,
      title: 'As-Built BIM',
      description: 'Digital representation of building\'s actual state after construction.',
      details: 'As-Built BIM captures accurate data for maintenance, facility management, and operational use. Services: Construction model, as-built documentation, FM data integration, asset management/COBie integration, point cloud modeling.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.46.jpeg'
    },
    {
      icon: Wrench,
      title: 'Asset Data Management',
      description: 'Organized collection and maintenance of building component data.',
      details: 'Asset data management in BIM involves organized collection, storage, and maintenance of digital information for ongoing operations. Services: Architectural data, mechanical data, asset tagging, incorporate FM, asset data sheeting.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.48.jpeg'
    },
    {
      icon: Users,
      title: 'BIM Team Establishment',
      description: 'Forming dedicated BIM professionals for project excellence.',
      details: 'BIM Team Establishment involves forming a dedicated group to implement and manage BIM processes, standards, and projects. Services: BIM/software training, BIM implementation/planning, documentation and standards setup, on-site BIM support, customized Revit templates, virtual BIM support.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.48 (1).jpeg'
    },
    {
      icon: Briefcase,
      title: 'BIM Manpower Outsource',
      description: 'Skilled BIM professionals tailored to your project needs.',
      details: 'We provide skilled BIM professionals managed by an in-house BIM Manager to ensure coordination and quality. What We Provide: Architectural Modelers, MEP Modelers, Structural Modelers, BIM Coordinators, In-House BIM Manager.',
      image: '/WhatsApp Image 2026-03-07 at 15.16.49.jpeg'
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

  const cubeModules = [
    { icon: Eye, title: 'CAD & BIM Viewers', desc: 'View 2D CAD and 3D BIM models directly from the browser — no authoring software, no expensive hardware. Supports IFC, RVT, NWD, DWG, SKP, OBJ, FBX and more.' },
    { icon: FileText, title: 'Document Management', desc: 'A built-in Common Data Environment with versioning, transmittals, approval workflows, search, and granular access control across folders, files and sub-folders.' },
    { icon: GitMerge, title: 'Design Coordination', desc: 'Create issues, markups and viewpoints on 2D drawings and federated 3D models. Cloud-based automated clash detection with transmittals across teams.' },
    { icon: Calculator, title: 'Estimations & Costs', desc: 'Automated quantity take-offs linked to cost databases like DSR and PAR to produce code-compliant 2D, 3D and BIM-driven estimates, BOQs and BOMs.' },
    { icon: Clock, title: 'Project Tracking', desc: 'Cloud schedules with Primavera P6 and MS Project integration, 4D/5D simulations, S-curves, and BIM-enabled BI dashboards for real-time project visibility.' },
    { icon: Users, title: 'Site Correspondence', desc: 'Digital forms for site inspections, Daily Progress Reports and Health & Safety workflows — customizable templates and routing for every project.' },
    { icon: Plug, title: 'Integrations with ERP', desc: 'Bi-directional connectors to ERP, BMS, CAFM and CMMS systems so your platform data stays in sync with the rest of the enterprise stack.' },
    { icon: Box, title: 'Asset & Digital Twins', desc: '24/7 live asset tracking through BIM models linked to IoT sensors, with as-built data, work orders and preventive-maintenance alerts on a single cloud.' },
  ];

  const cubeDimensions = [
    { label: '2D', title: 'Drawings', desc: 'Cloud 2D documentation workflows with measurements, snapping and paper/model space.' },
    { label: '3D', title: 'Models', desc: 'View, review and federate BIM models from architecture, structure and MEP on the cloud.' },
    { label: '4D', title: 'Planning', desc: 'Link 3D models with WBS activities to create visual schedule simulations.' },
    { label: '5D', title: 'Quantities & Budgets', desc: 'Integrate 4D models with quantity and cost information for live budget tracking.' },
    { label: '6D', title: 'O & M', desc: 'Connect BIM models with facility and asset operation & maintenance data.' },
    { label: 'BI', title: 'Dashboards', desc: 'Automated BIM-enabled BI reports with scheduled data extraction.' },
  ];

  const cubeStrengths = [
    { icon: Server, title: 'Private Cloud / On-Premise', desc: 'Deploy on private cloud or fully on-premise to meet data-sovereignty requirements.' },
    { icon: Globe, title: 'GCC-Specific Workflows', desc: 'Templates and workflows tailored to construction practices across the Gulf.' },
    { icon: Wrench, title: 'Customizable & Flexible', desc: 'Adapts to your workflows instead of forcing pre-defined templates.' },
    { icon: Layers, title: 'OpenBIM Compliant', desc: 'Open standards like IFC alongside leading vendor-specific formats.' },
    { icon: Cloud, title: 'High Performance Anywhere', desc: 'Runs smoothly on moderate internet — ideal for remote construction sites.' },
    { icon: Cpu, title: 'Unmatched Interoperability', desc: 'RVT, NWD, IFC, DWG, SKP, OBJ, FBX and all major OEM formats out of the box.' },
    { icon: Building2, title: 'All-In-One Platform', desc: 'Single platform spanning every stage of the construction lifecycle.' },
    { icon: Plug, title: 'ERP / CAFM Integrations', desc: 'Highly customizable with deep integrations into enterprise systems.' },
    { icon: Award, title: 'ISO-19650 Compliant', desc: 'BSI BIM Kitemark certified — globally recognised compliance.' },
  ];

  const cubeStats = [
    { value: '2,000+', label: 'Projects Delivered' },
    { value: '$10B+', label: 'Value of Projects' },
    { value: '100,000+', label: 'Active Users' },
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
      <Helmet>
        <title>CAD & BIM Services + CUBE Digital Construction Platform | B Square Global FZE</title>
        <meta name="description" content="CAD & BIM engineering services and the CUBE Digital Construction Platform (Connected Unified Built Environment) from B Square Global — a leading CUBE channel partner across UAE, India, Qatar, Oman, KSA and the wider GCC." />
        <meta name="keywords" content="CAD company Dubai, CAD company UAE, BIM company Dubai, CAD BIM services UAE, BIM engineering Dubai, Architectural BIM, Structural BIM, MEP BIM, BIM coordination, Revit modeling Dubai, CUBE platform, CUBE digital construction platform, Connected Unified Built Environment, Common Data Environment, CDE, ISO-19650, OpenBIM, CUBE channel partner GCC, CUBE UAE, CUBE Qatar, CUBE Oman, CUBE Saudi Arabia, CUBE India" />
        <meta property="og:title" content="CAD & BIM Services + CUBE Digital Construction Platform | B Square Global FZE" />
        <meta property="og:description" content="Expert CAD & BIM engineering services — Architectural, Structural, MEP BIM, coordination, as-built models and manpower outsourcing. Official CUBE channel partner across the GCC." />
        <meta property="og:url" content="https://bsquareglobalfze.com/services/cad-bim" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bsquareglobalfze.com/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://bsquareglobalfze.com/services/cad-bim" />
      </Helmet>
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans mb-2 leading-[0.95] tracking-[-0.02em] text-white">
                <span className="block font-black mb-2">B SQUARE GLOBAL</span>
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
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${selectedServices.includes(service.title)
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
                  onClick={() => setIsQuoteModalOpen(true)}
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
                className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 group-hover:bg-[#FFBD59] rounded-lg mb-4 text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUBE Digital Construction Platform */}
      <section ref={cubeRef} className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
          <div style={{
            backgroundImage: `linear-gradient(rgba(255,189,89,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,189,89,0.6) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={cubeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm md:text-base text-[#FFBD59] font-semibold tracking-[0.2em] uppercase mb-4">
              Connected Unified Built Environment
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              CUBE <span className="text-[#FFBD59] italic">Digital Construction Platform</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6 text-gray-700">
              <span className="px-3 py-1 text-sm font-semibold bg-[#FFBD59]/15 border border-[#FFBD59]/40 rounded-full">Secured</span>
              <span className="text-gray-400">·</span>
              <span className="px-3 py-1 text-sm font-semibold bg-[#FFBD59]/15 border border-[#FFBD59]/40 rounded-full">Scalable</span>
              <span className="text-gray-400">·</span>
              <span className="px-3 py-1 text-sm font-semibold bg-[#FFBD59]/15 border border-[#FFBD59]/40 rounded-full">Tailored</span>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An end-to-end digitization platform for the built environment. CUBE replaces disconnected tools with a single connected data environment — managing every stage and every type of construction data, from concept design to operations & maintenance.
            </p>
          </motion.div>

          {/* Modules grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cubeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 text-center mb-10">
              Integrated Modules
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cubeModules.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={cubeInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.05 }}
                  className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-[#FFBD59] hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 group-hover:bg-[#FFBD59] text-white group-hover:text-gray-900 rounded-lg mb-4 transition-colors duration-300">
                    <m.icon size={24} />
                  </div>
                  <h4 className="text-lg font-serif text-gray-900 mb-2">{m.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2D - 6D dimensions strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cubeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 text-center mb-3">
              Integrated Construction Technology
            </h3>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              One tool to manage every dimension of construction data — from drawings to digital twins.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cubeDimensions.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={cubeInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                  className="bg-white p-5 rounded-lg border border-gray-200 hover:border-[#FFBD59] transition-colors duration-300 text-center"
                >
                  <div className="text-3xl font-bold text-[#FFBD59] mb-1">{d.label}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">{d.title}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cubeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 text-center mb-3">
              Why CUBE Stands Apart
            </h3>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto italic">
              "Unlike other platforms, CUBE's philosophy is to adapt to the customer's workflows rather than forcing them to implement pre-defined templates."
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cubeStrengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={cubeInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.05 }}
                  className="flex gap-4 bg-white p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 bg-[#FFBD59]/15 text-[#FFBD59] rounded-lg">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{s.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Channel partner band */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cubeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-[#FFBD59]/30 p-10 md:p-14 mb-16"
          >
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
              <div style={{
                backgroundImage: `linear-gradient(rgba(255,189,89,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,189,89,0.5) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                width: '100%',
                height: '100%'
              }}></div>
            </div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFBD59]/15 border border-[#FFBD59]/40 rounded-full mb-6">
                <Globe size={16} className="text-[#FFBD59]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FFBD59]">Leading CUBE Channel Partner</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-serif text-white leading-tight mb-5">
                B Square Global brings CUBE to the <span className="text-[#FFBD59] italic">GCC and beyond</span>
              </h3>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                As a leading channel partner for the CUBE Digital Construction Platform, B Square Global supports AEC firms, government bodies and asset owners across the <span className="text-white font-semibold">UAE, India, Qatar, Oman, the Kingdom of Saudi Arabia</span> and other GCC regions — with on-the-ground implementation, training and workflow customization.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                {['UAE', 'India', 'Qatar', 'Oman', 'Saudi Arabia', 'Other GCC'].map((region) => (
                  <span
                    key={region}
                    className="px-4 py-1.5 text-sm font-medium text-white bg-white/5 border border-white/15 rounded-full"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cubeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {cubeStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={cubeInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                className="bg-gradient-to-br from-[#FFBD59]/10 to-orange-50 p-8 rounded-lg border border-[#FFBD59]/20 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FFBD59] mb-2">{s.value}</div>
                <div className="text-base font-serif text-gray-900">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
              onClick={() => navigate('/contact')}
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

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedServices={selectedServices}
      />
    </div>
  );
};

export default BIMServices;