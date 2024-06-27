'use client';

import Head from 'next/head';

export default function Metadata({
	title,
	description,
	path,
	imagePath,
}: {
	title: string;
	description: string;
	path: string;
	imagePath: string;
}) {
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

	const url =
		!path.startsWith('/') ? `${BASE_URL}/${path}` : `${BASE_URL}${path}`;

	const imageUrl =
		!imagePath.startsWith('/') ?
			`${BASE_URL}/${imagePath}`
		:	`${BASE_URL}${imagePath}`;

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />

			{/* Twitter Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="kendrick.fyi" />
			<meta property="twitter:url" content={url} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />
		</Head>
	);
}
