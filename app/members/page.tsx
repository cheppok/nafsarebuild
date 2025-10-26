import Image from "next/image";
import { MapPin, Award, Calendar, Users, Search } from "lucide-react";

// Sample member data - In a real app, this would come from a database
const members = [
	{
		id: 1,
		name: "Captain Sarah Johnson",
		title: "Chief Fire Safety Officer",
		location: "Los Angeles, CA",
		experience: "15 years",
		certifications: [
			"ARFF Instructor",
			"Emergency Response",
			"Safety Management",
		],
		image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
		joinDate: "2015",
		specialties: [
			"Aircraft Rescue",
			"Fire Suppression",
			"Training Development",
		],
	},
	{
		id: 2,
		name: "Lieutenant Mike Rodriguez",
		title: "Aviation Fire Specialist",
		location: "Miami, FL",
		experience: "12 years",
		certifications: [
			"ARFF Technician",
			"Hazmat Response",
			"Incident Command",
		],
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
		joinDate: "2017",
		specialties: [
			"Emergency Response",
			"Equipment Operation",
			"Safety Protocols",
		],
	},
	{
		id: 3,
		name: "Chief Amanda Chen",
		title: "Fire Safety Director",
		location: "Seattle, WA",
		experience: "18 years",
		certifications: [
			"Master ARFF",
			"Training Coordinator",
			"Safety Auditor",
		],
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
		joinDate: "2012",
		specialties: ["Program Development", "Risk Assessment", "Compliance"],
	},
	{
		id: 4,
		name: "Captain David Park",
		title: "Emergency Response Coordinator",
		location: "Denver, CO",
		experience: "14 years",
		certifications: [
			"ARFF Commander",
			"Emergency Medical",
			"Crisis Management",
		],
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
		joinDate: "2016",
		specialties: ["Crisis Response", "Team Leadership", "Medical Support"],
	},
	{
		id: 5,
		name: "Lieutenant Jennifer Walsh",
		title: "Training Specialist",
		location: "Boston, MA",
		experience: "10 years",
		certifications: [
			"ARFF Instructor",
			"Simulation Training",
			"Adult Education",
		],
		image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
		joinDate: "2018",
		specialties: ["Simulation Training", "Curriculum Design", "Assessment"],
	},
	{
		id: 6,
		name: "Captain Robert Taylor",
		title: "Equipment Safety Officer",
		location: "Phoenix, AZ",
		experience: "16 years",
		certifications: [
			"Equipment Inspector",
			"Maintenance Supervisor",
			"Quality Control",
		],
		image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
		joinDate: "2014",
		specialties: [
			"Equipment Maintenance",
			"Quality Assurance",
			"Technical Support",
		],
	},
	{
		id: 7,
		name: "Chief Maria Santos",
		title: "Regional Safety Coordinator",
		location: "Houston, TX",
		experience: "20 years",
		certifications: [
			"Master ARFF",
			"Regional Coordinator",
			"Policy Development",
		],
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
		joinDate: "2010",
		specialties: [
			"Policy Development",
			"Regional Coordination",
			"Standards Compliance",
		],
	},
	{
		id: 8,
		name: "Lieutenant James Wilson",
		title: "Fire Prevention Specialist",
		location: "Atlanta, GA",
		experience: "11 years",
		certifications: [
			"Fire Inspector",
			"Prevention Specialist",
			"Code Enforcement",
		],
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
		joinDate: "2019",
		specialties: ["Fire Prevention", "Code Compliance", "Risk Analysis"],
	},
	{
		id: 9,
		name: "Captain Lisa Thompson",
		title: "Communications Coordinator",
		location: "Chicago, IL",
		experience: "13 years",
		certifications: [
			"Communications Expert",
			"Emergency Dispatch",
			"Technology Systems",
		],
		image: "https://images.unsplash.com/photo-1594736797933-d0301ba4ecaf?w=400&h=400&fit=crop&crop=face",
		joinDate: "2016",
		specialties: [
			"Emergency Communications",
			"System Integration",
			"Protocol Development",
		],
	},
];

export default function MembersPage() {
	const totalMembers = members.length;
	const avgExperience = Math.round(
		members.reduce((acc, member) => acc + parseInt(member.experience), 0) /
			totalMembers
	);
	const totalCertifications = members.reduce(
		(acc, member) => acc + member.certifications.length,
		0
	);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header Section */}
			<section className="bg-gradient-to-br from-aviation-blue to-blue-800 text-white section-padding">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h1 className="text-4xl lg:text-5xl font-bold mb-6">
							Our Professional Members
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
							Meet the dedicated aviation fire safety
							professionals who make up our association. Each
							member brings unique expertise and experience to our
							community.
						</p>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Users className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">
								{totalMembers}+
							</h3>
							<p className="text-blue-200">Active Members</p>
						</div>
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Award className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">
								{totalCertifications}+
							</h3>
							<p className="text-blue-200">
								Total Certifications
							</p>
						</div>
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Calendar className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">
								{avgExperience}+
							</h3>
							<p className="text-blue-200">
								Avg Years Experience
							</p>
						</div>
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<MapPin className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">9</h3>
							<p className="text-blue-200">States Represented</p>
						</div>
					</div>
				</div>
			</section>

			{/* Members Grid */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{members.map((member) => (
							<div
								key={member.id}
								className="card overflow-hidden hover:scale-105 transition-transform duration-300"
							>
								{/* Member Image */}
								<div className="relative h-64 bg-gradient-to-br from-aviation-blue to-blue-700">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

									{/* Member Basic Info Overlay */}
									<div className="absolute bottom-4 left-4 right-4 text-white">
										<h3 className="text-xl font-bold mb-1">
											{member.name}
										</h3>
										<p className="text-blue-100">
											{member.title}
										</p>
									</div>
								</div>

								{/* Member Details */}
								<div className="p-6">
									<div className="space-y-4">
										{/* Location & Experience */}
										<div className="flex items-center justify-between text-sm text-aviation-gray">
											<div className="flex items-center space-x-1">
												<MapPin className="h-4 w-4" />
												<span>{member.location}</span>
											</div>
											<div className="flex items-center space-x-1">
												<Calendar className="h-4 w-4" />
												<span>
													{member.experience} exp.
												</span>
											</div>
										</div>

										{/* Certifications */}
										<div>
											<h4 className="text-sm font-semibold text-aviation-blue mb-2">
												Certifications
											</h4>
											<div className="flex flex-wrap gap-2">
												{member.certifications.map(
													(cert, index) => (
														<span
															key={index}
															className="bg-aviation-orange/10 text-aviation-orange text-xs px-2 py-1 rounded-full"
														>
															{cert}
														</span>
													)
												)}
											</div>
										</div>

										{/* Specialties */}
										<div>
											<h4 className="text-sm font-semibold text-aviation-blue mb-2">
												Specialties
											</h4>
											<div className="flex flex-wrap gap-2">
												{member.specialties.map(
													(specialty, index) => (
														<span
															key={index}
															className="bg-blue-50 text-aviation-blue text-xs px-2 py-1 rounded-full border border-blue-200"
														>
															{specialty}
														</span>
													)
												)}
											</div>
										</div>

										{/* Join Date */}
										<div className="pt-4 border-t border-gray-200">
											<p className="text-xs text-aviation-gray">
												Member since {member.joinDate}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="section-padding bg-aviation-light">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold text-aviation-blue mb-4">
						Join Our Professional Community
					</h2>
					<p className="text-xl text-aviation-gray mb-8 max-w-2xl mx-auto">
						Become part of our growing network of aviation fire
						safety professionals. Connect, learn, and advance your
						career with industry leaders.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a href="/contact" className="btn-primary">
							Apply for Membership
						</a>
						<a href="/about" className="btn-secondary">
							Learn More About Us
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
