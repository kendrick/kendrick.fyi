'use client';

import ProjectCard from '@/components/projectCard';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import Cluster from '../../lib/layout/Cluster';
import styles from './styles.module.css';

export default function Projects() {
	const { ref } = useSectionInView('Projects', 0.5);

	return (
		<section ref={ref} id="projects" className={styles.projects}>
			<h2>Projects</h2>
			<Cluster className={styles['projects-cluster']}>
				{projectsData.map((project, index) => {
					return (
						<ProjectCard
							{...project}
							key={index}
							className={styles['projects__card']}
						/>
					);
				})}
			</Cluster>
		</section>
	);
}
