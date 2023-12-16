import style from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/ui/components/Container/Contianer";
import { Hamburger } from "@/ui/components/Hamburger/Hamburger";
import { Navigation } from "@/ui/components/Navigation/Navigation";
import Logo from "@/ui/svgs/logo.svg";

const navLinks = [
	{
		name: "O mnie",
	},
	{
		name: "Blog",
	},
	{
		name: "Współpraca",
	},
	{
		name: "Kontakt ",
	},
];

export const Header = () => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<header className={style.header}>
			<Container>
				<div className={style.headerInner}>
					<Link href="/">
						<div className={style.logoContainer}>
							<Logo />
						</div>
					</Link>
					<Navigation isActive={openNav} />
					<Hamburger active={openNav} setOpenNav={setOpenNav} />
				</div>
			</Container>
		</header>
	);
};
