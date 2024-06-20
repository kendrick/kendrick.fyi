// components/Testimonial.tsx
import Cluster from '@/lib/layout/Cluster';
import Image, { StaticImageData } from 'next/image';
import React, { HTMLAttributes } from 'react';

import styles from './styles.module.css';

interface TestimonialProps {
	recUrl: string;
	quote: React.ReactNode | React.ReactNode[];
	attribution: { text: React.ReactNode; image?: StaticImageData };
}

const Testimonial = ({ recUrl, quote, attribution }: TestimonialProps) => {
	const isArray = Array.isArray(quote);

	const Wrapper = isArray ? Cluster : React.Fragment;
	const wrapperProps: HTMLAttributes<HTMLDivElement> =
		isArray ? { className: styles.wrapper } : {};

	return (
		<figure>
			<Wrapper {...wrapperProps}>
				{isArray ?
					quote.map((q, index) => {
						return (
							<blockquote cite={recUrl} key={index}>
								{q}
							</blockquote>
						);
					})
				:	<blockquote cite={recUrl}>{quote}</blockquote>}
			</Wrapper>
			<figcaption>
				<a href={recUrl}>
					{attribution.image && (
						<Image
							src={attribution.image}
							alt=""
							placeholder="blur"
							className={styles.av}
						/>
					)}
					{attribution.text}
				</a>
			</figcaption>
		</figure>
	);
};

export default Testimonial;
