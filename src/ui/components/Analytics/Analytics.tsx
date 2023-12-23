/* eslint-disable */
"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analytics } from "@/lib/segment";

export const Analytics = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		analytics.page();
	}, [pathname, searchParams]);

	return null;
};
