import Link from "next/link";
// import Image from "next/image";
import {
	Shield,
	Users,
	Award,
	ArrowRight,
	CheckCircle,
	// Flame,
	Plane,
	AlertTriangle,
} from "lucide-react";

export default function Home() {
	return (
		<div>
			{/* Hero Section */}
			{/* <section className="relative bg-linear-to-br from-aviation-blue to-blue-800 text-white overflow-hidden">
				<div className="absolute inset-0 bg-black opacity-20"></div>
				<div className="relative container-custom section-padding">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
								Leading Aviation{" "}
								<span className="text-aviation-orange">
									Fire Safety
								</span>{" "}
								Excellence
							</h1>
							<p className="text-xl mb-8 text-blue-100 leading-relaxed">
								Professional training, certification, and
								resources for aviation fire safety professionals
								worldwide. Join the premier association
								dedicated to protecting lives and aircraft.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="/training"
									className="btn-primary inline-flex items-center"
								>
									Start Training{" "}
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
								<Link
									href="/members"
									className="btn-secondary inline-flex items-center"
								>
									Meet Our Members{" "}
									<Users className="ml-2 h-5 w-5" />
								</Link>
							</div>
						</div>
						<div className="relative">
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
								<div className="grid grid-cols-2 gap-6">
									<div className="text-center">
										<div className="bg-aviation-orange p-3 rounded-full w-fit mx-auto mb-3">
											<Shield className="h-8 w-8" />
										</div>
										<h3 className="text-2xl font-bold">
											500+
										</h3>
										<p className="text-blue-200">
											Certified Members
										</p>
									</div>
									<div className="text-center">
										<div className="bg-aviation-orange p-3 rounded-full w-fit mx-auto mb-3">
											<Award className="h-8 w-8" />
										</div>
										<h3 className="text-2xl font-bold">
											15+
										</h3>
										<p className="text-blue-200">
											Years Experience
										</p>
									</div>
									<div className="text-center">
										<div className="bg-aviation-orange p-3 rounded-full w-fit mx-auto mb-3">
											<Plane className="h-8 w-8" />
										</div>
										<h3 className="text-2xl font-bold">
											1000+
										</h3>
										<p className="text-blue-200">
											Aircraft Protected
										</p>
									</div>
									<div className="text-center">
										<div className="bg-aviation-orange p-3 rounded-full w-fit mx-auto mb-3">
											<AlertTriangle className="h-8 w-8" />
										</div>
										<h3 className="text-2xl font-bold">
											24/7
										</h3>
										<p className="text-blue-200">
											Emergency Support
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			{/* Hero Section */}
			<section
				className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden"
				style={{
					backgroundImage: "url('/train2.jpg')", // replace with your actual image path
				}}
			>
				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-black/50"></div>

				<div className="relative container-custom section-padding">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
								Leading Aviation{" "}
								<span className="text-aviation-orange">
									Fire Safety
								</span>{" "}
								Excellence
							</h1>
							<p className="text-xl mb-8 text-blue-100 leading-relaxed">
								Professional training, certification, and
								resources for aviation fire safety professionals
								in Nigeria. The premier association dedicated to
								protecting lives and aircraft.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="/training"
									className="btn-primary inline-flex items-center"
								>
									Start Training{" "}
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
								<Link
									href="/executives"
									className="btn-secondary inline-flex items-center"
								>
									Meet Our Executives{" "}
									<Users className="ml-2 h-5 w-5" />
								</Link>
							</div>
						</div>

						<div className="relative">
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
								<div className="grid grid-cols-2 gap-6">
									<div className="text-center">
										<div className="bg-aviation-orange p-3 rounded-full w-fit mx-auto mb-3">
											<Shield className="h-8 w-8" />
										</div>
										<h3 className="text-2xl font-bold">
											500+
										</h3>
										<p className="text-blue-200">
											Certified Members
										</p>
									</div>
									<div className="text-center">
										<div className="bg-aviation-orange p-3 rounded-full w-fit mx-auto mb-3">
											<Award className="h-8 w-8" />
										</div>
										<h3 className="text-2xl font-bold">
											35+
										</h3>
										<p className="text-blue-200">
											Years Experience
										</p>
									</div>
									<div className="text-center">
										<div className="bg-aviation-orange p-3 rounded-full w-fit mx-auto mb-3">
											<Plane className="h-8 w-8" />
										</div>
										<h3 className="text-2xl font-bold">
											100000+
										</h3>
										<p className="text-blue-200">
											Aircraft Protected
										</p>
									</div>
									<div className="text-center">
										<div className="bg-aviation-orange p-3 rounded-full w-fit mx-auto mb-3">
											<AlertTriangle className="h-8 w-8" />
										</div>
										<h3 className="text-2xl font-bold">
											24/7
										</h3>
										<p className="text-blue-200">
											Emergency Support
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Preview */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl lg:text-4xl font-bold text-aviation-blue mb-4">
							Our Core Services
						</h2>
						<p className="text-xl text-aviation-gray max-w-3xl mx-auto">
							Comprehensive fire safety solutions tailored for the
							aviation industry
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="card p-8 text-center">
							<div className="bg-aviation-orange/10 p-4 rounded-full w-fit mx-auto mb-6">
								<Shield className="h-8 w-8 text-aviation-orange" />
							</div>
							<h3 className="text-xl font-semibold mb-4 text-aviation-blue">
								Professional Training
							</h3>
							<p className="text-aviation-gray mb-6">
								Comprehensive certification programs for all
								levels of aviation fire safety professionals.
							</p>
							<Link
								href="/training"
								className="text-aviation-orange font-semibold hover:underline"
							>
								Learn More →
							</Link>
						</div>

						<div className="card p-8 text-center">
							<div className="bg-aviation-blue/10 p-4 rounded-full w-fit mx-auto mb-6">
								<Users className="h-8 w-8 text-aviation-blue" />
							</div>
							<h3 className="text-xl font-semibold mb-4 text-aviation-blue">
								Expert Consultation
							</h3>
							<p className="text-aviation-gray mb-6">
								Professional guidance from our certified members
								and industry experts.
							</p>
							<Link
								href="/services"
								className="text-aviation-orange font-semibold hover:underline"
							>
								Learn More →
							</Link>
						</div>

						<div className="card p-8 text-center">
							<div className="bg-aviation-orange/10 p-4 rounded-full w-fit mx-auto mb-6">
								<Award className="h-8 w-8 text-aviation-orange" />
							</div>
							<h3 className="text-xl font-semibold mb-4 text-aviation-blue">
								Certification Programs
							</h3>
							<p className="text-aviation-gray mb-6">
								Industry-recognized certifications that advance
								your career in aviation fire safety.
							</p>
							<Link
								href="/training"
								className="text-aviation-orange font-semibold hover:underline"
							>
								Learn More →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="section-padding bg-aviation-light">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl lg:text-4xl font-bold text-aviation-blue mb-6">
								Why Choose Nigerian Aviation Fire & Safety
								Association?
							</h2>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-6 w-6 text-aviation-orange mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-aviation-blue">
											Industry Expertise
										</h4>
										<p className="text-aviation-gray">
											Over 35 years of specialized
											aviation fire safety experience
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-6 w-6 text-aviation-orange mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-aviation-blue">
											Certified Professionals
										</h4>
										<p className="text-aviation-gray">
											Learn from our network of 1000+
											certified members
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-6 w-6 text-aviation-orange mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-aviation-blue">
											Comprehensive Resources
										</h4>
										<p className="text-aviation-gray">
											Access to latest standards,
											guidelines, and best practices
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-6 w-6 text-aviation-orange mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-aviation-blue">
											24/7 Support
										</h4>
										<p className="text-aviation-gray">
											Round-the-clock emergency support
											and consultation
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="bg-gradient-to-br from-aviation-blue to-blue-700 rounded-2xl p-8 text-white">
								<h3 className="text-2xl font-bold mb-6">
									Ready to Get Started?
								</h3>
								<p className="mb-6 text-blue-100">
									Join our community of aviation fire safety
									professionals and take your career to new
									heights.
								</p>
								<div className="space-y-4">
									<Link
										href="/contact"
										className="btn-primary w-full text-center block"
									>
										Join Our Association
									</Link>
									<Link
										href="/training"
										className="block text-center text-blue-200 hover:text-white transition-colors"
									>
										Browse Training Programs →
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
