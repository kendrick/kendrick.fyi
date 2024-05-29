import clsx from 'clsx';
import styles from './Prose.module.css';

type CSSModuleClasses = { [key: string]: string };

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
}

export default function Prose({ children, className }: Props) {
	return <div className={clsx([styles.prose, className])}>{children}</div>;
}
