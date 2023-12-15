import { Dispatch, SetStateAction } from "react";
import cls from "classnames";
import style from "./hamburger.module.css";

interface HamburgerProps {
	setOpenNav: Dispatch<SetStateAction<boolean>>;
	active: boolean;
}

export const Hamburger = ({ setOpenNav, active }: HamburgerProps) => {
	return (
		<button
			className={cls(style.hamburger, active ? style.hamburgerActive : null)}
			onClick={() => setOpenNav((prevState) => !prevState)}
		>
			<span className={style.hamburgerLine}></span>
			<span className={style.hamburgerLine}></span>
			<span className={style.hamburgerLine}></span>
		</button>
	);
};
