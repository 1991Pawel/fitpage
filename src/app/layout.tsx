import "./globals.css";

import { Montserrat } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

const openSans = Montserrat({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className={openSans.className} lang="pl">
			<body>
				<ApolloWrapper>{children}</ApolloWrapper>
			</body>
		</html>
	);
}
