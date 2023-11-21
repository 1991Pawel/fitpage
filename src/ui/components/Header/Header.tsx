import style from "./header.module.css";
import { Container } from "@/ui/components/Container/Contianer";
import { Hamburger } from "@/ui/components/Hamburger/Hamburger";
import Logo from "@/ui/svgs/logo.svg";

interface HeaderProps {
	handleOpenNavigation: () => void;
}

export const Header = () => {
	return (
		<header className={style.header}>
			<Container>
				<div className={style.headerInner}>
					<div className={style.logoContainer}>
						<Logo />
					</div>
					<Hamburger />
				</div>
			</Container>
		</header>
	);
};
