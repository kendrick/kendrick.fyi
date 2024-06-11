import clsx from 'clsx';
import styles from './Grid.module.css';

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	itemWidth?: string;
	space?: string;
	style?: React.CSSProperties;
	asFlex?: boolean;
}

export default function Grid({
	children,
	className,
	itemWidth,
	space,
	style,
	asFlex,
}: Props) {
	const propsToCSSVars: React.CSSProperties = {
		...(itemWidth && { '--k-grid-item-width': itemWidth }),
		...(space && { '--k-grid-space': space }),
		...(asFlex ? { '--k-grid-as-flex': 'flex' } : {}),
	};

	const inlineStyles = {
		...propsToCSSVars,
		...style,
	};

	return (
		<div style={inlineStyles} className={clsx([styles.grid, className])}>
			{children}
		</div>
	);
}
