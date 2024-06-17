'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
	className?: string;
	style?: React.CSSProperties;
	children: ReactNode;
}

const PullQuote = ({ className, style, children }: Props) => {
	return (
		<div
			style={style}
			className={clsx(styles.pullquote, className)}
			role="presentation"
			aria-hidden="true"
		>
			{children}
		</div>
	);
};

export default PullQuote;
