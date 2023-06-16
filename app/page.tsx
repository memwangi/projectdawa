"use client";

import Image from "next/image";
import { Albert_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SearchFeature from "./Home";

const albert = Albert_Sans({ subsets: ["latin"] });
import inventory from "../lib/inventory.json"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4">
			<div className="flex flex-col space-y-2 h-screen">
				<SearchFeature inventory={inventory}/>
				
			</div>
		</main>
	);
}
