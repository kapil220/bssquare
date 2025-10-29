import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ArrowLeft, 
  Users, 
  UserPlus, 
  FileText, 
  FileCheck, 
  Clock, 
  DollarSign, 
  Scale, 
  Handshake, 
  TrendingUp, 
  LogOut,
  Phone,
  CheckCircle,
  ArrowRight,
  Play,
  Shield,
  Target,
  MapPin,
  Layers,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VirtualHRService = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState([0]); // Start with only first step visible

  const steps = [
    {
      icon: Users,
      title: 'Recruitment',
      subtitle: 'Find the Right Talent, Faster',
      description: 'We begin by understanding your company\'s hiring needs and ideal candidate profile. From creating job descriptions to screening, shortlisting, and coordinating interviews — Bsquare Global manages the end-to-end recruitment process. Whether it\'s a single hire or a bulk requirement, we ensure you hire smart and fast.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80'
    },
    {
      icon: UserPlus,
      title: 'Employee Onboarding',
      subtitle: 'Smooth Starts. Stronger Teams.',
      description: 'Once you select the right candidate, we help you onboard them efficiently. Our onboarding service includes document collection, background verification, induction planning, and system setup. A structured onboarding experience boosts employee confidence, accelerates productivity, and reduces early dropouts.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80'
    },
    {
      icon: FileText,
      title: 'HR Documentation',
      subtitle: 'Precision in Every Paper',
      description: 'We prepare and maintain all key HR documents—appointment letters, probation confirmations, NDAs, performance reviews, and exit letters. With proper documentation in place, your organization stays legally safe and professionally managed.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80'
    },
    {
      icon: FileCheck,
      title: 'Policy Drafting',
      subtitle: 'Build a Foundation of Clarity and Fairness',
      description: 'We create custom HR policies that suit your company\'s size, culture, and industry—including leave policies, code of conduct, disciplinary procedures, WFH guidelines, and harassment policies. These documents build trust, prevent disputes, and protect both the employee and employer.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80'
    },
    {
      icon: Clock,
      title: 'Leave & Attendance Management',
      subtitle: 'Track Smart. Plan Better. Save Time.',
      description: 'We implement systems to monitor employee attendance, leaves, work hours, and absenteeism. Whether it\'s via spreadsheets or integrated HRMS tools, we ensure your data is always accurate—helping with payroll, performance, and manpower planning.',
      image: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907?w=600&q=80'
    },
    {
      icon: DollarSign,
      title: 'Payroll Processing',
      subtitle: 'On-Time, Error-Free Salary Management',
      description: 'We manage monthly payroll calculations, deductions, tax filings, payslip generation, and salary disbursals. Our process ensures full compliance with statutory requirements (PF, ESI, PT, TDS) and complete confidentiality for your team\'s financial records.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80'
    },
    {
      icon: Scale,
      title: 'Compliance Management',
      subtitle: 'Stay on the Right Side of the Law',
      description: 'We handle all statutory obligations—labor law registration, monthly returns, renewal tracking, internal audits, and timely submissions. With Bsquare Global, you\'ll never miss a filing deadline or face penalties due to non-compliance.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80'
    },
    {
      icon: Handshake,
      title: 'Employee Relations & Grievance Handling',
      subtitle: 'Build Trust, Resolve Conflicts, Improve Retention.',
      description: 'We act as a neutral HR voice in handling employee grievances, conflict resolution, disciplinary actions, and feedback mechanisms. Our approach helps create a balanced, fair, and motivated workplace environment.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
    },
    {
      icon: TrendingUp,
      title: 'Performance Management',
      subtitle: 'Drive Growth Through Measurable Progress',
      description: 'We assist in designing and executing appraisal cycles, KPIs, review frameworks, and performance-based incentives. This structured system improves accountability, transparency, and employee motivation across your team.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    },
    {
      icon: LogOut,
      title: 'Exit Management',
      subtitle: 'Professional Offboarding, Every Time',
      description: 'When an employee leaves, we ensure all exit procedures are completed smoothly—including full and final settlements, asset returns, relieving letters, and exit interviews. A clean exit process protects your company\'s reputation and records.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80'
    }
  ];

  const benefits = [
    { icon: MapPin, title: 'Location Independent', desc: 'Full HR support regardless of your team\'s geographical distribution.' },
    { icon: DollarSign, title: 'Cost-Effective', desc: 'Access expert HR services without the overhead of an in-house department.' },
    { icon: Layers, title: 'Scalable Solutions', desc: 'HR services that grow with your business, adapting to your changing needs.' },
    { icon: Zap, title: 'Tech-Driven Efficiency', desc: 'Leverage modern HR technology for streamlined processes and data insights.' }
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

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      // Add the next step to visible steps if not already included
      if (!visibleSteps.includes(nextStep)) {
        setVisibleSteps(prev => [...prev, nextStep]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
    // Ensure all steps up to the clicked one are visible
    if (index > Math.max(...visibleSteps)) {
      const newVisibleSteps = [];
      for (let i = 0; i <= index; i++) {
        newVisibleSteps.push(i);
      }
      setVisibleSteps(newVisibleSteps);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to Services
          </motion.button>

          {/* Main Header Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFBD59]/20 text-[#FFBD59] font-semibold rounded-full mb-6">
                <Users size={20} />
                Virtual HR Services
              </div>
              
              <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white leading-tight">
                One Partner
                <span className="block text-[#FFBD59] italic">Every HR Solution</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Why take just one service when you can have the complete HR department?
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FFBD59] text-gray-900 text-base font-semibold rounded-md hover:bg-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  Talk To Our HR Experts
                </motion.button>
                
                <motion.button
                  onClick={() => setShowVideo(true)}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-md hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                  Watch Overview
                </motion.button>
              </div>
            </motion.div>

            {/* Header Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80"
                alt="Virtual HR Services"
                className="w-[60%] rounded-lg shadow-2xl"
              />
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-2xl"
              >
                <div className="text-3xl font-bold text-[#FFBD59] mb-1">50%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
                <div className="text-xs text-gray-500">vs in-house HR</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Why Choose <span className="text-[#FFBD59] italic">Virtual HR?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of a modern, flexible, and expert-driven HR function.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FFBD59] hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFBD59]/10 text-[#FFBD59] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual HR Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {virtualHRFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.color} rounded-lg mb-4 text-white mx-auto`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Everything You Need in <span className="text-[#FFBD59] italic">One HR Suite</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A Step-by-Step Journey with Bsquare Global
            </p>
          </motion.div>

          {/* Steps Navigation */}
          <div className="flex overflow-x-auto pb-8 mb-12 scrollbar-hide">
            <div className="flex gap-4 min-w-max mx-auto">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    currentStep === index
                      ? 'bg-[#FFBD59] text-gray-900 shadow-lg'
                      : visibleSteps.includes(index)
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={{ scale: visibleSteps.includes(index) ? 1.02 : 1 }}
                  whileTap={{ scale: visibleSteps.includes(index) ? 0.98 : 1 }}
                  disabled={!visibleSteps.includes(index)}
                >
                  <step.icon size={20} />
                  {step.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step Content - Only show visible steps */}
          <div className="space-y-16">
            <AnimatePresence>
              {steps.map((step, index) => 
                visibleSteps.includes(index) && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                  >
                    {/* Content - Alternates sides */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="inline-flex items-center gap-2 text-[#FFBD59] font-semibold mb-4">
                        <div className="w-8 h-8 bg-[#FFBD59]/20 rounded-full flex items-center justify-center">
                          <step.icon size={16} />
                        </div>
                        Step {index + 1}
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">
                        {step.title}
                      </h3>
                      
                      <h4 className="text-xl text-[#FFBD59] font-semibold mb-6">
                        {step.subtitle}
                      </h4>
                      
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {step.description}
                      </p>

                      {/* Navigation Buttons - Only show on current step */}
                      {index === currentStep && (
                        <div className="flex gap-4">
                          <motion.button
                            onClick={handlePrevious}
                            disabled={currentStep === 0}
                            className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${
                              currentStep === 0
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            whileHover={{ scale: currentStep === 0 ? 1 : 1.05 }}
                          >
                            Previous
                          </motion.button>
                          
                          <motion.button
                            onClick={handleNext}
                            disabled={currentStep === steps.length - 1}
                            className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${
                              currentStep === steps.length - 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-[#FFBD59] text-gray-900 hover:bg-orange-400'
                            }`}
                            whileHover={{ scale: currentStep === steps.length - 1 ? 1 : 1.05 }}
                          >
                            Next
                            <ArrowRight size={18} />
                          </motion.button>
                        </div>
                      )}
                    </div>

                    {/* Image - Alternates sides */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full rounded-lg shadow-2xl"
                      />
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFBD59]/10 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '50%', label: 'Cost Reduction', desc: 'Compared to in-house HR teams' },
              { stat: '100%', label: 'Compliance Rate', desc: 'Guaranteed regulatory adherence' },
              { stat: '24/7', label: 'Support Available', desc: 'Round-the-clock HR assistance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-[#FFBD59]/20 text-center shadow-lg"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#FFBD59] mb-2">{item.stat}</div>
                <div className="text-xl font-serif text-gray-900 mb-2">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
              One Solution for <span className="text-[#FFBD59] italic">Every HR Need</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Instead of juggling multiple vendors or in-house overload, let Bsquare Global
              be your one-stop HR consulting partner — from recruitment to retirement.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                'End-to-End HR Management',
                'Compliance Guarantee',
                '24/7 Expert Support'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-center gap-3 text-gray-300"
                >
                  <CheckCircle className="text-[#FFBD59] w-6 h-6" />
                  <span className="font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Join hundreds of satisfied clients who have streamlined their operations with our professional services.
              </p>
              
              <motion.button
                className="group inline-flex items-center gap-3 px-10 py-4 bg-[#FFBD59] text-gray-900 text-base font-semibold rounded-md hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Consultation
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
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
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10 transition-colors duration-300"
            >
              ×
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play size={64} className="mx-auto mb-4 opacity-50" />
                <p className="text-gray-400">Virtual HR Services Overview Video</p>
                <p className="text-sm text-gray-500 mt-2">Add your video URL here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default VirtualHRService;