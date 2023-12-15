import style from "./form.module.css";
import { Input } from "@/ui/components/Input/Input";
import { Textarea } from "@/ui/components/Textarea/Textarea";
import { Button } from "@/ui/components/Button/Button";

interface Form {
	name: string;
	type: string;
}

export const Form = () => {
	return (
		<form className={style.form}>
			<Input label="Imię" name="name" type="text" />
			<Input label="Email" name="email" type="text" />
			<Textarea label="Email" name="message" />
			<Button primary>Wyślij</Button>
		</form>
	);
};
