'use client';

import Link from 'next/link';

import { useActiveSectionContext } from '@/context/active-section-context';

import Cluster from '@/lib/layout/Cluster';

import Lettermark from '@/components/Lettermark';
import { pageLinks } from '@/lib/data';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<header className={styles.header}>
			<Cluster className={clsx(styles['header__inner-wrap'], styles.nav__wrap)}>
				<Link href="/">
					<Lettermark className={styles.lettermark} />
				</Link>

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
