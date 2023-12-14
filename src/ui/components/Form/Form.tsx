import style from "./form.module.css";
import { Input } from "@/ui/components/Input/Input";

interface Form {
	name: string;
	type: string;
}

export const Form = () => {
	return (
		<form className={style.form}>
			<Input label="Imię" name="name" type="text" />
			<Input label="Email" name="email" type="text" />
		</form>
	);
};
