import clsx from 'clsx';
import styles from './Cover.module.css';

type CSSModuleClasses = { [key: string]: string };

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	minHeight?: string;
	space?: string;
}

export default function Cover({
	children,
	className,
	minHeight,
	space,
}: Props) {
	const style: React.CSSProperties = {
		...(minHeight && { '--k-cover-min-height': minHeight }),
		...(space && { '--k-cover-space': space }),
	};

	return (
		<div style={style} className={clsx([styles.cover, className])}>
			{children}
		</div>
	);
}
