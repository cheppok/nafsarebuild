import React from "react";
import Image from "next/image";

const positions = [
	{
		id: "1",
		name: "Ugbeikwu Sunday",
		title: "President",
		station: "Ilorin",
		imageSrc: "/ugbeikwu.jpg",
	},
	{
		id: "2",
		name: "mwabe W.S",
		title: "Deputy President",
		station: "...",
		imageSrc: "/nafsa/logo.jpg",
	},
	{
		id: "3",
		name: "Akinwumi Emmanuel",
		title: "Secretary",
		station: "Lagos",
		imageSrc: "/akinwumi.jpg",
	},
	{
		id: "8",
		name: "Onyike C",
		title: "Treasurer",
		station: "...",
		imageSrc: "/nafsa/logo.jpg",
	},
	{
		id: "4",
		name: "Aminu M. R",
		title: "Deputy Secretary",
		station: "...",
		imageSrc: "/nafsa/logo.jpg",
	},
	{
		id: "5",
		name: "Folorunso S",
		title: " Internal Auditor",
		station: "...",
		imageSrc: "/nafsa/logo.jpg",
	},
	{
		id: "6",
		name: "Bello L",
		title: "Fin. secretary",
		station: "...",
		imageSrc: "/nafsa/logo.jpg",
	},
	{
		id: "7",
		name: "Udi N.D",
		title: "PRO",
		station: "...",
		imageSrc: "/udi.jpg",
	},
	{
		id: "9",
		name: "Abubakar Y.A",
		title: "Trustee 11",
		station: "...",
		imageSrc: "/nafsa/logo.jpg",
	},
	{
		id: "10",
		name: "Sadiq S.A",
		title: "Trustee 1",
		station: "...",
		imageSrc: "/nafsa/logo.jpg",
	},

	// ...
];

const positionPage = () => {
	return (
		<div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
				{positions.map((position) => (
					<div
						key={position.id}
						className="p-2 border rounded-xl shadow hover:shadow-lg transition bg-white"
					>
						<Image
							height={400}
							width={400}
							src={position.imageSrc}
							alt={position.title}
							className="w-48 h-48 object-contain  mx-auto mb-3"
						/>
						<h3 className="text-lg font-semibold text-center">
							{position.name}
						</h3>
						<p className="text-sm text-gray-600 text-center">
							{position.title}
						</p>
						<p className="text-sm text-gray-600 text-center">
							{" "}
							Station: {position.station}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default positionPage;
