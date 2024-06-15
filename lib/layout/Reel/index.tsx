import customPropertiesFromVars from '@/lib/customPropertiesFromVars';
import useOverflow from '@/lib/hooks/useOverflow';
import clsx from 'clsx';
import { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.css';

type Size = {
	width?: number;
	height?: number;
};

interface Props {
	children: ReactNode[];
	className?: string | CSSModuleClasses;
	height?: string;
	itemWidth?: string;
	space?: string;
	style?: CSSProperties;
}

export default function Reel({
	children,
	className,
	height,
	itemWidth,
	space,
	style,
}: Props) {
	const [ref, isOverflowing] = useOverflow<HTMLDivElement>();

	const inlineStyles = customPropertiesFromVars('k-reel', style, {
		height,
		itemWidth,
		space,
	});

	return (
		<div
			ref={ref}
			style={inlineStyles}
			className={clsx([
				styles.reel,
				isOverflowing ? styles['reel--overflowing'] : null,
				className,
			])}
		>
			{children}
		</div>
	);
}
