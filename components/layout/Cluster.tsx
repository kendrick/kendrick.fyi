import clsx from 'clsx';
import styles from './Cluster.module.css';

type CSSModuleClasses = { [key: string]: string };

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
}

export default function Cluster({ children, className }: Props) {
	return <ul className={clsx([styles.cluster, className])}>{children}</ul>;
}
