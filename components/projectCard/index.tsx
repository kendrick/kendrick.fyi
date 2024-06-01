'use client';

// import { useRef } from 'react';

import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
	className?: string | CSSModuleClasses;
	title: string;
	description: string;
	projectPage: string;
}

export default function ProjectCard({
	className,
	title,
	description,
	projectPage,
}: Props) {
	// const ref = useRef<HTMLDivElement>(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// 	offset: ['0 1', '1.33 1'],
	// });
	// const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	// const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<div
			// ref={ref}
			// style={{
			// 	scale: scaleProgess,
			// 	opacity: opacityProgess,
			// }}
			className={clsx(['group', styles['project-card']])}
		>
			<section className="overflow-hidden relative transition">
				<a href={`/projects/${projectPage}`}>
					<div>
						<h3>{title}</h3>
						<p>{description}</p>
						{/* <ul>
							{tags &&
								tags.map((tag: string, index: Key | null | undefined) => (
									<li key={index}>{tag}</li>
								))}
						</ul> */}
					</div>
				</a>
			</section>
		</div>
	);
}
