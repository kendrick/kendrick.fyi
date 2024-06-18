import Link from 'next/link';

import { pageLinks, socialLinks, year } from '@/lib/data';

import Cluster from '@/lib/layout/Cluster';

import Stack from '@/lib/layout/Stack';
import styles from './styles.module.css';

export default function Footer() {
	const space = 'var(--k-space-xs-lg, 1em)';
	return (
		<footer className={styles.footer}>
			<Stack className={styles['footer__inner-wrap']}>
				<section className={styles['cluster__wrap']}>
					<Cluster space={space}>
						{pageLinks.map((link, index) => {
							return (
								<Link href={link.href} key={index}>
									{link.name}
								</Link>
							);
						})}
					</Cluster>
					<Cluster space={space}>
						{socialLinks.map((link, index) => {
							return (
								<Link href={link.href} key={index}>
									{link.name}
								</Link>
							);
						})}
					</Cluster>
				</section>
				<small className={styles.copyright}>
					&copy; {year} Kendrick Arnett.
				</small>
			</Stack>
		</footer>
	);
}
