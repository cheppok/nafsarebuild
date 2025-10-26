"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Flame } from "lucide-react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
		<header className="bg-white shadow-lg sticky top-0 z-50">
			<div className="container-custom">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<div className="bg-aviation-orange p-2 rounded-lg">
							<Flame className="h-8 w-8 text-white" />
						</div>
						<div>
							<h1 className="text-xl font-bold text-aviation-blue">
								Aviation Fire Association
							</h1>
							<p className="text-xs text-aviation-gray">
								Professional Fire Safety
							</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-aviation-gray hover:text-aviation-blue font-medium transition-colors duration-200"
							>
								{item.name}
							</Link>
						))}
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
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-aviation-gray hover:text-aviation-blue font-medium transition-colors duration-200"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
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
