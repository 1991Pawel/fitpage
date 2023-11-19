export const Button = ({ children, primary }: React.PropsWithChildren<{ primary?: boolean }>) => {
	const buttonClass = `w-full bg-gradient-default  py-4 rounded-full ${
		primary
			? "bg-gray-500 hover:bg-gray-700 text-gray-900 font-normal text-white"
			: "bg-gray-500 hover:bg-gray-700 text-gray-900 font-normal"
	}`;

	return <button className={buttonClass}>{children}</button>;
};
