import type { CollectionEntry } from "astro:content";

export const example = "Hello World";
export function readableDate(
	date: string | undefined,
	options: Intl.DateTimeFormatOptions = {
		timeZone: "UTC",
		year: "numeric",
		month: "short",
		day: "2-digit",
	},
): string {
	if (date === undefined) {
		return "Invalid Date";
	}
	const jsDate = new Date(date);
	return jsDate.toLocaleDateString("en-US", options);
}
export const blogDateSort = (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) => {
	const dateA = new Date(a.data.date);
	const dateB = new Date(b.data.date);

	return dateA.getTime() - dateB.getTime();
};
