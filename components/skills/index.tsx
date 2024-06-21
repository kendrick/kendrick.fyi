'use client';

import { skillsData } from '@/lib/data';

import Cluster from '../../lib/layout/Cluster';
import styles from './styles.module.css';

export default function Skills() {
	return (
		<section id="skills" className={styles.skills}>
			<h2>Skills</h2>
			<Cluster className={styles.skills__list}>{skillsData}</Cluster>
		</section>
	);
}
