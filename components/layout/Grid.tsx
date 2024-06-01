import clsx from 'clsx';
import styles from './Grid.module.css';

type CSSModuleClasses = { [key: string]: string };

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	itemWidth?: string;
	space?: string;
}

export default function Grid({ children, className, itemWidth, space }: Props) {
	const style: React.CSSProperties = {
		...(itemWidth && { '--k-grid-item-width': itemWidth }),
		...(space && { '--k-grid-space': space }),
	};

	return (
		<div style={style} className={clsx([styles.grid, className])}>
			{children}
		</div>
	);
}
