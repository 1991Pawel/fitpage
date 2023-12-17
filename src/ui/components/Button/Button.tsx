import cls from "classnames";
import style from "./button.module.css";
export const Button = ({
	href,
	children,
	primary,
}: React.PropsWithChildren<{ primary?: boolean; href?: string }>) => {
	const buttonClass = ` ${primary ? cls(style.button, style.buttonPrimary) : style.button}`;

	return href ? (
		<a href={href} className={buttonClass}>
			{children}
		</a>
	) : (
		<button className={buttonClass}>{children}</button>
	);
};
