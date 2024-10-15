import ImageUploader from "../components/image-uploader";

export default function Home() {
	return (
		<section>
			<h1 className="text-3xl">Home Page</h1>
			<div>
				<ImageUploader />
			</div>
		</section>
	);
}
