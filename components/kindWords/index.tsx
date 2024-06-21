'use client';

import { useSectionInView } from '@/lib/hooks';

import Testimonial from '@/components/Testimonial';

import styles from './styles.module.css';

import ImgAmy from '@/assets/images/amy.jpg';
import ImgJeff from '@/assets/images/jeff.jpg';
import ImgLaura from '@/assets/images/laura.jpg';
import ImgSteven from '@/assets/images/steven.jpg';
import ImgSydney from '@/assets/images/sydney.jpg';
import clsx from 'clsx';

export default function KindWords() {
	const { ref } = useSectionInView('Kind Words');

	const recUrl = `https://www.linkedin.com/in/kendrickarnett/details/recommendations/`;
	const sourceInfo = <span className="visually-hidden"> on LinkedIn</span>;

	const recAuthors = {
		amy: {
			quotes: [
				<>
					Working with Kendrick and his team was{' '}
					<span className="k-type-emph">a dream from start to finish</span>.
				</>,
				<>
					In my conversations with Kendrick, he listened as I described the
					vision and was able to ask the right questions, deploy the exact
					needed team resources, and partner with me throughout to ensure that
					we were on track.
				</>,
			],
			attribution: {
				name: 'Amy H.',
				title: 'Product Owner',
				sourceInfo,
				image: ImgAmy,
			},
		},
		sydney: {
			quotes: [
				<>
					His design perspectives [are] “strongly informed but loosely held.” I
					appreciate Kendrick’s ability to state his perspective that is based
					on user research, yet consider opposing views and discuss the best
					option for the end user.
				</>,
				<>
					Kendrick embodies this informed, approachable and collaborative style
					in his work and leadership. Through this style and his{' '}
					<span className="k-type-emph">
						care for both stakeholders and users
					</span>
					, he is a delight to work with.
				</>,
			],
			attribution: {
				name: 'Sydney M.',
				title: 'Product Owner',
				sourceInfo,
				image: ImgSydney,
			},
		},
		steven: {
			quotes: [
				<>
					Kendrick went above and beyond what would be expected in his role.
					Even just in terms of technical knowledge he was always more than
					willing to give his expertise and hands on effort when we needed it.
				</>,
				<>
					I can’t stress enough how{' '}
					<span className="k-type-emph">effective and genuine</span> of a leader
					he is, and how much of a gift you’ll have in him.
				</>,
			],
			attribution: {
				name: 'Steven A.',
				title: 'UX Designer',
				sourceInfo,
				image: ImgSteven,
			},
		},
		laura: {
			quotes: [
				<>
					As my manager there wasn’t a moment he wasn’t my biggest cheerleader,
					trusting me with projects that were stretch experiences and giving me
					the tools I needed to thrive.
				</>,
				<>
					If you’re looking for a leader who creates teams that are{' '}
					<span className="k-type-emph">
						close-knit, supportive and can get anything done
					</span>{' '}
					that needs done because they do it together… you’re looking for
					Kendrick.
				</>,
			],
			attribution: {
				name: 'Laura L.',
				title: 'UX Designer',
				sourceInfo,
				image: ImgLaura,
			},
		},
		jeff: {
			quotes: [
				<>
					His skillset is unique in that he is both customer centric and
					technical.{' '}
					<span className="k-type-deemph" aria-hidden="true">
						[…]
					</span>{' '}
					He is focused on designing the most appropriate user experience
					possible given the target customer.
				</>,
				<>
					Kendrick’s approach to business is collaborative. His{' '}
					<span className="k-type-emph">desire to work cross-functionally</span>{' '}
					in an effort to understand each business unit’s needs is tenacious.
				</>,
			],
			attribution: {
				name: 'Jeff H.',
				title: 'E-Commerce VP',
				sourceInfo,
				image: ImgJeff,
			},
		},
	};

	return (
		<section id="kind-words" ref={ref} className={clsx(styles['kind-words'])}>
			<h2>Kind Words</h2>
			<ul className={clsx(styles.list, 'plain-list')}>
				{Object.entries(recAuthors).map(([key, { quotes, attribution }]) => {
					return (
						<li key={key}>
							<Testimonial
								recUrl={recUrl}
								quote={quotes}
								attribution={attribution}
							></Testimonial>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
