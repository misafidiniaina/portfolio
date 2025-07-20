import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_vy99f04";
    const TEMPLATE_ID = "template_qgq9voi";
    const PUBLIC_KEY = "04jgVgQQMQPdgHu2e";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success("Thanks! Your message was sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      className="section-wrapper font-clash flex flex-col md:flex-row items-center my-20"
      id="contact"
    >
      <div className="flex flex-col w-full gap-2 mb-10 md:mb-0 text-4xl sm:text-4xl md:text-6xl lg:text-[4rem] font-clash text-[#a1a1a1] max-w-5xl font-medium lg:leading-tight">
        <p className="text-left">
          Contact me if <br /> you want to <br />
          <span className="text-[white]">collaborate</span>
        </p>
        <p className="text-base font-regular">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full px-4 py-2 rounded-sm bg-[black] border border-[#707070] focus:outline-none focus:ring-1 focus:ring-[#B0FF92] text-[white]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 rounded-sm bg-[black] border border-[#707070] focus:outline-none focus:ring-1 focus:ring-[#B0FF92] text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 rounded-sm bg-[black] border border-[#707070] focus:outline-none focus:ring-1 focus:ring-[#B0FF92] resize-none text-white"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 bg-[#B0FF92] hover:bg-[#B0FF92] transition-colors duration-300 font-semibold py-3 rounded-sm text-[black] ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-black"
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
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
