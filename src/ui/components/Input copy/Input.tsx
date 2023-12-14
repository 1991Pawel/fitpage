import style from "./formSection.module.css";

interface Input {
	name: string;
	type: string;
}

export const Input = ({ name, type, ...res }: Input) => {
	return (
		<div className={style.inputWrapper}>
			<label htmlFor={name}></label>
			<input {...res} type={type} />
		</div>
	);
};
