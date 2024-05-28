'use client';

import { useSectionInView } from '@/lib/hooks';

export default function Testimonials() {
	const { ref } = useSectionInView('Testimonials');

	return (
		<section id="testimonials" ref={ref}>
			<h2>Testimonials</h2>
			<ul>
				<li>One</li>
				<li>Two</li>
				<li>Three</li>
			</ul>
		</section>
	);
}
