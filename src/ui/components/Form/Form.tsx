"use client";
import { type SyntheticEvent, useState } from "react";
import { sendContactForm } from "../../../services";
import style from "./form.module.css";
import { Input } from "@/ui/components/Input/Input";
import { Textarea } from "@/ui/components/Textarea/Textarea";
import { Button } from "@/ui/components/Button/Button";

interface Form {
	name: string;
	type: string;
}
interface EmailData {
	email: string;
	message: string;
	subject: string;
}

export const Form = () => {
	const [values, setValues] = useState<EmailData>({
		email: "",
		message: "",
		subject: "Wiadomość z formularza",
	});

	const onSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();

		const payload = {
			email: values.email,
			subject: values.subject,
			message: values.message,
		};
		await sendContactForm(payload);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValues((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<form autoComplete="off" onSubmit={(event) => void onSubmit(event)} className={style.form}>
			<Input handleChange={handleChange} label="Imię" name="name" type="text" />
			<Input handleChange={handleChange} label="Email" name="email" type="text" />
			<Textarea handleChange={handleChange} label="Wiadomość" name="message" />
			<Button primary>Wyślij</Button>
		</form>
	);
};
