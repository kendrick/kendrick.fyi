import customPropertiesFromVars from '@/lib/customPropertiesFromVars';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';
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

	const kids = React.Children.toArray(children);

	return (
		<ul
			style={inlineStyle}
			className={clsx([styles.cluster, 'plain-list', className])}
		>
			{kids?.map((child, index) => {
				return <li key={index}>{child}</li>;
			})}
		</ul>
	);
}
