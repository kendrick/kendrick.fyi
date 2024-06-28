'use client';

import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
	className?: string;
	style?: React.CSSProperties;
	hidden?: boolean;
	borderSide?: 'top' | 'right' | 'bottom' | 'left';
	children: ReactNode;
}

const PullQuote = ({
	className,
	style,
	hidden = true,
	borderSide = 'left',
	children,
}: Props) => {
	const a11yProps: HTMLAttributes<HTMLDivElement> =
		hidden ? { role: 'presentation', 'aria-hidden': 'true' } : {};

	return (
		<div>
			<div
				style={styles}
				className={clsx(
					styles.pullquote,
					styles[`border-${borderSide}`],
					className,
				)}
				{...a11yProps}
			>
				{children}
			</div>
		</div>
	);
};

export default PullQuote;
