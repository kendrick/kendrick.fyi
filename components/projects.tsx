'use client';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import Project from './project';

export default function Projects() {
	const { ref } = useSectionInView('Projects', 0.5);

	return (
		<section ref={ref} id="projects">
			<h2>Projects</h2>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
