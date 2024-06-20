// components/Testimonial.tsx
import React from 'react';

interface TestimonialProps {
	recUrl: string;
	quote: React.ReactNode;
	attribution: React.ReactNode;
}

const Testimonial = ({ recUrl, quote, attribution }: TestimonialProps) => {
	return (
		<figure>
			<blockquote cite={recUrl}>{quote}</blockquote>
			<figcaption>
				<a href={recUrl}>{attribution}</a>
			</figcaption>
		</figure>
	);
};

export default Testimonial;
