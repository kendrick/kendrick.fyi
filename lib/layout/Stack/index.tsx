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

export default function Stack({
	children,
	className,
	style,
	maxWidth,
	space,
	recursive = false,
}: Props) {
	const inlineStyle = customPropertiesFromVars('k-stack', style, {
		maxWidth,
		space,
	});

	return (
		<div
			style={inlineStyle}
			className={clsx([
				styles.stack,
				recursive ? styles['stack--recursive'] : '',
				className,
			])}
		>
			{children}
		</div>
	);
}
