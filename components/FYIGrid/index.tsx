import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { useRef, useState } from 'react';

import NextJsImage from '@/lib/NextJsImage';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import Grid from '../layout/Grid';
import styles from './styles.module.css';

interface FYIGridProps {
	images: { src: StaticImageData; alt: string; caption?: string }[];
	imgSizes?: string;
	itemWidth?: string;
	caption?: string;
	className?: string;
	space?: string;
	style?: React.CSSProperties;
}

export default function FYIGrid({
	images,
	imgSizes = '(max-width: 320px) 320px, (max-width: 576px) 576px, (max-width: 768px) 768px, (max-width: 992px) 992px, (max-width: 1200px) 1200px, (max-width: 1400px) 1400px, (min-width: 1401px) 1920px',
	itemWidth = '96px',
	caption,
	className,
	space,
	style,
}: FYIGridProps) {
	const [open, setOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const zoomRef = useRef(null);

	const getSrc = (src: StaticImageData | string): string => {
		return typeof src === 'string' ? src : src.src;
	};

	const propsToCSSVars: React.CSSProperties = {
		...(itemWidth && { '--k-grid-item-width': itemWidth }),
		...(space && { '--k-grid-space': space }),
	};

	const inlineStyles = {
		...propsToCSSVars,
		...style,
	};
	const showPrevNext = images.length > 1;
	return (
		<figure className={clsx(styles.figure, className)} style={inlineStyles}>
			<Grid space={space} itemWidth={itemWidth}>
				{images.map((image, index) => (
					<button
						key={index}
						style={{ position: 'relative' }}
						onClick={() => {
							setOpen(true);
							setCurrentIndex(index);
						}}
					>
						<Image
							src={image.src}
							alt={image.alt}
							width={0}
							height={0}
							sizes={imgSizes}
							style={{ width: '100%', height: 'auto' }}
							placeholder="blur"
						/>
					</button>
				))}
			</Grid>
			<figcaption>{caption}</figcaption>
			<Lightbox
				open={open}
				plugins={[Zoom, Captions]}
				zoom={{ ref: zoomRef }}
				animation={{ zoom: 250 }}
				close={() => setOpen(false)}
				carousel={{ finite: true, preload: 1 }}
				controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
				slides={images.map((slide) => {
					return { src: getSrc(slide.src), alt: slide.alt };
				})}
				render={{
					slide: NextJsImage,
					buttonPrev: showPrevNext ? undefined : () => null,
					buttonNext: showPrevNext ? undefined : () => null,
				}}
				index={currentIndex}
			/>
		</figure>
	);
}
