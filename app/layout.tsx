import Footer from '@/components/footer';

import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';

import Script from 'next/script';

import '@/app/globals/globals.css';
import Header from '@/components/header';
import '@/public/fonts/fonts.css';
import { Toaster } from 'react-hot-toast';

import ThemeSwitch from '@/components/ThemeSwitch';
import { DarkModeProvider } from '@/lib/DarkModeContext';

import styles from './layout.module.css';

const m = {
	title: 'Kendrick Arnett | Portfolio',
	description: 'Creative UX pro. Team builder. Digital maker.',
	url: 'https://kendrick.fyi',
	name: 'Kendrick Arnett',
};

export const metadata = {
	title: m.title,
	description: m.description,
	icons: {
		icon: [
			{
				rel: 'icon',
				type: 'image/png',
				url: '/favicon/favicon-light.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				rel: 'icon',
				type: 'image/png',
				url: '/favicon/favicon-dark.png',
				media: '(prefers-color-scheme: dark)',
			},
		],
	},
	keywords: ['UX leadership', 'UX design'],
	authors: [{ name: m.name, url: m.url }],
	creator: m.name,
	openGraph: {
		title: m.title,
		description: m.description,
		url: m.url,
		siteName: 'kendrick.fyi',
		images: [
			{
				url: 'https://kendrick.fyi/og/root.png',
				width: 1200,
				height: 675,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: m.title,
		description: m.description,
		creator: '@kendrick',
		images: ['https://kendrick.fyi/og/root.png'],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta
					name="msapplication-config"
					content="/favicon/browserconfig.xml"
				/>
				<meta name="theme-color" content="#ffffff" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</head>
			<body>
				<DarkModeProvider>
					<ThemeContextProvider>
						<ActiveSectionContextProvider>
							<Header />
							<section className={styles['body__inner-wrap']}>
								{children}
							</section>
							<Footer />
							<ThemeSwitch className={styles['theme-switch']} />
							<Toaster position="top-right" />
						</ActiveSectionContextProvider>
					</ThemeContextProvider>
				</DarkModeProvider>
			</body>
			<Script
				async
				defer
				src="https://scripts.simpleanalyticscdn.com/latest.js"
			/>
			<Script
				id="ms-clarity"
				async
				defer
				dangerouslySetInnerHTML={{
					__html: `(function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
					t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
					y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "mh257sv6bh");`,
				}}
			></Script>
		</html>
	);
}
