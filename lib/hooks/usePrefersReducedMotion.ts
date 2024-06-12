const reducedMotionMediaQuery = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
	// For our initial server render, we won't know if the user
	// prefers reduced motion, but it doesn't matter. This value
	// will be overwritten on the client, before any animations
	// occur.
	return isRenderingOnServer ? true : (
			!window.matchMedia(reducedMotionMediaQuery).matches
		);
};
function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] =
		React.useState(getInitialState);
	React.useEffect(() => {
		const mediaQueryList = window.matchMedia(reducedMotionMediaQuery);

		const listener = (event: MediaQueryListEvent) => {
			setPrefersReducedMotion(!event.matches);
		};

		if (mediaQueryList.addEventListener) {
			mediaQueryList.addEventListener('change', listener);
		}

		return () => {
			if (mediaQueryList.removeEventListener) {
				mediaQueryList.removeEventListener('change', listener);
			}
		};
	}, []);

	return prefersReducedMotion;
}
