import React from "react";
import Link from "next/link";

const materials = [
	{
		id: "1 ",
		name: "Aircraft Engine",
		href: "/aamaterial/engine.docx ",
	},
	{
		id: "2 ",
		name: "Aircraft Construction",
		href: "/aamaterial/construction.docx ",
	},
	{
		id: "3 ",
		name: "A/C Undercariage",
		href: "/aamaterial/undercarriages.docx ",
	},
	{
		id: "4 ",
		name: "Media CO2",
		href: "/aamaterial/media1.docx ",
	},
	{
		id: "5 ",
		name: "Media DCP",
		href: "/aamaterial/media2.docx ",
	},
	{
		id: "6 ",
		name: "Media Foam",
		href: "/aamaterial/media3.docx ",
	},
];

const TrainingMaterials = () => {
	return (
		<div className=" flex  flex-col justify-center items-center">
			<h1 className="text-2xl font-semibold m-4">Training Materials</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
				{materials.map((material) => {
					return (
						<div key={material.id}>
							<Link
								href={material.href ?? "#"}
								target="_blank"
								className="underline"
							>
								{material.name}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TrainingMaterials;
