'use client';

import { useSectionInView } from '@/lib/hooks';

// import Testimonial from '@/components/Testimonial';
import Testimonial from '../Testimonial';
import styles from './styles.module.css';

export default function KindWords() {
	const { ref } = useSectionInView('Kind Words');

	const recUrl = `https://www.linkedin.com/in/kendrickarnett/details/recommendations/`;

	const recAuthors = {
		amy: {
			quotes: [
				<>
					Working with Kendrick and his team was a dream from start to finish.
				</>,
				<>
					In my conversations with Kendrick, he listened as I described the
					vision and was able to ask the right questions, deploy the exact
					needed team resources, and partner with me throughout to ensure that
					we were on track.
				</>,
			],
			attribution: (
				<>
					Amy H.<span className="visually-hidden"> on LinkedIn</span>
				</>
			),
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
					in his work and leadership. Through this style and his care for both
					stakeholders and users, he is a delight to work with.
				</>,
			],
			attribution: (
				<>
					Sydney M.<span className="visually-hidden"> on LinkedIn</span>
				</>
			),
		},
		steven: {
			quotes: [
				<>
					Kendrick went above and beyond what would be expected in his role.
					Even just in terms of technical knowledge he was always more than
					willing to give his expertise and hands on effort when we needed it.
				</>,
				<>
					I can’t stress enough how effective and genuine of a leader he is, and
					how much of a gift you’ll have in him.
				</>,
			],
			attribution: (
				<>
					Steven A.<span className="visually-hidden"> on LinkedIn</span>
				</>
			),
		},
		laura: {
			quotes: [
				<>
					As my manager there wasn’t a moment he wasn’t my biggest cheerleader,
					trusting me with projects that were stretch experiences and giving me
					the tools I needed to thrive.
				</>,
				<>
					If you’re looking for a leader who creates teams that are close-knit,
					supportive and can get anything done that needs done because they do
					it together… you’re looking for Kendrick.
				</>,
			],
			attribution: (
				<>
					Laura L.<span className="visually-hidden"> on LinkedIn</span>
				</>
			),
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
					Kendrick’s approach to business is collaborative. His desire to work
					cross-functionally in an effort to understand each business unit’s
					needs is tenacious.
				</>,
			],
			attribution: (
				<>
					Jeff H.<span className="visually-hidden"> on LinkedIn</span>
				</>
			),
		},
	};

	return (
		<section id="kind-words" ref={ref} className={styles['kind-words']}>
			<h2>Kind Words</h2>
			<ul className="plain-list">
				{Object.entries(recAuthors).map(([key, { quotes, attribution }]) =>
					quotes.map((quote, index) => (
						<li key={index}>
							<Testimonial
								recUrl={recUrl}
								quote={quote}
								attribution={attribution}
							></Testimonial>
						</li>
					)),
				)}
			</ul>
		</section>
	);
}
