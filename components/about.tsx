'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

import p1 from '../assets/pier1.svg';
import tr from '../assets/tr.svg';
import compassion from '../assets/compassion.svg';
import slalom from '../assets/slalom.svg';

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
					testing, and driving cross-functional projects. My experience includes
					delivering impactful solutions for organizations like Compassion
					International, Pier 1 Imports, Slalom Consulting, and Thomson Reuters.
					I thrive on promoting human-centered design principles, mentoring
					emerging talent, and implementing and continuously improving digital
					products through innovative, accessible, and inclusive approaches.
				</p>
			</section>
			<section className="flex gap-8">
				<Image
					src={compassion}
					alt="Compassion International logo"
					height={logoHeight * 1.25}
				/>
				<Image src={p1} alt="Pier 1 Imports logo" height={logoHeight} />
				<Image src={slalom} alt="Slalom Consulting logo" height={logoHeight} />
				<Image src={tr} alt="Thomson Reuters logo" height={logoHeight} />
			</section>
		</motion.section>
	);
}
