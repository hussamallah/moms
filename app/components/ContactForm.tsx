'use client';

import { useState } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  country?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      // In a real app, you would send this to your API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', country: '', service: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-border-gray shadow-card rounded-[6px] p-[28px] max-w-[600px] w-full flex flex-col gap-6"
      aria-label="Contact form"
    >
      {/* Name Field */}
      <div className="relative">
        <label htmlFor="name" className="block text-[16px] font-semibold text-navy mb-2">
          Name <span className="text-red-500" aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full h-[48px] border rounded-[4px] px-4 transition ${
            errors.name
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500'
              : 'border-[#C4CCD7] focus:border-primary-blue focus:ring-2 focus:ring-primary-blue'
          } focus:outline-none`}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="relative">
        <label htmlFor="email" className="block text-[16px] font-semibold text-navy mb-2">
          Email <span className="text-red-500" aria-label="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full h-[48px] border rounded-[4px] px-4 transition ${
            errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500'
              : 'border-[#C4CCD7] focus:border-primary-blue focus:ring-2 focus:ring-primary-blue'
          } focus:outline-none`}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Country Field */}
      <div className="relative">
        <label htmlFor="country" className="block text-[16px] font-semibold text-navy mb-2">
          Country <span className="text-red-500" aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.country}
          aria-describedby={errors.country ? 'country-error' : undefined}
          className={`w-full h-[48px] border rounded-[4px] px-4 transition ${
            errors.country
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500'
              : 'border-[#C4CCD7] focus:border-primary-blue focus:ring-2 focus:ring-primary-blue'
          } focus:outline-none`}
        />
        {errors.country && (
          <p id="country-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.country}
          </p>
        )}
      </div>

      {/* Service Field */}
      <div className="relative">
        <label htmlFor="service" className="block text-[16px] font-semibold text-navy mb-2">
          Service <span className="text-red-500" aria-label="required">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
          className={`w-full h-[48px] border rounded-[4px] px-3 transition ${
            errors.service
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500'
              : 'border-[#C4CCD7] focus:border-primary-blue focus:ring-2 focus:ring-primary-blue'
          } focus:outline-none bg-white`}
        >
          <option value="">Select service</option>
          <option value="individual-filing">Individual Non-Resident & Expat Filing</option>
          <option value="itin">ITIN Services</option>
          <option value="company-formation">U.S. Company Formation</option>
          <option value="bookkeeping">Global Bookkeeping</option>
          <option value="compliance">International Business Compliance</option>
        </select>
        {errors.service && (
          <p id="service-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="relative">
        <label htmlFor="message" className="block text-[16px] font-semibold text-navy mb-2">
          Message <span className="text-red-500" aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          rows={5}
          className={`w-full min-h-[140px] border rounded-[4px] px-4 py-2 transition resize-y ${
            errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500'
              : 'border-[#C4CCD7] focus:border-primary-blue focus:ring-2 focus:ring-primary-blue'
          } focus:outline-none`}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy Notice */}
      <p className="text-sm text-text-dark">
        By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
      </p>

      {/* Submit Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded" role="alert">
          Thank you! Your message has been sent. We'll respond within 24 hours.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded" role="alert">
          Sorry, there was an error submitting your form. Please try again.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary-blue text-white w-full h-[52px] rounded-[4px] text-[17px] font-medium mt-1 hover:bg-[#0948A7] transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
        style={{ backgroundColor: '#0B5ED7' }}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

