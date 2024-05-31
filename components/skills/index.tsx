'use client';

import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

import Cluster from '../layout/Cluster';
import styles from './styles.module.css';

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const { ref } = useSectionInView('Skills');

	return (
		<section id="skills" ref={ref} className={styles.skills}>
			<h2>My Skills</h2>
			<Cluster className={styles.skills__list}>
				{skillsData.map((skill, index) => (
					<motion.li
						key={index}
						// variants={fadeInAnimationVariants}
						// initial="initial"
						// whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</Cluster>
		</section>
	);
}
