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
      id: '4727',
      title: 'Public Relations Officer (PRO)',
      category: 'Construction Services',
      department: 'Construction Services',
      location: 'Dubai, UAE',
      type: 'Full Time',
      experience: '8 years',
      salary: 'Competitive',
      description: 'We are looking for an experienced and well-connected Public Relations Officer (PRO) to handle all government-related tasks, visa processes, legal documentation, and license renewals.',
      responsibilities: [
        'Manage visa processing, Emirates ID, labor contracts, and medical tests.',
        'Coordinate with Dubai government departments – GDRFA, MOHRE, DED, DHA, etc.',
        'Handle trade license renewals, tenancy contracts, and company documentation.',
        'Ensure compliance with UAE labor and immigration laws.',
        'Maintain strong relationships with typing centers and government offices.'
      ],
      requirements: [
        'Minimum 8 years of PRO experience in the UAE (Dubai-specific experience preferred).',
        'Strong knowledge of UAE labor and immigration laws.',
        'Familiarity with government portals (MOHRE, GDRFA, ICP, Tasheel).',
        'Good communication in English (Arabic is a plus).',
        'UAE driving license (preferred).'
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
        'Basic knowledge of Indian and UAE labour laws is mandatory.',
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
      department: 'Marketing',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      experience: '2-4 years',
      salary: 'Base + Commission',
      description: 'We are looking for a Business Development Executive who is driven, self-motivated, and confident in building strong B2B relationships. This role is ideal for someone who can communicate value to mid-sized businesses and startups, and convert leads into long-term clients for our services.',
      responsibilities: [
        'Identify and pursue new B2B leads for Virtual HR, Consultancy, Training, and Manpower services.',
        'Conduct client meetings (virtual/in-person), presentations, and service demonstrations.',
        'Understand client needs and propose tailored service packages from B Square Global.',
        'Maintain CRM records, follow up on prospects, and achieve monthly sales targets.',
        'Collaborate with operations and delivery teams to ensure smooth onboarding of new clients.',
        'Represent the company in networking events, webinars, and industry forums.',
        'Create proposals, quotations, and coordinate agreement sign-offs.'
      ],
      requirements: [
        'Bachelor’s degree in Business, Marketing, or related field.',
        '2–4 years of B2B sales experience (preferably in HR, consultancy, or service sectors).',
        'Excellent communication, negotiation, and presentation skills.',
        'Proficiency in using CRM tools and MS Office Suite.',
        'Strong understanding of UAE market and business culture.',
        'Ability to work independently and manage time effectively.',
        'UAE driving license is a plus.'
      ],
      // qualifications: [
      //   'Bachelor\'s degree in Business or Marketing',
      //   'Proven sales track record',
      //   'Strong network in UAE business community'
      // ],
      benefits: [
        'Flexible working model (Remote/Hybrid).',
        'Base salary + performance-based incentives.',
        'Opportunity to grow with a visionary startup.',
        'Work directly with the leadership team and build meaningful B2B connections.',
        'Exposure to multi-sector clients and cross-functional services.'
      ]
    },
    {
      id: '4502',
      title: 'Project Engineer (Civil)',
      category: 'Construction Services',
      department: 'Engineering',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      experience: '5 years',
      salary: 'AED 8,000 - 12,000',
      description: 'We are looking for a dynamic and experienced Project Engineer to join our growing team in the UAE. The ideal candidate should have hands-on experience in civil and infrastructure construction projects with a strong understanding of local regulations, construction standards, and project execution.',
      responsibilities: [
        'Oversee and manage day-to-day site activities and construction work.',
        'Coordinate with consultants, subcontractors, and suppliers.',
        'Ensure timely project delivery within budget and quality standards.',
        'Monitor progress and prepare regular reports.',
        'Ensure compliance with HSE regulations and quality standards.'
      ],
      requirements: [
        'Bachelor’s degree in Civil Engineering (B.E / B.Tech).',
        'Minimum 5 years of UAE experience in civil and infrastructure projects.',
        'Strong knowledge of site execution, project planning, and technical specifications.',
        'Excellent leadership, communication, and problem-solving skills.',
        'UAE driving license is an advantage.'
      ],
      // qualifications: [
      //   'Bachelor\'s degree in Civil Engineering',
      //   'UAE driving license',
      //   'Project management certification preferred'
      // ],
      // benefits: [
      //   'Accommodation allowance',
      //   'Transportation allowance',
      //   'Medical insurance',
      //   'Annual bonus',
      //   'Professional certification support'
      // ]
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
      description: 'We are seeking a highly motivated and detail-oriented Construction Site Supervisor to oversee and direct construction projects from conception to completion. You will be the on-site leader responsible for ensuring projects are delivered on time, within budget, and to the highest quality and safety standards.',
      responsibilities: [
        'Supervise and monitor site construction activities to ensure alignment with project specifications, safety regulations, and timelines.',
        'Review drawings, plans, and quantities for accuracy.',
        'Coordinate with architects, consultants, contractors, and local authorities.',
        'Prepare daily, weekly, and monthly progress reports.',
        'Ensure materials used and work performed are in accordance with the project specifications.',
        'Manage site logistics and resolve any technical or engineering issues that arise.',
        'Conduct quality control and safety inspections.',
        'Assist in budgeting, cost estimation, and project documentation.'
      ],
      requirements: [
        'Bachelor’s degree in Civil Engineering (mandatory).',
        '2–5 years of UAE experience in construction or infrastructure projects.',
        'Strong knowledge of AutoCAD, MS Office, and project management tools.',
        'Familiarity with Sharjah Municipality regulations and permitting processes is a plus.',
        'Good command of English (Arabic is a plus).',
        'UAE driving license preferred.'
      ],
      // qualifications: [
      //   'Bachelor\'s degree in Civil Engineering',
      //   'UAE driving license',
      //   'Engineer membership preferred'
      // ],
      benefits: [
        'Competitive salary based on experience.',
        'Annual leave and health insurance.',
        'Professional development opportunities.',
        'Collaborative and supportive work environment.'
      ]
    },
    {
      id: '4493',
      title: 'Purchase Assistant (Civil Construction)',
      category: 'Construction Services',
      department: 'Procurement',
      location: 'Sharjah, UAE',
      type: 'Full Time',
      experience: '4 years',
      salary: 'AED 4,000 - 6,000',
      description: 'We are seeking an experienced Procurement Specialist (Civil Construction) to handle procurement, supplier negotiations, and material sourcing for construction projects.',
      responsibilities: [
        'Source and procure construction materials cost-effectively.',
        'Negotiate with suppliers and maintain vendor relationships.',
        'Ensure timely deliveries and manage inventory.',
        'Maintain purchase records and compliance.'
      ],
      requirements: [
        'Bachelor’s degree in Business, Supply Chain, or related field.',
        '4 years of construction procurement experience.',
        'Strong negotiation & vendor management skills.',
        'Proficiency in MS Office & ERP software.'
      ],
      // qualifications: [
      //   'Diploma or degree in Supply Chain Management',
      //   'Proficiency in MS Office and inventory software',
      //   'Valid UAE driving license'
      // ],
      benefits: [
        'Competitive salary, Visa',
        'accommodation',
        'transport',
        'health insurance.'
      ]
    },
    {
      id: '4374',
      title: 'Business Development Executive – Virtual HR',
      category: 'HR Services',
      department: 'Sales & Marketing',
      location: 'UAE Ajman',
      type: 'Commission + Base Pay (Flexible)',
      experience: '2 years',
      salary: 'Base + High Commission',
      description: 'We are seeking a motivated and result-oriented Business Development Executive to promote and sell our Virtual HR service packages across the UAE market. The ideal candidate will identify target clients, generate leads, conduct sales meetings, and close deals with SMEs, startups, and mid-sized firms.',
      responsibilities: [
        'Promote and sell Virtual HR solutions to target clients in the UAE.',
        'Identify new business opportunities through cold calling, networking, and field visits.',
        'Schedule meetings with potential clients and present service offerings.',
        'Customize service packages based on client needs and budgets.',
        'Meet or exceed monthly and quarterly sales targets.',
        'Maintain client records and report regularly to management.',
        'Attend business events and HR networking sessions when needed.'
      ],
      requirements: [
        'Minimum 2 years of experience in B2B sales, preferably in HR services, consulting, SaaS, or staffing.',
        'Strong understanding of the UAE business market and client behavior.',
        'Excellent communication and presentation skills in English, Hindi (Arabic is a plus).',
        'Self-motivated, target-driven, and able to work independently.',
        'UAE driving license is an advantage but not mandatory.'
      ],
      // qualifications: [
      //   'Bachelor\'s degree in any field',
      //   'Sales certification preferred',
      //   'Experience in service industry sales'
      // ],
      benefits: [
        'Competitive base salary + performance-based commission.',
        'Flexible work structure (field visits + remote work).',
        'Opportunity to grow with a startup focused on innovation and virtual solutions.',
        'Training on HR services and virtual solutions provided.'
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
      alert('There was an error submitting your application. Please try again or email us directly at careers@bsquareglobal.com');
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