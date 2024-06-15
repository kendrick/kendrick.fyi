import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	minHeight?: string;
	padding?: string;
	color?: string;
	backgroundColor?: string;
	border?: string;
}

export default function Box({
	children,
	className,
	padding,
	color,
	backgroundColor,
	border,
}: Props) {
	const style: React.CSSProperties = {
		...(padding && { '--k-box-padding': padding }),
		...(color && { '--k-box-color': color }),
		...(backgroundColor && { '--k-box-background-color': backgroundColor }),
		...(border && { '--k-box-border': border }),
	};

	return (
		<div style={style} className={clsx([styles.box, className])}>
			{children}
		</div>
	);
}
