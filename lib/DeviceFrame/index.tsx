import usePlatform from '@/lib/hooks/usePlatform';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';

import customPropertiesFromVars from '@/lib/customPropertiesFromVars';
import { imageSizes } from '@/lib/utils';

interface DeviceFrameProps {
	src: StaticImageData;
	alt: string;
	className?: string | CSSModuleClasses;
	deviceType?: 'mobile' | 'desktop';
	isDarkMode?: boolean;
	title?: string;
	background?: string | number;
	imageVerticalMargin?: string;
	minWidth?: string;
	maxWidth?: string;
	style?: React.CSSProperties;
}

export default function DeviceFrame({
	src,
	alt,
	className,
	deviceType = 'mobile',
	isDarkMode = false,
	title,
	background,
	imageVerticalMargin,
	minWidth,
	maxWidth,
	style,
}: DeviceFrameProps) {
	const platform = usePlatform();

	const marginTop = imageVerticalMargin;
	const marginBottom = imageVerticalMargin;

	const inlineStyles = customPropertiesFromVars('k-device-frame', style, {
		marginBottom,
		marginTop,
		background,
		minWidth,
		maxWidth,
	});

	return deviceType === 'mobile' ?
			<div
				className={clsx(className, styles['device'], styles['device--mobile'])}
			>
				<div
					className={clsx(
						styles['device--mobile__frame'],
						styles['device--mobile__viewport'],
					)}
					style={inlineStyles}
				>
					<Image
						className={styles['device--mobile__screen']}
						src={src}
						alt={alt}
						placeholder="blur"
						sizes={imageSizes}
					/>
				</div>
			</div>
		:	<div
				style={style}
				className={clsx(
					className,
					styles['device--desktop'],
					styles['app-frame'],
					isDarkMode ? styles.dark : null,
					platform === 'Mac' ? styles.mac : styles.win,
					styles.scrolling,
					styles.centered,
				)}
				data-title={title}
			>
				<div style={{ padding: 0 }}>
					<Image src={src} alt={alt} placeholder="blur" sizes={imageSizes} />
				</div>
			</div>;
}
