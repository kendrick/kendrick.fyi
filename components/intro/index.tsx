'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

import styles from './intro.module.css';

import IconGitHub from '@/assets/svg/github.svg';
import IconLinkedIn from '@/assets/svg/linkedin.svg';

import clsx from 'clsx';

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section ref={ref} id="home" className={styles.hero}>
			<div className={clsx('relative')}>
				{/* <Image
					className={styles.hero__image}
					src={av}
					alt="Kendrick's avatar"
					quality="95"
					objectFit="contain"
					priority={true}
				/> */}
			</div>
			<div className="copy">
				<h1 className={styles.heading}>
					<span>Hi, I’m Kendrick.</span>
					<p className={styles['hero__copy']}>
						I’m a skilled UX leader and front-end expert who excels at building
						user-friendly digital solutions and fostering collaborative, vibrant
						teams.
					</p>
				</h1>
				<a
					href="https://linkedin.com/in/kendrickarnett"
					target="_blank"
					rel="noopener"
					title="Kendrick Arnett's profile on LinkedIn"
					className={styles['with-icon']}
				>
					<IconLinkedIn className={clsx(styles.intro__icon, styles.icon)} />
					<span className="visually-hidden">
						Kendrick Arnett's profile on LinkedIn
					</span>
				</a>
				<a
					href="https://github.com/kendrick"
					target="_blank"
					rel="noopener"
					className={styles['with-icon']}
				>
					<IconGitHub className={clsx(styles.intro__icon, styles.icon)} />
					<span className="visually-hidden">
						Kendrick Arnett's profile on GitHub
					</span>
				</a>
			</div>
		</section>
	);
}
