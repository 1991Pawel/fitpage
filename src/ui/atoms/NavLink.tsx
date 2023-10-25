import Link from "next/link";

type NavLinkProps = {
	href: string;
	name: string;
	count: number;
};

export const NavLink = ({ href, name, count }: NavLinkProps) => {
	return (
		<Link href={href}>
			<span>0{count}.</span>
			{name}
		</Link>
	);
};
