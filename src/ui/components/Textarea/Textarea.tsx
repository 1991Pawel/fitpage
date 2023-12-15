import style from "./textarea.module.css";

interface Textarea {
	name: string;
	label: string;
}

export const Textarea = ({ name, label, ...res }: Textarea) => {
	return (
		<div className={style.textareaWrapper}>
			<label htmlFor={name}>{label}</label>
			<textarea id={name} {...res} />
		</div>
	);
};
