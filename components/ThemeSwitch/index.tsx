'use client';

import { useDarkModeContext } from '@/lib/DarkModeContext';

import IconSystem from '@/assets/svg/color-auto.svg';
import IconDark from '@/assets/svg/color-dark.svg';
import IconLight from '@/assets/svg/color-light.svg';

import clsx from 'clsx';
import styles from './styles.module.css';

export default function ThemeSwitch({
	className,
}: {
	className: CSSModuleClasses | string;
}) {
	const { toggleTernaryDarkMode, ternaryDarkMode } = useDarkModeContext();

	return (
		<button
			onClick={toggleTernaryDarkMode}
			className={clsx(className, styles.switch)}
		>
			{ternaryDarkMode === 'light' ?
				<IconLight />
			: ternaryDarkMode === 'dark' ?
				<IconDark />
			:	<IconSystem />}
		</button>
	);
}
