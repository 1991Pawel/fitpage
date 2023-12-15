import style from "./introSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Button } from "@/ui/components/Button/Button";
import { Paragraph } from "@/ui/components/Paragraph";

export const IntroSection = () => (
	<section className={style.intro}>
		<header className={style.introHeader}>
			<Container>
				<div className={style.introHeaderInner}>
					<span className={style.introSpecial}>Trener Personalny</span>
					<h1 className={style.introTitle}>
						DAWID
						<br /> CIBOROWSKI
					</h1>

					<Paragraph className={style.introDescription}>
						Zrób pierwszy krok na swojej drodze do&nbsp;wymarzonej sylwetki!
					</Paragraph>
					<div className={style.ctaWrapper}>
						<Button primary>Zapisz się na trening</Button>
						<Button>Dowiedz się więcej</Button>
					</div>
				</div>
			</Container>
		</header>
		<div className={style.introImage}>
			<picture>
				<source media="(min-width: 1020px)" srcSet={"/assets/home/dawid-ciborowski-trener.png"} />

				<img
					src={"/assets/home/dawid-ciborowski-trener.png"}
					alt="Dawid Ciborowski Trener Białystok"
				/>
			</picture>
		</div>
	</section>
);
