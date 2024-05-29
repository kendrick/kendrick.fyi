'use client';

import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
	imageAltText,
	projectPage,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			className="group"
		>
			<section className="overflow-hidden relative transition">
				<a href={`/projects/${projectPage}`}>
					<div>
						<h3>{title}</h3>
						<p>{description}</p>
						<ul>
							{tags.map((tag, index) => (
								<li key={index}>{tag}</li>
							))}
						</ul>
					</div>
					<Image
						src={imageUrl}
						alt={imageAltText}
						quality={95}
						className="absolute  sm:block top-10 left-20 
									transition 
									group-hover:scale-[1.04]
									group-hover:-translate-x-3
									group-hover:translate-y-3
									group-hover:-rotate-2
					
									group-even:group-hover:translate-x-3
									group-even:group-hover:translate-y-3
									group-even:group-hover:rotate-2
					
									group-even:right-[initial] group-even:-left-40"
					/>
				</a>
			</section>
		</motion.div>
	);
}
