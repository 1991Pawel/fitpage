export const Paragraph = ({
	children,
	className,
}: React.PropsWithChildren<{ className?: string }>) => {
	return <p className={`sm:text-sm lg:text-8xl ${className || ""}`}>{children}</p>;
};
