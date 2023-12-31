import Link from "next/link";
import Image from "next/image";
import style from "./blogPostsSection.module.css";
import TwistedArrow from "@/ui/svgs/twisted-arrow.svg";
import TwistedArrowDesktop from "@/ui/svgs/twisted-arrow-desktop.svg";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph/Paragraph";
import { SectionTitle } from "@/ui/components/SectionTitle/SectionTitle";
const fakeBlogData = [
	{
		title:
			"Znaczenie prawidłowego oddechu podczas treningu lorem5 dsadsadsadsa dasdsadsa dasdasdsad",
		bgUrl:
			"https://t4.ftcdn.net/jpg/03/17/72/47/240_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
	},
	{
		title: "5 Ćwiczeń dla Efektywnych Treningów z Ciężarem ",
		bgUrl:
			"https://t4.ftcdn.net/jpg/01/74/21/25/240_F_174212531_cerVf4uP6vinBWieBB46p2P5xVhnsNSK.jpg",
	},
	{
		title: "Rola białka w procesie budowania mięśni",
		bgUrl:
			"https://as1.ftcdn.net/v2/jpg/01/08/99/20/1000_F_108992094_SZ5WSERYBUzfI2uookwvFQdFc6DSt9IB.jpg",
	},
	{
		title: "Zbilansowana dieta dla aktywnego&nbsp;trybu&nbsp;życia",
		bgUrl:
			"https://as2.ftcdn.net/v2/jpg/04/04/01/01/1000_F_404010101_b8jIDMJrqLb0DlKjzFdYJicuQBX4CoHe.jpg",
	},
];

export const BlogPostsSection = () => (
	<section id="blog" className={style.blogSection}>
		<Container>
			<div className={style.inner}>
				<div className={style.content}>
					<div className={style.blogTitle}>
						<SectionTitle>Blog</SectionTitle>
					</div>
					<article className={style.blogContent}>
						<Paragraph>
							Znajdziesz tu codzienną dawkę motywacji oraz przydatnych wskazówek.
						</Paragraph>
						<Paragraph>
							Zapraszam do zapoznania się z moim blogiem i odkrywania inspirujących treści!
						</Paragraph>
					</article>
				</div>
				<ul className={style.blogPosts}>
					{fakeBlogData.map(({ title, bgUrl }) => (
						<li key={title} className={style.blogPost}>
							<Link
								href={"/blog/dlaczego-warto-uwzglednic-trening-silowy-w-programie-fitness"}
								className={style.blogLink}
							>
								<Image
									style={{
										width: "100%",
										height: "auto",
									}}
									src={bgUrl}
									alt={title}
								/>

								<div className={style.desktopPointer}>
									<TwistedArrowDesktop />
								</div>
								<div className={style.blogPostContent}>
									<header className={style.blogPostHeader}>
										<h3
											dangerouslySetInnerHTML={{ __html: title }}
											className={style.blogPostTitle}
										/>
										<div className={style.mobilePointer}>
											<TwistedArrow />
										</div>
									</header>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</Container>
	</section>
);
