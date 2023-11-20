import { NavLink } from "@/ui/components/NavLink";
import { Paragraph } from "@/ui/components/Paragraph";
import { SectionTitle } from "@/ui/components/SectionTitle";
import { Button } from "@/ui/components/Button/Button";
import { RoundedIcon } from "@/ui/components/RoundedIcon";
import TestLogo from "@/ui/svgs/envelop.svg";
import style from "./page.module.css";

export default function Home() {
	return (
		<main>
			<section className={style.intro}>
				<header>
					<span>Trener Personalny</span>
					<h1>
						DAWID
						<br /> CIBOROWSKI
					</h1>
					<div>
						<Paragraph>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</Paragraph>
						<Button primary>Zapisz się na treing</Button>
					</div>
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
					{/* <RoundedIcon iconSrc="/assets/icons/envelop.svg" alt="envelop" /> */}
				</header>
			</section>
			{/* <NavLink count={1} name="blog" href="#2" /> */}
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>{" "}
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<SectionTitle>Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!</SectionTitle>
			<Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
		</main>
	);
}
