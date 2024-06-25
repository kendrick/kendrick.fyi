'use client';

import Stack from '@/lib/layout/Stack';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

import { imageSizes } from '@/lib/utils';
import { ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
	className?: string | CSSModuleClasses;
	image?: StaticImageData;
	title: string;
	description: ReactNode | string;
	projectPage?: string;
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
			href={`/projects/${projectPage ? projectPage : ''}`}
			className={clsx([styles['project-card']])}
		>
			<Stack className={clsx([styles['project-card__inner-wrap']])}>
				{image && (
					<Image
						src={image}
						alt=""
						placeholder="blur"
						objectFit="contain"
						sizes={imageSizes}
					/>
				)}
				<p>
					<h3 className={styles['project-title']}>{title}</h3>
					{description}
				</p>
			</Stack>
		</a>
	);
}
