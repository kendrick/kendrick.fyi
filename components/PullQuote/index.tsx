'use client';

import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
	className?: string;
	style?: React.CSSProperties;
	hidden?: boolean;
	children: ReactNode;
}

const PullQuote = ({ className, style, hidden = true, children }: Props) => {
	const a11yProps: HTMLAttributes<HTMLDivElement> =
		hidden ? { role: 'presentation', 'aria-hidden': 'true' } : {};

	return (
		<div
			style={style}
			className={clsx(styles.pullquote, className)}
			{...a11yProps}
		>
			{children}
		</div>
	);
};

export default PullQuote;
