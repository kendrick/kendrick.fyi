'use client';

import { useDarkModeContext } from '@/lib/DarkModeContext';

import IconSystem from '@/assets/svg/color-auto.svg';
import IconDark from '@/assets/svg/color-dark.svg';
import IconLight from '@/assets/svg/color-light.svg';

import styles from './styles.module.css';

export default function ThemeSwitch() {
	const { toggleTernaryDarkMode, ternaryDarkMode } = useDarkModeContext();

	return (
		<button onClick={toggleTernaryDarkMode} className={styles.switch}>
			{ternaryDarkMode === 'light' ?
				<IconLight />
			: ternaryDarkMode === 'dark' ?
				<IconDark />
			:	<IconSystem />}
		</button>
	);
}
