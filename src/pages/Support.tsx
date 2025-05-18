"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, MessageSquare } from "lucide-react"

const Support = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  // Form status
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    // Validate form
    if (!formData.fullName || !formData.email || !formData.message) {
      setIsSubmitting(false)
      setSubmitStatus("error")
      setErrorMessage("Please fill in all required fields.")
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setSubmitStatus("success")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      // Error
      setSubmitStatus("error")
      setErrorMessage("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] flex items-center">
        <img
          src="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Support Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">Support</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto md:mx-0">
              We're here to help. Reach out to our team with any questions or concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm mt-1">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start">
                  <AlertCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">There was a problem</p>
                    <p className="text-sm mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Account Issues">Account Issues</option>
                    <option value="Billing Questions">Billing Questions</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Offices</h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                          <MapPin className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">Perth Headquarters</h4>
                        <p className="mt-1 text-sm text-gray-600">
                          Level 12, 197 St Georges Terrace
                          <br />
                          Perth, WA 6000
                          <br />
                          Australia
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                          <MapPin className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">Sydney Office</h4>
                        <p className="mt-1 text-sm text-gray-600">
                          Level 8, 120 Pitt Street
                          <br />
                          Sydney, NSW 2000
                          <br />
                          Australia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>

                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Phone</p>
                        <a href="tel:+61861234567" className="mt-1 text-sm text-blue-600 hover:text-blue-800">
                          +61 8 6123 4567
                        </a>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                          <Mail className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Email</p>
                        <a
                          href="mailto:support@bluescope.com"
                          className="mt-1 text-sm text-blue-600 hover:text-blue-800"
                        >
                          support@bluescope.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM AEST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM AEST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about our services and operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "How can I become a member?",
                answer:
                  "To become a member, visit our Sign Up page and complete the registration process. Once your application is reviewed, you'll receive access to our exclusive member benefits.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, bank transfers, and cryptocurrency payments. For large transactions, we also offer escrow services for added security.",
              },
              {
                question: "How can I track my investments?",
                answer:
                  "Members can track their investments through our secure online portal. Simply log in to your account and navigate to the 'Portfolio' section to view real-time updates.",
              },
              {
                question: "What is your refund policy?",
                answer:
                  "Our refund policy varies depending on the service or product. Please refer to the specific terms and conditions provided at the time of purchase or contact our support team for assistance.",
              },
              {
                question: "How do I update my account information?",
                answer:
                  "You can update your account information by logging into your member portal and navigating to the 'Account Settings' section. From there, you can modify your personal details, contact information, and communication preferences.",
              },
              {
                question: "Do you offer international services?",
                answer:
                  "Yes, we operate globally and offer services to clients in most countries. However, certain restrictions may apply based on local regulations. Please contact us for specific information regarding your region.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
