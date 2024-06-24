'use client';

import Logos from '@/components/logos/logos';
import { useSectionInView } from '@/lib/hooks';

import Prose from '@/lib/layout/Stack';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Info() {
	const { ref } = useSectionInView('Info');
	const logoHeight = 36;

	return (
		<section ref={ref} id="info" className={clsx(styles.info)}>
			<section className={'global__section'}>
				<Prose>
					<h2>About</h2>
					<p>
						With a passion for creating user-centered digital experiences, I
						flourish in leading innovative design teams, driving
						cross-functional projects, and learning as much as I can about
						users. I thrive on promoting human-centered design principles,
						mentoring emerging talent, and{' '}
						<span className="k-type-emph">
							continuously improving digital products
						</span>{' '}
						through innovative, accessible, and inclusive approaches. My
						experience spans delivering impactful solutions for organizations
						such as{' '}
						<span className="k-type-no-wrap">Compassion International</span>,{' '}
						<span className="k-type-no-wrap">Pier 1 Imports</span>,{' '}
						<span className="k-type-no-wrap">Slalom Consulting</span>, and{' '}
						<span className="k-type-no-wrap">Thomson Reuters</span>.
					</p>
				</Prose>
			</section>
			<Logos />
		</section>
	);
}
