import Link from "next/link";

type NavLinkProps = {
	href: string;
	name: string;
	count: number;
};

export const NavLink = ({ href, name, count }: NavLinkProps) => {
	return (
		<Link className="text-lg font-bold uppercase text-white" href={href}>
			<span className="text-gray mr-1">0{count}.</span>
			{name}
		</Link>
	);
};
