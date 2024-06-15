import useAutoScroll from '@/lib/hooks/useAutoScroll';
import { ReactNode, useState } from 'react';
import styles from './styles.module.css';

interface AutoscrollContainerProps {
	pausible?: boolean;
	children?: ReactNode[];
}

const AutoscrollContainer = ({
	pausible = true,
	children,
}: AutoscrollContainerProps) => {
	const [isScrolling, setIsScrolling] = useState(true);
	const containerRef = useAutoScroll(isScrolling, pausible);

	return (
		<div
			ref={containerRef}
			className={styles['autoscroll']}
			onMouseEnter={() => pausible && setIsScrolling(false)}
			onMouseLeave={() => pausible && setIsScrolling(true)}
		>
			{children}
		</div>
	);
};

export default AutoscrollContainer;
