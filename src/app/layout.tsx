"use client";
import "./globals.css";
// import { useState } from "react";
import { Montserrat } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { Header } from "@/ui/components/Header/Header";
import { Footer } from "@/ui/components/Footer/Footer";
// import { Navigation } from "@/ui/components/Navigation/Navigation";

const openSans = Montserrat({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	// const [isNavigationOpen, setIsNavigationOpen] = useState(false);

	// const handleOpenNavigation = () => setIsNavigationOpen(true);
	// const handleCloseNavigation = () => setIsNavigationOpen(false);

	return (
		<html className={openSans.className} lang="pl">
			<body>
				{/* <Navigation isActive={isNavigationOpen} /> */}
				<div className="layout">
					<Header />
					<ApolloWrapper>{children}</ApolloWrapper>
					<Footer />
				</div>
			</body>
		</html>
	);
}
