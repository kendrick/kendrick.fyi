import { useCallback, useEffect, useRef, useState } from 'react';

function useOverflow<T extends HTMLElement>(): [React.RefObject<T>, boolean] {
	const [isOverflowing, setIsOverflowing] = useState(false);
	const ref = useRef<T>(null);

	const checkOverflow = useCallback(() => {
		const element = ref.current;
		if (element) {
			const isOverflowing =
				element.scrollHeight > element.clientHeight ||
				element.scrollWidth > element.clientWidth;
			setIsOverflowing(isOverflowing);
		}
	}, []);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const resizeObserver = new ResizeObserver(checkOverflow);
		resizeObserver.observe(element);

		window.addEventListener('resize', checkOverflow);

		// Initial check
		checkOverflow();

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', checkOverflow);
		};
	}, [checkOverflow]);

	return [ref, isOverflowing];
}

export default useOverflow;
