import style from "./input.module.css";

interface Input {
	name: string;
	type: string;
	label: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ handleChange, name, label, type, ...res }: Input) => {
	return (
		<div className={style.inputWrapper}>
			<label htmlFor={name}>{label}</label>
			<input name={name} onChange={(e) => handleChange(e)} id={name} {...res} type={type} />
		</div>
	);
};
