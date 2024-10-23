import { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react'; // Importing Lucide icons
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Contact Me</h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white transition duration-200 focus:ring focus:ring-sky-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white transition duration-200 focus:ring focus:ring-sky-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white transition duration-200 focus:ring focus:ring-sky-400 focus:outline-none"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition duration-300 active:bg-sky-700"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;