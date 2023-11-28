import style from "./aboutSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Paragraph } from "@/ui/components/Paragraph";

export const AboutSection = () => (
	<section className={style.about}>
		<div className={style.aboutContent}>
			<Container>
				<Paragraph>
					Jako trener personalny stawiam na ciągły rozwój a moim celem jest pozytywna zmiana w życiu
					osoby, z którą współpracuje zarówno w aspekcie fizycznym, zdrowotnym jak i mentalnym.
				</Paragraph>
				<Paragraph>
					Podczas trwania naszej współpracy osiągniecie Twojego celu jest moim priorytetem. Przy
					pomocy dostępnego sprzętu w siłowni CityFit w Białymstoku, nauczę Cię poprawnie wykonywać
					ćwiczenia, dzięki którym efektywnie zmienimy wygląd Twojej sylwetki.Zapraszam na treningi
					personalne!
				</Paragraph>
			</Container>
		</div>
	</section>
);
