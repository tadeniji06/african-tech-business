import Posts from "./Posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Stories & Insights | Africa Tech Business",
	description:
		"Discover inspiring stories, insights, and perspectives from across Africa. Stay updated with the latest trends, culture, business, and innovation on the continent.",
	keywords: [
		"africa stories",
		"african insights",
		"african culture",
		"african business",
		"african innovation",
		"africa blog",
		"showcase africa",
		"african perspectives",
		"african lifestyle",
		"african entrepreneurs",
	],
	applicationName: "Africa Tech Business",
	creator: "Africa Team",
	publisher: "Africa Tech Business",
	alternates: {
		canonical: "https://africatechbusiness.com/posts",
	},
	openGraph: {
		title: "Stories & Insights | Africa Tech Business",
		description:
			"Discover inspiring stories, insights, and perspectives from across Africa. Stay updated with the latest trends, culture, and innovation.",
		url: "https://africatechbusiness.com/posts",
		siteName: "Africa Tech Business",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/icon.jpg",
				width: 1200,
				height: 630,
				alt: "Africa Tech Business Stories",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Stories & Insights",
		description:
			"Discover inspiring stories, insights, and perspectives from across Africa.",
		creator: "@Showcaseafrica_",
		images: ["/icon.jpg"],
	},
	icons: {
		icon: "/icon.jpg",
		shortcut: "/icon.jpg",
		apple: "/icon.jpg",
	},
	robots: {
		index: true,
		follow: true,
	},
};

const page = () => {
	return (
		<>
			<Posts />
		</>
	);
};

export default page;