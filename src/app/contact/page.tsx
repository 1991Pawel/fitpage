"use client";
import { useState } from "react";

export default function Contact() {
	const [values, setValues] = useState({
		email: "",
		body: "",
	});
	const sendContactForm = async (data) => {
		await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
	};
	const onSubmit = async (e) => {
		e.preventDefault();

		const payload = {
			email: values.email,
			subject: "Wiadomość z formularza",
			body: values.body,
		};
		await sendContactForm(payload);
	};

	const handleChange = (e) => {
		setValues((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	};
	return (
		<div className="flex min-h-screen flex-col items-center gap-10 p-8">
			<form onSubmit={onSubmit}>
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
