import { useEffect, useState } from 'react';

const useIsMobile = (): boolean => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const userAgent = window.navigator.userAgent.toLowerCase();
		const mobileDevices = [
			/android/i,
			/webos/i,
			/iphone/i,
			/ipad/i,
			/ipod/i,
			/blackberry/i,
			/windows phone/i,
		];

		const isMobileDevice = mobileDevices.some((device) =>
			userAgent.match(device),
		);
		setIsMobile(isMobileDevice);
	}, []);

	return isMobile;
};

export default useIsMobile;
