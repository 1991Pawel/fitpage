import { NavLink } from "@/ui/atoms/NavLink";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<NavLink count={1} name="blog" href="#2" />
			<section className="h-96">01</section>
			<section className="h-96">02</section>
			<section className="h-96">03</section>
			<section id="2" className="h-96">
				04
			</section>
		</main>
	);
}
