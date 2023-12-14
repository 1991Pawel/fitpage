import style from "./input.module.css";

interface Input {
	name: string;
	type: string;
	label: string;
}

export const Input = ({ name, label, type, ...res }: Input) => {
	return (
		<div className={style.inputWrapper}>
			<label htmlFor={name}>{label}</label>
			<input id={name} {...res} type={type} />
		</div>
	);
};
