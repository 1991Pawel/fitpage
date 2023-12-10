import style from "./contactSection.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { SectionTitle } from "@/ui/components/SectionTitle/SectionTitle";
import { Paragraph } from "@/ui/components/Paragraph";
import PhoneIcon from "@/ui/svgs/phone.svg";
import PinIcon from "@/ui/svgs/pin.svg";

export const ContactSection = () => (
	<section className={style.contactSection}>
		<Container>
			<div className={style.titleWrapper}>
				<SectionTitle>Kontakt</SectionTitle>
			</div>
			<div className={style.contactContent}>
				<Paragraph>
					Chcesz spersonalizowane treningi 1 na 1 z certyfikowanym trenerem, który chce, abyś
					odniósł sukces, stając się zdrowszą, szczęśliwszą i bardziej pewną siebie osobą od środka
					na zewnątrz?
				</Paragraph>
				<Paragraph>
					Wszystkie moje sesje 1 na 1 odbywają się w studiu znajdującym się przy ul.{" "}
					<strong>Wrocławska 20 w&nbsp;Białymstoku.</strong>
				</Paragraph>
				<Paragraph>
					Aby uzyskać więcej informacji lub omówić Twoje potrzeby treningowe, wyślij mi wiadomość za
					pomocą formularza kontaktowego poniżej.
				</Paragraph>
			</div>
			<div className={style.info}>
				<div className={style.infoItem}>
					<a
						className={style.infoLink}
						target="_blank"
						href="https://www.google.pl/maps/place/CityFit/@53.12426,23.0959011,17z/data=!3m1!4b1!4m6!3m5!1s0x471ffb8364000077:0x1010573c01c0777e!8m2!3d53.12426!4d23.098476!16s%2Fg%2F11gc5bgc4x?entry=ttu"
					>
						<span className={style.icon}>
							<PinIcon />
						</span>
						Wrocławska 20, 15-660 Białystok
					</a>
					<a className={style.infoLink} href="tel:+48518331251">
						<span className={style.icon}>
							<PhoneIcon />
						</span>
						518 331 251
					</a>
				</div>
			</div>
			<div className={style.map}>
				<picture>
					<source media="(min-width: 1020px)" srcSet="/assets/home/contact-mobile-map.jpg" />

					<img src="/assets/home/contact-mobile-map.jpg" alt="Dawid Ciborowski Trener Białystok" />
				</picture>
			</div>
		</Container>
	</section>
);
