import About from '@/components/about';
import Contact from '@/components/contact';
import Intro from '@/components/intro/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import Testimonials from '@/components/testimonials';

import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<Skills />
			<Testimonials />
			<Contact />
		</main>
	);
}
