'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

import styles from './intro.module.css';

import IconGitHub from '@/assets/svg/github.svg';
import IconLinkedIn from '@/assets/svg/linkedin.svg';

import Cluster from '@/lib/layout/Cluster';
import Stack from '@/lib/layout/Stack';
import clsx from 'clsx';

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			id="home"
			className={clsx(styles.hero, 'global__section')}
		>
			<div className="copy">
				<Stack>
					<h1 className={styles.heading}>
						<span>Hi, I’m Kendrick.</span>
					</h1>
					<p className={styles['hero__copy']}>
						I’m a passionate UX leader and front-end expert who thrives on
						building innovative,{' '}
						<span className="k-type-emph">user-obsessed digital solutions</span>{' '}
						and nurturing vibrant, high-performing teams.
					</p>
					<Cluster
						space="var(--k-space-xs-sm)"
						className={styles['intro__social-list']}
					>
						<a
							href="https://linkedin.com/in/kendrickarnett"
							target="_blank"
							rel="noopener"
							title="Kendrick Arnett’s profile on LinkedIn"
							className={styles['with-icon']}
						>
							<IconLinkedIn className={clsx(styles.intro__icon, styles.icon)} />
							<span className="visually-hidden">
								Kendrick Arnett’s profile on LinkedIn
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
								Kendrick Arnett’s profile on GitHub
							</span>
						</a>
					</Cluster>
				</Stack>
			</div>
		</section>
	);
}
