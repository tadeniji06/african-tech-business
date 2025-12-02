import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import ClarityScript from "@/components/Clarity";

export const metadata: Metadata = {
	title: "Africa Tech Business | African Media",
	description: "Tech Business in Africa ",
	icons: {
		icon: "/icon.jpg",
	},
	openGraph: {
		title: "Africa Tech Business | African Media",
		description: "Tech Business in Africa ",
		url: "https://africatechbusiness.com",
		siteName: "Africa Tech Business",
		images: [
			{
				url: "/icon.jpg",
				width: 1200,
				height: 630,
				alt: "Africa Tech Business | African Media",
			},
		],
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Africa Tech Business | African Media",
		description: "Tech Business in Africa ",
		images: ["/icon.jpg"],
		site: "@tade_niji06",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<Header />
				{children}
				<Footer />
				<ClarityScript />
			</body>
		</html>
	);
}
