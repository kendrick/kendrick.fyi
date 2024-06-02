import clsx from 'clsx';

import React, { CSSProperties, useEffect } from 'react';
import styles from './WithSidebar.module.css';

// import type * as CSS from 'csstype';

type CSSModuleClasses = { [key: string]: string };

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	space?: string;
	sidebarWidth?: string;
	sidebarOnRight?: boolean;
	style?: CSSProperties;
}

export default function WithSidebar({
	children,
	className,
	space,
	sidebarWidth,
	sidebarOnRight,
	style,
}: Props) {
	const childrenArray = React.Children.toArray(children);

	useEffect(() => {
		if (childrenArray.length !== 2) {
			console.warn(
				`WithSidebar expects exactly 2 children, but received ${childrenArray.length}.`,
			);
		}
	}, [childrenArray.length]);

	if (childrenArray.length !== 2) {
		return null;
	}

	const propsToCSSVars: React.CSSProperties = {
		...(space && { '--k-sidebar-space': space }),
		...(sidebarWidth && { '--k-sidebar-width': sidebarWidth }),
	};

	const inlineStyles = {
		...propsToCSSVars,
		...style,
	};

	return (
		<div
			style={inlineStyles}
			className={clsx([
				styles['with-sidebar'],
				sidebarOnRight ?
					styles['with-sidebar--right']
				:	styles['with-sidebar--left'],
				className,
			])}
		>
			{children}
		</div>
	);
}
