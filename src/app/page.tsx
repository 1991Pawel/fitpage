import { NavLink } from "@/ui/atoms/NavLink";
import { SectionTitle } from "@/ui/atoms/SectionTitle";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<NavLink count={1} name="blog" href="#2" />
			<SectionTitle>
				Dlaczego wybierzesz mnie <span className="text-orange">mnie?</span>
			</SectionTitle>
			<section className="h-96">01</section>
			<section className="h-96">02</section>
			<section className="h-96">03</section>
			<section id="2" className="h-96"></section>
		</main>
	);
}
