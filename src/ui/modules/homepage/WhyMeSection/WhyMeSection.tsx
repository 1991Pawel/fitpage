import style from "./whyMeSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph";

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

export const WhyMeSection = () => (
	<section className={style.whyMe}>
		<Container>
			<article>
				<h2 className={style.whyMeTitle}>
					Zwiedź <br />
					mój program
				</h2>
				<ul className={style.whyMeCards}>
					{whyMeItems.map(({ title, desc }, index) => (
						<li key={title} className={style.whyMeCardItem}>
							<div className={style.whyMeCardHeader}>
								<span className={style.whyMeCardCounter}>0{index + 1}</span>
								<h3 className={style.whyMeCardItemTitle}>{title}</h3>
							</div>
							<Paragraph>{desc}</Paragraph>
						</li>
					))}
				</ul>
			</article>
		</Container>
	</section>
);
