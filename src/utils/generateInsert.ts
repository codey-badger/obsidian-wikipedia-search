import { Notice } from "obsidian";
import { WikipediaSearchSettings } from "src/settings";
import { languages } from "./languages";
import { Article } from "./searchModal";
import { getArticleIntros, getArticleThumbnails } from "./wikipediaAPI";

export async function generateInsert(
	settings: WikipediaSearchSettings,
	article: Article,
	content: string,
	selection: string
): Promise<{ insert: string; cursorPosition: number | null }> {
	const title = settings.prioritizeArticleTitle || selection === "" ? article.title : selection;
	let insert = content
		.replaceAll("{title}", title)
		.replaceAll("{url}", article.url)
		.replaceAll("{description}", article.description ?? "")
		.replaceAll("{language}", languages[article.languageCode])
		.replaceAll("{languageCode}", article.languageCode);

	if (content.includes("{intro}")) {
		const intro: string | null =
			(await getArticleIntros([article.title], settings.language, settings.cleanupIntros))?.[0] ?? null;
		insert = insert.replaceAll("{intro}", intro ?? "");
		if (!intro) new Notice("Could not fetch the articles introduction.");
	}

	if (content.includes("{thumbnail}") || content.includes("{thumbnailUrl}")) {
		const thumbnailUrl: string | null =
			(await getArticleThumbnails([article.title], settings.language))?.[0] ?? null;
		insert = insert
			.replaceAll(
				"{thumbnail}",
				thumbnailUrl
					? `![${article.title} Thumbnail${
							settings.thumbnailWidth ? ` | ${settings.thumbnailWidth}` : ""
						}](${thumbnailUrl})`
					: ""
			)
			.replaceAll("{thumbnailUrl}", thumbnailUrl ?? "");
		if (!thumbnailUrl) new Notice("Could not fetch the articles thumbnail.");
	}

	if (content.includes("{description}") && !article.description)
		new Notice("The article has no description.");

	let cursorPosition: number | null = insert.search("{cursor}");
	cursorPosition = cursorPosition != -1 ? cursorPosition : null;

	insert = insert.replaceAll("{cursor}", "");

	return { insert, cursorPosition };
}
