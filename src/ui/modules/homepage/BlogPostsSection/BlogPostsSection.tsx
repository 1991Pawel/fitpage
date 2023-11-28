import style from "./blogPostsSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph";
import { SectionTitle } from "@/ui/components/SectionTitle/SectionTitle";

export const BlogPostsSection = () => (
	<section className={style.blogSection}>
		<Container>
			<div className={style.blogTitle}>
				<SectionTitle>Blog</SectionTitle>
			</div>
			<div className={style.blogContent}>
				<Paragraph>Znajdziesz tu codzienną dawkę motywacji oraz przydatnych wskazówek.</Paragraph>
				<Paragraph>
					Zapraszam do zapoznania się z moim blogiem i odkrywania inspirujących treści!
				</Paragraph>
			</div>
		</Container>
	</section>
);
