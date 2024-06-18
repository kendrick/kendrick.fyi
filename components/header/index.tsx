'use client';

import Link from 'next/link';

import { useActiveSectionContext } from '@/context/active-section-context';

import Cluster from '@/lib/layout/Cluster';

import styles from './styles.module.css';

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<header className={styles.header}>
			<Cluster className={styles.nav__wrap}>
				<span className={styles.initial}>K</span>
				<nav className={styles['nav']}>
					<Cluster className={styles['nav__list']}>
						<Link href="/">Home</Link>
						<Link href="/about">About</Link>
						<Link href="/projects">Projects</Link>
						<Link href="/kind-words">Kind Words</Link>
						<Link href="/contact">Contact</Link>
						<Link href="/resume">Résumé</Link>
					</Cluster>
				</nav>
			</Cluster>
		</header>
	);
}
