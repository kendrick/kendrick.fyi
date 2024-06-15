import clsx from 'clsx';
import React, { ReactElement, ReactNode, cloneElement, useState } from 'react';

import customPropertiesFromVars from '@/lib/customPropertiesFromVars';
import styles from './styles.module.css';

/**
 * Description placeholder
 *
 * @interface FacadeProps
 * @typedef {FacadeProps}
 */
interface FacadeProps {
	/**
	 * Width assigned to both the facade and the embedded content.
	 *
	 * @type {?string}
	 */
	width?: string;
	/**
	 * Height assigned to both the facade and the embedded content.
	 *
	 * @type {?string}
	 */
	height?: string;
	/**
	 * Aspect ratio assigned to both the facade and the embedded
	 * content. Useful when setting only one of width or height
	 * (or neither).
	 *
	 * @type {?string}
	 */
	aspectRatio?: string;
	/**
	 *
	 * @type {?string}
	 */
	className?: string;
	/**
	 * Inline styles to pass to the facade/embed.
	 *
	 * @type {?React.CSSProperties}
	 */
	style?: React.CSSProperties;
	/**
	 * Exactly two children. `children[0]` will be rendered inside a button as
	 * the facade content. `children[1]` will be embedded when the facade
	 * is clicked.
	 *
	 * @type {[ReactNode, ReactNode]}
	 */
	children: [ReactNode, ReactNode];
}

/**
 * Lazy-loads an embed on-demand.after the user interacts with a facade element.
 *
 * @param {FacadeProps} param0
 * @param {string} param0.width
 * @param {string} param0.height
 * @param {string} param0.aspectRatio
 * @param {string} param0.className
 * @param {React.CSSProperties} param0.style
 * @param {[ReactNode, ReactNode]} param0.children
 * @returns {*}
 */
const EmbedFacade = ({
	width,
	height,
	aspectRatio,
	className,
	style,
	children,
}: FacadeProps) => {
	if (React.Children.count(children) !== 2) {
		throw new Error('EmbedFacade requires exactly two children.');
	}

	const [facadeClicked, setFacadeClicked] = useState(false);
	const onThumbnailClick = () => {
		setFacadeClicked(true);
	};

	const inlineStyles = customPropertiesFromVars('k-facade', style, {
		height,
		width,
		aspectRatio,
	});

	const [facadeElement, embedElement] = children;
	const embedClass = styles.embed;

	const embedElementWithClass =
		React.isValidElement(embedElement) ?
			cloneElement(embedElement as ReactElement, {
				className: clsx(embedClass, embedElement.props.className),
			})
		:	embedElement;

	return (
		<div style={inlineStyles} className={clsx(className)}>
			{!facadeClicked ?
				<button className={styles.facade} onClick={onThumbnailClick}>
					{facadeElement}
				</button>
			:	<>{embedElementWithClass}</>}
		</div>
	);
};
export default EmbedFacade;
