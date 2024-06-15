import { useEffect, useRef } from 'react';

const useAutoScroll = (shouldScroll: boolean, pausible: boolean = true) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		let scrollInterval: NodeJS.Timeout;

		const startScrolling = () => {
			if (!shouldScroll) return;
			scrollInterval = setInterval(() => {
				if (
					container.scrollTop <
					container.scrollHeight - container.clientHeight
				) {
					container.scrollTop += 1;
				} else {
					container.scrollTop = 0;
				}
			}, 10); // Adjust the interval for faster/slower scrolling
		};

		const stopScrolling = () => {
			clearInterval(scrollInterval);
		};

		if (pausible) {
			container.addEventListener('mouseenter', stopScrolling);
			container.addEventListener('mouseleave', startScrolling);
		}

		if (shouldScroll) {
			startScrolling();
		} else {
			stopScrolling();
		}

		return () => {
			stopScrolling();
			if (pausible) {
				container.removeEventListener('mouseenter', stopScrolling);
				container.removeEventListener('mouseleave', startScrolling);
			}
		};
	}, [shouldScroll, pausible]);

	return containerRef;
};

export default useAutoScroll;
