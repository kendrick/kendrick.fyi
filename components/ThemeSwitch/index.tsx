'use client';

import { useDarkModeContext } from '@/lib/DarkModeContext';

import IconMoon from '@/assets/svg/moon.svg';
import IconSystem from '@/assets/svg/send.svg';
import IconSun from '@/assets/svg/sun.svg';

import styles from './styles.module.css';

export default function ThemeSwitch() {
	const { toggleTernaryDarkMode, ternaryDarkMode } = useDarkModeContext();

	return (
		<button onClick={toggleTernaryDarkMode} className={styles.switch}>
			{ternaryDarkMode === 'light' ?
				<IconSun />
			: ternaryDarkMode === 'dark' ?
				<IconMoon />
			:	<IconSystem />}
		</button>
	);
}
