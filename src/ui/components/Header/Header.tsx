import Logo from "@/ui/svgs/logo.svg";
import style from "./header.module.css";
import { Container } from "@/ui/components/Container/Contianer";

export const Header = () => {
	return (
		<header className={style.header}>
			<Container>
				<div className="">
					<Logo />
				</div>
				<button className="hamburger">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</button>
			</Container>
		</header>
	);
};
