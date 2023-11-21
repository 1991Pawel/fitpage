import cls from "classnames";
import style from "./button.module.css";
export const Button = ({ children, primary }: React.PropsWithChildren<{ primary?: boolean }>) => {
	const buttonClass = ` ${primary ? cls(style.button, style.buttonPrimary) : style.button}`;

	return <button className={buttonClass}>{children}</button>;
};
