'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

import LogoCompassion from '@/components/logos/compassion';
import LogoP1 from '@/components/logos/pier1';
import LogoSlalom from '@/components/logos/slalom';
import LogoThomson from '@/components/logos/tr';

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
		>
			<section>
				<h2>About me</h2>
				<p>
					With a passion for creating user-centered digital experiences, I
					flourish in leading innovative design teams, conducting usability
					testing, and driving cross-functional projects. I thrive on promoting
					human-centered design principles, mentoring emerging talent, and
					continuously improving digital products through innovative,
					accessible, and inclusive approaches. My experience spans delivering
					impactful solutions for organizations such as Compassion
					International, Pier 1 Imports, Slalom Consulting, and Thomson Reuters.
				</p>
			</section>
			<section>
				<LogoCompassion
					height={logoHeight * 1.33}
					aria-label="Compassion International logo."
				></LogoCompassion>
				<LogoP1 height={logoHeight} aria-label="Pier 1 Imports logo."></LogoP1>
				<LogoSlalom
					height={logoHeight}
					aria-label="Slalom Consulting logo."
				></LogoSlalom>
				<LogoThomson
					height={logoHeight}
					aria-label="Thomson Reuters logo."
				></LogoThomson>
			</section>
		</motion.section>
	);
}
