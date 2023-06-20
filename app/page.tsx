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
		<main className="container grid items-center gap-6 pb-8 pt-6">
			<div className="flex max-w-[980px] flex-col items-center gap-2">
				<SearchFeature inventory={inventory}/>
				
			</div>
		</main>
	);
}
