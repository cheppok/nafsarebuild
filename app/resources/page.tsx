import Link from "next/link";
import {
	FileText,
	Download,
	BookOpen,
	AlertCircle,
	Shield,
	Users,
	ExternalLink,
} from "lucide-react";

export default function ResourcesPage() {
	const resourceCategories = [
		{
			title: "Standards & Guidelines",
			icon: BookOpen,
			description:
				"Official standards and best practice guidelines for aviation fire safety",
			resources: [
				{
					title: "ARFF Standards Manual 2024",
					type: "PDF",
					size: "12.5 MB",
					description:
						"Complete guide to Aircraft Rescue and Firefighting standards",
					downloadUrl: "#",
				},
				{
					title: "Emergency Response Procedures",
					type: "PDF",
					size: "8.2 MB",
					description: "Step-by-step emergency response protocols",
					downloadUrl: "#",
				},
				{
					title: "Equipment Maintenance Guidelines",
					type: "PDF",
					size: "15.7 MB",
					description:
						"Comprehensive maintenance procedures for fire safety equipment",
					downloadUrl: "#",
				},
			],
		},
		{
			title: "Training Materials",
			icon: Users,
			description:
				"Educational resources and training materials for instructors and students",
			resources: [
				{
					title: "Basic ARFF Training Curriculum",
					type: "ZIP",
					size: "45.3 MB",
					description:
						"Complete training package including presentations and exercises",
					downloadUrl: "#",
				},
				{
					title: "Simulation Scenarios Database",
					type: "PDF",
					size: "22.1 MB",
					description: "Collection of realistic training scenarios",
					downloadUrl: "#",
				},
				{
					title: "Assessment Tools & Checklists",
					type: "DOCX",
					size: "3.8 MB",
					description: "Evaluation forms and assessment checklists",
					downloadUrl: "#",
				},
			],
		},
		{
			title: "Safety Bulletins",
			icon: AlertCircle,
			description: "Important safety alerts and industry updates",
			resources: [
				{
					title: "Safety Alert - New Aircraft Types",
					type: "PDF",
					size: "2.1 MB",
					description:
						"Safety considerations for new generation aircraft",
					downloadUrl: "#",
				},
				{
					title: "Equipment Recall Notice - October 2024",
					type: "PDF",
					size: "1.5 MB",
					description: "Important equipment recall information",
					downloadUrl: "#",
				},
				{
					title: "Seasonal Safety Reminders",
					type: "PDF",
					size: "4.2 MB",
					description: "Weather-related safety considerations",
					downloadUrl: "#",
				},
			],
		},
		{
			title: "Technical Documents",
			icon: FileText,
			description: "Technical specifications and research papers",
			resources: [
				{
					title: "Foam System Technical Specifications",
					type: "PDF",
					size: "18.9 MB",
					description:
						"Detailed technical specifications for foam systems",
					downloadUrl: "#",
				},
				{
					title: "Research: Fire Suppression Effectiveness",
					type: "PDF",
					size: "6.7 MB",
					description:
						"Latest research on fire suppression techniques",
					downloadUrl: "#",
				},
				{
					title: "Chemical Compatibility Chart",
					type: "PDF",
					size: "2.3 MB",
					description: "Chemical compatibility reference guide",
					downloadUrl: "#",
				},
			],
		},
	];

	const externalResources = [
		{
			title: "FAA Fire Safety Resources",
			url: "https://www.faa.gov",
			description: "Official FAA resources and regulations",
		},
		{
			title: "ICAO Fire Safety Standards",
			url: "https://www.icao.int",
			description: "International aviation fire safety standards",
		},
		{
			title: "NFPA Aviation Standards",
			url: "https://www.nfpa.org",
			description: "National Fire Protection Association standards",
		},
		{
			title: "Airport Fire Safety Council",
			url: "#",
			description: "Industry collaboration and best practices",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-aviation-blue to-blue-800 text-white section-padding">
				<div className="container-custom">
					<div className="text-center">
						<h1 className="text-4xl lg:text-5xl font-bold mb-6">
							Resources & Downloads
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
							Access our comprehensive library of aviation fire
							safety resources, including standards, training
							materials, safety bulletins, and technical
							documents.
						</p>
					</div>
				</div>
			</section>

			{/* Resource Categories */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					{resourceCategories.map((category, categoryIndex) => {
						const IconComponent = category.icon;
						return (
							<div key={categoryIndex} className="mb-16">
								<div className="flex items-center space-x-3 mb-8">
									<div className="bg-aviation-orange/10 p-3 rounded-lg">
										<IconComponent className="h-8 w-8 text-aviation-orange" />
									</div>
									<div>
										<h2 className="text-3xl font-bold text-aviation-blue">
											{category.title}
										</h2>
										<p className="text-aviation-gray">
											{category.description}
										</p>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{category.resources.map(
										(resource, resourceIndex) => (
											<div
												key={resourceIndex}
												className="card p-6 hover:shadow-xl transition-shadow duration-300"
											>
												<div className="flex items-start justify-between mb-4">
													<div className="flex-grow">
														<h3 className="text-lg font-semibold text-aviation-blue mb-2">
															{resource.title}
														</h3>
														<p className="text-sm text-aviation-gray mb-3">
															{
																resource.description
															}
														</p>
													</div>
													<div className="bg-aviation-blue/10 px-2 py-1 rounded text-xs font-semibold text-aviation-blue ml-3">
														{resource.type}
													</div>
												</div>

												<div className="flex items-center justify-between">
													<span className="text-sm text-aviation-gray">
														{resource.size}
													</span>
													<Link
														href={
															resource.downloadUrl
														}
														className="inline-flex items-center space-x-2 text-aviation-orange hover:text-orange-600 font-medium transition-colors"
													>
														<Download className="h-4 w-4" />
														<span>Download</span>
													</Link>
												</div>
											</div>
										)
									)}
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* External Resources */}
			<section className="section-padding bg-aviation-light">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl lg:text-4xl font-bold text-aviation-blue mb-4">
							External Resources
						</h2>
						<p className="text-xl text-aviation-gray max-w-3xl mx-auto">
							Additional resources from industry partners and
							regulatory bodies
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{externalResources.map((resource, index) => (
							<div
								key={index}
								className="card p-6 hover:shadow-xl transition-shadow duration-300"
							>
								<div className="flex items-center justify-between">
									<div className="flex-grow">
										<h3 className="text-lg font-semibold text-aviation-blue mb-2">
											{resource.title}
										</h3>
										<p className="text-aviation-gray text-sm">
											{resource.description}
										</p>
									</div>
									<Link
										href={resource.url}
										target="_blank"
										rel="noopener noreferrer"
										className="ml-4 text-aviation-orange hover:text-orange-600 transition-colors"
									>
										<ExternalLink className="h-5 w-5" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Signup */}
			<section className="section-padding bg-aviation-blue text-white">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold mb-4">
						Stay Updated with Latest Resources
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Subscribe to our newsletter to receive notifications
						about new resources, safety bulletins, and important
						industry updates.
					</p>
					<div className="max-w-md mx-auto">
						<div className="flex">
							<input
								type="email"
								placeholder="Enter your email address"
								className="flex-grow px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-aviation-orange"
							/>
							<button className="bg-aviation-orange hover:bg-orange-600 px-6 py-3 rounded-r-lg font-semibold transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Help Section */}
			<section className="section-padding bg-white">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold text-aviation-blue mb-4">
						Need Help Finding Resources?
					</h2>
					<p className="text-xl text-aviation-gray mb-8 max-w-2xl mx-auto">
						Cannot find what you are looking for? Our team is here
						to help you locate the specific resources you need.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/contact" className="btn-primary">
							Contact Our Team
						</Link>
						<Link href="/members" className="btn-secondary">
							Connect with Members
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
