'use client';

import { useTheme } from '@/context/theme-context';

import IconMoon from '@/assets/svg/moon.svg';
import IconSun from '@/assets/svg/sun.svg';

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button onClick={toggleTheme}>
			{theme === 'light' ?
				<IconSun />
			:	<IconMoon />}
		</button>
	);
}
