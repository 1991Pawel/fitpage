import style from "./socialBar.module.css";

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

export const SocialBar = () => {
	return (
		<ul className={style.socialBar}>
			{socialLinks.map(({ href, title, icon }) => (
				<li key={title} className={style.navigationListItem}>
					<a title={title} href={href}>
						{icon}
					</a>
				</li>
			))}
		</ul>
	);
};
