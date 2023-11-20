import Logo from "@/ui/svgs/logo.svg";
import { Container } from "@/ui/atoms/Contianer";
export const Header = () => {
	return (
		<header className="fixed left-0 right-0 flex h-[60px] items-center justify-between">
			<Container>
				<div className="h-[28px] w-[73px]  lg:h-[58px] lg:w-[153px]">
					<Logo width={"100%"} height={"100%"} />
				</div>
				<button className="hamburger">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</button>
			</Container>
		</header>
	);
};
