import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	maxWidth?: string;
}

export default function Prose({ children, className, maxWidth }: Props) {
	const style =
		maxWidth ?
			({ '--k-prose-max-width': maxWidth } as React.CSSProperties)
		:	undefined;

	return (
		<div style={style} className={clsx([styles.prose, className])}>
			{children}
		</div>
	);
}
