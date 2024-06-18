'use client';

import Link from 'next/link';

import { useActiveSectionContext } from '@/context/active-section-context';

import Cluster from '@/lib/layout/Cluster';

import { pageLinks } from '@/lib/data';
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
						{pageLinks.map((link, index) => (
							<Link href={link.href} key={index}>
								{link.name}
							</Link>
						))}
					</Cluster>
				</nav>
			</Cluster>
		</header>
	);
}
