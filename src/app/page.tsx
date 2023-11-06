import { NavLink } from "@/ui/atoms/NavLink";
import { Paragraph } from "@/ui/atoms/Paragraph";
import { SectionTitle } from "@/ui/atoms/SectionTitle";
import { Button } from "@/ui/atoms/Button";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<NavLink count={1} name="blog" href="#2" />
			<SectionTitle>
				Dlaczego wybierzesz mnie <span className="text-orange">mnie?</span>
			</SectionTitle>
			<Paragraph>
				Lorem ipsum dolor sit amet.
			</Paragraph>
			<Button primary>Zapisz się na treing</Button>
			
		</main>
	);
}
