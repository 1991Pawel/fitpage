import Link from "next/link"; // Importuj next/link przed importem pliku CSS Modules
import style from "./navigation.module.css";
import Logo from "@/ui/svgs/logo.svg";
import cls from "classnames";

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

export const Navigation = ({ isActive }: { isActive: boolean }) => {
	const navClass = {
		active: cls(style.navigation),
		base: cls(style.navigation, style.active),
	};
	return (
		<nav className={isActive ? navClass.active : navClass.base}>
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
