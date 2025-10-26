"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		organization: "",
		subject: "",
		message: "",
		inquiryType: "general",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		alert("Thank you for your message! We'll get back to you soon.");
		// Reset form
		setFormData({
			name: "",
			email: "",
			phone: "",
			organization: "",
			subject: "",
			message: "",
			inquiryType: "general",
		});
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-aviation-blue to-blue-800 text-white section-padding">
				<div className="container-custom">
					<div className="text-center">
						<h1 className="text-4xl lg:text-5xl font-bold mb-6">
							Contact Us
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
							Get in touch with our team of aviation fire safety
							experts. We are here to help with training,
							certification, consultation, and emergency support.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Information */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
						<div className="text-center">
							<div className="bg-aviation-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
								<MapPin className="h-8 w-8 text-aviation-orange" />
							</div>
							<h3 className="text-lg font-semibold text-aviation-blue mb-2">
								Address
							</h3>
							<p className="text-aviation-gray">
								123 Aviation Boulevard
								<br />
								Fire Safety City, FS 12345
								<br />
								United States
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-blue/10 p-4 rounded-full w-fit mx-auto mb-4">
								<Phone className="h-8 w-8 text-aviation-blue" />
							</div>
							<h3 className="text-lg font-semibold text-aviation-blue mb-2">
								Phone
							</h3>
							<p className="text-aviation-gray">
								Main: +1 (555) 123-4567
								<br />
								Emergency: +1 (555) 911-FIRE
								<br />
								Training: +1 (555) 123-TRAIN
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
								<Mail className="h-8 w-8 text-aviation-orange" />
							</div>
							<h3 className="text-lg font-semibold text-aviation-blue mb-2">
								Email
							</h3>
							<p className="text-aviation-gray">
								General: info@aviationfire.org
								<br />
								Training: training@aviationfire.org
								<br />
								Emergency: emergency@aviationfire.org
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-blue/10 p-4 rounded-full w-fit mx-auto mb-4">
								<Clock className="h-8 w-8 text-aviation-blue" />
							</div>
							<h3 className="text-lg font-semibold text-aviation-blue mb-2">
								Hours
							</h3>
							<p className="text-aviation-gray">
								Mon-Fri: 8:00 AM - 6:00 PM
								<br />
								Saturday: 9:00 AM - 4:00 PM
								<br />
								Emergency: 24/7 Available
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<section className="section-padding bg-aviation-light">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-aviation-blue mb-4">
								Send Us a Message
							</h2>
							<p className="text-xl text-aviation-gray">
								Fill out the form below and we'll get back to
								you within 24 hours
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg p-8">
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Inquiry Type */}
								<div>
									<label
										htmlFor="inquiryType"
										className="block text-sm font-semibold text-aviation-blue mb-2"
									>
										Type of Inquiry
									</label>
									<select
										id="inquiryType"
										name="inquiryType"
										value={formData.inquiryType}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-orange focus:border-transparent"
										required
									>
										<option value="general">
											General Information
										</option>
										<option value="membership">
											Membership
										</option>
										<option value="training">
											Training Programs
										</option>
										<option value="certification">
											Certification
										</option>
										<option value="consultation">
											Consultation Services
										</option>
										<option value="emergency">
											Emergency Support
										</option>
										<option value="partnership">
											Partnership Opportunities
										</option>
									</select>
								</div>

								{/* Name and Email */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-semibold text-aviation-blue mb-2"
										>
											Full Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-orange focus:border-transparent"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-semibold text-aviation-blue mb-2"
										>
											Email Address *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-orange focus:border-transparent"
											required
										/>
									</div>
								</div>

								{/* Phone and Organization */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-semibold text-aviation-blue mb-2"
										>
											Phone Number
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-orange focus:border-transparent"
										/>
									</div>
									<div>
										<label
											htmlFor="organization"
											className="block text-sm font-semibold text-aviation-blue mb-2"
										>
											Organization/Company
										</label>
										<input
											type="text"
											id="organization"
											name="organization"
											value={formData.organization}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-orange focus:border-transparent"
										/>
									</div>
								</div>

								{/* Subject */}
								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-semibold text-aviation-blue mb-2"
									>
										Subject *
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-orange focus:border-transparent"
										required
									/>
								</div>

								{/* Message */}
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-semibold text-aviation-blue mb-2"
									>
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-orange focus:border-transparent resize-vertical"
										required
									></textarea>
								</div>

								{/* Submit Button */}
								<div className="text-center">
									<button
										type="submit"
										className="btn-primary inline-flex items-center space-x-2"
									>
										<Send className="h-5 w-5" />
										<span>Send Message</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Emergency Contact */}
			<section className="section-padding bg-aviation-red text-white">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold mb-4">
						Emergency Support
					</h2>
					<p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
						For immediate emergency assistance related to aviation
						fire incidents, contact our 24/7 emergency response
						team.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:+15559110000"
							className="bg-white text-aviation-red font-semibold py-3 px-6 rounded-lg hover:bg-red-50 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
						>
							<Phone className="h-5 w-5" />
							<span>Call Emergency Line</span>
						</a>
						<a
							href="mailto:emergency@aviationfire.org"
							className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
						>
							<Mail className="h-5 w-5" />
							<span>Emergency Email</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
