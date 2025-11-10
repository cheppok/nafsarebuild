"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Services", href: "/services" },
		{ name: "Training", href: "/training" },
		{ name: "Members", href: "/members" },
		{ name: "Resources", href: "/resources" },
		{ name: "News", href: "/news" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<header className="bg-slate-100 border-b border-border shadow-elevation sticky top-0 z-20">
			<div className="container-custom">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<div className="bg-color-aviation-light">
							<Image
								src="/logo2.png"
								height={100}
								width={100}
								alt="Logo"
							/>
						</div>
						<div>
							<h1 className="text-xl font-bold text-aviation-blue flex flex-col items-center">
								<p>Nigerian Aviation Fire & Safety</p>
								<p>Association</p>
							</h1>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex space-x-8">
						{navItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link
									key={item.name}
									href={item.href}
									className={`font-medium transition-colors duration-200 ${
										isActive
											? "text-aviation-blue border-b-2 border-aviation-blue pb-1"
											: "text-aviation-gray hover:text-aviation-blue"
									}`}
								>
									{item.name}
								</Link>
							);
						})}
					</nav>

					{/* CTA Button */}
					<div className="hidden lg:block">
						<Link href="/contact" className="btn-primary">
							Join Now
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="lg:hidden p-2"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X className="h-6 w-6 text-aviation-gray" />
						) : (
							<Menu className="h-6 w-6 text-aviation-gray" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="lg:hidden py-4 border-t border-gray-200">
						<nav className="flex flex-col space-y-4">
							{navItems.map((item) => {
								const isActive = pathname === item.href;
								return (
									<Link
										key={item.name}
										href={item.href}
										onClick={() => setIsMenuOpen(false)}
										className={`font-medium transition-colors duration-200 ${
											isActive
												? "text-aviation-blue font-semibold"
												: "text-aviation-gray hover:text-aviation-blue"
										}`}
									>
										{item.name}
									</Link>
								);
							})}

							<Link
								href="/contact"
								className="btn-primary w-fit"
								onClick={() => setIsMenuOpen(false)}
							>
								Join Now
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
