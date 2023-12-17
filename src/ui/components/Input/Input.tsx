import style from "./input.module.css";

interface Input {
	name: string;
	type: string;
	label: string;
	value: string;

	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, handleChange, name, label, type, ...res }: Input) => {
	return (
		<div className={style.inputWrapper}>
			<label htmlFor={name}>{label}</label>
			<input
				required
				name={name}
				onChange={(e) => handleChange(e)}
				id={name}
				type={type}
				value={value}
				{...res}
			/>
		</div>
	);
};
