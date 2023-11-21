import style from "./navigation.module.css";
import Link from "next/link";

import Logo from "@/ui/svgs/logo.svg";

const navLinks = [
	{
		title: "Strona główna",
		href: "strona-glowna",
	},
	{
		title: "O mnie",
		href: "o-mnie",
	},
	{
		title: "Treningi",
		href: "treningi",
	},
	{
		title: "Blog",
		href: "blog",
	},
	{
		title: "Kontakt",
		href: "kontakt",
	},
];

export const Navigation = () => {
	return (
		<nav className={style.navigation}>
			<ul className={style.navigationList}>
				<Link href={"/"}>
					<li className={style.logoWrapper}>
						<Logo />
					</li>
				</Link>
				{navLinks.map(({ href, title }) => (
					<Link key={title} href={href}>
						<li className={style.navigationListItem}>{title}</li>
					</Link>
				))}
			</ul>
		</nav>
	);
};
