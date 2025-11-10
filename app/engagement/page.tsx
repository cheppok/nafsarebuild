import React from "react";
import Image from "next/image";

const Pixs = [
	"/nafsa/1.jpg",
	"/nafsa/2.jpg",
	"/nafsa/3.jpg",
	"/nafsa/4.jpg",
	"/nafsa/5.jpg",
	"/nafsa/6.jpg",
	"/nafsa/7.jpg",
	"/nafsa/8.jpg",
	"/nafsa/9.jpg",
	"/nafsa/10.jpg",
	"/nafsa/11.jpg",
	"/nafsa/12.jpg",
	"/nafsa/13.jpg",
	"/nafsa/14.jpg",
	"/nafsa/15.jpg",
	"/nafsa/16.jpg",
	"/nafsa/17.jpg",
	"/nafsa/18.jpg",
	"/nafsa/19.jpg",
	"/nafsa/20.jpg",
	"/nafsa/21.jpg",
	"/nafsa/22.jpg",
	"/nafsa/23.jpg",
	"/nafsa/24.jpg",
	"/nafsa/25.jpg",
	"/nafsa/26.jpg",
	"/nafsa/27.jpg",
];

const Engagements = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 md:p-6">
			<div className="  col-span-1 md:col-span-3  text-2xl m-3 text-center">
				<h1>Engagements(PhotoSpeak)</h1>
			</div>
			{Pixs.map((src, index) => {
				return (
					<div
						key={index}
						className="p-2 border rounded-xl shadow hover:shadow-lg transition bg-white"
					>
						<Image
							src={src}
							alt={""}
							width={600}
							height={600}
							className="w-96 h-64 object-contain mx-auto mb-3"
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Engagements;
