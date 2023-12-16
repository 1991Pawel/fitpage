import style from "./paragraph.module.css";
import cls from "classnames";

export const Paragraph = ({
	children,
	className,
}: React.PropsWithChildren<{ className?: string }>) => {
	return <p className={cls(`${className || ""}`, style.paragraph)}>{children}</p>;
};
