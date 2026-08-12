// pages/JobDetail.jsx
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ChevronRight, Users, TrendingUp, Heart, Award, CheckCircle2, Upload, ArrowLeft, Calendar, DollarSign, UserCheck } from 'lucide-react';
import { useState } from 'react';
import { sendJobApplicationEmail } from '../utils/emailService';

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const jobs = [
    {
      id: '5101',
      title: 'Sales Executive – HR & Manpower Services',
      category: 'HR & Manpower Services',
      department: 'Sales & Business Development',
      location: 'UAE',
      type: 'Full Time',
      experience: 'Sales / BD / HR / Manpower experience preferred',
      salary: 'Competitive + Incentives',
      applyEmail: 'bijal.s@bsquareglobalfze.com',
      description: 'We are looking for a Sales Executive to join our team and drive business growth in HR, Recruitment, Manpower Supply & Resource Deployment Services. Education: Bachelor’s Degree or relevant qualification. Excellent English communication skills required. Target-driven work environment.',
      responsibilities: [
        'Generate new business opportunities and develop client relationships.',
        'Identify and approach potential corporate clients.',
        'Promote HR, recruitment, manpower supply and resource deployment services.',
        'Understand client manpower requirements and coordinate with the relevant teams.',
        'Conduct client meetings, presentations and negotiations.',
        'Prepare quotations and commercial proposals.',
        'Maintain strong relationships with existing and new clients.',
        'Achieve assigned monthly and annual sales targets.'
      ],
      requirements: [
        'Good knowledge of HR & Recruitment Services.',
        'Strong communication and interpersonal skills.',
        'Confident in client handling and negotiations.',
        'Self-motivated, proactive and result-oriented.',
        'Willing to work under sales targets and performance-based objectives.',
        'UAE market knowledge and existing corporate connections will be an advantage.',
        'Candidates with experience in manpower supply / recruitment agencies / HR outsourcing / workforce solutions are highly preferred.',
        'Bachelor’s Degree or relevant qualification.',
        'Excellent English communication skills.'
      ]
    },
    {
      id: '5102',
      title: 'Civil Engineer',
      category: 'Construction Services',
      department: 'Engineering',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      experience: 'Minimum 5 years (UAE)',
      salary: 'Competitive',
      applyEmail: 'hr@aftechfze.com',
      description: 'Hamriyah Fabricators (HF) is looking for an experienced Civil Engineer to join our growing team. The ideal candidate will have strong experience in UAE construction projects, excellent planning and coordination skills, and hands-on knowledge of Primavera. Immediate joiners will be given preference.',
      responsibilities: [
        'Plan, execute, and supervise construction activities in accordance with project schedules and quality standards.',
        'Prepare, monitor, and update project plans and schedules using Primavera.',
        'Coordinate with consultants, subcontractors, suppliers, and internal departments to ensure timely project execution.',
        'Monitor project progress and prepare daily, weekly, and monthly progress reports.',
        'Ensure compliance with project specifications, safety regulations, and quality requirements.',
        'Review drawings, resolve technical issues, and support site execution.',
        'Track project resources, materials, and manpower to achieve project milestones.',
        'Assist in project planning, risk assessment, and cost control.',
        'Attend project meetings and provide progress updates to management.'
      ],
      requirements: [
        'Bachelor’s Degree in Civil Engineering.',
        'Minimum 5 years of UAE experience in Civil Building construction projects.',
        'Proven experience in project planning and scheduling.',
        'Good skill and knowledge of Primavera P6 mandatory.',
        'Strong understanding of construction methodologies, project execution, and site coordination.',
        'Excellent communication, problem-solving, and organizational skills.',
        'Valid UAE Driving License is an added advantage.',
        'Immediate joiners will be given preference.'
      ]
    },
    {
      id: '5103',
      title: 'Landscape Draftsman & Civil 3D Draftsman',
      category: 'CAD & BIM Services',
      department: 'Design & Drafting',
      location: 'Sharjah, UAE',
      type: 'Full-Time | 3 Months (Extendable)',
      experience: 'Landscape Draftsman 6+ years | Civil 3D Draftsman 2+ years',
      salary: 'Competitive',
      applyEmail: 'Bijal.s@bsquareglobalfze.com',
      description: 'Immediate requirement for two drafting professionals in Sharjah, UAE. Joining: Immediate. UAE-based candidates and immediate joiners preferred.',
      responsibilities: [
        'Landscape Draftsman: 6+ years of experience.',
        'Landscape Draftsman: Proficient in AutoCAD (Mandatory).',
        'Landscape Draftsman: Experience in landscape, infrastructure, parks, residential & commercial projects.',
        'Landscape Draftsman: Civil 3D knowledge is an added advantage.',
        'Civil 3D Draftsman: 2+ years of experience.',
        'Civil 3D Draftsman: Strong proficiency in Autodesk Civil 3D & AutoCAD.',
        'Civil 3D Draftsman: Experience in roads, utilities, grading & infrastructure projects.'
      ],
      requirements: [
        'Proficiency in AutoCAD is mandatory for both roles.',
        'Autodesk Civil 3D proficiency required for the Civil 3D Draftsman role.',
        'Relevant project experience in landscape or infrastructure works.',
        'UAE-based candidates preferred.',
        'Immediate availability to join.'
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
              {job.benefits && (
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
              )}
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
                {job.applyEmail && (
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Or send your CV to{' '}
                    <a
                      href={`mailto:${job.applyEmail}?subject=Application – ${job.title}`}
                      className="font-semibold text-gray-900 hover:text-[#FFBD59] transition-colors break-all"
                    >
                      {job.applyEmail}
                    </a>
                  </p>
                )}
              </div>

              {/* Share Job */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-serif text-gray-900 mb-4 text-center">Share This Job</h3>
                <div className="flex gap-3 justify-center">
                  {/* LinkedIn */}
                  <button className="flex items-center justify-center w-12 h-12 bg-[#0077B5] text-white rounded-md hover:bg-[#00669A] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>

                  {/* WhatsApp */}
                  <button className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-md hover:bg-[#20BD5C] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </button>

                  {/* Twitter */}
                  <button className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
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

  const [isLoading, setIsLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate required fields
      if (!formData.fullName || !formData.email || !formData.phone || !formData.experience) {
        alert('Please fill all required fields (Name, Email, Phone, Experience)');
        setIsLoading(false);
        return;
      }

      if (!resumeFile) {
        alert('Please upload your resume');
        setIsLoading(false);
        return;
      }

      const emailResult = await sendJobApplicationEmail(formData, job, resumeFile);

      if (emailResult.success) {
        alert('Application submitted successfully! Our HR team will review your application and contact you soon.');
        onClose();
        // Reset form
        setFormData({
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
        setResumeFile(null);
      } else {
        throw new Error('Failed to send application');
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert('There was an error submitting your application. Please try again or email us directly at careers@bsquareglobalfze.com');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

      if (!allowedTypes.includes(fileExtension)) {
        alert('Please upload a PDF, DOC, or DOCX file');
        e.target.value = '';
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        e.target.value = '';
        return;
      }

      setResumeFile(file);
    }
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
          {/* Required Fields */}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              min="0"
              max="50"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
              disabled={isLoading}
            />
          </div>

          {/* Optional Fields */}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
                disabled={isLoading}
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
              disabled={isLoading}
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
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-transparent"
              disabled={isLoading}
            />
            <p className="text-sm text-gray-500 mt-1">
              Accepted formats: PDF, DOC, DOCX (Max: 5MB)
              {resumeFile && <span className="text-green-600 ml-2">✓ {resumeFile.name}</span>}
            </p>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            disabled={isLoading}
            className={`flex-1 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FFBD59] hover:bg-[#e6a847]'} text-gray-900 py-3 px-6 rounded-md font-semibold transition-colors`}
          >
            {isLoading ? 'Submitting...' : 'Submit Application'}
          </button>
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
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