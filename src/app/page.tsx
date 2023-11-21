import style from "./page.module.css";
import { Paragraph } from "@/ui/components/Paragraph";
import { Button } from "@/ui/components/Button/Button";
import { Container } from "@/ui/components/Container/Contianer";

export default function Home() {
	return (
		<main className={style.home}>
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
								Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!
							</Paragraph>
							<Button primary>Zapisz się na trening</Button>
						</div>
					</Container>
				</header>
				<div className={style.introImage}>
					<picture>
						<source
							media="(min-width: 1020px)"
							srcSet={"/assets/home/dawid-ciborowski-trener.png"}
						/>

						<img
							src={"/assets/home/dawid-ciborowski-trener.png"}
							alt="Dawid Ciborowski Trener Białystok"
						/>
					</picture>
				</div>
			</section>
		</main>
	);
}
