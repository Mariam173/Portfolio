 import React from "react";

const Contact = () => {
  return (
    <section
      id="contact" 
      className="bg-[#222831] text-white py-16 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-[#00adb5]">
              Got a Project in mind?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through this form, and i’ll get back to you as soon as possible.
            </p>
          </div>

          <img
            src="/images/image5.png"
            alt="Contact illustration"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
        </div>

        
        <form
          action="#"
          method="POST"
          className="flex flex-col gap-4 bg-[#393e46] p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-[#222831] text-white placeholder-gray-400 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-[#222831] text-white placeholder-gray-400 focus:outline-none"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-md bg-[#222831] text-white placeholder-gray-400 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#00adb5] hover:bg-cyan-600 text-white py-2 px-6 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section> 
  );
};

export default Contact;
