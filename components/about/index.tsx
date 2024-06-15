'use client';

import Logos from '@/components/logos/logos';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

import Prose from '@/lib/layout/Prose';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function About() {
	const { ref } = useSectionInView('About');
	const logoHeight = 36;

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
			className={clsx(styles.about)}
		>
			<section>
				<Prose>
					<h2>About</h2>
					<p>
						With a passion for creating user-centered digital experiences, I
						flourish in leading innovative design teams, conducting usability
						testing, and driving cross-functional projects. I thrive on
						promoting human-centered design principles, mentoring emerging
						talent, and continuously improving digital products through
						innovative, accessible, and inclusive approaches. My experience
						spans delivering impactful solutions for organizations such as{' '}
						<span className="k-type-no-wrap">Compassion International</span>,{' '}
						<span className="k-type-no-wrap">Pier 1 Imports</span>,{' '}
						<span className="k-type-no-wrap">Slalom Consulting</span>, and{' '}
						<span className="k-type-no-wrap">Thomson Reuters</span>.
					</p>
				</Prose>
			</section>
			<Logos />
		</motion.section>
	);
}
