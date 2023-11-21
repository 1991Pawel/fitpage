import style from "./page.module.css";
import { Paragraph } from "@/ui/components/Paragraph";
import { Button } from "@/ui/components/Button/Button";
import { Container } from "@/ui/components/Container/Contianer";
import { SocialBar } from "@/ui/components/SocialBar/SocialBar";

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
			<SocialBar />
			<section className={style.welcome}>
				<Container>
					<article className={style.weolcomeInner}>
						<div className={style.welcomeContent}>
							<h2 className={style.welcomeContentTitle}>Cześć!</h2>
							<Paragraph>
								Mam na imię Dawid i&nbsp;jestem certyfikowanym Instruktorem Sportu ze specjalizacją
								Trener Personalny z&nbsp;Białegostoku.
							</Paragraph>
							<Paragraph>
								Z wykształcenia jestem Inżynierem budownictwa, ale nie zajmuję się budowaniem mostów
								tylko pomagam ludziom budować ich wymarzone sylwetki.
							</Paragraph>
						</div>
						<Paragraph className={style.welcomeContentLast}>
							Moja przygoda z siłownią rozpoczęła się kiedy byłem nastolatkiem i trwa do dzisiaj.
							Początkowo było to hobby, które z biegiem lat przerodziło się w pasje i stało się
							częścią życia. Po niemalże 15 latach praktyki oraz poszerzaniu wiedzy merytorycznej
							postanowiłem zacząć dzielić się swoim doświadczeniem z innymi osobami, które chcą coś
							zmienić w swoim życiu.
						</Paragraph>
					</article>
					<div className={style.welcomeImageWrapper}>
						<img
							src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
							alt="alt"
						/>
					</div>
				</Container>
			</section>
		</main>
	);
}
