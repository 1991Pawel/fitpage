import style from "./sectionTitle.module.css";

export const SectionTitle = ({ children }: React.PropsWithChildren) => {
	return <h2 className={style.title}>{children}</h2>;
};
