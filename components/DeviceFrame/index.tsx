import usePlatform from '@/lib/hooks/usePlatform';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';

import customPropertiesFromVars from '@/lib/customPropertiesFromVars';

interface DeviceFrameProps {
	src: string | StaticImageData;
	alt: string;
	className?: string | CSSModuleClasses;
	deviceType?: 'mobile' | 'desktop';
	title?: string;
	background?: string | number;
	imageVerticalMargin?: string;
	style?: React.CSSProperties;
}

export default function DeviceFrame({
	src,
	alt,
	className,
	deviceType = 'mobile',
	title,
	background,
	imageVerticalMargin,
	style,
}: DeviceFrameProps) {
	const platform = usePlatform();

	const marginTop = imageVerticalMargin;
	const marginBottom = imageVerticalMargin;

	const inlineStyles = customPropertiesFromVars('k-device-frame', style, {
		marginBottom,
		marginTop,
		background,
	});

	return deviceType === 'mobile' ?
			<div
				className={clsx(
					className,
					styles['device'],
					styles['device-iphone-14-pro'],
				)}
			>
				<div
					className={clsx(
						styles['device-frame--mod'],
						styles['device-viewport'],
					)}
					style={inlineStyles}
				>
					<Image
						className={styles['device-screen--mod']}
						src={src}
						alt={alt}
						placeholder="blur"
					/>
					<div className={styles['device-btns']}></div>
				</div>
			</div>
		:	<div
				style={style}
				className={clsx(
					styles['app-frame'],
					platform === 'Mac' ? styles.mac : styles.win,
					styles.scrolling,
					styles.centered,
				)}
				data-title={title}
			>
				<div style={{ padding: 0 }}>
					<Image src={src} alt={alt} placeholder="blur" />
				</div>
			</div>;
}
