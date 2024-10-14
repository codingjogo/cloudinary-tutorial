"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ClientNav = () => {
	const pathname = usePathname();

	const links = [
		{
			href: "/",
			label: "Home",
			isAtive: pathname === "/",
		},
	];
	return (
		<header className="border-b py-3 mb-5">
			<nav className="container mx-auto flex items-center justify-between">
				<Link href={"/"} className="text-2xl">Cloudinary</Link>
				<ul className="flex items-center gap-5">
					{links.map((link) => {
						return (
							<li key={link.href}>
								<Link
									href={link.href}
									className={cn(
										"text-sm",
										link.isAtive
											? "text-primary"
											: "text-muted-foreground"
									)}
								>
									{link.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default ClientNav;
