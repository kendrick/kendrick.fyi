'use client';

import { email } from '@/lib/data';

import styles from './styles.module.css';
export default function Contact() {
	return (
		<section className={styles.contact} id="contact">
			<h2>Contact me</h2>

			<p>
				Please contact me directly at <a href={`mailto:${email}`}>{email}</a>!
			</p>
		</section>
	);
}
