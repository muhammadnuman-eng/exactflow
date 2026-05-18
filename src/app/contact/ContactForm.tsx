"use client";

import React, { useState } from "react";
import { ContactFormPayload, FormErrors } from "../home/types/contact";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormPayload>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim())
      newErrors.message = "Message field cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      alert("Message received successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl p-4 flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow-xl border border-gray-100 max-w-4xl m-auto p-8 sm:p-8 text-left">
        <h3 className="text-[18px] font-[500] text-[#2d3142] mb-6 tracking-tight">
          Share your ideas
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          {/* Name and Email Inputs Group */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            style={{
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
            }}
          >
            {/* Full Name */}
            <div className="relative w-full">
              <input
                suppressHydrationWarning
                type="text"
                name="fullName"
                id="fullName"
                placeholder=" "
                value={formData.fullName}
                onChange={handleChange}
                className={`peer w-full border px-4 py-3.5 rounded-[6px] text-[14px] bg-white text-gray-700 font-[700] outline-none transition-all ${
                  errors.fullName
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-red-600"
                }`}
              />
              <label
                htmlFor="fullName"
                className={`absolute left-3 top-1/2 -translate-y-1/2 px-1 text-[14px] transition-all duration-200 pointer-events-none bg-white origin-[0_0]
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
        peer-focus:top-0 peer-focus:scale-[0.85] 
        ${formData.fullName ? "top-0 scale-[0.85]" : ""}
        ${errors.fullName ? "text-red-500" : "text-gray-400 peer-focus:text-red-600"}`}
              >
                Full name * {/* <--- Yahan par text wapas add kar diya hai */}
              </label>
              {errors.fullName && (
                <span className="text-xs text-red-500 mt-1.5 block px-1">
                  {errors.fullName}
                </span>
              )}
            </div>
            {/* Email Address */}
            <div className="relative w-full">
              <input
                suppressHydrationWarning
                type="email"
                name="email"
                autoComplete="email"
                id="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                className={`peer w-full border px-4 py-3.5 rounded-[6px] text-[14px] bg-white text-gray-700 font-normal outline-none transition-all ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-red-600"
                }`}
              />
              <label
                htmlFor="email"
                className={`absolute left-3 top-1/2 -translate-y-1/2 px-1 text-[14px] transition-all duration-200 pointer-events-none bg-white origin-[0_0]
                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
                                peer-focus:top-0 peer-focus:scale-[0.85] 
                                ${formData.email ? "top-0 scale-[0.85]" : ""}
                                ${errors.email ? "text-red-500" : "text-gray-400 peer-focus:text-red-600"}`}
              >
                Email address *
              </label>
              {errors.email && (
                <span className="text-xs text-red-500 mt-1.5 block px-1">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div
            className="relative w-full"
            style={{
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
            }}
          >
                <input
                suppressHydrationWarning
                type="email"
                name="workEmail"
                autoComplete="email"
              id="workEmail"
              placeholder=" "
              value={formData.workEmail}
              onChange={handleChange}
              className="peer w-full border border-gray-300 px-4 py-3.5 rounded-[6px] text-[14px] bg-white text-gray-700 font-normal outline-none transition-all focus:border-red-600"
            />
            <label
              htmlFor="workEmail"
              className={`absolute left-3 top-1/2 -translate-y-1/2 px-1 text-[14px] transition-all duration-200 pointer-events-none bg-white origin-[0_0]
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
                            peer-focus:top-0 peer-focus:scale-[0.85] peer-focus:text-red-600
                            ${formData.workEmail ? "top-0 scale-[0.85]" : ""}
                            text-gray-400`}
            >
              Work email
            </label>
          </div>

          {/* Phone Input */}
          <div
            className="relative w-full"
            style={{
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
            }}
          >
            <input
              suppressHydrationWarning
              type="tel"
              name="phone"
              autoComplete="tel"
              id="phone"
              placeholder=" "
              value={formData.phone}
              onChange={handleChange}
              className="peer w-full border border-gray-300 px-4 py-3.5 rounded-[6px] text-[14px] bg-white text-gray-700 font-normal outline-none transition-all focus:border-red-600"
            />
            <label
              htmlFor="phone"
              className={`absolute left-3 top-1/2 -translate-y-1/2 px-1 text-[14px] transition-all duration-200 pointer-events-none bg-white origin-[0_0]
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
                            peer-focus:top-0 peer-focus:scale-[0.85] peer-focus:text-red-600
                            ${formData.phone ? "top-0 scale-[0.85]" : ""}
                            text-gray-400`}
            >
              Phone number (optional)
            </label>
          </div>

          {/* Message Textarea Area */}
          <div
            className="relative w-full"
            style={{
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
            }}
          >
            <textarea
              suppressHydrationWarning
              name="message"
              id="message"
              rows={6}
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              className={`peer w-full border px-4 py-3.5 rounded-[6px] text-[14px] bg-white text-gray-700 font-normal outline-none transition-all resize-none ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-red-600"
              }`}
            />
            <label
              htmlFor="message"
              className={`absolute left-3 top-6 px-1 text-[14px] transition-all duration-200 pointer-events-none bg-white origin-[0_0]
                            peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 
                            peer-focus:top-0 peer-focus:scale-[0.85] 
                            ${formData.message ? "top-0 scale-[0.85]" : ""}
                            ${errors.message ? "text-red-500" : "text-gray-400 peer-focus:text-red-600"}`}
            >
              Message *
            </label>
            {errors.message && (
              <span className="text-xs text-red-500 mt-1.5 block px-1">
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full text-left mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-[#d61a22] hover:bg-[#bc131a] text-white font-semibold px-7 py-3.5 rounded-[6px] transition-all duration-200 shadow-md shadow-red-600/10 hover:shadow-lg text-[15px] cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
