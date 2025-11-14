import emailjs from 'emailjs-com';

export const initEmailJS = () => {
  emailjs.init("uwGFaOMSj0-7gR9wj");
};

// Separate templates for contact and job
export const EMAIL_CONFIG = {
  SERVICE_ID: "service_7eozg4k",
  TEMPLATE_ID: {
    CONTACT: "template_uu9yxgk", // Replace with your contact template ID
    JOB: "template_dd3m27c"   // Replace with your job template ID
  }
};

// Sanitize text for EmailJS
const sanitizeText = (text) => {
  if (!text) return 'Not provided';
  return String(text).trim() || 'Not provided';
};

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      subject: `New Contact Form - ${sanitizeText(formData.firstName)} ${sanitizeText(formData.lastName)}`,
      to_email: 'info@globalfze.com',
      from_name: `${sanitizeText(formData.firstName)} ${sanitizeText(formData.lastName)}`,
      from_email: sanitizeText(formData.email),
      phone: sanitizeText(formData.phone),
      message: sanitizeText(formData.message),
      date: new Date().toLocaleString()
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID.CONTACT,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error };
  }
};

// Send job application email with file handling
export const sendJobApplicationEmail = async (formData, jobDetails, resumeFile) => {
  try {
    const templateParams = {
      subject: `Job Application - ${sanitizeText(formData.fullName)} for ${sanitizeText(jobDetails?.title)}`,
      to_email: 'careers@bsquareglobal.com',
      from_name: sanitizeText(formData.fullName),
      from_email: sanitizeText(formData.email),
      phone: sanitizeText(formData.phone),
      job_title: sanitizeText(jobDetails?.title),
      job_id: sanitizeText(jobDetails?.id),
      experience: sanitizeText(formData.experience),
      current_company: sanitizeText(formData.currentCompany),
      current_position: sanitizeText(formData.currentPosition),
      expected_salary: sanitizeText(formData.expectedSalary),
      notice_period: sanitizeText(formData.noticePeriod),
      visa_status: sanitizeText(formData.visaStatus),
      cover_letter: sanitizeText(formData.coverLetter),
      resume_file_name: resumeFile ? resumeFile.name : 'No file uploaded',
      date: new Date().toLocaleString()
    };

    console.log('Job Application Data:', templateParams);

    // If we have a resume file, we need to send it via a different method
    // Since EmailJS free plan doesn't support file attachments easily,
    // we'll include a note in the email about the resume
    
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID.JOB,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Error sending job application email:', error);
    return { success: false, error };
  }
};