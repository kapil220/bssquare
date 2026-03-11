import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { sendQuoteEmail } from '../../utils/emailService';

const QuoteModal = ({ isOpen, onClose, selectedServices }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        if (isOpen) {
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset form on close
            if (submitStatus === 'success') {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setSubmitStatus(null);
            }
        }
    }, [isOpen, submitStatus]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: undefined }));
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName.trim()) errors.firstName = "First name is required";
        if (!formData.lastName.trim()) errors.lastName = "Last name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Email format is invalid";
        }
        if (!formData.phone.trim()) errors.phone = "Phone number is required";
        if (!formData.message.trim()) errors.message = "Message is required";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const result = await sendQuoteEmail(formData, selectedServices);
            if (result.success) {
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-2">Request a Quote</h2>
                            <p className="text-gray-600 mb-8">
                                Fill in your details and we'll get back to you with a customized quote for your selected services.
                            </p>

                            <div className="mb-8 p-4 bg-gray-50 border border-gray-100 rounded-lg">
                                <p className="text-sm font-semibold text-gray-900 mb-1">Services Selected:</p>
                                <p className="text-gray-600 text-sm italic">{selectedServices.join(', ')}</p>
                            </div>

                            {submitStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Sent!</h3>
                                    <p className="text-gray-600 mb-8">
                                        Your quote request has been received. Our team will contact you shortly.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3 bg-[#FFBD59] text-gray-900 font-semibold rounded-md hover:bg-opacity-90 transition-all"
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 border-b-2 ${formErrors.firstName ? 'border-red-500' : 'border-gray-200'} focus:border-[#FFBD59] focus:outline-none transition-colors`}
                                                placeholder="John"
                                            />
                                            {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 border-b-2 ${formErrors.lastName ? 'border-red-500' : 'border-gray-200'} focus:border-[#FFBD59] focus:outline-none transition-colors`}
                                                placeholder="Doe"
                                            />
                                            {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border-b-2 ${formErrors.email ? 'border-red-500' : 'border-gray-200'} focus:border-[#FFBD59] focus:outline-none transition-colors`}
                                            placeholder="john@example.com"
                                        />
                                        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border-b-2 ${formErrors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-[#FFBD59] focus:outline-none transition-colors`}
                                            placeholder="+971 XX XXX XXXX"
                                        />
                                        {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className={`w-full px-4 py-3 border-b-2 ${formErrors.message ? 'border-red-500' : 'border-gray-200'} focus:border-[#FFBD59] focus:outline-none transition-colors resize-none`}
                                            placeholder="Tell us more about your project requirements..."
                                        />
                                        {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                                    </div>

                                    {submitStatus === 'error' && (
                                        <p className="text-red-500 text-sm">There was an error sending your request. Please try again.</p>
                                    )}

                                    <div className="flex justify-end pt-4">
                                        <motion.button
                                            type="submit"
                                            disabled={isLoading}
                                            className={`inline-flex items-center px-10 py-4 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900'} text-white font-semibold rounded-md hover:bg-opacity-90 shadow-lg transition-all`}
                                            whileHover={isLoading ? {} : { scale: 1.02 }}
                                            whileTap={isLoading ? {} : { scale: 0.98 }}
                                        >
                                            {isLoading ? 'Sending...' : 'Send Request'}
                                            <Send className="ml-2 w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default QuoteModal;
