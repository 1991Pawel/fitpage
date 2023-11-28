import style from "./page.module.css";
import { Paragraph } from "@/ui/components/Paragraph";
import { Container } from "@/ui/components/Container/Contianer";
import { SocialBar } from "@/ui/components/SocialBar/SocialBar";
import OfferIcon01 from "@/ui/svgs/offer-icon-01.svg";
import OfferIcon02 from "@/ui/svgs/offer-icon-02.svg";
import OfferIcon03 from "@/ui/svgs/offer-icon-03.svg";
import OfferIcon04 from "@/ui/svgs/offer-icon-04.svg";
import { IntroSection } from "@/ui/modules/homepage/IntroSection/IntroSection";
import { WelcomeSection } from "@/ui/modules/homepage/WelcomeSection/WelcomeSection";

const galleryImage = [
	{
		mobile: "/assets/home/gallery-01-mobile.jpg",
		desktop: "/assets/home/gallery-01-mobile.jpg",
	},
	{
		mobile: "/assets/home/gallery-02-mobile.jpg",
		desktop: "/assets/home/gallery-02-mobile.jpg",
	},
	{
		mobile: "/assets/home/gallery-03-mobile.jpg",
		desktop: "/assets/home/gallery-03-mobile.jpg",
	},
];

const offersItems = [
	{
		title: "Trening budujący masę mięśniową",
		desc: "Trening jest przeznaczony dla tych, którzy chcą zwiększyć masę mięśniową. Obejmuje różnorodne ćwiczenia z obciążeniem, mające na celu rozwój siły i objętości mięśni, a także optymalne żywienie w celu wspierania wzrostu i regeneracji tkanek.",
		icon: <OfferIcon01 />,
	},
	{
		title: "Trening Cardio",
		desc: `Program "Trening Cardio" skupia się na poprawie wydolności serca i układu krążenia. Poprzez dynamiczne sesje treningowe skupimy się na wzmocnieniu układu sercowo-naczyniowego, co przyczyni się do spalania kalorii.`,
		icon: <OfferIcon02 />,
	},
	{
		title: "Utrata tkanki tłuszczowej",
		desc: `Moja program utraty tkanki tłuszczowej to nie tylko treningi, ale kompleksowe podejście do transformacji twojego ciała. Ten program oferuje skuteczny zestaw ćwiczeń zaprojektowanych do maksymalnego spalania nadmiaru tłuszczu.`,
		icon: <OfferIcon03 />,
	},
	{
		title: "Dieta i plan żywieniowy",
		desc: `Trening jest przeznaczony dla tych, którzy chcą zwiększyć masę mięśniową. Obejmuje różnorodne ćwiczenia z obciążeniem, mające na celu rozwój siły i objętości mięśni, a także optymalne żywienie w celu wspierania wzrostu i regeneracji tkanek.`,
		icon: <OfferIcon04 />,
	},
];
const whyMeItems = [
	{
		title: "Profesjonalizm",
		desc: "Z latami praktyki oraz zdobytą wiedzą w dziedzinie treningu, zdrowego stylu życia i żywienia, mam umiejętność tworzenia spersonalizowanych planów treningowych, uwzględniających Twoje indywidualne cele.",
	},
	{
		title: "Motywacja i wsparcie",
		desc: "Jestem gotowy wspierać Cię na każdym etapie Twojej drogi do osiągnięcia celów fitness. Moja motywacja jest skierowana na pomoc Ci w przezwyciężaniu trudności i utrzymaniu determinacji.",
	},
	{
		title: "Podejście Indywidualne",
		desc: "Angażuję się w każdego klienta indywidualnie, starając się zrozumieć Twoje unikalne cele i wymagania. Skupiam się na każdym szczególe, aby zapewnić Ci najefektywniejsze treningi.",
	},
	{
		title: "Zróżnicowany zakres umiejętności",
		desc: "Dzięki moim umiejętnościom w różnych dziedzinach treningu, od siłowego po funkcjonalny, mogę dostosować program treningowy tak, aby jak najlepiej odpowiadał Twoim potrzebom i ambicjom.",
	},
];

export default function Home() {
	return (
		<main className={style.home}>
			<IntroSection />
			{/* <section className={style.intro}>
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
			</section> */}
			<SocialBar />
			<WelcomeSection />

			<section className={style.gallery}>
				<div className={style.galleryInner}>
					{galleryImage.map((image, index) => (
						<div key={index} className={style.galleryImageWrapper}>
							<picture>
								<source media="(min-width: 1020px)" srcSet={image.desktop} />

								<img src={image.mobile} alt="Dawid Ciborowski Trener Białystok" />
							</picture>
						</div>
					))}
				</div>
			</section>
			<section className={style.about}>
				<div className={style.aboutContent}>
					<Container>
						<Paragraph>
							Jako trener personalny stawiam na ciągły rozwój a moim celem jest pozytywna zmiana w
							życiu osoby, z którą współpracuje zarówno w aspekcie fizycznym, zdrowotnym jak i
							mentalnym.
						</Paragraph>
						<Paragraph>
							Podczas trwania naszej współpracy osiągniecie Twojego celu jest moim priorytetem. Przy
							pomocy dostępnego sprzętu w siłowni CityFit w Białymstoku, nauczę Cię poprawnie
							wykonywać ćwiczenia, dzięki którym efektywnie zmienimy wygląd Twojej
							sylwetki.Zapraszam na treningi personalne!
						</Paragraph>
					</Container>
				</div>
			</section>
			<section className={style.offers}>
				<Container>
					<article>
						<h2 className={style.offersTitle}>
							Zwiedź <br />
							mój program
						</h2>
						<ul className={style.offerCards}>
							{offersItems.map(({ title, icon, desc }) => (
								<li key={title} className={style.offerCardItem}>
									<div className={style.offerCardHeader}>
										<span className={style.offerCardIcon}>{icon}</span>
										<h3 className={style.offerCardItemTitle}>{title}</h3>
									</div>
									<Paragraph>{desc}</Paragraph>
								</li>
							))}
						</ul>
					</article>
				</Container>
			</section>
			<section className={style.whyMe}>
				<Container>
					<article>
						<h2 className={style.offersTitle}>
							Zwiedź <br />
							mój program
						</h2>
						<ul className={style.offerCards}>
							{whyMeItems.map(({ title, desc }, index) => (
								<li key={title} className={style.offerCardItem}>
									<div className={style.offerCardHeader}>
										<span className={style.offerCardCounter}>0{index + 1}</span>
										<h3 className={style.offerCardItemTitle}>{title}</h3>
									</div>
									<Paragraph>{desc}</Paragraph>
								</li>
							))}
						</ul>
					</article>
				</Container>
			</section>
			<section className={style.blogSection}>
				<Container>
					<h2 className={style.blogSectiontitle}>Blog</h2>
					<Paragraph>Znajdziesz tu codzienną dawkę motywacji oraz przydatnych wskazówek.</Paragraph>
					<Paragraph>
						Zapraszam do zapoznania się z moim blogiem i odkrywania inspirujących treści!
					</Paragraph>
				</Container>
			</section>
		</main>
	);
}
