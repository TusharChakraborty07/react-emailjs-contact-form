import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const formData = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Admin mail
      await emailjs.sendForm(
        "service_p56dz8w",
        "template_7utiosr",
        formData.current,
        "lvnSrkdzXH3cyZJjc",
      );

      // Auto reply mail
      await emailjs.sendForm(
        "service_p56dz8w",
        "template_u6ym995",
        formData.current,
        "lvnSrkdzXH3cyZJjc",
      );

      toast.success("Message sent successfully");
      formData.current.reset();
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <main className="bg-white p-5 sm:p-7 border border-zinc-300 rounded-lg shadow-lg w-full max-w-[600px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl text-zinc-800 mb-2 font-bold">
          Get In Touch
        </h1>
        <p className="text-sm sm:text-md text-zinc-500">
          We are here to help. Send us a message and we will get back to you.
        </p>
      </div>

      {/* Form */}
      <form
        autoComplete="off"
        onSubmit={sendEmail}
        ref={formData}
        className="text-left"
      >
        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4">
          {/* Name */}
          <div className="flex-1">
            <label className="mb-2 text-zinc-800 block">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="rounded-lg border border-zinc-300 w-full bg-zinc-100 h-11 px-3 focus:outline-blue-600"
            />
          </div>

          {/* Email */}
          <div className="flex-1">
            <label className="mb-2 block text-zinc-800">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="rounded-lg border border-zinc-300 w-full bg-zinc-100 h-11 px-3 focus:outline-blue-600"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mt-4">
          <label className="mb-2 block text-zinc-800">Subject</label>
          <input
            type="text"
            name="user_subject"
            required
            className="border border-zinc-300 w-full bg-zinc-100 h-11 px-3 focus:outline-blue-600 rounded-lg"
          />
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="mb-2 block text-zinc-800">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="border border-zinc-300 w-full bg-zinc-100 resize-none p-3 focus:outline-blue-600 rounded-lg"
          ></textarea>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg active:bg-blue-900 hover:cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactForm;
