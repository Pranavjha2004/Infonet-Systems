import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Meteors } from './Meteors';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorToast, setErrorToast] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      emailjs
        .send(
          'service_l1kptzi',
          'template_3bngcjm',
          formData,
          'hzqB7eL5V_G-a1RH7'
        )
        .then(() => {
          setLoading(false);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          setFormData({ name: '', email: '', phone: '', message: '' });
        })
        .catch(() => {
          setLoading(false);
          setErrorToast('Something went wrong. Please try again.');
        });
    }
  };

  useEffect(() => {
    if (errorToast) {
      const timer = setTimeout(() => setErrorToast(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorToast]);

  return (
    <div className="flex items-center justify-center bg-[#f6f5ff] px-4 py-10 sm:px-6 lg:px-8 relative overflow-hidden mt-16" id='contactUs'>
      <div className="absolute inset-0 h-full w-full scale-[0.85] sm:scale-[0.75] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl -z-10" />

      <div className="relative w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl border border-white/30 shadow-2xl rounded-3xl p-6 sm:p-10 md:p-12 bg-white/20 backdrop-blur-[14px]">
        <Meteors number={25} />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#2b2b2b] mb-2">
          Contact Us
        </h2>
        <p className="text-center text-[#3f3f3f] mb-6 text-sm sm:text-base">
          Looking for our Support or Services? Call us or Fill the Form given below.
        </p>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="text-green-800 bg-green-100 text-center font-medium mb-4 py-2 rounded-lg shadow animate-pulse"
            >
              Thank you for contacting us!
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2b2b2b]">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/60 text-[#1a1a1a] placeholder-gray-500 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#047a2e]"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[#2b2b2b]">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/60 text-[#1a1a1a] placeholder-gray-500 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#047a2e]"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2b2b2b]">Your Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/60 text-[#1a1a1a] placeholder-gray-500 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#047a2e]"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-[#2b2b2b]">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 bg-white/60 text-[#1a1a1a] placeholder-gray-500 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#047a2e]"
              placeholder="Write your message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 bg-[#047a2e] text-white font-medium py-2 rounded-lg hover:bg-[#047a4fd4] transition duration-200 shadow-md ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading && (
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            )}
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {errorToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            {errorToast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;
