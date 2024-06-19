import Footer from '@/components/footer';

import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';

import Script from 'next/script';

import '@/app/globals/globals.css';
import Header from '@/components/header';
import '@/public/fonts/fonts.css';
import { Toaster } from 'react-hot-toast';

import { DarkModeProvider } from '@/lib/DarkModeContext';

export const metadata = {
	title: 'Kendrick Arnett',
	description:
		'Kendrick Arnett’s online portfolio. Creative UX pro. Team builder. Digital maker.',
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
			</head>
			<body>
				<DarkModeProvider>
					<ThemeContextProvider>
						<ActiveSectionContextProvider>
							<Header />
							{children}
							<Footer />

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
