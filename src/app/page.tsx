import { NavLink } from "@/ui/atoms/NavLink";
import { Paragraph } from "@/ui/atoms/Paragraph";
import { SectionTitle } from "@/ui/atoms/SectionTitle";
import { Button } from "@/ui/atoms/Button";
import { RoundedIcon } from "@/ui/atoms/RoundedIcon";

export default function Home() {
	return (
		<main
			className="bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: 'url("/assets/home/intro-mobile-gradient.png")' }}
		>
			<section className="min-h-[612px]">
				<header>
					<span>Trener Personalny</span>
					<h1 className="text-normal text-center text-3xl font-semibold text-orange">
						DAWID
						<br /> CIBOROWSKI
					</h1>
					<div className="m-auto flex w-[280px] flex-col items-center justify-center">
						<Paragraph className="mb-4 text-center">
							Zrób pierwszy krok na swojej drodze do wymarzonej sylwetki!
						</Paragraph>
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
