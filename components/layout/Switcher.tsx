import clsx from 'clsx';

import { CSSProperties } from 'react';
import styles from './Switcher.module.css';

type CSSModuleClasses = { [key: string]: string };

interface Props {
	threshold?: string;
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	style?: CSSProperties;
}

export default function Switcher({
	threshold,
	children,
	className,
	style,
}: Props) {
	const propsToCSSVars: React.CSSProperties = {
		...(threshold && { '--k-switcher-threshold': threshold }),
	};

	const inlineStyles = {
		...propsToCSSVars,
		...style,
	};
	return (
		<div style={inlineStyles} className={clsx([styles.switcher, className])}>
			{children}
		</div>
	);
}
