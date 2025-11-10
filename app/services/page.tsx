import Link from "next/link";
import {
	Shield,
	Users,
	Award,
	CheckCircle,
	BookOpen,
	Wrench,
	Phone,
	Handshake,
	GraduationCap,
} from "lucide-react";

export default function ServicesPage() {
	const services = [
		{
			icon: Handshake,
			title: "Welfare & Support",
			description:
				"Advocate for better welfare of firemen, handles every work related legal battles of members.",
			features: [
				"Welfare Advocacy",
				"Medical support",
				"Educational Support",
				"Legal Representation",
				"Retiremeny Benefits",
			],
			cta: "Welfare Enquiry",
			link: "/contact",
		},
		{
			icon: Award,
			title: "Professional Recognition",
			description:
				"Programs to recognize excellence and achievements in fire safety and emergency services.",
			features: [
				"Retirement Award",
				"Annual Awards",
				"Hero Recognition",
				"Excellence Certifications",
				"Achievement Badges",
			],
			cta: "Award enquiry",
			link: "/contact",
		},
		{
			icon: GraduationCap,
			title: "Professional Training Programs",
			description:
				"Comprehensive certification courses for all levels of aviation fire safety professionals.",
			features: [
				"Basic ARFF Certification",
				"Advanced Emergency Response",
				"Instructor Development",
				"Recertification Programs",
				"Hands-on Simulation Training",
			],
			cta: "Explore Training",
			link: "/training",
		},
		{
			icon: Users,
			title: "Networking & Events",
			description:
				"Connect with fellow professionals through conferences, seminars, and networking events.",
			features: [
				"Annual Conference",
				"Regional Meetings",
				"Professional Seminars",
				"Professional Workshops",
				"Online Community",
			],
			cta: "Get Consultation",
			link: "/contact",
		},

		{
			icon: Wrench,
			title: "Equipment Evaluation & Testing",
			description:
				"Comprehensive testing and evaluation services for fire safety equipment.",
			features: [
				"Equipment Certification",
				"Performance Testing",
				"Maintenance Standards",
				"Quality Assurance",
				"Compliance Verification",
			],
			cta: "Learn More",
			link: "/contact",
		},
		{
			icon: BookOpen,
			title: "Standards Development",
			description:
				"Leading the development of industry standards and best practices.",
			features: [
				"Industry Standard Creation",
				"Best Practice Guidelines",
				"Technical Documentation",
				"Regulatory Compliance",
				"International Coordination",
			],
			cta: "View Standards",
			link: "/resources",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-linear-to-br from-aviation-blue to-blue-800 text-white section-padding">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h1 className="text-4xl lg:text-5xl font-bold mb-6">
							Our Services
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
							NAFSA provides comprehensive services to support
							firefighters, fire departments, and fire safety
							professionals throughout their careers.
						</p>
					</div>

					{/* Service Stats */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Shield className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">50+</h3>
							<p className="text-blue-200">Training Programs</p>
						</div>
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Users className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">20+</h3>
							<p className="text-blue-200">
								Airports Served Airports Served
							</p>
						</div>
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Award className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">1000+</h3>
							<p className="text-blue-200">
								Professionals Certified
							</p>
						</div>
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Phone className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">24/7</h3>
							<p className="text-blue-200">Emergency Support</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{services.map((service, index) => {
							const IconComponent = service.icon;
							return (
								<div
									key={index}
									className="card p-8 hover:shadow-xl transition-shadow duration-300"
								>
									<div className="flex items-start space-x-4 mb-6">
										<div className="bg-aviation-orange/10 p-3 rounded-lg shrink-0">
											<IconComponent className="h-8 w-8 text-aviation-orange" />
										</div>
										<div className="grow">
											<h3 className="text-2xl font-bold text-aviation-blue mb-3">
												{service.title}
											</h3>
											<p className="text-aviation-gray leading-relaxed">
												{service.description}
											</p>
										</div>
									</div>

									<div className="mb-6">
										<h4 className="text-sm font-semibold text-aviation-blue mb-3 uppercase tracking-wide">
											What is Included:
										</h4>
										<ul className="space-y-2">
											{service.features.map(
												(feature, featureIndex) => (
													<li
														key={featureIndex}
														className="flex items-center space-x-2 text-aviation-gray"
													>
														<CheckCircle className="h-4 w-4 text-aviation-orange flex-shrink-0" />
														<span>{feature}</span>
													</li>
												)
											)}
										</ul>
									</div>

									<Link
										href={service.link}
										className="btn-primary w-full text-center"
									>
										{service.cta}
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="section-padding bg-aviation-light">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl lg:text-4xl font-bold text-aviation-blue mb-4">
							How We Work
						</h2>
						<p className="text-xl text-aviation-gray max-w-3xl mx-auto">
							Our proven process ensures you receive the highest
							quality service and support
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="bg-aviation-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
								1
							</div>
							<h3 className="text-lg font-semibold text-aviation-blue mb-2">
								Assessment
							</h3>
							<p className="text-aviation-gray text-sm">
								We assess the current needs of our members and
								develop a customized solution plan
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
								2
							</div>
							<h3 className="text-lg font-semibold text-aviation-blue mb-2">
								Planning
							</h3>
							<p className="text-aviation-gray text-sm">
								Our experts create a detailed implementation
								strategy tailored to our members and our
								organization
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
								3
							</div>
							<h3 className="text-lg font-semibold text-aviation-blue mb-2">
								Implementation
							</h3>
							<p className="text-aviation-gray text-sm">
								We deliver our services with precision and
								attention to detail
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
								4
							</div>
							<h3 className="text-lg font-semibold text-aviation-blue mb-2">
								Support
							</h3>
							<p className="text-aviation-gray text-sm">
								Ongoing support and maintenance to ensure
								continued success
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-aviation-blue text-white">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Enhance Your Aviation Fire Safety?
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Contact our team of experts to discuss your specific
						needs and learn how we can help improve your aviation
						fire safety programs.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact" className="btn-primary">
							Get Started Today
						</Link>
						<Link href="/about" className="btn-secondary">
							Learn More About Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
