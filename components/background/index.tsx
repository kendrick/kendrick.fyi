import clsx from 'clsx';
import styles from './styles.module.css';

export default function Background() {
	// const { isDarkMode } = useDarkModeContext();

	return (
		<div className={clsx(styles.background)}>
			<svg
				className={styles.lights}
				xmlns="http://www.w3.org/2000/svg"
				opacity="var(--k-bg-opacity)"
				viewBox="0 0 800 800"
			>
				<defs>
					<filter
						id="a"
						width="400%"
						height="400%"
						x="-100%"
						y="-100%"
						color-interpolation-filters="sRGB"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
					>
						<feGaussianBlur
							width="100%"
							height="100%"
							x="0%"
							y="0%"
							in="SourceGraphic"
							result="blur"
							stdDeviation="102"
						/>
					</filter>
				</defs>
				<g filter="url(#a)">
					<circle
						className={styles.background__one}
						cx="272.929"
						cy="600.828"
						r="150"
						fill="hsl(37, 99%, 67%)"
					/>
					<circle
						className={styles.background__two}
						cx="40%"
						cy="50%"
						r="150"
						fill="hsl(316, 73%, 52%)"
					/>
					<circle
						className={clsx(styles.background__three)}
						cx="552.114"
						cy="236.306"
						r="150"
						fill="hsl(185, 100%, 57%)"
					/>
				</g>
			</svg>
		</div>
	);
}
