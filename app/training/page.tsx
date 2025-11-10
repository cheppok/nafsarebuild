import Link from "next/link";
import {
	Users,
	Award,
	BookOpen,
	CheckCircle,
	Star,
	ArrowRight,
} from "lucide-react";

export default function TrainingPage() {
	const programs = [
		{
			title: "Basic ARFF Certification",
			level: "Beginner",

			description:
				"Fundamental aircraft rescue and firefighting training for new professionals entering the aviation fire safety field.",
			features: [
				"Aircraft fire suppression techniques",
				"Emergency response procedures",
				"Equipment operation and maintenance",
				"Safety protocols and regulations",
				"Hands-on simulation exercises",
			],
			prerequisites: "None",
		},
		{
			title: "Advanced Emergency Response",
			level: "Intermediate",

			description:
				"Advanced training for experienced professionals seeking to enhance their emergency response capabilities.",
			features: [
				"Complex incident management",
				"Multi-aircraft emergency scenarios",
				"Advanced foam application techniques",
				"Hazardous materials response",
				"Leadership in emergency situations",
			],
			prerequisites: "Basic ARFF Certification",
		},
		{
			title: "ARFF Instructor Development",
			level: "Advanced",

			description:
				"Comprehensive program designed to train qualified instructors for aviation fire safety training programs.",
			features: [
				"Adult learning principles",
				"Curriculum development",
				"Training delivery methods",
				"Assessment and evaluation",
				"Simulation training management",
			],
			prerequisites: "Advanced ARFF Certification + 3 years experience",
		},
		{
			title: "Hazmat Response Specialist",
			level: "Intermediate",

			description:
				"Specialized training for handling hazardous materials incidents in aviation environments.",
			features: [
				"Chemical identification and classification",
				"Containment and cleanup procedures",
				"Personal protective equipment",
				"Decontamination processes",
				"Regulatory compliance",
			],
			prerequisites: "Basic ARFF Certification",
		},
		{
			title: "Safety Management Systems",
			level: "Management",

			description:
				"Comprehensive training on implementing and managing safety management systems in aviation organizations.",
			features: [
				"SMS framework and principles",
				"Risk assessment methodologies",
				"Safety performance monitoring",
				"Data analysis and reporting",
				"Continuous improvement processes",
			],
			prerequisites: "Management experience recommended",
		},
		{
			title: "Recertification Program",
			level: "All Levels",

			description:
				"Required continuing education to maintain your aviation fire safety certifications.",
			features: [
				"Latest industry updates",
				"New regulations and standards",
				"Technology advancements",
				"Best practice sharing",
				"Skills assessment",
			],
			prerequisites: "Valid certification requiring renewal",
		},
	];

	const getLevelColor = (level: string) => {
		switch (level) {
			case "Beginner":
				return "bg-green-100 text-green-800";
			case "Intermediate":
				return "bg-yellow-100 text-yellow-800";
			case "Advanced":
				return "bg-red-100 text-red-800";
			case "Management":
				return "bg-purple-100 text-purple-800";
			default:
				return "bg-blue-100 text-blue-800";
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-linear-to-br from-aviation-blue to-blue-800 text-white section-padding">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h1 className="text-4xl lg:text-5xl font-bold mb-6">
							Training Programs
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
							Advance your career with our comprehensive aviation
							fire safety training programs. From basic
							certification to advanced specializations, we have
							the right program for you.
						</p>
					</div>

					{/* Training Stats */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<BookOpen className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">15+</h3>
							<p className="text-blue-200">Training Programs</p>
						</div>
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Users className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">1000+</h3>
							<p className="text-blue-200">Students Trained</p>
						</div>
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Award className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">98%</h3>
							<p className="text-blue-200">Pass Rate</p>
						</div>
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<Star className="h-8 w-8 text-aviation-orange mx-auto mb-3" />
							<h3 className="text-2xl font-bold">4.9/5</h3>
							<p className="text-blue-200">Student Rating</p>
						</div>
					</div>
				</div>
				<div className=" mt-4 flex flex-col sm:flex-row gap-4">
					<Link
						href="/resources"
						className="btn-primary inline-flex items-center"
					>
						Training Materials{" "}
						<ArrowRight className="ml-2 h-5 w-5" />
					</Link>
					<Link
						href="/executives"
						className="btn-secondary inline-flex items-center"
					>
						Meet Our Executives <Users className="ml-2 h-5 w-5" />
					</Link>
				</div>
			</section>

			{/* Programs Grid */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl lg:text-4xl font-bold text-aviation-blue mb-4">
							Choose Your Training Path
						</h2>
						<p className="text-xl text-aviation-gray max-w-3xl mx-auto">
							Our comprehensive training programs are designed to
							meet you where you are in your career
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{programs.map((program, index) => (
							<div
								key={index}
								className="card p-8 hover:shadow-xl transition-shadow duration-300"
							>
								{/* Header */}
								<div className="flex items-start justify-between mb-6">
									<div className="grow">
										<div className="flex items-center space-x-3 mb-2">
											<h3 className="text-2xl font-bold text-aviation-blue">
												{program.title}
											</h3>
											<span
												className={`px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(
													program.level
												)}`}
											>
												{program.level}
											</span>
										</div>
										<p className="text-aviation-gray">
											{program.description}
										</p>
									</div>
								</div>

								{/* Features */}
								<div className="mb-6">
									<h4 className="text-sm font-semibold text-aviation-blue mb-3 uppercase tracking-wide">
										What You will Learn:
									</h4>
									<ul className="space-y-2">
										{program.features.map(
											(feature, featureIndex) => (
												<li
													key={featureIndex}
													className="flex items-start space-x-2 text-sm text-aviation-gray"
												>
													<CheckCircle className="h-4 w-4 text-aviation-orange shrink-0 mt-0.5" />
													<span>{feature}</span>
												</li>
											)
										)}
									</ul>
								</div>

								{/* Prerequisites */}
								<div className="mb-6 p-4 bg-gray-50 rounded-lg">
									<h4 className="text-sm font-semibold text-aviation-blue mb-2">
										Prerequisites:
									</h4>
									<p className="text-sm text-aviation-gray">
										{program.prerequisites}
									</p>
								</div>

								{/* CTA Button */}
								<div className="space-y-3">
									<Link
										href="/contact"
										className="btn-primary w-full text-center"
									>
										Request More Info
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="section-padding bg-aviation-light">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl lg:text-4xl font-bold text-aviation-blue mb-4">
							Why Choose Our Training?
						</h2>
						<p className="text-xl text-aviation-gray max-w-3xl mx-auto">
							Industry-leading training programs designed by
							experts for professionals
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="bg-aviation-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
								<Award className="h-8 w-8 text-aviation-orange" />
							</div>
							<h3 className="text-xl font-semibold text-aviation-blue mb-3">
								Industry Recognition
							</h3>
							<p className="text-aviation-gray">
								Certifications that are recognized and respected
								throughout the aviation industry
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-blue/10 p-4 rounded-full w-fit mx-auto mb-4">
								<Users className="h-8 w-8 text-aviation-blue" />
							</div>
							<h3 className="text-xl font-semibold text-aviation-blue mb-3">
								Expert Instructors
							</h3>
							<p className="text-aviation-gray">
								Learn from certified professionals with
								real-world experience in aviation fire safety
							</p>
						</div>

						<div className="text-center">
							<div className="bg-aviation-orange/10 p-4 rounded-full w-fit mx-auto mb-4">
								<BookOpen className="h-8 w-8 text-aviation-orange" />
							</div>
							<h3 className="text-xl font-semibold text-aviation-blue mb-3">
								Hands-On Learning
							</h3>
							<p className="text-aviation-gray">
								Practical training with state-of-the-art
								simulation equipment and real scenarios
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-aviation-blue text-white">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Advance Your Career?
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Join thousands of aviation fire safety professionals who
						have advanced their careers through various training
						programs.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact" className="btn-primary">
							Start Your Training Journey
						</Link>
						<Link href="/members" className="btn-secondary">
							Meet Our Graduates
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
