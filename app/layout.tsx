import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeSwitch from '@/components/theme-switch';

import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';

import { Inter } from 'next/font/google';
import Script from 'next/script';

import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />

						<Toaster position="top-right" />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
			<Script
				async
				defer
				src="https://scripts.simpleanalyticscdn.com/latest.js"
			/>
			<script>{`(function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
					t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
					y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "mh257sv6bh");`}</script>
		</html>
	);
}
