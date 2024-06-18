'use client';

import Mark from '@/assets/mark.svg';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import styles from './styles.module.css';

interface Props {
	className?: string | CSSModuleClasses;
	style?: CSSProperties;
}

export default function Lettermark({ className, style }: Props) {
	return <Mark style={style} className={clsx(className, styles.lettermark)} />;
}
