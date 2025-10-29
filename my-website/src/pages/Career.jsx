// pages/Career.jsx
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, MapPin, Clock, ChevronRight, Users, TrendingUp, Heart, Award, CheckCircle2, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Career = () => {
  const jobsRef = useRef(null);
  const jobsInView = useInView(jobsRef, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const jobs = [
    {
      id: '4727',
      title: 'Public Relations Officer (PRO)',
      category: 'Construction Services',
      department: 'Construction Services',
      location: 'Dubai, UAE',
      type: 'Full Time',
      description: 'Handle government relations, visa processing, and PRO services for our UAE operations.'
    },
    {
      id: '4505',
      title: 'HR Generalist',
      category: 'HR Services',
      department: 'Human Resources',
      location: 'India',
      type: 'Full Time',
      description: 'Manage end-to-end HR operations including recruitment, employee relations, and compliance.'
    },
    {
      id: '4504',
      title: 'HR Manager',
      category: 'HR Services',
      department: 'Human Resources',
      location: 'India',
      type: 'Full Time',
      description: 'Lead HR strategy, team management, and organizational development initiatives.'
    },
    {
      id: '4503',
      title: 'Business Development Executive',
      category: 'HR Services',
      department: 'Sales & Marketing',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      description: 'Drive business growth through client acquisition and relationship management in Sharjah.'
    },
    {
      id: '4502',
      title: 'Project Engineer (Civil)',
      category: 'Construction Services',
      department: 'Engineering',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      description: 'Oversee civil construction projects, ensure quality standards and timely delivery.'
    },
    {
      id: '4501',
      title: 'Civil Engineer',
      category: 'Construction Services',
      department: 'Engineering',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      description: 'Design, plan and supervise construction projects with focus on structural integrity.'
    },
    {
      id: '4493',
      title: 'Purchase Assistant (Civil Construction)',
      category: 'Construction Services',
      department: 'Procurement',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      description: 'Manage procurement of construction materials, vendor coordination, and inventory.'
    },
    {
      id: '4374',
      title: 'Business Development Executive – Virtual HR',
      category: 'HR Services',
      department: 'Sales & Marketing',
      location: 'UAE Ajman',
      type: 'Commission + Base Pay (Flexible)',
      description: 'Promote virtual HR services, build client relationships, and achieve sales targets.'
    }
  ];

  const benefits = [
    { icon: Users, title: 'Personalized Career Coaching', desc: 'One-on-one guidance from industry experts' },
    { icon: TrendingUp, title: 'Interview Preparation', desc: 'Comprehensive training to ace your interviews' },
    { icon: Heart, title: 'Resume Optimization', desc: 'Professional resume reviews and enhancements' },
    { icon: Award, title: 'Exclusive Opportunities', desc: 'Access to top companies and roles' }
  ];

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleJobClick = (jobId) => {
    navigate(`/career/jobs/${jobId}`);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/80"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <motion.div
          className="absolute top-1/4 right-24 w-20 h-20 border border-[#FFBD59]/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
              <span className="block text-gray-900 font-normal mb-3">Build Your Career</span>
              <span className="text-[#FFBD59] italic">with B Square Global</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 bg-[#FFBD59]"></div>
              <p className="text-lg text-gray-600 font-light">Looking for the right opportunity? We connect talent with success.</p>
              <div className="h-px w-16 bg-[#FFBD59]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              How We <span className="text-[#FFBD59] italic">Help Candidates</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At B Square Global, we provide comprehensive career support to help you succeed. Our services include personalized career coaching, interview preparation, resume optimization, and access to exclusive job opportunities.
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
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFBD59]/10 text-[#FFBD59] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              4 Steps from <span className="text-[#FFBD59] italic">Recruitment to Joining</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-[#FFBD59]"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Application Review', desc: 'Submit your application and our team reviews your profile' },
              { step: '02', title: 'Initial Screening', desc: 'Shortlisted candidates undergo initial screening call' },
              { step: '03', title: 'Interview Process', desc: 'Face-to-face or virtual interviews with hiring managers' },
              { step: '04', title: 'Onboarding', desc: 'Offer letter, documentation, and smooth onboarding' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-5xl font-serif text-[#FFBD59] mb-4 opacity-50">{item.step}</div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="text-[#FFBD59] w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section ref={jobsRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Explore <span className="text-[#FFBD59] italic">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect role that aligns with your skills and career goals
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl hover:border-[#FFBD59]/30 transition-all duration-300 cursor-pointer group"
                onClick={() => handleJobClick(job.id)}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-[#FFBD59] bg-[#FFBD59]/10 px-3 py-1 rounded-full">
                        {job.category}
                      </span>
                      <span className="text-sm text-gray-500">ID: {job.id}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif text-gray-900 mb-3 group-hover:text-[#FFBD59] transition-colors">{job.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Briefcase size={16} className="text-[#FFBD59]" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#FFBD59]" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} className="text-[#FFBD59]" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="lg:ml-6">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleJobClick(job.id);
                      }}
                      className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white text-base font-semibold rounded-md hover:bg-[#FFBD59] transition-colors duration-300 whitespace-nowrap group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Instructions */}
      <section id="application-form" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Ready to <span className="text-[#FFBD59] italic">Apply?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Submit your application through our official careers portal
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-xl border border-gray-100 p-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-[#FFBD59]/5 rounded-lg border border-[#FFBD59]/20">
                <CheckCircle2 className="text-[#FFBD59] w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-gray-900 mb-2">Application Requirements</h3>
                  <p className="text-gray-600">Please have the following ready before applying:</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Updated Resume/CV (PDF format)',
                  'Contact Information',
                  'Work Experience Details',
                  'Educational Qualifications',
                  'Current & Expected Salary',
                  'Notice Period/Availability',
                  'Visa Status (for UAE positions)',
                  'Portfolio/Work Samples (if applicable)'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="text-[#FFBD59] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {selectedJob && (
                <div className="p-6 bg-[#FFBD59]/5 rounded-lg border border-[#FFBD59]/20">
                  <p className="text-gray-700">
                    <span className="font-semibold">Selected Position:</span> {selectedJob}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <motion.a
                  href="mailto:careers@bsquareglobal.com?subject=Job Application"
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white text-base font-semibold rounded-md hover:bg-[#FFBD59] transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Upload size={20} />
                  Apply via Email
                </motion.a>
                <motion.a
                  href="https://bsquareglobal.com/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 text-base font-semibold rounded-md hover:bg-gray-900 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ChevronRight size={20} />
                  Visit Careers Portal
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-serif text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="text-[#FFBD59] w-6 h-6" />
              Privacy & Data Protection
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Thank you for your interest in joining B Square Global. As part of our recruitment process, your personal information, including your resume, cover letter, and any other materials you have submitted, will be retained in our records for potential future job opportunities.
              </p>
              <p>
                By submitting your application, you consent to the storage and use of your personal information for recruitment purposes, in accordance with our privacy policy. Your information will be handled with the utmost confidentiality and will not be shared with any third parties without your explicit consent.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;