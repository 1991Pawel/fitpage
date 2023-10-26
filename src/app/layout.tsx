import "./globals.css";
import type { Metadata } from "next";

import { Rajdhani } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

const openSans = Rajdhani({
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
