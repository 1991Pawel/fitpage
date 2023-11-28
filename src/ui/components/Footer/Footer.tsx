import style from "./footer.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { RoundedIcon } from "@/ui/components/RoundedIcon/RoundedIcon";
import InstagramIcon from "@/ui/svgs/instagram.svg";
import FacebookIcon from "@/ui/svgs/facebook.svg";
import EnvelopIcon from "@/ui/svgs/envelop.svg";

const socialLinks = [
	{
		title: "instagram",
		href: "strona-glowna",
		icon: <InstagramIcon />,
	},
	{
		title: "facebook",
		href: "o-mnie",
		icon: <FacebookIcon />,
	},
	{
		title: "mail",
		href: "mailto:example@gmail.com",
		icon: <EnvelopIcon />,
	},
];

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<Container>
				<h5 className={style.footerTitle}>Dawid Ciborowski</h5>
				<p className={style.footerDesc}>Trener personalny</p>

				<ul className={style.list}>
					{socialLinks.map(({ title, href, icon }) => (
						<li className={style.listItem} key={title}>
							<a title={title} href={href}>
								<RoundedIcon icon={icon} />
							</a>
						</li>
					))}
				</ul>
				<p className={style.disclaimer}>
					© 2023. Wszelkie prawa zastrzeżone przez Dawid Ciborowski
				</p>
			</Container>
		</footer>
	);
};
