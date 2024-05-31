'use client';

import { useSectionInView } from '@/lib/hooks';
// import { sendEmail } from '@/actions/sendEmail';
import styles from './styles.module.css';
export default function Contact() {
	// ADD THIS BACK if Contact is included in data!
	const { ref } = useSectionInView('Contact');

	return (
		<section
			className={styles.contact}
			id="contact"
			// ref={ref}
			// initial={{
			// 	opacity: 0,
			// }}
			// whileInView={{
			// 	opacity: 1,
			// }}
			// transition={{
			// 	duration: 1,
			// }}
			// viewport={{
			// 	once: true,
			// }}
		>
			<h2>Contact me</h2>

			<p>
				Please contact me directly at{' '}
				<a href="mailto:hello@kendrick.fyi">hello@kendrick.fyi</a>!
			</p>

			{/* <form
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}

					toast.success('Email sent successfully!');
				}}
			>
				<input
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					placeholder="Your email"
				/>
				<textarea
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
				/>
				<SubmitBtn />
			</form> */}
		</section>
	);
}
