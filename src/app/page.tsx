import style from "./page.module.css";
import { Paragraph } from "@/ui/components/Paragraph";
import { Container } from "@/ui/components/Container/Contianer";
import { SocialBar } from "@/ui/components/SocialBar/SocialBar";

import { IntroSection } from "@/ui/modules/homepage/IntroSection/IntroSection";
import { WelcomeSection } from "@/ui/modules/homepage/WelcomeSection/WelcomeSection";
import { GallerySection } from "@/ui/modules/homepage/GallerySection/GallerySection";
import { AboutSection } from "@/ui/modules/homepage/AboutSection/AboutSection";
import { OffersSection } from "@/ui/modules/homepage/OffersSection/OffersSection";
import { WhyMeSection } from "@/ui/modules/homepage/WhyMeSection/WhyMeSection";
import { BlogPostsSection } from "@/ui/modules/homepage/BlogPostsSection/BlogPostsSection";

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
			<BlogPostsSection />
		</main>
	);
}
