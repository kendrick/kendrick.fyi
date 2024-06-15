import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';

import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';

import Script from 'next/script';

import '@/app/globals/globals.css';
import Header from '@/components/header/header';
import { Toaster } from 'react-hot-toast';

import { DarkModeProvider } from '@/lib/DarkModeContext';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const sans1 = localFont({
	src: '../assets/fonts/Satoshi-Variable.woff2',
	display: 'swap',
	variable: '--k-type-sans',
	fallback: ['var(--k-system-fonts)'],
});
const sans2 = Inter({ subsets: ['latin'] });
const fonts = {
	sans: sans2,
};

export const metadata = {
	title: 'Kendrick Arnett',
	description: 'Creative UX pro. Team builder. Digital maker.',
	icons: {
		icon: [
			{
				rel: 'icon',
				type: 'image/png',
				url: '/assets/favicon-light.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				rel: 'icon',
				type: 'image/png',
				url: '/assets/favicon-dark.png',
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
		<html lang="en" className="!scroll-smooth">
			<body>
				<DarkModeProvider>
					<ThemeContextProvider>
						<ActiveSectionContextProvider>
							<Header />
							{children}
							<Footer />

							<Toaster position="top-right" />
							<ThemeSwitch />
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
