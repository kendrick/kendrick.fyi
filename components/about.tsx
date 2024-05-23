'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

import LogoP1 from '@/components/logos/pier1';
import LogoCompassion from '@/components/logos/compassion';
import LogoSlalom from '@/components/logos/slalom';
import LogoThomson from '@/components/logos/tr';
// import tr from '../assets/tr.svg';
// import compassion from '../assets/compassion.svg';
// import slalom from '../assets/slalom.svg';

export default function About() {
	const { ref } = useSectionInView('About');
	const logoHeight = 44;

	return (
		<motion.section
			ref={ref}
			className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<section className="max-w-[45rem]">
				<SectionHeading>About me</SectionHeading>
				<p>
					With a passion for creating user-centered digital experiences, I have
					a track record of leading design systems, conducting usability
					testing, and driving cross-functional projects. I thrive on promoting
					human-centered design principles, mentoring emerging talent, and
					implementing and continuously improving digital products through
					innovative, accessible, and inclusive approaches. My experience
					includes delivering impactful solutions for organizations like
					Compassion International, Pier 1 Imports, Slalom Consulting, and
					Thomson Reuters.
				</p>
			</section>
			<section className="inline-flex gap-8 justify-center items-center">
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
