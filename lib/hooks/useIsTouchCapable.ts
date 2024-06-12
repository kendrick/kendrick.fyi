import { useEffect, useState } from 'react';

const useIsTouchCapable = (): boolean => {
	const [isTouchCapable, setIsTouchCapable] = useState<boolean>(false);

	useEffect(() => {
		// const userAgent = window.navigator.userAgent.toLowerCase();
		// const mobileDevices = [
		// 	/android/i,
		// 	/webos/i,
		// 	/iphone/i,
		// 	/ipad/i,
		// 	/ipod/i,
		// 	/blackberry/i,
		// 	/windows phone/i,
		// ];

		// const isMobileDevice = mobileDevices.some((device) =>
		// 	userAgent.match(device),
		// );

		const hasPointerCoarse = matchMedia('(pointer: coarse)').matches;

		setIsTouchCapable(hasPointerCoarse);
	}, []);

	return isTouchCapable;
};

export default useIsTouchCapable;
