'use client';

import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useTernaryDarkMode } from 'usehooks-ts';

type DarkModeContextType = ReturnType<typeof useTernaryDarkMode>;

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined,
);

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
	const darkMode = useTernaryDarkMode();

	useEffect(() => {
		if (darkMode.isDarkMode) {
			document.documentElement.classList.add('k-dark');
		} else {
			document.documentElement.classList.remove('k-dark');
		}
	}, [darkMode.isDarkMode]);

	return (
		<DarkModeContext.Provider value={darkMode}>
			{children}
		</DarkModeContext.Provider>
	);
};

const useDarkModeContext = () => {
	const context = useContext(DarkModeContext);
	if (context === undefined) {
		throw new Error(
			'useDarkModeContext must be used within a DarkModeProvider',
		);
	}
	return context;
};

export { DarkModeProvider, useDarkModeContext };
