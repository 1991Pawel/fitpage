export const Container = ({
	children,
	className,
}: React.PropsWithChildren<{ className?: string }>) => {
	return <div className={`container mx-auto px-4  ${className || ""}`}>{children}</div>;
};
