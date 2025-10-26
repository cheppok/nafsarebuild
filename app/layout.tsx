import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
	title: "Aviation Fire Association - Professional Fire Safety Training",
	description:
		"Leading aviation fire safety association providing professional training, certification, and resources for aviation fire safety professionals.",
	keywords:
		"aviation, fire safety, training, certification, emergency response, aircraft firefighting",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-gray-50">
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
