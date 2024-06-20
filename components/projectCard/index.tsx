'use client';

import Stack from '@/lib/layout/Stack';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

import { imageSizes } from '@/lib/utils';
import styles from './styles.module.css';

interface Props {
	className?: string | CSSModuleClasses;
	image?: StaticImageData;
	title: string;
	description: string;
	projectPage: string;
}

export default function ProjectCard({
	className,
	title,
	image,
	description,
	projectPage,
}: Props) {
	return (
		<a
			href={`/projects/${projectPage}`}
			className={clsx([styles['project-card']])}
		>
			<Stack className={clsx([styles['project-card__inner-wrap']])}>
				<h3 className={styles['project-title']}>{title}</h3>
				{image && (
					<Image
						src={image}
						alt=""
						placeholder="blur"
						objectFit="contain"
						sizes={imageSizes}
					/>
				)}
				<p>{description}</p>
			</Stack>
		</a>
	);
}
