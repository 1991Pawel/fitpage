import style from "./blogPostsSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph";

export const BlogPostsSection = () => (
	<section className={style.blogSection}>
		<Container>
			<h2 className={style.blogSectiontitle}>Blog</h2>
			<Paragraph>Znajdziesz tu codzienną dawkę motywacji oraz przydatnych wskazówek.</Paragraph>
			<Paragraph>
				Zapraszam do zapoznania się z moim blogiem i odkrywania inspirujących treści!
			</Paragraph>
		</Container>
	</section>
);
