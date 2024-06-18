import customPropertiesFromVars from '@/lib/customPropertiesFromVars';
import clsx from 'clsx';
import React, { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
	children: ReactNode;
	citationURL: URL;
	className?: string | CSSModuleClasses;
	style?: CSSProperties;
	space?: string;
}

interface CustomProps extends React.HTMLAttributes<HTMLDivElement> {
	'data-type': 'content' | 'description';
}

interface TestimonialChildProps {
	type: 'testimonial' | 'attribution';
	children: React.ReactNode;
}

const Testimonial = ({
	children,
	citationURL,
	className,
	style,
	space,
}: Props) => {
	const inlineStyle = customPropertiesFromVars('k-testimonial', style, {
		space,
	});

	const kids = React.Children.toArray(children).filter((kid) =>
		React.isValidElement<TestimonialChildProps | TestimonialChildProps>(kid),
	);

	const testimonialElements = kids.filter((child) => {
		if (React.isValidElement<TestimonialChildProps>(child)) {
			return child.props.type === 'testimonial';
		}

		return false;
	});

	const attributionElements = kids.filter((child) => {
		if (React.isValidElement<TestimonialChildProps>(child)) {
			return child.props.type === 'attribution';
		}

		return false;
	});

	return (
		<figure
			style={inlineStyle}
			className={clsx([styles.testimonial, className])}
		>
			<blockquote cite={citationURL.toString()}>
				{testimonialElements}
			</blockquote>
			<figcaption>
				<a href={citationURL.toString()}>{attributionElements}</a>
			</figcaption>
		</figure>
	);
};

export default Testimonial;
