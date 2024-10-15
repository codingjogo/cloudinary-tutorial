"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CldImage, CldUploadWidget } from "next-cloudinary";

const ImageUploader = () => {
	// stores links (public_id)
	const [resource, setResource] = useState<string[]>([]);

	useEffect(() => {
		console.log(resource);
	}, [resource])

	return (
		<>
			{/* https://next.cloudinary.dev/clduploadwidget/basic-usage */}
			<CldUploadWidget
				uploadPreset="pnfjb4bt"
				onSuccess={(result: any) => {
					setResource((prev) => [...prev, result.info.public_id]);
				}}
			>
				{({ open }) => {
					return (
						<Button
							variant={"secondary"}
							onClick={() => {
								open();
							}}
							className="my-4"
						>
							Upload an Image
						</Button>
					);
				}}
			</CldUploadWidget>
			<div className="grid grid-cols-3 gap-6">
				{resource.map((image) => {
					return (
						// https://next.cloudinary.dev/cldimage/basic-usage
						<CldImage
							key={image}
							width="960"
							height="600"
							className="rounded-md"
							src={image}
							sizes="100vw"
							alt={image}
						/>
					);
				})}
			</div>
		</>
	);
};

export default ImageUploader;
