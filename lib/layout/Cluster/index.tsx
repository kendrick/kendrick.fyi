import customPropertiesFromVars from '@/lib/customPropertiesFromVars';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import styles from './styles.module.css';

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	style?: CSSProperties;
	space?: string;
}

export default function Cluster({ children, className, style, space }: Props) {
	const inlineStyle = customPropertiesFromVars('k-cluster', style, {
		space,
	});

	return (
		<ul
			style={inlineStyle}
			className={clsx([styles.cluster, 'plain-list', className])}
		>
			{children}
		</ul>
	);
}
