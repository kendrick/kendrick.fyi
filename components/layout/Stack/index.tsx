import customPropertiesFromVars from '@/lib/customPropertiesFromVars';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import styles from './styles.module.css';

interface Props {
	children: React.ReactNode;
	className?: string | CSSModuleClasses;
	space?: string;
	style?: CSSProperties;
}

export default function Stack({ children, className, space, style }: Props) {
	const inlineStyles = customPropertiesFromVars('k-stack', style, { space });

	return (
		<div style={inlineStyles} className={clsx([styles.stack, className])}>
			{children}
		</div>
	);
}
