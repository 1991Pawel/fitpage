import style from "./contactSection.module.css";
import Image from "next/image";
import { Container } from "@/ui/components/Container/Contianer";
import { SectionTitle } from "@/ui/components/SectionTitle/SectionTitle";
import { Paragraph } from "@/ui/components/Paragraph/Paragraph";

import PhoneIcon from "@/ui/svgs/phone.svg";
import PinIcon from "@/ui/svgs/pin.svg";

export const ContactSection = () => (
	<section id="kontakt" className={style.contactSection}>
		<Container>
			<div className={style.titleWrapper}>
				<SectionTitle>Kontakt</SectionTitle>
			</div>
			<div className={style.contactContent}>
				<Paragraph>
					Zgłoś się na <strong>bezpłatną </strong>i niezobowiązującą konsultację
					<br />
					Pamietaj, nic nie tracisz, <strong>wiele możesz zyskać!</strong>
				</Paragraph>
			</div>
			<div className={style.infoWrapper}>
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
					<Image
						src="/assets/home/contact-mobile-map.jpg"
						layout="responsive"
						alt="Dawid Ciborowski"
						width={750}
						height={379}
					/>
				</div>
			</div>
		</Container>
	</section>
);
