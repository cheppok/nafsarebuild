import {
	Shield,
	Users,
	Award,
	Target,
	Eye,
	Heart,
	CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-linear-to-br from-aviation-blue to-blue-800 text-white section-padding">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h1 className="text-4xl lg:text-5xl font-bold mb-6">
							About Aviation Fire Association
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
							For over 25 years, we have been the leading
							authority in aviation fire safety, dedicated to
							protecting lives, aircraft, and aviation
							infrastructure worldwide.
						</p>
					</div>
				</div>
			</section>

			{/* Mission, Vision, Values */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="bg-aviation-orange/10 p-4 rounded-full w-fit mx-auto mb-6">
								<Target className="h-8 w-8 text-aviation-orange" />
							</div>
							<h3 className="text-2xl font-bold text-aviation-blue mb-4">
								Our Mission
							</h3>
							<p className="text-aviation-gray leading-relaxed">
								To enhance fire welfare, advance fire safety
								through education, training, advocacy, and
								support for firemen and safety professionals
								nationwide. We are committed to reducing
								fire-related injuries and deaths while
								supporting those who dedicate their lives to
								protecting others.
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-blue/10 p-4 rounded-full w-fit mx-auto mb-6">
								<Eye className="h-8 w-8 text-aviation-blue" />
							</div>
							<h3 className="text-2xl font-bold text-aviation-blue mb-4">
								Our Vision
							</h3>
							<p className="text-aviation-gray leading-relaxed">
								To be the global leader in aviation fire safety,
								creating a world where every aircraft operation
								is protected by the highest standards of fire
								safety.
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-orange/10 p-4 rounded-full w-fit mx-auto mb-6">
								<Heart className="h-8 w-8 text-aviation-orange" />
							</div>
							<h3 className="text-2xl font-bold text-aviation-blue mb-4">
								Our Values
							</h3>
							<p className="text-aviation-gray leading-relaxed">
								Excellence, integrity, safety, and continuous
								learning guide everything we do. We believe in
								protecting lives through professional dedication
								and expertise.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className="section-padding bg-aviation-light">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl lg:text-4xl font-bold text-aviation-blue mb-6">
								Our Story
							</h2>
							<div className="space-y-4 text-aviation-gray leading-relaxed">
								<p>
									The Nigerian Aviation Fire and Safety
									Association(NAFSA) is a Professional
									Association, an Independent Entity, a
									Non-Governmental Agency(NGO), duly
									registered for nearly three decades now,
									with lofty aims and objectives among which
									are upscaling and uplifting the standard of
									Aviation Fire Service, Fire Protection and
									Prevention in the Aviation Sector, majoring
									on liaising with the relevant Aviation
									Agencies, and rendering technical advice to
									the relevant Aviation Agencies and
									Authorities, as Gatekeepers of Safety in the
									Aviation Sector. NAFSA has collaborations
									with the Federal Ministry of Aviation and
									Aerospace Development, FAAN, NCAA, NAMA,
									NCAT and NSIB; with Professional
									Associations like NATCA and NAAPE. As
									Gatekeepers of Safety in the Aviation
									Sector, we are mandated to liaise with
									relevant Aviation Agencies and render
									technical advice to ensure the highest
									standards of safety and security.
								</p>
								<p>
									What started as a small group of passionate
									individuals has grown into a premier
									organization with over 1000 members across
									Nigeria, representing airports, emergency
									services, and training institutions.
								</p>
								<p>
									Today, we continue to lead the industry
									through innovative training programs
									initiatives, cutting-edge research, and the
									development of safety standards that protect
									millions of passengers and aviation
									personnel nationwide.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-white p-6 rounded-lg shadow-lg">
								<h4 className="text-3xl font-bold text-aviation-orange mb-2">
									1000+
								</h4>
								<p className="text-aviation-gray">
									Certified Members
								</p>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-lg">
								<h4 className="text-3xl font-bold text-aviation-blue mb-2">
									25+
								</h4>
								<p className="text-aviation-gray">
									Years of Excellence
								</p>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-lg">
								<h4 className="text-3xl font-bold text-aviation-orange mb-2">
									50+
								</h4>
								<p className="text-aviation-gray">
									Training Programs
								</p>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-lg">
								<h4 className="text-3xl font-bold text-aviation-blue mb-2">
									24/7
								</h4>
								<p className="text-aviation-gray">
									Support Available
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What We Do */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl lg:text-4xl font-bold text-aviation-blue mb-4">
							What We Do
						</h2>
						<p className="text-xl text-aviation-gray max-w-3xl mx-auto">
							We provide comprehensive solutions for aviation fire
							safety professionals
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex items-start space-x-4">
							<div className="bg-aviation-orange/10 p-3 rounded-lg flex-shrink-0">
								<Shield className="h-6 w-6 text-aviation-orange" />
							</div>
							<div>
								<h4 className="text-xl font-semibold text-aviation-blue mb-2">
									Professional Training
								</h4>
								<p className="text-aviation-gray">
									Comprehensive certification programs
									covering all aspects of aviation fire
									safety, from basic principles to advanced
									emergency response techniques.
								</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="bg-aviation-blue/10 p-3 rounded-lg flex-shrink-0">
								<Users className="h-6 w-6 text-aviation-blue" />
							</div>
							<div>
								<h4 className="text-xl font-semibold text-aviation-blue mb-2">
									Member Network
								</h4>
								<p className="text-aviation-gray">
									Connect with industry professionals, share
									knowledge, and collaborate on safety
									initiatives that advance the entire aviation
									fire safety community.
								</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="bg-aviation-orange/10 p-3 rounded-lg flex-shrink-0">
								<Award className="h-6 w-6 text-aviation-orange" />
							</div>
							<div>
								<h4 className="text-xl font-semibold text-aviation-blue mb-2">
									Standards Development
								</h4>
								<p className="text-aviation-gray">
									Lead the development of industry standards
									and best practices that ensure the highest
									levels of safety across all aviation
									operations.
								</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="bg-aviation-blue/10 p-3 rounded-lg flex-shrink-0">
								<CheckCircle className="h-6 w-6 text-aviation-blue" />
							</div>
							<div>
								<h4 className="text-xl font-semibold text-aviation-blue mb-2">
									Consultation Services
								</h4>
								<p className="text-aviation-gray">
									Expert consultation for airports, airlines,
									and organizations seeking to improve their
									fire safety protocols and emergency
									preparedness.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="section-padding bg-aviation-blue text-white">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Join Our Mission?
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Become part of the leading aviation fire safety
						association and help us create a safer future for
						aviation worldwide.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact" className="btn-primary">
							Become a Member
						</Link>
						<Link href="/members" className="btn-secondary">
							Meet Our Team
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
