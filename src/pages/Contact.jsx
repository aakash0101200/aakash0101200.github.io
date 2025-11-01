import React from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

/**
 * The Contact page.
 * Displays a contact form and other contact methods.
 */
const Contact = () => {

  // A simple handler for form submission.
  // In a real app, this would send data to a backend or email service.
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    // Here you would typically use fetch() or axios to send data
    // to your backend API or a service like Formspree/Netlify Forms.
    event.target.reset();
  };

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
          Get In Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I'm open to new opportunities and collaborations. Let's build something great together.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">

        {/* Left Column: Contact Form */}
        <div className="lg:w-2/3 w-full">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white
                             focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white
                             focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white
                             focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg
                             hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Contact Info */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-8 shadow-xl space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Details</h2>
            
            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-indigo-500/10 rounded-full">
                <Mail className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <a 
                  href="mailto:aakash.chauhan_cs12@gla.ac.in" // TODO: Update with your email
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                >
                  aakash.chauhan_cs12@gla.ac.in
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-indigo-500/10 rounded-full">
                <MapPin className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-300">[Your City, Country]</p>
                <p className="text-sm text-gray-400">(Open to remote work)</p>
              </div>
            </div>

            {/* Phone (Optional) */}
            {/* <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-indigo-500/10 rounded-full">
                <Phone className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+1 (234) 567-890</p>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

