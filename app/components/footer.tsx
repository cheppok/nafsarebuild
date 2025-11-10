import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-aviation-blue text-white">
			<div className="container-custom section-padding">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<div className="">
								<Image
									src={"/logo2.png"}
									height={100}
									width={100}
									alt=""
								/>
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

				{/* <div className="border-t border-blue-600 mt-8 pt-8 text-center">
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
				</div> */}
				{/* Bottom Section */}
				<div className="border-t border-border pt-8 mt-8">
					<div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
						<div className="text-sm text-center md:text-left">
							© 2025 National Fire and Safety Association. All
							rights reserved.
						</div>

						{/* Social Media */}
						<div className="flex space-x-4">
							<a
								href="#"
								aria-label="Facebook"
								className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
							>
								<Facebook className="w-4 h-4" />
							</a>
							<a
								href="#"
								aria-label="Twitter"
								className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
							>
								<Twitter className="w-4 h-4" />
							</a>
							<a
								href="#"
								aria-label="LinkedIn"
								className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
							>
								<Linkedin className="w-4 h-4" />
							</a>
							<a
								href="#"
								aria-label="Instagram"
								className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
							>
								<Instagram className="w-4 h-4" />
							</a>
						</div>

						<div className="text-sm text-center md:text-right">
							<Link
								href={""}
								className="hover:text-primary transition-colors"
							>
								Privacy Policy
							</Link>
							<span className="mx-2">•</span>
							<Link
								href={""}
								className="hover:text-primary transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
