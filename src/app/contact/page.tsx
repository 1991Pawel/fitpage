"use client";
import { type SyntheticEvent, useState } from "react";

type FormValues = {
	email: string;
	body: string;
};

export default function Contact() {
	const [values, setValues] = useState<FormValues>({
		email: "",
		body: "",
	});
	const sendContactForm = async (data: FormValues) => {
		try {
			const request = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			if (request.ok) {
				alert("wyślany");
			} else {
				throw new Error("błąd");
			}
		} catch (error) {
			throw new Error("błąd");
		}
	};
	const onSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const payload = {
			email: values.email,
			subject: "Wiadomość z formularza",
			body: values.body,
		};
		await sendContactForm(payload);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	};

	return (
		<div className="flex min-h-screen flex-col items-center gap-10 p-8">
			<form onSubmit={(event) => void onSubmit(event)}>
				<div>
					<label
						htmlFor="email
				"
					>
						Email
						<input onChange={handleChange} name="email" type="text" />
					</label>
				</div>
				<div>
					<label
						htmlFor="email
				"
					>
						Wiadomość
						<input onChange={handleChange} name="body" type="text" />
					</label>
				</div>

				<div>
					<button>Wyslij</button>
				</div>
			</form>
		</div>
	);
}
