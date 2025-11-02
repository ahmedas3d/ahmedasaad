import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would integrate with EmailJS or your backend
      console.log('Form data:', data);

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="card p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Form Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-header font-bold text-light-text dark:text-dark-text mb-4">
          <span className="text-tech-blue">&lt;</span>
          Send Message
          <span className="text-tech-blue">/&gt;</span>
        </h3>

        {/* Terminal Command */}
        <div className="inline-block p-3 bg-dark-bg-terminal rounded-lg border border-dark-border mb-4">
          <div className="flex items-center space-x-2 text-tech-green font-code text-sm">
            <span className="text-tech-blue">$</span>
            <span>mailto:ahmedxasaad@gmail.com</span>
            <div className="w-2 h-4 bg-tech-green animate-pulse ml-1"></div>
          </div>
        </div>

        <p className="text-light-text-secondary dark:text-dark-text-secondary">
          Ready to start your next mobile project? Let's discuss how I can help bring your app idea to life.
        </p>
      </motion.div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          className="mb-6 p-4 bg-tech-green/20 border border-tech-green rounded-lg flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaCheckCircle className="text-tech-green" />
          <div>
            <h4 className="font-code font-semibold text-tech-green">{t('contact.form.success')}</h4>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              {t('contact.form.successMessage')}
            </p>
          </div>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaExclamationTriangle className="text-red-500" />
          <div>
            <h4 className="font-code font-semibold text-red-500">{t('contact.form.error')}</h4>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              {t('contact.form.errorMessage')}
            </p>
          </div>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label className="form-label flex items-center space-x-2">
              <FaUser className="text-primary-red" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              className={`form-input ${errors.name ? 'border-red-500 ring-red-500' : ''}`}
              placeholder={t('contact.form.name')}
            />
            {errors.name && (
              <motion.p
                className="text-red-500 text-sm mt-1 font-code"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.name.message}
              </motion.p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label className="form-label flex items-center space-x-2">
              <FaEnvelope className="text-primary-red" />
              <span>Email Address *</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`form-input ${errors.email ? 'border-red-500 ring-red-500' : ''}`}
              placeholder={t('contact.form.email')}
            />
            {errors.email && (
              <motion.p
                className="text-red-500 text-sm mt-1 font-code"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.email.message}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Subject Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <label className="form-label flex items-center space-x-2">
            <FaComment className="text-primary-red" />
            <span>Subject *</span>
          </label>
          <input
            type="text"
            {...register('subject', {
              required: 'Subject is required',
              minLength: { value: 5, message: 'Subject must be at least 5 characters' }
            })}
            className={`form-input ${errors.subject ? 'border-red-500 ring-red-500' : ''}`}
            placeholder={t('contact.form.subject')}
          />
          {errors.subject && (
            <motion.p
              className="text-red-500 text-sm mt-1 font-code"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.subject.message}
            </motion.p>
          )}
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <label className="form-label flex items-center space-x-2">
            <FaComment className="text-primary-red" />
            <span>Message *</span>
          </label>
          <textarea
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 20, message: 'Message must be at least 20 characters' }
            })}
            className={`form-textarea ${errors.message ? 'border-red-500 ring-red-500' : ''}`}
            rows={6}
            placeholder={t('contact.form.message')}
          />
          {errors.message && (
            <motion.p
              className="text-red-500 text-sm mt-1 font-code"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.message.message}
            </motion.p>
          )}
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div
          className="p-4 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg border border-light-border dark:border-dark-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h4 className="font-code font-semibold text-light-text dark:text-dark-text mb-3">
            Quick Project Types:
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              'Flutter App Development',
              'UI/UX Implementation',
              'Firebase Integration',
              'App Store Deployment',
              'Technical Consultation',
              'Code Review'
            ].map((type, index) => (
              <motion.button
                key={type}
                type="button"
                onClick={() => {
                  const subjectInput = document.querySelector('input[name="subject"]') as HTMLInputElement;
                  if (subjectInput) {
                    subjectInput.value = type;
                  }
                }}
                className="text-xs px-3 py-1 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-md hover:bg-primary-red hover:text-white transition-colors duration-200 font-code"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary w-full md:w-auto flex items-center justify-center space-x-2 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="font-code">{t('contact.form.sending')}</span>
              </>
            ) : (
              <>
                <FaPaperPlane />
                <span className="font-code">{t('contact.form.send')}</span>
              </>
            )}
          </motion.button>

          <p className="text-xs text-light-text-muted dark:text-dark-text-muted mt-3 font-code">
            Expected response time: 24 hours
          </p>
        </motion.div>
      </form>

      {/* Alternative Contact Methods */}
      <motion.div
        className="mt-8 pt-6 border-t border-light-border dark:border-dark-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <h4 className="font-code font-semibold text-light-text dark:text-dark-text mb-4 text-center">
          Or reach me directly:
        </h4>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:ahmedxasaad@gmail.com"
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg hover:bg-primary-red hover:text-white transition-colors duration-300 font-code text-sm"
          >
            <FaEnvelope />
            <span>ahmedxasaad@gmail.com</span>
          </a>
          <a
            href="https://wa.me/201014781603"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg hover:bg-tech-green hover:text-white transition-colors duration-300 font-code text-sm"
          >
            <span>📱</span>
            <span>+201014781603</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;