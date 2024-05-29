'use client';

import About from '@/components/about';
import Contact from '@/components/contact';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import Testimonials from '@/components/testimonials';

import styles from './page.module.css';

import { useEffect } from 'react';
import smartquotes from 'smartquotes-ts';

export default function Home() {
	useEffect(() => {
		smartquotes();
	}, []);

	return (
		<main className={styles.main}>
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<Skills />
			<Testimonials />
			<Contact />
		</main>
	);
}
