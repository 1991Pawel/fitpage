import { NavLink } from "@/ui/atoms/NavLink";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<NavLink count={1} name="blog" href="/blog" />
			<section>HOMEPAGE</section>
		</main>
	);
}
