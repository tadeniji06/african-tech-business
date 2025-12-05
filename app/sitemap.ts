import type { MetadataRoute } from "next";
import { getBlogPostsForSitemap } from "@/utils/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Fetch all blog posts from Sanity (optimized for sitemap)
	const blogPosts = await getBlogPostsForSitemap();

	// Create sitemap entries for blog posts
	const blogEntries: MetadataRoute.Sitemap = blogPosts.map(
		(post: any) => ({
			url: `https://www.africatechbusiness.com/posts/${post.slug.current}`,
			lastModified: new Date(post.publishedAt),
			changeFrequency: "monthly" as const,
			priority: 0.6,
		})
	);

	// Static pages
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: "https://www.africatechbusiness.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://www.africatechbusiness.com/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://www.africatechbusiness.com/reports",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},

		{
			url: "https://www.africatechbusiness.com/posts",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
	];

	// Combine static pages and blog entries
	return [...staticPages, ...blogEntries];
}
