export const Paragraph = ({
	children,
	className,
}: React.PropsWithChildren<{ className?: string }>) => {
	return <p className={`${className || ""}`}>{children}</p>;
};
