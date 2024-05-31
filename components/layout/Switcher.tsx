import clsx from 'clsx';

import { CSSProperties } from 'react';
import styles from './Switcher.module.css';

type CSSModuleClasses = { [key: string]: string };

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	style?: CSSProperties;
}

export default function Switcher({ children, className, style }: Props) {
	return (
		<div style={style} className={clsx([styles.switcher, className])}>
			{children}
		</div>
	);
}
