import customPropertiesFromVars from '@/lib/customPropertiesFromVars';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import styles from './styles.module.css';

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	style?: CSSProperties;
	maxWidth?: string;
	space?: string;
	recursive?: boolean;
}

export default function Prose({
	children,
	className,
	style,
	maxWidth,
	space,
	recursive = false,
}: Props) {
	const inlineStyle = customPropertiesFromVars('k-prose', style, {
		maxWidth,
		space,
	});

	return (
		<div
			style={inlineStyle}
			className={clsx([
				styles.prose,
				recursive ? styles['prose--recursive'] : '',
				className,
			])}
		>
			{children}
		</div>
	);
}
