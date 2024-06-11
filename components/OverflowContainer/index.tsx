import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

interface OverflowContainerProps {
	src: string | StaticImageData;
	alt: string;
	containerWidth: number;
	containerHeight: number;
	style?: React.CSSProperties;
}

const OverflowContainer: React.FC<OverflowContainerProps> = ({
	src,
	alt,
	containerWidth,
	containerHeight,
	style,
}) => {
	const [isBottom, setIsBottom] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (containerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
			setIsBottom(scrollTop + clientHeight >= scrollHeight);
		}
	};

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.addEventListener('scroll', handleScroll);
			return () => {
				container.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);

	const propsToCSSVars: React.CSSProperties = {
		...(containerHeight && {
			'--k-overflow-container-height': containerHeight,
		}),
		...(containerWidth && { '--k-overflow-container-width': containerWidth }),
	};

	const inlineStyles = {
		...propsToCSSVars,
		...style,
	};

	return (
		<div className={styles.scrollContainer} ref={containerRef} style={style}>
			<div className={styles.imageWrapper}>
				<Image
					src={src}
					alt={alt}
					width={containerWidth}
					height={containerHeight}
					layout="responsive"
				/>
			</div>
			<div className={`${styles.gradient} ${isBottom ? styles.hidden : ''}`} />
		</div>
	);
};

export default OverflowContainer;
