export const Button = ({ children, primary }: React.PropsWithChildren<{ primary?: boolean }>) => {
	const buttonClass = ` ${primary ? "" : ""}`;

	return <button className={buttonClass}>{children}</button>;
};
