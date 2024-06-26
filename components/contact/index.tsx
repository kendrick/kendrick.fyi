'use client';

import Stack from '@/lib/layout/Stack';
import Switcher from '@/lib/layout/Switcher';
import clsx from 'clsx';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const rgbStringToHex = (rgb: string): string => {
	// Remove 'rgb(' and ')' and split by commas OR spaces.
	const [r, g, b] = rgb
		.replace('rgb(', '')
		.replace(')', '')
		.split(/[\s,]+/)
		.map(Number);

	const componentToHex = (c: number): string => {
		const hex = c?.toString(16);
		return hex?.length === 1 ? '0' + hex : hex;
	};

	return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

export default function Contact() {
	const [background, setBackground] = useState<string | null>(null);
	const [color, setColor] = useState<string | null>(null);
	const [primaryColor, setPrimaryColor] = useState<string | null>(null);

	useEffect(() => {
		const computedStyle = getComputedStyle(document.documentElement);

		const bg = computedStyle.getPropertyValue(
			'--k-theme-color-surface-container-low',
		);

		const p = computedStyle.getPropertyValue('--k-theme-color-primary');

		const c = computedStyle.color;

		setBackground(rgbStringToHex(bg).replace('#', ''));
		setColor(rgbStringToHex(c).replace('#', ''));
		setPrimaryColor(rgbStringToHex(p).replace('#', ''));
	}, []);

	return (
		<section className={styles.contact} id="contact">
			<Stack>
				<h2>Contact me</h2>
				<Switcher>
					<div>
						I’d love to dive deep with you about UX, design systems, HCD,
						front-end dev, or projects that combine these elements. Feel free to{' '}
						<a className="with-decoration" href="mailto:kendrick@kendrick.fyi">
							email me
						</a>{' '}
						or grab time with me via the calendar on this page and let’s chat
						about how we can use design to innovate and solve real-world
						problems!{' '}
						<span className="k-type-emph">
							Let's connect and nerd out together!
						</span>
					</div>
					<div
						className={clsx('calendly-inline-widget', styles.calendly)}
						data-url={`https://calendly.com/heykendrick/30-mins?hide_event_type_details=1&hide_gdpr_banner=1&background_color=${background}&text_color=${color}&primary_color=${primaryColor}`}
					></div>
					{background && color && primaryColor ?
						<Script
							type="text/javascript"
							src="https://assets.calendly.com/assets/external/widget.js"
							async
						></Script>
					:	null}
				</Switcher>
			</Stack>
		</section>
	);
}
