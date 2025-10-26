import Link from "next/link";
import { Flame, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-aviation-blue text-white">
			<div className="container-custom section-padding">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<div className="bg-aviation-orange p-2 rounded-lg">
								<Flame className="h-6 w-6" />
							</div>
							<div>
								<h3 className="text-lg font-bold">
									Aviation Fire Association
								</h3>
								<p className="text-sm text-blue-200">
									Professional Fire Safety
								</p>
							</div>
						</div>
						<p className="text-blue-200 text-sm leading-relaxed">
							Leading the aviation industry in fire safety
							training, certification, and emergency response
							preparedness.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-blue-200 hover:text-white transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="text-blue-200 hover:text-white transition-colors"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/training"
									className="text-blue-200 hover:text-white transition-colors"
								>
									Training Programs
								</Link>
							</li>
							<li>
								<Link
									href="/members"
									className="text-blue-200 hover:text-white transition-colors"
								>
									Our Members
								</Link>
							</li>
							<li>
								<Link
									href="/resources"
									className="text-blue-200 hover:text-white transition-colors"
								>
									Resources
								</Link>
							</li>
						</ul>
					</div>

					{/* Training */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Training</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/training/basic"
									className="text-blue-200 hover:text-white transition-colors"
								>
									Basic Certification
								</Link>
							</li>
							<li>
								<Link
									href="/training/advanced"
									className="text-blue-200 hover:text-white transition-colors"
								>
									Advanced Training
								</Link>
							</li>
							<li>
								<Link
									href="/training/instructor"
									className="text-blue-200 hover:text-white transition-colors"
								>
									Instructor Course
								</Link>
							</li>
							<li>
								<Link
									href="/training/recertification"
									className="text-blue-200 hover:text-white transition-colors"
								>
									Recertification
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Contact</h4>
						<div className="space-y-3">
							<div className="flex items-center space-x-2">
								<MapPin className="h-4 w-4 text-aviation-orange" />
								<span className="text-blue-200 text-sm">
									123 Aviation Blvd, Fire Safety City, FS
									12345
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<Phone className="h-4 w-4 text-aviation-orange" />
								<span className="text-blue-200 text-sm">
									+1 (555) 123-4567
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<Mail className="h-4 w-4 text-aviation-orange" />
								<span className="text-blue-200 text-sm">
									info@aviationfire.org
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-blue-600 mt-8 pt-8 text-center">
					<p className="text-blue-200 text-sm">
						© 2024 Aviation Fire Association. All rights reserved. |
						<Link href="/privacy" className="hover:text-white ml-1">
							Privacy Policy
						</Link>{" "}
						|
						<Link href="/terms" className="hover:text-white ml-1">
							Terms of Service
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
