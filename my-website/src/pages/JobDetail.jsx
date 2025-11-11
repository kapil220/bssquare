// pages/JobDetail.jsx
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ChevronRight, Users, TrendingUp, Heart, Award, CheckCircle2, Upload, ArrowLeft, Calendar, DollarSign, UserCheck } from 'lucide-react';
import { useState } from 'react';

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const jobs = [
    {
      id: '4727',
      title: 'Public Relations Officer (PRO)',
      category: 'Construction Services',
      department: 'Construction Services',
      location: 'Dubai, UAE',
      type: 'Full Time',
      experience: '8 years',
      // salary: 'Competitive',
      description: 'We are looking for an experienced and well-connected Public Relations Officer (PRO) to handle all government-related tasks, visa processes, legal documentation, and license renewals.',
      responsibilities: [
        'Manage visa processing, Emirates ID, labor contracts, and medical tests',
        'Coordinate with Dubai government departments – GDRFA, MOHRE, DED, DHA, etc.',
        'Handle trade license renewals, tenancy contracts, and company documentation',
        'Ensure compliance with UAE labor and immigration laws',
        'Maintain strong relationships with typing centers and government offices'
      ],
      requirements: [
        'Minimum 8 years of PRO experience in the UAE (Dubai-specific experience preferred)',
        'Strong knowledge of UAE labor and immigration laws',
        'Familiarity with government portals (MOHRE, GDRFA, ICP, Tasheel)',
        'Good communication in English (Arabic is a plus)',
        'UAE driving license (preferred)'
      ],
      // qualifications: [
      //   'High school diploma or equivalent',
      //   'PRO certification from relevant authorities',
      //   'Proven track record in PRO services',
      //   'Knowledge of typing in both English and Arabic'
      // ],
      // benefits: [
      //   'Health insurance',
      //   'Annual flight ticket',
      //   '30 days annual leave',
      //   'Performance bonus',
      //   'Career growth opportunities'
      // ]
    },
    {
      id: '4505',
      title: 'HR Generalist',
      category: 'HR Services',
      department: 'Human Resources',
      location: 'India',
      type: 'Full Time',
      experience: '1-2 years',
      salary: 'As per industry standards',
      description: 'We are looking for a proactive and detail-oriented HR Generalist to support day-to-day HR operations and client servicing. The ideal candidate should be familiar with both Indian and UAE labour laws, and ready to contribute to Virtual HR services for clients in both countries.',
      responsibilities: [
        'Assist with recruitment, onboarding, and documentation for India and UAE-based clients.',
        'Support HR policy implementation, employee records management, and compliance tracking.',
        'Help prepare offer letters, contracts, and HR reports.',
        'Coordinate payroll data and attendance with external vendors or finance teams.',
        'Resolve employee queries and provide basic grievance support.',
        'Ensure HR practices comply with both UAE and Indian labour law requirements.',
        'Work closely with the senior HR team to deliver virtual HR services for clients.'
      ],
      requirements: [
        'Bachelor’s degree in Human Resources, Business Administration, or related field.',
        '1–2 years of experience in HR operations or generalist roles (internship experience also considered).',
        'Basic knowledge of Indian and UAE labour laws is mandatory',
        'Good written and verbal communication skills in English.',
        'Familiarity with MS Excel, Google Workspace, and HR software is a plus.',
        'Ability to work remotely, manage tasks independently, and adapt to cross-border work environments.'
      ],
      // qualifications: [
      //   'MBA in HR or relevant degree',
      //   'HR certification preferred',
      //   'Strong knowledge of HR best practices',
      //   'Proficiency in MS Office and HRIS'
      // ],
      benefits: [
        'Exposure to multi-country HR practices (India + UAE).',
        'Flexible remote/hybrid work environment.',
        'Opportunity to grow into a specialized HR role.',
        'Mentorship from experienced HR leaders in the Virtual HR industry.',
        'Work with growing startups and mid-scale businesses.'
      ]
    },
    {
      id: '4504',
      title: 'HR Manager',
      category: 'HR Services',
      department: 'Human Resources',
      location: 'India',
      type: 'Full Time',
      experience: '5+ years',
      salary: 'Best in industry',
      description: 'We are looking for an experienced HR Manager to lead and manage our HR operations and also support our clients through our Virtual HR Service model. You will be responsible for designing HR processes, guiding junior HR consultants, and ensuring client satisfaction across the HR lifecycle.',
      responsibilities: [
        'Lead internal HR strategy, recruitment, onboarding, and employee engagement.',
        'Oversee Virtual HR service delivery for client companies, ensuring quality and compliance.',
        'Act as the primary HR contact for clients—handle grievances, policy creation, performance reviews, and exit processes.',
        'Implement and monitor HRMS tools for workflow automation.Prepare and present HR reports, dashboards, and compliance documentation.',
        'Guide a small team of HR executives and freelance consultants.Ensure labor law compliance across client operations (UAE labor law expertise preferred).',
        'Collaborate with the Training team for employee development programs.'
      ],
      requirements: [
        'Bachelor’s degree in HR or related field (MBA in HR preferred).',
        '5+ years of HR experience, including at least 2 years in a leadership role.',
        'Hands-on experience in recruitment, policy drafting, payroll coordination, and employee engagement.',
        'Experience in working with or managing remote/virtual teams is a strong plus.',
        'Strong knowledge of UAE labor law and HR compliance.',
        'Excellent communication and client-handling skills.',
        'Tech-savvy, with familiarity in tools like Zoho People, BambooHR, or similar HRMS.'
      ],
      // qualifications: [
      //   'MBA in HR or related field',
      //   'Relevant HR certification required',
      //   'Strong business acumen',
      //   'Excellent communication and presentation skills'
      // ],
      benefits: [
        'Work with a visionary startup shaping the future of HR in the UAE.',
        'Lead innovation in Virtual HR delivery for SMEs and startups.',
        'Flexible, remote-first work environment.',
        'Opportunity to grow into a leadership role within a fast-scaling company.'
      ]
    },
    {
      id: '4503',
      title: 'Business Development Executive',
      category: 'HR Services',
      department: 'Sales & Marketing',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      experience: '2-3 years',
      salary: 'Base + Commission',
      description: 'Drive business growth through client acquisition and relationship management in Sharjah.',
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain client relationships',
        'Achieve sales targets and objectives',
        'Prepare and present business proposals',
        'Conduct market research and analysis',
        'Collaborate with marketing team on campaigns'
      ],
      requirements: [
        '2+ years in business development or sales',
        'Experience in HR services industry preferred',
        'Excellent negotiation and presentation skills',
        'Self-motivated with proven track record',
        'Valid UAE driving license'
      ],
      qualifications: [
        'Bachelor\'s degree in Business or Marketing',
        'Proven sales track record',
        'Strong network in UAE business community'
      ],
      benefits: [
        'Uncapped commission structure',
        'Company vehicle allowance',
        'Client entertainment budget',
        'Performance bonuses',
        'Career advancement opportunities'
      ]
    },
    {
      id: '4502',
      title: 'Project Engineer (Civil)',
      category: 'Construction Services',
      department: 'Engineering',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      experience: '3-6 years',
      salary: 'AED 8,000 - 12,000',
      description: 'Oversee civil construction projects, ensure quality standards and timely delivery.',
      responsibilities: [
        'Manage and supervise construction projects',
        'Review technical drawings and specifications',
        'Coordinate with contractors and suppliers',
        'Ensure compliance with safety regulations',
        'Monitor project progress and quality control',
        'Prepare project reports and documentation'
      ],
      requirements: [
        '3+ years experience in civil construction',
        'Knowledge of construction methods and materials',
        'Familiarity with UAE building codes',
        'Strong project management skills',
        'Excellent problem-solving abilities'
      ],
      qualifications: [
        'Bachelor\'s degree in Civil Engineering',
        'UAE driving license',
        'Project management certification preferred'
      ],
      benefits: [
        'Accommodation allowance',
        'Transportation allowance',
        'Medical insurance',
        'Annual bonus',
        'Professional certification support'
      ]
    },
    {
      id: '4501',
      title: 'Civil Engineer',
      category: 'Construction Services',
      department: 'Engineering',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      experience: '2-5 years',
      salary: 'AED 6,000 - 9,000',
      description: 'Design, plan and supervise construction projects with focus on structural integrity.',
      responsibilities: [
        'Design and analyze structural systems',
        'Prepare engineering calculations and drawings',
        'Supervise construction activities',
        'Conduct site inspections and tests',
        'Coordinate with architects and contractors',
        'Ensure compliance with design specifications'
      ],
      requirements: [
        '2+ years experience in civil engineering',
        'Proficiency in AutoCAD and other engineering software',
        'Knowledge of structural analysis and design',
        'Strong technical and analytical skills'
      ],
      qualifications: [
        'Bachelor\'s degree in Civil Engineering',
        'UAE driving license',
        'Engineer membership preferred'
      ],
      benefits: [
        'Housing allowance',
        'Transport allowance',
        'Health insurance',
        'Vacation tickets',
        'Continuous training opportunities'
      ]
    },
    {
      id: '4493',
      title: 'Purchase Assistant (Civil Construction)',
      category: 'Construction Services',
      department: 'Procurement',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      experience: '1-3 years',
      salary: 'AED 4,000 - 6,000',
      description: 'Manage procurement of construction materials, vendor coordination, and inventory.',
      responsibilities: [
        'Source and purchase construction materials',
        'Negotiate with suppliers and vendors',
        'Maintain inventory records',
        'Process purchase orders and invoices',
        'Coordinate with project teams',
        'Ensure timely delivery of materials'
      ],
      requirements: [
        '1+ years experience in procurement',
        'Knowledge of construction materials',
        'Strong negotiation skills',
        'Attention to detail and accuracy'
      ],
      qualifications: [
        'Diploma or degree in Supply Chain Management',
        'Proficiency in MS Office and inventory software',
        'Valid UAE driving license'
      ],
      benefits: [
        'Medical insurance',
        'Transport allowance',
        'Performance incentives',
        'Career growth opportunities',
        'Training and development'
      ]
    },
    {
      id: '4374',
      title: 'Business Development Executive – Virtual HR',
      category: 'HR Services',
      department: 'Sales & Marketing',
      location: 'UAE Ajman',
      type: 'Commission + Base Pay (Flexible)',
      experience: '1-2 years',
      salary: 'Base + High Commission',
      description: 'Promote virtual HR services, build client relationships, and achieve sales targets.',
      responsibilities: [
        'Promote virtual HR services to potential clients',
        'Build and maintain client relationships',
        'Achieve sales targets for HR services',
        'Conduct product demonstrations',
        'Gather client feedback and requirements'
      ],
      requirements: [
        '1+ years in sales or business development',
        'Knowledge of HR services industry',
        'Excellent communication skills',
        'Self-motivated and target-driven'
      ],
      qualifications: [
        'Bachelor\'s degree in any field',
        'Sales certification preferred',
        'Experience in service industry sales'
      ],
      benefits: [
        'Flexible working hours',
        'High commission structure',
        'Work from home options',
        'Performance bonuses',
        'Unlimited earning potential'
      ]
    }
  ];

  const job = jobs.find(j => j.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">Job Not Found</h2>
          <button 
            onClick={() => navigate('/career')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFBD59] text-white rounded-md hover:bg-[#e6a847] transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-white py-8">
      {/* Header */}
      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <button 
            onClick={() => navigate('/career')}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Careers
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1">
              <span className="inline-block text-[#FFBD59] bg-[#FFBD59]/10 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {job.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mb-6">{job.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{job.description}</p>
              
              <div className="flex flex-wrap gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <Briefcase size={20} className="text-[#FFBD59]" />
                  {job.department}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={20} className="text-[#FFBD59]" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={20} className="text-[#FFBD59]" />
                  {job.type}
                </span>
                <span className="flex items-center gap-2">
                  <UserCheck size={20} className="text-[#FFBD59]" />
                  {job.experience}
                </span>
                {/* <span className="flex items-center gap-2">
                  <DollarSign size={20} className="text-[#FFBD59]" />
                  {job.salary}
                </span> */}
              </div>
            </div>
            
            <motion.button
              onClick={handleApply}
              className="lg:self-start inline-flex items-center justify-center px-8 py-4 bg-[#FFBD59] text-gray-900 text-lg font-semibold rounded-md hover:bg-[#e6a847] transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Responsibilities */}
              <section>
                <h2 className="text-3xl font-serif text-gray-900 mb-6">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities?.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFBD59] w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="text-3xl font-serif text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements?.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFBD59] w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Qualifications */}
              {/* <section>
                <h2 className="text-3xl font-serif text-gray-900 mb-6">Qualifications</h2>
                <ul className="space-y-3">
                  {job.qualifications?.map((qualification, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFBD59] w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </section> */}

              {/* Benefits */}
              {/* {job.benefits && (
                <section>
                  <h2 className="text-3xl font-serif text-gray-900 mb-6">Benefits & Perks</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {job.benefits?.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <Award className="text-[#FFBD59] w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )} */}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Job Overview */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Job Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Job ID:</span>
                    <span className="font-semibold">{job.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{job.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">{job.type}</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-gray-600">Department:</span>
                    <span className="font-semibold">{job.department}</span>
                  </div> */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">{job.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold">{job.experience}</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-gray-600">Salary:</span>
                    <span className="font-semibold">{job.salary}</span>
                  </div> */}
                </div>
              </div>

              {/* Quick Apply */}
              <div className="bg-[#FFBD59]/5 p-6 rounded-lg border border-[#FFBD59]/20">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-4">
                  Submit your application for this position and our team will review it promptly.
                </p>
                <motion.button
                  onClick={handleApply}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFBD59] text-gray-900 font-semibold rounded-md hover:bg-[#e6a847] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Upload size={20} />
                  Apply Now
                </motion.button>
              </div>

              {/* Share Job */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Share This Job</h3>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    LinkedIn
                  </button>
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    WhatsApp
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition-colors">
                    Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <ApplicationForm job={job} onClose={() => setShowForm(false)} />
          </motion.div>
        </div>
      )}
    </div>
  );
};

// Application Form Component
const ApplicationForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentCompany: '',
    currentPosition: '',
    experience: '',
    expectedSalary: '',
    noticePeriod: '',
    visaStatus: '',
    coverLetter: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', { ...formData, job: job.title });
    alert('Application submitted successfully! We will contact you soon.');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif text-gray-900">Apply for {job.title}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors text-2xl"
        >
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Company
            </label>
            <input
              type="text"
              name="currentCompany"
              value={formData.currentCompany}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Position
            </label>
            <input
              type="text"
              name="currentPosition"
              value={formData.currentPosition}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience *
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Salary ({job.location.includes('UAE') ? 'AED' : 'INR'})
            </label>
            <input
              type="text"
              name="expectedSalary"
              value={formData.expectedSalary}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notice Period
            </label>
            <select
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
            >
              <option value="">Select Notice Period</option>
              <option value="Immediate">Immediate</option>
              <option value="15 days">15 days</option>
              <option value="30 days">30 days</option>
              <option value="60 days">60 days</option>
              <option value="90 days">90 days</option>
            </select>
          </div>

          {job.location.includes('UAE') && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Visa Status (for UAE positions)
              </label>
              <select
                name="visaStatus"
                value={formData.visaStatus}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
              >
                <option value="">Select Visa Status</option>
                <option value="Visit Visa">Visit Visa</option>
                <option value="Employment Visa">Employment Visa</option>
                <option value="Family Visa">Family Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="No Visa">No Visa</option>
              </select>
            </div>
          )}

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
              placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Resume/CV *
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max: 5MB)</p>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="flex-1 bg-[#FFBD59] text-gray-900 py-3 px-6 rounded-md font-semibold hover:bg-[#e6a847] transition-colors"
          >
            Submit Application
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-md font-semibold hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobDetail;