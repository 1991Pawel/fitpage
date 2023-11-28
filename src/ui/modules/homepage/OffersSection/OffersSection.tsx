import style from "./offersSection.module.css";
import OfferIcon01 from "@/ui/svgs/offer-icon-01.svg";
import OfferIcon02 from "@/ui/svgs/offer-icon-02.svg";
import OfferIcon03 from "@/ui/svgs/offer-icon-03.svg";
import OfferIcon04 from "@/ui/svgs/offer-icon-04.svg";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph";

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

export const OffersSection = () => (
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
);
