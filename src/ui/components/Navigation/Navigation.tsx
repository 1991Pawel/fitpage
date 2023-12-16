import Link from "next/link";
import cls from "classnames";
import style from "./navigation.module.css";
import Logo from "@/ui/svgs/logo.svg";

const navLinks = [
	{
		title: "O mnie",
		href: "#o-mnie",
	},
	{
		title: "Oferta",
		href: "#oferta",
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
		base: cls(style.navigation),
		active: cls(style.navigation, style.active),
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
