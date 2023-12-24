import type { Metadata } from "next";
import style from "./page.module.css";
import { SocialBar } from "@/ui/components/SocialBar/SocialBar";
import { IntroSection } from "@/ui/modules/homepage/IntroSection/IntroSection";
import { WelcomeSection } from "@/ui/modules/homepage/WelcomeSection/WelcomeSection";
import { GallerySection } from "@/ui/modules/homepage/GallerySection/GallerySection";
import { AboutSection } from "@/ui/modules/homepage/AboutSection/AboutSection";
import { OffersSection } from "@/ui/modules/homepage/OffersSection/OffersSection";
import { WhyMeSection } from "@/ui/modules/homepage/WhyMeSection/WhyMeSection";
// import { BlogPostsSection } from "@/ui/modules/homepage/BlogPostsSection/BlogPostsSection";
import { ContactSection } from "@/ui/modules/homepage/ContactSection/ContactSection";
import { FormSection } from "@/ui/modules/homepage/FormSection/FormSection";
export const metadata: Metadata = {
	title: "Dawid - Trener Personalny w Białymstoku | Treningi Personalne",
	metadataBase: new URL("https://ciborowski-trener.pl"),
	themeColor: "#ffffff",
	alternates: {
		canonical: "https://ciborowski-trener.pl",
	},

	openGraph: {
		url: "https://ciborowski-trener.pl",
		title: "Dawid - Trener Personalny w Białymstoku",
		description:
			"Osiągnij swoje fitness cele z doświadczonym trenerem personalnym w Białymstoku. Specjalizuję się w treningach siłowych, planowaniu diet i wspieram w dążeniu do zdrowego stylu życia. Skontaktuj się ze mną już dziś i rozpocznij transformację swojego ciała i zdrowia!",
		images: "/og-image.jpg",
	},

	description:
		"Osiągnij swoje fitness cele z doświadczonym trenerem personalnym w Białymstoku. Specjalizuję się w treningach siłowych, planowaniu diet i wspieram w dążeniu do zdrowego stylu życia. Skontaktuj się ze mną już dziś i rozpocznij transformację swojego ciała i zdrowia!",
};

export default function Home() {
	return (
		<main className={style.home}>
			<IntroSection />
			<SocialBar />
			<WelcomeSection />
			<GallerySection />
			<AboutSection />
			<OffersSection />
			<WhyMeSection />
			{/* <BlogPostsSection /> */}
			<ContactSection />
			<FormSection />
		</main>
	);
}
