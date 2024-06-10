import { useEffect, useState } from 'react';

const usePlatform = (): string => {
	const [platform, setPlatform] = useState<string>('');

	useEffect(() => {
		const userAgent = window.navigator.userAgent;
		if (userAgent.indexOf('Mac OS X') !== -1) {
			setPlatform('Mac');
		} else if (userAgent.indexOf('Windows') !== -1) {
			setPlatform('Windows');
		} else {
			setPlatform('Other');
		}
	}, []);

	return platform;
};

export default usePlatform;
