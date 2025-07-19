import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here (e.g., send to email or API)
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="section-wrapper font-clash flex flex-col md:flex-row items-center my-20"
      id="contact"
    >
      <div className="flex flex-col w-full gap-5 mb-20 md:mb-0 text-4xl sm:text-4xl md:text-6xl lg:text-[4rem] font-clash text-[#a1a1a1] max-w-5xl font-medium lg:leading-tight">
        <p className="text-left">
          Contact me if <br />
          you want to <br />
          <span className="text-[white]">collaborate</span>
        </p>
        <p className="text-base font-regular">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
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
            className="w-full px-4 py-2 rounded-sm bg-[black] border border-[#a1a1a1] focus:outline-none focus:ring-1 focus:ring-[#B0FF92] text-[white]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
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
            className="w-full px-4 py-2 rounded-sm bg-[black] border border-[#8d8d8d] focus:outline-none focus:ring-1 focus:ring-[#B0FF92] text-white"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
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
            className="w-full px-4 py-2 rounded-sm bg-[black] border border-[#a1a1a1] focus:outline-none focus:ring-1 focus:ring-[#B0FF92] resize-none text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#B0FF92] hover:bg-[#B0FF92] transition-colors duration-300 font-semibold py-3 rounded-sm text-[black]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
