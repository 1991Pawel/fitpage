"use client";
import { type SyntheticEvent, useState } from "react";

interface EmailData {
	email: string;
	message: string;
	subject: string;
}

export default function Contact() {
	const [values, setValues] = useState<EmailData>({
		email: "",
		message: "",
		subject: "Wiadomość z formularza",
	});
	const sendContactForm = async (data: EmailData) => {
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
			subject: values.subject,
			message: values.message,
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
			{JSON.stringify(values)}
			<form autoComplete="off" onSubmit={(event) => void onSubmit(event)}>
				<div>
					<label htmlFor="email">Email</label>
					<input onChange={handleChange} id="email" name="email" type="text" />
				</div>
				<div>
					<label htmlFor="message">Wiadomość</label>
					<input id="message" name="message" onChange={handleChange} type="text" />
				</div>
				<div>
					<button>Wyślij</button>
				</div>
			</form>
		</div>
	);
}
