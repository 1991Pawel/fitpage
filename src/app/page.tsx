"use client";
import { NavLink } from "@/ui/atoms/NavLink";

const sendContactForm = async (data) => {
	console.log("starzał");
	await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
};
export default function Home() {
	const onSubmit = async () => {
		// console.log("fetch");
		const values = {
			email: "test@wp.pl",
			subject: "Testowy tytuł",
			body: "przykładowa wiadomość",
		};
		await sendContactForm(values);
	};
	return (
		<main className="flex flex-col items-center justify-between">
			<NavLink count={1} name="blog" href="#2" />
			<section className="h-96">01</section>
			<section className="h-96">02</section>
			<section className="h-96">03</section>
			<section id="2" className="h-96">
				<button onClick={onSubmit}>send form</button>
			</section>
		</main>
	);
}
