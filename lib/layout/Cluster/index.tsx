import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
}

export default function Cluster({ children, className }: Props) {
	return (
		<ul className={clsx([styles.cluster, 'plain-list', className])}>
			{children}
		</ul>
	);
}
