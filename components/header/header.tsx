'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { links } from '@/lib/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from './header.module.css';

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<header className={styles.header}>
			<motion.div
				className={styles['header__motion--in']}
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			></motion.div>

			<nav className={styles['header__nav']}>
				<ul className={styles['header__nav__list']}>
					{links.map((link) => (
						<motion.li
							className={styles['header__nav__motion']}
							key={link.hash}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								className={clsx(styles['header__nav__link'], {
									'text-gray-950 dark:text-gray-200':
										activeSection === link.name,
								})}
								href={link.hash}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
							>
								{link.name}

								{link.name === activeSection && (
									<motion.span
										className={styles['header__nav__link__motion']}
										layoutId="activeSection"
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30,
										}}
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
}
