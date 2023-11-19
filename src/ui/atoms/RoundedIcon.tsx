import Image from "next/image";
export const RoundedIcon = ({ iconSrc, alt }: { iconSrc: string; alt: string }) => {
	return (
		<span className="h-[36px] w-[36px]">
			<Image priority src={iconSrc} alt={alt} />
		</span>
	);
};
