import style from "./gallerySection.module.css";

const galleryImage = [
	{
		mobile: "/assets/home/gallery-01-mobile.jpg",
		desktop: "/assets/home/gallery-01-mobile.jpg",
	},
	{
		mobile: "/assets/home/gallery-02-mobile.jpg",
		desktop: "/assets/home/gallery-02-mobile.jpg",
	},
	{
		mobile: "/assets/home/gallery-03-mobile.jpg",
		desktop: "/assets/home/gallery-03-mobile.jpg",
	},
];

export const GallerySection = () => (
	<section className={style.gallery}>
		<div className={style.galleryInner}>
			{galleryImage.map((image, index) => (
				<div key={index} className={style.galleryImageWrapper}>
					<picture>
						<source media="(min-width: 1020px)" srcSet={image.desktop} />

						<img src={image.mobile} alt="Dawid Ciborowski Trener Białystok" />
					</picture>
				</div>
			))}
		</div>
	</section>
);
