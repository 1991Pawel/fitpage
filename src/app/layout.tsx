"use client";
import "./globals.css";

import { Montserrat } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { Header } from "@/ui/components/Header/Header";
import { Footer } from "@/ui/components/Footer/Footer";
import { FacebookPixel } from "@/ui/components/FacebookPixel/FacebookPixel";
import { Analytics } from "@/ui/components/Analytics/Analytics";
const openSans = Montserrat({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className={openSans.className} lang="pl">
			<body>
				<div className="layout">
					<Header />
					<ApolloWrapper>{children}</ApolloWrapper>
					<Footer />
				</div>
				<FacebookPixel />
				<Analytics />
			</body>
		</html>
	);
}
