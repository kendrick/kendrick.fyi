import About from '@/components/about';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
	return (
		<main>
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<h2>Key Achievements</h2>
			<Skills />
			<h2>Testimonials</h2>
			<h2>Contact</h2>
			{/* <Experience /> */}
			{/* <Contact /> */}
		</main>
	);
}
