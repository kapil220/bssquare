import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter } from 'lucide-react';
import { initEmailJS, sendContactEmail } from '../utils/emailService';

const Contact = () => {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
      errors.firstName = "First name should contain only alphabets";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
      errors.lastName = "Last name should contain only alphabets";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email format is invalid";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[\d+\-\s]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = "Please enter a valid phone number";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters long";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isValid = validateForm();
    if (!isValid) {
      console.warn("Validation failed, form submission stopped.");
      return;
    }

    setIsLoading(true);

    try {
      const emailResult = await sendContactEmail(formData);

      if (emailResult.success) {
        setSubmitStatus('success');
        setShowModal(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitStatus(null);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
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

        <motion.div
          className="absolute top-1/3 right-32 w-12 h-12 border border-[#FFBD59]/20 rounded-full"
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
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
              <span className="block font-semibold mb-3">Get In</span>
              <span className="text-[#FFBD59] font-black">Touch</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 bg-[#FFBD59]"></div>
              <p className="text-lg text-gray-600 font-light">Any question or remarks? Just write us a message!</p>
              <div className="h-px w-16 bg-[#FFBD59]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-white">
        <div className="w-full h-[500px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6833075869!2d54.89782924999999!3d25.0762345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="B Square Global Location"
          ></iframe>
          
          <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Side - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white relative overflow-hidden"
              >
                <div className="absolute top-20 right-10 w-32 h-32 bg-[#FFBD59]/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#FFBD59]/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-serif mb-4">Contact Information</h2>
                  <p className="text-gray-300 mb-12 leading-relaxed">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>

                  <div className="space-y-8">
                    <motion.div 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={formInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FFBD59]/20 rounded-lg flex items-center justify-center">
                        <MapPin className="text-[#FFBD59]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-gray-300 text-sm">UAE | OMAN |QATAR | KSA | INDIA</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={formInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FFBD59]/20 rounded-lg flex items-center justify-center">
                        <Mail className="text-[#FFBD59]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <div className="text-gray-300 text-sm hover:text-[#FFBD59] transition-colors cursor-pointer">
                          Bijal.s@bsquareglobalfze.com
Bhavin.s@bsquareglobalfze.com
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={formInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FFBD59]/20 rounded-lg flex items-center justify-center">
                        <Phone className="text-[#FFBD59]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <div className="space-y-1">
                          <div className="text-gray-300 text-sm hover:text-[#FFBD59] transition-colors cursor-pointer">
                            +971 56 226 0803
                          </div>
                          <div className="text-gray-300 text-sm hover:text-[#FFBD59] transition-colors cursor-pointer">
                            +971 56 747 9769
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-gray-700"
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-[#FFBD59]/20 rounded-lg flex items-center justify-center hover:bg-[#FFBD59] transition-colors duration-300 cursor-pointer">
                        <Linkedin size={20} className="text-white" />
                      </div>
                      <div className="w-10 h-10 bg-[#FFBD59]/20 rounded-lg flex items-center justify-center hover:bg-[#FFBD59] transition-colors duration-300 cursor-pointer">
                        <Twitter size={20} className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -bottom-20 -right-20 w-64 h-64 border border-[#FFBD59]/20 rounded-full"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3 p-12"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-b-2 ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-[#FFBD59] focus:outline-none transition-colors duration-300`}
                        placeholder="John"
                        disabled={isLoading}
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-b-2 ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-[#FFBD59] focus:outline-none transition-colors duration-300`}
                        placeholder="Doe"
                        disabled={isLoading}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-b-2 ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:border-[#FFBD59] focus:outline-none transition-colors duration-300`}
                      placeholder="john@example.com"
                      disabled={isLoading}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-b-2 ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-[#FFBD59] focus:outline-none transition-colors duration-300`}
                      placeholder="+971 XX XXX XXXX"
                      disabled={isLoading}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border-b-2 ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:border-[#FFBD59] focus:outline-none transition-colors duration-300 resize-none`}
                      placeholder="Write your message here..."
                      disabled={isLoading}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className={`group relative inline-flex items-center px-10 py-4 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900'} text-white text-base font-semibold rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                      whileHover={isLoading ? {} : { scale: 1.02 }}
                      whileTap={isLoading ? {} : { scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center tracking-wide">
                        {isLoading ? 'Sending...' : 'Send Message'}
                        {!isLoading && <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
                      </span>
                      {!isLoading && (
                        <motion.div
                          className="absolute inset-0 bg-[#FFBD59]"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Success/Error Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${submitStatus === 'success' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                {submitStatus === 'success' ? '✓' : '!'}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {submitStatus === 'success' ? 'Thank You!' : 'Oops!'}
              </h3>
              <p className="mb-6 text-gray-600">
                {submitStatus === 'success' 
                  ? 'Your message has been sent successfully! We will get back to you within 24 hours.' 
                  : 'There was an error sending your message. Please try again or contact us directly.'}
              </p>
              <button
                onClick={closeModal}
                className={`px-6 py-3 rounded-lg text-white font-semibold ${submitStatus === 'success' ? 'bg-[#FFBD59] hover:bg-opacity-90' : 'bg-gray-900 hover:bg-opacity-90'}`}
              >
                {submitStatus === 'success' ? 'Got it!' : 'Try Again'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;