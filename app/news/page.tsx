import Link from "next/link";
import { Calendar, User, Tag, ArrowRight, Clock } from "lucide-react";

export default function NewsPage() {
	const newsArticles = [
		{
			id: 1,
			title: "New ARFF Standards Released for 2024",
			excerpt:
				"The latest Aircraft Rescue and Firefighting standards have been released, featuring updated protocols for next-generation aircraft and enhanced safety measures.",
			content:
				"The Aviation Fire Association announces the release of comprehensive new ARFF standards for 2024...",
			date: "2024-01-15",
			author: "Sarah Johnson",
			category: "Standards",
			readTime: "5 min read",
			featured: true,
		},
		{
			id: 2,
			title: "Advanced Training Facility Opens in Phoenix",
			excerpt:
				"State-of-the-art training facility equipped with the latest simulation technology now open for advanced aviation fire safety training programs.",
			content:
				"Our new Phoenix training facility represents a major step forward...",
			date: "2024-01-10",
			author: "Mike Rodriguez",
			category: "Training",
			readTime: "3 min read",
			featured: false,
		},
		{
			id: 3,
			title: "Industry Partnership with Major Airlines",
			excerpt:
				"Aviation Fire Association announces new partnerships with leading airlines to enhance fire safety training and emergency preparedness.",
			content:
				"We're excited to announce strategic partnerships with several major airlines...",
			date: "2024-01-08",
			author: "Amanda Chen",
			category: "Partnership",
			readTime: "4 min read",
			featured: false,
		},
		{
			id: 4,
			title: "Emergency Response Excellence Awards",
			excerpt:
				"Recognizing outstanding achievement in aviation fire safety and emergency response across the industry.",
			content:
				"The annual Emergency Response Excellence Awards ceremony...",
			date: "2024-01-05",
			author: "David Park",
			category: "Awards",
			readTime: "6 min read",
			featured: false,
		},
		{
			id: 5,
			title: "Technology Innovation in Fire Suppression",
			excerpt:
				"Latest advancements in fire suppression technology are revolutionizing aviation safety protocols and emergency response capabilities.",
			content:
				"Revolutionary new fire suppression technologies are changing the landscape...",
			date: "2024-01-03",
			author: "Jennifer Walsh",
			category: "Technology",
			readTime: "7 min read",
			featured: false,
		},
		{
			id: 6,
			title: "International Safety Conference Announcement",
			excerpt:
				"Join industry leaders at the International Aviation Fire Safety Conference scheduled for March 2024 in Las Vegas.",
			content:
				"We're pleased to announce our upcoming international conference...",
			date: "2024-01-01",
			author: "Robert Taylor",
			category: "Events",
			readTime: "3 min read",
			featured: false,
		},
	];

	const upcomingEvents = [
		{
			title: "Advanced ARFF Training",
			date: "2024-02-15",
			location: "Phoenix, AZ",
			type: "Training",
		},
		{
			title: "Safety Standards Workshop",
			date: "2024-02-28",
			location: "Online",
			type: "Workshop",
		},
		{
			title: "International Fire Safety Conference",
			date: "2024-03-15",
			location: "Las Vegas, NV",
			type: "Conference",
		},
		{
			title: "Emergency Response Drill",
			date: "2024-03-30",
			location: "Multiple Locations",
			type: "Training",
		},
	];

	const getCategoryColor = (category: string) => {
		const colors: { [key: string]: string } = {
			Standards: "bg-blue-100 text-blue-800",
			Training: "bg-green-100 text-green-800",
			Partnership: "bg-purple-100 text-purple-800",
			Awards: "bg-yellow-100 text-yellow-800",
			Technology: "bg-red-100 text-red-800",
			Events: "bg-indigo-100 text-indigo-800",
		};
		return colors[category] || "bg-gray-100 text-gray-800";
	};

	const featuredArticle = newsArticles.find((article) => article.featured);
	const regularArticles = newsArticles.filter((article) => !article.featured);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-aviation-blue to-blue-800 text-white section-padding">
				<div className="container-custom text-center">
					<h1 className="text-4xl lg:text-5xl font-bold mb-6">
						News & Updates
					</h1>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
						Stay informed with the latest news, updates, and
						developments in aviation fire safety. Get insights from
						industry experts and learn about upcoming events.
					</p>
				</div>
			</section>

			{/* Featured Article */}
			{featuredArticle && (
				<section className="section-padding bg-white">
					<div className="container-custom">
						<div className="bg-gradient-to-r from-aviation-blue to-blue-700 rounded-2xl text-white p-8 lg:p-12">
							<div className="max-w-4xl">
								<div className="flex items-center space-x-4 mb-6">
									<span className="bg-aviation-orange px-3 py-1 rounded-full text-sm font-semibold">
										Featured Article
									</span>
									<span
										className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
											featuredArticle.category
										)}`}
									>
										{featuredArticle.category}
									</span>
								</div>

								<h2 className="text-3xl lg:text-4xl font-bold mb-4">
									{featuredArticle.title}
								</h2>
								<p className="text-xl text-blue-100 mb-6 leading-relaxed">
									{featuredArticle.excerpt}
								</p>

								<div className="flex items-center space-x-6 text-blue-200 text-sm mb-8">
									<div className="flex items-center space-x-2">
										<Calendar className="h-4 w-4" />
										<span>
											{new Date(
												featuredArticle.date
											).toLocaleDateString()}
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<User className="h-4 w-4" />
										<span>{featuredArticle.author}</span>
									</div>
									<div className="flex items-center space-x-2">
										<Clock className="h-4 w-4" />
										<span>{featuredArticle.readTime}</span>
									</div>
								</div>

								<Link
									href={`/news/${featuredArticle.id}`}
									className="inline-flex items-center space-x-2 bg-white text-aviation-blue font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
								>
									<span>Read Full Article</span>
									<ArrowRight className="h-5 w-5" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Main Content */}
			<section className="section-padding bg-aviation-light">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* News Articles */}
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-bold text-aviation-blue mb-8">
								Latest News
							</h2>
							<div className="space-y-8">
								{regularArticles.map((article) => (
									<article
										key={article.id}
										className="card p-6 hover:shadow-xl transition-shadow duration-300"
									>
										<div className="flex items-start justify-between mb-4">
											<div className="flex-grow">
												<div className="flex items-center space-x-3 mb-3">
													<span
														className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
															article.category
														)}`}
													>
														<Tag className="h-3 w-3 inline mr-1" />
														{article.category}
													</span>
													<span className="text-sm text-aviation-gray">
														{article.readTime}
													</span>
												</div>
												<h3 className="text-xl font-bold text-aviation-blue mb-3 hover:text-aviation-orange transition-colors">
													<Link
														href={`/news/${article.id}`}
													>
														{article.title}
													</Link>
												</h3>
												<p className="text-aviation-gray leading-relaxed mb-4">
													{article.excerpt}
												</p>
											</div>
										</div>

										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-4 text-sm text-aviation-gray">
												<div className="flex items-center space-x-1">
													<Calendar className="h-4 w-4" />
													<span>
														{new Date(
															article.date
														).toLocaleDateString()}
													</span>
												</div>
												<div className="flex items-center space-x-1">
													<User className="h-4 w-4" />
													<span>
														{article.author}
													</span>
												</div>
											</div>
											<Link
												href={`/news/${article.id}`}
												className="text-aviation-orange hover:text-orange-600 font-medium transition-colors inline-flex items-center space-x-1"
											>
												<span>Read More</span>
												<ArrowRight className="h-4 w-4" />
											</Link>
										</div>
									</article>
								))}
							</div>
						</div>

						{/* Sidebar */}
						<div className="space-y-8">
							{/* Upcoming Events */}
							<div className="card p-6">
								<h3 className="text-xl font-bold text-aviation-blue mb-6">
									Upcoming Events
								</h3>
								<div className="space-y-4">
									{upcomingEvents.map((event, index) => (
										<div
											key={index}
											className="border-l-4 border-aviation-orange pl-4"
										>
											<h4 className="font-semibold text-aviation-blue">
												{event.title}
											</h4>
											<div className="text-sm text-aviation-gray space-y-1">
												<div className="flex items-center space-x-1">
													<Calendar className="h-3 w-3" />
													<span>
														{new Date(
															event.date
														).toLocaleDateString()}
													</span>
												</div>
												<div>{event.location}</div>
												<span className="inline-block bg-aviation-blue/10 text-aviation-blue px-2 py-1 rounded-full text-xs">
													{event.type}
												</span>
											</div>
										</div>
									))}
								</div>
								<Link
									href="/contact"
									className="block mt-6 text-center btn-secondary"
								>
									View All Events
								</Link>
							</div>

							{/* Newsletter Signup */}
							<div className="bg-aviation-blue text-white p-6 rounded-xl">
								<h3 className="text-xl font-bold mb-4">
									Stay Informed
								</h3>
								<p className="text-blue-100 mb-6 text-sm">
									Subscribe to our newsletter for the latest
									updates and industry news.
								</p>
								<div className="space-y-3">
									<input
										type="email"
										placeholder="Your email address"
										className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-aviation-orange"
									/>
									<button className="w-full bg-aviation-orange hover:bg-orange-600 py-2 px-4 rounded-lg font-semibold text-sm transition-colors">
										Subscribe
									</button>
								</div>
							</div>

							{/* Quick Links */}
							<div className="card p-6">
								<h3 className="text-xl font-bold text-aviation-blue mb-6">
									Quick Links
								</h3>
								<div className="space-y-3">
									<Link
										href="/training"
										className="block text-aviation-gray hover:text-aviation-blue transition-colors"
									>
										→ Training Programs
									</Link>
									<Link
										href="/resources"
										className="block text-aviation-gray hover:text-aviation-blue transition-colors"
									>
										→ Resources & Downloads
									</Link>
									<Link
										href="/members"
										className="block text-aviation-gray hover:text-aviation-blue transition-colors"
									>
										→ Member Directory
									</Link>
									<Link
										href="/contact"
										className="block text-aviation-gray hover:text-aviation-blue transition-colors"
									>
										→ Contact Us
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
