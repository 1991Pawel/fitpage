import style from "./hamburger.module.css";

export const Hamburger = () => {
	return (
		<button className={style.hamburger}>
			<span className={style.hamburgerLine}></span>
			<span className={style.hamburgerLine}></span>
			<span className={style.hamburgerLine}></span>
		</button>
	);
};
