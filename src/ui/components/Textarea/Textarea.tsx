import React from "react";
import style from "./textarea.module.css";

interface TextareaProps {
	name: string;
	label: string;
	handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({ name, handleChange, label, ...res }) => {
	return (
		<div className={style.textareaWrapper}>
			<label htmlFor={name}>{label}</label>
			<textarea onChange={(e) => handleChange(e)} name={name} id={name} {...res} />
		</div>
	);
};
